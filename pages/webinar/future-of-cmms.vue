<template>
  <div class="productPage btn-shade fc-meetup-page fc-future-of-page">
    <div id="productPage"></div>

    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>

      <div class="mask"></div>

      <div class="fc-case-study-hub" style="background: #312481;">
        <div class="container">
          <div class="fc-hub-content text-center">
            <div class="fc-meetup-badge">Facilio Webinar</div>
            <h1>
              How data powers the future of building maintenance <br />
              & optimization technology
            </h1>
            <p class="pB20 fc-yellow-txt">
              On Demand Webinar
            </p>
            <a @click="openPopup()" class="fc-cs-try-white">Watch Recording</a>
          </div>
        </div>
      </div>

      <div class="container fc-webinar-series">
        <h3>End of standalone, legacy software</h3>
        <div class="fc-meetup-page-content-con">
          <p>
            The best property operations teams work together as a holistic unit.
            They are constantly optimizing for efficiency, driven by shared
            goals and a joint vision.
          </p>
          <p>
            The irony is, even the best teams are bogged down by software that
            are unsuited for such a fast-paced, collaborative environment.
          </p>
          <h5 class="text-left f22">And a glaring example is your CMMS.</h5>
          <p>
            Despite being a core O&M function, today’s maintenance technologies
            are outdated, self-contained, limiting efficiency, agility, and
            stakeholder accessibility:
          </p>
          <div
            class="fc-webinar-feat-card"
            style="max-width: 1000px;margin-left: inherit;"
          >
            <p>
              <span class="pink-dot mR10"></span> Why is my CMMS so rigid? Why
              can't I customize it to my org needs?
            </p>
            <p>
              <span class="pink-dot mR10"></span> How can I make it accessible
              for all stakeholders?
            </p>
            <p>
              <span class="pink-dot mR10"></span> Do I have to shift my way of
              working to suit the demands of the CMMS product?
            </p>
          </div>

          <p>
            The new ‘Agile Operations Era’ today clearly asserts the demand for
            a more
            <span style="font-family: ProximaNovaSemibold;">
              flexible, and contextually integrated O&M software that caters
              across the board!</span
            >
          </p>

          <p>
            Global real estate portfolio owners and operators alike are
            increasingly turning to holistic efficiency-drivers that can
            contextually integrate workflows and provide seamless accessibility
            to enterprise-wide O&M insights - and this webinar aims to do just
            that.
          </p>

          <!-- sample -->
          <div class="text-center pT50 pB40">
            <a
              @click="openPopup()"
              style="border: 1px solid #48d0e0; color: #1c35af;"
              class="fc-cs-try-white"
              >Watch Recording</a
            >
          </div>
        </div>
      </div>

      <!-- second -->
      <div class="container-speakers">
        <div class="container">
          <h3 class="primeHead text-center">Meet the Speakers</h3>
          <div class="fc-event-speacker-con row">
            <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6 text-center pB60">
              <img
                src="/images/jonathan-thomas.jpeg"
                class="fc-img-round"
                title="Jonathan Thomas"
              />
              <div class="fc-workplace-subhead">
                Jonathan Thomas
              </div>
              <div class="fc-speacker-designation">
                President, Building Maintenance Optimization Consultants, Inc.
                (BMOC)
              </div>
              <div class="w-feature-desc pT10 text-left">
                A seasoned professional in the smart buildings and asset
                management industry, Jonathan is the founder of BMOC, an asset
                management program consultant company for large portfolios of
                buildings. Specialized in all things CMMS optimization, he has
                dedicated his entire career to help real estate and FM
                organizations get their asset management programming off the
                ground.
              </div>
            </div>

            <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6 text-center pB60">
              <img
                src="/images/doug.jpeg"
                class="fc-img-round"
                title="Doug Litwiller"
              />
              <div class="fc-workplace-subhead">
                Doug Litwiller
              </div>
              <div class="fc-speacker-designation">
                Business Development Manager, BMOC
              </div>
              <div class="w-feature-desc pT10 text-left">
                An eminent thought leader in the FM industry, Doug has held
                senior positions throughout his career including Associate
                Director for Energy Conservation at the University of Iowa. A
                true evangelist in the asset management sector, Doug is
                passionate about spreading the gospel of effective asset
                management and has created a number of interinstitutional FM
                collaboration groups.
              </div>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6 text-center">
              <img
                src="/images/tony.png"
                class="fc-img-round"
                title="Tony Callis"
              />
              <div class="fc-workplace-subhead">
                Tony Callis
              </div>
              <div class="fc-speacker-designation">
                Sales Director, Americas, Facilio Inc.
              </div>
              <div class="w-feature-desc pT10 text-left">
                A veteran in delivering innovative SaaS solutions for large
                enterprise clients, Tony has over 30+ years of experience
                spanning senior roles in hospitality, helping clients define
                portfolio data strategy and optimize their facilities
                maintenance operations. A true evangelist in the IoT sector,
                Tony is passionate about using technology to future proof real
                estate O&M.
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- sample -->

      <div class="container" style="max-width: 900px; padding-top: 50px;">
        <div>
          <h3 class="mB0 text-center primeHead">
            What you’ll learn
          </h3>
          <div class="fc-learn-txt pT20">
            <span class="pink-dot mR10"></span>The state of current CMMS:
            Breaking down opportunities for modern, economic maintenance
            decisions
          </div>
          <div class="fc-learn-txt">
            <span class="pink-dot mR10"></span>Ways to enhance agility and
            customer experience with an integrated CMMS approach
          </div>
          <div class="fc-learn-txt">
            <span class="pink-dot mR10"></span>How to align CMMS to larger
            strategic projects using data & IoT (eg. smart building solutions,
            command control center, remote portfolio automation, etc)
          </div>
          <div class="text-center pT80 pB80">
            <a
              @click="openPopup()"
              style="border: 1px solid #48d0e0; color: #1c35af;"
              class="fc-cs-try-white"
              >Watch Recording</a
            >
          </div>
        </div>

        <div class="fc-meetup-cus-logo">
          <div class="pB50">
            <img
              src="/images/customer-logo/facilio-logo.svg"
              alt
              title
              width="150"
            />
          </div>
          <div class="pB50">
            <img src="/images/customer-logo/bmoc.png" alt title width="200" />
          </div>
        </div>
      </div>
      <!-- end -->
    </div>
    <webinarModal></webinarModal>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import webinarModal from "../webinar/components/FutureCmmswebniarModel";

export default {
  components: {
    Navbar,
    Footer,
    webinarModal,
  },
  head() {
    return {
      title:
        "Future of CMMS: Powering building optimization with data & IoT | Facilio Webinar",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Learn how leading experts in property operations and maintenance industry are modernizing legacy software to unlock holistic efficiencies across portfolios.",
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content:
            "Future of CMMS: Powering building optimization with data & IoT | Facilio Webinar",
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Learn how leading experts in property operations and maintenance industry are modernizing legacy software to unlock holistic efficiencies across portfolios.",
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "https://facilio.com/images/og-images/future-of-cmms.png",
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/webinar/future-of-cmms",
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content:
            "Future of CMMS: Powering building optimization with data & IoT | Facilio Webinar",
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Learn how leading experts in property operations and maintenance industry are modernizing legacy software to unlock holistic efficiencies across portfolios.",
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "https://facilio.com/images/og-images/future-of-cmms.png",
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/webinar/future-of-cmms",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/webinar/future-of-cmms",
        },
      ],
      script: [
        {
          src: "../js/page.js",
        },
        {
          src: "../js/waypoints.min.js",
        },
        {
          src: "../js/includes.js",
        },
      ],
    };
  },
  methods: {
    openPopup() {
      document.getElementById("webinarPopup").style.display = "block";
    },
  },
};
</script>

<style>
.fc-hub-content h1 {
  font-size: 41px;
}
.fc-future-of-page .fc-hub-content {
  max-width: 1100px;
}
</style>
