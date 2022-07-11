<template>
  <div class="productPage btn-shade">
    <div class="mask"></div>
    <div id="productPage"></div>
    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
    </div>
    <section class="fc-webniar-top-sec">
      <div class="fc-webinar-profile-img">
        <img src="/images/webniar-header-people.svg" />
      </div>
      <div class="container fc-webinar-heaer-content">
        <h1>
          Facilio Webinars
        </h1>
        <p>
          Learn best practices, tips, tricks, and more from real estate leaders
          and property operations professionals across the world
        </p>
      </div>
    </section>
    <section class="fc-webinar-explore-sec">
      <div class="container">
        <div class="fc-webinar-subheading">
          Featured Webinar
        </div>
        <div class="fc-webinar-explore-video text-center">
          <!-- <a href="https://plus.cretech.com/product-demos/season:9/videos/vdd-july-facilio/" target="_blank">
          <img src="/images/events/cretech.png" style="min-width:100%">
          <div class="fc-webinar-video-heading">
            Virtual demo day- Facilio 
          </div>
          <div class="fc-webinar-video-desc pB0" style="font-size: 15px;">
            We’ve teamed up with CREtech in their latest Demo Day edition to discuss
            how a unified overlay software can help O&M teams overcome common efficiency roadblocks,
            remotely control systems, and gain a sense of portfolio performance in real-time.
          </div>
          </a> -->
  
        <script src="https://fast.wistia.com/embed/medias/s5zw101x05.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:51.04% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_s5zw101x05 videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/s5zw101x05/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>

                <div class="fc-webinar-video-heading">
Moving away from manual &amp; broken O&amp;M processes: Workflow automation with Facilio         </div>
        </div>
      </div>
    </section>
    <section class="ondemand-sec">
      <div class="container">
        <div class="fc-webinar-subheading">
          On-Demand Webinars
        </div>
        <div class="fc-webinar-content-con">
          <webinarList
            class="col-md-6 col-lg-6 col-sm-12"
            v-for="(webinar, index) in webinarList"
            :key="index"
            :heading="webinar.heading"
            :description="webinar.description"
            :videoLink="webinar.videoLink"
            :imageUrl="webinar.imageUrl"
            :link="webinar.link"
            :videoImage="webinar.videoImage"
            :wistiaClass="webinar.wistiaClass"
            
          >
          </webinarList>
        </div>
      </div>
      <Pagination />
    </section>

    <Footer />
  </div>
</template>

<script>
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Pagination from "../../components/webinar-pagination";
import webinarList from "../webinar/components/webinarListLoad";

export default {
  data() {
    return {
      webinarList: [
        {
          heading:
            "End of ‘stopgap’ software era: Reinventing CMMS for real estate game changers ",
          description:
            "Most O&M processes happen across various systems and software with data siloes and insight gaps as commonplace.",
          videoLink: "https://fast.wistia.com/embed/medias/33oy1l37r5.jsonp",
          imageUrl: "",
          link: "",
          videoImage: "//fast.wistia.com/embed/medias/33oy1l37r5/swatch",
          wistiaClass: "wistia_embed wistia_async_33oy1l37r5 videoFoam=true",
        },
        {
          heading: "Virtual demo day- Facilio",
          description:
             "We’ve teamed up with CREtech in their latest Demo Day edition to discuss how a unified overlay software can help O&M teams overcome common efficiency roadblocks,remotely control systems, and gain a sense of portfolio performance in real-time.",
          videoLink: "",
          imageUrl: "/images/events/cretech.png",
          link: "https://plus.cretech.com/product-demos/season:9/videos/vdd-july-facilio/",
          videoImage: "",
        },
       {
          heading: "NextGen smart office and corporate campuses (part 1)",
          description:
             "Case studies on some of the most progressive and successful examples of smart commercial real estate projects by asset type. For each asset class, the owner/developers, consultants, or integrators showcase significant buildings.",
          videoLink: "",
          imageUrl: "/images/events/realcom.png",
          link: "https://www.realcomm.com/webinars/837/best-practice-showcase-by-asset-class-nextgen-smart-office-and-corporate-campuses-part-i",
          videoImage: "",
        },
        {
          heading: "Proving the business case for building analytics",
          description:
             "This session will outline how building operators in the Campaign were encouraged to share information on their energy usage and cost savings and how that data was analyzed into a report from Lawrence Berkeley National Lab.",
          videoLink: "",
          imageUrl: "/images/events/vimeo.png",
          link: "https://vimeo.com/576779062",
          videoImage: "",
        },
       {
          heading: "What do customer-centric FM services do differently: Learn from Bright’s O&M journey",
          description:
            "Balaji Parthasarathy, Director of Operations at Bright Environment LLC shares an inside view into delivering and expanding compelling facility experiences. What are the modern O&M tech tactics to improve agility and operational visibility?",
          videoLink: "https://fast.wistia.com/embed/medias/jfympf8aeh.jsonp",
          imageUrl: "",
          link: "",
          videoImage: "https://fast.wistia.com/embed/medias/jfympf8aeh/swatch",
          wistiaClass: "wistia_async_jfympf8aeh",
        },
        {
          heading: "Unlocking the potential of connected buildings with IoT",
          description:
            "Property operators and service providers are increasingly turning to new synergies in existing building IoT ecosystems that can fast-track connected building use case deployments (in days versus months) - and this webinar aims to do just that.",
          videoLink: "https://fast.wistia.com/embed/medias/dkko3wqpvw.jsonp",
          imageUrl: "",
          link: "",
          videoImage: "https://fast.wistia.com/embed/medias/dkko3wqpvw/swatch",
          wistiaClass: "wistia_async_dkko3wqpvw",
        },
        {
          heading:
            "How data powers the future of building maintenance & optimization",
          description:
            "Global real estate portfolio owners and operators alike are increasingly turning to holistic efficiency-drivers that can contextually integrate workflows and provide seamless accessibility to enterprise-wide O&M insights - and this webinar aims to do just that.",
          videoLink: "https://fast.wistia.com/embed/medias/0qbvnpr6es.jsonp",
          imageUrl: "",
          link: "",
          videoImage: "https://fast.wistia.com/embed/medias/dkko3wqpvw/swatch",
          wistiaClass: "wistia_async_0qbvnpr6es",
        },
        {
          heading:
            "Improving energy efficiency in buildings: Digital retrofits as a force multiplier",
          description:
            "Real estate portfolio owners/operators and EsCO companies, across the globe, are increasingly turning to energy efficiency drivers that can scale and help them act their part in the major shift towards continuous sustainability - and this webinar aims to do just that.",
          videoLink: "https://fast.wistia.com/embed/medias/g2zbwt2tlz.jsonp",
          imageUrl: "",
          link: "",
          videoImage: "https://fast.wistia.com/embed/medias/g2zbwt2tlz/swatch",
          wistiaClass: "wistia_async_g2zbwt2tlz",
        },
        {
          heading: "Unlocking the potential of connected buildings with IoT",
          description:
            "Property operators and service providers are increasingly turning to new synergies in existing building IoT ecosystems that can fast-track connected building use case deployments (in days versus months) - and this webinar aims to do just that.",
          videoLink: "https://fast.wistia.com/embed/medias/dkko3wqpvw.jsonp",
          imageUrl: "",
          link: "",
          videoImage: "https://fast.wistia.com/embed/medias/dkko3wqpvw/swatch",
          wistiaClass: "wistia_async_dkko3wqpvw",
        },
        {
          heading:
            "Smart building showcase: IoT technologies for the built environment",
          description:
            "This session showcases technologies as well as IT/OT convergence strategies that allow building monitoring and controlling for operational efficiency, financial optimization, occupant experience and health and well-being.",
          videoLink: "",
          imageUrl: "/images/webinar-realcomm.png",
          link:
            "https://www.realcomm.com/webinars/803/smart-building-showcase-iot-technologies-for-the-built-environm",
          videoImage: "",
          wistiaClass: "",
        },
        {
          heading:
            "Shifting business models & a look at the next decade of real estate",
          description:
            "Tune in to hear from CRE power leaders on what comes next. What are the key takeaways from the past year? What fundamental shifts have changed how we think of our spaces? What can be done now to prevent the next big event?",
          videoLink: "",
          imageUrl: "/images/innovator.jpg",
          link:
            "https://innovator2020.commercialobserver.com/agenda/session/417460",
          videoImage: "",
          wistiaClass: "",
        },
        {
          heading: "Leading property operations through change with data",
          description:
            "The webinar brings you best practices, lessons, and inspirations from the best minds in the industry to help you make the most advantage of this transformational period.",
          videoLink: "https://fast.wistia.com/embed/medias/mcq3kxvm9l.jsonp",
          imageUrl: "",
          link: "",
          videoImage: "https://fast.wistia.com/embed/medias/mcq3kxvm9l/swatch",
          wistiaClass: "wistia_async_mcq3kxvm9l",
        },
        {
          heading:
            "Real Estate Industry is changing! See what experts have to say!",
          description:
            "The pandemic may lead to a changing real estate landscape in the future. And you may need to change your strategies. How do you prepare yourself for the future? How will the real estate industry look post-pandemic?",
          videoLink: "",
          imageUrl: "/images/webinar-assetoft.jpg",
          link: "https://www.assetsoft.biz/future-of-real-estate-webinar",
          videoImage: "",
        },
        {
          heading: "NYC mixed use repositioning",
          description:
            "How has the pandemic allowed New York City’s owners to expand creatively and make the renovations they would not have normally done under more ideal circumstances? How can owners and developers measure the financial viability of a repositioning project?",
          videoLink: "",
          imageUrl: "/images/webinar-nyc.jpg",
          link:
            "https://www.bisnow.com/webinar/new-york/nyc-mixed-use-repositioning-5148",
          videoImage: "",
        },
      ],
    };
  },
  head() {
    return {
      title: "Facilio Webinars",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Where real estate experts share their best practices. ",
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Where real estate experts share their best practices. ",
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content: "Where real estate experts share their best practices. ",
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "https://facilio.com/images/og-images/webinar.png",
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/webinar",
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Where real estate experts share their best practices.",
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content: "Where real estate experts share their best practices.",
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "https://facilio.com/images/og-images/webinar.png",
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/webinar",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/webinar",
        },
      ],
    };
  },
  components: {
    Navbar,
    Footer,
    Pagination,
    webinarList,
  },
};
</script>
<style>
.fc-webniar-top-sec {
  width: 100%;
  height: 426px;
  background: #5200aa;
  margin-top: 90px;
  overflow: hidden;
  position: relative;
  background-image: url("/images/webniar-header-bg.svg");
  background-repeat: no-repeat;
}
.fc-webinar-profile-img {
  position: absolute;
  inset: 0;
}
.fc-webinar-heaer-content h1 {
  font-family: "ProximaNovaBold";
  font-size: 70px;
  z-index: 400;
  color: #fff;
  padding-top: 160px;
}
.fc-webinar-heaer-content p {
  font-family: "ProximaNovaRgRegular";
  font-weight: 400;
  z-index: 400;
  color: #00d4fd;
  font-size: 21px;
  max-width: 600px;
}
.fc-webinar-explore-sec {
  padding: 40px 0 0;
  position: relative;
}
.fc-webinar-subheading {
  font-size: 25px;
  font-family: "ProximaNovaBold";
  color: #181b3b;
  position: relative;
}
.fc-webinar-subheading::after {
  content: "";
  width: 100%;
  height: 2px;
  background: #00d4fd;
  position: absolute;
  bottom: -4px;
  left: 0;
}
.fc-webinar-explore-video {
  margin-top: 40px;
  max-width: 850px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
}
.fc-webinar-video-heading {
  font-family: "ProximaNovaRgRegular";
  font-size: 30px;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 0.49px;
  color: #181b3b;
  margin-top: 20px;
  word-break: break-word;
}
.fc-webinar-video-desc {
  font-family: "ProximaNovaRgRegular";
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  word-break: break-all;
  letter-spacing: 0.49px;
  color: #181b3b;
  margin-top: 10px;
  word-break: break-word;
  padding-bottom: 60px;
}
.ondemand-sec {
  padding: 0 0 40px;
  position: relative;
}
.fc-webinar-content-con {
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.fc-webinar-video-title {
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
  letter-spacing: -0.05px;
  color: #181b3b;
}
.fc-webinar-video-desc {
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  letter-spacing: 0.07px;
  color: #181b3b;
}
.webinar-media {
  padding-left: 30px;
  padding-right: 30px;
}
@media screen and (max-width: 700px) {
  .fc-webniar-top-sec {
    height: 100%;
    padding-bottom: 50px;
    background-size: cover;
  }
}
@media screen and (max-width: 600px) {
  .fc-webinar-profile-img {
    display: none;
  }
  .fc-webniar-top-sec h1 {
    font-size: 40px;
    padding-top: 60px !important;
  }
}
</style>
