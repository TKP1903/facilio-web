<template>
   <div class="productPage btn-shade home">
      <div class="myPage" id="myPage" style="background-color: #f8faff;">
         <HomeNavbar />
         <!-- Home container start-->
         <div class="home-banner-container container-width facilio-homepage-banner home-background" style="max-width: none;margin-top: 75px;">
            <div class="home-banner" style="max-width: 1170px;margin: auto;padding-top: 100px;">
               <div class="visible-xs  visible-sm fc-visible-mobile">
                  <h1 class="home-banner-H">Property operations done right.<div>One platform. Infinite ways to efficiency.</div></h1>

                  <p>Designed for time and cost-saving efficiency in building operations now and into the future.
                  </p>
               </div>
               <div>
               <div class="hidden-xs hidden-sm">
                  <h1 class="home-banner-H">
                      <div>Property operations done right.</div>
                     <div class="fc-int-small">One platform. Infinite ways to efficiency.</div>
                  </h1>
                  <p class="home-banner-description">Designed for time and cost-saving efficiency in building operations now and into the future.</p>
               </div>
               <div class="home-rating-band hidden-xs hidden-sm">

                  <div class="fc-star-band fc-star-band-1">
                    <nuxt-link to="/operations-and-maintenance/">
                     <h3>Operations & Maintenance</h3>
                     </nuxt-link>
                     <div style="padding: 10px 0px;">
                        <img
                    src="/images/stars.svg"
                    style="width: 100px;height: 40px;"
                         />
                         <p>“Real estate operational hub<br/> for the entire portfolio”</p>
                  </div>
                  </div>


                  <div class="fc-star-band" >
                   <nuxt-link to="/sustainability-management">
                   <h3>Sustainability</h3>
                   </nuxt-link>
                     <div style="padding: 10px 0px;">
                        <img
                    src="/images/stars.svg"
                    style="width: 100px;height: 40px;"
                  />
                  <p>“Simplified yet powerful,<br/> adapts w/o hassle”</p>
                     </div>
                  </div>


                  <div class="fc-star-band">
                   <nuxt-link to="/operations-software/connected-optimization">
                     <h3>Connected Buildings</h3>
                     </nuxt-link>
                     <div style="padding: 10px 0px;">
                        <img
                    src="/images/stars.svg"
                    style="width: 100px;height: 40px;"
                  />
                  <p>“Take customer service<br/> very very seriously”</p>
                     </div>
                  </div>

               </div>

               <div class="fc-quick-visibility">Own, Manage, or Maintain CRE Portfolios?</div>
               <div class="home-input-sec">
                  <nuxt-link to="/get-started" class="try-demo-btn mobile-try-demo-btn try-demo-btn-2">SCHEDULE A DEMO
                  </nuxt-link>
               </div>
               <div style="max-width: 1050px;margin: auto;padding: 50px 10px;"><img src="/images/Group12.webp"/></div>
               </div>
               <!-- <div class="home-see-tour-btn">
                  <a href="/tour" class="fc-border-btn mobile-fc-border-btn">SEE TOUR</a>
                  </div> -->
               <div class="blue-text-16 fwbold">
                  TRUSTED BY FORWARD-THINKING ENTERPRISES ACROSS 70 MILLION SQ.FT
                  GLOBALLY
               </div>
               <StaticClientCarousel />

            </div>
         </div>
         <HomeFeatureCarousel />
         <MobileFeaturesec />


         <div class="fc-why-buy-us fc-container">
            <h2>Your chance to be in charge across building operations lifecycle, in one place</h2>

         <div class="fc-PlatformDiagram__Navigation-Group">
           <div class="fc-PlatformDiagram__Nav-Item">
              <h6 class="PlatformDiagram__Nav-Item-Heading">
                 Operational Readiness
              </h6>
              <p class="PlatformDiagram__Nav-Item-Description">
                 Chart your path to a fully connected portfolio with a powerful backend
              </p>
              <nuxt-link to="/platform-overview" class="PlatformDiagram__Nav-Item-Link">Facilio O&M Platform</nuxt-link>
              <nuxt-link to="/integrations" class="PlatformDiagram__Nav-Item-Link">Integrations</nuxt-link>
              <nuxt-link to="/reimagined-cmms" class="PlatformDiagram__Nav-Item-Link">Change Management</nuxt-link>
              <nuxt-link to="/iot-edge" class="PlatformDiagram__Nav-Item-Link">Facilio IoT Edge</nuxt-link>
              <nuxt-link to="https://apps.apple.com/in/app/facilio-optimising-facilities/id1438082479" class="PlatformDiagram__Nav-Item-Link">Mobility</nuxt-link>
           </div>
           <div class="fc-PlatformDiagram__Nav-Item">
              <h6 class="PlatformDiagram__Nav-Item-Heading">
                 Manage
              </h6>
              <p class="PlatformDiagram__Nav-Item-Description">
                 Get the efficiency of a single command and control center across your O&M
              </p>
              <nuxt-link to="/operations-software/maintenance-management" class="PlatformDiagram__Nav-Item-Link">Maintenance & Facility Management</nuxt-link>
              <nuxt-link to="/operations-software/vendor-management" class="PlatformDiagram__Nav-Item-Link">Vendor Management</nuxt-link>
              <nuxt-link to="/operations-and-maintenance" class="PlatformDiagram__Nav-Item-Link">Workflow Orchestrator</nuxt-link>
              <nuxt-link to="https://play.google.com/store/apps/collection/cluster?clp=igNMChkKEzU3MDk3OTM1NDQzMDY2NzIwNjQQCBgDEi0KJ2NvbS5mYWNpbGlvLm1vYmlsZS5mYWNpbGlvcG9ydGFsLnRlbmFudBABGAMYAQ%3D%3D:S:ANO1ljIJBQs&gsr=Ck-KA0wKGQoTNTcwOTc5MzU0NDMwNjY3MjA2NBAIGAMSLQonY29tLmZhY2lsaW8ubW9iaWxlLmZhY2lsaW9wb3J0YWwudGVuYW50EAEYAxgB:S:ANO1ljKkDXY" class="PlatformDiagram__Nav-Item-Link">Mobile Apps</nuxt-link>
          </div>
           <div class="fc-PlatformDiagram__Nav-Item">
              <h6 class="PlatformDiagram__Nav-Item-Heading">
                 Optimize
              </h6>
              <p class="PlatformDiagram__Nav-Item-Description">
                 Sustainability embedded right into your routine FM Operations.
              </p>
              <nuxt-link to="/operations-software/connected-optimization" class="PlatformDiagram__Nav-Item-Link">Connected Maintenance</nuxt-link>
              <nuxt-link to="/sustainability-management" class="PlatformDiagram__Nav-Item-Link">Sustainability Management</nuxt-link>
              <nuxt-link to="/fault-detection-diagnostics" class="PlatformDiagram__Nav-Item-Link">Fault Detection & Diagnostics</nuxt-link>
           </div>
           <div class="fc-PlatformDiagram__Nav-Item">
              <h6 class="PlatformDiagram__Nav-Item-Heading">
                 Control
              </h6>
              <p class="PlatformDiagram__Nav-Item-Description">
                 Automate and control real-time operations with ‘zero’ complexities
              </p>
              <nuxt-link to="/resources/state-of-operations-and-maintenance-software" class="PlatformDiagram__Nav-Item-Link">Facilio Overlay Approach</nuxt-link>
              <nuxt-link to="/building-management-system" class="PlatformDiagram__Nav-Item-Link">Portfolio Automation</nuxt-link>
              <nuxt-link to="/rebuild/" class="PlatformDiagram__Nav-Item-Link">Operational Command Center</nuxt-link>
              <nuxt-link to="/rebuild/" class="PlatformDiagram__Nav-Item-Link">Touchless Controls</nuxt-link>

         </div>
           <div class="fc-PlatformDiagram__Nav-Item">
              <h6 class="PlatformDiagram__Nav-Item-Heading">
                 Engage
              </h6>
              <p class="PlatformDiagram__Nav-Item-Description">
                 Stand out for transparency, and best-in-class client services
              </p>
              <nuxt-link to="/operations-software/service-management" class="PlatformDiagram__Nav-Item-Link">Service Management</nuxt-link>
              <nuxt-link to="/workplace-management" class="PlatformDiagram__Nav-Item-Link">Workplace Management</nuxt-link>
              <nuxt-link to="/property-management" class="PlatformDiagram__Nav-Item-Link">Visitor Management</nuxt-link>
              <nuxt-link to="/operations-software/service-management" class="PlatformDiagram__Nav-Item-Link">Portal & Mobile Apps</nuxt-link>
           </div>
         </div>
         </div>
           <div style="background-color:#492196;padding:70px 0px">
         <div class="fc-integration-band fc-container">
            <div class="col-md-7">
            <h3 class="integration-band-head">Facilio integrates with your existing building systems and software— maximizing value in days, not months</h3>
            <div class="explore-integration" ><nuxt-link to="/integrations">Explore 50+ built-in integrations</nuxt-link></div>
            </div>
            <div class="col-md-5">
             <img  src="/images/cafm8.webp" class="integration-img" />
            </div>
         </div>
           </div>
         <section class="fc-home-portfolio">
            <div class="fc-container">
               <div class="portfolio-contain">
                  <div class="col-md-4">
               <h2 class="fc-home-portfolio-head">Easy to use & widely adopted, across industry verticals</h2>
                <p class="portfolio-desc">Each building portfolio is like a snowflake—slightly different than the others. Facilio’s solutions are flexible and modular to improve operating margins across real estate verticals.</p>
               </div>
               <div class=" col-md-8 fc-portfolio-card-wrapper" style="padding:0">
                  <div class="row">
                     <div class="col-md-4 col-sm-6">
                        <nuxt-link to="/industry/commercial-portfolios">
                           <div class="fc-portfolio-card home-portfolio">
                              <img src="/images/icons/home-feature-card-icon-1.svg" />
                              <h3>Commercial Properties</h3>
                              <p>
                                 Get a single view of portfolio operations & maintenance and align performance with agility.
                              </p>
                              <p  class="learn-more-label">Learn more</p>
                           </div>
                        </nuxt-link>
                     </div>
                     <div class="col-md-4 col-sm-6">
                        <nuxt-link to="/industry/corporate-facilities">
                           <div class="fc-portfolio-card home-portfolio">
                              <img src="/images/icons/home-feature-card-icon-2.svg" />
                              <h3>Corporate Enterprises</h3>
                              <p>
                                 Maximize space and asset utilization that contribute to excellent occupant experience.
                              </p>
                              <p  class="learn-more-label">Learn more</p>
                           </div>
                        </nuxt-link>
                     </div>
                     <div class="col-md-4 col-sm-6">
                        <nuxt-link to="/industry/facility-management-services">
                           <div class="fc-portfolio-card home-portfolio">
                              <img src="/images/icons/home-feature-card-icon-3.svg" />
                              <h3>FM Services</h3>
                              <p>
                                 Benchmark and maximize your workforce efficiency with contextual insights.
                              </p>
                              <p  class="learn-more-label">Learn more</p>
                           </div>
                        </nuxt-link>
                     </div>
                     <div class="col-md-4 col-sm-6">
                        <nuxt-link to="/">
                           <div class="fc-portfolio-card home-portfolio">
                              <img src="/images/icons/Healthcare.png" />
                              <h3>Healthcare</h3>
                              <p>
                                Digitize and automate your healthcare facility operations to optimize maintenance costs, prevent and predict equipment failures.
                              </p>
                           </div>
                        </nuxt-link>
                     </div>
                     <div class="col-md-4 col-sm-6">
                        <nuxt-link to="/industry/retail">
                           <div class="fc-portfolio-card home-portfolio">
                              <img src="/images/icons/Retail.png" />
                              <h3>Retail</h3>
                              <p>
                                 Radically transform your retail operations for the new world. Access data insights from your ecosystem to make accurate decisions and out beat your competition.
                              </p>
                              <p  class="learn-more-label">Learn more</p>
                           </div>
                        </nuxt-link>
                     </div>
                  </div>
               </div>
               </div>

            </div>
         </section>
         <section class="head12" style="min-height: 420px;margin-top: 60px;display: flex;">
         <div class="col-md-12 container" style="    padding: 0;">
            <div class="col-md-8">
            <h2 class="hero-banner-header">IDC Study: How CMMS is Evolving Beyond Asset Management & Maintenance </h2>
            <p class="hero-banner-sub">We teamed up with IDC Analyst Juliana Beauvais to unearth how Connected CMMS is helping solve complex property operations challenges and boost portfolio performance.</p>
            <div class="fc-button-collapsive band-button" style="max-width: none;margin:50px 40px 25px;">
            <nuxt-link to="/idc-connected-cmms-for-property-operations" class="fc-button-get-started" style="padding: 18px 35px;"
              >GET THE STUDY</nuxt-link
            >
          </div></div>
          <div class="profile-band">
            <div class="col-md-4 band-img"><img style="max-width: 100px;padding: 20px 0px;margin-left:30px;" src="/images/IDC_LOGO_Header_White_Color.svg"></div>
            <div class="col-md-4 band-img"><img style="max-width: 140px;margin-left:15px;    border: 1px solid #fff;    border-radius: 100px;" src="/images/JulianaBeauvaisPhoto1.jpeg"></div>
            <div class="profile-name">Juliana Beauvais</div>
            <div class="profile-sub-desc">Research Manager, <br/>
Enterprise Asset Management <br/>
and Smart Facilities</div>
</div>
         </div>
         </section>
      </div>
      <Footer />
   </div>
</template>
<script>
   import StaticClientCarousel from "../components/Client-carousel";
   import FeatureCarousel from "../components/FeatureCarousel";
   import HomeFeatureCarousel from "../components/HomeFeatureCarousel";
   import MobileFeaturesec from "../components/MobileFeaturesec";
   import FeatureCard from "../components/FeatureCard";
   import ClientCarousel from "../components/Client-carousel";
   import HomeNavbar from "../components/HomeNavbar";
   import Footer from "../components/Footer";
   import CREBanner from "../components/CREBanner";
   import VideoSeriesBand from "../components/VideoSeriesBand";
   export default {
      data() {
         return {
            selectedSection: 1
         };
      },
      components: {
         HomeNavbar,
         Footer,
         StaticClientCarousel,
         ClientCarousel,
         FeatureCard,
         HomeFeatureCarousel,
         MobileFeaturesec,
         FeatureCarousel,
         CREBanner,
         VideoSeriesBand
      },
      data() {
         return {
            cards: [{
                  helperText: "FOR COMMERICAL PROPERTY OWNERS",
                  heading: "Intuitive facilities experience",
                  description: "Put experience - not legacy tools - at the center of your operations. Facilio gives you a single view of portfolio O&M and aligns performance with speed and agility."
               },
               {
                  helperText: "FOR FACILITY MANAGERS",
                  heading: "360* visibility of operations",
                  description: "Take back control of operations, end-to-end. Facilio is built to hardware agnostically collect systems data and work with 3rd party apps, so you can capture every inefficiency, predictively."
               },
               {
                  helperText: "FOR OPERATIONAL STAFF",
                  heading: "AI-assited context for teams",
                  description: "Empower technicians of all skills to resolve faster. Provide real-time context on maintenance history,asset condition, tools required, and boost your team’s productivity."
               }
            ],
            top: ""
         };
      },
      head() {
         return {
            title: "Property Operations Done Right | Facilio",
            meta: [{
                  hid: "description",
                  name: "description",
                  content: "The property operations platform designed for time and cost-saving efficiency in building operations now and into the future. Learn more about Facilio platform and solutions."
               },
               {
                  hid: "bing-analytics-code",
                  name: "msvalidate.01",
                  content: "04773C7F48320BA0E105E62CC9A896C9"
               },
               {
                  hid: "yandex-verification",
                  content: "8c359a64feae0f89",
                  name: "yandex-verification"
               },
               {
                  hid: "fb-share-title",
                  property: "og:title",
                  content: "Property Operations Done Right | Facilio"
               },
               {
                  hid: "fb-share-description",
                  property: "og:description",
                  content: "The property operations platform designed for time and cost-saving efficiency in building operations now and into the future. Learn more about Facilio platform and solutions."
               },
               {
                  hid: "fb-share-image",
                  property: "og:image",
                  content: "https://facilio.com/images/Group12.png"
               },
               {
                  hid: "fb-share-url",
                  property: "og:url",
                  content: "http://facilio.com/"
               },
               {
                  hid: "twitter-title",
                  name: "twitter:title",
                  content: "Property Operations Done Right | Facilio"
               },
               {
                  hid: "twitter-description",
                  name: "twitter:description",
                  content: "The property operations platform designed for time and cost-saving efficiency in building operations now and into the future. Learn more about Facilio platform and solutions."
               },
               {
                  hid: "twitter-image",
                  name: "twitter:image",
                  content: "https://facilio.com/images/Group12.png"
               },
               {
                  hid: "twitter-url",
                  name: "twitter:url",
                  content: "https://facilio.com/"
               }
            ],
            link: [{
               rel: "canonical",
               href: "https://facilio.com/"
            }],
            script: [{
                  src: "../../../js/page.js"
               },
               {
                  src: "../../../js/waypoints.min.js"
               },
               {
                  src: "../../../js/includes.js"
               },
               {
                  src: "../../../js/position.js"
               }
            ]
         };
      }
   };
</script>
<style>
   .fc-feature-carousel-sec {
      margin: 15px 0px;
   }

   .fc-feature-sub-nav {
      background-color: #4a28c8;
      z-index: 3;
   }

   .fc-feature-sub-nav ul {
      list-style-type: none;
      display: inline;
   }

   .fc-feature-sub-nav ul li {
      display: inline-block;
   }

   .fc-feature-sub-nav li a {
      margin: 10px 50px 0px 0px !important;
      position: relative;
   }

   .fc-feature-sub-nav li.active a {
      font-family: "ProximaNovaBold", -apple-system, BlinkMacSystemFont, "Segoe UI",
         Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
         "Segoe UI Emoji", "Segoe UI Symbol" !important;
      font-size: 18px !important;
      padding: 0px !important;
      color: #30f0f9 !important;
      text-transform: none !important;
      text-align: left !important;
   }
   .hero-banner-sub {
    font-size: 19px;
    color: #fff;
    font-family: 'ProximaNovaRgRegular';
    font-weight: 500;
    padding: 15px 40px;
   }

   .fc-feature-sub-nav li.active a:after {
      content: "";
      display: block;
      position: absolute;
      background: #30f0f9;
      top: 60px;
      width: 100%;
      height: 3px;
      opacity: 0.8;
   }
   .head12 {
      content: "";
    background: url(/images/Bg.png) no-repeat;
    background-position: 50%;
    max-width: none;
    background-size: cover;
    padding: 55px 40px;
    min-height: 380px !important
   }
   .hero-banner-header {
      
    font-family: 'ProximaNovaBold';
    color: #fff;
    line-height: 1.2;
    font-size: 35px;
    border-radius: 13px;
    max-width: 900px;
    padding: 15px 40px;
   }
   .integration-band-head {
      font-family: 'Merriweather';
    font-size: 32px;
    max-width: 700px;
    line-height: 1.48;
    width: 100%;
    color: #fff;
    margin-bottom: 35px;
    margin-top: 135px;
   }
   .explore-integration > a{
      font-family: 'ProximaNovaSemibold';
    font-size: 20px;
    max-width: 700px;
    line-height: 1.28;
    width: 100%;
    color: #00d4fd;
    transition: 0.2s ease-out;
   }
   .explore-integration {
      transition: 0.2s ease-out;
   }
   .explore-integration >a:hover::after {
    margin-left:15px;
   }
   .profile-band {
      text-align: center;
    display: grid;
    align-items: center;
    justify-content: space-around;
    margin: auto;
   }
   .explore-integration>a::after {
      content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    position: relative;
    top:3px;
    margin-top: 6px;
    margin-left: 10px;
    opacity: 1;
    transition: 0.3s ease;
    background: url(/images/svg/right-blue.svg) center/contain no-repeat;
   }
   .portfolio-desc {
    max-width: 950px;
    margin: 0 auto;
    font-family: 'ProximaNovaRgRegular';
    font-size: 18px;
    font-weight: normal;
    text-align: center;
    color: #181b3b;
    margin-bottom: 0;
    margin-top: 0;
    padding-top: 20px;

   }
   .profile-name {
          font-family: 'ProximaNovaSemiBold';
    font-size: 18px;
    text-transform: uppercase;
    color: #fff;
    margin-top: 20px;
   }
   .fc-why-buy-us h2  {
    max-width: 900px;
    margin: 0 auto;
    font-family: "Merriweather";
    font-size: 40px;
    font-weight: 300 !important;
    line-height: 55px;
    letter-spacing: 0.5px;
    text-align: center;
    color: #181b3b;
    margin-bottom: 0;
    margin-top: 0;
    padding-top: 10px;

   }
   .learn-more-label {
    float: right;
    position: absolute;
    bottom: 10px;
          font-family: 'ProximaNovaSemibold' !important;
    color: #0fa8ba  !important;
   }
   .learn-more-label::after {
      transform: rotate(-45deg) translateY(2px);
    background-image: url("/images/svgexport-2.svg");
    background-size: contain;
   content: "";
    display: inline-block;
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
    background-position: 50%;
    background-repeat: no-repeat;
    padding: 6px 8px;
    margin-top: 4px;
   }
   .home-rating-band {
      display: flex;
      justify-content: center;
      margin: 50px 0px;
      padding: 0px 5px;
   }
   .fc-star-band-1::before {
    content: "";
    background: url(/images/label-1.svg)no-repeat;
    width: 40px;
    position: absolute;
    height: 40px;
    margin-left: -135px;
    margin-top: -24px;

   }
   .fc-star-band {
    width: 220px;
    background: #f5f0ff;
}
.fc-star-band p {
   font-family: 'ProximaNovaRgRegular';
       color: #000;
}
.fc-star-band h3 {
    font-size: 16px;
    font-family: 'ProximaNovaSemibold';
    background-color: #492196;
    border: 1px solid #492196;
    padding: 10px 0px;
    color: #fff;
    margin: 0;
    transition: 0.3s ease-out;
    white-space: nowrap;
}
.home-portfolio {
   padding: 20px 20px;
    margin-top: 30px;
    min-height: 295px;
    transition: 0.2s ease-out !important;
        box-shadow: -8px 8px 19px -8px rgb(123 127 218 / 20%);
}
.home-portfolio::after {
   display: none;
}
.home-portfolio:hover::after {
   display:  none;
}
.home-portfolio:hover {
    box-shadow: 0 1px 1px 0 rgb(90 122 190 / 10%), 0 10px 20px 0 rgb(90 122 190 / 20%);
    -webkit-transform: translateY(-6px);
    -ms-transform: translateY(-6px);
    transform: translateY(-6px);
    }
   .fc-webniar-top-sec {
  width: 100%;
  height: 426px;
  background: #5200aa;
  margin-top: 90px;
  overflow: hidden;
  position: relative;
  background-image: url("/images/Group64.svg") !important;
  background-repeat: no-repeat !important;
  background-position: 50% 0% !important;
}
   .fc-why-buy-us {
      padding: 90px 0px 90px 0px ;
   }
   .fc-feature-sub-nav li.active a:focus {
      font-family: "ProximaNovaBold", -apple-system, BlinkMacSystemFont, "Segoe UI",
         Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
         "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: 18px !important;
      text-transform: none !important;
      letter-spacing: 0;
      text-align: left !important;
   }

   .fc-feature-sub-nav li a:focus {
      font-family: "ProximaNovaBold", -apple-system, BlinkMacSystemFont, "Segoe UI",
         Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
         "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: 18px !important;
      text-transform: none !important;
      letter-spacing: 0;
      color: #30f0f9;
      text-align: left !important;
   }
  .home-banner-description  {
             font-size: 20px;
    font-family: 'ProximaNovaRgRegular';
    color: #000;
    max-width: 650px;
    margin: 50px auto 0px auto;
  }
   .fc-feature-sub-nav li a {
      font-family: "ProximaNovaRgRegular", -apple-system, BlinkMacSystemFont, "Segoe UI",
         Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
         "Segoe UI Emoji", "Segoe UI Symbol" !important;
      font-size: 18px !important;
      padding: 0px !important;
      letter-spacing: 0.2px;
      text-transform: none !important;
      text-align: left !important;
      color: #ffffff !important;
   }
   .fc-PlatformDiagram__Navigation-Group {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 48px 15px;
    flex-wrap: wrap;
   }
   .fc-PlatformDiagram__Nav-Item {
   flex-basis: 192px;
   padding-top: 10px;
   }
   .PlatformDiagram__Nav-Item-Heading {
     font-size: 22px;
    font-family: 'ProximaNovaSemibold';
    letter-spacing: 0.2px;
    color: #181b3b;
    text-transform: capitalize;
    font-weight: 800;
    margin-bottom: 16px;
   }
   .PlatformDiagram__Nav-Item-Description {
   padding-bottom: 10px !important;
   font-family: "ProximaNovaRgRegular";
    color: rgb(39, 49, 57);
    margin: 0px;
    color: rgb(0, 0, 0);
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
   }
   .PlatformDiagram__Nav-Item-Link {
      font-family:'ProximaNovaSemibold' ;
      font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #0fa8ba;
    display: block;
    margin: 15px 0px;
   }
   .PlatformDiagram__Nav-Item-Link:hover {
      color: #0fa8ba !important;
      text-decoration: underline !important;
   }
   .fc-carousel-nav-wrap {
      max-width: 1350px;
      width: 100%;
      margin: 0 auto;
   }

   .fc-home-carousel-left {
      padding: 5px 30px;
    border-radius: 7.5px;
   }

   .fc-home-carousel-left span {
      font-size: 20px;
      font-family: "ProximaNovaBold", -apple-system, BlinkMacSystemFont, "Segoe UI",
         Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
         "Segoe UI Emoji", "Segoe UI Symbol" !important;
      letter-spacing: 0.83px;
      color: #30f0f9;
   }
   .fc-integration-band {
    position: relative;
    background-size: cover;
    height: auto;
    width: 100%;
    display: flow-root;
   }
   .integration-img {
    max-width: 400px;
    /* margin: auto; */
    display: flex;
    margin: auto;
   }
   .fc-home-carousel-left h3 {
      font-size: 34px;
    max-width: 500px;
    width: 100%;
    font-family: "ProximaNovaBold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
    line-height: 1.15;
    color: #30f0f9;
    margin-left:25px;
   }

   .fc-home-carousel-left p {
      font-size: 18px;
      max-width: 485px;
      width: 100%;
      font-family: "ProximaNovaRgRegular", -apple-system, BlinkMacSystemFont, "Segoe UI",
         Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
         "Segoe UI Emoji", "Segoe UI Symbol" !important;
      line-height: 1.67;
    letter-spacing: 0.3px;
    color: #ffffff;
    margin-top: 30px;
   }

   .fc-feature-sub-nav {
      z-index: 100;
      margin-top: 15px;
   }

   .fc-home-carousel-wrap {
      max-width: 1400px;
      width: 100%;
      margin: 0 auto;
   }

   .fc-carousel-content {
      margin: 30px 0px;
   }

   .fc-home-feature-image {
      margin-top: 40px;
      max-width: 1000px;
      width: 100%;
   }

   .fc-home-feature-image-3 {
      margin-top: 100px;
      width: 100%;
   }
.profile-sub-desc {

    max-width: 100%;
    text-align: center;
    font-family: 'ProximaNovaRgRegular';
    font-size: 16px;
    color: #fff;
    margin-top: 8px;

}
   .al-fajer-band-cta:after {
      content: "";
      display: inline-block;
      width: 15px;
      height: 15px;
      position: absolute;
      margin-top: 6px;
      margin-left: 10px;
      opacity: 1;
      -webkit-transition: 0.3s ease;
      transition: 0.3s ease;
      background: url("/images/icons/arrow-right-black.png") center/contain no-repeat;
   }

   .al-fajer-band-cta:hover:after,
   .al-fajer-band-desc:hover~.al-fajer-band-cta:after {
      -webkit-transform: translateX(4px);
      -ms-transform: translateX(4px);
      transform: translateX(4px);
   }
   .fc-webniar-top-sec {
  width: 100%;
  height: 426px;
  background: #5200aa;
  margin-top: 90px;
  overflow: hidden;
  position: relative;
  background-image: url("/images/Group64.svg");
  background-repeat: no-repeat;
  background-position: 50% 0%;
}
.fc-webinar-profile-img {
  position: absolute;
  inset: 0;
}
.home-background {
  background: url("/images/fill-02.png") no-repeat;
   background-position: 50% 0%;
   background-size: cover;
}
.fc-webinar-heaer-content h1 {
  font-family: "ProximaNovaBold";
  z-index: 400;
  color: #fff;
  padding-top: 160px;
}
.fc-star-band h3:hover {
   background: #411888;
       border: 1px solid #492196 !important;
    padding: 10px 0px;

}
.fc-webinar-heaer-content p {
  font-family: "ProximaNovaRgRegular";
  font-weight: 400;
  z-index: 400;
  color: #00d4fd;
  font-size: 17px !important;
  max-width: 600px;
}
@media screen and (min-width:768px) {
   .fc-home-portfolio-head {
      font-size: 32px !important;
    line-height: 42px !important;
    font-family: 'Merriweather';
    text-align: left !important;
   }
   .portfolio-desc {
      text-align: left;
    padding-right: 75px;
   }

}
@media screen and (max-width:1000px) {
   .fc-webniar-top-sec {
      background-image: none  !important;
   }
   .fc-webinar-heaer-content p {
          font-family: "ProximaNovaRgRegular";
    font-weight: 400;
    z-index: 400;
    color: #00d4fd;
    margin-top: 25px;
    font-size: 21px !important;
    max-width: 380px !important;
   }
   .hero-banner-header {
      font-size:20px;
      text-align: center;
       padding: 15px 20px;    
   }
   .hero-banner-sub {
       font-size: 17px;
       text-align: center;
       padding: 15px 20px;
   }
   .head12 {
      padding: 50px 0px;
   }
   .band-img {
      margin: 0 auto;
    display: table;
   
   }
   .band-button {
      margin: 50px auto  !important;
   }
}
@media screen and (max-width: 700px) {
  .fc-webniar-top-sec {
    height: 100%;
    padding-bottom: 50px;
    background-size: cover;
  }
  .fc-integration-band {
     padding: 0px !important;
  }

}
@media screen and (max-width: 750px) {
  .home {
     margin-top: -37px;
  }
}
@media screen and (min-width: 975px) {
  .portfolio-contain {
display: flex;
  }
}
@media screen and (max-width: 600px) {
  .fc-webinar-profile-img {
    display: none;
  }
}
   @media screen and (max-width:500px) {
      .integration-band-head {
         font-size: 27px !important;
         text-align: center !important;
      }
      .integration-img {
         max-width: 340px !important
         ;
      }
      .fc-star-band h3 {
         font-size: 14px !important;
      }
      .fc-star-band p {
         font-size: 13px;
       margin: 5px 0px;
       }
       .fc-home-carousel-left h3 {
          margin-left: 0;
       }
      .fc-home-portfolio h2 {
         font-size: 25px !important;
         line-height: 35px !important;
      }
      .fc-why-buy-us h2 {
         font-size: 25px !important;
         line-height: 35px !important;
      }
      .portfolio-desc {
         font-size: 16px;
      }
      .home-portfolio {
         margin: 30px 10px 0px 10px;
      }
   }
   .card-4::after  {
      display: none  !important;
      content: '';


   }
   @media screen and (max-width: 400px) {
.integration-img {
    max-width: 280px!important;
}
   }
   @media only screen and (max-width: 768px) {
.integration-band-head {
    font-size: 30px;
    margin-top: 0px  !important;
   }
   .explore-integration {
      margin-bottom: 30px;
      text-align: center;
   }
   .fc-why-buy-us {
      font-size: 30px;
    padding: 50px 0px 50px 0px !important;
   }

   }

</style>