
/**
 * Subject 中的参数，需要先查询设备，获取设备ID(line 97)
 */

const MSS = require('./ms');
const EventEmitter = require('events');
const event = new EventEmitter();
var context, dialogs, digest, makeDialogId, randomBytes, rbytes, regcontext, sip, util;
let mss;
sip = require('sip');

digest = require('sip/digest');

const randomBytest = require('randombytes');
rbytes  = (n) => randomBytest(n).toString('hex');

let localIp='192.168.17.197';
let clientIp='192.168.41.110'
let password = '9090';

util = require('util');
const Session = require('krtp').Session

dialogs = {};

let isInit = false;
makeDialogId = function(rq, tag) {
  return [rq.headers['call-id'], rq.headers.from.params.tag, rq.headers.to.params.tag || tag].join();
};

function rstring() { return Math.floor(Math.random()*1e6).toString(); }

context = {
  realm: '3402000000',
  qop: 'auth-int'
};

regcontext = {
  realm: '3402000000'
};

let isRegisterd = false;

const makeRegister = ()=> {
  if (isRegisterd) {
    return makeCall();
  }
  const uri = "sip:34020000002000000001@192.168.38.175:5060";
  const uri2 = "sip:34020000001320000001@192.168.41.110:5060";
  let registerObj = {
    method: 'REGISTER',
    uri: uri2,
    headers: {
      to: {uri},
      from: {uri, params: {tag: rstring()}},
      'call-id': rstring(),
      cseq: {method: 'INVITE', seq: Math.floor(Math.random() * 1e5)},
      'content-type': 'application/sdp',
      contact: [{uri}]
      // if your call doesnt get in-dialog request, maybe os.hostname() isn't resolving in your ip address
    }
  };
  // sending REGISTER
  sip.send(registerObj);
  console.log('=========================================Server REGISTER====================================');
  isRegisterd = true;
  return;
}


const makeCall = ()=> {
  const uri = `sip:34020000001320000001@${clientIp}:5060`;
  const sdp =  'v=0\r\n'+
  `o=34020000001320000001 0 0 IN IP4 ${localIp}\r\n`+
  's=Play\r\n'+
  `c=IN IP4 ${localIp}\r\n`+
  't=0 0\r\n'+
  'm=video 9724 RTP/AVP 96 97 98\r\n'+
  'a=rtpmap:96 PS/90000\r\n'+
  'a=rtpmap:97 H264/90000\r\n'+
  'a=rtpmap:98 MPEG4/90000\r\n'+
  'a=recvonly\r\n'+
  'y=0100000000\r\n'+
  'f=v/1/5/30/2/512 a/0/0/0';
  sip.send({
    method: 'INVITE',
    uri,
    headers: {
      to: uri,
      from: {uri: 'sip:34020000002000000001@3402000000', params: {tag: rstring()}},
      'call-id': rstring(),
      cseq: {method: 'INVITE', seq: 20 },
      'content-type': 'Application/SDP',
      'Server': 'NCG V2.6.3.477777',
      contact: [{uri: `sip:0000042001000001@${localIp}:5060`}],
      Subject: "34020000001320000001:1,34020000002000000001:1"
      // if your call doesnt get in-dialog request, maybe os.hostname() isn't resolving in your ip address
    },
    content:sdp
  },
  function(rs) {
    if(rs.status >= 300) {
      console.log('call failed with status ' + rs.status);  
    }
    else if(rs.status < 200) {
      console.log('call progress status ' + rs.status);
    }
    else {
      // yes we can get multiple 2xx response with different tags
      console.log('call answered with tag ' + rs.headers.to.params.tag);
      console.log('=========================call answered with sdp=========================' + rs.content);
      let portExp = /video ([0-9]+)/;
      let [,port,]= portExp.exec(rs.content);
      if (port && !isInit) {
        isInit = true;
        const s = new Session(9724);
        s.ssrc = '100000000';
        console.log('ssrc=========================', s.ssrc);
        console.log('========================================port: ', port);
        s.on('message', (msg) => {
          console.log(`=========================================================where are you`, msg)
          // s.close()
          s.sendSR(clientIp).catch(err => {
            console.log('====================ERROR WITH RTP=====================================',err);
          });
        });
        s.port = Number(port);
        s.sendSR(clientIp).catch(err => {
          console.log('====================ERROR WITH RTP=====================================',err);
        });
        // s.send(Buffer.from('Hello world'))
      }

      // sending ACK
      console.log('============================ Send ACK =============================');
      sip.send({
        method: 'ACK',
        uri: rs.headers.contact[0].uri,
        headers: {
          to: rs.headers.to,
          from: rs.headers.from,
          'call-id': rs.headers['call-id'],
          cseq: {method: 'ACK', seq: rs.headers.cseq.seq},
          via: []
        }
      });
      var id = [rs.headers['call-id'], rs.headers.from.params.tag, rs.headers.to.params.tag].join(':');
  
      // registring our 'dialog' which is just function to process in-dialog requests
      if(!dialogs[id]) {
        dialogs[id] = function(rq) {
          if(rq.method === 'BYE') {
            console.log('call received bye');
            delete dialogs[id];
            sip.send(sip.makeResponse(rq, 200, 'OK'));
          }
          else {
            sip.send(sip.makeResponse(rq, 405, 'Method not allowed'));
          }
        }
      }
    }
  });
}

/**
 * MESSAGE sip:34020000001320000001@192.168.41.110:5060 SIP/2.0
 * To: <sip:34020000001320000001@192.168.41.110:5060>
 * Content-Length: 123
 * CSeq: 2 MESSAGE
 * Call-ID: 124952471
 * Via: SIP/2.0/UDP 0.0.0.0:5080;rport;branch=z9hG4bK3420269424
 * From: <sip:0000042001000001@0.0.0.0:5080>;tag=500480202
 * Content-Type: Application/MANSCDP+xml
 * Max-Forwards: 70

 * <?xml version="1.0"?>
 * <Query>
 * <CmdType>Catalog</CmdType>
 * <SN>12246</SN>
 * <DeviceID>34020000001320000001</DeviceID>
 * </Query>
 */
const makeDevice = () => {
  console.log("================================================================");
  const uri = `sip:34020000001320000001@${clientIp}:5060`;
  sip.send({
    method: 'MESSAGE',
    uri,
    headers: {
      to: uri,
      from: {uri: 'sip:34020000002000000001@$3402000000:5060', params: {tag: rstring()}},
      'call-id': rstring(),
      cseq: {method: 'MESSAGE', seq: 2020},
      contact: [{uri: `sip:0000042001000001@${localIp}:5060`}],
      'content-type': 'Application/MANSCDP+xml',
      'Server': 'NCG V2.6.3.477777'
    },
    content: 
    '<?xml version="1.0"?>\n<Query>\n<CmdType>Catalog</CmdType>\n<SN>10809</SN>\n<DeviceID>34020000001320000001</DeviceID>\n</Query>\n'
  }, (res)=> {
    // console.log(`request device list `,JSON.stringify(res));
  });
}

event.on('clientRegister', ()=>{
  makeCall();
  // return makeCall();
});

event.on('fine', ()=> {
  setInterval(() => {
    makeDevice();
  }, 6000);
});

sip.start({
  logger: {
    send: function(rq) {
      return console.log("send\n" + util.inspect(rq, null, null));
    },
    recv: function(rq) {
      return console.log("recv\n" + util.inspect(rq, null, null));
    }
  },
  udp: true,
  port: 5060
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
            password
          })) {
            return sip.send(digest.challenge(regcontext, sip.makeResponse(rq, 401, 'Authorization Required')));
          } else {
            rs = sip.makeResponse(rq, 200);
            rs.headers.to.tag = rbytes(16);
            sip.send(digest.signResponse(regcontext, rs));
            event.emit('clientRegister');
            event.emit('fine');
          }
          break;
        case 'MESSAGE':
            rs = sip.makeResponse(rq, 200);
            rs.headers.to.tag = rbytes(16);
            sip.send(sip.makeResponse(rq, 200, 'OK'));
          break;
        case 'INVITE':
          if (!digest.authenticateRequest(context, rq, {
            user: '34020000001320000001',
            password
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
        case 'ACK': 

          break;
        case 'Status':
          console.log('=====================Status2======================');
          console.dir(rq);
          console.log('=====================Status======================');
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