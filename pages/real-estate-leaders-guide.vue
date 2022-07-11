<template>
  <div class="productPage btn-shade fc-log-book-page">
    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <section class="fc-ebook-banner">
        <div class="fc-log-diagnal-img">
          <img src="/images/fc-log-diagnal.svg" />
        </div>
        <div class="fc-log-diagnal-img2">
          <img src="/images/fc-log-diagnal2.svg" />
        </div>
        <div class="container fc-ebook-position">
          <div class="row fc-ebookwhole-wrap">
            <div class="col-md-5 col-xs-12">
              <div class="fc-ebook-wrap">
                <div class="fc-ebook-card" style="background: transparent !important;">
                  <div class="fc-ebook-thumbnail" style="background: transparent !important;">
                    <img src="/images/fc-logo-book.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-7 col-xs-12 fc-right-wrap">
              <div class="fc-ebook-desc">
                <span class="">FREE RESOURCE</span>
                <h3 class="fc-heading-max">The Property Operations Leader’s Guide for Today’s New Digital Normal.</h3>
                <p>
                  Get a curated roundup of the best strategies and real-world techniques from the brightest minds in the
                  real estate industry for operating properties with agility today.
                </p>
                <a class="fc-ebook-button-green text-uppercase" href="#real-estate-book-download">
                  Download Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="mg-40"></div>
      </section>
      <section class="fc-ebook-detail" id="real-estate-book-download">
        <div class="container">
          <div class="row">
            <div class="col-md-6 fc-border-ebook-right">
              <div class="fc-left-details">
                <div class="fc-para-heading-log">
                  This guide uncovers what top real estate owners, operators, facility management service providers are
                  doing today to make informed data-driven operational decisions and emerge more resilient on the other
                  side. These key themes are top of mind:
                </div>
                <h3>
                  Inside, you will find:
                </h3>

                <ul class="fc-left-ebook-list">
                  <li>
                    <span>How to reopen and restart operations</span>
                  </li>
                  <li>
                    <span>How to retool and retrain to thrive in the new reality</span>
                  </li>
                  <li>
                    <span>How to rebuild to emerge as a future leader</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="fc-right-details">
                <contactForm />
              </div>
            </div>
          </div>
          <div class="privacy-concern">
            <div class="privacy-content">
              We’re committed to your privacy. We use the information you provide to only send you relevant content,
              from which you can unsubscribe at any time. For more information, view our <span><a
                  href="/privacy-policy">privacy policy</a></span>.
            </div>
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
  import contactForm from "../components/form/real-estate-form";


  export default {
    components: {
      Navbar,
      Footer,
      contactForm
    },
    head() {
      return {
        title: "The Property Operations Leader’s Guide | Facilio",
        meta: [{
            hid: "description",
            name: "description",
            content: "Know how global RE leaders are navigating this complex, unusual journey to uncover new ideas and what steps are they taking to become clear winners in the future."
          },
          {
            hid: "fb-share-title",
            property: "og:title",
            content: "The Property Operations Leader’s Guide | Facilio"
          },
          {
            hid: "fb-share-description",
            property: "og:description",
            content: "Know how global RE leaders are navigating this complex, unusual journey to uncover new ideas and what steps are they taking to become clear winners in the future."
          },
          {
            hid: "fb-share-image",
            property: "og:image",
            content: "https://facilio.com/images/og-images/og-real-estate.png"
          },
          {
            hid: "fb-share-url",
            property: "og:url",
            content: "https://facilio.com/real-estate-leaders-guide/"
          },
          {
            hid: "twitter-meta",
            name: "twitter:card",
            content: "summary_large_image"
          },
          {
            hid: "twitter-title",
            name: "twitter:title",
            content: "The Property Operations Leader’s Guide | Facilio"
          },
          {
            hid: "twitter-description",
            name: "twitter:description",
            content: "Know how global RE leaders are navigating this complex, unusual journey to uncover new ideas and what steps are they taking to become clear winners in the future."
          },
          {
            hid: "twitter-image",
            name: "twitter:image",
            content: "https://facilio.com/images/og-images/og-real-estate.png"
          },
          {
            hid: "twitter-url",
            name: "twitter:url",
            content: "https://facilio.com/real-estate-leaders-guide/"
          }
        ],
        link: [{
          rel: "canonical",
          href: "https://facilio.com/real-estate-leaders-guide/"
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

<style scoped>
  .mg-40 {
    margin-top: 40px;
  }

  .fc-left-details {
    max-width: 472px !important;
  }

  .fc-ebook-desc span {
    color: #ffffff !important;
  }

  .fc-ebook-thumbnail {
    background: #322893 !important;
  }

  .fc-ebook-card {
    padding: 0 !important;
    box-shadow: none !important;

  }

  .fc-ebook-detail {
    padding: 100px 0px 0px 0px !important;
  }

  .fc-ebook-desc h3,
  .fc-ebook-desc p {
    color: #ffffff !important;
  }

  .fc-ebook-button {
    background-color: #ec4082 !important;
  }

  .fc-ebook-desc {
    padding-top: 136px !important;
  }

  @media only screen and (min-width: 600px) {
    .fc-ebook-thumbnail img {
      max-width: 400px !important;
    }

    .fc-ebook-desc p {
      max-width: 550px !important;
    }

    .fc-ebook-desc h3 {
      font-size: 42px !important;
    }

    .fc-ebook-desc p {
      font-size: 20px !important;
      line-height: 30px !important;
      font-family: "ProximaNovaLtLight" !important;
    }
  }
</style>
<style>
  .privacy-concern {
    padding: 40px;
    margin-top: 30px;
    text-align: center;
  }

  .privacy-content {
    color: grey;
    width: 65%;
    margin: 0px auto;
    font-style: italic;
    text-align: center;
  }
</style>