<template>
  <div class="homePage btn-shade">
    <div id="productPage"></div>

    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <!-- webinar-banner -->
      <section class="fc-video-host-banner">
        <div class="container">
          <div class="fp-crafted-corner">
            <img src="/images/futureproof/fp-crafted.svg" />
          </div>
          <div class="fp-web-dots">
            <svg xmlns="http://www.w3.org/2000/svg" width="214" height="157">
              <path
                fill="#5385E7"
                fill-rule="evenodd"
                d="M-110.715 5.939c0 2.761-2.394 5-5.348 5-2.954 0-5.349-2.239-5.349-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 36c0 2.761-2.394 5-5.348 5-2.954 0-5.349-2.239-5.349-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 37c0 2.761-2.394 5-5.348 5-2.954 0-5.349-2.239-5.349-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 37c0 2.761-2.394 5-5.348 5-2.954 0-5.349-2.239-5.349-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 36c0 2.761-2.394 5-5.348 5-2.954 0-5.349-2.239-5.349-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm40.65-146c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm40.65-146c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 36c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 37c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 37c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 36c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm40.649-146c0 2.761-2.395 5-5.349 5S.537 8.7.537 5.939c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm39.58-36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0-110c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 73c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 73c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0-110c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm40.65 74c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0-110c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 73c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 73c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0-110c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm40.649 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0-146c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm40.65-36c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 36c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 37c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 37c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 36c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm40.649-146c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5z"
              />
            </svg>
          </div>
          <div class="banner-me">
            <h1>Property Management Resources for Middle East</h1>
            <h4>
              All the insights you need to transform your real estate
              operations, delivered by leading regional experts.
            </h4>
          </div>
        </div>
      </section>
      <!-- webinar-banner-->
      <section class="fc-webinar-videos-sec">
        <div class="container">
          <h3>FM Live Videos</h3>
          <div class="row">
            <MeVideoCard
              v-for="item in interviews"
              v-bind:key="item.link"
              v-bind:link="item.link"
              v-bind:image="item.image"
              v-bind:title="item.title"
              v-bind:description="item.description"
            />
          </div>
          <h3 class="mgT60">CM Today Breakfast Bytes Podcast</h3>
          <div class="row">
            <MePodcastCard
              v-for="item in podcasts"
              v-bind:key="item.link"
              v-bind:link="item.link"
              v-bind:image="item.image"
              v-bind:title="item.title"
              v-bind:description="item.description"
            />
          </div>
          <h3 class="mgT60">Videos</h3>
          <div class="row fc-video-card-extend">
            <FcVideoCard
              v-for="webinar in extraVideos"
              v-bind:key="webinar.videoLink"
              v-bind:filterType="webinar.filterType"
              v-bind:videoLink="webinar.videoLink"
              v-bind:toggleData="webinar.toggleData"
              v-bind:target="webinar.target"
              v-bind:modalStyle="webinar.modalStyle"
              v-bind:description="webinar.description"
              :title="webinar.title"
              :customClass="webinar.customClass"
            />
          </div>
        </div>
      </section>
      <VideoZoomModel />
      <FooterVideo />
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar";
import FooterVideo from "../../components/FooterVideo";
import MeVideoCard from "../../components/MeVideoCard";
import MePodcastCard from "../../components/MePodcastCard";
import FcVideoCard from "../../components/FcVideoCardVisitia";
import VideoZoomModel from "../../components/VideoZoomModel";

export default {
  components: {
    VideoZoomModel,
    MePodcastCard,
    Navbar,
    MeVideoCard,
    FooterVideo,
    FcVideoCard,
  },
  methods: {
    openPopup() {
      document.getElementById("webinarPopup").style.display = "block";
    },
  },
  data() {
    return {
      interviews: [
        {
          link: "xyJ6wvmJ1R4",
          image: "ME1.png",
          title: "Future of FM Tech with UAE's Al Fajer",
          description:
            "Al Fajer FM deputy CEO Sangeetha Balakrishna talks about the digital transformation that the firm has undergone over the last few months.",
        },
        {
          link: "zYSbeeXlKPQ",
          image: "ME2.png",
          title: "Future of FM Tech: Proptech explained with JLL",
          description:
            "Know how facilities management companies and property management firms can work together to make buildings smarter from the subject matter expert, Evrim Ay, JLL.",
        },
        {
          link: "IcBiu8G3V6c",
          image: "ME3.png",
          title: "Future of FM Tech with Initial Saudi's Mohammed Bundakji",
          description:
            "Mohammed Bundakji of Initial Saudi to explains about the digital transformation in the kingdom’s real estate and facilities management (FM) sectors.",
        },
        {
          link: "2wd7u1Re1LA",
          image: "ME4.png",
          title: "Former Tridium MD Roger Woodward on digital twins",
          description:
            "Roger Woodward, a global real estate strategist and former MD of Tridium elaborates about digital twins and how the concept can benefit Middle East facility management operations.",
        },
      ],
      podcasts: [
        {
          link: "699430372",
          image: "ME5.png",
          title: "Operational Efficiency in Real Estate Management",
          description:
            "Prabhu Ramachandran, Founder and CEO of Facilio Inc share his thoughts on using the right tools, technology, and best practices essential to achieve operational efficiency.",
        },
        {
          link: "852936688",
          image: "ME6.png",
          title: 'Exploring the "Smart Approach" in the Museum of the Future',
          description:
            "Sundar Raman, the Director of Technology, Museum of the Future talks about the kind of technology the facility is applying towards the operations & maintenance.",
        },
        {
          link: "857016307",
          image: "ME7.png",
          title: "Emerging Trends: Technology In Service Delivery",
          description:
            "Abdulla Al-Wahedi – CEO of Khidmah, shares his insights on some of the emerging trends and the unique ways in which Khidmah supports quality customer experiences.",
        },
      ],
      extraVideos: [
        {
          filterType: "",
          videoLink: "https://facilio.wistia.com/medias/wfyht8g56x",
          toggleData: "",
          target: "",
          title:
            "Future of Smart Spaces and IoT - Smart Built Environment Forum",
          modalStyle:
            "wistia_embed wistia_async_wfyht8g56x popover=true popoverAnimateThumbnail=true videoFoam=true",
          description:
            "The world of PropTech is advancing at lightning speed. Occupants are more open to digital initiatives now more than ever before. Watch experts discuss the contrast between Digital Initiatives Now vs Pre-Pandemic Time.",
        },
        {
          filterType: "",
          videoLink: "https://facilio.wistia.com/medias/a5fedpcz6t",
          toggleData: "",
          target: "",
          title:
            "Unlocking the Potential of Connected Buildings with IoT: CBNME Interview ",
          modalStyle:
            "wistia_embed wistia_async_a5fedpcz6t popover=true popoverAnimateThumbnail=true videoFoam=true",
          description:
            "Watch Prabhu and Salvatore discuss the changes that are happening in the building automation and smart devices industry in the recent past and elaborate on this shift and the opportunities ahead.",
        },
        {
          filterType: "",
          videoLink: "https://fast.wistia.com/embed/medias/wfyht8g56x",
          toggleData: "",
          target: "",
          title:
            "Future of Smart Spaces and IoT - Smart Built Environment Forum",
          modalStyle:
            "wistia_embed wistia_async_wfyht8g56x popover=true popoverAnimateThumbnail=true videoFoam=true",
          description:
            "The world of PropTech is advancing at lightning speed. Occupants are more open to digital initiatives now more than ever before. Watch experts discuss the contrast between Digital Initiatives Now vs Pre-Pandemic Time.",
        },
      ],
    };
  },
  head() {
    return {
      title: "Expert talks from property management leaders in the Middle East",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Get to know the insights and best practices to streamline real estate operations from the property management experts of Middle East.",
        },
      ],
      link: [
        {
          rel: "canonical",
          href:
            "https://facilio.com/property-management-resources-for-middle-east/",
        },
      ],
      script: [
        {
          src: "../js/includes.js",
        },
      ],
    };
  },
};
</script>
<style>
.banner-me {
  padding: 100px 0 0;
  margin: 50px auto 0;
}

.mgT60 {
  margin-top: 60px;
}

.fc-video-host-banner h1 {
  max-width: 52% !important;
}

.fc-video-host-banner h4 {
  max-width: 1000px !important;
}

.fc-video-card-extend {
  display: flex;
  flex-wrap: wrap;
}

.fc-video-card-extend .fc-video-img .line-img {
  display: none !important;
}

.fc-video-card-extend .fc-video-card-flex-column {
  flex-direction: column;
  align-items: flex-start;
}

.fc-video-card-extend .video-block-content {
  font-size: 16px;
  background-color: #000000;
  color: #ffffff;
  opacity: 0;
  padding-left: 0;
  position: relative;
  transition-delay: 0s;
  transition-duration: 0.2s;
  font-family: "ProximaNovaRgRegular", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
}

.fc-video-card-extend .video-title {
  font-size: 22px;
  color: #ffffff;
  text-align: left;
  font-family: "ProximaNovaBold", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
}

.fc-video-element-item:hover {
  transform: scale(1.08);
  transition: transform 100ms ease 0s;
  opacity: 1;
}

.fc-video-element-item:hover .video-block-content {
  background-color: #000000;
  opacity: 1;
  transform: translateY(5px);
  -webkit-transform: translateY(5px);
}
.property-manage-page .wistia_responsive_wrapper {
  height: 330px !important;
  margin-top: 20px;
}

@media screen and (max-width: 600px) {
  .fc-webinar-videos-sec h3 {
    margin-bottom: 0px !important;
  }

  .fc-video-host-banner h1 {
    max-width: 100% !important;
    font-size: 28px;
    line-height: 38px;
  }
  .fc-webinar-videos-sec h3 {
    margin-top: 80px !important;
    margin-bottom: 0px !important;
  }

  .fc-video-host-banner h1 {
    max-width: 100% !important;
    font-size: 28px;
    line-height: 38px;
  }

  .fc-video-card-extend .video-block-content {
    opacity: 1;
  }

  .video-desc-con .video-title {
    margin-top: 20px !important;
  }

  .fc-video-host-banner h4 {
    line-height: 25px;
  }

  .fc-video-pad-bottom {
    margin-bottom: 20px;
  }
}
</style>
