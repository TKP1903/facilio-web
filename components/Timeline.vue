<template>
  <!-- timeline block start -->
  <section class="timeline mobile-pad-20">
    <ul>
      <TimeLineItem
        v-for="item in timeline"
        v-bind:key="item.text"
        v-bind:timelineStyle="item.timelineStyle"
        v-bind:text="item.text"
         v-bind:text2="item.text2"
         v-bind:text3="item.text3"
          v-bind:text4="item.text4"
        v-bind:timestamp="item.timestamp"
      />
    </ul>
  </section>
  <!-- timeline block end -->
</template>

<script>
import TimeLineItem from "./TimeLineItem";

export default {
  mounted: function() {
    (function() {
      "use strict";

      var items = document.querySelectorAll(".timeline li");

      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
          if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
          }
        }
      }

      window.addEventListener("load", callbackFunc);
      window.addEventListener("resize", callbackFunc);
      window.addEventListener("scroll", callbackFunc);
    })();
  },

  data() {
    return {
      timeline: [
        {
          timestamp: "May 2018",
          text: "Optima partners with Facilio."
        },
        {
          timelineStyle: "text-right mobile-right-pad",
          timestamp: "May 2018",
          text: "Optima presents Facilio+Optima solutions to clients across the region"
        },
        {
          timelineStyle: "mobile-right-pad",
          timestamp: "May 2018",
          text: "Facilio+Optima submit tender for one of world’s biggest airlines"
        },
        {
          timelineStyle: "text-right mobile-right-pad",
          timestamp: "June 2018",
          text: "Facilio+Optima selected over legacy BMS providers"
        },
        {
          timelineStyle: "mobile-right-pad",
          timestamp: "June 2018",
          text: "Facilio+Optima operational in 9 buildings within 1 month"
        },
        {
          timelineStyle: "text-right mobile-right-pad",
          timestamp: "July 2018",
          text: "Client extends Facilio+Optima solutions to an additional 15 buildings"
        },
        {
          timelineStyle: "mobile-right-pad",
          timestamp: "August 2018",
          text: "Optima Solutions wins more business from client after Facilio is deployed, including",
          text2: " — BMS Retrofits  ",
          text3: "— Light Automation ",
          text4:"— Central NOC room monitoring"
        },
        {
          timelineStyle: "text-right mobile-right-pad",
          timestamp: "August 2018",
          text: "Facilio becomes the gateway for additional business across the region, including a 50+ building organization and one of the largest construction companies in UAE"
        }
      ]
    };
  },
  components: {
    TimeLineItem
  }
};
</script>
