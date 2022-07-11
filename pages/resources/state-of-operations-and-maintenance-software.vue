<template>
  <div class="productPage btn-shade fc-log-book-page fc-state-page">
    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <section class="fc-ebook-banner" style="background: #141b43 !important;">
        <div class="fc-ebook-img3">
          <img src="/images/state-om-side-img.svg" />
        </div>
        <!-- <div class="fc-log-diagnal-img2">
          <img src="/images/state-om-side-img2.svg" />
        </div> -->
        <div class="container fc-ebook-position">
          <div class="row fc-ebookwhole-wrap">
            <div class="col-md-5 col-xs-12">
              <div class="fc-ebook-wrap">
                <div
                  class="fc-ebook-card"
                  style="background: transparent !important;"
                >
                  <div
                    class="fc-ebook-thumbnail pT30"
                    style="background: transparent !important;"
                  >
                    <img src="/images/state-of-om-banner.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-7 col-xs-12 fc-right-wrap">
              <div class="fc-ebook-desc">
                <span class="fc-free-txt">FREE WHITEPAPER</span>
                <h3 class="fc-heading-max pT10">
                  State of Property Operations & Maintenance Software
                </h3>
                <p class="mB20">
                  A landmark study identifying key challenges and opportunities
                  in BAS operations and O&M applications to help portfolio
                  stakeholders be more proactive, efficient, and adaptive going
                  into 2021.
                </p>
                <a
                  class="fc-ebook-button-green text-uppercase"
                  href="#real-estate-book-download"
                >
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
                  The whitepaper reflects comprehensive research and analysis
                  into the current state of software, the barriers for
                  innovation, and tech adoption in O&M. It further uncovers new
                  possibilities with software and a viable O&M strategy that
                  puts real estate owners and operators on the pedestal and
                  enables portfolio-wide operational efficiency.
                </div>
                <h3>
                  Inside, you will find:
                </h3>

                <ul class="fc-left-ebook-list">
                  <li>
                    <span
                      >How to reduce O&M silos and close the gap in real estate
                      innovation</span
                    >
                  </li>
                  <li>
                    <span
                      >Practical ways to unlock the full potential of existing
                      automation and building systems using software</span
                    >
                  </li>
                  <li>
                    <span
                      >A framework and a pragmatic approach to smart buildings
                      for 2021 and beyond</span
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="fc-right-details">
                <stateOmSoftwareForm />
              </div>
            </div>
          </div>
          <div class="privacy-concern">
            <div class="privacy-content">
              We’re committed to your privacy. We use the information you
              provide to only send you relevant content, from which you can
              unsubscribe at any time. For more information, view our
              <span><a href="/privacy-policy">privacy policy</a></span
              >.
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import stateOmSoftwareForm from "../../components/form/state-om-software-form";

export default {
  components: {
    Navbar,
    Footer,
    stateOmSoftwareForm,
  },
  head() {
    return {
      title: "State of O&M Software | Facilio",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Learn how to remodel your O&M strategies today that can put you on the path to portfolio-wide efficiency in 2021 and the long term.",
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "State of O&M Software | Facilio",
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Learn how to remodel your O&M strategies today that can put you on the path to portfolio-wide efficiency in 2021 and the long term.",
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "/images/og2/state-of-o-and-m.png?reset=1",
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content:
            "https://facilio.com/resources/state-of-operations-and-maintenance-software?reset=1",
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "State of O&M Software | Facilio",
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Learn how to remodel your O&M strategies today that can put you on the path to portfolio-wide efficiency in 2021 and the long term.  ",
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "/images/og2/state-of-o-and-m.png?reset=1",
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content:
            "https://facilio.com/resources/state-of-operations-and-maintenance-software?reset=1",
        },
      ],
      link: [
        {
          rel: "canonical",
          href:
            "https://facilio.com/resources/state-of-operations-and-maintenance-software?reset=1",
        },
      ],
      script: [
        {
          src: "../../../js/page.js",
        },
        {
          src: "../../../js/waypoints.min.js",
        },
        {
          src: "../../../js/includes.js",
        },
        {
          src: "../../../js/stateOmConversion.js",
        },
      ],
    };
  },
};
</script>

<style scoped>
.mg-40 {
  margin-top: 40px;
}

.fc-left-details {
  max-width: 472px !important;
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
  .fc-state-page .fc-ebook-thumbnail img {
    max-width: 350px !important;
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
