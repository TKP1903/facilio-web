<template>
  <div class="productPage fc-guide-banner btn-shade">
    <div id="productPage"></div>

    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>

      <!--case-study-hero-banner-->
      <div class="mask"></div>
      <!-- header -->
      <!--guide-breakcrumbs-->
      <div class="guide-breadcrumbs">
        <div class="container">
          <div class="guide-breadcrumbs_wrap">
            <ol class="guide-breadcrumbs">
              <li>
                <nuxt-link to="/why-facilio/">
                  <span>Home</span>
                  <svg class="guide-breadcrumbs__icon" viewBox="0 0 19 34.1">
                    <g>
                      <path
                        d="M19,17c0,0.5-0.2,1-0.6,1.4L3.4,33.5c-0.8,0.8-2,0.8-2.8,0c-0.8-0.8-0.8-2,0-2.8L14.2,17L0.6,3.4c-0.8-0.8-0.8-2,0-2.8  c0.8-0.8,2-0.8,2.8,0l15.1,15.1C18.8,16,19,16.5,19,17z"
                      />
                    </g>
                  </svg>
                </nuxt-link>
              </li>
              <li>
                <span>Portfolio Management</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <!--guide-breakcrumbs-->

      <!--guide-main-desc-->
      <div class="guide-main-desc">
        <div class="container">
          <div class="guide-sidebar col-md-4 hidden-xs hidden-sm" id="guide-sidebar">
            <nav class="navtabs guide-navtabs">
              <h3 class="navtabs_title">Need Support?</h3>
              <p class="navtabs-p">
                Can't find the answer you're looking for? Don't worry we're here
                to help!
              </p>
              <nuxt-link to="/get-started">
                <button class="guide-support-button guide-grey">CONTACT SUPPORT</button>
              </nuxt-link>
            </nav>
          </div>
          <div class="guide-content col-md-8">
            <span id="what-are-the-benefits-of-real-time-bas-integration"></span>
            <h1 class="guide-title">Portfolio Management</h1>
            <p>
              Still stuck with silos? Centrally manage your entire portfolio of
              buildings
            </p>
            <div class="guide-desc-container">
              <img class="guide-noresults" src="/images/icons/no-results.png" />
              <h5 class="noarticle">No articles in this category</h5>
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
      title: "Portfolio-Management | Facilio Guide",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Is complex, standalone and expensive facilities management software pulling down your team efficiency? Switch to modern mobile-first facilities experience now with Facilio."
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Facilio Guide | Facilio"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content: "facilio guide"
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "/images/og-images/break-free-from-legacy-cafm.png"
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content:
            "https://facilio.com/why-facilio/knowledge-base/portfolio-management"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Facilio Guide | Facilio"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content: "facilio guide"
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "/images/og-images/break-free-from-legacy-cafm.png"
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content:
            "https://facilio.com/why-facilio/knowledge-base/portfolio-management"
        }
      ],
      link: [
        {
          rel: "canonical",
          href:
            "https://facilio.com/why-facilio/knowledge-base/portfolio-management"
        }
      ],
      script: [
        { src: "../../../js/page.js" },
        { src: "../../../js/waypoints.min.js" },
        { src: "../../../js/includes.js" }
      ]
    };
  }
};
</script>

<style>
.clear:after {
  visibility: hidden;
  display: block;
  content: "";
  clear: both;
  height: 0;
}
.navbar-default {
  border-bottom: 1px solid #f2f2f2 !important;
}
</style>
