<template>
  <div class="productPage btn-shade">
    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>

      <section class="fc-cs-banner scrollTo" id="customer-success">
        <div class="container">
          <h1>
            We are committed to help your real estate portfolio
            become fully data-driven
          </h1>
          <p>Your facility is unique and you have a distinctive style to managing operations. There is no one-size-fits-all approach to innovate across your portfolio. Exactly why, at Facilio, we believe in being your partner in innovation and co-creating your modern O&M playbook</p>
          <nuxt-link to="/get-started" class="fc-customer-success-btn">Try Facilio</nuxt-link>

          <div class="arrow bounce">
            <a
              class="fa fa-angle-down fa-3x"
              style="color:#ffffff;text-decoration: none;"
              href="#our-team"
            ></a>
          </div>
        </div>
      </section>

      <section class="fc-onboard-desc scrollTo" id="our-team">
        <div class="container">
          <h3>
            Our customer team has empowered top enterprises with
            data-driven operational transparency
          </h3>
          <div class="onboard-team-img">
            <img src="/images/onboard/facilio-onboard-team.png" />
          </div>
        </div>
      </section>

      <section class="fc-onboard-deep-desc">
        <div class="container">
          <p>No matter what stage of digital journey you are in - be it centrally consolidating your operational data or setting up a command and control centre across portfolio - our team is committed to assist you at every step and make ends meet, just the way you want</p>
        </div>
      </section>

      <section class="fc-onboard-features">
        <div class="container">
          <h3>Drive innovation across your portfolio in days, not months</h3>
          <p>Here’s a surprise! You don’t need a village to optimize your portfolio performance. No additional hardware, no big chunks of code, no overhead cost to integrate incompatible tools. Now with Facilio, there’s a simper, faster and hassle-free way to leverage your existing gold mines of data and future proof your portfolio in 5 easy steps</p>
        </div>

        <div class="fc-onboard-sw-section">
          <div class="container">
            <div class="fc-switch-sections">
              <div class="row fc-sw-section">
                <div class="col-md-6">
                  <div class="fc-sw-head">Plan and Scope</div>
                  <img
                    src="/images/onboard/plan-and-scope.png"
                    alt=" plan and scope"
                    title=" plan and scope "
                    style="max-width:450px;width:100%;padding-top:50px;"
                  />
                </div>
                <div class="col-md-6">
                  <h4>Setting Goals</h4>
                  <ul class="fc-sw-list">
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg> Sales team shares knowledge on customer goals, challenges, important metrics
                    </li>
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg> In-depth study to understand existing infrastructure of each building / site
                    </li>
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg> Define scope to optimize from customers’ current digital journey
                    </li>
                  </ul>

                  <h4>Strategize Action / Optimisation</h4>
                  <ul class="fc-sw-list">
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg>Share onboarding checklist - customer team to furnish data on sites, assets, spaces, BAS data points to be mapped, historical data (if any), current tech stack
                    </li>
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg>Develop and share Facilio integration strategy / digitisation roadmap
                    </li>
                  </ul>
                </div>
              </div>

              <div class="row fc-sw-section">
                <div class="col-md-6">
                  <div class="fc-sw-head-2">Connect and Centralize</div>
                  <img
                    src="/images/onboard/connect-and-centralize.png"
                    alt=" plan and scope"
                    title=" plan and scope "
                    style="max-width:450px;width:100%;padding-top:50px;"
                  />
                </div>
                <div class="col-md-6">
                  <h4>Facilio Integrations</h4>
                  <ul class="fc-sw-list">
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg> Integrate with existing tech stack - 3rd party tools, enterprise software, environment and manual records
                    </li>
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg> IoT-based integration with existing BAS systems
                    </li>
                  </ul>

                  <h4>Data Consolidation</h4>
                  <ul class="fc-sw-list">
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg>Facilio Platform integration on cloud
                    </li>
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg>Real-time BAS data capture
                    </li>
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg> Centrally consolidate data from disparate sources
                    </li>
                  </ul>
                </div>
              </div>

              <div class="row fc-sw-section">
                <div class="col-md-6">
                  <div class="fc-sw-head-3">Become an expert</div>
                  <img
                    src="/images/onboard/become-an-expert.png"
                    alt=" plan and scope"
                    title=" plan and scope "
                    style="max-width:450px;width:100%;padding-top:50px;"
                  />
                </div>
                <div class="col-md-6">
                  <h4>Adoption Training</h4>
                  <ul class="fc-sw-list">
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg> Dedicated CSM, 24*7 support and white-glove service at every stage
                    </li>
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg> Training for all users - facility managers, technicians, supervisors
                    </li>
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg> Education on data-driven operations & maintenance best practices
                    </li>
                  </ul>

                  <h4>Personalize Workflows</h4>
                  <ul class="fc-sw-list">
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg>Review benchmarks, workflows, SLA rules / policies
                    </li>
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg>Customize widgets, dashboards and metrics to track
                    </li>
                  </ul>
                </div>
              </div>

              <div class="row fc-sw-section">
                <div class="col-md-6">
                  <div class="fc-sw-head-4">Launch and Optimize</div>
                  <img
                    src="/images/onboard/launch-and-optimize.png"
                    alt=" plan and scope"
                    title=" plan and scope "
                    style="max-width:450px;width:100%;padding-top:50px;"
                  />
                </div>
                <div class="col-md-6">
                  <h4>Go Live</h4>
                  <ul class="fc-sw-list">
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg>Rollout Facilio Platform for all stakeholders
                    </li>
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg> Unified data and 360* operational visibility - on web and mobile
                    </li>
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg> Facility stakeholders start monitoring real-time data / performance KPIs
                    </li>
                  </ul>

                  <h4>Data-driven Optimization</h4>
                  <ul class="fc-sw-list">
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg>Drill down analytics to better understand portfolio performance
                    </li>
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg>Tie data-driven insights to business metrics - energy cost savings, productivity, and revenue enhancement
                    </li>
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg>Automate workflows / actions based on insights
                    </li>
                  </ul>
                </div>
              </div>

              <div class="row fc-sw-section">
                <div class="col-md-6">
                  <div class="fc-sw-head-3">Scale and Repeat</div>
                  <img
                    src="/images/onboard/scale-and-repeat.png"
                    alt=" plan and scope"
                    title=" plan and scope "
                    style="max-width:450px;width:100%;padding-top:50px;"
                  />
                </div>
                <div class="col-md-6">
                  <h4>Maximize Efficiency</h4>
                  <ul class="fc-sw-list">
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg>Improve performance across portfolio - add new sites, additional systems, integrate workflows
                    </li>
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg> Deploy ML-driven models - predictively correlate performance patterns, automate corrective actions
                    </li>
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg>Integrate sustainability performance - review metrics, benchmark analysis, M&V
                    </li>
                  </ul>

                  <h4>Become Future-ready</h4>
                  <ul class="fc-sw-list">
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg>Build enhancements with unified data - Facilio connected apps framework
                    </li>
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg>Quickly deploy innovative O&M use cases - RestAPIs
                    </li>
                    <li>
                      <svg class="fc-sw-point" height="12" width="12">
                        <circle cx="5" cy="5" r="5" stroke-width="3" fill="#dddce9" />
                      </svg>Continuously move forward in your digital journey - in steady increments
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="fc-cs-feature">
        <div class="fc-cs-feature-card row container">
          <div class="col-md-6">
            <h3>See why top CRE leaders are betting their future on data-driven O&M</h3>
          </div>
          <div class="col-md-6">
            <p>After years of being bogged down by traditional, complex and silo-ed systems that bury useful data & insights, forward-thinking enterprises are making the switch to data-driven operations</p>
            <div class="fc-cs-cta">
              <nuxt-link to="/break-free-from-legacy-cafm" class="fc-cs-try-white">Learn More</nuxt-link>
            </div>
          </div>
        </div>
      </section>
    <Footer />

    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default {
  components: {
    Navbar, Footer
  },
  head() {
    return {
      title: "Customer Success |  Facilio",
      meta: [
        {
          hid: "decription",
          name: "description",
          content:
            "Our Customer Team has empowered top commercial real estate enterprises to gain data-driven operational transparency. Here’s how they’ll work with you after you buy Facilio."
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Customer Success |  Facilio"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "No matter what stage of digital journey your buildings are in, our customer success team is committed to assist you to make ends meet and become fully data-driven, just the way you want Uncover your path to CRE 3.0 now with Facilio."
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content:
            "https://s3-us-west-2.amazonaws.com/ws-facilio.com/assets/images/og-images/onboard-team.png"
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/customer-success"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Customer Success |  Facilio"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "No matter what stage of digital journey your buildings are in, our customer success team is committed to assist you to make ends meet and become fully data-driven, just the way you want Uncover your path to CRE 3.0 now with Facilio."
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content:
            "https://s3-us-west-2.amazonaws.com/ws-facilio.com/assets/images/og-images/onboard-team.png"
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/customer-success"
        }
      ],
      script: [
        { src: "../js/page.js" },
        { src: "../js/waypoints.min.js" },
        { src: "../js/includes.js" }
      ],
      link: [
        {
          href:
            "https://maxcdn.bootstryapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
          rel: "stylesheet"
        },
        {
          rel: "canonical",
          href: "https://facilio.com/contact"
        }
      ]
    };
  }
};
</script>

<style>
.arrow span {
  font-size: 20px;
  color: #ffffff;
  max-width: 650px;
  width: 100%;
  font-family: ProximaNovaRgRegular;
}
.arrow {
  margin-top: 100px !important;
  text-align: center;
  margin: 0 auto;
  max-width: 100px;
}
.bounce {
  -moz-animation: bounce 0.5s infinite;
  -webkit-animation: bounce 0.5s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-10px);
  }
}
</style>
