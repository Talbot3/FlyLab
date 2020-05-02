const casbin = require('casbin');

const sub = 'alice'; // the user that wants to access a resource.
const obj = 'data1'; // the resource that is going to be accessed.
const act = 'read'; // the operation that the user performs on the resource.
(async ()=>{
  const enforcer = await casbin.newEnforcer('./model.conf', './police.csv');
  const res = await enforcer.enforce(sub, obj, act);
  console.log(res);
})()

