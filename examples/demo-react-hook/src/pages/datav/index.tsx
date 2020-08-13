import React from 'react';
import './index.less';

export default () => {
  return (
    <div>
      <h1></h1>

      <article className="sound-article">
        <section>
          <div>
            <a className="add"></a>
            <div className="cai"></div>
            <input type="checkbox" className="checkbox"/>
          </div>
        </section>
        <section id="sound-1" className="sound">
          <a className="avator">
            <img src="/icon.png"/>
            <span> 太清 </span>
          </a>
          <div className="sound-content">
            <svg data-src="/icon.png" width="200" height="100"></svg>
            <p>哎呀，百度脑图真的好用啊，是吧，多多酱？</p>
          </div>
        </section>
        <section id="sound-2" className="sound">
          <a className="avator">
            <img src="/icon.png" alt="" className="icon"/>
            <span> 太上 </span>
          </a>
          <div className="sound-content">
            <svg data-src="/icon.png" width="200" height="100"></svg>
            <p>是的呢爸比，功能强大，体验好，而且还是云存储，再也不用担心分享的问题了！</p>
          </div>
        </section>

      </article>
    </div>
  );
};
