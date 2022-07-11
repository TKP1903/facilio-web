<template>
  <div class="productPage btn-shade">
    <div class="mask"></div>
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
          <h1 class="thankyou-txt-h1">Coming Soon</h1>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default {
  head() {
    return {
      title: "Coming Soon  | Facilio",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "coming soon | Facilio."
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "coming soon | Facilio"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content: "coming soon | Facilio"
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content:
            "https://s3-us-west-2.amazonaws.com/ws-facilio.com/assets/images/og-title.jpg"
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/coming-soon"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "coming soon | Facilio"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content: "coming soon | Facilio."
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content:
            "https://s3-us-west-2.amazonaws.com/ws-facilio.com/assets/images/og-title.jpg"
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/coming-soon"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/coming-soon"
        }
      ]
    };
  },
  components: {
    Navbar
  }
};
</script>
