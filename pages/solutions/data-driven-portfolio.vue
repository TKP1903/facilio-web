<template>
  <div class="productPage btn-shade">
    <div id="productPage"></div>

    <div class="myPage" id="myPage">
      <Navbar />
      <div class="solution-section-3">
        <div class="fc-container">
          <div class="overview-page-headings">
             <h6 class="productHeadPink text-uppercase">
                  Data Driven Portfolio
                </h6>
            <h1>
              Fuel operational intelligence across portfolio with real-time
              actionable insights
            </h1>
            <p>
              Leverage a data-driven platform to connect multiple stakeholders
              with information. Make smart decisions to stay at the forefront of
              sustainability and ensure a delightful tenant experience.
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
                Connected O&M
              </h6>
              <div class="fc-workplace-subhead">
                Bring all building information in one place
              </div>
              <div class="w-feature-desc">
                Harness building performance data from multiple sources such as
                automation systems, third party tools, along with occupancy and
                environmental conditions centrally at one place. Use this data
                to predict operations in real-time across portfolio. For
                example, if your chiller has raised alarms because of pressure
                anomalies in its evaporator, then you know your chiller is going
                to fail soon.
              </div>
              <div class="w-feature-desc">
                Manage all vendor, contract, purchase order, warranty, labour
                and inventory information from the same place and stay on
                top of every work order expense and labour productivity.
              </div>
            </div>
            <div class="col-md-6">
              <div class="fc-img-src">
                <img
                  src="/images/fdd-4.png"
                  alt="Gain context and actionable insights"
                  title="Gain context and actionable insights"
                  style="max-width:600px;width:100%;"
                />
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad fc-reverse">
            <div class="col-md-6">
              <div class="fc-img-src">
                <img
                  src="/images/pm-2.png"
                  alt="Improve comfort and reduce operating costs"
                  title="Improve comfort and reduce operating costs"
                  style="max-width:500px;width:100%;"
                />
              </div>
            </div>
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">
                Frictionless Tenant experience
              </h6>
              <div class="fc-workplace-subhead">
                Boost tenant satisfaction
              </div>
              <div class="w-feature-desc">
                Solve tenant problems faster through a tenant portal where
                they can raise service requests. Remove hassle for tenants by
                helping them keep track of the issue status through their
                portal. Let tenants manage their visitors and vendors using the
                portal and help them schedule their visitor and vendor
                entries.
              </div>
              <div class="w-feature-desc">
                Improve occupant comfort by providing an occupant app which
                enables them to personalize their environment such as room
                temperature. Provide optimal working conditions through proper
                maintenance and faster problem resolution thereby ensuring health and safety of tenants.
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad">
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">
                Continuous Sustainability
              </h6>
              <div class="fc-workplace-subhead">
                Manage and reduce utility consumption
              </div>
              <div class="w-feature-desc">
                View integrated energy data from connected assets and monitor
                consumption trend using tools such as heatmaps. Get KPI reports
                to measure actual energy consumption against target. Conduct M&V
                projects and precisely quantify your energy savings. Measure
                effectiveness of your energy Management efforts using EnPL
                regression tool.
              </div>
              <div class="w-feature-desc">
                Identify anomalies in energy consumption that do not conform to
                baseline using ML. Quickly solve any energy inefficiency by
                getting to its root cause using Facilio’s robust and powerful
                Fault Detection and Diagnostics functionality.
              </div>
            </div>
            <div class="col-md-6">
              <div class="fc-img-src">
                <img
                  src="/images/cs-1.png"
                  alt="Simplified assessment that improves asset lifecycle"
                  title="Simplified assessment that improves asset lifecycle"
                  style="max-width:600px;width:100%;"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Verdantixbanner />

      <!---property-feature-2-->
    </div>
    <Footer />
  </div>
</template>

<script>
import GetStartedButton from "../../components/GetStartedButton";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Verdantixbanner from "../../components/Verdantixbanner";

export default {
  components: {
    GetStartedButton,
    Navbar, Footer,
    Verdantixbanner
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
          $("#featureMore").css("display", "none");
    });
  },
  head() {
    return {
      title: "Data driven portfolio operations | Facilio",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Get portfolio-wide intelligence on building performance with the Enterprise O&M Platform from Facilio. Connect disparate systems and workflows, harness collective data, and unlock new opportunities."
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Data driven portfolio operations | Facilio"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Get portfolio-wide intelligence on building performance with the Enterprise O&M Platform from Facilio. Connect disparate systems and workflows, harness collective data, and unlock new opportunities."
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content:
            "https://facilio.com/images/og-images/data-driven-portfolios.png"
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/solutions/data-driven-portfolio"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Data driven portfolio operations | Facilio"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Get portfolio-wide intelligence on building performance with the Enterprise O&M Platform from Facilio. Connect disparate systems and workflows, harness collective data, and unlock new opportunities."
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content:
            "https://facilio.com/images/og-images/data-driven-portfolios.png"
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/solutions/data-driven-portfolio"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/solutions/data-driven-portfolio"
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

<style></style>
