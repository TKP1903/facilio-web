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
            <li class="active-tab-release">
              <nuxt-link to="#">PRINT</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/newsroom/facilio-in-the-news">IN THE NEWS</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/newsroom/press-release">PRESS RELEASE</nuxt-link>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div class="news-section">
          <div class="media-content news-content-border news-print-container">
            <PrintItem
              v-for="(item, index) in print"
              v-bind:key="index"
              v-bind:image="item.image"
              v-bind:heading="item.heading"
              v-bind:description="item.description"
              v-bind:timestamp="item.timestamp"
              :id="item.image"
            />
          </div>
        </div>
      </section>
      <ImageZoomModel />
    <Footer />

    </div>
  </div>
</template>

<script>
import PrintItem from "../../components/PrintItem";
import ImageZoomModel from "../../components/ImageZoomModel";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
export default {
  data() {
    return {
      print: [
          {
          image: "iteration.png",
          heading: "Tomorrow's FM",
          description: 'The Next Iteration',
          timestamp: "Jan 2020",
        },
         {
          image: "enterprise-scale-software-platforms.png",
          heading: "CM Today",
          description: 'Need for Enterprise Scale Software Platforms',
          timestamp: "Dec 2019",
        },
            {
          image: "top-fm-suppliers-2019.png",
          heading: "Facilities Management Middle East",
          description: 'Top FM Suppliers 2019',
          timestamp: "Dec 2019",
        },
                {
          image: "modern-intutiveness.png",
          heading: "Climate Control Awards",
          description: 'Facilio recognized for "modern intutiveness of its product"',
          timestamp: "Dec 2019"
        },
          {
          image: "nivedhanov.png",
          heading: "Construction Business News",
          description: "Unsung Hero of ASU",
          timestamp: "Nov 2019"
        },
        {
          image: "prabhunov-2.png",
          heading: "ME Construction News",
          description: "Retail and Hospitality Construction Summit 2019",
          timestamp: "Nov 2019"
        },
        {
          image: "prabhunov.png",
          heading: "ME Construction News",
          description: "Technology driven sustainability in buildings",
          timestamp: "Nov 2019"
        },
        {
          image: "fmmeoct.jpeg",
          heading: "Facilities Management Middle East",
          description: "Top supplier of the Year",
          timestamp: "Nov 2019"
        },
        {
          image: "gulfoct.jpeg",
          heading: "Gulf News",
          description: "Dubai initiative to pioneer smart living as service.",
          timestamp: "Oct 2019"
        },
        {
          image: "fcai.jpeg",
          heading: "Construction Week",
          description: "Facilio: AI Driven Future",
          timestamp: "Oct 2019"
        },
        {
          image: "redifine.png",
          heading: "FM Today",
          description:
            "REDEFINING THE POST-CONSTRUCTION LIFECYCLE OF BUILDINGS",
          timestamp: "Aug 2019"
        },
        {
          image: "make-tech.PNG",
          heading: "FM Media Australia",
          description:
            "Make Technology Work for Built Environment Sustainability",
          timestamp: "June 2019"
        },
        {
          image: "journey.PNG",
          heading: "FM Media Australia",
          description: "Prabhu's Journey to beyond the Professional",
          timestamp: "June 2019"
        },
        {
          image: "clean-middle-east.png",
          heading: "Clean Middle East",
          description:
            "How technology can be the enabler of ‘delightful facilities experiences’",
          timestamp: "Apr 2019"
        },
        {
          image: "tomorrow-fm.png",
          heading: "Tomorrow's FM",
          description: "Adding a Premium",
          timestamp: "Apr 2019"
        },
        {
          image: "analytic-insight2.png",
          heading: "Analytics Insight",
          description: "The Most Valuable IOT Companies to Watch in 2019",
          timestamp: "Mar 2019"
        },
        {
          image: "TomorrowsFMArticle.png",
          heading: "Tomorrow's FM",
          description: "Facilio introduces a smarter way to manage facilities",
          timestamp: "Mar 2019"
        },
        {
          image: "gulftoday.png",
          heading: "Gulf Today",
          description:
            "Top industry leaders share best practices of tech--led transformation",
          timestamp: "Mar 2019"
        },
        {
          image: "esco-evoultion.png",
          heading: "Facilities Management Middle East",
          description: "The ESCO Evolution",
          timestamp: "Feb 2019"
        },
        {
          image: "TomorrowFM.png",
          heading: "Tomorrow's FM",
          description: "New Frontiers",
          timestamp: "Jan 2019"
        },
        {
          image: "fmme-power.png",
          heading: "Facilities Management Middle East",
          description: "Profile inside the fmME Power 50",
          timestamp: "Dec 2018"
        },
        {
          image: "unified.png",
          heading: "Climate Control M.E.",
          description: "Unified approach to facilities management",
          timestamp: "Dec 2018"
        },
        {
          image: "fm-today-nov.png",
          heading: "FM Today",
          description:
            "Rethinking the way facilities are managed with IoT and AI",
          timestamp: "Nov 2018"
        },
        {
          image: "khaleej-times.jpeg",
          heading: "Khaleej Times",
          description: "Where IoT and AI improve building efficiency",
          timestamp: "Oct 2018"
        },
        {
          image: "mep.jpg",
          heading: "MEP Middle East",
          description: "Techrupting Buildings",
          timestamp: "Oct 2018"
        },
        {
          image: "forbes.jpg",
          heading: "Forbes Middle East",
          description: "Innovative Technologies in Buildings",
          timestamp: "Sep 2018"
        },
        {
          image: "itp-india.jpg",
          heading: "Commercial Design",
          description: "The future of facilities management",
          timestamp: "Sep 2018"
        },
        {
          image: "fm-expo.jpg",
          heading: "Facilities Magazine M.E.",
          description: "Companies to watch out for at FM Expo",
          timestamp: "Sep 2018"
        },
        {
          image: "gulf-today.jpeg",
          heading: "Gulf Today Daily",
          description:
            "Saturday interview - Dubai’s smart city goals march ahead",
          timestamp: "Aug 2018"
        },
        {
          image: "mep-june.jpg",
          heading: "MEP Middle East",
          description: "MEP driving smart cities with the power of software",
          timestamp: "June 2018"
        },
        {
          image: "construction-architecture.png",
          heading: "Construction and Architecture",
          description: "Taking buildings from smart to smarter",
          timestamp: "May 2018"
        },
        {
          image: "construction.png",
          heading: "Construction Business Today",
          description:
            "By using our software owners can operate a portfolio of buildings centrally with the highest level of efficieny",
          timestamp: "May 2018"
        },
        {
          image: "sustainabilitst.jpg",
          heading: "The Sustainabilist",
          description:
            "Delivering sustainable sustainability by empowering buildings",
          timestamp: "May 2018"
        },
        {
          image: "gulf-news-weekly.jpeg",
          heading: "Property Weekly - Gulf News",
          description:
            "Sustainable buildings - are the spaces you live in healthy?",
          timestamp: "May 2018"
        },
        {
          image: "mep-may.jpeg",
          heading: "MEP Middle East",
          description:
            "Technology can be a disruptive force in countering MEP challenges",
          timestamp: "May 2018"
        },
        {
          image: "tr-mar.jpg",
          heading: "Technical Review",
          description: "Interview with Prabhu - buildings with IoT",
          timestamp: "March 2018"
        },
        {
          image: "fm-mag.jpg",
          heading: "Facilities Magazine M.E.",
          description:
            "Healthy building technology - how to prolong a building’s lifecycle",
          timestamp: "March 2018"
        },
        {
          image: "mag-feb.jpg",
          heading: "Facilities Magazine M.E..",
          description: "How to run FM operations on auto-pilot",
          timestamp: "March 2018"
        },
      ],
    };
  },
  components: {
    PrintItem,
    ImageZoomModel,
    Navbar, Footer
  },
  head() {
    return {
      title: "Facilio in Print Media",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            " Access Facilio's print media mentions and the latest stories. Media members can directly get in touch with us. We’d love to engage with you. "
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Facilio: print"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            " Access Facilio's print media mentions and the latest stories. Media members can directly get in touch with us. We’d love to engage with you. "
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
          content: "https://facilio.com/newsroom/print"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Facilio: print"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            " Access Facilio's print media mentions and the latest stories. Media members can directly get in touch with us. We’d love to engage with you. "
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
          content: "https://facilio.com/newsroom/print"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/newsroom/print"
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
.close {
  color: black !important;
}
</style>
