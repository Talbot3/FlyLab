const {withDiff, isDiffNode} = require('diffy-update');

let source = {
    name:  {
        firstName: 'Navy',
        lastName: 'wong'
    }
}

let [target, diff] = withDiff(source, {name: {firstName: {$set: 'Petty'}}});

console.log(target, diff);

console.log(isDiffNode(diff.name.firstName));