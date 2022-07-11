<template>
  <div class="productPage btn-shade">
    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <section class="fc-ebook-banner">
        <div class="container fc-ebook-position">
          <div class="row fc-ebookwhole-wrap">
            <div class="col-md-6 col-xs-12">
            
              <div class="fc-ebook-wrap">
                <div class="fc-ebook-card">
                  <div class="fc-ebook-thumbnail">
                    <img src="/images/hvac-doc-bg.png" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xs-12 fc-right-wrap">
              <div class="fc-ebook-desc">
                <span>FREE RESOURCE</span>
                <h3>Reopening checklist for HVAC operations in the new normal</h3>
                <p>
                Prepare your HVAC systems to operate in full compliance with recommended guidelines from ASHRAE and other professional associations.
                </p>
                <a class="fc-ebook-button" href="#hvac-checklist">
                  Download Now
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mg-40"></div>
      </section>
     <section class="fc-ebook-detail">
        <div class="container">
          <div class="row">
            <div class="col-md-6 fc-border-ebook-right">
              <div class="fc-left-details">
                <h3>
                  Inside, you will find:
                </h3>
                
                <ul class="fc-left-ebook-list">
                  <li>
                    <span>Assessment template to evaluate operational liability</span>
                  </li>
                  <li>
                    <span>Points to note on fresh air circulation</span>
                  </li>
                  <li>
                    <span>Schedules of air filtration cleaning</span>
                  </li>
                  <li>
                    <span>Temperature and humidity conditions check</span>
                  </li>
                   <li>
                    <span>How to make HVAC compliant for dynamic requests</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="fc-right-details">
                <img src="/images/hvac.png" alt="hvac-datasheet">
              </div>
            </div>
          </div>
          <div class="privacy-concern">
              <div class="privacy-content">
                   We’re committed to your privacy. We use the information you provide to only send you relevant content, from which you can unsubscribe at any time. For more information, view our <span><a href="/privacy-policy">privacy policy</a></span>.
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


export default {
  components: {
    Navbar, Footer
  },
  head() {
    return {
      title: "HVAC checklist for reopening commercial buildings",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "An actionable checklist that lets your property's HVAC systems comply with ASHRAE guidelines and transition into streamlined operations. Download for free."
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "HVAC checklist for reopening commercial buildings"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "An actionable checklist that lets your property's HVAC systems comply with ASHRAE guidelines and transition into streamlined operations. Download for free."
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "https://facilio.com/images/og-images/hvac-og.png"
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content:
            "https://facilio.com/ebooks/state-of-cre-operations-2020-report"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "HVAC checklist for reopening commercial buildings"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "An actionable checklist that lets your property's HVAC systems comply with ASHRAE guidelines and transition into streamlined operations. Download for free."
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "https://facilio.com/images/og-images/hvac-og.png"
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content:
            "https://facilio.com/ebooks/state-of-cre-operations-2020-report"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/ebooks/state-of-cre-operations-2020-report"
        }
      ],
      script: [
        { src: "../../js/page.js" },
        { src: "../../js/waypoints.min.js" },
        { src: "../../js/includes.js" }
      ]
    };
  }
};
</script>

<style scoped>
.mg-40{
    margin-top: 40px;
}
.fc-left-details {
    max-width: 472px !important;
}
.fc-ebook-banner {
    background-color: #322893 !important;
}
.fc-ebook-desc span {
    color: hsl(192, 80%, 63%) !important;
}
.fc-ebook-thumbnail {
    background: #322893 !important;
}
.fc-ebook-card {
    padding: 0 !important;
}
.fc-ebook-detail {
    padding: 200px 0px 0px 0px !important;
}
.fc-ebook-desc h3,.fc-ebook-desc p {
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

.fc-ebook-desc h3,.fc-ebook-desc p  {
        max-width: 500px !important;
}
.fc-ebook-desc h3{
    font-size: 42px !important;
}
.fc-ebook-desc p {
        font-size: 20px !important;
    line-height: 38px !important;
}
}
</style>
<style>
.privacy-concern{
    padding: 40px;
    margin-top: 30px;
    text-align: center;
}
.privacy-content{
    color: grey;
    width: 65%;
    margin: 0px auto;
    font-style: italic;
    text-align: center;
}
</style>