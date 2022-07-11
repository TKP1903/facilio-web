<template>
  <div class="productPage btn-shade why-facilio-page">
    <div id="productPage"></div>

    <div class="myPage" id="myPage">
      <Navbar />
      <!--case-study-hero-banner-->
      <div class="mask"></div>

      <!----guide-banner-->
      <div class="facilio-guide-banner">
        <div class="container">
          <div class="guide-search">
            <form class="guide-site-search">
              <input
                class="guide-site-search__field live-search-box"
                type="text"
                placeholder="Ask me. I’m here to help"
                autocomplete="off"
              />
            </form>
          </div>
        </div>
      </div>
      <!----guide-banner-->

      <!--guide-display-section-->
      <div class="guide-display">
        <div class="container">
          <div class="guide-heading">
            <h2>Your First Stop for Optimising Facilities</h2>
          </div>

          <div class="row guide-card-desc live-search-list">


      <FaqCard  v-for="(item) in FaqCard" v-bind:key="item.link" v-bind:link="item.link"
              v-bind:heading="item.heading" v-bind:description="item.description" v-bind:colorClass="item.colorClass" v-bind:cta_text="item.cta_text" v-bind:banner_img="item.banner_img"/>

          </div>
        </div>
      </div>
    </div>
  <Footer />

  </div>
</template>

<script>
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FaqCard from "../../components/FaqCard";

export default {
  components: {
    Navbar,Footer,
    FaqCard
  },
    data() {
      return {
        FaqCard: [{
            link: "/why-facilio/knowledge-base/real-time-facilities-optimisation",
            heading:"Real-time Facilities Optimisation",
            description:" Learn the smartest way to manage your facilities",
            cta_text: "Get Smarter",
            colorClass:"start-violet",
            banner_img: "banner_image_1.jpg"
          },
          {
            link: "/why-facilio/knowledge-base/iot-enabled-bas-integration",
            heading:" IoT-enabled Integration with BAS",
            description:"See how you can leverage BAS data to optimise your facilities",
            cta_text: "Go real-time",
             colorClass:"start-gray",
            banner_img: "banner-2.jpg"
          },
            {
            link: "/why-facilio/knowledge-base/portfolio-management",
            heading:"Portfolio Management",
            description:"Still stuck with silos? Centrally manage your entire",
            cta_text: "Empower your Teams",
             colorClass:"start-green",
            banner_img: "banner-3.jpg"
          },
              {
            link: "/why-facilio/knowledge-base/everyday-sustainability",
            heading:"Everyday Sustainability",
            description:"Optimise on energy by tying everyday operations to sustainability savings",
            cta_text: "Save energy everyday",
             colorClass:"start-purple",
            banner_img: "banner-4.jpg"
          },
                    {
            link: "/why-facilio/knowledge-base/onboarding-and-migration",
            heading:"Onboarding and Migration",
            description:"   Learn how to onboard your building assets + data and manage in real time",
            cta_text:"Get Started now",
             colorClass:"start-cyan",
            banner_img: "banner-5.jpg"
          },
           {
            link: "/why-facilio/knowledge-base/partner-with-facilio",
            heading:"Partner with Facilio",
            description:" See why you must partner with us",
            cta_text:"Why Facilio",
             colorClass:"start-rose",
            banner_img: "banner-6.jpg"
          }
        ],
      };
    },
  mounted: function() {
    jQuery(document).ready(function($) {
      $(".live-search-list .guide").each(function() {
        $(this).attr(
          "data-search-term",
          $(this)
            .text()
            .toLowerCase()
        );
      });

      $(".live-search-box").on("keyup", function() {
        var searchTerm = $(this)
          .val()
          .toLowerCase();

        $(".live-search-list .guide").each(function() {
          if (
            $(this).filter("[data-search-term *= " + searchTerm + "]").length >
              0 ||
            searchTerm.length < 1
          ) {
            $(this).show();
          } else {
            $(this).hide();
          }
        });
      });
    });
    $(document).ready(function() {
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
          $(".guide-logo").addClass("guide-logo-violet");
        } else {
          $(".guide-logo").removeClass("guide-logo-violet");
        }
      });
    });
    $(document).ready(function() {
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
          $(".white-color").css("color", "transparent");
        } else {
          $(".white-color").css("color", "#fff");
        }
      });
    });
    $(".carousel").carousel({
      interval: 1000
    });
    $(window).on("scroll", function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 50) {
        $("body").addClass("down");
      } else {
        $("body").removeClass("down");
      }
    });
    $(document).ready(function() {
      $(".nav-tabs a").click(function(e) {
        $(this).tab("show");
        e.preventDefault();
        $(this)
          .siblings()
          .removeClass("active")
          .end()
          .addClass("active");
      });
    });
    $(".carousel").carousel({
      interval: 500
    });
  },

  head() {
    return {
      title: "Facilio Guide | Facilio",
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
          content: "Is complex, standalone and expensive facilities management software pulling down your team efficiency? Switch to modern mobile-first facilities experience now with Facilio."
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "/images/og-images/break-free-from-legacy-cafm.png"
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/why-facilio/"
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
          content: "Is complex, standalone and expensive facilities management software pulling down your team efficiency? Switch to modern mobile-first facilities experience now with Facilio."
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "/images/og-images/break-free-from-legacy-cafm.png"
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/why-facilio/"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/why-facilio/"
        }
      ],
      script: [
        { src: "../../js/page.js" },
        { src: "../../js/includes.js" },
        { src: "../../js/waypoints.min.js" }
      ]
    };
  }
};
</script>

<style>
.fc-past-table tr:nth-child(even) {
  background-color: #f8f9fe;
}
.fc-past-table tr {
  border: solid 0.9px #e6ecf3;
}
.wistia_responsive_wrapper {
  height: 300px !important;
}
.nav > li > a:hover {
  color: #ff3185;
}
.events-podcast-card {
  max-width: 350px;
  height: 300px;
  background: linear-gradient(-45deg, #bebebe, #7a7a7a, #e6e6e6, #cef3ea);
  background-size: 400% 400%;
  -webkit-animation: gradientBG 10s ease infinite;
  animation: gradientBG 10s ease infinite;
}
@-webkit-keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@media screen and (max-width: 500px) {
  .nav > li > a,
  .nav > li > a:focus {
    font-size: 15px !important;
  }
  .fc-tab-switch > li > a,
  .fc-tab-switch > li > a.active {
    padding: 2px 10px !important;
  }
  .fc-tab-switch > li.active a::after {
    top: 40px !important;
  }
}

/* The Modal (background) */
.why-facilio-page .modal {
  display: none;
  position: fixed;
  z-index: 10;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #000000c7;
}

/* Modal Content */
.why-facilio-page .modal-content {
  position: relative;
  background-color: transparent;
  margin: auto;
  padding: 0;
  width: 100%;
  box-shadow: none;
  max-width: 1300px;
}

/* The Close Button */
.close {
  color: #ffffff !important;
  position: absolute;
  top: 50px;
  right: 60px;
  font-size: 50px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
}
.nav-tabs {
  border-bottom: none !important;
}
.cursor {
  cursor: pointer;
}
.modal-backdrop {
  z-index: 0 !important;
  background: transparent !important;
}
</style>
