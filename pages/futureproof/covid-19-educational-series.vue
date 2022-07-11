<template>
  <div class="homePage btn-shade">
    <div id="productPage"></div>

    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <!-- navbar end -->
      <!-- webinar-banner -->
      <section class="fc-webinar-series-banner">
        <div class="container">
          <div class="fp-crafted-corner"><img src="/images/futureproof/fp-crafted.svg"></div>
          <div class="fp-web-dots"><svg xmlns="http://www.w3.org/2000/svg" width="214" height="157">
              <path fill="#5385E7" fill-rule="evenodd"
                d="M-110.715 5.939c0 2.761-2.394 5-5.348 5-2.954 0-5.349-2.239-5.349-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 36c0 2.761-2.394 5-5.348 5-2.954 0-5.349-2.239-5.349-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 37c0 2.761-2.394 5-5.348 5-2.954 0-5.349-2.239-5.349-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 37c0 2.761-2.394 5-5.348 5-2.954 0-5.349-2.239-5.349-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 36c0 2.761-2.394 5-5.348 5-2.954 0-5.349-2.239-5.349-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm40.65-146c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm40.65-146c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 36c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 37c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 37c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 36c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm40.649-146c0 2.761-2.395 5-5.349 5S.537 8.7.537 5.939c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm39.58-36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0-110c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 73c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 73c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0-110c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm40.65 74c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0-110c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 73c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 73c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0-110c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm40.649 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0-146c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm40.65-36c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 36c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 37c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 37c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 36c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm40.649-146c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5z" />
            </svg></div>
          <div class="fc-fp-logo">
            <img src="/images/futureproof/fp-logo.svg">
            <span class="fc-presents">Presents</span>
          </div>
          <h1>REBUILD</h1>
          <h2>An educational series featuring experts and thought leaders in property operations to help you prepare for
            the post-pandemic world.</h2>
          <a @click="openPopup()">
            <div class="fc-webinar-cta">
              Register Now</div>
          </a>

          <div class="text-center pT30">
            <a class="pointer" @click="openTrailerPopup()"><div class="text-center"><span class="blue-underline black-txt-18 text-uppercase font-heavy" style="font-family: ProximaNovaSemibold; color: rgb(255, 255, 255); border-bottom: 1px solid rgb(137, 230, 238);">
                                Watch Trailer</span></div></a>
          </div>


          


        </div>
      </section>
      <!-- webinar-banner-->
      <!-- webinar-series-->
      <section class="fc-webinar-series">
        <div class="container">
          <h3>It’s time we rebuild for the new normal.</h3>
          <p>Right now, do you feel like being stranded on the ocean right after a storm? With the lockdown and travel
            bans across the globe, your plans for building operations and property management are set for a
            revolutionary shift.
            At Facilio, we’ve been speaking with leaders and experts in the industry and realized that one thing is
            certain.
          </p>
          <!-- <p>The new normal - a signal of change in operational measures and strategies, set in motion by the COVID-19 outbreak. </p> -->
          <p>As we prepare to embrace the new era, there are one too many aspects that scream for our attention - so we
            identified the two most important aspects you should focus on: </p>
          <div class="fc-webinar-feat-card">
            <div class="row">
              <div class="col-md-12">
                <p>1. How to stay resourceful with remote technology
                </p>
              </div>
              <div class="col-md-12">
                <p>2. Strategic avenues to trim operational costs
                </p>
              </div>
            </div>
          </div>
          <p style="padding-top:10px;">To give you unparalleled clarity and help set your priorities right, we bring to
            you a digital series of insights to reassess your operations roadmap - from the comfort of your recliner at
            home.
            We’ve built this platform just for you - to exchange ideas with peers, take lessons from experts who are
            executing strategies in the trenches, share your viewpoints, so you have a clear REBUILD to-do list to act
            on. </p>
        </div>
      </section>

      <!-- webinar-series-->

      <!-- webinar-features-->
      <section class="fc-webinar-features" style="padding: 80px 0px 50px;">
        <div class="fc-el-container">
          <h3>Transition to the new normal, intelligently</h3>
          <div class="row">
            <div class="col-md-4">
              <div class="fc-cv-webinar-card">
                <div class="fc-webinar-feat">
                  <img src="/images/futureproof/fp-webinar-icon-1.svg">
                </div>
                <h4>Practical strategies and insights</h4>
                <p>Get answers to important questions and learn ways to transition to the new demands of building
                  operations post-COVID-19.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="fc-cv-webinar-card">
                <div class="fc-webinar-feat">
                  <img src="/images/futureproof/fp-webinar-icon-2.svg">
                </div>
                <h4>Masterclass - right from the field</h4>
                <p>What worked, what didn’t? Learn the common mistakes and workarounds from experts-on-ground tackling
                  the situation.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="fc-cv-webinar-card">
                <div class="fc-webinar-feat">
                  <img src="/images/futureproof/fp-webinar-icon-3.svg">
                </div>
                <h4>Tools and tips for the new processes</h4>
                <p>Think futuristic, taking into account the new normal - with guidelines, tips, and workflows to take
                  control and prepare your teams.</p>
              </div>
            </div>
          </div>
          <div class="fc-black-btn-video pT20 text-center pointer text-uppercase" @click="openTrailerPopup()">
            Watch Trailer
          </div>
        </div>
      </section>
      <!-- webinar-features-->
      <!-- webinar-videos-->

      <section class="fc-webinar-video-sec">
        <div class="container">
          <div class="txt-upt">ON-DEMAND WEBINARS</div>
          <h3>Exclusive conversations from industry experts await you on the other side. </h3>

        </div>
        <div class="fc-el-container">
          <div class="row">
            <div class="col-md-6">
              <a @click="openPopup()">
                <div class="fc-cv-webinar-img">
                  <div class="fc-cv-play-button">

                    <svg version="1.1" id="Layer_1" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                      style="enable-background:new 0 0 512 512;" xml:space="preserve">
                      <g>
                        <g>
                          <g>
                            <path d="M256,0C114.833,0,0,114.844,0,256s114.833,256,256,256s256-114.844,256-256S397.167,0,256,0z M256,490.667
				C126.604,490.667,21.333,385.396,21.333,256S126.604,21.333,256,21.333S490.667,126.604,490.667,256S385.396,490.667,256,490.667
				z" />
                            <path
                              d="M357.771,247.031l-149.333-96c-3.271-2.135-7.5-2.25-10.875-0.396C194.125,152.51,192,156.094,192,160v192
				c0,3.906,2.125,7.49,5.563,9.365c1.583,0.865,3.354,1.302,5.104,1.302c2,0,4.021-0.563,5.771-1.698l149.333-96
				c3.042-1.958,4.896-5.344,4.896-8.969S360.813,248.99,357.771,247.031z M213.333,332.458V179.542L332.271,256L213.333,332.458z" />
                          </g>
                        </g>
                      </g>

                    </svg>

                  </div>
                  <img src="/images/futureproof/episode-1.jpg">
                </div>
              </a>
            </div>
            <div class="col-md-6">
              <a @click="openPopup()">
                <div class="fc-cv-webinar-img">
                  <div class="fc-cv-play-button">

                    <svg version="1.1" id="Layer_1" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                      style="enable-background:new 0 0 512 512;" xml:space="preserve">
                      <g>
                        <g>
                          <g>
                            <path d="M256,0C114.833,0,0,114.844,0,256s114.833,256,256,256s256-114.844,256-256S397.167,0,256,0z M256,490.667
				C126.604,490.667,21.333,385.396,21.333,256S126.604,21.333,256,21.333S490.667,126.604,490.667,256S385.396,490.667,256,490.667
				z" />
                            <path
                              d="M357.771,247.031l-149.333-96c-3.271-2.135-7.5-2.25-10.875-0.396C194.125,152.51,192,156.094,192,160v192
				c0,3.906,2.125,7.49,5.563,9.365c1.583,0.865,3.354,1.302,5.104,1.302c2,0,4.021-0.563,5.771-1.698l149.333-96
				c3.042-1.958,4.896-5.344,4.896-8.969S360.813,248.99,357.771,247.031z M213.333,332.458V179.542L332.271,256L213.333,332.458z" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <img src="/images/futureproof/episode-2.jpg">
                </div>
              </a>
            </div>
            <div class="col-md-6">
              <a @click="openPopup()">
                <div class="fc-cv-webinar-img">
                  <div class="fc-cv-play-button">

                    <svg version="1.1" id="Layer_1" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                      style="enable-background:new 0 0 512 512;" xml:space="preserve">
                      <g>
                        <g>
                          <g>
                            <path d="M256,0C114.833,0,0,114.844,0,256s114.833,256,256,256s256-114.844,256-256S397.167,0,256,0z M256,490.667
				C126.604,490.667,21.333,385.396,21.333,256S126.604,21.333,256,21.333S490.667,126.604,490.667,256S385.396,490.667,256,490.667
				z" />
                            <path
                              d="M357.771,247.031l-149.333-96c-3.271-2.135-7.5-2.25-10.875-0.396C194.125,152.51,192,156.094,192,160v192
				c0,3.906,2.125,7.49,5.563,9.365c1.583,0.865,3.354,1.302,5.104,1.302c2,0,4.021-0.563,5.771-1.698l149.333-96
				c3.042-1.958,4.896-5.344,4.896-8.969S360.813,248.99,357.771,247.031z M213.333,332.458V179.542L332.271,256L213.333,332.458z" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <img src="/images/futureproof/episode-3.png">
                </div>
              </a>
            </div>
            <div class="col-md-6">
              <a @click="openPopup()">
                <div class="fc-cv-webinar-img">
                  <div class="fc-cv-play-button">

                    <svg version="1.1" id="Layer_1" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                      style="enable-background:new 0 0 512 512;" xml:space="preserve">
                      <g>
                        <g>
                          <g>
                            <path d="M256,0C114.833,0,0,114.844,0,256s114.833,256,256,256s256-114.844,256-256S397.167,0,256,0z M256,490.667
				C126.604,490.667,21.333,385.396,21.333,256S126.604,21.333,256,21.333S490.667,126.604,490.667,256S385.396,490.667,256,490.667
				z" />
                            <path
                              d="M357.771,247.031l-149.333-96c-3.271-2.135-7.5-2.25-10.875-0.396C194.125,152.51,192,156.094,192,160v192
				c0,3.906,2.125,7.49,5.563,9.365c1.583,0.865,3.354,1.302,5.104,1.302c2,0,4.021-0.563,5.771-1.698l149.333-96
				c3.042-1.958,4.896-5.344,4.896-8.969S360.813,248.99,357.771,247.031z M213.333,332.458V179.542L332.271,256L213.333,332.458z" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <img src="/images/futureproof/episode-4.png">
                </div>
              </a>
            </div>
            <div class="col-md-6">
              <a @click="openPopup()">
                <div class="fc-cv-webinar-img">
                  <div class="fc-cv-play-button">
                    <svg version="1.1" id="Layer_1" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                      style="enable-background:new 0 0 512 512;" xml:space="preserve">
                      <g>
                        <g>
                          <g>
                            <path d="M256,0C114.833,0,0,114.844,0,256s114.833,256,256,256s256-114.844,256-256S397.167,0,256,0z M256,490.667
				C126.604,490.667,21.333,385.396,21.333,256S126.604,21.333,256,21.333S490.667,126.604,490.667,256S385.396,490.667,256,490.667
				z" />
                            <path
                              d="M357.771,247.031l-149.333-96c-3.271-2.135-7.5-2.25-10.875-0.396C194.125,152.51,192,156.094,192,160v192
				c0,3.906,2.125,7.49,5.563,9.365c1.583,0.865,3.354,1.302,5.104,1.302c2,0,4.021-0.563,5.771-1.698l149.333-96
				c3.042-1.958,4.896-5.344,4.896-8.969S360.813,248.99,357.771,247.031z M213.333,332.458V179.542L332.271,256L213.333,332.458z" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <img src="/images/futureproof/episode-5.png" style="border-radius: 12px;">
                </div>
              </a>
            </div>
            <div class="col-md-6">
              <a @click="openPopup()">
                <div class="fc-cv-webinar-img">
                  <div class="fc-cv-play-button">
                    <svg version="1.1" id="Layer_1" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                      style="enable-background:new 0 0 512 512;" xml:space="preserve">
                      <g>
                        <g>
                          <g>
                            <path d="M256,0C114.833,0,0,114.844,0,256s114.833,256,256,256s256-114.844,256-256S397.167,0,256,0z M256,490.667
				C126.604,490.667,21.333,385.396,21.333,256S126.604,21.333,256,21.333S490.667,126.604,490.667,256S385.396,490.667,256,490.667
				z" />
                            <path
                              d="M357.771,247.031l-149.333-96c-3.271-2.135-7.5-2.25-10.875-0.396C194.125,152.51,192,156.094,192,160v192
				c0,3.906,2.125,7.49,5.563,9.365c1.583,0.865,3.354,1.302,5.104,1.302c2,0,4.021-0.563,5.771-1.698l149.333-96
				c3.042-1.958,4.896-5.344,4.896-8.969S360.813,248.99,357.771,247.031z M213.333,332.458V179.542L332.271,256L213.333,332.458z" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <img src="/images/futureproof/Episode-6.png" style="border-radius: 12px;">
                </div>
              </a>
            </div>

            <div class="col-md-6">
              <a @click="openPopup()">
                <div class="fc-cv-webinar-img">
                  <div class="fc-cv-play-button">
                    <svg version="1.1" id="Layer_1" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                      style="enable-background:new 0 0 512 512;" xml:space="preserve">
                      <g>
                        <g>
                          <g>
                            <path d="M256,0C114.833,0,0,114.844,0,256s114.833,256,256,256s256-114.844,256-256S397.167,0,256,0z M256,490.667
				C126.604,490.667,21.333,385.396,21.333,256S126.604,21.333,256,21.333S490.667,126.604,490.667,256S385.396,490.667,256,490.667
				z" />
                            <path
                              d="M357.771,247.031l-149.333-96c-3.271-2.135-7.5-2.25-10.875-0.396C194.125,152.51,192,156.094,192,160v192
				c0,3.906,2.125,7.49,5.563,9.365c1.583,0.865,3.354,1.302,5.104,1.302c2,0,4.021-0.563,5.771-1.698l149.333-96
				c3.042-1.958,4.896-5.344,4.896-8.969S360.813,248.99,357.771,247.031z M213.333,332.458V179.542L332.271,256L213.333,332.458z" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <img src="/images/futureproof/Episode-7.png" style="border-radius: 12px;">
                </div>
              </a>
            </div>


            <div class="col-md-6">
              <a @click="openPopup()">
                <div class="fc-cv-webinar-img">
                  <div class="fc-cv-play-button">
                    <svg version="1.1" id="Layer_1" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                      style="enable-background:new 0 0 512 512;" xml:space="preserve">
                      <g>
                        <g>
                          <g>
                            <path d="M256,0C114.833,0,0,114.844,0,256s114.833,256,256,256s256-114.844,256-256S397.167,0,256,0z M256,490.667
				C126.604,490.667,21.333,385.396,21.333,256S126.604,21.333,256,21.333S490.667,126.604,490.667,256S385.396,490.667,256,490.667
				z" />
                            <path
                              d="M357.771,247.031l-149.333-96c-3.271-2.135-7.5-2.25-10.875-0.396C194.125,152.51,192,156.094,192,160v192
				c0,3.906,2.125,7.49,5.563,9.365c1.583,0.865,3.354,1.302,5.104,1.302c2,0,4.021-0.563,5.771-1.698l149.333-96
				c3.042-1.958,4.896-5.344,4.896-8.969S360.813,248.99,357.771,247.031z M213.333,332.458V179.542L332.271,256L213.333,332.458z" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <img src="/images/futureproof/episode-8.png" style="border-radius: 12px;">
                </div>
              </a>
            </div>


          </div>
        </div>
      </section>
      <webinarModal />
      <trailerVideo />

    </div>
    <FooterSeries />
  </div>
</template>

<script>
  import Navbar from "../../components/Navbar";
  import FooterSeries from "../../components/FooterSeries";
  import webinarModal from "../../components/webinarModal";
  import trailerVideo from "../../pages/futureproof/Covid-embed-video.vue"
  export default {
    components: {
      Navbar,
      webinarModal,
      FooterSeries,
      trailerVideo
    },
    methods: {
      openPopup() {
        document.getElementById("webinarPopup").style.display = "block";
      },
      openTrailerPopup() {
        document.getElementById("trailerPopup").style.display = "block";
      }
    },
    head() {
      return {
        title: "Property Operations in the post-COVID World | REBUILD by Facilio ",
        meta: [{
            hid: "description",
            name: "description",
            content: "An educational series featuring thought leaders from real estate to help you revamp operations for the post-COVID-19 world."
          },
          {
            hid: "fb-share-title",
            property: "og:title",
            content: "Property Operations in the post-COVID World | REBUILD by Facilio "
          },
          {
            hid: "fb-share-description",
            property: "og:description",
            content: "An educational series featuring thought leaders from real estate to help you revamp operations for the post-COVID-19 world."
          },
          {
            hid: "fb-share-image",
            property: "og:image",
            content: "https://facilio.com/images/og-images/covid-19-educational-series.jpg"
          },
          {
            hid: "fb-share-url",
            property: "og:url",
            content: "https://facilio.com/futureproof/covid-19-educational-series"
          },
          {
            hid: "twitter-meta",
            name: "twitter:card",
            content: "summary"
          },
          {
            hid: "twitter-title",
            name: "twitter:title",
            content: "Property Operations in the post-COVID World | REBUILD by Facilio"
          },
          {
            hid: "twitter-description",
            name: "twitter:description",
            content: "An educational series featuring thought leaders from real estate to help you revamp operations for the post-COVID-19 world."
          },
          {
            hid: "twitter-image",
            name: "twitter:image",
            content: "https://facilio.com/images/og-images/covid-19-educational-series.jpg"
          },
          {
            hid: "twitter-url",
            name: "twitter:url",
            content: "https://facilio.com/futureproof/covid-19-educational-series"
          }
        ],
        link: [{
          rel: "canonical",
          href: "https://facilio.com/futureproof/covid-19-educational-series"
        }],
        script: [{
          src: "../../js/includes.js"
        }]
      };
    }
  };
</script>