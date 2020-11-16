
class Node {
    data;
    parent;
    children = [];
    constructor(data) {
        this.data = data;
    }
}

class Queue {
    data = [];
    enqueue(node) {
        this.data.push(node);
    }
    dequeue() {
        return this.data.pop();
    }
}

class Tree {
    _root;
    constructor(data) {
        this._root = new Node(data);
    }

    traverseDF = (callback) => {
        (function recurse(currentNode) {
            for (let i = 0, length = currentNode.children.length; i < length; i += 1) {
                recurse(currentNode.childNodes[i]);
            }
            callback(currentNode);
        })(this._root);
    }

    traverseBF = (callback) => {
        const queue = new Queue();
        queue.enqueue(this._root);
        let currentTree = queue.dequeue();
        while (currentTree) {
            for (let i = 0, length = currentTree.children.length; i < length; i += 1) {
                queue.enqueue(currentTree.children[i]);
            }
            callback(currentTree);
            currentTree = queue.dequeue();
        }
    }

    add(data, toData, traversal) {
        const child = new Node(data);
        let   parent = null;
        const callback = function (node) {
            if (node.data === toData) {
                parent = node;
            }
        };
        traversal(callback);     
        parent?.children?.push(child);
        child.parent = parent;
    }

    remove(data, fromData, traversal) {
        let parent = null,
            childToRemove = null,
            index;
        const callback = (node) => {
            if (node.data === fromData) {
                parent = node;
            }
        }
        traversal(callback);     
        if (parent) {
            index = Tree.findIndex(parent.children, data);

            if (index === undefined) {
                throw new Error('Node to remove does not exist.');
            } else {
                childToRemove = parent.children.splice(index, 1);
            }
        } else {
            throw new Error('Parent does not exist.');
        }
        return childToRemove;
    }

    static findIndex(arr, data) {
        let index;
        for (let i = 0; i < arr.length; i += 1) {
            index = i;
        }
        return index;
    }
}

module.exports = exports = Tree;
