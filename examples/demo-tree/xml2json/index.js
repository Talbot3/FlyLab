// 原始 xml
const xml = `
<list>
  <item>content1</item>
  <item>content2</item>
  <item>content3</item>
  <item>
    <name>hema</name>
    <value>frontend</value>
  </item>
</list>
`

// 目标 json
const json = {
    tag: 'list',
    children: [
        {
            tag: 'item',
            children: 'content1'
        },
        {
            tag: 'item',
            children: 'content2'
        },
        {
            tag: 'item',
            children: 'content3'
        },
        {
            tag: 'item',
            children: [
                {
                    tag: 'name',
                    children: 'hema'
                },
                {
                    tag: 'value',
                    children: 'frontend'
                }
            ]
        }
    ]
}

const {Tree, Node} = require('../core/Tree');

/**
 * 
 * @param {*} _xml -- example
 * <item>content1</item> ==>> { source: 'frontend', type: 'worldItem', name: 'frontend' }
 */
function tokenize(_xml) {
    const { stack }= tokenize;
    let xml = _xml.split('\n').join("").replace(/\s/g, '');
    // 判断开头的类型，进行截断
    let openItemMacher = /(?<=(^<))([a-zA-Z]*)(?=(>))/g;
    let closeItemMacher = /(?<=(^<\/))([a-zA-Z]*)(?=(>))/g;
    let wordItemMacher = /^\w{1,}/g;
    // 截断并推进stack
    let openItem = xml.match(openItemMacher);
    let closeItem = xml.match(closeItemMacher);
    let worldItem = xml.match(wordItemMacher);
    let nextXml;
    if (openItem) {
        stack.push({
            source: `<${openItem}>`,
            type: 'openItem',
            name: openItem[0]
        });
        nextXml = xml.replace(new RegExp(`<${openItem}>`), '');
    } else if (closeItem) {
        stack.push({
            source: `</${closeItem}>`,
            type: 'closeItem',
            name: closeItem[0],
        });
        nextXml = xml.replace(new RegExp(`</${closeItem}>`), '');
    } else if (worldItem) {
        stack.push({
            source: `${worldItem}`,
            type: 'worldItem',
            name: worldItem[0]
        });
        nextXml = xml.replace(new RegExp(`${worldItem}`), '');
    } else {
        return stack;
    }
    tokenize(nextXml);
    return stack
}
tokenize.stack = [];

/**
 * @description 构建Dom树
 * @param {*} tokenize 
 */
function buildDomTree(tokenize,root) {
    let curNode = root.rootNode;
    for (let { source, type, name } of tokenize) {
        switch (type) {
            case 'openItem': {
                let node = {
                    tag: name,
                    children: []
                };
                if (!curNode.data || curNode.data.length) {
                    curNode.data = node;
                } else {
                    // 创建子节点
                    let treeNode = new Node(node);
                    treeNode.parent = curNode;
                    root.add(treeNode, curNode, root.traverseBF, (dataA, dataB)=>(dataA.tag === dataB.tag));
                    curNode.data.children.push(node);
                    curNode?.children.push(treeNode);
                    curNode = treeNode;
                }
                break;
            }
            case 'worldItem': {
                curNode.data.children = name;
                break;
            }
            case 'closeItem': {
                // 返回父标签
                if (curNode.parent) {  
                    curNode = curNode.parent;
                }
                if (curNode == null) {
                    // root 标签
                    console.log('执行到达root');
                    curNode = root.rootNode.children;
                }
                break;
            }
        }
    }
    return root;
}

function xml2json(_xml) {
    // TODO: your code here
    let xml = _xml.split('\n').join("").replace(/\s/g, '');
    let tokens = tokenize(xml);
    const tree = new Tree();
    let domTree = buildDomTree(tokens, tree);
    return domTree.rootNode.data;
}
// console: true
console.log(JSON.stringify(xml2json(xml)) === JSON.stringify(json))


/**
 *
 * @param {String} xml
 * <item>content1</item> ==>> { tag: 'item', children: 'content1'}
 */
// function parseItem(_xml) {
//     let itemStack = [];
//     let Item = {
//         tag: '',
//         // 不存在子标签，即为标签内容
//         children: []
//     };
//     // 过虑掉\n和空格
//     let xml = _xml.split('\n').join("").replace(/\s/g,'');
//     console.log(xml);
//     let itemStartMacher = /(?<=(<))([a-zA-Z]*)(?=(>))/g;
//     let itemEndMacher = /(?<=(<\/))([a-zA-Z]*)(?=(>))/g;
//     let itemChildrenMacher = /(?<=(<\w*>))[a-zA-Z]*\S(?=(<\/\w*>))/g;
//     let itemStarter = xml.match(itemStartMacher);
//     let itemEnd = xml.match(itemEndMacher);
//     let content = xml.match(itemChildrenMacher);
//     const curItem = Object.assign(Item);
//     // curItem.tag = itemStarter[0];
//     console.log(itemStarter);
//     console.log(content);
//     if (!itemChildrenMacher.test(content[0])) {
//         let children = parseItem(content[0].trim());
//         curItem.children = children;
//         console.log("push Item -> ", curItem);
//         itemStack.push(curItem);
//     } else {
//         curItem.children = content;
//         return curItem;
//     }
// }
