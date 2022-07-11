<template>
  <div class="futureproof-campaign-page homePage btn-shade">
    <div id="productPage"></div>

    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>

      <div class="mask"></div>
      <!-- navbar end -->
      <!-- header -->
      <div class="futureproof-campaign-header">
        <FutureProofLines />
        <div class="container">
          <div class="futureproof-campaign-header-content">
            <h1 class="futureproof-campaign-header-h1">
              Manage your facilities,
              <br />not the software.
            </h1>
            <div class="futureproof-campaign-header-desc fc-medium-650 mPad">
              For years, you have been bogged down by complex, silo-ed and
              expensive FM software that makes launching satellites look simpler
              as opposed to managing facilities. While you juggle diverse
              responsibilities with self-contained tools, efficiency is often
              lost in translation.
            </div>
            <nuxt-link
              to="/get-started"
              class="futureproof-campaign-header-btn"
            >Switch to modern facilities</nuxt-link>
          </div>
        </div>
      </div>
      <!-- ele block -->
      <section class="futureproof-campaign-first-section mobile-pad">
        <div class="container">
          <h4>Break free from legacy FM software</h4>
          <div
            class="future-proof-campaign-invo-desc max-width550 mL-auto mR-auto"
          >Shift from broken and reactive facilities now</div>
          <div class="row">
            <div class="col-lg-12 text-center">
              <img src="/images/events/elephant.svg" alt title />
            </div>
          </div>
        </div>
        <div class="futureproof-campaign-first-section-desc max-width700 mL-auto mR-auto">
          First, big cheers to you and the FM community at large. Unsung heroes
          of every brand, you work relentlessly behind the scenes. You strive to
          provide unique and intuitive facilities experience across your
          portfolio.
        </div>
      </section>
      <!-- second section -->
      <section
        class="futureproof-campaign-second-section fc-mobile-futureproof-campaign-second-section"
      >
        <div class="futureproof-campaign-second-section-desc max-width650 mL-auto mR-auto">
          But firefighting issues round the clock is not easy. Definitely not
          with a
          <span>software that is rigid and unequipped</span>
          to solve real-time problems.
        </div>
        <div class="pT30">
          <nuxt-link
            to="/resources/guide/evaluating-facilities-management-software"
            class="futureproof-campaign-link-txt"
          >
            Get the guide to real-time operational visibility
            <img
              src="/images/svg/right-arrow-blue.svg"
              alt
              title
              width="25"
              class="mL10"
            />
          </nuxt-link>
        </div>
      </section>
      <!-- third section -->
      <section class="futureproof-campaign-third-section">
        <div class="container">
          <!-- <h3>
            Which means, innovating and creating differentiated facilities <br />
            experiences is even harder if not impossible. And that’s exactly why we <br />
            thought it’s important to first acknowledge, speak out and eventually <br />
            push the bloated elephant out of future facilities.
          </h3>-->
          <div class="future-proof-campaign-invo-block">
            <h4>End the war with silos</h4>
            <div class="future-proof-campaign-invo-desc max-width550 mL-auto mR-auto">
              Move forward by unlocking unprecedented efficiency centrally
              across portfolio
            </div>
          </div>
          <!-- split two sections -->

          <div class="row">
            <div class="col-lg-6 pT70">
              <div
                class="future-proof-campaign-f32 max-width400"
              >Get a bird’s-eye-view of your portfolio</div>
              <div class="future-proof-campaign-f22 max-width430">
                Which building is performing poor? How to benchmark performance
                across portfolio? Can I centrally track critical SLAs? There is
                no way you could derive such meaningful enterprise-level
                decisions if you can’t centrally access all your buildings data.
              </div>
              <nuxt-link to="/industry/commercial-portfolios">
                <div class="learn-more">Learn More</div>
              </nuxt-link>
            </div>

            <div class="col-lg-6 text-center">
              <img src="/images/events/elephant-war.svg" alt="elephant war" title="elephant war" />
            </div>
          </div>
        </div>
      </section>

      <!-- fourth section -->
      <div class="futureproof-campaign-second-section futureproof-campaign-second-section-mobile">
        <div class="container">
          <div class="row fc-mobile-col-change">
            <div class="col-lg-6 text-center">
              <img src="/images/events/elephant-hidden.svg" alt="elephant war" title="elephant war" />
            </div>
            <div class="col-lg-6 future-proof-fourth-cont fc-futureproof-fourth-mobile">
              <div
                class="future-proof-campaign-f32 width-news"
              >Get blown away with experience, not hidden costs</div>
              <div class="future-proof-campaign-f22">
                You are determined to keep problems across your portfolio at
                bay. You have just spent a fortune on a software. You want a
                custom workflow that could optimise critical assets. But wait!
                You have to pay extra for it! Or worse, it has no scope to
                customise in the first place.
              </div>
              <nuxt-link to="/platform-overview">
                <div class="learn-more">Learn More</div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <!-- fifth section -->
      <section class="future-proof-fifth-sec">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 future-proof-fourth-cont future-proof-fourth-cont-mobile">
              <div
                class="future-proof-campaign-f32 max-width400"
              >There is always room for more efficiency, if only..</div>
              <div class="future-proof-campaign-f22 max-width500">
                Think about it! You book cabs, order a meal, even watch movies
                on the go! But a chiller that gets switched off unprecedented in
                a fully automated building requires manual inspection. To top
                it, there is no real-time context for any stakeholder.
              </div>
              <nuxt-link to="/solutions/continuous-sustainability">
                <div class="learn-more">Learn More</div>
              </nuxt-link>
            </div>
            <div class="col-lg-6 text-center">
              <img
                src="/images/events/elephant-room.svg"
                alt="elephant war"
                title="elephant war"
                class="fc-mobile-image80"
              />
            </div>
          </div>
        </div>
      </section>
      <!-- sixth section -->
      <div class="futureproof-campaign-second-section fc-mobile-third-sixth-sec">
        <div class="container">
          <div class="row fc-mobile-col-change">
            <div class="col-lg-6 text-center">
              <img
                src="/images/events/elephant-problem.svg"
                alt="elephant war"
                title="elephant war"
                class="fc-mobile-image80"
              />
            </div>
            <div class="col-lg-6 future-proof-fourth-cont future-proof-fourth-block">
              <div
                class="future-proof-campaign-f32 max-width400"
              >Turn reactive to proactive, with real-time context</div>
              <div class="future-proof-campaign-f22 pT50 max-width480">
                The biggest bane of reactive facilities is that you are
                constantly stuck in firefighting mode. With no way to prioritise
                or proactively solve problems, FMs are left with little to no
                scope to create value-added experiences
              </div>
              <nuxt-link to="/building-management-system">
                <div class="learn-more">Learn More</div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <!--podcast section---->
      <div class="fc-podcast" id="fc-podcast">
        <div class="container">
          <div class="future-proof-podcast">
            <h4 class="text-center">
              See why top FM leaders are talking about moving to real-time
              facilities
            </h4>
          </div>

          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 col-sm-12">
              <div class="futureproof-podcast-card">
                <script src="https://fast.wistia.com/embed/medias/z7lg4b6lgt.jsonp" async></script>
                <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
                <div
                  class="wistia_responsive_padding"
                  style="padding:100.0% 0 0 0;position:relative;"
                >
                  <div
                    class="wistia_responsive_wrapper2"
                    style="height:100%;left:0;position:absolute;top:0;width:100%;"
                  >
                    <span
                      class="wistia_embed wistia_async_z7lg4b6lgt popover=true popoverAnimateThumbnail=true videoFoam=true"
                      style="display:inline-block;height:100%;position:relative;width:100%"
                    >&nbsp;</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3"></div>
          </div>
        </div>
      </div>
    </div>
  <Footer />

  </div>
  <!--podcast section End---->
</template>

<script>
import FutureProofLines from "../components/FutureProofLines";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default {
  components: {
    FutureProofLines,
    Navbar, Footer
  },
  head() {
    return {
      title: "Break free from legacy CaFM | Facilio",
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
          content: "Break free from legacy CaFM | Facilio"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Is complex, standalone and expensive facilities management software pulling down your team efficiency? Switch to modern mobile-first facilities experience now with Facilio."
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "/images/og-images/break-free-from-legacy-cafm.png"
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/break-free-from-legacy-cafm"
        },
        { hid: "twitter-meta", name: "twitter:card", content: "summary" },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Break free from legacy CaFM | Facilio"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Is complex, standalone and expensive facilities management software pulling down your team efficiency? Switch to modern mobile-first facilities experience now with Facilio."
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "/images/og-images/break-free-from-legacy-cafm.png"
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/break-free-from-legacy-cafm"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/break-free-from-legacy-cafm"
        }
      ],
      script: [
        { src: "../js/page.js" },
        { src: "../js/waypoints.min.js" },
        { src: "../js/includes.js" }
      ]
    };
  }
};
</script>

<style>
.futureproof-podcast-card > .wistia_responsive_wrapper2 {
  height: 100% !important;
}
.arrow span {
  font-size: 20px;
  color: #ffffff;
  max-width: 650px;
  width: 100%;
  font-family: ProximaNovaRgRegular;
}
.arrow {
  margin-top: 100px !important;
  text-align: center;
  margin: 0 auto;
  max-width: 100px;
}
.bounce {
  -moz-animation: bounce 0.5s infinite;
  -webkit-animation: bounce 0.5s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-10px);
  }
}
</style>
