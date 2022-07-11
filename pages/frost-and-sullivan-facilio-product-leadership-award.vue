<template>
  <div class="productPage btn-shade fc-log-book-page fc-state-page">
    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
     
      <section class="fc-ebook-detail" id="real-estate-book-download">
        <div class="container" style="margin-top:75px">
          <div class="row">
            <div class="col-md-7 fc-border-ebook-right" style="border-right:none;">
              <div class="fc-left-details" style="max-width:670px !important;">
                <div style="display:flex;align-items: center;">
               <img src="/images/Group44.png" style="max-width:100px;"> <h1 class="h1-scope" style="margin-left: 25px;font-size: 33px;line-height: 1.3;font-family:ProximaNovaBold;color:#1d186c;">Frost & Sullivan 2021 Global IoT <br/>Solution for Building Operations </h1>
               </div> <div class="fc-para-heading-log" style="max-width: 600px;padding-bottom: 0;">
                In the most recent evaluation by Frost & Sullivan for Excellence in Best Practices for the Building Operations industry, see how Facilio customers align O&M teams to optimize cost, improve productivity, and deliver best customer experiences across their portfolio. 
                </div>
               <div class="fc-para-heading-log" style="max-width: 600px;"> “A huge differentiator for Facilio is the depth of alignment it creates between people, processes, automation systems, and business software across multiple buildings into a single pane of glass software, and in real-time.” </div>
                <h3 style="color:#ff3184;margin-bottom:0;">
                  Dennis Marcell Victor
                </h3>
                <p class="fc-para-heading-log" style="padding:0px">
                Industry Analyst—Energy & Environment<br/>
                  Frost & Sullivan 
                  </p>
              </div>
            </div>
            <div class="col-md-5">
              <div class="fc-right-details" style="border: 2.5px solid rgba(29, 24, 108, 0.52);border-radius: 12px;padding:15px 0px;">
                <h2 class="form-head">Align your O&M teams with this best practices study</h2>
                <stateOmSoftwareForm />
              </div>
            </div>
          </div>
         
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import stateOmSoftwareForm from "../components/form/fs-award-form";

export default {
  components: {
    Navbar,
    Footer,
    stateOmSoftwareForm,
  },
  head() {
    return {
      title: "Facilio honored with Global Product Leadership Award | Facilio",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "In the most recent evaluation of companies for recognition of Best Practices, Frost and Sullivan awards Facilio as Product Leader in Global IoT Soluton for Building Operations and maintenance Industry",
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "State of O&M Facilio honored with Global Product Leadership Award | Facilio",
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "In the most recent evaluation of companies for recognition of Best Practices, Frost and Sullivan awards Facilio as Product Leader in Global IoT Soluton for Building Operations and maintenance Industry",
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "",
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content:
            "https://facilio.com/frost-and-sullivan-facilio-product-leadership-award",
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Facilio honored with Global Product Leadership Award | Facilio",
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "In the most recent evaluation of companies for recognition of Best Practices, Frost and Sullivan awards Facilio as Product Leader in Global IoT Soluton for Building Operations and maintenance Industry",
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "",
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content:
            "https://facilio.com/frost-and-sullivan-facilio-product-leadership-award",
        },
      ],
      link: [
        {
          rel: "canonical",
          href:
            "https://facilio.com/frost-and-sullivan-facilio-product-leadership-award",
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
@media screen and (max-width:600px) {
  .h1-scope {
  font-size: 20px    !important;
}
.fserv-container {
    padding: 0px 15px !important;
}
 .form-head {
    font-size: 19px !important;
  }
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
.form-head {
  padding: 0px 25px;
    font-family: 'ProximaNovaSemibold';
    font-size: 26px;
    line-height:1.4;
}
.fserv-form-description {
  display: none  !important;
}
.privacy-content {
  color: grey;
  width: 65%;
  margin: 0px auto;
  font-style: italic;
  text-align: center;
}
</style>
