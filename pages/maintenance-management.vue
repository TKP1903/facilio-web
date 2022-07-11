<template>
  <div class="productPage btn-shade">
    <div id="productPage"></div>

    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <!--End platform-overview-hero-sec-->
      <div class="mask"></div>

      <div class="maintenance-section">
        <div class="fc-container">
          <div class="overview-page-headings">
            <h1>
              Flexible facilities management software, built for efficiency
            </h1>
            <p>
              Instead of having information spread between silo-ed CaFM/CMMS
              tools across your portfolio, Facilio brings context, flexibility,
              and mobility to your building maintenance and asset lifecycle
              management.
            </p>
            <GetStartedButton />
          </div>
        </div>
      </div>
      <!--End platform-overview-hero-sec-->

      <!--platform-feature-1-->
      <div class="workplace-feature-2">
        <div class="fc-container w-feature-wrapper">
          <!-- <div class="fc-workplace-center">Centralize your equipment and energy performance</div>
          <div class="w-feature-head-center">Optimize energy efficiency in real-time</div>-->

          <div class="row fc-wrapper-pad">
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">
                PORTFOLIO-WIDE MAINTENANCE
              </h6>
              <div class="fc-workplace-subhead">
                Your single window to portfolio building maintenance
              </div>
              <div class="w-feature-desc">
                Automate work orders based on date, time, alarms, meter
                readings, or any defined anomaly. Easily create schedules with
                planned maintenance, track current and past tasks, and keep
                assets in the best health to deliver the best tenant experience.
                Proactively gauge asset issues, and fix things before
                they break down. Tie asset actions to alarm triggers and get
                notified immediately.
              </div>
            </div>
            <div class="col-md-6">
              <div class="product-img">
                <img
                  src="/images/mas-1.png"
                  alt="Stop reacting to fires and start taking action "
                  title="Stop reacting to fires and start taking action "
                  style="max-width:600px;width:100%;"
                />
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad fc-reverse">
            <div class="col-md-6">
              <div class="product-img">
                <img
                  src="/images/mas-2.png"
                  alt="Accurately quantify energy "
                  title="Accurately quantify energy"
                  style="max-width:600px;width:100%;"
                />
              </div>
            </div>
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">52-WEEK CALENDAR</h6>
              <div class="fc-workplace-subhead">
                Your powerful personal assistant
              </div>
              <div class="w-feature-desc">
                <div class="w-feature-desc mT20">
                  Enjoy smart tracking of PMs and an intelligent resource
                  planner across every asset and space using Facilio’s 52-WEEK
                  calendar. Customize recurring events with all the approvals
                  still in place. Toggle events on or off, and always know who’s
                  doing what by when. Track maintenance schedules weekly,
                  monthly, or yearly and enjoy flexible planned maintenance
                  that can be modified or rescheduled to accommodate your
                  priority.
                </div>
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad">
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">
                EXECUTIVE DASHBOARD
              </h6>
              <div class="fc-workplace-subhead">
                Focus and act on what
                <br />matters first
              </div>
              <div class="w-feature-desc">
                Facilities are far more efficient when you manage the whole
                building performance, free of clutter. Use intuitive dashboards
                to make it the most actionable and dynamic home base of your top
                metrics. Facilio gives you portfolio-wide visibility into live
                efficiency of teams/technicians, groups with the most pending
                work orders, total downtime by the asset, the total cost of
                operation for a specific department, and more.
              </div>
            </div>
            <div class="col-md-6">
              <div class="product-img">
                <img
                  src="/images/wc-1.png"
                  alt=" Gauge effectiveness "
                  title=" Gauge effectiveness"
                  style="max-width:420px;width:100%;"
                />
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad fc-reverse">
            <div class="col-md-6">
              <div class="product-img">
                <img
                  src="/images/mas-4.png"
                  alt=" Gauge effectiveness "
                  title=" Gauge effectiveness"
                  style="max-width:600px;width:100%;"
                />
              </div>
            </div>
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">APPROVAL</h6>
              <div class="fc-workplace-subhead">
                Automate and configure approvals
              </div>
              <div class="w-feature-desc">
                Automate any work-order and other business processes to your
                specific needs without conforming to rigid templates. Configure
                any process from work orders, alarms, gate pass, and leasing
                with simple if-else conditions to detailed scripts. Automate
                everything ranging from workflow processes and work-order
                approvals to suit your business requirements.
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad ">
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">MOBILE APPS</h6>
              <div class="fc-workplace-subhead">Take action on the go</div>
              <div class="w-feature-desc">
                Take action on the go while quickly staying updated on the
                overall picture. Quickly drill down into any information,
                monitor alerts, and stay on top of your facility at all times.
                Gather approval requests and route work orders across any
                location on the move. Gain actionable insights with full
                context, by knowing asset history and records of past
                performance to fast-forward diagnosis and fix things quicker.
              </div>
            </div>
            <div class="col-md-6">
              <div class="product-img">
                <img
                  src="/images/mas-6.png"
                  alt=" Take action on the go "
                  title=" Take action on the go"
                  style="max-width:450px;width:100%;margin-top:0px;"
                />
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad fc-reverse">
            <div class="col-md-6">
              <div class="product-img">
                <img
                  src="/images/mas-4.png"
                  alt=" Gauge effectiveness "
                  title=" Gauge effectiveness"
                  style="max-width:600px;width:100%;"
                />
              </div>
            </div>
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">
                ASSET AND INVENTORY
              </h6>
              <div class="fc-workplace-subhead">
                Optimize asset profit throughout their lifecycle
              </div>
              <div class="w-feature-desc">
                Track items, store, tools, purchase requests, and monitor your
                stocks, assets in use. Know information on retried assets, keep
                track of inventory items, and know before they run out. Predict
                asset shortage and coordinate procurement with the vendor.
                Calculate the cost for rented assets usage by technicians, by
                calculating their rent timeline and expiry.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!---explore-other-feature-->
    <section class="fc-other-feature">
      <div class="container">
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
                    Personalise comfort & experience drive, smart workplace
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
      <div class="container">
        <div class="w-feature-head-center">
          Powerful FM software for
          <br />frictionless maintenance
        </div>
      </div>
      <div class="icon-container">
        <!-- Feature row one start -->
        <div class="product-feature-row">
          <div class="partner-feature-col">
            <div class="partner-featur-icon text-left">
              <img src="/images/icons/runmobile.svg" alt title />
            </div>
            <h5 class="partner-feature-heading text-left">
              Quick verification
            </h5>
            <p class="partner-feature-desc text-left">
              Help your technicians capture
              <br />the right assets before and after <br />repair with a simple
              picture.
            </p>
          </div>
          <div class="partner-feature-col">
            <div class="partner-featur-icon text-left">
              <img src="/images/icons/flexible.svg" alt title />
            </div>
            <h5 class="partner-feature-heading text-left">
              Instant Resolution
            </h5>
            <p class="partner-feature-desc text-left">
              Get an e-signature from
              <br />the tenant before starting repairs <br />and after a
              satisfactory resolution.
            </p>
          </div>
          <div class="partner-feature-col">
            <div class="partner-featur-icon text-left">
              <img src="/images/icons/qrscanner.svg" alt title />
            </div>
            <h5 class="partner-feature-heading text-left">QR code scanner</h5>
            <p class="partner-feature-desc text-left">
              Use the QR code to track asset
              <br />information on previous and present <br />asset location
              across facility
            </p>
          </div>
        </div>
        <!-- Feature row one start -->

        <!-- Feature row three start -->
        <div class="product-feature-row">
          <div class="partner-feature-col">
            <div class="partner-featur-icon text-left">
              <img src="/images/icons/centralized.svg" alt title />
            </div>
            <h5 class="partner-feature-heading text-left">Hardware agnostic</h5>
            <p class="partner-feature-desc text-left">
              Leverage actionable insights
              <br />to perform corrective maintenance <br />on top of existing
              infrastructure
            </p>
          </div>
          <div class="partner-feature-col">
            <div class="partner-featur-icon text-left">
              <img src="/images/icons/fullifecycle.svg" alt title />
            </div>
            <h5 class="partner-feature-heading text-left">Customizability</h5>
            <p class="partner-feature-desc text-left">
              Customized or Template PMs
              <br />for multiple building and asset <br />types effortlessly.
              <br />
            </p>
          </div>
          <div class="partner-feature-col">
            <div class="partner-featur-icon text-left">
              <img src="/images/icons/priority.svg" alt title />
            </div>
            <h5 class="partner-feature-heading text-left">Prioritization</h5>
            <p class="partner-feature-desc text-left">
              Select the priority of the work
              <br />order, team size, and also <br />the duration.
            </p>
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

    <!---customer-logo-band-->
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
    Navbar, Footer
  },
  head() {
    return {
      title: "Facilio | IoT & ML powered Maintenance Management Software",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Unify your asset and facility maintenance in real-time and achieve complete control your facility asset landscape. Leverage Real-time time insights to spot inefficiencies and resolve issues."
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Facilio | IoT & ML powered Maintenance Management Software"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Unify your asset and facility maintenance in real-time and achieve complete control your facility asset landscape. Leverage Real-time time insights to spot inefficiencies and resolve issues."
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "https://facilio.com/images/og-images/maintenance.png"
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/maintenance-management/"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Facilio | IoT & ML powered Maintenance Management Software"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Unify your asset and facility maintenance in real-time and achieve complete control your facility asset landscape. Leverage Real-time time insights to spot inefficiencies and resolve issues"
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "https://facilio.com/images/og-images/maintenance.png"
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/maintenance-management/"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/maintenance-management/"
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
<style>
.nav-tabs {
    border-bottom: none;
    max-width: 320px;
    margin: 0 auto;
  }

  .nav-tabs li {
    padding: 0px !important;
  }
 .tabs-love {
    max-width: 700px;
    background-color: #ffffff;
}
  a:hover {
    text-decoration: none !important;
  }

  .fc-testimonial-cards .nav>li>a {
    margin: 0px !important;
    padding: 10px 0px !important;
  }

  .myPage .nav>li>a,
  .usecase-header .nav>li>a,
  .homepage-navbar-default .usecase-header .nav>li>a {
    font-weight: 600;
    font-size: 13px;
    color: #3b3b3b;
    background-color: transparent;
    text-transform: uppercase;
    position: relative;
    font-family: "ProximaNovaSemibold";
  }

  .nav-tabs>li.active {
    position: relative;
  }

.nav-tabs>li.active a:after {
    content: "";
    width: 21px;
    position: absolute;
    height: 21px;
        left: 14px;
    top: 16px;
    background-image: url("/images/icons/like.svg");
  }

  .nav-tabs>li.active a.focus {
    background-color: transparent;
  }
  .al-fajer-left{
    margin-left:10px;
  }
</style>