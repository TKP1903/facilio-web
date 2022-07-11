<template>
  <div class="productPage btn-shade">
    <div id="productPage"></div>

    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>

      <div class="mask"></div>

      <section class="fc-contact-sec">
        <div class="container fc-contact-wrap">
          <div class="row">
            <div class="col-md-6">
              <div class="fc-contact-left-top">
                <h3>Contact Facilio</h3>
                <p>
                  Got a question? Our teams are here to help.
                  Simply fill out the form, and we’ll be in touch as soon as possible.
                </p>
              </div>

              <div class="fc-contact-left-bottom">
                <h4>
                  Contact Us
                </h4>

                <div class="row flex-middle2 flex-wrap">
                  
                  <div class="col-md-6 pT20">
                    <div class="fc-reach-head text-uppercase">UK and Europe</div>
                    <div class="fc-footer-content font-medium fc-font-semibold f16 fc-pink-color16">
                      <a href="https://www.linkedin.com/in/shaun-taylor-04181522/" class="fc-pink-color16 pointer" target="_blank">Shaun Taylor</a>
                    </div>
                    <div class="fc-footer-content font-medium">
                      +44 (0)7943 722286
                    </div>
                    <div class="fc-footer-content font-medium">
                      shaun@facilio.com
                    </div>
                  </div>

                  <div class="col-md-6 mT40">
                    <div class="fc-reach-head text-uppercase">Middle East</div>
                    <div class="fc-footer-content font-medium fc-font-semibold f16 fc-pink-color16">
                      <a href="https://www.linkedin.com/in/dixit-h-pathak-b0269214/" class="fc-pink-color16 pointer" target="_blank">Dixit Pathak</a>
                    </div>
                    <div class="fc-footer-content font-medium">
                      +971 52 672 3538
                    </div>
                    <div class="fc-footer-content font-medium">
                      dpathak@facilio.com
                    </div>
                  </div>
                  <div class="col-md-6 mT40">
                    <div class="fc-reach-head text-uppercase">Eastern Canada & Eastern USA</div>
                    <div class="fc-footer-content font-medium fc-font-semibold f16 fc-pink-color16">
                       <a href="https://www.linkedin.com/in/tony-callis-b78443101/" class="fc-pink-color16 pointer" target="_blank">Tony Callis</a>
                    </div>
                    <div class="fc-footer-content font-medium">
                      804.307.5635
                    </div>
                    <div class="fc-footer-content font-medium">
                      tony@facilio.com
                    </div>
                  </div>
                  <div class="col-md-6 mT40">
                    <div class="fc-reach-head text-uppercase">Midwest USA & Western Canada</div>
                    <div class="fc-footer-content font-medium fc-font-semibold f16 fc-pink-color16">
                       <a href="https://www.linkedin.com/in/spencer-kehoe-15532821/" class="fc-pink-color16 pointer" target="_blank">Spencer Kehoe</a>
                    </div>
                    <div class="fc-footer-content font-medium">
                      715.529.0561
                    </div>
                    <div class="fc-footer-content font-medium">
                      spencer@facilio.com
                    </div>
                  </div>
                   <div class="col-md-6 mT40">
                    <div class="fc-reach-head text-uppercase">Southwest, Western USA & Mexico</div>
                    <div class="fc-footer-content font-medium fc-font-semibold f16 fc-pink-color16">
                       <a href="https://www.linkedin.com/in/richard-c-33076b6/" class="fc-pink-color16 pointer" target="_blank">Richard Crounse</a>
                    </div>
                    <div class="fc-footer-content font-medium">
                      713.299.7266
                    </div>
                    <div class="fc-footer-content font-medium">
                      richard@facilio.com
                    </div>
                  </div>
                </div>
              </div>
              <div class="fc-contact-left-bottom">
                <h4>Our Offices</h4>
                <div class="row">

                  <div class="col-md-6">
                    <div class="fc-reach-head text-uppercase">USA</div>
                    <div class="fc-footer-content">
                      510 5th Ave, 3rd Floor
                      <br />New York, NY 10036.
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="fc-reach-head text-uppercase">Dubai, UAE</div>
                    <div class="fc-footer-content">
                      606, Fortune Tower,Cluster-C,
                      <br />Jumeirah Lakes Towers,Dubai, UAE.
                    </div>
                  </div>
                  <div class="col-md-6 mT40">
                    <div class="fc-reach-head text-uppercase">India</div>
                    <div class="fc-footer-content fc-whitespace-normal">
                      Astoria Building, 2nd Floor, Manikam Lane,
                      Guindy Institutional Area, Guindy, Chennai,
                      <br />Tamilnadu, 600032.
                    </div>
                  </div>
                      <div class="col-md-6 mT40">
                    <div class="fc-reach-head text-uppercase">SINGAPORE</div>
                    <div class="fc-footer-content">
                      Facilio Pte Ltd
                      <br />20, Cecil Street,
                      <br /># 05-03 Plus
                      <br/>Singapore (049705)
                    </div>
                  </div>
                  <!-- <div class="col-md-6 mT40">
                    <div class="fc-reach-head text-uppercase">ITALY</div>
                    <div class="fc-footer-content">
                      Paduva
                    </div>
                  </div> -->
                </div>
                <p class="fc-partnership">
                  For general queries, including partnership opportunity, please email
                  <a href="mailto:getsmart@facilio.com">getsmart@facilio.com</a>
                </p>
                  <p class="fc-partnership" style="margin-top: 0 !important;">
                  For partnerships, know more information and contact us
                  <a href="https://facilio.com/partners">here</a>
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <img src="/images/contact-back.png" class="form-back-img" />
              <div class="form-column">
                <div class="get-in-touch">Get In Touch</div>
                <ContactForm />
                <div id="eventSuccessMsg" class="thangsmsg" style="padding-top: 50px;position: relative;top: 30%;">
                  <p>Thank you for signing up!</p>
                  <p>One of our representatives will contact you shortly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />

  </div>
</template>

<script>
  import ContactForm from "../components/ContactForm";
  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";



  export default {
    mounted: function () {

      //--google analytics

      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
          'gtm.start': new Date().getTime(),
          event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-MFHN2HR');

      //--google analytics

      function getEventDemo() {
        var fullName = document.getElementById("eventfullname").value;
        fullName = fullName.trim();
        var demoemail = document.getElementById("eventemail").value;
        var demonumber = document.getElementById("eventnumber").value;
        var website = document.domain;
        let first = "";
        let last = "";
        if (fullName !== "") {
          if (fullName.indexOf(" ") > 0) {
            first = fullName.substring(0, fullName.indexOf(" "));
            last = fullName.substring(fullName.indexOf(" ") + 1, fullName.length);
          } else {
            first = "";
            last = fullName;
          }
        } else {
          first = "Not";
          last = "specified";
        }

        if (demoemail === "" || demoemail.indexOf("@") === -1) {
          document.getElementById("demoemail").className =
            "form-control fc-input error";
          return false;
        }

        var lead_props = {
          first_name: first,
          last_name: last,
          email: demoemail,
          mobile_number: demonumber,
          medium: document.domain,
          lead_source_id: 2000516787
        };
        trackLead(lead_props);

        document.getElementById("EventForm").style.display = "none";
        document.getElementById("EventSuccessMsg").style.display = "block";
        return false;
      }

      function trackLead(lead) {
        var postData = {
          data: lead
        };
        var postUrl = location.protocol + "//api.facilio.com/api/tracklead";

        var xhr = window.XMLHttpRequest ?
          new XMLHttpRequest() :
          new ActiveXObject("Microsoft.XMLHTTP");
        xhr.open("POST", postUrl);
        xhr.onreadystatechange = function () {
          if (xhr.readyState > 3 && xhr.status == 200) {
            console.log(xhr.responseText);
          }
        };
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(postData));
        return xhr;
      }

      function checkCountry() {
        let url = location.protocol + "//freegeoip.net/json/";
        $.getJSON(url, function (data) {
          var ip = data.ip;
          var country_code = data.country_code;
          if (country_code === "AE") {
            window.location.href = location.protocol + "//facilio.ae";
          }
        });
      }
      var WebFormEvent = {
        afterInstall: function () {

          let url = location.protocol + "//geoip-db.com/json/";
          $.getJSON(url, function (data) {
            if (data && data.country_name) {
              WebForm.$('input[name="lead[country]"]').val(data.country_name);
            }
          });
        },
        afterSubmit: function (event, data, error) {
          console.log("After submit hook triggered.");
          console.log("Data => ", data);
          var dt = JSON.parse(data);
          var obj = dt.find(e => {
            return e.name == "lead[email]";
          });
          var email = "undefined";
          if (obj) {
            email = obj.value;
          }
          ga("send", {
            hitType: "event",
            eventCategory: "Form",
            eventAction: "contactus",
            eventLabel: email
          });
          if (error) {
            console.log("Error => ", error);
          }
        }
      };
    },
    components: {
      ContactForm,
      Navbar,
      Footer
    },
    head() {
      return {
        title: "Contact Sales | Facilio Demo",
        meta: [{
            hid: "decription",
            name: "description",
            content: "See how leading enterprises optimise 30million sq. ft of space using Facilio"
          },
          {
            hid: "fb-share-title",
            property: "og:title",
            content: "Contact Sales | Facilio Demo"
          },
          {
            hid: "fb-share-description",
            property: "og:description",
            content: "See how leading enterprises optimise 30million sq. ft of space using Facilio"
          },
          {
            hid: "fb-share-image",
            property: "og:image",
            content: "/images/og-images/contact.png"
          },
          {
            hid: "type",
            name: "og:type",
            content: "website"
          },
          {
            hid: "twitter-meta",
            name: "twitter:card",
            content: "summary_large_image"
          },
          {
            hid: "twitter-title",
            name: "twitter:title",
            content: "Contact Sales | Facilio Demo"
          },
          {
            hid: "twitter-description",
            name: "twitter:description",
            content: "See how leading enterprises optimise 30million sq. ft of space using Facilio"
          },
          {
            hid: "twitter-image",
            name: "twitter:image",
            content: "/images/og-images/contact.png"
          }
        ],
        link: [{
          rel: "canonical",
          href: "https://facilio.com/contact"
        }],
        script: [{
            src: "../js/page.js"
          },
          {
            src: "../js/waypoints.min.js"
          },
          {
            src: "../js/includes.js"
          }
          // { src: "js/form-validate.js", body: true }
        ]
      };
    }
  };
</script>

<style>
  .powered-by {
    display: none !important;
  }
  .fc-whitespace-normal{
    word-break: break-word;
    white-space: normal !important;
  }
  .fc-pink-color16{
    color: #ff0085 !important;
  }
</style>

<style scoped>
  ::v-deep .fserv-form {
    padding: 0px 30px 30px 30px !important;
  }
  .fc-reach-head{
    font-size: 16px !important;
  }
  .mT40 {
    margin-top: 20px!important;
}
</style>