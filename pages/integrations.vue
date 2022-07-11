<template>
  <div class="productPage btn-shade">
    <div class="myPage" id="myPage">
      <Navbar />
      <section class="mg-top75">
        <div class="legal-main">
          <div class="privacy-content-container">
            <div class="row">

              <div class="col-md-3 legal-sidebar left sidebar-fixed">
                <div class="sidebar-container">
                  <div class="fc-workplace-subhead int-head">
                    Facilio Integrations
                  </div>
                  <div class="w-feature-desc int-desc">
                    From BAS to sensory platforms to business apps, connect Facilio with existing systems and discover
                    new ways to improve your portfolio performance.
                  </div>
                </div>
                <div class="button-container">
                  <a @click="openPopup()" class="demo-btn-int">INTEGRATE WITH US
                  </a>
                </div>
                <nav id="seo-sidebar" class="hidden-xs">
                  <div class="grey-text mgT62">CATEGORIES</div>
                  <ul class="nav-list-ul">
                    <li class="nav-list-item mgT10">
                      <a class="nav-list-alink linkActive" @click="showAll" id="bas">All apps</a>
                    </li>
                    <h3 class="sidenav-head">Building Automation</h3>
                    <li class="nav-list-item">
                      <a class="nav-list-alink" @click="filter($event)" id="bas">BAS & HVAC</a>
                    </li>
                    <li class="nav-list-item">
                      <a class="nav-list-alink" @click="filter($event)" id="bim">BIM</a>
                    </li>
                    <li class="nav-list-item">
                      <a class="nav-list-alink" @click="filter($event)" id="smart-sensing">
                        Smart Sensing and Metering
                      </a>
                    </li>
                    <li class="nav-list-item">
                      <a class="nav-list-alink" @click="filter($event)" id="connectivity">
                        Connectivity
                      </a>
                    </li>
                  </ul>
                  <h3 style="margin-top:40px" class="sidenav-head">Business Apps</h3>
                  <ul class="nav-list-ul">
                    <li class="nav-list-item">
                      <a class="nav-list-alink" @click="filter($event)" id="utilities">Utilities and Benchmarking</a>
                    </li>
                    <li class="nav-list-item">
                      <a class="nav-list-alink" @click="filter($event)" id="bi-analytics">BI & Analytics</a>
                    </li>
                    <li class="nav-list-item">
                      <a class="nav-list-alink" @click="filter($event)" id="accounting">
                        Accounting
                      </a>
                    </li>
                    <li class="nav-list-item">
                      <a class="nav-list-alink" @click="filter($event)" id="property">
                        Property and Asset Management
                      </a>
                    </li>
                    <li class="nav-list-item">
                      <a class="nav-list-alink" @click="filter($event)" id="it">
                        IT and Collaboration
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div class="col-md-8 legal-content">
                <h2 class="section-title" id="building-automation">Building Automation</h2>
                <div id="app" class="bas-hvac hide-groups">
                  <header>
                    <span id="bms-hvac" class="anchor"></span>
                    <h4 class="integration-sub-title">BAS & HVAC</h4>
                    <p class="int-para">With Facilio, aggregate data from multi-vendor building automation and HVAC
                      systems. Easily set up a portfolio command center with two-way communication between Facilio and
                      your systems.</p>
                  </header>
                  <section class="grid">
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/honeywell.png" class="int-img" />
                      </div>
                      <div class="grid-group-meta">
                        <h4>Honeywell</h4>
                      </div>
                    </div>
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/seimens.png" class="int-img" /></div>
                      <div class="grid-group-meta">
                        <h4>Siemens</h4>
                      </div>
                    </div>
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/schiender.png" class="int-img" />
                      </div>
                      <div class="grid-group-meta">
                        <h4>Schneider Electric</h4>
                      </div>
                    </div>
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/tridium.png" class="int-img" /></div>
                      <div class="grid-group-meta">
                        <h4>Tridium</h4>
                      </div>
                    </div>
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/jci.png" class="int-img" /></div>
                      <div class="grid-group-meta">
                        <h4>JCI</h4>
                      </div>
                    </div>
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/carrier.png" class="int-img" /></div>
                      <div class="grid-group-meta">
                        <h4>Carrier</h4>
                      </div>
                    </div>
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/trane.png" class="int-img" /></div>
                      <div class="grid-group-meta">
                        <h4>Trane</h4>
                      </div>
                    </div>
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/trend.png" class="int-img" /></div>
                      <div class="grid-group-meta">
                        <h4>Trend</h4>
                      </div>
                    </div>
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/automated-logic.png"
                          class="int-img" /></div>
                      <div class="grid-group-meta">
                        <h4>Automated Logic</h4>
                      </div>
                    </div>
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/alerton.png" class="int-img" /></div>
                      <div class="grid-group-meta">
                        <h4>Alerton</h4>
                      </div>
                    </div>
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/sauter.png" class="int-img" /></div>
                      <div class="grid-group-meta">
                        <h4>Sauter</h4>
                      </div>
                    </div>
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/distech-controls.png"
                          class="int-img" /></div>
                      <div class="grid-group-meta">
                        <h4>Distech Controls</h4>
                      </div>
                    </div>
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/netix.png" class="int-img" /></div>
                      <div class="grid-group-meta">
                        <h4>Netix</h4>
                      </div>
                    </div>
                  </section>
                </div>

                <div id="app" class="bim hide-groups">
                  <header>
                    <span id="bim" class="anchor"></span>
                    <h4 class="integration-sub-title">BIM</h4>
                    <p class="int-para">Facilio integrates with leading BIM providers to speed up the onboarding of
                      building data. Visualize 3D views of space and assets along with the real-time status of the
                      health of equipment.</p>
                  </header>
                  <section class="grid">
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/invicara.png" class="int-img" />
                      </div>
                      <div class="grid-group-meta">
                        <h4>Invicara</h4>
                      </div>
                    </div>
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/autodesk.png" class="int-img" />
                      </div>
                      <div class="grid-group-meta">
                        <h4>Autodesk</h4>
                      </div>
                    </div>
                  </section>
                </div>

                <div id="app" class="smart-sensing hide-groups">
                  <header>
                    <span id="analytics-platforms" class="anchor"></span>
                    <h4 class="integration-sub-title">Smart Sensing and Metering</h4>
                    <p class="int-para">Facilio integrates with a wide range of sensing platforms to acquire and extend
                      data insights to real-time workflows. Leverage all-round smart monitoring to align operational
                      performance with agility.</p>
                  </header>
                  <section class="grid">
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/conectric.png" class="int-img" />
                      </div>
                      <div class="grid-group-meta">
                        <h4>Conectric</h4>
                      </div>
                    </div>
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/energyly.png" class="int-img" />
                      </div>
                      <div class="grid-group-meta">
                        <h4>Energyly</h4>
                      </div>
                    </div>
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/nymo.png" class="int-img" /></div>
                      <div class="grid-group-meta">
                        <h4>Nymo</h4>
                      </div>
                    </div>
                    <!-- <div class="grid-group">
                    <div class="grid-group-image"><img src="/images/integrations/radiolocus.png" class="int-img"/></div>
                    <div class="grid-group-meta">
                        <h4>RadioLocus</h4>
                    </div>
                    </div> -->
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/pinmicro.png" class="int-img" />
                      </div>
                      <div class="grid-group-meta">
                        <h4>Pinmicro</h4>
                      </div>
                    </div>
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/smartspaces.png" class="int-img" />
                      </div>
                      <div class="grid-group-meta">
                        <h4>Smartspaces</h4>
                      </div>
                    </div>
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/living-planit.png" class="int-img" />
                      </div>
                      <div class="grid-group-meta">
                        <h4>Living planit</h4>
                      </div>
                    </div>
                    <div class="grid-group">
                      <a href="https://vataverks.com/wp/" target="_blank">
                        <div class="grid-group-image">
                          <div><img src="/images/integrations/vata-verks.jpg" class="fc-vata-verks-img" /></div>
                          <div style="position: absolute; bottom: 20px; left: 15px;">
                            <a href="https://facilio.com/pdf/express-kit-data-sheet.pdf" target="_blank"
                              style="color: #ff3185; font-size: 14px; font-weight: 500;">More Info <i
                                class="fa fa-arrow-right mL10" aria-hidden="true"></i></a>
                          </div>
                        </div>
                        <div class="grid-group-meta">
                          <a href="https://facilio.com/pdf/standard-kit-data-sheetB.pdf" target="_blank"
                            class="pointer">
                            <h4>Vata verks</h4>
                          </a>
                        </div>
                      </a>
                    </div>
                    <!-- <div class="grid-group">
                    <div class="grid-group-image"><img src="/images/integrations/inferrix.png" class="int-img"/></div>
                    <div class="grid-group-meta">
                        <h4>Inferrix</h4>
                    </div>
                    </div>   -->
                  </section>
                </div>
                <div id="app" class="connectivity hide-groups">
                  <header>
                    <span id="connectivity" class="anchor"></span>
                    <h4 class="integration-sub-title">Connectivity</h4>
                    <p class="int-para">Facilio integrates with connectivity providers to surface consolidated BMS data
                      and align it with your portfolio operations. Connect to almost any building management system and
                      automate workflows seamlessly.</p>
                  </header>
                  <section class="grid">
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/tridium.png" class="int-img" /></div>
                      <div class="grid-group-meta">
                        <h4>Tridium</h4>
                      </div>
                    </div>
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/wattsense.png" class="int-img" />
                      </div>
                      <div class="grid-group-meta">
                        <h4>Wattsense</h4>
                      </div>
                    </div>
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/altair.png" class="int-img" /></div>
                      <div class="grid-group-meta">
                        <h4>Altair</h4>
                      </div>
                    </div>
                  </section>
                  <section class="grid">
                    <div class="grid-group">
                      <div class="grid-group-image"><img src="/images/integrations/novant.png" class="int-img" />
                      </div>
                      <div class="grid-group-meta">
                        <h4>Novant</h4>
                      </div>
                    </div>
                  </section>
                </div>
                <div style="margin-top:79px">
                  <h2 class="section-title" id="business-apps">Business Apps</h2>
                  <div id="app" class="utilities hide-groups">
                    <header>
                      <span id="efficiency" class="anchor"></span>
                      <h4 class="integration-sub-title">Utilities and Benchmarking</h4>
                      <p class="int-para">Facilio’s open platform ingests data from multiple sources to support
                        real-time reporting and multiple types of benchmarking programs. Embrace a full-blown framework
                        to enhance sustainability performance and reduce energy costs.</p>
                    </header>
                    <section class="grid">
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/energystar.png" class="int-img" />
                        </div>
                        <div class="grid-group-meta">
                          <h4>Energystar</h4>
                        </div>
                      </div>
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/arcskoru.png" class="int-img" />
                        </div>
                        <div class="grid-group-meta">
                          <h4>Arcskoru</h4>
                        </div>
                      </div>
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/urjanet.png" class="int-img" />
                        </div>
                        <div class="grid-group-meta">
                          <h4>Urjanet</h4>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div id="app" class="bi-analytics hide-groups">
                    <header>
                      <span id="property-asset-mgt" class="anchor"></span>
                      <h4 class="integration-sub-title">BI and Analytics</h4>
                      <p class="int-para">Facilio integrates with powerful data visualization tools to transform
                        property data into actionable insights. Leverage robust real-time analytics to visualize
                        property performance trends, reason out anomalies, and anticipate behavior.</p>
                    </header>
                    <section class="grid">

                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/powerBI.png" class="int-img" />
                        </div>
                        <div class="grid-group-meta">
                          <h4>Power BI</h4>
                        </div>
                      </div>
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/tablue.png" class="int-img" />
                        </div>
                        <div class="grid-group-meta">
                          <h4>Tableau</h4>
                        </div>
                      </div>
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/domo.png" class="int-img" /></div>
                        <div class="grid-group-meta">
                          <h4>Domo</h4>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div id="app" class="accounting hide-groups">
                    <header>
                      <span id="property-asset-mgt" class="anchor"></span>
                      <h4 class="integration-sub-title">Accounting</h4>
                      <p class="int-para">Facilio’s diverse integration capability lets you automatically sync
                        maintenance-related invoices and other financial information with your business accounting
                        software. Manage and track all your operational expenses from one unified platform.</p>
                    </header>
                    <section class="grid">

                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/yardi.png" class="int-img" /></div>
                        <div class="grid-group-meta">
                          <h4>Yardi</h4>
                        </div>
                      </div>
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/xero.png" class="int-img" /></div>
                        <div class="grid-group-meta">
                          <h4>Xero</h4>
                        </div>
                      </div>
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/quickbooks.png" class="int-img" />
                        </div>
                        <div class="grid-group-meta">
                          <h4>QuickBooks</h4>
                        </div>
                      </div>
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/zoho-books.png" class="int-img" />
                        </div>
                        <div class="grid-group-meta">
                          <h4>Zoho Books</h4>
                        </div>
                      </div>
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/oracle.png" class="int-img" />
                        </div>
                        <div class="grid-group-meta">
                          <h4>Oracle ERP</h4>
                        </div>
                      </div>

                    </section>
                  </div>
                  <div id="app" class="property hide-groups">
                    <header>
                      <span id="accounting" class="anchor"></span>
                      <h4 class="integration-sub-title">Property and Asset Management</h4>
                      <p class="int-para">Facilio seamlessly integrates with your existing property management software
                        to derive operational intelligence across the portfolio. Channelize property maintenance to
                        centralized monitoring and control with ease.</p>
                    </header>
                    <section class="grid">
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/yardi.png" class="int-img" /></div>
                        <div class="grid-group-meta">
                          <h4>Yardi</h4>
                        </div>
                      </div>
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/tririga.png" class="int-img" />
                        </div>
                        <div class="grid-group-meta">
                          <h4>IBM Tririga</h4>
                        </div>
                      </div>
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/ibm-maximo.png" class="int-img" />
                        </div>
                        <div class="grid-group-meta">
                          <h4>IBM Maximo</h4>
                        </div>
                      </div>
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/zendesk.png" class="int-img" />
                        </div>
                        <div class="grid-group-meta">
                          <h4>Zendesk</h4>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div id="app" class="it hide-groups">
                    <header>
                      <span id="sales" class="anchor"></span>
                      <h4 class="integration-sub-title">IT and Collaboration</h4>
                      <p class="int-para">Facilio connects to a host of digital platforms to bring unimaginable ease of
                        use to tenants. Make it easy for your tenants to raise maintenance requests and access
                        operational data right from the console of their organizational tools.</p>
                    </header>
                    <section class="grid">
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/freshdesk.png" class="int-img" />
                        </div>
                        <div class="grid-group-meta">
                          <h4>Freshdesk</h4>
                        </div>
                      </div>
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/zoho-crm.png" class="int-img" />
                        </div>
                        <div class="grid-group-meta">
                          <h4>Zoho CRM</h4>
                        </div>
                      </div>
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/salesforce.png" class="int-img" />
                        </div>
                        <div class="grid-group-meta">
                          <h4>Salesforce</h4>
                        </div>
                      </div>
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/servicenow.png" class="int-img" />
                        </div>
                        <div class="grid-group-meta">
                          <h4>Servicenow</h4>
                        </div>
                      </div>
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/freshservice.png"
                            class="int-img" /></div>
                        <div class="grid-group-meta">
                          <h4>Freshservice</h4>
                        </div>
                      </div>
                      <!-- <div class="grid-group">
                    <div class="grid-group-image"><img src="/images/integrations/google.png" class="int-img"/></div>
                    <div class="grid-group-meta">
                        <h4>Gmail</h4>
                    </div>
                    </div> -->
                      <!-- <div class="grid-group">
                    <div class="grid-group-image"><img src="/images/integrations/google.png" class="int-img"/></div>
                    <div class="grid-group-meta">
                        <h4>Google Calendar</h4>
                    </div>
                    </div> -->
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/active-directory.png"
                            class="int-img" /></div>
                        <div class="grid-group-meta">
                          <h4>Microsoft Active Directory</h4>
                        </div>
                      </div>
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/oracle.png" class="int-img" />
                        </div>
                        <div class="grid-group-meta">
                          <h4>Oracle Access Manager</h4>
                        </div>
                      </div>
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/okta.png" class="int-img" /></div>
                        <div class="grid-group-meta">
                          <h4>Okta</h4>
                        </div>
                      </div>
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/onelogin.png" class="int-img" />
                        </div>
                        <div class="grid-group-meta">
                          <h4>Onelogin</h4>
                        </div>
                      </div>
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/google.png" class="int-img" />
                        </div>
                        <div class="grid-group-meta">
                          <h4>Google Apps</h4>
                        </div>
                      </div>
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/slack.png" class="int-img" /></div>
                        <div class="grid-group-meta">
                          <h4>Slack</h4>
                        </div>
                      </div>
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/workplace.png" class="int-img" />
                        </div>
                        <div class="grid-group-meta">
                          <h4>Workplace</h4>
                        </div>
                      </div>
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/teams.png" class="int-img" /></div>
                        <div class="grid-group-meta">
                          <h4>Microsoft Teams</h4>
                        </div>
                      </div>
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/twilio.png" class="int-img" />
                        </div>
                        <div class="grid-group-meta">
                          <h4>Twilio</h4>
                        </div>
                      </div>
                      <div class="grid-group">
                        <div class="grid-group-image"><img src="/images/integrations/whatsapp.png" class="int-img" />
                        </div>
                        <div class="grid-group-meta">
                          <h4>Whatsapp</h4>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
    <integrationModal />
    <Footer />
  </div>
</template>
<script>
  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";
  import integrationModal from "../components/integrationModal";
  export default {
    data() {
      return {
        selectedSection: 1
      };
    },
    components: {
      Navbar,
      Footer,
      integrationModal
    },
    head() {
      return {
        title: "Integrations | Facilio",
        meta: [{
            hid: "description",
            name: "description",
            content: "Integrate your existing systems in your building with Facilio's platform. We integrate with popular solutions to deliver a seamless experience across applications."
          },
          {
            hid: "fb-share-title",
            property: "og:title",
            content: "Integrations | Facilio"
          },
          {
            hid: "fb-share-description",
            property: "og:description",
            content: "Integrate your existing systems in your building with Facilio's platform. We integrate with popular solutions to deliver a seamless experience across applications."
          },
          {
            hid: "fb-share-image",
            property: "og:image",
            content: "https://facilio.com/images/og-images/integration.png"
          },
          {
            hid: "fb-share-url",
            property: "og:url",
            content: "https://facilio.com/integrations"
          },
          {
            hid: "twitter-meta",
            name: "twitter:card",
            content: "summary_large_image"
          },
          {
            hid: "twitter-title",
            name: "twitter:title",
            content: "Integrations | Facilio"
          },
          {
            hid: "twitter-description",
            name: "twitter:description",
            content: "Integrate your existing systems in your building with Facilio's platform. We integrate with popular solutions to deliver a seamless experience across applications."
          },
          {
            hid: "twitter-image",
            name: "twitter:image",
            content: "https://facilio.com/images/og-images/integration.png"
          },
          {
            hid: "twitter-url",
            name: "twitter:url",
            content: "https://facilio.com/integrations"
          }
        ],
        link: [{
          rel: "canonical",
          href: "https://facilio.com/"
        }],
        script: [{
            //  src: "../../../js/page.js"
          },
          {
            src: "../../../js/waypoints.min.js"
          },
          {
            src: "../../../js/includes.js"
          },
          {
            src: "../../../js/position.js"
          }
        ]
      };
    },
    mounted() {
      //scroll to top
      $(".nav-list-alink").click(function () {
        $(window).scrollTop(0);
      });

      //scroll head
      $(window).scroll(function () {

        //After scrolling 50px from the top...
        if ($(window).scrollTop() >= 50) {
          $('body').addClass('down');

          //Otherwise remove inline styles and thereby revert to original stying
        } else {
          $('body').removeClass('down');

        }
      });

      var linkItems = document.getElementsByClassName("nav-list-alink");
      for (var i = 0; i < linkItems.length; i++) {
        linkItems[i].addEventListener("click", function () {
          var current = document.getElementsByClassName("linkActive");
          current[0].className = current[0].className.replace(" linkActive", "");
          this.className += " linkActive";
        });
      }
    },
    methods: {
      openPopup() {
        document.getElementById("integrationPopup").style.display = "block";
      },
      showAll() {
        let hideGroups = $('.hide-groups');
        for (let i = 0, max = hideGroups.length; i < max; i++) {
          hideGroups[i].style.display = "block";
        }
        document.getElementById('business-apps').style.display = "block";
        document.getElementById('building-automation').style.display = "block";
      },
      filter(event) {
        let hideGroups = $('.hide-groups');
        for (let i = 0, max = hideGroups.length; i < max; i++) {
          hideGroups[i].style.display = "none";
        }
        if (event.target.id == "bas") {
          document.getElementById('building-automation').style.display = "block";
          document.getElementById('business-apps').style.display = "none";
          document.getElementsByClassName('bas-hvac')[0].style.display = "block";
          document.getElementsByClassName('bas-hvac')[0].style.position = "initial";
        } else if (event.target.id == "bim") {
          console.log(document.getElementById('building-automation'));
          document.getElementById('business-apps').style.display = "none";
          document.getElementById('building-automation').style.display = "block";
          document.getElementsByClassName('bim')[0].style.display = "block";
          document.getElementsByClassName('bim')[0].style.position = "initial";
        } else if (event.target.id == "smart-sensing") {
          document.getElementById('building-automation').style.display = "block";
          document.getElementById('business-apps').style.display = "none";
          document.getElementsByClassName('smart-sensing')[0].style.display = "block";
          document.getElementsByClassName('smart-sensing')[0].style.position = "initial";
        } else if (event.target.id == "connectivity") {
          document.getElementById('building-automation').style.display = "block";
          document.getElementById('business-apps').style.display = "none";
          document.getElementsByClassName('connectivity')[0].style.display = "block";
          document.getElementsByClassName('connectivity')[0].style.position = "initial";
        } else if (event.target.id == "utilities") {
          document.getElementById('building-automation').style.display = "none";
          document.getElementById('business-apps').style.display = "block";
          document.getElementsByClassName('utilities')[0].style.display = "block";
          document.getElementsByClassName('utilities')[0].style.position = "initial";
        } else if (event.target.id == "bi-analytics") {
          document.getElementById('building-automation').style.display = "none";
          document.getElementById('business-apps').style.display = "block";
          document.getElementsByClassName('bi-analytics')[0].style.display = "block";
          document.getElementsByClassName('bi-analytics')[0].style.position = "initial";
        } else if (event.target.id == "accounting") {
          document.getElementById('building-automation').style.display = "none";
          document.getElementById('business-apps').style.display = "block";
          document.getElementsByClassName('accounting')[0].style.display = "block";
          document.getElementsByClassName('accounting')[0].style.position = "initial";
        } else if (event.target.id == "property") {
          document.getElementById('building-automation').style.display = "none";
          document.getElementById('business-apps').style.display = "block";
          document.getElementsByClassName('property')[0].style.display = "block";
          document.getElementsByClassName('property')[0].style.position = "initial";
        } else if (event.target.id == "it") {
          document.getElementById('building-automation').style.display = "none";
          document.getElementById('business-apps').style.display = "block";
          document.getElementsByClassName('it')[0].style.display = "block";
          document.getElementsByClassName('it')[0].style.position = "initial";
        }
      }
    },
  };
</script>
<style>
  .grey-text {
    font-family: ProximaNovaRgRegular, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #7c7e98;
  }

  .grid-group-image:hover {
    border: 1px solid #3478f6;
    cursor: pointer;
  }

  .mgT10 {
    margin-top: 10px;
  }

  .mgT62 {
    margin-top: 62px;
  }

  .button-container {
    margin-top: 40px;
  }

  .demo-btn-int {
    color: #fff !important;
    border: none;
    margin-top: 100px;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1.9px;
    text-align: center;
    font-family: ProximaNovaSemiBold, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    padding: 25px 50px;
    transition: background-color .2s ease-in;
    margin-right: 0;
    background-color: #3478f6;
    cursor: pointer;
  }

  .demo-btn-int:hover {
    box-shadow: 0 10px 16px 0 hsl(218, 100%, 90%);
  }

  .mg-top75 {
    margin-top: 75px;
  }

  .int-para {
    font-family: ProximaNovaRgRegular, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    line-height: 1.38;
    color: #181b3b;
    margin-top: 10px;
    margin-bottom: 35px;
  }

  .nav-list-alink {
    font-size: 14px !important;
    line-height: 2.43 !important;
    color: #181b3b !important;
  }

  .nav-list-item {
    margin-bottom: 0.1rem !important;
    font-family: ProximaNovaRgRegular, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  #seo-sidebar {
    margin-top: 26px !important;
  }

  .sidenav-head {
    font-size: 11px !important;
    font-weight: bold !important;
    letter-spacing: 1px !important;
    color: #181b3b !important;
    margin-top: 10 !important;
    text-transform: uppercase;
  }

  .int-head {
    font-size: 40px !important;
    font-weight: bold !important;
    line-height: 1.25 !important;
    letter-spacing: 0.17px !important;
    color: #181b3b !important;
  }

  .int-desc {
    font-size: 16px !important;
    font-weight: normal !important;
    line-height: 1.4 !important;
    color: #181b3b !important;
  }

  .grid-group-image {
    width: 165px;
    height: 165px;
    position: relative;
    border: 1px solid #e1e2eb;
    border-radius: 3px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .grid-group {
    position: inherit !important;
  }

  .anchor {
    scroll-margin-top: 100px;
  }

  .pad-50 {
    padding: 50px 0px;
  }

  .fc-wrapper-pad {
    padding: 80px 0px 0px 0px !important;
  }

  .nav-list-item>.nav-list-alink:hover,
  .linkActive {
    color: #2681f6 !important;
    font-size: 1rem !important;
    font-weight: 600 !important;
    line-height: 2.43 !important;
  }

  .input-group {
    width: 70% !important;
  }

  .int-img {
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    padding: 0px 10px;
  }

  #app {
    max-width: 1000px;
    margin: auto;
  }

  .integration-sub-title {
    font-size: 18px;
    font-weight: 600;
    color: #181b3b;
    font-family: ProximaNovaRgSemibold, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  .section-title {
    font-size: 24px;
    font-weight: 600;
    color: #181b3b;
    padding-bottom: 20px;
  }

  @media (min-width: 500px) {
    .grid {
      display: flex;
      align-items: center;
      grid-gap: 17px;
      flex-wrap: wrap;
    }
  }

  @media (min-width: 800px) {
    .grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .grid-group {
    margin-bottom: 3rem;
  }

  @media (min-width: 500px) {
    .grid-group {
      margin-bottom: 0;
    }
  }

  .grid-group-meta {
    margin-top: 15px;
    margin-bottom: 38px;
  }

  .grid-group-meta h3,
  .grid-group-meta h4 {
    margin: 0;
  }

  .grid-group-meta h4 {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    color: #181b3b;
    font-family: ProximaNovaRgSemibold, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  .grid-group-text p {
    line-height: 1.5;
    text-align: justify;
  }

  @media screen and (min-width: 67.8125rem) {
    .two-thirds {
      grid-template-columns: 17.731707% 74.853659% !important;
    }
  }

  @media screen and (min-width: 48rem) {
    .privacy-content-container {
      padding: 0 4vw;
    }
  }

  .nav-list-item:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 600px) {

    /* body{
  overflow-x: unset !important;
} */
    .sidebar-fixed {
      width: 380px;
      overflow: auto !important;
      position: sticky !important;
      position: -webkit-sticky !important;
      top: 0 !important;
      margin-left: 30px;
      padding-top: 80px;
    }
  }

  @media only screen and (max-width: 600px) {
    .int-img {
      width: 60% !important;
    }

    .int-head {
      font-size: 36px !important;
    }

    .input-group {
      width: 85% !important;
    }

    .bas-hvac {
      padding-top: 0 !important;
    }

    .legal-content {
      padding-left: 10px !important;
      padding-right: 10px !important;
    }

    .grid-group {
      margin-bottom: 0 !important;
    }

    .grid-group-image {
      width: 300px !important;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100px;
      text-align: center;
    }

    .grid {
      justify-content: center;
      justify-content: center;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    .fc-vata-verks-img {
      width: 50% !important;
      margin-bottom: 30px !important;
    }
  }

  @media only screen and (max-width: 480px) {
    .sidebar-container {
      width: 90%;
    }
  }

  @media screen and (min-width: 48rem) {
    .privacy-content-container {
      padding: 0 !important;
    }
  }

  @media only screen and (max-width: 1024px) {
    .sidebar-fixed {
      width: auto !important;
      padding-top: 30px;
      margin-top: 0 !important;
    }

    .legal-content {
      padding-left: 40px;
      padding-right: 40px;
    }

  }
</style>