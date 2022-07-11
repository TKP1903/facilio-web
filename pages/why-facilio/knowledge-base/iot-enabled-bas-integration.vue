<template>
  <div class="productPage fc-guide-banner btn-shade">
    <div id="productPage"></div>

    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>

      <!--case-study-hero-banner-->
      <div class="mask"></div>
      <!-- header -->

      <!--guide-breakcrumbs-->
      <div class="guide-breadcrumbs">
        <div class="container">
          <div class="guide-breadcrumbs_wrap">
            <ol class="guide-breadcrumbs">
              <li>
                <nuxt-link to="/why-facilio/">
                  <span>Home</span>
                  <svg class="guide-breadcrumbs__icon" viewBox="0 0 19 34.1">
                    <g>
                      <path
                        d="M19,17c0,0.5-0.2,1-0.6,1.4L3.4,33.5c-0.8,0.8-2,0.8-2.8,0c-0.8-0.8-0.8-2,0-2.8L14.2,17L0.6,3.4c-0.8-0.8-0.8-2,0-2.8  c0.8-0.8,2-0.8,2.8,0l15.1,15.1C18.8,16,19,16.5,19,17z"
                      />
                    </g>
                  </svg>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/why-facilio/knowledge-base/iot-enabled-bas-integration">
                  <span>IoT-enabled Integration with BAS</span>
                  <svg class="guide-breadcrumbs__icon" viewBox="0 0 19 34.1">
                    <g>
                      <path
                        d="M19,17c0,0.5-0.2,1-0.6,1.4L3.4,33.5c-0.8,0.8-2,0.8-2.8,0c-0.8-0.8-0.8-2,0-2.8L14.2,17L0.6,3.4c-0.8-0.8-0.8-2,0-2.8  c0.8-0.8,2-0.8,2.8,0l15.1,15.1C18.8,16,19,16.5,19,17z"
                      />
                    </g>
                  </svg>
                </nuxt-link>
              </li>
              <li>
                <span>IoT-enabled Integration with BAS</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <!--guide-breakcrumbs-->

      <!--guide-main-desc-->
      <div class="guide-main-desc">
        <div class="container">
          <div class="guide-sidebar col-md-4 hidden-xs hidden-sm" id="guide-sidebar">
            <nav class="navtabs guide-navtabs">
              <h3 class="navtabs_title">Contents</h3>
              <ul>
                <li class="active">
                  <a
                    href="#what-are-the-benefits-of-real-time-bas-integration"
                  >What are the benefits of real-time BAS integration?</a>
                </li>
                <li>
                  <a
                    href="#we-have-a-bms-software-why-do-we-need-an-fm-software-that-integrates-with-bas"
                  >
                    We have a BMS software. Why do we need an FM software that
                    integrates with BAS?
                  </a>
                </li>
                <li>
                  <a
                    href="#can-i-integrate-facilio-with-existing-building-automation-systems-if-so-how"
                  >
                    Can I integrate Facilio with existing building automation
                    systems. If so how?
                  </a>
                </li>
                <li>
                  <a
                    href="#do-i-need-any-additional-hardware-for-iot-integration"
                  >Do I need any additional hardware for IoT integration?</a>
                </li>
                <li>
                  <a
                    href="#is-integrating-with-existing-bas-time-consuming"
                  >Is integrating with existing BAS time-consuming?</a>
                </li>
                <li>
                  <a
                    href="#does-your-iot-integration-support-multiple-protocols-is-there-any-protocol-bms-that-cannot-be-integrated"
                  >
                    Does your IoT integration support multiple protocols? Is
                    there any protocol/BMS that cannot be integrated?
                  </a>
                </li>
                 <li>
                  <a
                    href="#can-i-use-facilio-if-my-building-has-little-to-no-automation"
                  >
                   Can I use Facilio if my building has little to no automation?
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="guide-content col-md-8">
            <span id="what-are-the-benefits-of-real-time-bas-integration"></span>
            <h1 class="guide-title">IoT-enabled BAS Integration</h1>

            <div class="guide-desc-container">
              <h3>What are the benefits of real-time BAS integration?</h3>
              <p>
                There’s a problem with the way buildings have been managed for
                years – the never ending amount of problems / complaints at any
                given time, siloed tools with no effective means to track and
                act on those problems and the pressure for your facility team to
                work within restrained budgets – have set unrealistic
                expectations for FMs to always deliver more than what they have.
              </p>
              <p>The solution?</p>
              <p>
                We need to find a way to optimise facilities that can make the
                most of available resources. And where better to start than
                leveraging gold mines of data already available in your
                buildings?
              </p>
              <p>
                By integrating your BAS data with your facility workflows, you
                can
              </p>
              <ul>
                <li>
                  <span>Empower your facility team</span> to troubleshoot faster
                  with real-time context right within your tickets
                </li>
                <li>
                  <span>Make data-driven decisions</span> to improve your
                  building performance in real time
                </li>
                <li>
                  Predict future problems with intelligent ML-driven analytics
                  on past fault data and patterns
                </li>
                <p>
                  <span>Enable maximum efficiency</span>
                  <span
                    id="we-have-a-bms-software-why-do-we-need-an-fm-software-that-integrates-with-bas"
                  ></span>by optimising asset, energy and workforce performance in your
                  buildings
                </p>
              </ul>
            </div>

            <div class="guide-desc-container">
              <h3>
                We have a BMS software. Why do we need an FM software that
                integrates with BAS?
              </h3>
              <p>
                What happens when you rely on siloed tools to operate all your
                buildings? Let’s try to break down what happens when there is,
                say an HVAC breakdown, in your building:
              </p>
              <ol>
                <li>
                  The first people to know are your tenants who immediately
                  raise the complaint to your facility team
                </li>
                <li>
                  Your Facility Manager raises a ticket in your CaFM and assigns
                  it to a technician
                </li>
                <li>
                  The technician then has to call the BMS engineer to look into
                  the BMS software to find what went wrong in the last hour
                </li>
                <li>
                  Once the BMS engineer communicates the problem – if it was a
                  coolant leak or improper air balance or chiller failure – the
                  technician fixes the problem and then the facility manager
                  closes the ticket
                </li>
                <li>
                  By then, your tenant is probably sweating hard and is annoyed
                  for the umpteenth time this week about the discomfort at work
                </li>
              </ol>

              <ul class="avgres">
                <li>Avg resolution time: 3 hours</li>
              </ul>
              <p>
                <span>“</span>
                <span>
                  We are surrounded by data, but starved for insights ” –Jay
                  Baer
                </span>
              </p>
              <p>Consider you have an FM tool that</p>
              <ul>
                <li>
                  Integrates with BAS to
                  <span>get real-time data</span> on the
                  system
                </li>
                <li>
                  Analyses real-time data to
                  <span>predictively identify the problem</span>
                </li>
                <li>
                  Predict future problems with intelligent ML-driven analytics
                  on past fault data and patterns
                </li>
                <p>
                  Automates contextual tickets from alarms to
                  <span>fast-track troubleshooting</span>
                </p>
              </ul>

              <p>Now in case of an HVAC breakdown in your building,</p>

              <ol>
                <li>
                  Facility manager gets an alarm on mobile when real-time
                  temperature data goes beyond set threshold
                </li>
                <li>
                  Facility manager assigns the automatic work order created to a
                  technician
                </li>
                <li>
                  The technician has the recorded temperature data, alarm
                  details and possible causes for the problem on his/her mobile
                  work order
                </li>
                <li>The technician fixes the problem and closes the work order</li>
                <li>
                  The tenant, happily working on his day’s deadlines, does not
                  notice anything amiss
                </li>
              </ol>
              <span
                id="can-i-integrate-facilio-with-existing-building-automation-systems-if-so-how"
              ></span>
              <p>“An ounce of prevention is worth a pound of cure”</p>
            </div>

            <div class="guide-desc-container">
              <h3>
                Can I integrate Facilio with existing building automation
                systems. If so how?
              </h3>
              <p>
                Yes, you can. One of the biggest advantages of Facilio is that you don’t have to discard your existing BAS or workflows.
 Facilio’s enterprise-wide IoT platform is designed to seamlessly integrate with your existing building automation systems. 
This way you could adapt new, powerful and real-time capabilities without uprooting the existing infrastructure.<p>
                <span
                  id="do-i-need-any-additional-hardware-for-iot-integration"
                ></span>
                
              <p>  Facilio’s unique IoT driver enables integration with your BMS, 
                HVAC, Fire Safety, Lift, Security or any automation system in order to bring 
                all data from buildings under one central platform. 
              </p>
              <p>With data across your portfolio centrally available on Facilio’s platform,
                 you could derive actionable insights in real-time. With our unified suite 
                 of applications on top of contextual enterprise data hub, you could now make
                  data-driven decisions critical to your facilities on the go and be on top of 
                  what’s happening with your high-value assets, anytime anywhere.</p>
                  <p>Here is how it works -</p>

                <img src="/images/guide-banners/detail.png" alt="" class="align-middle inbet-img">
            </div>
            <div class="guide-desc-container">
              <h3>Do I need any additional hardware for IoT integration?</h3>
              <span id="is-integrating-with-existing-bas-time-consuming"></span>
              <p>No. You do not need any additional hardware for IoT integration. 
                Facilio is fully hardware agnostic and if your building/facility 
                has basic automation/BAS that is connected to your HVAC,
                Fire Alarm, Security or any other system, Facilio can seamlessly integrate with the same. </p>
                <p>In the case that your building has little to no automation, Facilio has a robust channel 
                  ecosystem across US, India and Middle East regions for setting up automation in your buildings
                   that could enable connected facilities O&M in real time.</p>
            </div>

            <div class="guide-desc-container">
              <h3>Is integrating with existing BAS time-consuming?</h3>
              <p>
            Though the scope and scale of work depends on how vast the facility is, 
            our team has a consistent track record of integrating clients’ portfolios between 4 - 5 weeks*(tentatively). 
             With Facilio’s onboarding team helping you at every step, the benefits of integrating BAS with facility
              workflows shall outweigh the time taken to onboard and the entire process 
                <span
                  id="does-your-iot-integration-support-multiple-protocols-is-there-any-protocol-bms-that-cannot-be-integrated"
                ></span>proprietary IoT driver
              </p>
              <ul class="fc-bolded"><li>
                <b>Initial site survey by team Facilio:</b>
                We undertake an in-depth feasibility study of the site to understand the automation infrastructure
                 of each building and note the various possibilities available for optimisation.
              </li> <li>
                <b>Kickstarting onboarding with data sharing:</b>
               Next in this process, we will share an onboarding checklist for you 
               to furnish basic data from your end - list of sites, assets & spaces to be onboarded,
                BMS data points and equipment mapping, historical data, if any, for optimising prediction workflows etc. 
              </li> <li>
                <b>Data Verification and Sanitisation:</b>
              In order to prevent discrepancies at later critical stages, we will review and process your data for 
              correctness and accuracy before mapping the same onto Facilio’s platform.
               </li>
               <li>
               <b>Integration with BAS using IoT: </b>
               Once, data is verified on both sides, we will develop the BAS integration strategy 
               and push the data onto Facilio’s enterprise-wide platform on cloud. 
               </li>
               </ul>

               <p>*Timeline, scope and scale of work are subject to conditions</p>
            </div>

            <div class="guide-desc-container">
              <h3>
                Does your IoT integration support multiple protocols? Is there
                any protocol/BMS that cannot be integrated?
              </h3>
              <p>
             Facilio’s unique IoT driver can connect to all standard protocols 
             including BACNET/IP, Modbus, OPC, oBIX etc. Any additional protocol
              can be supported at request as we have.
              </p>
            </div>
                   <div class="guide-desc-container">
              <h3>
                Can I use Facilio if my building has little to no automation?
              </h3>
              <span id="can-i-use-facilio-if-my-building-has-little-to-no-automation"></span>
              <p>
            Yes you could. However without automation, 
            you would only be using our Facilities Operations & Maintenance suite on cloud.
             To fully leverage the potential of enterprise-wide O&M and gain real-time value 
             from Facilio,<b style="color:#ff3184"> you need to integrate your O&M workflows with real-time data from buildings.</b>
              </p>
              <p>But here’s the best way to scale connected buildings - At Facilio,
                 we follow an incremental approach to optimisation.
                 To start with, you could automate a single building in your portfolio,
                  connect data with everyday workflows using IoT and optimise on asset, 
                  energy and maintenance cost in that building.</p>
                  <p>Once you see clear ROI on automating and optimising performance in a single building,
                     you could then scale automation across portfolio. This way, you could plan your investment
                     backed by proof of concept and visibly demonstrate real-time value from enterprise-wide O&M using Facilio! </p>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!--guide-main-desc-->
  <Footer />

  </div>
</template>

<script>
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default {
  components: {
    Navbar, Footer
  },
  mounted: function() {
    window.onscroll = function() {
      if (window.XMLHttpRequest) {
        var position = window.pageYOffset;
        var guideViewTop = $(window).scrollTop();
        var guideViewBottom = guideViewTop + $(window).height();
        var elemTop = $("#fc-footer").offset().top;

        if (position > 100 && !(guideViewBottom >= elemTop)) {
          $("#guide-sidebar").css({
            position: "fixed",
            top: "0",
            height: "100vh",
            "margin-top": "100px"
          });
        } else {
          if (guideViewBottom >= elemTop) {
            $("#guide-sidebar").css({
              top: 0 - (guideViewBottom - elemTop)
            });
          } else {
            $("#guide-sidebar").css({
              position: "relative",
              top: "auto",
              "margin-top": "0px"
            });
          }
        }
      }
    };
    $(document).ready(function() {
      $("a[href*=#]").bind("click", function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $(target).offset().top
            },
            600,
            function() {
              location.hash = target; //attach the hash (#jumptarget) to the pageurl
            }
          );

        return false;
      });
    });
    // $(window)
    //   .scroll(function() {
    //     var scrollDistance = $(window).scrollTop();
    //     $(".guide-desc-container").each(function(i) {
    //       if ($(this).position().top <= scrollDistance) {
    //         $(".navtabs ul li.active ").removeClass("active");
    //         $(".navtabs ul li")
    //           .eq(i)
    //           .addClass("active");
    //       }
    //     });
    //   })
    //   .scroll();
    // Bootstrap Carousel Function
    $(".carousel").carousel({
      interval: 1000
    });
    $(window).on("scroll", function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 10) {
        $("body").addClass("down");
      } else {
        $("body").removeClass("down");
      }
    });
    $(document).ready(function() {
      $(".nav-tabs a").click(function(e) {
        $(this).tab("show");
        e.preventDefault();
        $(this)
          .siblings()
          .removeClass("active")
          .end()
          .addClass("active");
      });
    });
    $(".carousel").carousel({
      interval: 500
    });
  },
  head() {
    return {
      title: "IoT-enabled BAS Integration | Facilio Guide",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Is complex, standalone and expensive facilities management software pulling down your team efficiency? Switch to modern mobile-first facilities experience now with Facilio."
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Facilio Guide | Facilio"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content: "facilio guide"
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "/images/og-images/break-free-from-legacy-cafm.png"
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content:
            "https://facilio.com/why-facilio/knowledge-base/iot-enabled-bas-integration"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Facilio Guide | Facilio"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content: "facilio guide"
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "/images/og-images/break-free-from-legacy-cafm.png"
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content:
            "https://facilio.com/why-facilio/knowledge-base/iot-enabled-bas-integration"
        }
      ],
      link: [
        {
          rel: "canonical",
          href:
            "https://facilio.com/why-facilio/knowledge-base/iot-enabled-bas-integration"
        }
      ],
      script: [
        { src: "../../../js/page.js" },
        { src: "../../../js/waypoints.min.js" },
        { src: "../../../js/includes.js" }
      ]
    };
  }
};
</script>

<style>
.clear:after {
  visibility: hidden;
  display: block;
  content: "";
  clear: both;
  height: 0;
}
.navbar-default {
  border-bottom: 1px solid #f2f2f2 !important;
}
</style>
