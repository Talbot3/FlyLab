var context, dialogs, digest, makeDialogId, randomBytes, rbytes, regcontext, sip, util;

sip = require('sip');

digest = require('sip/digest');

const randomBytest = require('randombytes');
rbytes  = (n) => randomBytest(n).toString('hex');


util = require('util');

dialogs = {};

makeDialogId = function(rq, tag) {
  return [rq.headers['call-id'], rq.headers.from.params.tag, rq.headers.to.params.tag || tag].join();
};

context = {
  realm: 'test',
  qop: 'auth-int'
};

regcontext = {
  realm: 'test'
};

sip.start({
  logger: {
    send: function(rq) {
      return console.log("send\n" + util.inspect(rq, null, null));
    },
    recv: function(rq) {
      return console.log("recv\n" + util.inspect(rq, null, null));
    }
  },
  port: 5080
}, function(rq) {
  var e, rs, tag;
  try {
    if (rq.method !== 'REGISTER' && rq.headers.to.params.tag) {
      return (dialogs[makeDialogId(rq)] || function(rq) {
        return sip.send(sip.makeResponse(rq, 581));
      })(rq);
    } else {
      switch (rq.method) {
        case 'REGISTER':
          if (!digest.authenticateRequest(regcontext, rq, {
            user: '34020000001320000001',
            password: '987987'
          })) {
            return sip.send(digest.challenge(regcontext, sip.makeResponse(rq, 401, 'Authorization Required')));
          } else {
            rs = sip.makeResponse(rq, 200);
            rs.headers.to.tag = rbytes(16);
            return sip.send(digest.signResponse(regcontext, rs));
          }
          break;
        case 'MESSAGE':
            rs = sip.makeResponse(rq, 200);
            rs.headers.to.tag = rbytes(16);
            return sip.send(digest.signResponse(regcontext, rs));
          break;
        case 'INVITE':
          if (!digest.authenticateRequest(context, rq, {
            user: '34020000001320000001',
            password: '987987'
          })) {
            return sip.send(digest.challenge(context, sip.makeResponse(rq, 401, 'Authorization Required')));
          } else {
            tag = rbytes(16);
            dialogs[makeDialogId(rq, tag)] = function(rq) {
              var e;
              try {
                if (digest.authenticateRequest(context, rq)) {
                  return sip.send(digest.challenge(context, sip.makeResponse(rq, 401, 'Authorization Required')));
                } else {
                  switch (rq.method) {
                    case 'BYE':
                      sip.send(digest.signResponse(context, sip.makeResponse(rq, 200)));
                      return delete dialogs[makeDialogId(rq, tag)];
                    default:
                      return sip.send(digest.signResponse(context, sip.makeResponse(rq, 400)));
                  }
                }
              } catch (error) {
                e = error;
                return util.debug(e);
              }
            };
            rs = sip.makeResponse(rq, 200, 'OK');
            rs.content = 'v=0\no=sip 28908764872 28908764872 IN IP4 127.0.0.1\ns=-\nc=IN IP4 127.0.0.1\nt=0 0\nm=audio 0 RTP/AVP 0 8\na=rtpmap:0 PCMU/8000\na=rtpmap:8 PCMA/8000\na=sendonly';
            rs.headers['content-length'] = rs.content.length;
            rs.headers.to.params.tag = tag;
            return sip.send(digest.signResponse(context, rs));
          }
          break;
        default:
          // return sip.send(sip.makeResponse(rq, 400));
      }
    }
  } catch (error) {
    e = error;
    util.debug(e);
    return util.debug(e.stack);
  }
});
