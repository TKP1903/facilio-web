<template>
  <div class="productPage btn-shade">
    <div id="productPage"></div>

    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>

      <!----guide-hub-section-start-->

      <div class="mask"></div>

      <div class="fc-case-study-hub">
        <div class="container">
          <div class="fc-hub-content">
            <h1>Guide to Operational Efficiency</h1>
            <p style=" line-height: 1.44;font-size:18px;
   font-family: ProximaNovaRgRegular;max-width:600px;">
              Building Operations & Maintenance is fast-changing, and we’re here to help you stay ahead of the curve.
              Discover free playbooks and best practices to make your properties efficient today.
            </p>
          </div>
        </div>
      </div>
      <div class="guide-hub-pad container">
        <PrimaryGuideCard v-for="primarycard in primaryCards" :key="primarycard.link" v-bind:link="primarycard.link"
          v-bind:image="primarycard.image" v-bind:tag="primarycard.tag" v-bind:heading="primarycard.heading"
          v-bind:description="primarycard.description" v-bind:button="primarycard.button" />
        <div class="row">
          <SecondaryGuideCard v-for="card in secondarycard" v-bind:key="card.link" v-bind:link="card.link"
            v-bind:image="card.image" v-bind:tag="card.tag" v-bind:heading="card.heading"
            v-bind:description="card.description" v-bind:button="card.button" />
        </div>
      </div>
      <Footer />

    </div>
  </div>
</template>

<script>
  import PrimaryGuideCard from "../../../components/PrimaryGuideCard";
  import SecondaryGuideCard from "../../../components/SecondaryGuideCard";
  import Navbar from "../../../components/Navbar";
  import Footer from "../../../components/Footer";

  export default {
    components: {
      Navbar,
      Footer,
      PrimaryGuideCard,
      SecondaryGuideCard
    },
    data() {
      return {
        primaryCards: [{
            link: "/resources/guide/fdd-evaluation-guide-half",
            image: "FDD-engine.png",
            tag: "Guide",
            heading: "FDD Evaluation Guide",
            description: "Learn the capabilities to look for in an FDD solution for a commercial building or portfolio. What are the top criteria to consider when evaluating one? Here’s our comprehensive guide.",
            button: "Get it Now",
          },
          {
            link: "/resources/guide/evaluating-facilities-management-software",
            image: "ultimate-guide.png",
            tag: "Guide",
            heading: "A Guide to Enterprise-wide Building Operations & Maintenance",
            description: "Learn how to maximize your portfolio's net operating income without having to retrofit or add new devices. Aggregate operational data all in one place - find out how.",
            button: "Get it Now"
          },
        ],
        secondarycard: [{
            link: "/resources/guide/integrated-asset-energy",
            image: "portfolio-4.png",
            tag: "White Paper",
            heading: "Integrate asset and energy management for real-time building performance",
            description: "Explore the benefits of tracking your facility’s asset and energy performance data in real-time.",
            button: "Get it Now"
          },
          {
            link: "/resources/guide/portfolio-wide",
            image: "portfolio-2.png",
            tag: "White Paper",
            heading: "Centrally manage maintenance and sustainability across the portfolio",
            description: "Know how you can centrally manage facilities across portfolio using modern technologies like IoT and ML.",
            button: "Get it Now"
          }
        ]
      };
    },
    head() {
      return {
        title: "Guides to Optimize CRE Operations | Facilio",
        meta: [{
            hid: "description",
            name: "description",
            content: "Free Guides, white papers, and videos to help you improve efficiency in building operations & maintenance."
          },
          {
            hid: "fb-share-title",
            property: "og:title",
            content: "Guides to Optimize CRE Operations | Facilio"
          },
          {
            hid: "fb-share-description",
            property: "og:description",
            content: "Free Guides, white papers, and videos to help you improve efficiency in building operations & maintenance."
          },
          {
            hid: "fb-share-image",
            property: "og:image",
            content: "https://facilio.com/images/og-images/guide-banners.png"
          },
          {
            hid: "fb-share-url",
            property: "og:url",
            content: "https://facilio.com/resources/guide"
          },
          {
            hid: "twitter-meta",
            name: "twitter:card",
            content: "summary_large_image"
          },
          {
            hid: "twitter-title",
            name: "twitter:title",
            content: "Guides to Optimize CRE Operations | Facilio"
          },
          {
            hid: "twitter-description",
            name: "twitter:description",
            content: "Free Guides, white papers, and videos to help you improve efficiency in building operations & maintenance."
          },
          {
            hid: "twitter-image",
            name: "twitter:image",
            content: "https://facilio.com/images/og-images/guide-banners.png"
          },
          {
            hid: "twitter-url",
            name: "twitter:url",
            content: "https://facilio.com/resources/guide"
          }
        ],
        link: [{
          rel: "canonical",
          href: "https://facilio.com/resources/guide"
        }],
        script: [{
            src: "../../../js/page.js"
          },
          {
            src: "../../../js/waypoints.min.js"
          },
          {
            src: "../../../js/includes.js"
          }
        ]
      };
    }
  };
</script>

<style></style>