<template>
  <div class="productPage btn-shade">
    <div id="productPage"></div>
    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <div class="mask"></div>

      <div class="news-hero">
        <div class="container">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 pL0 press-hero-left">
            <h1>Facilio Newsroom</h1>
            <p class="partner-description mT0 width-news">
              The latest and best stories from the world of real-time facilities
              optimisation.
            </p>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <img src="/images/newsroom/news-room.svg" alt title />
          </div>
        </div>
      </div>
      <section>
        <div class="press-tab-section">
          <ul>
            <li>
              <nuxt-link to="/newsroom/print">PRINT</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/newsroom/facilio-in-the-news">IN THE NEWS</nuxt-link>
            </li>
            <li class="active-tab-release">
              <nuxt-link to="#">PRESS RELEASE</nuxt-link>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div class="news-section mT50">
          <Press
            v-for="(item, index) in press"
            v-bind:key="index"
            v-bind:link="item.link"
            v-bind:description="item.description"
            v-bind:timestamp="item.timestamp"
          />
        </div>
      </section>
    <Footer />

    </div>
  </div>
</template>

<script>
import Press from "../../components/Press";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default {
  data() {
    return {
      press: [
        {
         link:"/newsroom/facilio-airmaster-nejavi-partner-to-accelerate-iot-transformation",
         description:"Facilio, Airmaster, and NEJAVI Announce Strategic Partnership to Accelerate IoT Digital Transformation in Property Operations",
        timestamp:"18th April 2022"
        },
         {
          link:"/newsroom/investa-leads-innovation-through-facilio",
          description:"Investa continues to lead through Innovation by choosing Facilio",
          timestamp:"16th March 2022"
         },
         {
          link:"/newsroom/series-b",
          description:"Facilio raises $35M Series B from Dragoneer & Brookfield to Transform Real Estate Operations with AI",
          timestamp:"22 February 2022"
         },
         {
          link:
            "/newsroom/facilio-earns-2021-frost-sullivan-product-leadership-award",
          description:
            "Facilio Earns 2021 Frost & Sullivan Product Leadership Award for Global IoT-based Property Operations Solution",
          timestamp: "17 January 2022"
        },
        {
          link:
            "/newsroom/connected-cmms-launch",
          description:
            "Facilio announces the launch of Connected CMMS, reimagines legacy software for game-changing property operations",
          timestamp: "17 November 2021"
        },
        {
          link:
            "/newsroom/facilio-evogy-partner-to-help-properties-enhance-operating-efficiency-boost-portfolio-performance",
          description:
            "Facilio & EU-based Evogy partner to help properties enhance operating efficiency & boost portfolio performance",
          timestamp: "27 January 2021"
        },
        {
          link:
            "/newsroom/morohub-joins-forces-with-facilio-to-boost-energy-saving-strategies",
          description:
            "Moro Hub joins forces with US-based Facilio to boost UAE's energy-saving strategies",
          timestamp: "13 December 2020"
        },
        {
          link:
            "/newsroom/facilio-belimo-join-forces-advance-iot-driven-connected-building-environments",
          description:
            "Facilio and Belimo sign a strategic partnership to Advance IoT-driven Connected Building Environments",
          timestamp: "24 November 2020"
        },
        {
          link:
            "/newsroom/uae-fm-service-providers-harness-technology-to-deliver-seamless-customer-exeperience-amid-pandemic",
          description:
            "UAE’s FM Service Providers Harness Technology to Deliver Seamless Customer Experiences Amid Pandemic",
          timestamp: "11 November 2020"
        },
        {
          link:
            "/newsroom/icd-brookfield-place-selects-facilio-deliver-connected-sustainable-built-environment",
          description:
            "ICD Brookfield Place Selects Facilio to Deliver on a Connected & Sustainable Built Environment",
          timestamp: "23 September 2020"
        },
        {
          link:
            "/newsroom/facilio-helps-quality-group-deliver-frictionless-customer-experience",
          description:
            "Facilio helps UAE’s Quality Group automate facility operations at scale and deliver a frictionless customer experience",
          timestamp: "21 July 2020"
        },
        {
          link:
            "/newsroom/rebuild-remote-operations-toolkit",
          description:
            "Facilio launches REbuild, a new remote operations toolkit, to help real estate owners safely restart property operations.",
          timestamp: "27 May 2020"
        },
          {
          link:
            "/newsroom/state-of-cre-operations-2020-report",
          description:
            "Facilio releases CRE 3.0 report on impact of data-driven building operations in 2020",
          timestamp: "12 Feb 2020"
        },
        {
          link:
            "/newsroom/facilio-challenging-status-quo-by-verdantix-markets-and-markets",
          description:
            "Facilio Inc. recognized as an innovation driven challenger in the 2019 IoT for Smart Buildings and IWMS categories by independent analyst firms",
          timestamp: "20 Nov 2019"
        },
        {
          link: "/newsroom/dewa-facilio-smart-iot-partnership-gitex-2019",
          description:
            "Facilio & Smart IoT sign strategic partnership with Digital X, a subsidiary of Digital DEWA, to launch smart living services in Dubai",
          timestamp: "12 Oct 2019"
        },
        {
          link: "/newsroom/future-connected-fm",
          description:
            "The future belongs to Connected FM says Facilio Inc., will demo its enterprise-wide O & M platform during FM Expo",
          timestamp: "12 Sep 2019"
        },
        {
          link: "/newsroom/series-a",
          description:
            "Facilio raises USD 6.4 million Series A funding led by Tiger Global and existing investor Accel",
          timestamp: "5th Dec 2018"
        },
        {
          link: "/newsroom/unifying-operation-at-fm-expo",
          description:
            "Facilio to showcase its IoT and AI-driven Facilities Optimization Suite at FM Expo Dubai",
          timestamp: "23 Sep 2018"
        }
      ]
    };
  },
  components: {
    Press,
    Navbar, Footer
  },
  head() {
    return {
      title: " Facilio - Press Releases",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Access our recent press releases. Facilio is a data-driven building operations and maintenance platform for real-estate portfolios."
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Facilio: press and release"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Access our recent press releases. Facilio is a data-driven building operations and maintenance platform for real-estate portfolios."
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
          content: "https://facilio.com/newsroom/press-release"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Facilio: press and release"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Access our recent press releases. Facilio is a data-driven building operations and maintenance platform for real-estate portfolios."
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
          content: "https://facilio.com/newsroom/press-release"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/newsroom/press-release"
        }
      ],
      script: [{ src: "../../js/includes.js" }]
    };
  }
};
</script>

<style>
#fc-header .navbar-default {
  background-color: #ffffff !important;
}
</style>
