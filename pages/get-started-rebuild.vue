<template>
  <div class="productPage btn-shade">
    <div id="productPage"></div>

    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <div class="mask"></div>
      <section>
        <div class="request-demo-container" style="margin-top:150px;">
          <h1 class="fc-started-head text-center" style="margin-bottom: 0;">
            Let’s REbuild Together
          </h1>
          <p class="fc-para-getStarted text-center">
            Talk to one of our consultants and find out how Facilio can be a resource to help you navigate through uncertain business conditions and improve your operating margin.
          </p>
        </div>
      </section>
      <section>
        <div class="request-demo-inner desktop-request-demo">
          <div class="container fc-contact-wrap">
          <div class="row">
            <div class="col-md-5">
              <div class="bg-steps">
                    <h2 class="steps-head">What next?</h2>
                    <p class="steps-text">1. Our solutions advisory team will get in touch with you within the next 24 hours.</p>
                    <p class="steps-text">2. Identify your immediate pain points to operate buildings cost-effectively.</p>
                    <p class="steps-text">3. Map your efficiency roadmap with a personalized demo of REbuild from Facilio.</p>
                  </div>
                  <div class="bg-testimonial">
              <div class="testimonial-logo-container">
                <img src="/images/customer-logo/new/pd7.png" />
              </div>
              <div class="bright-card-text">
                Facilio is a very powerful tool. We were able to quickly connect portfolio systems, set up a command center, and scale O&M services across properties effectively.
              </div>
              <div class="fc-testimonial-speaker-rebuild">
                    <div class="fc-tsnml-sp-icon">
                      <img src="/images/customer/paulo-darte.png" />
                    </div>
                    <div class="fc-tsnml-name">
                      Paulo D
                      <br />
                      <span>CEO</span>
                    </div>
                  </div>
                  </div>
                    <p class="fc-partnership-rebuild">
                  For general queries, including partnership opportunity, please
                  email
                  <a href="mailto:getsmart@facilio.com">getsmart@facilio.com</a>
                </p>
            </div>
            <div class="col-md-6 sm-fold">
            <img src="/images/contact-back.png" class="form-back-img" />
            <div class="form-column fixed-col">
              <RebuildForm />
              <div
                id="eventSuccessMsg"
                class="thangsmsg"
                style="padding-top: 50px;position: relative;top: 30%;"
              >
                <p>Thank you for signing up!</p>
                <p>One of our representatives will contact you shortly.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <div class="client-top pad-top">
        <div class="container ">
          <StaticClientCarousel />
               <div class="client-top hidden-normal">
                  <div class="container">
                     <ClientCarousel />
                  </div>
               </div>
        </div>
      </div>
    <Footer />

    </div>
  </div>
</template>

<script>
import RebuildForm from "../components/RebuildForm";
import ClientCarousel from "../components/Client-carousel";
import StaticClientCarousel from "../components/StaticClientCarousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default {
  mounted: function() {
      this.$nextTick(()=>{
    //---Begin client-carousel----//
    function explode(){
    $(function() {
      var $clientscroll = $("#customerlist");
      var clients = $clientscroll.children().length;
      var clientwidth = 2000;
      $clientscroll.css("width", clientwidth);
      var rotating = true;
      var clientspeed = 0;
      var seeclients = setInterval(rotateClients, clientspeed);

      $(document).on(
        {
          mouseenter: function() {
            rotating = false;
          },
          mouseleave: function() {
            rotating = true;
          }
        },
        "#customers"
      );

      function rotateClients() {
        if (rotating != false) {
          var $first = $("#customerlist li:first");
          $first.animate(
            {
              "margin-left": "-190px"
            },
            2500,
            "linear",
            function() {
              $first.remove().css({
                "margin-left": "0px"
              });
              $("#customerlist li:last").after($first);
            }
          );
        }
      }
    });

    //--End client carousel
    }
    setTimeout(explode, 1000);
})
    // Bootstrap Carousel Function
    $(".carousel").carousel({
      interval: 1200
    });
    $(function() {
      $("#scrlBotm").click(function() {
        $("html, body").animate(
          {
            scrollTop: $("#getAccess").offset().top
          },
          1200
        );
        return false;
      });
      $("#scrlTop").click(function() {
        $("html, body").animate(
          {
            scrollTop: $("#getAccess").offset().top
          },
          1500
        );
        return false;
      });
    });

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



    function showEnquiryForm() {
      var x = $(".demo a").offset();
      console.log("Top: " + x.top + " Left: ", x.left);
      console.log("offset", x);
      $("#enquireForm").css({
        left: x.left - 190 + "px"
      });
      $("#enquireForm").addClass("formSlideUp");
      $("#productPage").addClass("blind");
      $("#enquiryIcon").hide(100);
    }

    function hideEnquiryForm() {
      $("#EventForm")
        .find("input[type=text], input[type=email], input[type=number]")
        .val("");
      $("#enquireForm").removeClass("formSlideUp");
      $("#productPage").removeClass("blind");
      $("#enquiryIcon").show(100);
    }

    function showEventForm() {
      var x = $(".demo a").offset();
      $("#eventForm").addClass("evntSlideUp");
      $("#productPage").addClass("blind");
      $("#enquiryIcon").hide(100);
    }

    function hideEventForm() {
      $("#leadFormDemo")
        .find("input[type=text], input[type=email], input[type=number]")
        .val("");
      $("#eventForm").removeClass("evntSlideUp");
      $("#productPage").removeClass("blind");
      $("#enquiryIcon").show(100);
    }
    function onTypeEmail(email) {
      if (email.trim().length > 0) {
        document.getElementById("email").className = "form-control fc-input";
      }
    }

    function getEarlyAccess() {
      console.log("get early access called");
      var fullName = document.getElementById("fullname").value;
      fullName = fullName.trim();
      var email = document.getElementById("email").value;
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

      if (email === "" || email.indexOf("@") === -1) {
        document.getElementById("email").className =
          "formTextBox form-control fc-input error";
        return false;
      }

      var lead_props = {
        first_name: first,
        last_name: last,
        email: email,
        medium: document.domain,
        lead_source_id: 2000595656
      };
      trackLead(lead_props);
      document.getElementById("leadForm").style.display = "none";
      document.getElementById("successMsg1").style.display = "block";
      return false;
    }

    function getDemo() {
      var fullName = document.getElementById("demofullname").value;
      fullName = fullName.trim();
      var demoemail = document.getElementById("demoemail").value;
      var demonumber = document.getElementById("demonumber").value;
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
        lead_source_id: 2000485410
      };
      trackLead(lead_props);
      document.getElementById("leadFormDemo").style.display = "none";
      document.getElementById("successMsg").style.display = "block";
      return false;
    }

    function getEventDemo() {
      console.log("getEventDemo lead");

      var fullName = document.getElementById("formeventfullname").value;
      fullName = fullName.trim();
      var demoemail = document.getElementById("formeventemail").value;
      var demonumber = document.getElementById("formeventnumber").value;
      var country = document.getElementById("formeventcountry").value;
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
        country: country,
        lead_source_id: 2000595656
      };
      ga("send", {
        hitType: "event",
        eventCategory: "Form",
        eventAction: "contactus",
        eventLabel: demoemail
      });
      ga("send", "pageview", "/contactus.html?success");
      trackLead(lead_props, function() {
        document.getElementById("contactform").style.display = "none";
        document.getElementById("eventSuccessMsg").style.display = "block";
        // document.getElementById('EventBtn').value = "Registering..."
        // document.getElementById('EventBtn').disabled = true
        var axel = Math.random() + "";
        var a = axel * 10000000000000;
        // document.write('<iframe src="https://8864643.fls.doubleclick.net/activityi;src=8864643;type=invmedia;cat=apkttmq8;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
        // window.location="store/thankyou.html";
      });

      return false;
    }

    function attachListenerToFreshsales() {
      console.log("attachListenerToFreshsales");
      try {
        var submitbuttons = document.getElementsByClassName(
          "fserv-button-submit"
        );
        console.log(submitbuttons);
        for (var i = 0; i < submitbuttons.length; i++) {
          console.log(submitbuttons[i]);
          submitbuttons[i].addEventListener("click", function() {
            console.log("freshsalessubmitdone");
          });
          console.log("listener added" + i);
        }
        console.log("done");
      } catch (e) {
        console.log(e);
      }
    }

    function trackLead(lead, callback) {
      var postData = {
        data: lead
      };
      var postUrl = location.protocol + "//api.facilio.com/api/tracklead";
      var xhr = window.XMLHttpRequest
        ? new XMLHttpRequest()
        : new ActiveXObject("Microsoft.XMLHTTP");
      xhr.open("POST", postUrl);
      xhr.onreadystatechange = function() {
        if (xhr.readyState > 3 && xhr.status == 200) {
          console.log(xhr.responseText);
          if (typeof callback !== "undefined") {
            callback(xhr.responseText);
          }
        }
      };
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(postData));
      return xhr;
    }

    function checkCountry() {
      let url = location.protocol + "//freegeoip.net/json/";
      $.getJSON(url, function(data) {
        var ip = data.ip;
        var country_code = data.country_code;
        if (country_code === "AE") {
          window.location.href = location.protocol + "//facilio.ae";
        }
      });
    }

    attachListenerToFreshsales();

  },
  components: {
    RebuildForm,
    ClientCarousel,
    StaticClientCarousel,
    Navbar, Footer
  },
  head() {
    return {
      title: "Get Started | Facilio Demo",
      meta: [
        {
          hid: "decription",
          name: "description",
          content:
            "See how leading enterprises optimise 30million sq. ft of space using Facilio"
        },
        {
          hid: "bing-analytics-code",
          name: "msvalidate.01",
          content: "04773C7F48320BA0E105E62CC9A896C9"
        },
        {
          hid: "yandex-verification",
          content: "8c359a64feae0f89",
          name: "yandex-verification"
        },
        {
          hid: "schemaName",
          itemprop: "name",
          content: "Contact Sales | Facilio Demo"
        },
        {
          hid: "schemaDescription",
          itemprop: "description",
          content:
            "See how leading enterprises optimise 30million sq. ft of space using Facilio"
        },
        {
          hid: "schemaImage",
          itemprop: "image",
          content: "/images/og-images/contact.png"
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Contact Sales | Facilio Demo"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "See how leading enterprises optimise 30million sq. ft of space using Facilio"
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "/images/og-images/contact.png"
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
          content:
            "See how leading enterprises optimise 30million sq. ft of space using Facilio"
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "/images/og-images/contact.png"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/get-started"
        }
      ],
      script: [
        { src: "../../../js/includes.js" }
        // { src: "js/form-validate-getStarted.js", body: true }
      ]
    };
  }
};
</script>

<style>
.form-next-steps-column {
  padding-top:0 !important;
}
.fserv-form {
  margin: 30px auto auto !important;
}
.powered-by {
  display: none !important;
}

.bright-card-text{
    font-family:ProximaNovaRgRegular;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.49;
    color: #14132e;
}
.testimonial-logo-container {
    margin-left: -3%;
    margin-top: -20px;
}
.fc-testimonial-speaker-rebuild {
    margin-top: 15px;
    display: flex;
}
.testimonial-logo-container img{
    max-width: 200px;
    width: 100%;
}
@media screen and (max-width: 991px){
  .sm-fold{
      margin-top: 20px;
  }
}
</style>
<style scoped>
.pad-30{
  margin-top: 30px;
}
</style>