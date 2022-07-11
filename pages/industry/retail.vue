<template>
  <div class="productPage btn-shade">
    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>

      <div class="mask"></div>
      <div class="solution-section-3" style="margin-top:45px;">
        <div class="fc-container">
          <div class="overview-page-headings">
              <h6 class="productHeadPink text-uppercase" style="margin-top:40px;">
              CONNECTED RETAIL SOLUTIONS
                </h6>
            <h1>
              Reimagine retail operations to deliver a superior in-store customer experience
            </h1>
            <p style="max-width:650px;">
              Retail portfolios face the highest disruptions and dynamicity across real estate sectors, 
              owing to their complex operational workflows. Facilio's data-driven approach empowers you 
              to build more connected and streamlined operations with solutions for operational readiness, 
              sustainability lifecycle management, and portfolio scale optimizations in one place.
            </p>
            <GetStartedButton />
          </div>
        </div>
      </div>
      <!--workplace-feature-2-->
      <div class="workplace-feature-2">
        <div class="fc-container w-feature-wrapper">
          <div class="row fc-wrapper-pad">
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">
                OPERATIONAL READINESS
              </h6>
              <div class="fc-workplace-subhead">
                O&M solutions that elevate the 
                <br />shopping experience
              </div>
              <div class="w-feature-desc">
                Control end-to-end retail  operations lifecycle— including property maintenance and client engagement to 
                vendor management, and asset performance— from a centralized tool. Facilio’s <nuxt-link to="/operations-software/maintenance-management">operations and maintenance 
                suite</nuxt-link> helps streamline maintenance and reduce unexpected maintenance costs. Purpose-built for retail 
                stakeholders at every level,  Facilio lets you run every day operations effectively using web and mobile 
                apps, automate workorder assignments to your chosen vendors, sit back and watch your store operations run 
                like clockwork, while you focus on keeping your customers happy. 
              </div>
            </div>
            <div class="col-md-6">
              <div class="fc-img-src" style="margin-top:35px;">
                <img
                  src="/images/connect-cmms-tool.png"
                  alt=" Reduce complexity"
                  title=" Reduce complexity"
                  style="max-width:600px;width:100%;"
                />
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad fc-reverse">
            <div class="col-md-6">
              <div class="fc-img-src">
                <img
                  src="/images/energy-savings.png"
                  alt="  Provide faster and better support to tenants"
                  title="  Provide faster and better support to tenants"
                  style="max-width:600px;width:100%;"
                />
              </div>
            </div>
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">
                SUSTAINABILITY LIFECYCLE MANAGEMENT
              </h6>
              <div class="fc-workplace-subhead">
                Your skip-5-spaces ahead card in the race to carbon net-zero
              </div>
              <div class="w-feature-desc">
                Ingrain sustainability in your building processes right at the atomic level. Easily identify 
                assets that cause unwarranted energy consumption and avert the negative impact of defective 
                assets. Issues like evaporator breakdown, suboptimal condenser performance or refrigerator 
                leaks cause suboptimal asset performance and shoot up energy consumption. With Facilio, 
                understand asset usage, energy consumption patterns, identify gaps in energy savings across 
                your portfolio and be the benchmark for environment-conscious businesses.
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad">
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">DATA-DRIVEN VISIBILITY</h6>
              <div class="fc-workplace-subhead">
               Eliminate guesswork in operations, with real-time intelligence
              </div>
              <div class="w-feature-desc">
                With a centralized platform collecting data on asset health, asset performance, 
                and energy consumption, trend analysis and FDD provides the right arsenal for 
                store managers to combat future issues without crippling store operations. 
                Automatically screen real-time alarms from BMS systems and convert them into 
                workorders, suppress redundant alarms, and escalate the ones that are critical 
                so you can pick the alarms that need immediate attention.
              </div>
            </div>
            <div class="col-md-6">
              <div class="fc-img-src">
                <img
                  src="/images/bms-alarms-to-workorder.png"
                  alt="Simplified assessment that improves asset lifecycle"
                  title="Simplified assessment that improves asset lifecycle"
                  style="max-width:500px;width:100%;"
                />
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad fc-reverse">
            <div class="col-md-6">
              <div class="fc-img-src" style="margin-top:45px;">
                <img
                  src="/images/heatmap-enchanced.png"
                  alt=" Maintain the entire portfolio from a single place"
                  title=" Maintain the entire portfolio from a single place"
                  style="max-width:500px;width:100%;"
                />
              </div>
            </div>
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">
                PORTFOLIO SCALE OPTIMIZATIONS 
              </h6>
              <div class="fc-workplace-subhead">
                Occupant comfort, customer engagement and cost control for new-age retail stores
              </div>
              <div class="w-feature-desc">
                Retail stores often come under scrutiny for their IAQ, which directly affects the health of store 
                employees and patrons alike. With Facilio, continuously track the air quality metric and modify it 
                to elevate occupant comfort. Centrally manage and control in-store conditions like modifying air 
                temperature based on occupant count which also optimizes the asset’s performance and lifecycle, in 
                turn reducing costs. Gauge the impact of your actions on customer comfort and get feedback on 
                parameters like cleanliness using surveys and customer portals. 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <VideoSeriesBand />

    <!----explore-feature-2-->
    <section class="fc-explore-2">
      <div class="fc-container">
        <div class="row">
          <div class="col-md-6">
            <div class="fc-violet-wrap">
              <h3>Run energy efficient retail properties</h3>
              <ul class="book-list" id="featurelist">
                <li>
                  <div class="flex-middle2">
                    <div class="f27 pR20">¯</div>
                    <div class="pL20">Mobile maintenance</div>
                  </div>
                </li>
                <li>
                  <div class="flex-middle2">
                    <div class="f27 pR20">¯</div>
                    <div class="pL20">SLA adherence</div>
                  </div>
                </li>
                <li>
                  <div class="flex-middle2">
                    <div class="f27 pR20">¯</div>
                    <div class="pL20">Portfolio-wide Benchmarking</div>
                  </div>
                </li>
                <li>
                  <div class="flex-middle2">
                    <div class="f27 pR20">¯</div>
                    <div class="pL20">Automated Work orders</div>
                  </div>
                </li>
                <li>
                  <div class="flex-middle2">
                    <div class="f27 pR20">¯</div>
                    <div class="pL20">Remote asset control</div>
                  </div>
                </li>
                <li>
                  <div class="flex-middle2">
                    <div class="f27 pR20">¯</div>
                    <div class="pL20">Shift planning</div>
                  </div>
                </li>
                <li>
                  <div class="flex-middle2">
                    <div class="f27 pR20">¯</div>
                    <div class="pL20">Breaktime setting</div>
                  </div>
                </li>
                <li>
                  <div class="flex-middle2">
                    <div class="f27 pR20">¯</div>
                    <div class="pL20">Customer feedback apps and portals</div>
                  </div>
                </li>
              </ul>
              <p class="pL20 fc-see-all" id="featureMore">See all features</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="fc-gray-wrap">
              <h3>Trusted by forward-thinking enterprises across the globe</h3>
              <div class="fc-less-pad">
                <img src="/images/customer-logo/logo-left/logo.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!----explore-feature-2-->
  <Footer />

  </div>
</template>

<script>
import GetStartedButton from "../../components/GetStartedButton";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import VideoSeriesBand from "../../components/VideoSeriesBand";

export default {
  components: {
    GetStartedButton,
     Navbar,Footer,
    VideoSeriesBand
  },
  mounted: function() {
    $(document).click(function(e) {
      if (!$(e.target).is(".fc-accordion-list")) {
        //   $('.collapse').collapse('hide');
      }
    });

    $("#featureMore").click(function() {
      $("#featurelist li:hidden")
        .slice(0, 5)
        .slideDown();
          $("#featureMore").css({"display":"none"});
    });
  },
  head() {
    return {
      title: "Retail Facilities Management Software | Facilio",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Enhance the retail shopping experience for your customers and optimize portfolio-wide store operations with data-driven intelligence."
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Retail Facilities Management Software | Facilio"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content: "Enhance the retail shopping experience for your customers and optimize portfolio-wide store operations with data-driven intelligence."
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content:
            "https://facilio.com/images/og-images/og-img421.png"
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/industry/retail"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Retail Facilities Management Software | Facilio"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content: "Enhance the retail shopping experience for your customers and optimize portfolio-wide store operations with data-driven intelligence."
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "https://facilio.com/images/og-images/og-img421.png"
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/industry/retail"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/industry/retail"
        }
      ],
      script: [
        { src: "../../js/page.js" },
        { src: "../../js/waypoints.min.js" },
        { src: "../../js/includes.js" }
      ]
    };
  }
};
</script>

<style>
#featurelist li:nth-child(n + 6) {
  display: none;
}
.book-list li {
  padding-bottom: 7px !important;
}
</style>
