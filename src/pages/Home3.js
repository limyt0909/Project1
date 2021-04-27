/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';

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

        <ReactFullpage
          scrollOverflow={true}
          sectionsColor={['black', 'gray', 'brown', 'pink']}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state, fullpageApi }) => {
            return (
              <div id="myContainer" class="fullpage-wrapper">
                <div
                  class="section fp-section"
                  id="section1"
                  data-fp-styles="null"
                  data-anchor="firstPage"
                >
                  <div class="fp-slides">
                    <div class="fp-slidesContainer">
                      <div class="slide fp-slide fp-table active" id="slide1-1">
                        <div class="fp-tableCell">
                          <div
                            class="fp-bg fp-notransition"
                            data-final-x="0"
                            data-final-y="0"
                          ></div>
                          <h1>PARALLAX</h1>
                          <p>Use `parallax: true`. Made easy.</p>
                          <div class="button" id="download">
                            <a
                              href="https://gum.co/fullpageParallax"
                              class="button-purchase"
                            >
                              I want it!
                            </a>
                          </div>
                          <p class="documentation">
                            <a href="https://github.com/alvarotrigo/fullPage.js/wiki/Extension---Parallax">
                              Documentation
                            </a>
                          </p>
                        </div>
                      </div>
                      <div class="slide fp-slide fp-table" id="slide1-2">
                        <div class="fp-tableCell">
                          <div
                            class="fp-bg fp-notransition"
                            data-final-x="-843"
                            data-final-y="0"
                          ></div>
                          <div class="intro">
                            <h1>fullPage.js</h1>
                            <img src="https://alvarotrigo.com/fullPage/extensions/imgs/parallax/trusted.png" />
                          </div>
                        </div>
                      </div>
                      <div class="slide fp-slide fp-table" id="slide1-3">
                        <div class="fp-tableCell">
                          <div
                            class="fp-bg fp-notransition"
                            data-final-x="-843"
                            data-final-y="0"
                          ></div>
                          <div class="intro">
                            <h1>Free support</h1>
                            <p>
                              Extension issues are supported at no extra cost!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="fp-controlArrow fp-prev"></div>
                  <div class="fp-controlArrow fp-next"></div>

                  <div class="fp-slidesNav fp-bottom">
                    <ul>
                      <li>
                        <a href="#" class="active">
                          <span class="fp-sr-only">Slide 1</span>
                          <span></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="fp-sr-only">Slide 2</span>
                          <span></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="fp-sr-only">Slide 3</span>
                          <span></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="section fp-section fp-table"
                  id="section2"
                  data-fp-styles="null"
                  data-anchor="secondPage"
                >
                  <div class="fp-tableCell">
                    <div
                      class="fp-bg fp-notransition"
                      id="section2"
                      data-final-x="0"
                      data-final-y="0"
                    ></div>
                    <div class="intro">
                      <h1>FLEXIBLE</h1>
                      <p>Put not limits to yourself</p>
                      <p>Use parallax even without scroll bar!</p>
                    </div>
                  </div>
                </div>
                <div
                  class="section fp-section active fp-completely"
                  id="section3"
                  data-fp-styles="null"
                >
                  <div class="fp-slides">
                    <div class="fp-slidesContainer">
                      <div class="slide fp-slide fp-table active" id="slide3-1">
                        <div class="fp-tableCell">
                          <div
                            class="fp-bg"
                            data-final-x="0"
                            data-final-y="0"
                          ></div>
                          <div class="intro">
                            <h1>TAKE CONTROL</h1>
                            <p>Totally configurable.</p>
                            <p>For sections &amp; slides! </p>
                          </div>
                        </div>
                      </div>
                      <div class="slide fp-slide fp-table" id="slide3-2">
                        <div class="fp-tableCell">
                          <div
                            class="fp-bg fp-notransition"
                            data-final-x="-843"
                            data-final-y="0"
                          ></div>
                          <div class="intro">
                            <h1>GUARRANTEE</h1>
                            <p>
                              30 days money back guarratee if no domain was
                              activated.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="slide fp-slide fp-table" id="slide3-3">
                        <div class="fp-tableCell">
                          <div class="intro">
                            <div
                              class="fp-bg fp-notransition"
                              data-final-x="-843"
                              data-final-y="0"
                            ></div>
                            <h1>TRUSTED</h1>
                            <p>
                              Join thoudands of other developers who trusted
                              fullPage.js extensions!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="slide fp-slide fp-table" id="slide3-4">
                        <div class="fp-tableCell">
                          <div
                            class="fp-bg fp-notransition"
                            data-final-x="-843"
                            data-final-y="0"
                          ></div>
                          <div class="intro">
                            <h1>DOCUMENTED</h1>
                            <p>
                              If fullPage.js is known for one thing it's for its
                              great documentation!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="fp-controlArrow fp-prev"></div>
                  <div class="fp-controlArrow fp-next"></div>

                  <div class="fp-slidesNav fp-bottom">
                    <ul>
                      <li>
                        <a href="#" class="active">
                          <span class="fp-sr-only">Slide 1</span>
                          <span></span>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="">
                          <span class="fp-sr-only">Slide 2</span>
                          <span></span>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="">
                          <span class="fp-sr-only">Slide 3</span>
                          <span></span>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="">
                          <span class="fp-sr-only">Slide 4</span>
                          <span></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="section fp-section fp-table"
                  id="section4"
                  data-fp-styles="null"
                  data-anchor="4thpage"
                >
                  <div class="fp-tableCell">
                    <div
                      class="fp-bg fp-notransition"
                      data-final-x="0"
                      data-final-y="-601"
                    ></div>
                    <div class="intro">
                      <h1>IMPRESS</h1>
                      <p>Take it to the next level!</p>
                    </div>
                  </div>
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
