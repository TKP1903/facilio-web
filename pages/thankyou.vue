<template>
  <div class="productPage btn-shade">
    <!-- Google Tag Manager (noscript) -->
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-MPTPNHX"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      ></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div id="productPage"></div>

    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <section>
        <div class="privacy-hero-container text-center thankyou-hero-container">
          <div class>
            <img src="/images/thank-you.svg" width="250" height="250" />
          </div>
          <h1 class="thankyou-txt-h1">Thank you for reaching out.</h1>
          <div class="thankyou-txt-desc">
            Your time is important to us and our team will be in touch
            <br />as soon as possible
          </div>
          <div class="dots-wrap center-block mT20">
            <div class="red-dot"></div>
            <div class="blue-dot"></div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
  head() {
    return {
      title: "Thank you",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Our terms of service for users of Facilio Building O&M Suite and Facilio Sustainability Performance Suite.",
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "coming soon | Facilio",
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content: "coming soon | Facilio",
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content:
            "https://s3-us-west-2.amazonaws.com/ws-facilio.com/assets/images/og-title.jpg",
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/coming-soon",
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "coming soon | Facilio",
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content: "coming soon | Facilio.",
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content:
            "https://s3-us-west-2.amazonaws.com/ws-facilio.com/assets/images/og-title.jpg",
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/coming-soon",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/coming-soon",
        },
      ],
      script: [
        {
          src: "/js/thankyouConversion.js",
        },
      ],
    };
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>
