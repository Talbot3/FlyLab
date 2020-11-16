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



/**
 * 
 * @param {*} _xml -- example
 * <item>content1</item> ==>> ["<item>", "content1", "</item>"]
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
    } else if (worldItem){
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


function xml2json(_xml) {
    let stack = xml2json.stack;
    let curNode = stack;
    let preNode = stack;
    let xml = _xml.split('\n').join("").replace(/\s/g, '');
    let tokens = tokenize(xml);
    console.log(tokens);
    for (let {source, type, name} of tokens) {
        switch (type) {
            case 'openItem': {
                let node = {
                    tag: name,
                    children: []
                };
                if (!curNode) {
                    curNode= node;
                } else {
                    console.log(curNode);
                    if (Array.isArray(curNode.children)) {
                        curNode.children.push(node);
                    }
                    preNode = curNode;
                    curNode = node;
                }
              break;
            }
            case 'worldItem': {
                curNode.children = name;
                break;
            }
            case 'closeItem': {
                // 返回父标签
                curNode = preNode;
                break;
            }
        }
    }
    // TODO: your code here
    console.log(stack)
    return curNode;
}
xml2json.stack;
let result = xml2json(xml)
console.log(result);
// console: true
// console.log(JSON.stringify(xml2json(xml)) === JSON.stringify(json))