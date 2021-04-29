import React from 'react';
import './Top.css';
import './normalize.css';
import './component.css';
import Img2 from '../images/whitemark2.png';

const Top2 = () => {
  return (
    <>
      <header id="header" class="fixed-header fixed">
        <div class="gnb-overlay-bg"></div>
        <div id="headerInnerWrap">
          <div id="headerInner" class="clearfix">
            <h1 class="logo">
              <a href="/" title="메인으로">
                <img src={Img2} alt="whitemark2" />
              </a>
            </h1>
          </div>

          <nav id="gnb" class="total-menu" ClassName="Quicksand">
            <div id="gnbBg">
              <div class="gnb-bg-inner clearfix">
                <h3>관세법인 에이원</h3>
              </div>
            </div>
            <section class="color-4">
              <naav class="cl-effect-4">
                <a href="/AboutAone">A-one</a>
                <a href="/AboutAone">About</a>
                <a href="/Consulting">Consult</a>
                <a href="/Education">Education</a>
                <a href="/Resource">Resource</a>
              </naav>
            </section>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Top2;
