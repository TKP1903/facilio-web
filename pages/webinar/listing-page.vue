<template>
  <div class="homePage btn-shade list-page">
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
            <h1>Facilio Webinars</h1>
            <h4>
              Learn best practices, tips, tricks, and more from real estate
              leaders and property experts from all over the world.
            </h4>
          </div>
        </div>
      </section>
      <!-- webinar-banner-->
      <section class="fc-webinar-videos-sec">
        <div class="container">
          <h3 class="mgT60">Webinar Recordings</h3>
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
import FooterVideo from "../../components/FooterWebniar";
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
      extraVideos: [
        {
          filterType: "",
          videoLink: "https://fast.wistia.com/embed/medias/jfympf8aeh",
          toggleData: "",
          target: "",
          title:
            "What do customer-centric FM services do differently: Learn from Bright’s O&M journey ",
          modalStyle:
            "wistia_embed wistia_async_jfympf8aeh popover=true popoverAnimateThumbnail=true videoFoam=true",
          description:
            "Balaji Parthasarathy, Director of Operations at Bright Environment LLC shares an inside view into delivering and expanding compelling facility experiences. What are the modern O&M tech tactics to improve agility and operational visibility?",
        },
        {
          filterType: "",
          videoLink: "https://facilio.wistia.com/medias/0qbvnpr6es",
          toggleData: "",
          target: "",
          title:
            "How data powers the future of building maintenance & optimization",
          modalStyle:
            "wistia_embed wistia_async_0qbvnpr6es popover=true popoverAnimateThumbnail=true videoFoam=true",
          description:
            "Global real estate portfolio owners and operators alike are increasingly turning to holistic efficiency-drivers that can contextually integrate workflows and provide seamless accessibility to enterprise-wide O&M insights - and this webinar aims to do just that.",
        },
        {
          filterType: "",
          videoLink: "https://facilio.wistia.com/medias/a5fedpcz6t",
          toggleData: "",
          target: "",
          title:
            "Improving energy efficiency in buildings: Digital retrofits as a force multiplier",
          modalStyle:
            "wistia_embed wistia_async_g2zbwt2tlz popover=true popoverAnimateThumbnail=true videoFoam=true",
          description:
            "Real estate portfolio owners/operators and EsCO companies, across the globe, are increasingly turning to energy efficiency drivers that can scale and help them act their part in the major shift towards continuous sustainability - and this webinar aims to do just that. ",
        },
        {
          filterType: "",
          videoLink: "https://facilio.wistia.com/medias/a5fedpcz6t",
          toggleData: "",
          target: "",
          title: "Unlocking the potential of connected buildings with IoT",
          modalStyle:
            "wistia_embed wistia_async_dkko3wqpvw popover=true popoverAnimateThumbnail=true videoFoam=true",
          description:
            "Property operators and service providers are increasingly turning to new synergies in existing building IoT ecosystems that can fast-track connected building use case deployments (in days versus months) - and this webinar aims to do just that.",
        },
        {
          filterType: "",
          videoLink: "https://facilio.wistia.com/medias/a5fedpcz6t",
          toggleData: "",
          target: "",
          title: "Leading Property Operations Through Change with Data",
          modalStyle:
            "wistia_embed wistia_async_mcq3kxvm9l popover=true popoverAnimateThumbnail=true videoFoam=true",
          description:
            "The webinar brings you best practices, lessons, and inspirations from the best minds in the industry to help you make the most advantage of this transformational period.",
        },
      ],
    };
  },
  head() {
    return {
      title:
        "Webinar Recordings | Best practices from global real estate leaders",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Facilio webinars",
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content:
            "Webinar Recordings | Best practices from global real estate leaders ",
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content: "Facilio webinars",
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "/images/og-images/listing-page.png?reset=1",
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/webinar/listing-page",
        },

        {
          hid: "twitter-title",
          name: "twitter:title",
          content:
            "Webinar Recordings | Best practices from global real estate leaders ",
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content: "Facilio webinars",
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "/images/og-images/listing-page.png?reset=1",
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/webinar/listing-page",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/webinar/listing-page",
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
  max-width: 800px !important;
  line-height: 30px !important;
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

.list-page .fc-vistia-vidoe .video-desc-con {
  margin-bottom: 40px;
}

.list-page .fc-webinar-videos-sec {
  padding: 0px 0px 100px;
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
