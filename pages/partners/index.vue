<template>
  <div class="productPage btn-shade">
    <div id="productPage"></div>
    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <div class="mask"></div>

      <section>
        <div class="hero-container partners-herobg">
          <div class="partner-banner-content">
            <h1
              class="partner-heading"
              data-target="cbuser.fallback"
            >Scale New Heights. Win More Deals.</h1>
            <h1
              class="partner-heading"
              data-target="cbuser.msg"
              style="display: none;font-size: 28px;"
            >
              <span data-target="cbuser.org.name"></span> + FACILIO
              <br />SCALE
              NEW HEIGHTS. WIN MORE DEALS.
            </h1>

            <p class="partner-description partner-page-cntr partner-clr-white">
              Become a Facilio partner and help CREs transform their facilities
              experience. Our software suite helps
              <span
                data-target="cbuser.org.name"
              >your</span>
              customers enjoy superior building performance and improved profits
            </p>
            <div class="partner-cntr">
              <a href="#partner-form" class="partner-btn" id="partner-btn">BECOME A PARTNER</a>
            </div>
          </div>
        </div>
      </section>

      <!-- future sections start -->
      <div class="partner-feature-block container">
        <h2 class="primeHead text-center">
          LET’S WORK TOGETHER
          <span data-target="cbuser.firstName"></span>
        </h2>
        <p
          class="primeSubHead"
          style="text-align:center;"
        >Technology for continuous efficiency across portfolio</p>
        <!-- <div class="dots-wrap center-block clearfix" style="margin-top: 15px;">
        <div class="red-dot"></div>
        <div class="blue-dot"></div>
        </div>-->
        <p class="partner-decs2 webPartner-desc2 mPartner-desc2">
          From operations and maintenance, to sustainability management, we’ve
          built unified applications for central control and real-time
          interactions across multiple facilities. Buildings that use Facilio
          see:
        </p>
        <div class="partner-feature-row">
          <div class="partner-feature-col">
            <div class="partner-featur-icon">
              <img src="/images/smartphone1.svg" alt title style="width: 27px;height: 44px;" />
            </div>
            <h5 class="partner-feature-heading">Workforce Efficiency</h5>
            <p class="partner-feature-desc">
              Fully mobile work orders and smart
              <br />maintenance management
            </p>
          </div>
          <div class="partner-feature-col">
            <div class="partner-featur-icon">
              <img src="/images/pressure.svg" alt title style="width: 27px;height: 44px;" />
            </div>
            <h5 class="partner-feature-heading">Asset Efficiency</h5>
            <p class="partner-feature-desc">
              Real-time performance monitoring
              <br />with fault detection and diagnostics
            </p>
          </div>
          <div class="partner-feature-col">
            <div class="partner-featur-icon">
              <img src="/images/pie-chart.svg" alt title style="width: 27px;height: 44px;" />
            </div>
            <h5 class="partner-feature-heading">Energy Efficiency</h5>
            <p class="partner-feature-desc">
              Predictive energy analytics and
              <br />actionable insights across portfolio
            </p>
          </div>
        </div>
      </div>
      <!-- future sections end -->

      <!-- partner third section start -->
      <div class="partner-blue-bg">
        <p class="partner-p-txt">
          As a Facilio partner,
          <span data-target="cbuser.org.name">you</span> will access a new
          set of tech-enabled opportunities, take advantage of a fast-growing
          network, and build consistent recurring revenue.
        </p>
      </div>

      <!-- partner third section start -->
      <div class="partner-company-mobile container mobile-pad-30">
        <div class="row-block">
          <div class="left-block-mobile text-center">
            <img
              src="/images/solution.png"
              alt="Facilio solution partner"
              title="Facilio solution partner"
            />
          </div>
          <div class="right-block-mobile">
            <h2 class="primeHead text-left">Solution Partners</h2>
            <p class="partner-desc3">
              We’ve partnered with major facility service companies globally.
              Facility Service Providers, MEP Consultants, and System
              Integrators can leverage Facilio’s software as a service model to
              deliver end-to-end CRE solutions, enabling faster time to revenue.
            </p>
            <nuxt-link
              to="/partners/partner-directory"
              class="partner-btn"
              id="partner-btn"
            >Locate a Partner</nuxt-link>
          </div>
        </div>

        <div class="row-block">
          <div class="left-block-mobile mT40 text-center">
            <img
              src="/images/technology.png"
              alt="Facilio technology partner"
              title="Facilio technology partner"
            />
          </div>
          <div class="right-block-mobile">
            <h2 class="primeHead text">Technology Partners</h2>
            <p class="partner-desc3">
              Facilio works even stronger with existing systems, improving
              workforce, asset, and energy efficiency across portfolio.
              Integrate with Facilio to add differentiated value to your
              customer experience, with access to a unified suite of facilities
              and sustainability management software.
            </p>
            <nuxt-link
              to="/partners/partner-directory"
              class="partner-btn"
              id="partner-btn"
            >Locate a Partner</nuxt-link>
          </div>
        </div>
      </div>
      <!-- partner third section end -->

      <!-- partner third section start -->
      <div class="partner-company-block container">
        <div class="row-block" style="padding-bottom: 29rem;">
          <div class="left-block">
            <h2 class="primeHead text-left">Solution Partners</h2>
            <p class="partner-desc3">
              We’ve partnered with major facility service companies globally.
              Facility Service Providers, MEP Consultants, and System
              Integrators can leverage Facilio’s software as a service model to
              deliver end-to-end CRE solutions, enabling faster time to revenue.
            </p>
            <nuxt-link
              to="/partners/partner-directory"
              class="partner-btn"
              id="partner-btn"
            >Locate a Partner</nuxt-link>
          </div>
          <div class="right-block">
            <img src="/images/solution.png" alt title />
          </div>
        </div>
        <div class="row-block">
          <div class="left-block">
            <img src="/images/technology.png" alt title />
          </div>
          <div class="right-block mT40">
            <h2 class="primeHead text-left">Technology Partners</h2>
            <p class="partner-desc3">
              Facilio works even stronger with existing systems, improving
              workforce, asset, and energy efficiency across portfolio.
              Integrate with Facilio to add differentiated value to your
              customer experience, with access to a unified suite of facilities
              and sustainability management software.
            </p>
            <nuxt-link
              to="/partners/partner-directory"
              class="partner-btn"
              id="partner-btn"
            >Locate a Partner</nuxt-link>
          </div>
        </div>
      </div>

      <div class="form-wrap">
        <div class="fc-partner-form-heading">Become a Facilio Partner today</div>
        <div id="partner-form">
          <img src="/images/contact-back.png" class="partner-form-img" />
          <PartnerForm />
        </div>
      <Footer />

      </div>
    </div>
  </div>
</template>

<script>
import PartnerForm from "../../components/PartnerForm";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
export default {
  mounted: function() {
    // Bootstrap Carousel Function

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

      var xhr = window.XMLHttpRequest
        ? new XMLHttpRequest()
        : new ActiveXObject("Microsoft.XMLHTTP");
      xhr.open("POST", postUrl);
      xhr.onreadystatechange = function() {
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
      $.getJSON(url, function(data) {
        var ip = data.ip;
        var country_code = data.country_code;
        if (country_code === "AE") {
          window.location.href = location.protocol + "//facilio.ae";
        }
      });
    }
    var WebFormEvent = {
      afterInstall: function() {
        console.log("After hook.");
        let url = location.protocol + "//geoip-db.com/json/";
        $.getJSON(url, function(data) {
          if (data && data.country_name) {
            WebForm.$('input[name="lead[country]"]').val(data.country_name);
          }
        });
      },
      afterSubmit: function(event, data, error) {
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
    PartnerForm,
    Navbar, Footer
  },
  head() {
    return {
      title: "Facilio Partner Program",
      meta: [
        {
          hid: "decription",
          name: "description",
          content:
            "Facilio partners get results by helping CREs transform their facilities experience. Learn how you can build a consistent recurring revenue."
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Facilio Partner Program"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Facilio partners get results by helping CREs transform their facilities experience. Learn how you can build a consistent recurring revenue."
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
          content: "https://facilio.com/partners"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Facilio Partner Program"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Facilio partners get results by helping CREs transform their facilities experience. Learn how you can build a consistent recurring revenue."
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
          content: "https://facilio.com/partners"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/partners"
        }
      ],
           script: [
        { src: "../../../js/includes.js" }
      ]

    };
  }
};
</script>

<style></style>
