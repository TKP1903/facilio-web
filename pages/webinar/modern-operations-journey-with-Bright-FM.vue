<template>
  <div class="productPage btn-shade fc-meetup-page">
    <div id="productPage"></div>

    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>

      <div class="mask"></div>

      <div class="fc-case-study-hub" style="background: #312481;">
        <div class="container">
          <div class="fc-hub-content text-center" style="max-width:1100px;">
            <div class="fc-meetup-badge">Facilio Webinar</div>
            <h1 style="font-size:41px;">
              What do customer-centric FM services do differently: Learn from
              Bright’s O&M journey
            </h1>
            <p class="pB20 fc-yellow-txt">
              On Demand Webinar
            </p>
            <a @click="openPopup()" target="_blank" class="fc-cs-try-white"
              >Watch recording</a
            >
          </div>
        </div>
      </div>

      <div class="container fc-webinar-series">
        <h3>Winning in the new age of FM service delivery</h3>
        <div class="fc-meetup-page-content-con">
          <p>
            To thrive in the FM services industry, in this day and age, is
            easier said than done.
          </p>
          <p>
            There are brand new challenges with FMs taking the role of strategic
            partners in portfolio operations, shaping occupant wellness and
            sustainability programs.
          </p>
          <p>
            An already competitive environment, the stakes are even higher
            now—to not just deliver frictionless services but stand out with an
            adaptive data-first strategy.
          </p>
          <p>
            The important question is:<b>
              Is there a playbook to take the lead in this new-age of FM service
              delivery?</b
            >
          </p>
          <p>
            Gladly our webinar answers just that for modern real estate
            operators and FMs who are increasingly turning to innovation that
            aligns with customer-centric services.
          </p>

          <!-- sample -->
          <div class="text-center pT50 pB40">
            <a
              @click="openPopup()"
              style="border: 1px solid #48d0e0; color: #1c35af;"
              class="fc-cs-try-white"
              >Watch recording</a
            >
          </div>
        </div>
      </div>

      <!-- second -->
      <div class="container-speakers">
        <div class="container">
          <h3 class="primeHead text-center">Meet the Speakers</h3>
          <div class="fc-event-speacker-con row">
            <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6 text-center">
              <img
                src="/images/Balaji_BrightFM.jpg"
                class="fc-img-round"
                title="Balaji"
              />
              <div class="fc-workplace-subhead">
                Balaji Parthasarathy
              </div>
              <div class="fc-speacker-designation">
                Director-Operations, Bright Environment LLC.
              </div>
              <div
                class="w-feature-desc pT10 text-left"
                style="margin-left:30px;"
              >
                Global FM professional with over 28 years of experience in the
                field of Property Development, Facility Management and
                Construction Project Management, Balaji is the co-owner of
                Bright Environment LLC, a Dubai-based integrated FM Company with
                operations across U.A.E., Malaysia and India, A true evangelist
                in the FM industry, Balaji is passionate about leveraging
                innovation to deliver customer-centric services.
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
            <span class="pink-dot mR10"></span>Delivering customer-centric
            services with a flexible and fully integrated O&M approach
          </div>
          <div class="fc-learn-txt">
            <span class="pink-dot mR10"></span>What questions to ask when
            evaluating modern CMMS technologies
          </div>
          <div class="fc-learn-txt">
            <span class="pink-dot mR10"></span>Modern tech insights from Bright
            FM to improve ops visibility and control: automation, key KPIs, &
            stakeholder insights
          </div>
          <div class="text-center pT80 pB80">
            <a
              @click="openPopup()"
              style="border: 1px solid #48d0e0; color: #1c35af;"
              class="fc-cs-try-white"
              >Watch recording</a
            >
          </div>
        </div>

        <div
          class="fc-meetup-cus-logo"
          style="background:rgb(49, 36, 129);margin-bottom:10px"
        >
          <div class="pB50">
            <img src="/images/facilio-logo-white.svg" alt title width="200" />
          </div>
          <div class="pB50">
            <img
              src="/images/customer-logo/Bright%20FM%20Logo.png"
              alt
              title
              width="210"
            />
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
        "What do customer-centric FM services do differently | Bright FM Journey",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Learn modern tech insights from Bright FM to power-up your operations and maintenance in the new-age of service delivery.",
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content:
            "What do customer-centric FM services do differently | Bright FM Journey",
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Learn modern tech insights from Bright FM to power-up your operations and maintenance in the new-age of service delivery.",
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "https://facilio.com/images/og-images/webinar-brightenv.png",
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content:
            "https://facilio.com/webinar/modern-operations-journey-with-Bright-FM",
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
            "What do customer-centric FM services do differently | Bright FM Journey",
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Learn modern tech insights from Bright FM to power-up your operations and maintenance in the new-age of service delivery.",
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "https://facilio.com/images/og-images/webinar-brightenv.png",
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content:
            "https://facilio.com/webinar/modern-operations-journey-with-Bright-FM",
        },
      ],
      link: [
        {
          rel: "canonical",
          href:
            "https://facilio.com/webinar/modern-operations-journey-with-Bright-FM",
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

<style></style>
