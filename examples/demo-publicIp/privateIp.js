const os = require('os');
let networkInterfaces = os.networkInterfaces();
// gets the external IPv4 address
let addresses = [];
Object.keys(networkInterfaces).forEach(interfaceName => {
  let networkInterfaceAddresses = networkInterfaces[interfaceName];
  networkInterfaceAddresses
    .filter(address => address.family === 'IPv4' && !address.internal)
    .map(address => address.address)
    .forEach(address => {
      addresses.push(address);
    });
});
console.log(addresses.pop());