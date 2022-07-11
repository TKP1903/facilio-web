<template>
  <div class="productPage btn-shade">
    <div id="productPage"></div>

    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <!--End platform-overview-hero-sec-->
      <div class="mask"></div>

      <div class="sustainability-section">
        <div class="fc-container">
          <div class="overview-page-headings">
            <h1>IoT-Powered Sustainability Management</h1>
            <p>
              Facilio organizes real-time sustainability insights, identifies
              inefficiencies and predicts consumption, while helping CREs
              achieve energy efficiency performance across portfolio.
            </p>
            <GetStartedButton />
          </div>
        </div>
      </div>
      <!--End platform-overview-hero-sec-->

      <!--platform-feature-1-->
      <div class="workplace-feature-2">
        <div class="fc-container w-feature-wrapper">
          <div class="fc-workplace-center">
            Centralize your equipment and energy performance
          </div>
          <div class="w-feature-head-center">
            Optimize energy efficiency in real-time
          </div>

          <div class="row fc-wrapper-pad">
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">
                Portfolio-wide Enriched data
              </h6>
              <div class="fc-workplace-subhead">
                Real-time utility and
                <br />data analytics
              </div>
              <div class="w-feature-desc">
                Decode crucial messages from comprehensive data acquired by IoT.
                Visualise insights like service usage by category, end-use
                breakdown, comparison with baseline, portfolio wide benchmarking
                in a variety of graphical formats that's readily available.
              </div>
              <div class="w-feature-desc mT20">
                Engage stakeholders with portfolio-wide utility comparison stats
                and other enriching reports on a customizable dashboard. Stay
                aware of carbon emission tags and energy cost projection derived
                from AI.
              </div>
            </div>
            <div class="col-md-6">
              <div class="product-img">
                <img
                  src="/images/wee1.png"
                  alt="Real-time utility"
                  title="Real-time utility"
                  style="max-width:600px;width:100%;"
                />
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad fc-reverse">
            <div class="col-md-6">
              <div class="product-img">
                <img
                  src="/images/wee2.png"
                  alt="Accurately quantify energy "
                  title="Accurately quantify energy"
                  style="max-width:600px;width:100%;"
                />
              </div>
            </div>
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">M&V Precision</h6>
              <div class="fc-workplace-subhead">
                Accurately quantify energy
                <br />savings for your retrofits
              </div>
              <div class="w-feature-desc">
                Take a pure-software approach to M&V to quell any savings
                uncertainties. Harness real-time data from connected assets for
                instant and highly-credible reports anytime. Easily incorporate
                complex adjustments or formulae for precise baseline conditions.
                <div class="w-feature-desc mT20">
                  <div class="w-feature-desc mT20">
                    Uncover reliable findings for superior documenting of your
                    project designs and budget. Bolster your ongoing
                    peer-to-peer evaluation of facilities, or any ECM, with
                    powerful Regression Analytics in-built.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad">
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">
                EnPI-based energy tracker
              </h6>
              <div class="fc-workplace-subhead">
                Gauge effectiveness of
                <br />energy measures
              </div>
              <div class="w-feature-desc">
                With a default EnPI or lack of flexibility to select EnPIs that suit
                your enterprise’ needs, you hit a roadblock in expressing energy
                performance in adequately meaningful and easy-to-explain terms.
              </div>
              <div class="w-feature-desc mT20">
                With Facilio, create unlimited EnPIs like tower energy per
                square ft, water usage intensity, etc., with any combination of
                data points. You can even link alarms for threshold deviations.
                Get a clear picture of progress across assets or buildings and
                show continual improvement in efficiency.
              </div>
            </div>
            <div class="col-md-6">
              <div class="product-img">
                <img
                  src="/images/wee3.png"
                  alt=" Gauge effectiveness "
                  title=" Gauge effectiveness"
                  style="max-width:600px;width:100%;"
                />
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad fc-reverse">
            <div class="col-md-6">
              <div class="product-img">
                <img
                  src="/images/wee4.png"
                  alt=" A colour-based approach to cracking data "
                  title=" A colour-based approach to cracking data"
                  style="max-width:490px;width:100%;"
                />
              </div>
            </div>
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">Versatile Heatmaps</h6>
              <div class="fc-workplace-subhead">
                A colour-based approach to cracking data
              </div>
              <div class="w-feature-desc">
                Pick any data point across the sea of assets or spaces to create
                visually-digestible heatmap charts. Play around with flexible
                timestamp preferences, and smart data point aggregation options
                to grasp in-depth your building behaviour.
              </div>
              <div class="w-feature-desc mT20">
                Accomplish easy plotting of large and complex data and capture
                the trends in energy consumption. Grab an instant overview of
                key performance parameters and zoom in on areas that matter
                most.
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad">
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">
                FAULT DETECTION AND DIAGNOSTICS
              </h6>
              <div class="fc-workplace-subhead">
                Predictive Analysis,
                <br />Real Time Action
              </div>
              <div class="w-feature-desc">
               Are you spending hours poring over energy trend charts or pages of nuisance alarms - trying to figure out why you always get a specific alarm at 2.00AM?
              </div>
              <div class="w-feature-desc mT20">
                Powered by Machine Learning models, Facilio’s FDD performs
                predictive analysis. It detects and diagnoses equipment failure
                by applying sophisticated rule-base (or simple configurable math
                expressions), in real-time and in the most easily digestible way
                - for example, an overridden setpoint in a VAV handler is now a
                no sweat at all.
              </div>
            </div>
            <div class="col-md-6">
              <div class="product-img">
                <img
                  src="/images/wee5.png"
                  alt="Predictive Analysis, Real Time Action"
                  title=" Predictive Analysis, Real Time Action"
                  style="max-width:500px;width:100%;"
                />
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad fc-reverse">
            <div class="col-md-6">
              <div class="product-img">
                <img
                  src="/images/wee6.png"
                  alt="Put every key performance within reach "
                  title=" Put every key performance within reach"
                  style="max-width:600px;width:100%;"
                />
              </div>
            </div>
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">
                BENCHMARKING AND REPORTS
              </h6>
              <div class="fc-workplace-subhead">
                Put every key performance within reach.
              </div>
              <div class="w-feature-desc">
                Instead of wondering how well your facility performs, get
                summarized key indexes whenever you need it. Know how your sites
                compare against similar property types, against global
                standards, within different reference systems, the current
                status on everything that’s needed for compliance, and what you
                need for upcoming audits.
              </div>
              <div class="w-feature-desc mT20">
                Facilio lets you easily create and set baselines, compare
                variance, dig into detailed chiller performance, and rank sites
                on granular KPIs
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad">
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">SMART WORKFLOW</h6>
              <div class="fc-workplace-subhead">
                Tie operations together
                <br />- anomaly to resolution
              </div>
              <div class="w-feature-desc">
                In the past, analytics meant painfully harvesting data from slow
                tools and leaving it to stay inactive in multiple silos. Today,
                teams can take action faster with enriched insights.
              </div>
              <div class="w-feature-desc mT20">
                Facilio ingests performance anomalies from asset and energy data
                and automatically triggers work orders to teams immediately.
                Optimize for faster resolution and boost your building
                performance in real-time.
              </div>
            </div>
            <div class="col-md-6">
              <div class="product-img">
                <img
                  src="/images/wee7.png"
                  alt="Tie operations together anomaly to resolution"
                  title=" Tie operations together anomaly to resolution"
                  style="max-width:600px;width:100%;"
                />
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad fc-reverse">
            <div class="col-md-6">
              <div class="product-img">
                <img
                  src="/images/wee8.png"
                  alt="More metering, no added cost "
                  title=" More metering, no added cost"
                  style="max-width:700px;width:100%;"
                />
              </div>
            </div>
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">VIRTUAL METERING</h6>
              <div class="fc-workplace-subhead">
                More metering, no added cost
              </div>
              <div class="w-feature-desc">
                We’ve heard, time and again, that you cannot manage what you
                cannot measure. But the cost to purchase and install physical
                meters for a building using hundreds of VAVs, could be far more
                than the savings you expect to recover.
              </div>
              <div class="w-feature-desc mT20">
                With Facilio, you can easily virtualize meters on the cloud. It
                lets you combine and divide meters in various proportions to
                create target VMs, giving you the benefit of metering without
                the additional expense that traditional meters bring.
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad">
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">TENANT BILLING</h6>
              <div class="fc-workplace-subhead">
                Create a premium
                <br />experience for tenants
              </div>
              <div class="w-feature-desc">
                Noting down meter readings on paper or analyzing BMS data on a
                spreadsheet typically adds an average delay of 35-40 days
                between billing period and when costs get recovered. But not
                with Facilio.
              </div>
              <div class="w-feature-desc mT20">
                Facilio automates meter readings with mobile apps or directly
                via BMS interfacing. Avoid discrepancies with tenants,
                automatically generate custom invoices, and easily keep track of
                recovery across portfolio.
              </div>
            </div>
            <div class="col-md-6">
              <div class="product-img">
                <img
                  src="/images/wee9.png"
                  alt="Create a premium experience for tenants"
                  title="Create a premium experience for tenants"
                  style="max-width:700px;width:100%;"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!---explore-other-feature-->
    <section class="fc-other-feature">
      <div class="fc-container">
        <div class="row">
          <div class="col-md-4">
            <div class="fc-explore-wrap">
              <h3>
                Explore other
                <br />features
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="92"
                height="229"
                class="dots-mid-svg"
              >
                <path
                  fill="#759ef0"
                  fill-opacity="0.2"
                  fill-rule="evenodd"
                  d="M88.811 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177A3.182 3.182 0 0192 92.344a3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 70.11a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177A3.182 3.182 0 0192 47.877a3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 25.643a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0188.811.233 3.182 3.182 0 0192 3.41a3.182 3.182 0 01-3.189 3.176zM67.858 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233A3.182 3.182 0 0164.67 3.41 3.182 3.182 0 0167.858.233a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM45.994 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0145.994.233a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM25.041 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0125.04 44.7a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0125.04.233a3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zM4.088 95.52a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234A3.182 3.182 0 01.899 70.11a3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176A3.182 3.182 0 014.088 44.7a3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233A3.182 3.182 0 01.899 3.41 3.182 3.182 0 014.088.233 3.182 3.182 0 017.276 3.41a3.182 3.182 0 01-3.188 3.176zM88.81 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 135.96a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zM67.858 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM45.994 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM25.041 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM4.088 228.07a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176z"
                />
              </svg>
            </div>
          </div>
          <div class="col-md-4">
            <div class="fc-o-ft-list">
              <nuxt-link to="/property-management">
                <div class="fc-of-wrap">
                  <img class="navicon-pos" src="/images/icons/navicon-2.svg" />
                  <div class="fc-of-subhead">Property Management</div>
                  <div class="fc-of-sub-txt">
                    Deliver superior tenant experience while improving net
                    operating income
                  </div>
                </div>
              </nuxt-link>

              <nuxt-link to="/workplace-management">
                <div class="fc-of-wrap">
                  <img class="navicon-pos" src="/images/icons/navicon-3.svg" />
                  <div class="fc-of-subhead">Workplace Management</div>
                  <div class="fc-of-sub-txt">
                    Personalise comfort & experience drive smart workplace
                    decisions
                  </div>
                </div>
              </nuxt-link>

              <nuxt-link to="/fault-detection-diagnostics">
                <div class="fc-of-wrap">
                  <img class="navicon-pos" src="/images/icons/navicon-4.svg" />
                  <div class="fc-of-subhead">Fault Diagnostics</div>
                  <div class="fc-of-sub-txt">
                    Identify anomalies across systems & buildings and automate
                    resolution
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>

          <div class="col-md-4">
            <div class="fc-o-ft-list">
              <nuxt-link to="/sustainability-management">
                <div class="fc-of-wrap">
                  <img class="navicon-pos" src="/images/icons/navicon-5.svg" />
                  <div class="fc-of-subhead">Sustainability Management</div>
                  <div class="fc-of-sub-txt">
                    Fine-tune consumption, drive ECM projects, and accurately
                    meet goals
                  </div>
                </div>
              </nuxt-link>

              <nuxt-link to="/building-management-system">
                <div class="fc-of-wrap">
                  <img class="navicon-pos" src="/images/icons/navicon-6.svg" />
                  <div class="fc-of-subhead">Enterprise BMS</div>
                  <div class="fc-of-sub-txt">
                    Level up legacy BMS and pave the path for new improvements
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!---explore-other-feature-->
    <!---energy-feature-9-columns-->
    <div class="energyOpts mobile-pad">
      <div class="fc-container">
        <h3 class="primeHead text-uppercase text-center">
          The complete toolkit to achieve sustainability
        </h3>
        <h5 class="primeSubHead mPrimeHead text-center">
          Facilio is built to make life easier for commercial real estate
          professionals
        </h5>
      </div>
      <div class="icon-container">
        <!-- Feature row one start -->
        <div class="product-feature-row">
          <div class="partner-feature-col">
            <div class="partner-featur-icon text-left">
              <img src="/images/icons/centralized.svg" alt title />
            </div>
            <h5 class="partner-feature-heading text-left">Central Command</h5>
            <p class="partner-feature-desc text-left">
              Empower facilities with a central
              <br />command center using Facilio to <br />manage sustainability
              across <br />portfolio.
            </p>
          </div>
          <div class="partner-feature-col">
            <div class="partner-featur-icon text-left">
              <img src="/images/icons/fullifecycle.svg" alt title />
            </div>
            <h5 class="partner-feature-heading text-left">Full Lifecycle</h5>
            <p class="partner-feature-desc text-left">
              Cover full operational life-cycle
              <br />from equipment to energy <br />performance, identify
              deviations, <br />resolve faster and <br />avoid drifts.
              <br />
            </p>
          </div>
          <div class="partner-feature-col">
            <div class="partner-featur-icon text-left">
              <img src="/images/icons/analysis.svg" alt title />
            </div>
            <h5 class="partner-feature-heading text-left">
              Real-time IoT Data
            </h5>
            <p class="partner-feature-desc text-left">
              With Facilio’s unique software driver,
              <br />easily integrate with existing BMSs <br />to collect and
              normalize multiple <br />data streams.
            </p>
          </div>
        </div>
        <!-- Feature row one start -->

        <!-- Feature row two start -->
        <div class="product-feature-row">
          <div class="partner-feature-col">
            <div class="partner-featur-icon text-left">
              <img src="/images/icons/runmobile.svg" alt title />
            </div>
            <h5 class="partner-feature-heading text-left">
              Mobile Notifications
            </h5>
            <p class="partner-feature-desc text-left">
              Keep up with anomalies, track
              <br />metrics faster, and receive real-time <br />notifications on
              your mobile <br />with Facilio’s native app.
            </p>
          </div>
          <div class="partner-feature-col">
            <div class="partner-featur-icon text-left">
              <img src="/images/icons/quick-view.svg" alt title />
            </div>
            <h5 class="partner-feature-heading text-left">
              Baseline Operations
            </h5>
            <p class="partner-feature-desc text-left">
              See today vs yesterday, this month
              <br />vs last month, or any specific <br />duration, and quickly
              identify <br />opportunities to correct off-baseline
              <br />performance.
            </p>
          </div>
          <div class="partner-feature-col">
            <div class="partner-featur-icon text-left">
              <img src="/images/icons/customer-portal.svg" alt title />
            </div>
            <h5 class="partner-feature-heading text-left">
              Asset Vendor Accountability
            </h5>
            <p class="partner-feature-desc text-left">
              Analyze reports to identify high and
              <br />low performing assets, track assets <br />with frequent
              complaints, those that <br />regularly run below capacity.
            </p>
          </div>
        </div>
        <!-- Feature row two start -->

        <!-- Feature row three start -->
        <div class="product-feature-row">
          <div class="partner-feature-col">
            <div class="partner-featur-icon text-left">
              <img src="/images/icons/priority.svg" alt title />
            </div>
            <h5 class="partner-feature-heading text-left text-left">
              Retrofit Evaluations
            </h5>
            <p class="partner-feature-desc">
              Validate savings for a project,
              <br />position your facilities for future <br />transactions, or
              determine which <br />projects should be conducted to
              <br />improve rents.
            </p>
          </div>
          <div class="partner-feature-col">
            <div class="partner-featur-icon text-left">
              <img src="/images/icons/customer-portal.svg" alt title />
            </div>
            <h5 class="partner-feature-heading text-left">
              Shareable Dashboards
            </h5>
            <p class="partner-feature-desc text-left">
              Have a better ability to share
              <br />specific dashboards with relevant <br />managers, create a
              centralized <br />location to update or add notes on
              <br />upcoming or key activities.
            </p>
          </div>
          <div class="partner-feature-col">
            <div class="partner-featur-icon text-left">
              <img src="/images/icons/templates.svg" alt title />
            </div>
            <h5 class="partner-feature-heading text-left">Custom Reports</h5>
            <p class="partner-feature-desc text-left">
              In addition to standard available
              <br />reports, easily build or schedule <br />reports based on any
              metric <br />(time period or data type) that is of <br />focus to
              you.
            </p>
          </div>
        </div>
        <!-- Feature row three ends -->
      </div>
    </div>

    <!---end--of--energy-feature-9-columns-->
   <!---customer-logo-band-->
    <div class="container fc-cs-band-padding">
      <section class="fc-customer-band-logos" style="margin-top:0px;">
        <div class="row">
          <div class="col-md-6">
            <div class="fc-left-cust">
              <h3>Join the club of modern data-driven CREs</h3>
              <div class="fc-cs-logos-custom">
                <img src="/images/customer-logo/logo-left/logo.png" />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="fc-testimonial-cards">
              <div class="tab-content">
                <div class="tab-pane active" id="testimonial-1">
                  <div class="fc-testimonial-logo">
                    <img src="/images/customer-logo/new/al-fajer-logo.png" class="al-fajer-left"/>
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
                  <p class="black-txt-16 mT20">
                    Facilio is a very powerful tool. We were able to quickly connect portfolio systems, set up a command center, and scale O&M services across properties effectively.
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
            <div class="tabs-love">
               <ul class="nav nav-tabs">
              <li class="active">
                <a href="#testimonial-1" data-toggle="tab">
                  <svg height="14" width="14">
                    <circle cx="7" cy="7" r="7" stroke-width="3" fill="#bfb5dc" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#testimonial-2" data-toggle="tab">
                  <svg height="14" width="14">
                    <circle cx="7" cy="7" r="7" stroke-width="3" fill="#bfb5dc" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#testimonial-3" data-toggle="tab">
                  <svg height="14" width="14">
                    <circle cx="7" cy="7" r="7" stroke-width="3" fill="#bfb5dc" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#testimonial-4" data-toggle="tab">
                  <svg height="14" width="14">
                    <circle cx="7" cy="7" r="7" stroke-width="3" fill="#bfb5dc" />
                  </svg>
                </a>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  <Footer />

  </div>
</template>

<script>
import GetStartedButton from "../components/GetStartedButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default {
  components: {
    GetStartedButton,
    Navbar, Footer,
  },
  head() {
    return {
      title: "Building Energy Management Software | Facilio",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "IoT-driven sustainability performance with Facilio. Get predictive maintenance notifications, real-time consumption analysis, and best tenant comfort."
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Building Energy Management Software | Facilio"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content: "IoT-driven sustainability performance with Facilio. Get predictive maintenance notifications, real-time consumption analysis, and best tenant comfort."
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "https://facilio.com/images/og-images/sustainability.png"
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/sustainability-management"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Building Energy Management Software | Facilio"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content: "IoT-driven sustainability performance with Facilio. Get predictive maintenance notifications, real-time consumption analysis, and best tenant comfort."
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "https://facilio.com/images/og-images/sustainability.png"
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/sustainability-management"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/sustainability-management"
        }
      ],
      script: [
        { src: "../js/page.js" },
        { src: "../js/waypoints.min.js" },
        { src: "../js/includes.js" }
      ]
    };
  }
};
</script>

<style></style>
