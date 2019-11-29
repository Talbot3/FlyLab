window.addEventListener('load', (event)=> {
    console.log('page is fully loaded');
});

window.onload= (event)=> {
    console.log('page is fully loaded');
    let marquee = document.querySelector('.marquee');
    let content = document.querySelector('.content');
    let leftButton = document.querySelector('#left');
    let rightButton = document.querySelector('#right');
    let list= document.querySelectorAll('.list');
    let outerWidth = 600;
    let outerHeight = 400;
    let speed = 3;
    let transitionTime = 1;
    let initIndex = 0;
    let listLength = list.length;
    console.log('length', listLength, list);
    let contentWidth = outerWidth * listLength;
    marquee.setAttribute(
        'style',
        `width:${outerWidth}px;height:${outerHeight}px`
    );
    content.setAttribute(
        'style',
        `width:${contentWidth}px;height:${outerHeight}px;`
    );
    for (let item of list) {
        item.setAttribute(
            'style',
            `width:${outerWidth}px;height:${outerHeight}px`
        );    
    }

    let eleClone = list[0].cloneNode(true);
    content.appendChild(eleClone);
    let setTimeId;
    let auto = ()=> {
        setTimeId = setInterval(() => {
            ++initIndex;
            content.setAttribute('style', `transition: transform ${transitionTime}s ease;transform: translateX(-${outerWidth*initIndex}px)`);
            initIndex === listLength? initIndex = 0: '';
        }, speed* 1000);
    }

    // auto();
    content.addEventListener('transitionend', ()=> {
        content.setAttribute('style', `transition: none;transform: translateX(-${outerWidth*initIndex}px)`)
    });

    let leftClick = () => {
        initIndex--;
        content.setAttribute('style', `transition: transform ${transitionTime}s ease;transform: translateX(-${outerWidth*initIndex}px)`);
        initIndex === 0? initIndex = listLength: '';
    };

    let rightClick = () => {
        initIndex++;
        content.setAttribute('style', `transition: transform ${transitionTime}s ease;transform: translateX(-${outerWidth*initIndex}px)`);
        initIndex === listLength? initIndex = 0: '';
    };

    leftButton.addEventListener('mouseenter', ()=> {
        console.log('mouseenter');
        if (initIndex === 0) {
            initIndex = listLength;
            content.setAttribute('style', `transition: none;transform: translateX(-${outerWidth*initIndex}px)`);
        }
    });
    rightButton.addEventListener('mouseenter', ()=> {
        console.log('mouseenter');
        if (initIndex === listLength) {
            initIndex = 0;
            content.setAttribute('style', `transition: none;transform: translateX(-${outerWidth*initIndex}px)`);
        }
    });
    leftButton.onclick = leftClick;
    rightButton.onclick = rightClick;

}

