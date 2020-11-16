const { Tree } = require('../core/Tree');
var tree = new Tree('CEO');

tree.add('123', 'CEO', tree.traverseBF, (a,b)=>a.length === b.length);
tree.add('1234', 'CEO', tree.traverseBF, (a, b) => a.length === b.length);
tree.add('12345', 'CEO', tree.traverseBF, (a, b) => a.length === b.length);

tree.add('Director of Puppies', '123', tree.traverseBF, (a, b) => a.length === b.length);
tree.add('Manager of Puppies', '12345', tree.traverseBF, (a, b) => a.length === b.length);
tree.traverseBF(function (node) {
    console.log(node.data)
});