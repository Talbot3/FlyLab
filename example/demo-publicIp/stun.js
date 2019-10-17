'use strict';

const stun = require('stun');

const {
  STUN_BINDING_REQUEST,
  STUN_ATTR_XOR_MAPPED_ADDRESS,
  STUN_EVENT_BINDING_RESPONSE,
} = stun.constants;

const server = stun.createServer();
const request = stun.createMessage(STUN_BINDING_REQUEST);

server.once(STUN_EVENT_BINDING_RESPONSE, stunMsg => {
  let ip = stunMsg.getAttribute(STUN_ATTR_XOR_MAPPED_ADDRESS).value.address;
  console.log(
    'your ip:',
    ip
  );

  
  server.close();
});

server.send(request, 3478, 'webcs.agora.io');