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
          <div class="fp-crafted-corner"><img src="/images/futureproof/fp-crafted.svg"></div>
          <div class="fp-web-dots"><svg xmlns="http://www.w3.org/2000/svg" width="214" height="157">
              <path fill="#5385E7" fill-rule="evenodd"
                d="M-110.715 5.939c0 2.761-2.394 5-5.348 5-2.954 0-5.349-2.239-5.349-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 36c0 2.761-2.394 5-5.348 5-2.954 0-5.349-2.239-5.349-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 37c0 2.761-2.394 5-5.348 5-2.954 0-5.349-2.239-5.349-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 37c0 2.761-2.394 5-5.348 5-2.954 0-5.349-2.239-5.349-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 36c0 2.761-2.394 5-5.348 5-2.954 0-5.349-2.239-5.349-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm40.65-146c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm40.65-146c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 36c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 37c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 37c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 36c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm40.649-146c0 2.761-2.395 5-5.349 5S.537 8.7.537 5.939c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm39.58-36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0-110c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 73c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 73c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0-110c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm40.65 74c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0-110c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 73c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 73c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0-110c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm40.649 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0-146c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm40.65-36c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 36c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 37c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 37c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 36c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm40.649-146c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5z" />
              </svg></div>
          <div class="fc-fp-logo">
            <img src="/images/futureproof/fp-logo.svg">
            <span class="fc-presents">Presents</span>
          </div>
          <h1>REBUILD</h1>
          <h4>All the insights you need to prepare for the new normal.</h4>
        </div>
      </section>
      <!-- webinar-banner-->
      <section class="fc-webinar-videos-sec">
        <div class="container">
          <h3>Episodes</h3>
          <div class="row">
            <covidWebinarCard v-for="item in webinarseries" v-bind:key="item.link1" v-bind:link1="item.link1"
              v-bind:link2="item.link2" v-bind:vclass="item.vclass" v-bind:title="item.title" v-bind:desc="item.desc" />
            <div class="col-md-6 episode-8-con">
              <div class="webseries-thumbnail">
                <a href="/futureproof/rebuilding-real-estate-operations-covid19-nihal-nasr/" target="_blank">
                <div class="webinar-series-card">
                  <img src="/images/futureproof/episode-8.jpg" class="covid-video8-img"/>
                  <p class="fc-epi-name pT30">
                    Episode #8 - Balancing Hygiene and Business Continuity - A Framework for Corporate FM Teams
                  </p>
                  <p class="fc-epi-desc">
                    Nihal shares her insights on implementing the right prevention and containment strategies in critical business services.
                    </p>
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterVideo />
    </div>
  </div>
</template>

<script>
  import Navbar from "../../components/Navbar";
  import FooterVideo from "../../components/FooterVideo";
  import covidWebinarCard from "../../components/covidWebinarCard";
  import webinarModal from "../../components/webinarModal";
  export default {

    components: {
      Navbar,
      webinarModal,
      covidWebinarCard,
      FooterVideo
    },
    methods: {
      openPopup() {
        document.getElementById("webinarPopup").style.display = "block";
      }
    },
    data() {
      return {
        webinarseries: [{
            link1: "https://fast.wistia.com/embed/medias/czowne17nm.jsonp",
            link2: "https://fast.wistia.com/assets/external/E-v1.js",
            vclass: "wistia_async_czowne17nm",
            title: "Episode #1: - Navigating uncertain times, together",
            desc: "Front-line defenders across the globe are doing every bit they can to curb the spread in buildings. Prabhu Ramachandran, our CEO talks about measures to contain COVID-19, the future of RE, and more."
          },
          {
            link1: "https://fast.wistia.com/embed/medias/rr6thptiff.jsonp",
            link2: "https://fast.wistia.com/assets/external/E-v1.js",
            vclass: "wistia_async_rr6thptiff",
            title: "Episode #2 - Remote operations in BAS - Road ahead ",
            desc: "With the growth in stay-at-home orders and lockdowns, Phil Zito, CEO of Building Automation Monthly, talks about how BAS professionals can remotely support their operations during the COVID-19 crisis."
          },
          {
            link1: "https://fast.wistia.com/embed/medias/homg1ovo6q.jsonp",
            link2: "https://fast.wistia.com/assets/external/E-v1.js",
            vclass: "wistia_async_homg1ovo6q",
            title: "Episode #3 - Role of Facilities Management in post-COVID-19 World ",
            desc: "Sumith Sukumaran, the Operations Head of Quality Group talks about how FMs can remotely implement proactive measures for preventing COVID-19."
          },
          {
            link1: "https://fast.wistia.com/embed/medias/geitcasdjd.jsonp",
            link2: "https://fast.wistia.com/assets/external/E-v1.js",
            vclass: "wistia_async_geitcasdjd",
            title: "Episode #4 - How to protect asset value and improve property operations in unclear times",
            desc: "Brad Kirshenbaum, Head of Innovation at CA Ventures, talks about how to re-engineer standard operating procedures in properties."
          },
          {
            link1: "https://fast.wistia.com/embed/medias/4s3k8878rm.jsonp",
            link2: "https://fast.wistia.com/assets/external/E-v1.js",
            vclass: "wistia_async_4s3k8878rm",
            title: "Episode #5 - Transitioning to a Data-first Real Estate Strategy: Challenges and Opportunities Ahead",
            desc: " Frank discusses the real estate models in the new normal and what it means for portfolio owners and operators."
          },
          {

            link1: "https://fast.wistia.com/embed/medias/0hzbsvzq73.jsonp",
            link2: "https://fast.wistia.com/assets/external/E-v1.js",
            vclass: "wistia_async_0hzbsvzq73",
            title: "Episode #6 - Using Digital to Elevate Built Asset Value and Experiences In a Changing World",
            desc: "Emma talks about how leading properties in Australia responded to the viral outbreak and how digital-led business models are boosting efficiency."
          },

          {
            link1: "https://fast.wistia.com/embed/medias/25c7mqj83h.jsonp",
            link2: "https://fast.wistia.com/assets/external/E-v1.js",
            vclass: "wistia_async_25c7mqj83h",
            title: "Episode #7 - Sustainability in Buildings after COVID-19: Opportunities That Should Not Be Missed",
            desc: "Conor shares his perspective on the evolving guidelines for indoor air quality, the right questions to ask building owners as it relates to sustainability and the role innovation plays in building operations"
          },

        ],

      }
    },
    head() {
      return {
        title: "REBUILD: Practical insights to help you reassess your operational workflow ",
        meta: [{
            hid: "description",
            name: "description",
            content: "Join us as we talk to industry leaders in real estate and property management to hear their insights on tackling COVID-19."
          },
          {
            hid: 'robots',
            name: 'robots',
            content: 'noindex'
          }
        ],
        link: [{
          rel: "canonical",
          href: "https://facilio.com/futureproof/rebuilding-real-estate-operations-covid19"
        }],
        script: [{
          src: "../js/includes.js"
        }]
      };
    }
  };
</script>