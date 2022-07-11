<template>
  <div class="events-page newspage btn-shade">
    <div id="productPage"></div>

    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <div class="mask"></div>

      <div class="container">
        <div class="position-relative mT100 infographic-container">
          <div class="row">
            <div class="infographic-content">
              <div class="facilio-infogrpahic-float facilio-abs-change" id="facilio-abs-change">
                <h1 class="infographic-heading">
                  Transparency at the Core of
                 Facility Operations
                </h1>
                <p class="pT20 infographic-desc">
                 Mounting evidence shows that centrally-connected operations hugely benefit enterprises with diverse real-estate portfolios. It solves efficiency that directly translates to improved bottom-line and superior experiences. Cost-centric rather than value-driven priorities have typically driven facilities management. However, with millennial customers demanding real-time, unified and connected services, agile and tech-driven differentiation is on the rise in the industry
                </p>
              </div>
            </div>
            <div class="infogrpahic-image-con pT50">
              <img
                src="/images/infographic/infographic1.jpg"
                alt="facilio-infographic"
                title="facilities-management-2019-infographic"
              />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  <Footer />

  </div>
</template>

<script>
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default {
  components: {
    Navbar, Footer
  },
  head() {
    return {
      title: "Real-time Facilities Management Infographic - Facilio",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Given the high expectations of the millennial workforce for quality experience, enterprises are realizing the need for portfolio-wide operational visibility. Facilio finds out why."
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Real-time Facilities Management Infographic - Facilio"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Given the high expectations of the millennial workforce for quality experience, enterprises are realizing the need for portfolio-wide operational visibility. Facilio finds out why."
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "https://facilio.com/images/infographic/infographic1.jpg"
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content:
            "https://facilio.com/resources/infographic/rise-of-real-time-facilities"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Real-time Facilities Management Infographic - Facilio"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Given the high expectations of the millennial workforce for quality experience, enterprises are realizing the need for portfolio-wide operational visibility. Facilio finds out why."
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "https://facilio.com/images/infographic/infographic1.jpg"
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content:
            "https://facilio.com/resources/infographic/rise-of-real-time-facilities"
        }
      ],
      link: [
        {
          rel: "canonical",
          href:
            "https://facilio.com/resources/infographic/rise-of-real-time-facilities"
        }
      ],
      script: [
        { src: "../../../js/page.js" },
        { src: "../../../js/waypoints.min.js" },
        { src: "../../../js/includes.js" },
        { src: "../../../js/position.js" }
      ]
    };
  }
};
</script>

<style>
#fc-header .navbar-default {
  background-color: #ffffff;
}
</style>
