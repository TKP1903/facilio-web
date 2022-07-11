<template>
  <div class="events-page newspage btn-shade" v-if="isIsotopeLoaded">
    <div id="productPage"></div>

    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <div class="mask"></div>
      <!-- banner container -->
      <div class="fc-video-banner-container">
        <div class="container pL0 pR0">
          <div class="pT30">
            <img src="/images/svg/future-proof-logo.svg" alt title />
          </div>
          <h1 class="pT60 banner-heading-h1" style="max-width: 700px;font-size: 38px;">
            A first-of-its-kind conference for leaders 
            in real estate operations
          </h1>
          <div class="flex-middle pT20 video-count-block">
            <div class="fc-video-count-blue-txt">
              11
              <span class="fc-video-small-txt pL10">Videos</span>
            </div>
            <div class="fc-video-count-yellow-txt pL20">
              4
              <span class="fc-video-small-txt pL10">Tracks</span>
            </div>
          </div>
          <div class="fc-video-white-36" style="max-width: 380px; line-height: 35px;">Shaping the future of the built environment</div>
        </div>
      </div>
      <!-- video section -->

      <section>
        <div class="fc-video-section">
          <div class="container pL0 pR0">
            <div class="fc-video-tool-section">
              <!--  -->
              <div id="videoOptions">
                <FilterWrapper />
              </div>
              <div id="grid-archives" class="video-content-section">
                <div id="grid-archives">
                  <div class></div>

                  <div id="grid-list" class="video-grid grid">
                    <FcVideoCard
                      v-for="card in cards"
                      v-bind:key="card.videoLink"
                      v-bind:filterType="card.filterType"
                      v-bind:videoLink="card.videoLink"
                      v-bind:toggleData="card.toggleData"
                      v-bind:target="card.target"
                      v-bind:modalStyle="card.modalStyle"
                      v-bind:description="card.description"
                    />
                  </div>
                </div>
                <!--  -->
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer />

    </div>
  </div>
</template>

<script>
import FilterWrapper from "../../../components/FilterWrapper";
import FcVideoCard from "../../../components/FcVideoCard";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default {
  data() {
    return {
      isIsotopeLoaded: false,
      cards: [
        {
          filterType: "element-item digitisation digitisation",
          videoLink: "https://fast.wistia.com/embed/medias/a3tnj48zqw.jsonp",
          toggleData: "modal",
          target: "#myModal",
          modalStyle:
            "wistia_embed wistia_async_a3tnj48zqw popover=true popoverAnimateThumbnail=true videoFoam=true",
          description:
            "How to unpack value led Digitization into Actionable Ideas (Dubai)"
        },
        {
          filterType: "element-item automisation automisation",
          videoLink: "https://fast.wistia.com/embed/medias/l3dxprp09q.jsonp",
          modalStyle:
            "wistia_embed wistia_async_l3dxprp09q popover=true popoverAnimateThumbnail=true videoFoam=true",
          description:
            "Why Automation and Facilities Operation need to work together? (Dubai)"
        },
        {
          filterType: "element-item digitisation digitisation",
          videoLink: "https://fast.wistia.com/embed/medias/n41aguv1h2.jsonp",
          modalStyle:
            "wistia_embed wistia_async_n41aguv1h2 popover=true popoverAnimateThumbnail=true videoFoam=true",
          description:
            "How to unpack value-led Digitization into Actionable Ideas (Bangalore)"
        },
        {
          filterType: "element-item digitisation digitisation",
          videoLink: "https://fast.wistia.com/embed/medias/78p0nrulan.jsonp",
          modalStyle:
            "wistia_embed wistia_async_78p0nrulan popover=true popoverAnimateThumbnail=true videoFoam=true",
          description: "How technology drives Real Estate?"
        },

        {
          filterType: "element-item sustainability sustainability",
          videoLink: "https://fast.wistia.com/embed/medias/jvsx8cj863.jsonp",
          modalStyle:
            "wistia_embed wistia_async_jvsx8cj863 popover=true popoverAnimateThumbnail=true videoFoam=true",
          description:
            "How to create a sustainable future by efficiently optimizing the first fuel?"
        },
        {
          filterType: "element-item realworld realworld",
          videoLink: "https://fast.wistia.com/embed/medias/9o9vk7q36y.jsonp",
          modalStyle:
            "wistia_embed wistia_async_9o9vk7q36y popover=true popoverAnimateThumbnail=true videoFoam=true",
          description:
            "How infosys Centralize Building Operations across their PAN- India facilities?"
        },
        {
          filterType: "element-item digitisation digitisation",
          videoLink: "https://fast.wistia.com/embed/medias/gdi67rlmvi.jsonp",
          modalStyle:
            "wistia_embed wistia_async_gdi67rlmvi popover=true popoverAnimateThumbnail=true videoFoam=true",
          description:
            "How to utilize Technology to transform FM as a Key differentiator?"
        },
        {
          filterType: "element-item automisation automisation",
          videoLink: "https://fast.wistia.com/embed/medias/1zte1k86k2.jsonp",
          modalStyle:
            "wistia_embed wistia_async_1zte1k86k2 popover=true popoverAnimateThumbnail=true videoFoam=true",
          description:
            "Demystifying Digital retrofitting/ Why the next generation of Automation will communicate via Open protocols?"
        },
        {
          filterType: "element-item realworld realworld",
          videoLink: "https://fast.wistia.com/embed/medias/dj254xdvad.jsonp",
          modalStyle:
            "wistia_embed wistia_async_dj254xdvad popover=true popoverAnimateThumbnail=true videoFoam=true",
          description:
            "How to align people's experience & build a digital workplace?"
        },
        {
          filterType: "element-item automisation automisation",
          videoLink: "https://fast.wistia.com/embed/medias/qisg4qudg2.jsonp",
          modalStyle:
            "wistia_embed wistia_async_qisg4qudg2 popover=true popoverAnimateThumbnail=true videoFoam=true",
          description:
            "Why Automation and Facilities Operation need to work together? (Bangalore)"
        },
        {
          filterType: "element-item realworld realworld",
          videoLink: "https://fast.wistia.com/embed/medias/8mpgzphj93.jsonp",
          modalStyle:
            "wistia_embed wistia_async_8mpgzphj93 popover=true popoverAnimateThumbnail=true videoFoam=true",
          description:
            "How to find efficiency?/ How DSO centralized build operations across their facilities?"
        }
      ]
    };
  },
  head() {
    return {
      title: "FUTUREPROOF- Modern FM Summit By Facilio",
      meta: [
        {
          hid: "decription",
          name: "description",
          content:
            "Join us along with other powerful changemakers in the commercial real estate and facilities management industry, embracing change at Futureproof, our annual summit."
        },
        {
          hid: "keywords-override",
          name: "keywords",
          content: "Free FM Videos, Futureproof Videos, Modern Summit Videos"
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "FUTUREPROOF - Modern FM Summit Videos"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Join us along with other powerful changemakers in the commercial real estate and facilities management industry, embracing change at Futureproof, our annual summit."
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "/images/homepage.png"
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
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/futureproof/fp-videos"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "FUTUREPROOF - Modern FM Summit Videos"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Join us along with other powerful changemakers in the commercial real estate and facilities management industry, embracing change at Futureproof, our annual summit."
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "/images/homepage.png"
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/futureproof/fp-videos"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/futureproof/fp-videos"
        }
      ],
      script: [
        { src: "../../js/page.js" },
        { src: "../../js/waypoints.min.js" },
        { src: "../../js/includes.js" },
        { src: "https://console.crealworld/load.js", body: true },
        {
          hid: "isotope",
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js",
          defer: true,
          callback: () => {
            this.isIsotopeLoaded = true;
          }
        },
        {
          src: "https://wcrealworld.freshcrealworld.com/js/widget.js",
          body: true
        }
      ]
    };
  },
  components: {
    FilterWrapper,
    FcVideoCard,
    Navbar, Footer
  }
};
</script>

<style>
#fc-header .navbar-default {
  background-color: #ffffff;
}
</style>
