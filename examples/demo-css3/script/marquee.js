window.addEventListener('load', (event)=> {
    console.log('page is fully loaded');
});

window.onload= (event)=> {
    console.log('page is fully loaded');
    let marquee = document.querySelector('.marquee');
    let content = document.querySelector('.content');
    let list= document.querySelectorAll('.list');
    let outerWidth = 600;
    let outerHeight = 400;
    let speed = 3;
    let listLength = list.length;
    console.log('length', listLength, list);
    let contentWidth = outerWidth * listLength;
    marquee.setAttribute(
        'style',
        `width:${outerWidth}px;height:${outerHeight}px`
    );
    content.setAttribute(
        'style',
        `width:${contentWidth}px;height:${outerHeight}px;animation: run ${speed*listLength}s linear infinite`
    );
    for (let item of list) {
        item.setAttribute(
            'style',
            `width:${outerWidth}px;height:${outerHeight}px`
        );    
    }
    var css = `
        @keyframes run {
            100% {
                transform: translateX(-${contentWidth}px);
            }
        }
    `;
    var head = document.head || Documedocumentnt.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
    let eleClone = list[0].cloneNode(true);
    content.appendChild(eleClone);
}