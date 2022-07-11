<template>
  <div class="productPage btn-shade">
    <div id="productPage"></div>

    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <div class="mask"></div>

      <div class="workplace-section">
        <div class="fc-container">
          <div class="overview-page-headings">
            <h1>Manage workplace as a connected entity</h1>
            <p>
              Drive excellent experience by covering all aspects of your
              workplace management with intuitive space visualization, room
              booking, occupant service request, and an end-to-end visitor
              management.
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
                SPACE VISUALIZATION
              </h6>
              <div class="fc-workplace-subhead">
                Visualize everything you
                <br />need in a single feed
              </div>
              <div class="w-feature-desc">
                Achieve zone level and site level drill-down into all active
                work orders, assets, and energy to stay on top of your expenses.
                Leverage the power of smart IoT to maintain ambient temperature
                across all your buildings. View floor and space availability
                across portfolio, and plan for space constraints in the future.
                Ensure a delightful tenant experience across the corporate with
                planned moves that do not affect everyday functionality.
              </div>
            </div>
            <div class="col-md-6">
              <div class="fc-img-src">
                <img
                  src="/images/wc-1.png"
                  alt=" Visualize everything you need in a single feed"
                  title=" Visualize everything you need in a single feed"
                  style="max-width:450px;width:100%;"
                />
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad fc-reverse">
            <div class="col-md-6">
              <div class="fc-img-src">
                <img
                  src="/images/wc-2.png"
                  alt=" Deliver a facility experience that exceeds expectations"
                  title="Deliver a facility experience that exceeds expectations"
                  style="max-width:500px;width:100%;"
                />
              </div>
            </div>
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">
                SERVICE REQUEST PORTAL
              </h6>
              <div class="fc-workplace-subhead">
                Deliver a facility experience that
                <br />exceeds expectations
              </div>
              <div class="w-feature-desc">
                Deliver a first-class facility experience with ultra-responsive
                issue resolution fueled by real-time actionable insights. Help
                your tenants easily avail additional maintenance services,
                including service management, occupant service requests, 
                complaints, rating, and vendor service requests.
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad">
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">Smart Booking</h6>
              <div class="fc-workplace-subhead">
                Let your meetings run late,
                <br />not your teams!
              </div>
              <div class="w-feature-desc">
                Block any meeting hall with a single click and ensure timely
                collaboration with multiple attendees. Block meeting halls with
                all the required accessories and assets, starting from
                furniture to electronics, stationery, and more. Have meeting
                attendees and guests automatically authorized at entry and their
                navigation provided through an intuitive mobile application.
                Have a smart meeting experience with the rescheduling of
                maintenance activities and a seamless parking reservation.
              </div>
            </div>
            <div class="col-md-6">
              <div class="fc-img-src">
                <img
                  src="/images/wc-3.png"
                  alt="Let your meetings run late, not your teams"
                  title="Let your meetings run late, not your teams"
                  style="max-width:500px;width:100%;"
                />
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad fc-reverse">
            <div class="col-md-6">
              <div class="fc-img-src">
                <img
                  src="/images/wc-4.png"
                  alt="VISITOR MANAGEMENT"
                  title="VISITOR MANAGEMENT"
                  style="max-width:450px;width:100%;"
                />
              </div>
            </div>
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">VISITOR MANAGEMENT</h6>
              <div class="fc-workplace-subhead">
                Help your visitors be at the
                <br />right place and time
              </div>
              <div class="w-feature-desc">
                Simplify visitor management with visitor profiles segmented
                for you by choosing from out-of-the-box options such as guest,
                employee, interviewee, vendor, etc. or create an entirely new
                visitor profile. Provide every visitor a seamless, hassle-free experience by automating all their next steps through a simple workflow.
                Integrate directions with an easy-to-access Kiosk or an
                intuitive mobile application that helps them navigate to the
                desired location precisely.
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad">
            <div class="col-md-6">
              <h6 class="productHeadPink text-uppercase">
                PERMITS/ AUTHORIZATION
              </h6>
              <div class="fc-workplace-subhead">
                Keep every tenant both
                <br />safe and comfortable
              </div>
              <div class="w-feature-desc">
                Prioritize visitor convenience while still maximizing safety with various touchpoints such as check-in approval,
                notifications, and more. Reduce continuous back-and-forth
                between visitors and hosts by automating each step in the entry
                process. Guide your visitors by notifying their host through SMS,
                message, or e-mail. Monitor every visitor closely by creating a
                watch list from government records and smartly respond to
                intruders with automated triggers that notify security, and host
                for immediate action.
              </div>
            </div>
            <div class="col-md-6">
              <div class="fc-img-src">
                <img
                  src="/images/wc-5.png"
                  alt="  Keep every tenant both safe and comfortable"
                  title="Keep every tenant both safe and comfortable"
                  style="max-width:500px;width:100%;"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!---workplace-feature-2-->
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
      <!---workplace-feature-3-->
      <div class="workplace-feature-3">
        <div class="fc-container w-column-wrapper">
          <div class="w-feature-head-center">
            Manage your workplace
            <br />end-to end
          </div>
          <div class="row fc-column-pad fc-wrapper-pad">
            <div class="col-md-4 mT40">
              <div class="partner-featur-icon text-left">
                <img src="/images/icons/centralized.svg" alt title />
              </div>
              <div class="w-col-head">Automation Controls</div>
              <div class="w-col-desc">
                Assign an ambient temperature for every building and watch all
                your assets working in tandem to maintain it with ZERO
                interference.
              </div>
            </div>
            <div class="col-md-4 mT40">
              <div class="partner-featur-icon text-left">
                <img src="/images/icons/current.svg" alt title />
              </div>
              <div class="w-col-head">Integration</div>
              <div class="w-col-desc">
                Visualize your entire floor plan that includes a geographical
                outlay of the floor space in 2D and 3D, pulled from your existing
                BIM systems
              </div>
            </div>

            <div class="col-md-4 mT40">
              <div class="partner-featur-icon text-left">
                <img src="/images/icons/user-permission.svg" alt title />
              </div>
              <div class="w-col-head">Co-working and seating arrangement</div>
              <div class="w-col-desc">
                Proactively plan desk-booking to ensure maximum space and asset
                utilization. Plan team moves henceforth with a click of a button.
              </div>
            </div>
          </div>
          <div class="row fc-column-pad fc-wrapper-pad">
            <div class="col-md-4 mT40">
              <div class="partner-featur-icon text-left">
                <img src="/images/icons/templates.svg" alt title />
              </div>
              <div class="w-col-head">Move Management</div>
              <div class="w-col-desc">
                Gain insights for moves including furniture, lights
                and asset allocation. Plan in advance and execute moves quickly
              </div>
            </div>
            <div class="col-md-4 mT40">
              <div class="partner-featur-icon text-left">
                <img src="/images/icons/image-verification.svg" alt title />
              </div>
              <div class="w-col-head">Corporate Lease Management</div>
              <div class="w-col-desc">
                Manage rents for multiple places, proactively monitor rental
                agreement, have a record of past leases, their expiry dates, and
                initiate renewal conversations.
              </div>
            </div>

            <div class="col-md-4 mT40">
              <div class="partner-featur-icon text-left">
                <img src="/images/icons/team-eff.svg" alt title />
              </div>
              <div class="w-col-head">Occupant Comfort</div>
              <div class="w-col-desc">
                Ensure maximum occupant comfort through one intuitive workplace
                app. Digitally connect your employees to their physical
                workplace
              </div>
            </div>
          </div>
        </div>
      </div>
      <!---workplace-feature-3-->
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
      title: "Truly Integrated Workplace Management | Facilio ",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Manage all your visitors and vendors with ease. Automate room and asset scheduling, have secure watchlists and keep every occupant both safe and comfortable."
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Truly Integrated Workplace Management | Facilio"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Manage all your visitors and vendors with ease. Automate room and asset scheduling, have secure watchlists and keep every occupant both safe and comfortable."
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "https://facilio.com/images/og-images/workplace.png"
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/workplace-management"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Truly Integrated Workplace Management | Facilio"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Manage all your visitors and vendors with ease. Automate room and asset scheduling, have secure watchlists and keep every occupant both safe and comfortable."
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "https://facilio.com/images/og-images/workplace.png"
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/workplace-management"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/workplace-management"
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
