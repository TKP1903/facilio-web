<template>
  <div class="productPage btn-shade">
    <div id="productPage"></div>

    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>

      <div class="mask"></div>

      <div class="iot-section">
        <div class="fc-container">
          <div class="overview-page-headings" style="max-width:550px;">
            <h1>
              Unblock massive operational insights from your building systems
            </h1>
            <p>
              Activate connected buildings at scale with the powerful Facilio
              IoT Edge. Connect diverse legacy systems hardware-agnostically and
              harness the collective data to unlock new opportunities for
              operational efficiency, sustainability, and cost reduction, across
              your portfolio.
            </p>
            <GetStartedButton />
          </div>
        </div>
      </div>

      <!---energy-feature-9-columns-->
      <div class="energyOpts mobile-pad feature-pad">
        <div class="container">
          <div class="fc-workplace-center">Built for Buildings</div>
          <div class="w-feature-head-center">
            IoT Intelligence that seamlessly fits into your existing stack
          </div>
          <div class="icon-container">
            <!-- Feature row one start -->
            <div class="row">
              <div class="col-md-4 mT30">
                <div class="partner-featur-icon text-left">
                  <img src="/images/icons/centralized.svg" alt title />
                </div>
                <h5 class="partner-feature-heading text-left">
                  Real-time data acquisition
                </h5>
                <p class="partner-feature-desc text-left">
                  Easily and securely connect, acquire,
                  <br />and stream performance data in real-time <br />from
                  dispersed building systems <br />controllers with Facilio IoT
                  Edge.
                </p>
              </div>
              <div class="col-md-4 mT30">
                <div class="partner-featur-icon text-left">
                  <img src="/images/icons/fullifecycle.svg" alt title />
                </div>
                <h5 class="partner-feature-heading text-left">
                  Plays nice with everyone
                </h5>
                <p class="partner-feature-desc text-left">
                  Facilio IoT Agent is vendor-neutral
                  <br />and communicates via Bacnet/IP, <br />Modbus, TCP & RTU,
                  OPC XML/DA, <br />OPC UA, and Tridium Niagara networks.
                </p>
              </div>
              <div class="col-md-4 mT30">
                <div class="partner-featur-icon text-left">
                  <img src="/images/icons/analysis.svg" alt title />
                </div>
                <h5 class="partner-feature-heading text-left">
                  Ensures seamless operability
                </h5>
                <p class="partner-feature-desc text-left">
                  Offline just works! At areas of limited
                  <br />connectivity or unstable network, <br />Facilio
                  automatically syncs the latest state <br />of system data
                  after connection is restored.
                </p>
              </div>
            </div>
            <!-- Feature row one start -->

            <!-- Feature row two start -->
            <div class="row mT30">
              <div class="col-md-4 mT30">
                <div class="partner-featur-icon text-left">
                  <img src="/images/icons/runmobile.svg" alt title />
                </div>
                <h5 class="partner-feature-heading text-left">
                  Bi-directional communication
                </h5>
                <p class="partner-feature-desc text-left">
                  Facilio processes, responds, and directs
                  <br />cloud-based commands to system <br />controllers.
                  Execute functions like set <br />point change or direct system
                  action <br />through Facilio.
                </p>
              </div>
              <div class="col-md-4 mT30">
                <div class="partner-featur-icon text-left">
                  <img src="/images/icons/quick-view.svg" alt title />
                </div>
                <h5 class="partner-feature-heading text-left">
                  Enterprise-ready decision making
                </h5>
                <p class="partner-feature-desc text-left">
                  Facilio Platform, using Facilio IoT Edge,
                  <br />aggregates dispersed performance data onto <br />a
                  single global system, for advanced analytics,
                  <br />visualisation, and machine learning models.
                </p>
              </div>
              <div class="col-md-4 mT30">
                <div class="partner-featur-icon text-left">
                  <img src="/images/icons/customer-portal.svg" alt title />
                </div>
                <h5 class="partner-feature-heading text-left">
                  Reliable and blazing fast
                </h5>
                <p class="partner-feature-desc text-left">
                  Compatible with Windows and Linux , Facilio
                  <br />IoT Agent securely discovers controllers and
                  <br />connects associated points across buildings.
                  <br />ensuring an always-on communication.
                </p>
              </div>
            </div>
            <!-- Feature row two start -->
          </div>
        </div>
      </div>
    </div>
    <VerdantixBanner />
    <!---end--of--energy-feature-9-columns-->

    <!--iot-tab-feature-->
    <div class="workplace-feature-4">
      <div class="container">
        <div class="w-feature-head-center">
          Facilio solves the 3 Key Challenges of Connected Building Operations
        </div>
        <FeatureNav
          v-bind:heading1="item.heading1"
          v-bind:heading2="item.heading2"
          v-bind:heading3="item.heading3"
          v-bind:description1="item.description1"
          v-bind:description2="item.description2"
          v-bind:description3="item.description3"
          v-bind:image1="item.image1"
          v-bind:image2="item.image2"
          v-bind:image3="item.image3"
          v-bind:altText1="item.altText1"
          v-bind:altText2="item.altText2"
          v-bind:altText3="item.altText3"
          v-bind:imgStyle1="item.imgStyle1"
          v-bind:imgStyle2="item.imgStyle2"
          v-bind:imgStyle3="item.imgStyle3"
        />
      </div>
    </div>
    <!--end--iot-tab-feature-->
    <div class="fc-iot-edge-tab">
      <div class="w-feature-head-center">
        The friction in data aggregation is
      </div>
      <div class="w-feature-head-center">
        costing your time to efficiency
      </div>
      <div class="fc-workplace-subtxt mT20">
        Simplify connected operations with our extensible, fully agnostic
        integration
      </div>
      <tab></tab>
    </div>

    <section class="fc-customer-band-logos">
      <CREBanner />
    </section>
    <Footer />
  </div>
</template>

<script>
import FeatureNav from "../components/FeatureNav";
import GetStartedButton from "../components/GetStartedButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CREBanner from "../components/CREBanner";
import VerdantixBanner from "../components/Verdantixbanner";
import tab from "../components/FaqTab";

export default {
  data() {
    return {
      item: {
        heading1: "Integrations",
        heading2: "Commissioning",
        heading3: "O&M Applications",
        description1:
          "Facilio partners with leading equipment OEMs and hardware manufacturers to provide out-of-the-box integrations, easily reducing capital expenditure on Building IoT projects.",
        description2:
          "What in the regular world will take months of effort, is drastically simplified with Facilio’s cloud-based commissioning setup that reduces the whole process to just 3 days.",
        description3:
          "Accelerate agility and decision-making in portfolio operations and maintenance with real-time building performance insights with Facilio’s comprehensive suite of applications.",
        image1: "bms-2.png",
        image2: "iot-2.png",
        image3: "mas-5.png",
        altText1: "facilio Integrations",
        altText2: "Facilio Commissioning",
        altText3: "Facilio O&M Applications",
        imgStyle1: "max-width:600px;width:100%;",
        imgStyle2: "max-width:500px;width:100%;",
        imgStyle3: "max-width:600px;width:100%;",
      },
    };
  },
  components: {
    FeatureNav,
    GetStartedButton,
    Navbar,
    Footer,
    VerdantixBanner,
    CREBanner,
    tab,
  },
  head() {
    return {
      title: "Unblock massive operational insights from your building systems",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Activate connected buildings at scale with the powerful Facilio IoT Edge. Connect diverse legacy systems hardware-agnostically and harness the collective data to unlock new opportunities.",
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content:
            "Unblock massive operational insights from your building systems",
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Activate connected buildings at scale with the powerful Facilio IoT Edge. Connect diverse legacy systems hardware-agnostically and harness the collective data to unlock new opportunities.",
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "https://facilio.com/images/og-images/iot-edge.png",
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/iot-edge/",
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
            "Unblock massive operational insights from your building systems",
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Activate connected buildings at scale with the powerful Facilio IoT Edge. Connect diverse legacy systems hardware-agnostically and harness the collective data to unlock new opportunities.",
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "https://facilio.com/images/og-images/iot-edge.png",
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/iot-edge/",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/iot-edge/",
        },
      ],
      script: [
        { src: "../js/page.js" },
        { src: "../js/waypoints.min.js" },
        { src: "../js/includes.js" },
      ],
    };
  },
};
</script>

<style></style>
