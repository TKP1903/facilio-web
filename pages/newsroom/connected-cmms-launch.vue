<template>
  <div class="productPage btn-shade">
    <div id="productPage"></div>
    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <div class="mask"></div>

      <!-- home banner section -->
      <div class="press-details-home-banner">
        <div class="press-home-wrap container">
          <div class="row">
            <div class="col-md-7">
              <h1 class="press-heading-H">
                Facilio announces the launch of

                <span>Connected CMMS,</span> reimagines legacy software for game-changing property operations
              </h1>
              <p class="press-date-txt">November 17th, 2021</p>
            </div>
            <div class="col-md-5">
              <img class="pressimg" src="/images/press-release.jpg" />
            </div>
          </div>
        </div>
      </div>

      <!-- home banner end -->

      <!-- facilio content  start-->
      <section>
        <div class="legal-main">
          <div class="privacy-content-container">
            <div class="two-thirds">
              <div class="legal-sidebar">
                <!-- <nav>
                  <ul class="nav-list-ul fc-mobile-list">
                    <li class="nav-list-item">
                      <nuxt-link to="/" class="nav-list-alink">Home</nuxt-link>
                    </li>
                    <li class="nav-list-item">
                      <a href="#about" class="nav-list-alink">About</a>
                    </li>
                    <li class="nav-list-item">
                      <a href="#pro" class="nav-list-alink">Product</a>
                    </li>
                  </ul>
                </nav> -->
              </div>
              <div class="legal-content">
                <img
                  src="/images/newsroom/Connected-CMMS-Facilio-PR.jpg"
                  alt
                  title
                />
                <h2 class="fwbold black-txt-24 blk-txt-mobile">
                  Becomes the only software platform to consolidate all property maintenance,
                  client engagement, vendor management, workplace management, asset performance,
                  and IoT data workflows in a single solution.
                </h2>

                <div class="legal-content-para" style="margin-top: 25px;">
                  <span class="fwbold" style="font-family: 'ProximaNovaBold';"
                    >New York, November 17, 2021</span
                  >
                  Facilio, a leading property operations platform for real estate portfolios,
                  today announced the launch of its connected CMMS solution to help enterprises
                  simplify operations, optimize expenses, and keep pace with the dynamic needs
                  of customers.
                </div>
                <div class="legal-content-para">
                  By doing so, Facilio reimagines the legacy CMMS/CaFM
                  (Computerized Maintenance Management System/Computer-Aided Facility Management) software
                  market beyond just a system of records of assets and maintenance schedules and creates
                  a unified solution that focuses on connecting systems, people & processes through an
                  IoT based, low-code SaaS platform with workflow management capabilities.
                </div>

                <div class="legal-content-heading">
                  Facilio’s connected CMMS solution helps property teams to:
                </div>

                <div class="legal-content-para">
                  <div class="pink-dot"></div>
                  <b> Unify portfolio operations - </b> includes modules for helpdesk, facility
                  maintenance and inspections, inventory and asset management, tenant and customer
                  servicing, contractor management, compliance and audit tracking, workplace management,
                  condition-based and predictive maintenance, energy and asset performance optimization,
                  and more.
                </div>

                <div class="legal-content-para">
                  <div class="pink-dot"></div>
                  <b>Enhance customer experience with meaningful OT integrations - </b>API-first
                  approach that offers seamless integration with BMS, sensors, BIM, and any 3rd
                  party business software.
                </div>

                <div class="legal-content-para">
                  <div class="pink-dot"></div>
                  <b>Orchestrate and automate workflows - </b>no code/low code workflow
                  automation engine that allows intelligent routing of work across modules,
                  status change, inspection, approvals, and resolution workflows.
                </div>

                <div class="legal-content-para">
                  <div class="pink-dot"></div>
                  <b>Engage multiple stakeholders - </b> intuitive and contextual web, mobile,
                  and kiosk-based interfaces for multiple stakeholders across O&M teams as well
                  as external parties including contractors, customers, tenants, and occupants.
                </div>



                <div class="legal-content-para">
                  “The industry has long been forced to adopt complex processes and operate around
                  legacy tools and software limitations. Property teams are often limited rather
                  than enabled by the software they use. Facilio reimagines a connected CMMS solution
                  to solve this pain point—bringing the power of the latest technology trends in
                  enterprise cloud applications to the property operations market” said Prabhu Ramachandran,
                  Founder, and CEO, Facilio. “We’re thrilled to lead this transition as we continue to help
                  enterprises replace multiple siloed tools with one comprehensive operations platform”.
                </div>
                <div class="legal-content-para">
                  The product offering has been met with excitement by Facilio customers as they see the value of
                  a unified solution that can potentially eliminate siloed applications and manual processes.
                  Even before its public launch, Facilio demonstrated impressive traction, acquiring a number
                  of commercial offices, healthcare, and retail customers across North America, the UK & Europe,
                  the Middle East, and Australia, who are realizing cost savings through greater efficiency and
                  agile performances.
                </div>
                <div class="legal-content-para">
                  For more information about Facilio’s O&M Suite visit :
                  <nuxt-link to="/operations-and-maintenance/"
                    >https://facilio.com/operations-and-maintenance</nuxt-link
                  >
                </div>
                <div class="legal-content-para">
                  <div class="legal-content-heading">About Facilio</div>
                  <div class="legal-content-para">
                   Facilio's AI-driven property operations platform allows real estate owners to aggregate
                   building data, optimize performance, and control portfolio operations -
                   all from one place. Customers in the commercial office, healthcare, higher education
                   & retail categories use Facilio to reduce operations costs, increase net asset values
                   & de-risk operational liability. Headquartered in New York City with offices in Europe
                   (the United Kingdom and Italy), Dubai, Chennai, Sydney, & Singapore, Facilio is a global
                   company backed by leading investors including Accel Partners and Tiger Global Management.
                  </div>

                  <div class="legal-content-para">
                    Learn more about Facilio O&M platform :
                    <a href="https://facilio.com/">https://facilio.com/</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- facilio content end -->
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
export default {
  components: {
    Navbar,
    Footer,
  },
  head() {
    return {
      title: "Connected CMMS | Property Operations Software | Facilio",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Simplify property operations, optimize expenses, and connect your  systems, people & processes with our IoT based, low-code SaaS platform. Learn more about Connected CMMS solution from Facilio.",
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Connected CMMS | Property Operations Software | Facilio",
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Simplify property operations, optimize expenses, and connect your  systems, people & processes with our IoT based, low-code SaaS platform. Learn more about Connected CMMS solution from Facilio.",
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "/images/newsroom/Connected-CMMS-Facilio-PR.jpg",
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content:
            "https://facilio.com/newsroom/connected-cmms-launch",
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Connected CMMS | Property Operations Software | Facilio",
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Simplify property operations, optimize expenses, and connect your  systems, people & processes with our IoT based, low-code SaaS platform. Learn more about Connected CMMS solution from Facilio.",
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "/images/newsroom/Connected-CMMS-Facilio-PR.jpg",
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content:
            "https://facilio.com/newsroom/connected-cmms-launch",
        },
      ],
      link: [
        {
          rel: "canonical",
          href:
            "https://facilio.com/newsroom/connected-cmms-launch",
        },
      ],
      script: [
        { src: "../../js/page.js" },
        { src: "../../js/waypoints.min.js" },
        { src: "../../js/includes.js" },
      ],
    };
  },
};
</script>

<style>
#fc-header .navbar-default {
  background-color: #ffffff !important;
}
</style>
