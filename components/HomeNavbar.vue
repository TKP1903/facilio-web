<template>
  <div>
    <nav
      class="navbar navbar-default navbar-fixed-top navbar-scroll"
      id="navbar-scroll"
    >
      <div class="event-update-container">
        <div class="event-update-container" id="event-update">
          <p>
         <nuxt-link
              to="/newsroom/series-b?ref=hellobar"
              target="_blank"
              style="    display: inline-block;"
            >
              <div class="fc-sticky-bar" style="margin-top: 2px;">
                <!-- <img  src="/images/confetti-svgrepo-com.svg" style="width: 25px;position: relative;left: -5px;top: -4px;" class="popper-svg"/> -->
               <span style="font-family:ProximaNovaSemibold">Just In</span> ✅New IDC Report on How CMMS is Evolving Beyond Asset Management & Maintenance
                <!-- <a
                  href="https://facilio.com/connected-cmms-for-property-operations"
                  class="hellobar-link-btn"
                  target="_blank"
                  >Learn More</a
                > -->
                <nuxt-link to="/idc-connected-cmms-for-property-operations" class="hellobar-link-btn">Learn More</nuxt-link>
              </div>
            </nuxt-link>
            <span class="event-container-close">
              <a style="border:none;" onclick="closeFunction()"
                ><svg
                  class="fc-hello-closer-nav"
                  viewBox="0 0 512.001 512.001"
                  width="512"
                  height="512"
                >
                  <path
                    d="M284.286 256.002L506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.938 19.938 0 0014.143 5.857 19.94 19.94 0 0014.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z"
                  /></svg
              ></a>
            </span>
          </p>
        </div>
      </div>
    </nav>
    <nav
      class="navbar navbar-default navbar-fixed-top hidden-xs hidden-sm homepage-navbar-default"
      style="height:75px;background-color:#ffffff !important;"
    >
      <div class="fc-container">
        <div class="navbar-header">
          <div>
            <a class="navbar-brand" @click="routeToHomepage">
              <span class="logo newlogo"></span>
            </a>
          </div>
        </div>
        <div class="fc-mega-dropdown">
          <a href="#" class="nav-trigger"
            >Open Nav
            <span aria-hidden="true"></span>
          </a>

          <nav id="fc-nav" class="main-nav">
            <ul class="fc-main-nav fc-home-main-nav">
              <li
                class="has-dropdown fc-first-tab dropdown active"
                id="navit"
                data-content="platform"
              >
                <a id="platform">Platform </a>
                <div class="full-height">
                  <div
                    class="dropdown-content fc-megamenu-content"
                    id="platform-content"
                  >
                    <div class="fc-dropdown-sec-2">
                      <div class="fc-whole-wrap">
                        <div class="sec-wrap">
                          <div class="fc-overview-wrapper">
                            <div class="fc-overview-down">
                              <div class="fc-nav-ovw-head">
                                PLATFORM OVERVIEW
                              </div>
                              <nuxt-link to="/platform-overview">
                                <div
                                  class="fc-mega-link mT20 fc-platform-hover"
                                >
                                  <img
                                    src="/images/icons/platform-new-icon.svg"
                                    class="navbar-main-icon"
                                  />
                                  <div class="fc-ovw-main-subhead fc-linker">
                                    Facilio O&M Platform
                                  </div>
                                  <div class="fc-ovw-txt">
                                    Unify building operations data and uncover
                                    portfolio intelligence in real-time
                                  </div>
                                </div>
                              </nuxt-link>
                            </div>
                            <div class="fc-overview-down">

                              <div>
                                <nuxt-link to="/iot-edge" class="mT20">
                                  <div class="fc-ovw-subhead fc-linker">
                                    Facilio IoT Edge
                                  </div>
                                </nuxt-link>
                                <nuxt-link to="/integrations" class="mT20">
                                  <div class="fc-ovw-subhead fc-linker">
                                    Integrations
                                  </div>
                                </nuxt-link>
                              </div>
                            </div>
                          </div>
                          <div class="fc-application-wrapper  " style="    margin-bottom: 40px;">
                    <div class="fc-app-head">
                              <span>
                                OUR PRODUCT & MODULES</span
                              >
                            </div>
                            <div class="fc-applications-down" style="margin-top: 20px;">
                              <div class="fc-category-1 nav-1">

                                <nuxt-link to="/operations-and-maintenance">
                                  <div class="fc-mega-app-link fc-linker nav-head" style="background: #ebf7ff;padding: 13px 15px 5px; margin-left: -15px;margin-right: 0;padding: 10px 15px 5px;margin-top: 0;">
                                    <img
                                      class="navicon-pos"
                                      src="/images/icons/navicon-1.svg"
                                    />
                                    <div class="fc-app-subhead" style="color: #324056;font-family:'ProximaNovaSemibold'">
                                       Connected CMMS
                                    </div>
                                  </div>
                                </nuxt-link>

                                <nuxt-link to="/operations-software/maintenance-management">
                                  <div class="fc-mega-app-link fc-linker mT20">

                                    <div class="fc-app-subhead">
                                      Maintenance Management
                                    </div>
                                  </div>
                                </nuxt-link>

                                <nuxt-link to="/operations-software/service-management">
                                  <div class="fc-mega-app-link fc-linker">

                                    <div class="fc-app-subhead">
                                      Service Management
                                    </div>
                                  </div>
                                </nuxt-link>

                                <nuxt-link to="/operations-software/vendor-management">
                                  <div class="fc-mega-app-link fc-linker">

                                    <div class="fc-app-subhead">
                                      Vendor Management
                                    </div>
                                  </div>
                                </nuxt-link>
                                <nuxt-link to="/workplace-management">
                                  <div class="fc-mega-app-link fc-linker">

                                    <div class="fc-app-subhead">
                                      Workplace Management
                                    </div>
                                  </div>
                                </nuxt-link>

                                <nuxt-link to="/property-management">
                                  <div class="fc-mega-app-link fc-linker">

                                    <div class="fc-app-subhead">
                                      Visitor Management
                                    </div>
                                  </div>
                                </nuxt-link>

                                <nuxt-link to="/operations-software/connected-optimization">
                                  <div class="fc-mega-app-link fc-linker">

                                    <div class="fc-app-subhead">
                                      Connected Optimization
                                    </div>
                                  </div>
                                </nuxt-link>
                              </div>
                              <div class="fc-category-1 nav-2">
                                <nuxt-link to="/sustainability-management">
                                  <div class="fc-mega-app-link fc-linker mT20 nav-head-1" style="    background: #f5f6ff;padding: 14px 15px 5px;margin-left: -15px;margin-right: 0;padding: 10px 15px 5px;    margin-top: 0;">
                                    <img
                                      class="navicon-pos"
                                      src="/images/icons/navicon-5.svg"
                                    />
                                    <div class="fc-app-subhead" style="color: #324056;font-family:'ProximaNovaSemibold'">
                                      Sustainability Suite
                                    </div>
                                  </div>
                                </nuxt-link>


                                <nuxt-link to="/sustainability-management">
                                  <div class="fc-mega-app-link fc-linker">

                                    <div class="fc-app-subhead">
                                      Energy Management
                                    </div>
                                  </div>
                                </nuxt-link>

                                <nuxt-link to="/sustainability-management">
                                  <div class="fc-mega-app-link fc-linker">

                                    <div class="fc-app-subhead">
                                      Utility Bills Management
                                    </div>
                                  </div>
                                </nuxt-link>

                                <nuxt-link to="/sustainability-management">
                                  <div class="fc-mega-app-link fc-linker">

                                    <div class="fc-app-subhead">
                                      Measurement & Verification
                                    </div>
                                  </div>
                                </nuxt-link>

                                <nuxt-link to="/fault-detection-diagnostics">
                                  <div class="fc-mega-app-link fc-linker">

                                    <div class="fc-app-subhead">
                                      Fault Detection & Diagnostics
                                    </div>
                                  </div>
                                </nuxt-link>
                              </div>
                              <div class="fc-category-1 nav-3">
                                <nuxt-link to="/building-management-system">
                                  <div class="fc-mega-app-link fc-linker mT20 nav-head-2" style="background: #fbf5ff;padding: 13px 15px 5px;margin-left: -15px;margin-right: 0;padding: 10px 15px 5px;    margin-top: 0;">
                                    <img
                                      class="navicon-pos"
                                      src="/images/icons/navicon-6.svg"
                                    />
                                    <div class="fc-app-subhead" style="color: #324056;font-family:'ProximaNovaSemibold'">
                                      Connected Buildings
                                    </div>
                                  </div>
                                </nuxt-link>

                                <nuxt-link to="/solutions/data-driven-portfolio">
                                  <div class="fc-mega-app-link fc-linker">

                                    <div class="fc-app-subhead">
                                      Portfolio Benchmarking
                                    </div>
                                  </div>
                                </nuxt-link>

                                <nuxt-link to="/resources/state-of-operations-and-maintenance-software">
                                  <div class="fc-mega-app-link fc-linker">

                                    <div class="fc-app-subhead">
                                      Overlay Platform
                                    </div>
                                  </div>
                                </nuxt-link>
                                <nuxt-link to="/building-management-system">
                                  <div class="fc-mega-app-link fc-linker">

                                    <div class="fc-app-subhead">
                                      Portfolio Automation
                                    </div>
                                  </div>
                                </nuxt-link>
                              </div>
                            </div>

                          </div>
                        </div>
                        <div class="pt-sec-3">
                          Facilio makes it easy for you to achieve operational
                          efficiency at scale.
                          <nuxt-link to="/features" class="fc-arrow-h fc-linker"
                            ><span>
                              See all features
                            </span></nuxt-link
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li class="has-dropdown" data-content="Solutions">
                <a id="solutions">Solutions </a>
                <div class="full-height">
                  <div
                    class="dropdown-content fc-mediummenu-content fc-animateMenu "
                    id="solutions-content"
                  >
                    <div class="fc-solution-sec">
                      <div class="fc-whole-wrap">
                        <div class="fc-sol-wrap">
                          <div class="fc-industry-wrapper">
                            <div class="fc-in-head">
                              By Industry
                            </div>
                            <div class="fc-industry-down">
                              <nuxt-link to="/industry/commercial-portfolios">
                                <div class="fc-mega-link mT30 fc-linker">
                                  <div class="fc-bullets"></div>
                                  <div class="fc-pt-subhead">
                                    Commercial Portfolios
                                  </div>
                                  <div class="fc-pt-txt">
                                    A complete real estate O&M suite built to
                                    boost building value
                                  </div>
                                </div>
                              </nuxt-link>

                              <nuxt-link to="/industry/corporate-facilities">
                                <div class="fc-mega-link fc-linker">
                                  <div class="fc-bullets"></div>
                                  <div class="fc-pt-subhead">
                                    Corporate Facilities
                                  </div>
                                  <div class="fc-pt-txt">
                                    Maximize efficiency and make 'experience'
                                    the new dimenson of your enterprise
                                  </div>
                                </div>
                              </nuxt-link>

                              <nuxt-link
                                to="/industry/facility-management-services"
                              >
                                <div class="fc-mega-link fc-linker">
                                  <div class="fc-bullets"></div>
                                  <div class="fc-pt-subhead">
                                    FM Services
                                  </div>
                                  <div class="fc-pt-txt">
                                    Empower workforce, make data-backed
                                    decisions, and create more value to clients
                                  </div>
                                </div>
                              </nuxt-link>
                            </div>
                          </div>
                          <div class="fc-outcome-wrapper ">
                            <div class="fc-app-head">
                              By Outcome
                            </div>
                            <div class="fc-outcome-down">
                              <div class="fc-category-1">
                                <nuxt-link
                                  to="/solutions/data-driven-portfolio"
                                >
                                  <div class="fc-mega-link mT20 fc-linker">
                                    <div class="fc-bullets"></div>
                                    <div class="fc-pt-subhead">
                                      Data-driven Portfolio Operations
                                    </div>
                                    <div class="fc-pt-txt">
                                      Remove friction points and ensure
                                      insight-led operations across buildings
                                      and teams
                                    </div>
                                  </div>
                                </nuxt-link>

                                <nuxt-link
                                  to="/solutions/facility-management-visibility"
                                >
                                  <div class="fc-mega-link fc-linker">
                                    <div class="fc-bullets"></div>
                                    <div class="fc-pt-subhead">
                                      FM Visibility
                                    </div>
                                    <div class="fc-pt-txt">
                                      More than just a CaFM/CMMS - gain
                                      contextual insights on contracted services
                                    </div>
                                  </div>
                                </nuxt-link>

                                <nuxt-link
                                  to="/solutions/asset-lifecycle-management"
                                >
                                  <div class="fc-mega-link fc-linker">
                                    <div class="fc-bullets"></div>
                                    <div class="fc-pt-subhead">
                                      360* Asset Lifecycle
                                    </div>
                                    <div class="fc-pt-txt">
                                      Visualise assets, track performance, and
                                      streamline lifecycle processes
                                    </div>
                                  </div>
                                </nuxt-link>
                              </div>

                              <div class="fc-category-2 ">
                                <nuxt-link
                                  to="/solutions/continuous-sustainability"
                                >
                                  <div class="fc-mega-link fc-linker">
                                    <div class="fc-bullets"></div>
                                    <div class="fc-pt-subhead ">
                                      Continous Sustainability
                                    </div>
                                    <div class="fc-pt-txt">
                                      Close the energy efficiency gap by
                                      embedding sustainability with operations
                                    </div>
                                  </div>
                                </nuxt-link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="pt-sol-sec-3">
                          <nuxt-link
                            to="/customer-success"
                            class="fc-sol-arrow-h fc-linker"
                            ><span>
                              Customer Success at Facilio
                            </span></nuxt-link
                          >
                        </div>
                      </div>
                    </div>
                    <div class="fc-soldrop-sec-1">
                      <div class="fc-mediummenu-head">
                        State of Property Operations and Maintenance Software
                      </div>
                      <div class="fc-mediummenu-txt">
                        Build your insight and understanding of the future of
                        BAS operations and overlay software to unlock new
                        potential in portfolio O&M, increase efficiencies, and
                        adapt to the changing demands of building health.
                      </div>
                      <br />
                      <nuxt-link
                        to="/resources/state-of-operations-and-maintenance-software"
                        class="fc-arrow-h-right fc-linker"
                      >
                        <span>
                          Get the Whitepaper
                        </span></nuxt-link
                      >
                    </div>
                  </div>
                </div>
              </li>

              <li class="has-dropdown" data-content="Resources">
                <a id="resources">Resources </a>
                <div class="full-height">
                  <div
                    class="dropdown-content fc-mediummenu-content nav-border"
                    id="resources-content"
                  >
                    <div class="fc-res-whole-left">
                      <div class="fc-flex-wrapper">
                        <div class="fc-res-sec-1">
                          <nuxt-link to="/resources/guide">
                            <div class="fc-res-cards fc-linker clr-3">
                              <img src="/images/fc-res-icon-1.svg" />
                              <h3>Quick Guides</h3>
                              <p>
                                Our collection of playbooks on data-driven
                                building operations to fuel efficiency. Get all
                                the insights you need to improve portfolio
                                operations.
                              </p>
                            </div>
                          </nuxt-link>
                        </div>
                        <div class="fc-res-sec-2">
                          <a href="https://blog.facilio.com">
                            <div class="fc-res-cards fc-linker clr-2">
                              <img src="/images/fc-res-icon-2.svg" />
                              <h3>Facilio Blog</h3>
                              <p>
                                Noteworthy articles on all things building ops.
                                Strategies and videos on how to improve
                                maintenance, sustainability, and tenant
                                retention.
                              </p>
                            </div>
                          </a>
                        </div>
                        <div class="fc-res-sec-3">
                          <nuxt-link to="/whats-new-in-facilio/">
                            <div class="fc-res-cards fc-linker clr-1">
                              <img
                                src="/images/fc-res-icon-3.svg"
                                style="margin-top:-8px;"
                              />
                              <h3>What's New with Facilio</h3>
                              <p>
                                We're constantly working to improve your Facilio
                                experience so you can fasttrack your property
                                operations to success. Here's what's new!
                              </p>
                            </div>
                          </nuxt-link>
                        </div>
                      </div>
                      <div class="pt-res-sec-3">
                        A complete guide to improve enterprise-wide operations
                        and maintenance.
                        <nuxt-link
                          to="/resources/guide/evaluating-facilities-management-software"
                          class="fc-sol-arrow-h fc-linker"
                          ><span>
                            Read Now
                          </span></nuxt-link
                        >
                      </div>
                    </div>
                    <div class="fc-res-sec-right">
                      <nuxt-link to="/resources">
                        <div class="fc-other-res-subhead mT20 fc-linker">
                          All Resources
                        </div>
                      </nuxt-link>

                      <nuxt-link to="/resources/case-study/">
                        <div class="fc-other-res-subhead fc-linker">
                          Facilio Case Studies
                        </div>
                      </nuxt-link>

                      <nuxt-link to="/newsroom/facilio-in-the-news">
                        <div class="fc-other-res-subhead fc-linker">
                          Newsroom
                        </div>
                      </nuxt-link>

                      <nuxt-link
                        to="/resources/infographic/rise-of-real-time-facilities"
                      >
                        <div class="fc-other-res-subhead fc-linker">
                          Infographic
                        </div>
                      </nuxt-link>

                      <nuxt-link to="/events">
                        <div class="fc-other-res-subhead fc-linker">
                          Awards & Events
                        </div>
                      </nuxt-link>
                      <nuxt-link to="/why-facilio/">
                        <div class="fc-other-res-subhead fc-linker">
                          Why Facilio? FAQs
                        </div>
                      </nuxt-link>

                      <a href="https://guide.facilio.com" target="_blank">
                        <div class="fc-other-res-subhead fc-linker">
                          Help Docs
                        </div>
                      </a>
                      <a href="/release-notes">
                        <div class="fc-other-res-subhead fc-linker">
                          Release Notes
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <li class="has-dropdowns" data-content="partner">
                <a id="partners">Partners</a>
                <div
                  class="dropdown-content fc-small-menu-content"
                  id="partners-content "
                >
                  <div class="fc-partners-sec">
                    <nuxt-link to="/partners">
                      <div
                        class="fc-partners-wrap fc-linker animated slideDown"
                      >
                        <div class="fc-partners-head">
                          <span>Become a Partner</span>
                        </div>
                      </div>
                    </nuxt-link>

                    <nuxt-link to="/partners/partner-directory">
                      <div
                        class="fc-partners-wrap dpd-border fc-linker animated slideDown"
                      >
                        <div class="fc-partners-head">
                          <span>Locate a Partner</span>
                        </div>
                      </div>
                    </nuxt-link>
                    <nuxt-link to="/AWS-partnership-program">
                      <div
                        class="fc-partners-wrap dpd-border fc-linker animated slideDown"
                      >
                        <div class="fc-partners-head">
                          <span>AWS</span>
                        </div>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </li>

              <li class="has-dropdowns" data-content="company">
                <a id="company">Company </a>
                <div
                  class="dropdown-content  fc-small-menu-content"
                  id="company-content"
                >
                  <div class="fc-company-sec">
                    <nuxt-link to="/about">
                      <div
                        class="fc-partners-wrap fc-linker animated slideDown"
                      >
                        <div class="fc-partners-head"><span>About</span></div>
                      </div>
                    </nuxt-link>

                    <nuxt-link to="/futureproof/fp-videos/">
                      <div
                        class="fc-partners-wrap dpd-border fc-linker animated slideDown"
                      >
                        <div class="fc-partners-head">
                          <span>Futureproof</span>
                        </div>
                      </div>
                    </nuxt-link>
                     <nuxt-link to="/careers/">
                      <div
                        class="fc-partners-wrap dpd-border fc-linker animated slideDown"
                      >
                        <div class="fc-partners-head">
                          <span>Careers</span>
                        </div>
                      </div>
                    </nuxt-link>

                    <nuxt-link to="/resources/case-study/">
                      <div
                        class="fc-partners-wrap dpd-border fc-linker animated slideDown"
                      >
                        <div class="fc-partners-head">
                          <span>Customers</span>
                        </div>
                      </div>
                    </nuxt-link>

                    <nuxt-link to="/contact">
                      <div
                        class="fc-partners-wrap dpd-border fc-linker animated slideDown"
                      >
                        <div class="fc-partners-head">
                          <span>Contact Us</span>
                        </div>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </li>
              <li class="demo">
                <a
                  class="text-uppercase getStart-btn"
                  href="/get-started"
                  style="line-height: 20px !important;font-size:14px !important;"
                  >SCHEDULE A DEMO</a
                >
              </li>
              <div
                class="fc-bdr-btm"
                style="width: 57.2656px; opacity: 1; left: 163px;"
              ></div>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
    <!-- mobile Navigations Start -->
    <div class="mobile-nav-container">
      <nav class="navbar navbar-default navbar-fixed-top mobile-navigation">
        <div class="container mobile-container">
          <div class="navbar-header">
            <a class="navbar-brand" @click="routeToHomepage">
              <span class="logo newlogo"></span>
            </a>
          </div>
          <a
            href="#"
            class="nav-trigger"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <i class="fa fa-bars"></i>
          </a>
        </div>
      </nav>

      <!-- modal dialog start-->
      <!-- Modal -->
      <div
        class="modal modal-bg"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog mobile-modal-dialog" role="document">
          <div class="modal-content mobile-modal-content">
            <div class="modal-header mobile-modal-header">
              <div class="fc-header-fix">
                <div
                  class="fc-header-close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <svg
                    class="closer-nav"
                    viewBox="0 0 512.001 512.001"
                    width="512"
                    height="512"
                  >
                    <path
                      d="M284.286 256.002L506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.938 19.938 0 0014.143 5.857 19.94 19.94 0 0014.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z"
                    />
                  </svg>
                </div>
                <a href="/get-started" class="mobile-try-cmm fc-mob-linker"
                  >Try Facilio Now
                </a>
              </div>
            </div>
            <div class="modal-body mobile-modal-body mobile-modal-top">
              <div class="mobile-menu-gn">
                <ul class="mobile-dropdown">
                  <li
                    class="mobile-dropdown-list"
                    data-toggle="collapse"
                    data-target="#mob-platform"
                  >
                    <a class="mobile-dropdown-txt" d
                      >Platform <i class="fa fa-angle-down fa-menu-right"></i>
                    </a>

                    <div id="mob-platform" class="collapse">
                      <div class="fc-collapse-list">
                        <div class="fc-mob-head">
                          PLATFORM OVERVIEW
                        </div>

                        <nuxt-link to="/platform-overview">
                          <div class="fc-mega-link mT20 fc-platform-hover">
                            <img
                              src="/images/icons/platform-new-icon.svg"
                              class="navbar-main-icon"
                            />
                            <div class="fc-ovw-main-subhead fc-mob-linker">
                              Facilio O&M Platform
                            </div>
                            <div class="fc-ovw-txt">
                              Unify building operations data and uncover
                              portfolio intelligence in real-time
                            </div>
                          </div>
                        </nuxt-link>

                        <div class="fc-overview-down">
                            <div class="mT20">
                            <nuxt-link to="/iot-edge" class="mT20">
                              <div class="fc-ovw-subhead ">
                                Facilio IoT Edge
                              </div>
                            </nuxt-link>
                            <nuxt-link to="/integrations" class="mT20">
                              <div class="fc-ovw-subhead fc-mob-linker">
                                Integrations
                              </div>
                            </nuxt-link>
                          </div>
                        </div>

                        <div class="fc-app-mob">
                          <div class="fc-mob-head mT20">
                           OUR PRODUCT & MODULES
                          </div>
                         <div class="nav-1 mob-nav">
                          <nuxt-link to="/operations-and-maintenance">
                            <div class="fc-mega-app-link mT20 header-link">
                              <img
                                class="navicon-pos"
                                src="/images/icons/navicon-4.svg"
                              />
                              <div class="fc-app-subhead fc-mob-linker link-head">
                                Connected CMMS
                              </div>
                            </div>
                          </nuxt-link>


                          <nuxt-link to="/operations-software/maintenance-management">
                            <div class="fc-mega-app-link mT20">

                              <div class="fc-app-subhead fc-mob-linker">
                                Maintenance Management
                              </div>
                            </div>
                          </nuxt-link>

                          <nuxt-link to="/operations-software/service-management">
                            <div class="fc-mega-app-link fc-mob-linker">

                              <div class="fc-app-subhead">
                                Service Management
                              </div>
                            </div>
                          </nuxt-link>

                          <nuxt-link to="/operations-software/vendor-management">
                            <div class="fc-mega-app-link fc-mob-linker">

                              <div class="fc-app-subhead">
                                Vendor Management
                              </div>
                            </div>
                          </nuxt-link>

                          <nuxt-link to="/workplace-management">
                            <div class="fc-mega-app-link fc-mob-linker">

                              <div class="fc-app-subhead">
                                Workplace Management
                              </div>
                            </div>
                          </nuxt-link>

                          <nuxt-link to="/property-management">
                            <div class="fc-mega-app-link fc-mob-linker">

                              <div class="fc-app-subhead">
                                Visitor Management
                              </div>
                            </div>
                          </nuxt-link>

                          <nuxt-link to="/operations-software/connected-optimization">
                            <div class="fc-mega-app-link fc-mob-linker">

                              <div class="fc-app-subhead">Connected Optimization</div>
                            </div>
                          </nuxt-link>
                         </div>
                         <div class="nav-2 mob-nav">

                          <nuxt-link to="/sustainability-management">
                            <div class="fc-mega-app-link mT20  header-link">
                              <img
                                class="navicon-pos"
                                src="/images/icons/navicon-1.svg"
                              />
                              <div class="fc-app-subhead fc-mob-linker link-head">
                                Sustainability Suite
                              </div>
                            </div>
                          </nuxt-link>

                         <nuxt-link to="/sustainability-management">
                            <div class="fc-mega-app-link fc-mob-linker">

                              <div class="fc-app-subhead">
                               Energy Management
                              </div>
                            </div>
                          </nuxt-link>

                          <nuxt-link to="/sustainability-management">
                            <div class="fc-mega-app-link fc-mob-linker">

                              <div class="fc-app-subhead">
                                Utility Bills Management
                              </div>
                            </div>
                          </nuxt-link>

                          <nuxt-link to="/sustainability-management">
                            <div class="fc-mega-app-link fc-mob-linker">

                              <div class="fc-app-subhead">Measurement & Verification</div>
                            </div>
                          </nuxt-link>



                          <nuxt-link to="/fault-detection-diagnostics">
                            <div class="fc-mega-app-link mT20">

                              <div class="fc-app-subhead fc-mob-linker">
                               Fault Detection & Diagnostics
                              </div>
                            </div>
                          </nuxt-link>
                        </div>
                        <div class="nav-3 mob-nav">

                          <nuxt-link to="/building-management-system">
                            <div class="fc-mega-app-link fc-mob-linker header-link">
                              <img
                                class="navicon-pos"
                                src="/images/icons/navicon-3.svg"
                              />
                              <div class="fc-app-subhead link-head">
                                Connected Buildings
                              </div>
                            </div>
                          </nuxt-link>

                          <nuxt-link to="/solutions/data-driven-portfolio">
                            <div class="fc-mega-app-link fc-mob-linker">

                              <div class="fc-app-subhead">
                               Portfolio Benchmarking
                              </div>
                            </div>
                          </nuxt-link>

                          <nuxt-link to="/resources/state-of-operations-and-maintenance-software">
                            <div class="fc-mega-app-link fc-mob-linker">

                              <div class="fc-app-subhead">
                                Overlay Platform
                              </div>
                            </div>
                          </nuxt-link>

                          <nuxt-link to="/building-management-system">
                            <div class="fc-mega-app-link fc-mob-linker">

                              <div class="fc-app-subhead">
                                Portfolio Automation
                              </div>
                            </div>
                          </nuxt-link>
                          </div>
                        </div>
                      </div>

                      <div class="mob-pt-sec-3">
                        <a
                          href="/get-started"
                          class="fc-mob-arrow-h fc-mob-linker"
                          ><span>
                            Schedule time with a solutions expert
                          </span></a
                        >
                      </div>
                    </div>
                  </li>
                  <li
                    class="mobile-dropdown-list"
                    data-toggle="collapse"
                    data-target="#mob-solutions"
                  >
                    <a class="mobile-dropdown-txt" d
                      >Solutions <i class="fa fa-angle-down fa-menu-right"></i>
                    </a>

                    <div id="mob-solutions" class="collapse ">
                      <div class="fc-collapse-list">
                        <div class="fc-mob-head">
                          By Industry
                        </div>

                        <nuxt-link to="/industry/commercial-portfolios">
                          <div class="fc-mega-link mT20 fc-mob-linker">
                            <div class="fc-bullets"></div>
                            <div class="fc-pt-subhead">
                              Commercial Portfolios
                            </div>
                            <div class="fc-pt-txt">
                              A complete real estate O&M suite built to boost
                              building value
                            </div>
                          </div>
                        </nuxt-link>

                        <nuxt-link to="/industry/corporate-facilities">
                          <div class="fc-mega-link fc-mob-linker">
                            <div class="fc-bullets"></div>
                            <div class="fc-pt-subhead">
                              Corporate Facilities
                            </div>
                            <div class="fc-pt-txt">
                              Maximize efficiency and make 'experience' the new
                              dimenson of your enterprise
                            </div>
                          </div>
                        </nuxt-link>

                        <nuxt-link to="/industry/facility-management-services">
                          <div class="fc-mega-link fc-mob-linker">
                            <div class="fc-bullets"></div>
                            <div class="fc-pt-subhead">
                              FM Services
                            </div>
                            <div class="fc-pt-txt">
                              Empower workforce, make data-backed decisions, and
                              create more value to clients
                            </div>
                          </div>
                        </nuxt-link>

                        <div class="fc-app-mob">
                          <div class="fc-mob-head mT20">
                            By Outcome
                          </div>

                          <nuxt-link to="/solutions/data-driven-portfolio">
                            <div class="fc-mega-link  fc-mob-linker mT20">
                              <div class="fc-bullets"></div>
                              <div class="fc-pt-subhead">
                                Data-driven Portfolio Operations
                              </div>
                              <div class="fc-pt-txt">
                                Remove friction points and ensure insight-led
                                operations across buildings and teams
                              </div>
                            </div>
                          </nuxt-link>

                          <nuxt-link
                            to="/solutions/facility-management-visibility"
                          >
                            <div class="fc-mega-link fc-mob-linker">
                              <div class="fc-bullets"></div>
                              <div class="fc-pt-subhead">FM Visibility</div>
                              <div class="fc-pt-txt">
                                More than just a CaFM/CMMS - gain contextual
                                insights on contracted services
                              </div>
                            </div>
                          </nuxt-link>

                          <nuxt-link to="/solutions/asset-lifecycle-management">
                            <div class="fc-mega-link fc-mob-linker">
                              <div class="fc-bullets"></div>
                              <div class="fc-pt-subhead">
                                360* Asset Lifecycle
                              </div>
                              <div class="fc-pt-txt">
                                Visualise assets, track performance, and
                                streamline lifecycle processes
                              </div>
                            </div>
                          </nuxt-link>

                          <nuxt-link to="/solutions/continuous-sustainability">
                            <div class="fc-mega-link fc-mob-linker">
                              <div class="fc-bullets"></div>
                              <div class="fc-pt-subhead ">
                                Continuous Sustainability
                              </div>
                              <div class="fc-pt-txt">
                                Close the energy efficiency gap by embedding
                                sustainability with operations
                              </div>
                            </div>
                          </nuxt-link>
                        </div>
                        <div class="mob-pt-sec-3">
                          <nuxt-link
                            to="/customer-success"
                            class="fc-mob-arrow-h fc-mob-linker"
                            ><span>
                              Customer Success at Facilio
                            </span></nuxt-link
                          >
                        </div>
                      </div>
                    </div>
                  </li>

                  <li
                    class="mobile-dropdown-list"
                    data-toggle="collapse"
                    data-target="#mob-resources"
                  >
                    <a class="mobile-dropdown-txt"
                      >Resources <i class="fa fa-angle-down fa-menu-right"></i>
                    </a>

                    <div id="mob-resources" class="collapse ">
                      <div class="fc-collapse-list">
                        <nuxt-link to="/resources/guide">
                          <div class="fc-res-cards fc-mob-linker clr-3">
                            <img src="/images/fc-res-icon-1.svg" />
                            <h3>Quick Guides</h3>
                            <p>
                              Our collection of playbooks on data-driven
                              building operations to fuel efficiency. Get all
                              the insights you need to improve portfolio
                              operations.
                            </p>
                          </div>
                        </nuxt-link>

                        <a href="https://blog.facilio.com">
                          <div class="fc-res-cards fc-mob-linker clr-2">
                            <img src="/images/fc-res-icon-2.svg" />
                            <h3>Facilio Blog</h3>
                            <p>
                              Noteworthy articles on all things building ops.
                              Strategies and videos on how to improve
                              maintenance, sustainability, and tenant retention.
                            </p>
                          </div>
                        </a>

                        <nuxt-link to="/whats-new-in-facilio/">
                          <div class="fc-res-cards fc-mob-linker clr-1">
                            <img
                              src="/images/fc-res-icon-3.svg"
                              style="margin-top:-8px;"
                            />
                            <h3>What's New with Facilio</h3>
                            <p>
                              We're constantly working to improve your Facilio
                              experience so you can fasttrack your property
                              operations to success. Here's what's new!
                            </p>
                          </div>
                        </nuxt-link>

                        <nuxt-link to="/resources">
                          <div class="fc-other-res-subhead mT20 fc-linker">
                            All Resources
                          </div>
                        </nuxt-link>

                        <nuxt-link to="/resources/case-study/">
                          <div class="fc-other-res-subhead fc-mob-linker">
                            Facilio Case Studies
                          </div>
                        </nuxt-link>

                        <nuxt-link to="/newsroom/facilio-in-the-news">
                          <div class="fc-other-res-subhead fc-mob-linker">
                            Newsroom
                          </div>
                        </nuxt-link>

                        <nuxt-link
                          to="/resources/infographic/rise-of-real-time-facilities"
                        >
                          <div class="fc-other-res-subhead fc-mob-linker">
                            Infographic
                          </div>
                        </nuxt-link>

                        <nuxt-link to="/futureproof/fp-videos">
                          <div class="fc-other-res-subhead fc-mob-linker">
                            Future Proof
                          </div>
                        </nuxt-link>

                        <nuxt-link to="/events/">
                          <div class="fc-other-res-subhead fc-mob-linker">
                            Events
                          </div>
                        </nuxt-link>

                        <nuxt-link to="/why-facilio/">
                          <div class="fc-other-res-subhead fc-mob-linker">
                            Why Facilio? FAQs
                          </div>
                        </nuxt-link>

                        <a href="https://guide.facilio.com" target="_blank">
                          <div class="fc-other-res-subhead fc-mob-linker">
                            Help Docs
                          </div>
                        </a>
                      </div>

                      <div class="mob-pt-sec-3">
                        <nuxt-link to="/contact" class="fc-mob-linker">
                          Contact Us |</nuxt-link
                        >
                        <nuxt-link
                          to="/get-started"
                          class="fc-mob-arrow-h fc-mob-linker"
                        >
                          Get a Demo
                        </nuxt-link>
                      </div>
                    </div>
                  </li>

                  <li
                    class="mobile-dropdown-list"
                    data-toggle="collapse"
                    data-target="#mob-partner"
                  >
                    <a class="mobile-dropdown-txt"
                      >Partners <i class="fa fa-angle-down fa-menu-right"></i>
                    </a>

                    <div id="mob-partner" class="collapse ">
                      <div class="fc-collapse-list">
                        <nuxt-link to="/partners">
                          <div class="fc-mega-link fc-mob-linker">
                            <div class="fc-res-subhead">Become a Partner</div>
                          </div>
                        </nuxt-link>

                        <nuxt-link to="/partners/partner-directory">
                          <div class="fc-mega-link fc-mob-linker">
                            <div class="fc-res-subhead">Locate a Partner</div>
                          </div>
                        </nuxt-link>
                        <nuxt-link to="/AWS-partnership-program">
                          <div class="fc-mega-link fc-mob-linker">
                            <div class="fc-res-subhead">AWS</div>
                          </div>
                        </nuxt-link>
                         
                      </div>
                    </div>
                  </li>

                  <li
                    class="mobile-dropdown-list"
                    data-toggle="collapse"
                    data-target="#mob-company"
                  >
                    <a class="mobile-dropdown-txt"
                      >Company <i class="fa fa-angle-down fa-menu-right"></i
                    ></a>

                    <div id="mob-company" class="collapse ">
                      <div class="fc-collapse-list">
                        <nuxt-link to="/about">
                          <div class="fc-mega-link fc-mob-linker">
                            <div class="fc-res-subhead">About</div>
                          </div>
                        </nuxt-link>

                        <nuxt-link to="/futureproof/fp-videos/">
                          <div class="fc-mega-link fc-mob-linker">
                            <div class="fc-res-subhead">Futureproof</div>
                          </div>
                        </nuxt-link>

                        <nuxt-link to="/careers/">
                          <div class="fc-mega-link fc-mob-linker">
                            <div class="fc-res-subhead">Careers</div>
                          </div>
                        </nuxt-link>

                        <nuxt-link to="/resources/case-study/">
                          <div class="fc-mega-link fc-mob-linker">
                            <div class="fc-res-subhead">Customers</div>
                          </div>
                        </nuxt-link>

                        <nuxt-link to="/contact">
                          <div class="fc-mega-link fc-mob-linker">
                            <div class="fc-res-subhead">Contact Us</div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- modal dialog end -->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  mounted() {
    $(document).on("click", ".fc-mob-linker", function() {
      $(".modal").hide();
    });
  },
  methods: {
    routeToHomepage() {
      this.$router.push({
        path: "/",
      });
    },
    routeToGetStarted() {
      this.$router.push({
        path: "/get-started",
      });
    },
  },
};
</script>
<style>
@import "../assets/css/navbar.css";

.intro-bold-hello-bar {
  font-weight: 500px;
}

.sec-wrap {
  width: 100%;
}

.fc-nav-ovw-head {
  color: #2e5bff !important;
}
.fc-app-head
.fc-nav-ovw-head {
  font-size: 16px;
  text-align: left;
  position: relative;
  padding-bottom: 10px;
  font-family: ProximaNovaSemibold;
  color: #181b3b;
}

.fc-app-head {
  margin-top: 10px;
  margin-left: 15px;
}

.fc-nav-ovw-head:after {
   position: absolute;
  content: "";
  height: 1px;
  margin: 0;
  left: 0px;
  right: 0;
  bottom: 0;
  width: 90%;
  border: 0.5px solid #d0e3ff;
}
.fc-app-head:after {
  position: absolute;
  content: "";
  height: 1px;
  margin: 0;
  left: 0px;
  right: 0;
  bottom: 0;
  width: 100%;
  border: 0.5px solid #d0e3ff;
}

.fc-overview-wrapper {
  width: 37%;
}

.fc-application-wrapper {
  width: 100%;
}

.fc-overview-wrapper {
  padding: 10px 0px;
}

.fc-ovw-main-subhead {
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 5px;
  padding: 4px 0px;
  text-align: left;
  text-transform: initial;
  cursor: pointer;
  font-family: "ProximaNovaSemibold";
  color: #324056;
}

.fc-ovw-main-subhead:hover {
  color: #4e36a6;
}

.fc-app-subhead:hover {
  color: #4e36a6;
  font-family: "ProximaNovaSemibold" !important;
}

.fc-ovw-subhead {
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 5px;
  padding: 6px 10px;
  margin-left: -10px;
  text-align: left;
  text-transform: initial;
  cursor: pointer;
  font-family: "ProximaNovaSemibold";
  color: #173b56;
}

.fc-app-subhead {
  font-size: 15px;
  margin-top: 0px;
  text-transform: none;
  margin-bottom: 5px;
  text-align: left;
  font-family: "ProximaNovaRgRegular";
  color: #173b56;
}

.fc-ovw-subhead:hover {
  color: #4e36a6;
  background-color: #edefff;
}

.fc-ovw-txt {
  color: #324056 !important;
  font-size: 14px;
  text-align: left;
  text-transform: none;
  text-transform: initial;
  font-family: ProximaNovaRgRegular;
  max-width: 300px;
  width: 100%;
}

.fc-app-head span {
  font-size: 15px !important;
  text-transform: none !important;
  color: #2e5bff !important;
}

.fc-mega-app-link {
  margin-top: 10px;
  padding: 10px 15px 5px;
  cursor: pointer;
  margin-left: -15px;
  transition: 0.2s ease-out !important;
}
.nav-1  {
    background: #f8fcff;
}
.nav-2  {
  background: #fafafc;
}
.nav-3 {
  background: #fdfafe;
}
.fc-mega-app-link:hover {
    border-radius: 1px;
    transition: 0.3s;
    color: #4e36a6;
    font-family: "ProximaNovaSemibold" !important;
}
.nav-1 .fc-mega-app-link:hover {
  background:rgb(235, 247, 255) !important ;
}
.nav-2 .fc-mega-app-link:hover {
    background:rgb(245, 246, 255) !important ;

}
.nav-3 .fc-mega-app-link:hover {
  background: rgb(251, 245, 255) !important;
}
.fc-mega-app-link:focus .dropdown-content {
  display: none !important;
}

.fc-mega-app-link:hover .fc-ovw-subhead,
.fc-mega-app-linkk:hover .fc-app-subhead,
.fc-mega-app-link:hover .fc-pt-subhead {
  color: #4e36a6;
}

.fc-mega-app-link:hover .fc-ovw-txt,
.fc-mega-app-link:hover .fc-app-txt {
  color: #324056;
}

.nav-border {
  border: solid 1px #e8efef !important;
}

.fc-res-whole-left {
  width: 70%;
  padding: 70px 30px 70px 75px;
}
.popper-svg:hover {
  animation: bellshake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
.fc-flex-wrapper {
  display: flex;
}

.fc-res-sec-1,
.fc-res-sec-2,
.fc-res-sec-3 {
  width: 33.33%;
}

.fc-res-cards {
  padding: 20px 25px;
  cursor: pointer;
}

.clr-1:hover {
  background-color: #f5f5ff;
  transition: all 0.5s;
}

.clr-2:hover {
  background-color: #fff5fa;
  transition: all 0.5s;
}

.clr-3:hover {
  background-color: #f4fafc;
  transition: all 0.5s;
}

.clr-1:hover h3 {
  color: #4e36a6;
}

.clr-2:hover h3 {
  color: #ff0084;
}

.clr-3:hover h3 {
  color: #00c8ee;
}

.fc-res-cards:hover p {
  color: rgb(28, 37, 99);
}

.fc-res-cards:hover h3:after {
  -webkit-transform: translateX(8px);
  -ms-transform: translateX(8px);
  transform: translateX(8px);
}
.fc-res-sec-right {
  width: 30%;
  padding: 45px 35px;
  background-color: #edefff;
}
.link-head {
  font-family: "ProximaNovaSemibold"  !important;
}

.fc-res-cards h3 {
  position: relative;
  margin-top: 40px;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  color: #181b3b;
  font-family: "ProximaNovaSemibold";
}
.header-link {
margin: 25px 10px 0px 0px !important ;
padding: 20px 10px 0px 15px  !important;
}

.fc-res-cards p {
  margin-top: 15px;
  font-size: 15px;
  font-family: "ProximaNovaRgRegular";
  text-transform: initial;
  line-height: 1.43;
  color: #324056;
}

.fc-res-cards h3:after {
  content: "";
  display: inline-block;
  width: 15px;
  height: 15px;
  position: absolute;
  margin-top: 0px;
  margin-left: 10px;
  -webkit-transition: 0.3s ease;
  -o-transition: 0.3s ease;
  transition: 0.3s ease;
  background: url("/images/icons/dark-blue-arrow.svg") center/contain no-repeat;
}
.mob-nav .fc-mega-app-link {
  margin-left: 0;
}
.fc-res-main-head {
  font-size: 18px;
  margin-top: 0px;
  margin-bottom: 5px;
  padding: 4px 0px;
  text-align: left;
  position: relative;
  text-transform: initial;
  cursor: pointer;
  font-family: "ProximaNovaSemibold";
  color: #577593;
}

.fc-res-main-head:after {
  position: absolute;
  content: "";
  height: 1px;
  margin: 0;
  left: 0px;
  right: 0;
  bottom: 0;
  top: 35px;
  width: 100%;
  border: 0.5px solid #d0e3ff;
}

.fc-other-res-subhead {
  font-size: 16px;
  font-weight: 600;
  margin-left: -20px;
  padding: 10px 20px;
  font-family: "ProximaNovaSemibold";
  color: #324056;
}

.fc-other-res-subhead:hover {
  color: #4e36a6;
  background-color: #e5ddff;
}
.sub-header {
    font-size: 16px;
    text-align: left;
    text-transform: initial;
    cursor: pointer;
    font-family: "ProximaNovaSemibold";
    color: #324056;
}
.pt-res-sec-3:before {
  position: absolute;
  content: "";
  height: 1px;
  margin: 0;
  top: 0;
  left: 0px;
  right: 0;
  width: 100%;
  border: 0.5px solid #d0e3ff;
}

.pt-res-sec-3 {
  position: relative;
  margin-top: 70px;
  padding: 20px 0px;
  margin-left: 30px;
  font-size: 15px;
  font-family: "ProximaNovaSemibold";
}

@media screen and (max-width: 450px) {
  .fc-overview-down {
    padding: 0px !important;
  }
}
</style>
