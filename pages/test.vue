<template>
  <div class="productPage btn-shade">
    <div id="productPage"></div>

    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>

      <!--case-study-hero-banner-->
      <div class="mask"></div>

      <div class="fc-case-study-hub">
        <div class="container">
          <div class="fc-hub-content">
            <h1>
              Facilities become
              <br />future-ready with Facilio
            </h1>
            <p>
              See how Facilio is helping some of the
              <br />largest CREs and FM companies around the world
            </p>
          </div>
          <webinarForm />
        </div>
      </div>
      <!--case-study-hero-banner-->

      <!--case-study-customers-->
      <div class="case-study-customers">
        <div class="container">
          <div class="row">
         <caseStudyCard v-for="(item) in caseStudyCard" v-bind:key="item.link" v-bind:link="item.link"
              v-bind:image="item.image" v-bind:logo="item.logo" v-bind:desc="item.desc"
              v-bind:theme="cardtheme[item.themes]"/>
          
        </div>
      </div></div>

      <section class="fc-case-onboard">
        <div class="container">
          <h3>
            Our customer team has empowered top enterprises with operational
            transparency
          </h3>
          <p>
            Your facility is unique, and you have a distinctive style to managing
            operations. There is no one-size-fits-all approach to innovate
            across your portfolio. Exactly why, at Facilio, we believe in being
            your partner in innovation and co-creating your modern O&M playbook
          </p>
          <div class="fc-cs-onboard">
            <nuxt-link to="/customer-success" class="fc-cs-try-white"
              >Learn More</nuxt-link
            >
          </div>
          <div class="onboard-case-team">
            <img src="/images/onboard/facilio-onboard-team.png" />
          </div>
        </div>
      </section>

      <section class="fc-customer-testimonials">
        <div class="row container">
          <div class="col-md-5">
            <h2>What customers love about Facilio</h2>
          </div>

          <div class="col-md-7 seperate" style="position:relative;">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="92"
              height="229"
              class="dots-bottom-svg"
            >
              <path
                fill="#fec9ce"
                fill-opacity="0.2"
                fill-rule="evenodd"
                d="M88.811 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177A3.182 3.182 0 0192 92.344a3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 70.11a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177A3.182 3.182 0 0192 47.877a3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 25.643a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0188.811.233 3.182 3.182 0 0192 3.41a3.182 3.182 0 01-3.189 3.176zM67.858 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233A3.182 3.182 0 0164.67 3.41 3.182 3.182 0 0167.858.233a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM45.994 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0145.994.233a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM25.041 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0125.04 44.7a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0125.04.233a3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zM4.088 95.52a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234A3.182 3.182 0 01.899 70.11a3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176A3.182 3.182 0 014.088 44.7a3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233A3.182 3.182 0 01.899 3.41 3.182 3.182 0 014.088.233 3.182 3.182 0 017.276 3.41a3.182 3.182 0 01-3.188 3.176zM88.81 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 135.96a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zM67.858 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM45.994 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM25.041 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM4.088 228.07a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176z"
              />
            </svg>
            <div class="fc-testimonial-cards">
              <div class="tab-content">
                <div class="tab-pane active" id="testimonial-1">
                  <div class="fc-testimonial-logo">
                    <img src="/images/customer-logo/new/al-fajer-logo.png" />
                  </div>
                  <p>
                     Facilio's connected buildings approach has helped us upgrade the quality of service for our customers, using the same resources and assets that were at our disposal earlier. We increased our workforce productivity by 13% within 6 months of digitizing operations using Facilio.
                  </p>
                  <div class="fc-testimonial-speaker">
                    <div class="fc-tsnml-sp-icon">
                      <img src="/images/customer/sangeetha.jpg" />
                    </div>
                    <div class="fc-tsnml-name">
                      Sangeetha B
                      <br />
                      <span>GM, Al Fajer.</span>
                    </div>
                  </div>
                </div>

                <div class="tab-pane" id="testimonial-2">
                  <div class="fc-testimonial-logo">
                    <img src="/images/customer-logo/new/optima.png" />
                  </div>
                  <p>
                    Facilio has changed the way we manage buildings. It’s
                    time-consuming to deliver CRE solutions, especially to large
                    projects (that of a leading airline company) - so having a
                    single tool to track, manage, and control asset performance
                    in real-time is incredible. We now have a central place to
                    manage distributed properties more efficiently.
                  </p>
                  <div class="fc-testimonial-speaker">
                    <div class="fc-tsnml-sp-icon">
                      <img src="/images/customer/bhadra.png" />
                    </div>
                    <div class="fc-tsnml-name">
                      Bhadra Prasad
                      <br />
                      <span>Operations Manager, Middle East</span>
                    </div>
                  </div>
                </div>

                <div class="tab-pane" id="testimonial-3">
                  <div class="fc-testimonial-logo">
                    <img src="/images/customer-logo/new/pd7.png" />
                  </div>
                  <p>
                   Facilio is a powerful tool. We’re able to scale facility
                    operations and services across large portfolio buildings 
                    effectively.
                  </p>
                  <div class="fc-testimonial-speaker">
                    <div class="fc-tsnml-sp-icon">
                      <img src="/images/customer/paulo-darte.png" />
                    </div>
                    <div class="fc-tsnml-name">
                      Paulo D
                      <br />
                      <span>CEO</span>
                    </div>
                  </div>
                </div>

                <div class="tab-pane" id="testimonial-4">
                  <div class="fc-testimonial-logo">
                    <img src="/images/customer-logo/new/indiqube-logo.png" />
                  </div>
                  <p>
                    With more than 35 distributed workspace infrastructure, 
                    we were looking at ways to efficiently optimize operations
                     and maintenance activities across our portfolio. Facilio 
                     gave us a single centralized platform to organize mobile 
                     maintenance schedules, compliance activities, and manage 
                     vendor workflows, across multiple locations.
                  </p>
                  <div class="fc-testimonial-speaker">
                    <div class="fc-tsnml-sp-icon">
                      <img src="/images/customer/deepak.jpeg" />
                    </div>
                    <div class="fc-tsnml-name">
                      Deepak Dhadich
                      <br />
                      <span>Senior VP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ul class="nav nav-tabs">
              <li class="active">
                <a href="#testimonial-1" data-toggle="tab">
                  <svg height="14" width="14">
                    <circle
                      cx="7"
                      cy="7"
                      r="7"
                      stroke-width="3"
                      fill="#bfb5dc"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#testimonial-2" data-toggle="tab">
                  <svg height="14" width="14">
                    <circle
                      cx="7"
                      cy="7"
                      r="7"
                      stroke-width="3"
                      fill="#bfb5dc"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#testimonial-3" data-toggle="tab">
                  <svg height="14" width="14">
                    <circle
                      cx="7"
                      cy="7"
                      r="7"
                      stroke-width="3"
                      fill="#bfb5dc"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#testimonial-4" data-toggle="tab">
                  <svg height="14" width="14">
                    <circle
                      cx="7"
                      cy="7"
                      r="7"
                      stroke-width="3"
                      fill="#bfb5dc"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="92"
              height="229"
              class="dots-top-svg"
            >
              <path
                fill="#fec9ce"
                fill-opacity="0.2"
                fill-rule="evenodd"
                d="M88.811 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177A3.182 3.182 0 0192 92.344a3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 70.11a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177A3.182 3.182 0 0192 47.877a3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 25.643a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0188.811.233 3.182 3.182 0 0192 3.41a3.182 3.182 0 01-3.189 3.176zM67.858 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233A3.182 3.182 0 0164.67 3.41 3.182 3.182 0 0167.858.233a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM45.994 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0145.994.233a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM25.041 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0125.04 44.7a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0125.04.233a3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zM4.088 95.52a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234A3.182 3.182 0 01.899 70.11a3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176A3.182 3.182 0 014.088 44.7a3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233A3.182 3.182 0 01.899 3.41 3.182 3.182 0 014.088.233 3.182 3.182 0 017.276 3.41a3.182 3.182 0 01-3.188 3.176zM88.81 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 135.96a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zM67.858 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM45.994 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM25.041 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM4.088 228.07a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176z"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>

    <!--case-study-customers-->

    <div id="fc-footer"></div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import WebinarForm from "~/components/webinarForm";
import caseStudyCard from "../components/Case-studyCard";
export default {
   data() {
      return {
        caseStudyCard: [{
            themes: 1,
            link: "/resources/case-study/pd7-technology",
            image: "facilio-clients.png",
            logo: "logo-pd7.png",
            desc: "How PD7 connected buildings and eliminated 80% of breakdowns within 8 months of adopting Facilio?"
          },
          {
            themes: 2,
            link: "/resources/case-study/al-fajer",
            image: "alfajer.png",
            logo: "case-hub-logo3.png",
            desc: "How Al Fajer FM improved Workforce Productivity by 13% within 6 months of digitizing operations."
          },
          {
            themes: 3,
            link: "/resources/case-study/green-optima",
            image: "green-optima.png",
            logo: "case-hub-logo1.png",
            desc: "Green Optima grew their business by 25% within 2 months of partnering with Facilio"
          },
          //   {
          //   themes: 1,
          //   link: "/resources/case-study/smart-automation-energy",
          //   image: "smart1.png",
          //   logo: "smart2.png",
          //   desc: " How Smart Automation Energy (Smart AE) broke energy ROI records by evolving as a tech-driven ESCO"
          // },
        ],
        cardtheme: {
          1: 'news-theme-1',
          2: 'news-theme-2',
          3: 'news-theme-3',
        }

      };
    },
  components: {
    Navbar, caseStudyCard, WebinarForm
  },
  head() {
    return {
      title: "Customer Case Studies | Facilio",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Know how Facilio is transforming the built space of some of the largest Corporate Real Estates and Facility Management companies around the globe."
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Customer Case Studies | Facilio"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Know how Facilio is transforming the built space of some of the largest Corporate Real Estates and Facility Management companies around the globe."
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content:
            "https://s3-us-west-2.amazonaws.com/ws-facilio.com/assets/images/logo.png"
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/resources/case-study/"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Customer Case Studies | Facilio"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Know how Facilio is transforming the built space of some of the largest Corporate Real Estates and Facility Management companies around the globe."
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content:
            "https://s3-us-west-2.amazonaws.com/ws-facilio.com/assets/images/logo.png"
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/resources/case-study/"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/resources/case-study/"
        }
      ],
      script: [
        { src: "../../../js/page.js" },
        { src: "../../../js/waypoints.min.js" },
        { src: "../../../js/includes.js" },
        { src: "../../../js/position.js" }
      ]
    };
  }
};
</script>

<style>
.seperate > .nav-tabs {
  border-bottom: none;
  max-width: 320px;
  margin: 0 auto;
}
.nav-tabs li {
  padding: 0px !important;
}

a:hover {
  text-decoration: none !important;
}

.fc-testimonial-cards .nav > li > a {
  margin: 0px !important;
  padding: 10px 0px !important;
}
.myPage .nav > li > a,
.usecase-header .nav > li > a,
.homepage-navbar-default .usecase-header .nav > li > a {
  font-weight: 600;
  font-size: 13px;
  color: #3b3b3b;
  background-color: transparent;
  text-transform: uppercase;
  position: relative;
  font-family: "ProximaNovaSemibold";
}
.nav-tabs > li.active {
  position: relative;
}
.seperate > .nav-tabs > li.active a:after {
  content: "";
  width: 21px;
  position: absolute;
  height: 21px;
  left: 26px;
  top: 19px;
  background-image: url("/images/icons/like.svg");
}
.nav-tabs > li.active a.focus {
  background-color: transparent;
}
</style>
