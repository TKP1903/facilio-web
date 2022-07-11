<template>
  <div class="productPage btn-shade">
    <div id="productPage"></div>

    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <div class="mask"></div>

      <div class="bms-section">
        <div class="fc-container">
          <div class="overview-page-headings">
            <h1>Turbocharge your BMS with our Enterprise Hub</h1>
            <p>
              Seamlessly integrate your disparate BMSs across portfolio.
              Effortlessly perform a centralized SWOT analysis of your
              buildings.
            </p>
            <GetStartedButton />
          </div>
        </div>
      </div>
      <!---workplace-feature-->
      <div class="workplace-feature">
        <div class="fc-container">
          <div class="row workplace-wrapper fc-wrapper-pad">
            <div class="col-md-4">
              <div class="w-feature-head mT40">
                Achieve operational excellence across your enterprise
              </div>
            </div>
            <div class="col-md-4">
              <div class="w-feature-txt mT40">
                <span>Boost your assets’ health</span> across buildings with
                flexible maintenance and advanced alarm system
              </div>

              <div class="w-feature-txt mT40">
                <span>Open the floodgates to sustainable buildings</span>
                by uncovering greater functionality and efficiency
              </div>
            </div>
            <div class="col-md-4">
              <div class="w-feature-txt mT40">
                <span>Create synergy among building stakeholders</span> with
                portfolio-wide visibility of system status
              </div>

              <div class="w-feature-txt mT40">
                <span>Gain a competitive advantage</span> and bolster business
                processes with contextual insights from comprehensive analytics
              </div>
            </div>
          </div>
        </div>
      </div>
      <!---workplace-feature-->

      <!--workplace-feature-2-->
      <div class="workplace-feature-2">
        <div class="fc-container w-feature-wrapper">
          <div class="fc-workplace-center">
            Drive Enterprise Performance excellence
          </div>
          <div class="w-feature-head-center">
            A system of systems for your portfolio
          </div>
          <div class="row mT80 fc-wrapper-pad">
            <div class="col-md-6">
              <div class="fc-workplace-subhead">
                A unified place of action
                <br />for your portfolio
              </div>
              <div class="w-feature-desc">
                Quit logging into multiple systems to check on building status.
                Avoid the mess of multiple system integration projects.
                Skyrocket your productivity with an easily configurable
                centralized platform for building management. Do away with
                training bindings and smoothly navigate through spaces and asset
                groups.
              </div>
            </div>
            <div class="col-md-6">
              <div class="product-img">
                <img
                  src="/images/bms-1.png"
                  alt=" A unified place of action for your portfolio"
                  title=" A unified place of action for your portfolio"
                  style="max-width:500px;width:100%;"
                />
              </div>
            </div>
          </div>

          <div class="row mT80 fc-reverse fc-wrapper-pad">
            <div class="col-md-6">
              <div class="product-img">
                <img
                  src="/images/bms-2.png"
                  alt="    Extensive integration capability"
                  title=" Extensive integration capability"
                  style="max-width:500px;width:100%;"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="fc-workplace-subhead">
                Extensive integration capability
              </div>
              <div class="w-feature-desc">
                Worried about compatibility issues, given the dizzying multitude
                of systems and equipment-vendors? Facilio’s IoT edge wears the
                expert’s hat and seamlessly connects every single building
                system no matter the type, make or proprietary data protocols.
                Uncover revenue from the sea of sensors and controllers of your
                BMS by liberating siloed data in real-time.
              </div>
            </div>
          </div>

          <div class="row mT80 fc-wrapper-pad">
            <div class="col-md-6">
              <div class="fc-workplace-subhead">
                Ready-to-use insights from
                <br />deep analytics
              </div>
              <div class="w-feature-desc">
                Access robust analytics that taps all crucial data points of
                your equipment. Forego added costs to acquire and utilize data
                trinkets from BMS Analytics. Check the results of your
                operational experiments, demarcate the error-prone ones, and act
                on visual trends and reports. Assess asset performance and EnPI
                across sites, time, or within a building. Enhance processes like
                planned maintenance and fault prevention with contextual data in
                real-time.
              </div>
            </div>
            <div class="col-md-6">
              <div class="product-img">
                <img
                  src="/images/bms-3.png"
                  alt="Ready-to-use insights from Deep Analytics"
                  title="Ready-to-use insights from Deep Analytics"
                  style="max-width:500px;width:100%;"
                />
              </div>
            </div>
          </div>

          <div class="row mT80 fc-reverse fc-wrapper-pad">
            <div class="col-md-6">
              <div class="product-img">
                <img
                  src="/images/bms-4.png"
                  alt="Workflow-coupled Automated Diagnostics"
                  title="Workflow-coupled Automated Diagnostics"
                  style="max-width:500px;width:100%;"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="fc-workplace-subhead">
                Workflow-coupled automated diagnostics
              </div>
              <div class="w-feature-desc">
                Alarms are so used to showing up as an attention-seeking
                phenomenon that conceals the lead-up. Frantically hopping
                between buildings to address simultaneous alarms derails their
                purpose - swift response to anomalies. From root cause drill-down
                 to flexible alarm rules, Facilio’s FDD solution offers
                complete circumstantial awareness of your enterprise. Be it
                automated work order dispatch or self-set point correction,
                witness AI at full steam to ensure your business quickly returns
                to normal always.
              </div>
            </div>
          </div>
        </div>
      </div>
      <!---workplace-feature-2-->

      <!--workplace-accordion-->
      <div class="workplace-feature-2">
        <div class="container w-feature-wrapper">
          <div class="w-feature-head-center">
            Why try molding rock when there’s clay around?
          </div>
          <div class="fc-workplace-subtxt mT20">
            Chart a hassle-free path to state-of-the-art technology.
            <br />Let not your BMS come in the way!
          </div>
          <div class="panel-group fc-accordion" id="accordion">
            <Accordion
              v-for="item in lists"
              v-bind:key="item.heading"
              v-bind:heading="item.heading"
              v-bind:description="item.description"
              v-bind:collapseId="item.collapseId"
              v-bind:collapseState="item.collapseState"
            />
          </div>
        </div>
      </div>
      <!--workplace-accordion-->

      <!---workplace-feature-3-->
      <div class="workplace-feature-3">
        <div class="fc-container w-feature-wrapper">
          <div class="w-feature-head-center">
            Streamline your operations, build extraordinary experiences
          </div>
          <div class="row w-col-wrapper fc-wrapper-pad">
            <div class="col-md-4">
              <div class="partner-featur-icon text-left">
                <img src="/images/icons/image-verification.svg" alt title />
              </div>
              <div class="w-col-head">Web-based enterprise BMS</div>
              <div class="w-col-desc">
                Access your systems from anywhere, any devices with no add-on
                software. Breathe new life into your Facility operations using
                an app that’s not limited, site-specific and rigid.
              </div>
            </div>
            <div class="col-md-4">
              <div class="partner-featur-icon text-left">
                <img src="/images/icons/paperless-collab.svg" alt title />
              </div>
              <div class="w-col-head">Data visualization across portfolio</div>
              <div class="w-col-desc">
                Capture simultaneous snapshots of live performance data of all
                your systems. Accurately track building conditions like current
                IAQ, outdoor weather conditions, temperature, energy use,
                occupancy.
              </div>
            </div>

            <div class="col-md-4">
              <div class="partner-featur-icon text-left">
                <img src="/images/icons/team-eff.svg" alt title />
              </div>
              <div class="w-col-head">Point-and-click graphics</div>
              <div class="w-col-desc">
                Feast your mind on nuggets from an unbelievably user-friendly
                interface. Perform actions - like simple graphical adjustment to
                define zone control setpoint, trend analysis of building
                condition over a period of time.
              </div>
            </div>
          </div>
        </div>
      </div>
      <!---workplace-feature-3-->
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
                    <img
                      class="navicon-pos"
                      src="/images/icons/navicon-2.svg"
                    />
                    <div class="fc-of-subhead">Property Management</div>
                    <div class="fc-of-sub-txt">
                      Deliver superior tenant experience while improving net
                      operating income
                    </div>
                  </div>
                </nuxt-link>

                <nuxt-link to="/workplace-management">
                  <div class="fc-of-wrap">
                    <img
                      class="navicon-pos"
                      src="/images/icons/navicon-3.svg"
                    />
                    <div class="fc-of-subhead">Workplace Management</div>
                    <div class="fc-of-sub-txt">
                      Personalise comfort & experience drive smart workplace
                      decisions
                    </div>
                  </div>
                </nuxt-link>

                <nuxt-link to="/fault-detection-diagnostics">
                  <div class="fc-of-wrap">
                    <img
                      class="navicon-pos"
                      src="/images/icons/navicon-4.svg"
                    />
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
                    <img
                      class="navicon-pos"
                      src="/images/icons/navicon-5.svg"
                    />
                    <div class="fc-of-subhead">Sustainability Management</div>
                    <div class="fc-of-sub-txt">
                      Fine-tune consumption, drive ECM projects, and accurately
                      meet goals
                    </div>
                  </div>
                </nuxt-link>

                <nuxt-link to="/building-management-system">
                  <div class="fc-of-wrap">
                    <img
                      class="navicon-pos"
                      src="/images/icons/navicon-6.svg"
                    />
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
      <!--workplace-feature-4-->
      <!---workplace-feature-3-->
      <div class="workplace-feature-4">
        <div class="fc-container">
          <div class="w-feature-head-center">
            Optimum and refreshingly simple control for your enterprise
          </div>
          <div class="row mT40">
            <div class="col-md-6">
              <ul class="fc-navtabs">
                <li class="active" data-toggle="tab" href="#tab1">
                  <div class="fc-navtabs-head">Campus-level Control</div>
                  <div class="fc-navtabs-desc">
                    Centralize your building operations to fix ailing assets
                    swiftly, drive workforce productivity, and stay on top of
                    unexpected energy outlays.
                  </div>
                </li>
                <li data-toggle="tab" href="#tab2">
                  <div class="fc-navtabs-head">Continuous Sustainability</div>
                  <div class="fc-navtabs-desc">
                    Gain real-time energy insights, identify inefficiencies, and
                    predict consumption for sustained energy efficiency in your
                    enterprise.
                  </div>
                </li>
                <li data-toggle="tab" href="#tab3">
                  <div class="fc-navtabs-head">Smoothly Scaling Portfolio</div>
                  <div class="fc-navtabs-desc">
                    Expand your portfolio of buildings with no added physical
                    infrastructure. Easily scale your cloud data in Facilio like
                    an automatic background job.
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <div class="tab-content mT40">
                <div id="tab1" class="tab-pane fade in active">
                  <img
                    src="/images/bms-feature-1.png"
                    alt
                    title
                    style="max-width:350px;width:100%;"
                  />
                </div>
                <div id="tab2" class="tab-pane fade">
                  <img
                    src="/images/bms-feature-2.png"
                    alt
                    title
                    style="max-width:500px;width:100%;"
                  />
                </div>
                <div id="tab3" class="tab-pane fade">
                  <img
                    src="/images/bms-feature-3.png"
                    alt
                    title
                    style="max-width:480px;width:100%;"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
import Accordion from "../components/Accordion";
import GetStartedButton from "../components/GetStartedButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default {
  data() {
    return {
      lists: [
        {
          heading:
            "Do you dread the thought of an upgrade to your BMS Software?",
          description:
            "Failed BMS controller or just an energy-saving measure, you’ve always kept a BMS upgrade at arm’s length. It always tags along with high cost, intensive labour, and frustrating downtime. What if you never revisited this? When was the last time you knew Google rolled out an update? That’s some pure cloud trait!",
          collapseId: "collapse1",
          collapseState: "panel-collapse collapse in"
        },
        {
          heading:
            "Does the threat of security exposure of your systems linger in your mind?",
          description:
            "Your complex BMS was not inherently designed to be open and connected. Smart transformation demands you integrate BMS into other systems. But more interconnected on IP networks means more exposed to cyber risks. There’s always the fear of outsiders gaining control of connected systems to manipulate building conditions and cause panic.Put all your security worries to the backseat with Facilio. Our robust IoT edge addresses all imminent risks associated with data extraction out of siloed systems. With top-notch security standards, we deliver guaranteed protection that’s rightly expected from open systems.",
          collapseId: "collapse2",
          collapseState: "panel-collapse collapse"
        },
        {
          heading:
            "Do you deal with systems that are plain obstinate to functionally evolve?",
          description:
            "Modification of an existing BMS is capital-heavy. Be it enhancing sensor infrastructure or, even scheduling a visit for a BMS consultation, the process screams complexity everywhere!Facilio lets you seize the power to infuse flexibility in any of your modules. With unlimited ways to customize your entire spectrum of optimization-support modules, you get a software fingerprint unique to your building!",
          collapseId: "collapse3",
          collapseState: "panel-collapse collapse"
        },
        {
          heading:
            "Are you overwhelmed by the complicated process that follows a BMS problem?",
          description:
            "Faulty actuators or disconnected workstation from buildings, you invite third-party consultants for a building survey when there’s a BMS problem. The process of scheduling their visit through managing login formalities for each of them into the system is an add-on that’s least constructive.With Facilio’s mobile-accessible unified interface, resolve problems faster from anywhere using a Single Sign-On(SSO) across various modules of the app.",
          collapseId: "collapse4",
          collapseState: "panel-collapse collapse"
        }
      ]
    };
  },
  components: {
    Accordion,
    GetStartedButton,
    Navbar, Footer
  },
  head() {
    return {
      title: "Master BMS for the Enterprise | Facilio",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Connect your disparate building systems. Centrally optimize the gamut of O&M of your portfolio."
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Master BMS for the Enterprise | Facilio"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content: "Connect your disparate building systems. Centrally optimize the gamut of O&M of your portfolio."
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "https://facilio.com/images/og-images/bms.png"
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/building-management-system"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Master BMS for the Enterprise | Facilio"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content: "Connect your disparate building systems. Centrally optimize the gamut of O&M of your portfolio."
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "https://facilio.com/images/og-images/bms.png"
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/building-management-system"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/building-management-system"
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
