<template>
  <div class="productPage btn-shade">
    <div id="productPage"></div>

    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>

      <div class="mask"></div>

      <div class="solution-section-1">
        <div class="fc-container">
          <div class="overview-page-headings">
              <h6 class="productHeadPink text-uppercase">
                  Continuous sustainability
                </h6>
            <h1>
              Embed Sustainability
              <br />as a daily habit
            </h1>
            <p>
              Adopt sustainability measures in your routine FM Operations.
              Leverage the synergy between high-power tools in Facilio’s
              sustainability suite to optimize your assets consistently.
            </p>
            <GetStartedButton />
          </div>
        </div>
      </div>

      <!--continuous-sustainability-feature-2-->
      <div class="max-width700 width-center">
      <div class="mT60">
        <h2 class="primeHead text-center">
          Get your efficiency flywheel going
          <br />with real-time O&M visibility
        </h2>

        <p class="partner-decs2 product-desc-3">
          Ingrain sustainability in your building processes right at the atomic
          level. Ad hoc energy initiatives or random retrofit projects don’t
          quite fit the bill and are similar to those spikes on your energy charts!
          <br />
          <br />Energy management moves forward hand in hand with your
          maintenance workflows and FDD. Push your sustainability domino one day
          at a time. Achieve long term success by continually drifting towards a
          happy space with all three stakeholders - the environment, building,
          and tenants - in it!
        </p>
      </div></div>
      <!--continuous-sustainability-feature-2-->

      <!--continuous-sustainability-feature-3-->
      <div class="workplace-feature-6">
        <div class="fc-container w-feature-wrapper">
          <div class="row fc-wrapper-pad">
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">
                Single source of truth
              </h6>
              <div class="fc-workplace-subhead">Portfolio-wide Visibility</div>
              <div class="w-feature-desc">
                Pit buildings or standalone systems against each other, flexibly
                run varied parameter checks, and establish benchmarks with
                Facilio’s unified enterprise platform.
                <br />
                <br />Pore over real-time sustainability information reports -
                End-use breakdown and associated costs, building wise energy and
                water consumption, usage trends by the hour, day, week, or
                month, a benchmark of portfolio-wide building performance,
                projected vs actual cost, etc. - across your portfolio and bring
                holistic excellence in O&M.
              </div>
            </div>
            <div class="col-md-6">
              <div class>
                <img
                  src="/images/cs-1.png"
                  alt=" Portfolio-wide Visibility"
                  title=" Portfolio-wide Visibility"
                  style="max-width:550px;width:100%;"
                />
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad fc-reverse">
            <div class="col-md-6">
              <div class>
                <img
                  src="/images/cs-2.png"
                  alt="Asset Optimization"
                  title="Asset Optimization"
                  style="max-width:500px;width:100%;"
                />
              </div>
            </div>
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">
                Zero in on the energy drainers
              </h6>
              <div class="fc-workplace-subhead">Asset Optimization</div>
              <div class="w-feature-desc">
                Easily identify assets causing unwarranted energy consumption.
                Access its complete cheat sheet that tells you its failure rate,
                recovery time, most common alarms, a split of all maintenance
                costs, etc. Let your teams be in the know-how when performance
                dips or the load shoots up.
                <br />
                <br />Close the loop with pre-defined setpoint change or on/off
                commands via Facilio back to building systems, or automatically
                trigger a work order for set conditions. Lower repair/spare
                parts costs and with an improved asset life cycle, let your OpEx
                figures fall to an all-time low!
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad">
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">
                Be uber-ready always
              </h6>
              <div class="fc-workplace-subhead">FDD on cloud</div>
              <div class="w-feature-desc">
                Leverage Facilio’s Machine-Learning based predictive analytics
                to address faults as they appear. Be notified of critical asset
                breakdowns, unmet compliances, and associated downtime. Enable
                role-based sharing of dashboards so that operators and
                supervisors are on the same page with operational updates.
                <br />
                <br />Pave way for fast and highly responsive teams. With a
                central view of portfolio-wide alarms and an ordered resolution
                stack in place, focus on innovation in the workplace, and tenant
                improvement needs effortlessly.
              </div>
            </div>
            <div class="col-md-6">
              <div class>
                <img
                  src="/images/cs-3.png"
                  alt="Help your visitors help themselves"
                  title="Help your visitors help themselves"
                  style="max-width:700px;width:100%;"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!---continuous-feature-2-->
    <Verdantixbanner />
    <!---continuous-sustainability-feature-3-->
    <section class="fc-casestudy-bg">
      <div class="fc-casestudy-bg-container">
        <!-- <div class="fc-desc text-center visibility">Break free from legacy and point tools.</div>
        <h2 class="fc-h2">Revel in new levels of efficiency.</h2>-->
        <div class="fc-why-customer-card-block mT100 mB60 mainpage-casestudy">
          <FeatureCard
            v-for="item in cards"
            v-bind:key="item.helperText"
            v-bind:helperText="item.helperText"
            v-bind:heading="item.heading"
            v-bind:description="item.description"
          />
        </div>
      </div>
    </section>
    <!----explore-feature-2-->
    <section class="fc-explore-2">
      <div class="fc-container">
        <div class="row">
          <div class="col-md-6">
            <div class="fc-violet-wrap">
              <h3>Maximize long-term asset health</h3>
              <ul class="book-list" id="featurelist">
                <li>
                  <div class="flex-middle2">
                    <div class="f27 pR20">¯</div>
                    <div class="pL20">Sub-metering</div>
                  </div>
                </li>
                <li>
                  <div class="flex-middle2">
                    <div class="f27 pR20">¯</div>
                    <div class="pL20">Resource tracking</div>
                  </div>
                </li>
                <li>
                  <div class="flex-middle2">
                    <div class="f27 pR20">¯</div>
                    <div class="pL20">Heatmaps</div>
                  </div>
                </li>
                <li>
                  <div class="flex-middle2">
                    <div class="f27 pR20">¯</div>
                    <div class="pL20">Regression Analysis</div>
                  </div>
                </li>
                <li>
                  <div class="flex-middle2">
                    <div class="f27 pR20">¯</div>
                    <div class="pL20">Intuitive Dashboard</div>
                  </div>
                </li>
                <li>
                  <div class="flex-middle2">
                    <div class="f27 pR20">¯</div>
                    <div class="pL20">Predictive diagnostics</div>
                  </div>
                </li>
                <li>
                  <div class="flex-middle2">
                    <div class="f27 pR20">¯</div>
                    <div class="pL20">Anomaly detection</div>
                  </div>
                </li>
                <li>
                  <div class="flex-middle2">
                    <div class="f27 pR20">¯</div>
                    <div class="pL20">Sustainability branding</div>
                  </div>
                </li>
                <li>
                  <div class="flex-middle2">
                    <div class="f27 pR20">¯</div>
                    <div class="pL20">Configurable reports</div>
                  </div>
                </li>
                <li>
                  <div class="flex-middle2">
                    <div class="f27 pR20">¯</div>
                    <div class="pL20">Energy conservation Measurement</div>
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
import FeatureCard from "../../components/FeatureCard";
import GetStartedButton from "../../components/GetStartedButton";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Verdantixbanner from "../../components/Verdantixbanner";

export default {
  components: {
    FeatureCard,
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
  data() {
    return {
      cards: [
        {
          helperText: "FOR ESCOs",
          heading: "Achieve quick RoIs",
          description:
            "Break your energy ROI records by centrally and granularly viewing  ECM projects in real-time. Position a tech-driven energy model at the helm of your strategy. Witness lowered overhead, and simplified audits and seamlessly scale multiple projects together."
        },
        {
          helperText: "FOR RETROFITS",
          heading: "Take the digital route",
          description:
            "Resist capital-heavy physical retrofits and improve asset value with Facilio’s ultra-efficient digital retrofits. Circumvent tenant-annoying disruptive processes, and demanding safety essentials, compliance and audits. End expensive sudden outages."
        },
        {
          helperText: "FOR HOTELS",
          heading: "Attract millennial consumers",
          description:
            "Attract millennial consumers through environmentally responsible buildings! Make a beeline for green building certifications, and cost cuts by optimizing operations using Facilio’s O&M platform. Create a win-win by enhancing guest experience and driving revenue as well!"
        }
      ]
    };
  },
  head() {
    return {
      title: "Continuous Sustainability across the Enterprise | Facilio",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Embed sustainability measures in daily FM Operations with Facilio's centralized platform. Optimize assets and gain continuous energy efficiency in real-time."
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Continuous Sustainability across the Enterprise | Facilio"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Embed sustainability measures in daily FM Operations with Facilio's centralized platform. Optimize assets and gain continuous energy efficiency in real-time."
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content:
            "https://facilio.com/images/og-images/continuous-sustainability.png"
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/solutions/continuous-sustainability"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Continuous Sustainability across the Enterprise | Facilio"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Embed sustainability measures in daily FM Operations with Facilio's centralized platform. Optimize assets and gain continuous energy efficiency in real-time."
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content:
            "https://facilio.com/images/og-images/continuous-sustainability.png"
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/solutions/continuous-sustainability"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/solutions/continuous-sustainability"
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
