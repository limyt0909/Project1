/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';

import './section.css';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
class FullpageWrapper extends React.Component {
  onLeave(origin, destination, direction) {
    console.log('Leaving section ' + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log('After load: ' + destination.index);
  }
  render() {
    return (
      <>
        <div className="top">
          <Top />
        </div>

        <div id="fp-nav" class="fp-right">
          <ul>
            <li>
              <a href="#page1" class="">
                <span class="fp-sr-only">Section1</span>
                <span></span>
              </a>

              <div class="fp-tooltip fp-right">Section1</div>
            </li>

            <li>
              <a href="#page2" class="">
                <span class="fp-sr-only">Section2</span>
                <span></span>
              </a>
              <div class="fp-tooltip fp-right">Section2</div>
            </li>

            <li>
              <a href="#page3" class="">
                <span class="fp-sr-only">Section3</span>
                <span></span>
              </a>
              <div class="fp-tooltip fp-right">Section3</div>
            </li>

            <li>
              <a href="#page4" class="">
                <span class="fp-sr-only">Section4</span>
                <span></span>
              </a>
              <div class="fp-tooltip fp-right">Section4</div>
            </li>
          </ul>
        </div>

        <ReactFullpage
          scrollOverflow={true}
          sectionsColor={['black']}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                <div className="section section1">
                  <div class="w3-animate-opacity w3-text-white">
                    <div class="w3-display-middle">
                      <h1 class="w3-jumbo w3-animate-top" className="Quicksand">
                        A1 Customs & Trade Service
                      </h1>
                      <hr class="w3-border-grey" />
                      <p class="w3-large w3-center" className="NanumSqaure">
                        관세법인 에이원
                      </p>
                    </div>
                  </div>
                </div>
                {/*
                <div className="section section2">
                  <div className="slide">
                    <h4 className="fullscreen">section2.1</h4>
                    <div class="container">
                      <h1 className="fullscreen2">
                        업무영역 측면에서도 수출입 통관, 검역, FTA(Free Trade
                        Agreement), AEO(Authorized Economic Operator)컨설팅,
                        <br />
                        심사 쟁송 분야까지 수행하는 등 국내에서 가장 넓은 영역을
                        서비스하고 있으며, 통관 및 컨설팅 실적 국내 1위, <br />
                        행정쟁송 승소실적 1위인 명실상부 업계 최고의 기업입니다.
                      </h1>{' '}
                    </div>
                  </div>
                  <div className="slide">
                    <h4 className="fullscreen">section2.2</h4>
                  </div>
                  <div className="slide">
                    <h4 className="fullscreen">section2.3</h4>
                  </div>
                </div>
         
                <div className="section section2">
                  <h4 className="fullscreen">section2</h4>
                </div>
                <div className="section section3">
                  <h4 className="fullscreen">section3</h4>
                </div>
                <div className="section section4">
                  <h4 className="fullscreen">section4</h4>

                  <button
                    className="button"
                    onClick={() => fullpageApi.moveTo(1, 0)}
                  >
                    Move top
                  </button>
                </div>{' '}
                <div class="fp-tableCell" className="section">
                  <video
                    id="myVideo"
                    loop=""
                    muted=""
                    playsinline=""
                    data-autoplay=""
                  >
                    <source
                      src="https://res.cloudinary.com/dlz80e3v7/video/upload/v1582903321/flowers_kgvvqw.mp4"
                      type="video/mp4"
                    />
                    <source
                      src="https://res.cloudinary.com/dlz80e3v7/video/upload/v1582903318/flowers_ofohyg.webm"
                      type="video/webm"
                    />
                  </video>
                  <div class="layer">
                    <h1>fullPage.js videos</h1>
                  </div>
                </div>               */}{' '}
                <div class="section" id="section3">
                  <div className="textbox">
                    <h2>
                      관세법인 에이원
                      <br />
                      <strong>여려분의 파트너</strong>를 만듭니다
                    </h2>
                    <ul>
                      <li>
                        국내 최고, 최대 관세법인 에이원에 오신것을 환영합니다
                      </li>
                      <li>
                        에이원은 동종업계에서 최초로 <strong>AEO</strong>
                        인증을 취득하고 이후 더 발전된 모습으로 <br />
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="section" id="section0">
                  <div className="textbox2">
                    <h2>
                      관세법인 에이원
                      <br />
                      <strong>여려분의 파트너</strong>를 만듭니다
                    </h2>
                    <ul>
                      <li>
                        국내 최고, 최대 관세법인 에이원에 오신것을 환영합니다
                      </li>
                      <li>
                        서울본사와 주요 공항만에 탄탄한 조직은 물론 2개의
                        대형물류센터를 갖추어
                        <br />
                        관세와 물류의 Intergrated Model을 창조해 나가고
                        있습니다.
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="section" id="section2">
                  <div className="textbox3">
                    <h2>
                      관세법인 에이원
                      <br />
                      <strong>여려분의 파트너</strong>를 만듭니다
                    </h2>
                    <ul>
                      <li>
                        국내 최고, 최대 관세법인 에이원에 오신것을 환영합니다
                      </li>
                      <li>
                        서울본사와 주요 공항만에 탄탄한 조직은 물론 2개의
                        대형물류센터를 갖추어
                        <br />
                        관세와 물류의 Intergrated Model을 창조해 나가고
                        있습니다.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section fp-auto-height lefty">
                  <Bottom />
                </div>
              </div>
            );
          }}
        />
      </>
    );
  }
}

export default FullpageWrapper;