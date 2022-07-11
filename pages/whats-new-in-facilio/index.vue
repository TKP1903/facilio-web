<template>
  <div class="productPage btn-shade">
    <div id="productPage"></div>
    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <section class="fc-whats-new-banner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="229"
          class="fc-vertical-small-dots hidden-xs"
        >
          <path
            fill="#DEDEF7"
            fill-rule="evenodd"
            d="M88.811 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177A3.182 3.182 0 0192 92.344a3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 70.11a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177A3.182 3.182 0 0192 47.877a3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 25.643a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0188.811.233 3.182 3.182 0 0192 3.41a3.182 3.182 0 01-3.189 3.176zM67.858 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233A3.182 3.182 0 0164.67 3.41 3.182 3.182 0 0167.858.233a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM45.994 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0145.994.233a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM25.041 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0125.04 44.7a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0125.04.233a3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zM4.088 95.52a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234A3.182 3.182 0 01.899 70.11a3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176A3.182 3.182 0 014.088 44.7a3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233A3.182 3.182 0 01.899 3.41 3.182 3.182 0 014.088.233 3.182 3.182 0 017.276 3.41a3.182 3.182 0 01-3.188 3.176zM88.81 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 135.96a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zM67.858 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM45.994 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM25.041 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM4.088 228.07a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176z"
          />
        </svg>
        <div class="container">
          <h1>Product Updates</h1>
          <p></p>
          <div class="fc-btn-con">
            <div
              @click="openPopup"
              class="text-center fc-violet-btn"
              style="max-width: 195px;"
            >
              Subscribe Now
            </div>
          </div>
        </div>
      </section>
      <section class="fc-product-update-area" style="padding-bottom: 70px;">
        <div class="fc-container">
          <div class="row">
            <ProductUpdateCard
              v-for="item in ProductUpdate"
              v-bind:key="item.link"
              v-bind:link="item.link"
              v-bind:image="item.image"
              v-bind:month="item.month"
              v-bind:desc="item.desc"
              v-bind:color="cardColor[item.theme]"
            />
          </div>
        </div>
      </section>
      <section class="mailchimp-form">
        <div class="fc-btn-con">
          <div @click="openPopup" class="text-center fc-violet-btn">
            Subscribe for Updates
          </div>
        </div>
        <whatsForm></whatsForm>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import ProductUpdateCard from "../../components/ProductUpdateCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import whatsForm from "../whats-new-in-facilio/form/whats-new-form";
export default {
  mounted: function() {
    document.getElementsByClassName("fc-pd-upd-img")[0].style.height = "198px";
  },
  data() {
    return {
      ProductUpdate: [
        {
          theme: 1,
          link: "/whats-new-in-facilio/march-2022",
          image: "img_11.png",
          month: "March 2022",
          desc:
            "Timeline view, Induction, Inspection, Google live translate and more",      
        },
        {
          theme: 12,
          link: "/whats-new-in-facilio/may-2021",
          image: "June-Pro-UpdateAgent-Overview.png",
          month: "May 2021",
          desc:
            "Automated approvals, role-based dashboards, time duration analytics and more",      
        },       
        {
          theme: 11,
          link: "/whats-new-in-facilio/april-2021",
          image: "asset.png",
          month: "April 2021",
          desc:
            "Tenant portal customisation, sensor fault detection, task intelligence and more",
        },
        {
          theme: 10,
          link: "/whats-new-in-facilio/jan-2021",
          image: "pu-2021-jan4.png",
          month: "January 2021",
          desc:
            "Consolidated help desk, custom buttons, dashboard tabs, and more",
        },
        {
          theme: 9,
          link:
            "https://blog.facilio.com/whats-new-with-facilio-popular-upgrades-from-the-last-year-and-whats-ahead-in-2021/",
          image: "product-update2021.jpg",
          month: "2020 Year in Review",
          desc: "Popular upgrades from the last year and what’s ahead in 2021",
        },
        {
          theme: 8,
          link: "/whats-new-in-facilio/october-2020",
          image: "oct-banner.png",
          month: "October 2020",
          desc:
            "Virtual meter, alarms on historical data, ticket-level SLA, and more",
        },
        {
          theme: 7,
          link: "/whats-new-in-facilio/september-2020",
          image: "smart-filter.png",
          month: "september 2020",
          desc:
            "Smart filters for dashboard, related work order, custom views, and more",
        },
        {
          theme: 6,
          link: "/whats-new-in-facilio/august-2020",
          image: "stateflow.png",
          month: "August 2020",
          desc:
            "Flexible stateflows, vendor SLA adherence, TV-mode dashboards, and more",
        },
        {
          theme: 5,
          link: "/whats-new-in-facilio/july-2020",
          image: "common-protocols.png",
          month: "July 2020",
          desc:
            "Faster system integration, digitized work permits, SAML - based SSO, and more",
        },
        {
          theme: 4,
          link: "/whats-new-in-facilio/june-2020",
          image: "img1.png",
          month: "June 2020",
          desc:
            "Global benchmarking, 3-D data visualization, digitized quotes and more",
        },
        {
          theme: 3,
          link: "/rebuild",
          image: "hygiene.png",
          month: "May 2020",
          desc:
            "Powerful reopening toolkit - touch less controls, portfolio automation, and a lot more",
        },
        {
          theme: 1,
          link: "/whats-new-in-facilio/february-2020",
          image: "feb.png",
          month: "February 2020",
          desc: "Custom modules, dynamic SLAs, personalized apps and more",
        },
        {
          theme: 2,
          link: "/whats-new-in-facilio/january-2020",
          image: "jan.png",
          month: "January 2020",
          desc:
            "Faster commissioning, interactive kiosk, tenant feedback and more",
        },
      ],
      cardColor: {
        1: "#ffaacc",
        2: "#c1c5ff",
        3: "#bae4f0",
        4: "#fff9ee",
        5: "#E8E5FD",
        6: "#DEF4F6",
        7: "#F0F8FF",
        8: "rgb(252 202 32 / 0.2)",
        9: "#FDE7F3",
        10: "rgb(255 140 105 / 20%)",
        11: "rgb(124 205 124 / 40%)",
        12: "rgb(30 144 255 / 40%)"
      },
    };
  },
  methods: {
    openPopup() {
      document.getElementById("registerPopup").style.display = "block";
    },
  },
  components: {
    ProductUpdateCard,
    Navbar,
    Footer,
    whatsForm,
  },
  head() {
    return {
      title: "Facilio Product Updates",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Follow up on our product updates and trends in Facilio.",
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Facilio Product Updates",
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content: "Follow up on our product updates and trends in Facilio.",
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "https://facilio.com/images/og-images/product-update.png",
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/whats-new-in-facilio/",
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Facilio Product Updates",
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content: "Follow up on our product updates and trends in Facilio.",
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "https://facilio.com/images/og-images/product-update.png",
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/whats-new-in-facilio/",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/whats-new-in-facilio/",
        },
      ],
      script: [
        {
          src: "../../js/page.js",
        },
        {
          src: "../../js/waypoints.min.js",
        },
        {
          src: "../../js/includes.js",
        },
      ],
    };
  },
};
</script>
