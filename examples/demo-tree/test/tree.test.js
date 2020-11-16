const Tree = require('../core/Tree');
var tree = new Tree('CEO');

tree.add('VP of Happiness', 'CEO', tree.traverseBF);
tree.add('VP of Finance', 'CEO', tree.traverseBF);
// tree.add('VP of Sadness', 'CEO', tree.traverseBF);

// tree.add('Director of Puppies', 'VP of Finance', tree.traverseBF);
// tree.add('Manager of Puppies', 'Director of Puppies', tree.traverseBF);
tree.traverseBF(function (node) {
    console.log(node.data)
});