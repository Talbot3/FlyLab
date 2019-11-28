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
    let listLength = list.length;
    console.log('length', listLength, list);
    let contentWidth = outerWidth * listLength;
    marquee.setAttribute(
        'style',
        `width:${outerWidth}px;height:${outerHeight}px`
    );

    content.setAttribute(
        'style',
        `width:${contentWidth}px;height:${outerHeight}px`
    );
    for (let item of list) {
        item.setAttribute(
            'style',
            `width:${outerWidth}px;height:${outerHeight}px`
        );    
    }
}