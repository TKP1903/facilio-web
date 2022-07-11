<template>
  <div class="productPage btn-shade">
    <div id="productPage"></div>

    <div class="myPage" id="myPage">
      <Navbar />
     <div class="property-section">
        <div class="fc-container">
          <div class="overview-page-headings">
              <h6 class="productHeadPink text-uppercase">
                  ONE PLATFORM, INFINITE EFFICIENCIES
                </h6>
            <h1 style="max-width: 600px;">
            CMMS that meaningfully connects your
            building data, and processes, and people.
            </h1>
            <p style="max-width:600px">
              Without real-time data, building maintenance is fraught with unknowns.
              Facilio removes the guesswork out of operations and maintenance, bringing power,
              speed, and data-driven visibility that you’ve come to expect from modern SaaS
              technologies
            </p>
            <GetStartedButton />
          </div>
        </div>
      </div>
      <!--workplace-feature-2-->
      <div class="workplace-feature-2">
        <div class="fc-container w-feature-wrapper">
          <div class="row fc-wrapper-pad">
            <div class="col-md-6">
              <div class="fc-workplace-subhead">
                Give maintenance teams their time back with automated work processes
              </div>
              <div class="w-feature-desc feature-desc">
                Optimizing maintenance based on real-time building data allows companies to
                move towards continuous efficiency. Facilio’s automation spans the full lifecycle
                of maintenance and work orders, saving time and improving accuracy—from real-time
                condition and ML-based triggers to automatic resolution to the preview of complete
                context & asset history right within work orders. <span style="text-decoration:underline">Bonus</span>: Facilio can trigger
                contextual work orders to your existing CMMS (but here’s why you really need to
                <nuxt-link to="/operations-and-maintenance">switch to Facilio</nuxt-link> )
              </div>
              <div class="w-feature-button">
                  <div @click="activeBtn2 = 'btn1'"  :class="{activeButton: activeBtn2 === 'btn1' }" data-toggle="tab" href="#tab5">Condition-based Maintenance</div>
                  <div @click="activeBtn2 = 'btn2'"  :class="{activeButton: activeBtn2 === 'btn2' }" data-toggle="tab" href="#tab55">Centralized Alarm Management</div>
                  <div @click="activeBtn2 = 'btn3'"  :class="{activeButton: activeBtn2 === 'btn3' }" data-toggle="tab" href="#tab6">Alarm to Work Order</div>
                  <div @click="activeBtn2 = 'btn4'"  :class="{activeButton: activeBtn2 === 'btn4' }" data-toggle="tab" href="#tab7">ML-based RCA</div>
                  <div @click="activeBtn2 = 'btn5'"  :class="{activeButton: activeBtn2 === 'btn5' }" data-toggle="tab" href="#tab8">Automated Controls</div>
              </div>
            </div>
            <div class="col-md-6  col-sm-12">
              <div class="fc-img-src tab-content">
                <div id="tab5" class="tab-pane fade in active">
                    <img
                      src="/images/whatsnew/wn-banner3.png"
                      style="max-width:600px;width:100%;"
                    />
                  </div>
                  <div id="tab55" class="tab-pane fade" >
                    <img
                      src="/images/fdd-1.png"
                      style="max-width: 550px;width: 100%;"
                    />
                  </div>
                  <div id="tab6" class="tab-pane fade">
                    <img
                      src="/images/po-5.png"
                      style="max-width:600px;width:100%;"
                    />
                  </div>
                  <div id="tab7" class="tab-pane fade">
                    <img
                      src="/images/fdd-4.png"
                      style="max-width:600px;width:100%;"
                    />
                  </div>
                  <div id="tab8" class="tab-pane fade">
                    <img
                      src="/images/rebuild/dynamic_hvac.png"
                      style="max-width:570px;width:100%;"
                    />
                  </div>

              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad fc-reverse feature-2" >
            <div class="col-md-6  col-sm-12">
              <div class="fc-img-src tab-content">
                <div id="tab9" class="tab-pane fade in active">
                    <img
                      src="/images/rebuild/command_center.png"
                      style="max-width:600px;width:100%;"
                      class="img-1"
                    />
                  </div>
                  <div id="tab10" class="tab-pane fade">
                    <img
                      src="/images/vendor-management/cs-1.jpg"
                      style="max-width:600px;width:100%;"
                    />
                  </div>
                  <div id="tab11" class="tab-pane fade">
                    <img
                      src="/images/whatsnew/his-run.png"
                      style="max-width:600px;width:100%;"
                    />
                  </div>
                  <div id="tab12" class="tab-pane fade">
                    <img
                      src="/images/whatsnew/wn-feb-feature-4.png"
                      style="max-width:600px;width:100%;"
                    />
                  </div>

              </div>
            </div>
            <div class="col-md-6">
              <div class="fc-workplace-subhead">
                Real-time reporting across equipment, utility, and maintenance—the implications are big
              </div>
              <div class="w-feature-desc feature-desc">
               There’s no need to ask multiple teams/people to get key data-driven insights and
               KPIs anymore—how to benchmark energy usage across sites? Should we repair/replace
               the asset? Key friction points for occupant discomfort? Now track actuals against
               budgets, performance against usage, across equipment, across systems, and across
               sites. A platform that finally puts you in complete control of your building
               performance!
              </div>
              <div class="w-feature-button">
                  <div @click="activeBtn3 = 'btn1'"  :class="{activeButton: activeBtn3 === 'btn1' }"  data-toggle="tab" href="#tab9">Operational Command Center</div>
                  <div @click="activeBtn3 = 'btn2'"  :class="{activeButton: activeBtn3 === 'btn2' }" data-toggle="tab" href="#tab10">Real-time Reporting</div>
                  <div @click="activeBtn3 = 'btn3'"  :class="{activeButton: activeBtn3 === 'btn3' }" data-toggle="tab" href="#tab11">Historical Analysis</div>
                  <div @click="activeBtn3 = 'btn4'"  :class="{activeButton: activeBtn3 === 'btn4' }" data-toggle="tab" href="#tab12">Cost Impact</div>
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad feature-2">
            <div class="col-md-6">
              <div class="fc-workplace-subhead">
               Want to be on top of building conditions before experience is hurt?
              </div>
              <div class="w-feature-desc feature-desc">
                In an industry that has traditionally struggled with underperforming systems,
                there’s no easy way to be on top of building health. And when things break...
                you scramble to fix in time to meet compliance/reputation. Our turnkey platform
                offers real-time visibility over your building’s vast array of equipment, assets,
                and systems — so you can make confident decisions as needed much before issues escalate
                to showstoppers or equipment wear and tear.
              </div>
              <div class="w-feature-button">
                  <div @click="activeBtn1 = 'btn1'"  :class="{activeButton: activeBtn1 === 'btn1' }" data-toggle="tab" href="#tab1">Real-time IoT Integration</div>
                  <div @click="activeBtn1 = 'btn2'"  :class="{activeButton: activeBtn1 === 'btn2' }" data-toggle="tab" href="#tab2">Continuous Commissioning</div>
                  <div @click="activeBtn1 = 'btn3'"  :class="{activeButton: activeBtn1 === 'btn3' }" data-toggle="tab" href="#tab3">IAQ & Comfort Monitoring</div>
                  <div @click="activeBtn1 = 'btn5'"  :class="{activeButton: activeBtn1 === 'btn5' }" data-toggle="tab" href="#tab13">Tenant Billing</div>
              </div>

            </div>
            <div  class="col-md-6 col-sm-12">
              <div class="fc-img-src tab-content">
                <div id="tab1" class="tab-pane fade in active">
                    <img
                      src="/images/bms-2.png"
                      style="max-width:600px;width:100%;"
                    />
                  </div>
                  <div id="tab2" class="tab-pane fade">
                    <img
                      src="/images/whatsnew/wn-banner1.png"
                      style="max-width:600px;width:100%;"
                    />
                  </div>
                  <div id="tab3" class="tab-pane fade">
                    <img
                      src="/images/whatsnew/heatmap-enchanced.png"
                      style="max-width:600px;width:100%;"
                    />
                  </div>
                  <div id="tab13" class="tab-pane fade">
                    <img
                      src="/images/wee9.png"
                      style="max-width:600px;width:100%;"
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fc-case-study" style="padding:0">
        <div class="col-md-6 case-study-band">
          <div class="fc-case-study-content">
            <div>Facilities become<br/>
            future-ready with Facilio</div>
          <p>Iconic tower optimizes building resources and <br/>costs with real-time operational intelligence</p>
            <div class="case-study-link"><a href="https://facilio.com/resources/case-study/connected-skyscraper/">Explore Case Studies</a></div>
         </div>

       </div>
        <div class="col-md-6" style="padding: initial;">
          <img src="/images/case-study/icdb.jpg" />


        </div>
      </div>
      <section class="fc-home-other-feature">
        <div class="container">
          <h2 style="font-size:36px">
            Your ready-to-deploy buffet of O&M efficiencies, served with
            modularity
          </h2>
          <div class="row">
            <div class="col-md-4 col-xs-12 col-sm-6 col-lg-4">
              <nuxt-link to="/operations-software/maintenance-management">
                <div class="fc-home-other-feature-card fc-home-card-1">
                  <h3>Maintenance and Facility Management </h3>
                  <p>
                    Bring context, flexibility, and mobility to portfolio maintenance
                  </p>
                </div>
              </nuxt-link>
            </div>
            <div class="col-md-4 col-xs-12 col-sm-6 col-lg-4">
              <nuxt-link to="/workplace-management">
                <div class="fc-home-other-feature-card fc-home-card-3">
                  <h3>Workplace Management</h3>
                  <p>
                    Secure the future of CRE with connected, engaging workplaces
                  </p>
                </div>
              </nuxt-link>
            </div>
            <div class="col-md-4 col-xs-12 col-sm-6 col-lg-4">
              <nuxt-link to="/operations-software/service-management">
                <div class="fc-home-other-feature-card fc-home-card-2">
                  <h3>Tenant Servicing & Service Management</h3>
                  <p>
                    Stand out for transparency and best-in-class tenant services
                  </p>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>

      <!---property-feature-2-->
    </div>
    <Footer />
  </div>
</template>

<script>
import GetStartedButton from "../../components/GetStartedButton";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default {
    data: function () {
        return{
activeBtn1:'btn1',
activeBtn2:'btn1',
activeBtn3:'btn1',
        }
    },
  components: {
    GetStartedButton,
    Navbar, Footer,
  },

  head() {
    return {
      title: "Connected Optimization | Facilio",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Remove the guesswork out of operations and maintenance with real-time data | Facilio Connected Optimization"
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Connected Optimization | Facilio"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Remove the guesswork out of operations and maintenance with real-time data | Facilio Connected Optimizationt"
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content:
            "https://facilio.com/images/og-images/connected-otmztion.png"
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/operations-software/connected-optimization"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Connected Optimization | Facilio"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Remove the guesswork out of operations and maintenance with real-time data | Facilio Connected Optimization"
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content:
            "https://facilio.com/images/og-images/connected-otmztion.png"
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/operations-software/connected-optimization"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/operations-software/connected-optimization"
        }
      ],
      script: [
        { src: "../../js/page.js" },
        { src: "../../js/waypoints.min.js" },
        { src: "../../js/includes.js" }
      ]
    };
  }
};
</script>

<style scoped>
.w-feature-button > div {
    width: fit-content;
    height: 36px;
    padding: 8px 13px 10px 15px;
    border-radius: 4px;
    text-transform: uppercase;
    color: #6200ee;
    border: solid 1px rgba(0, 0, 0, 0.12);
    font-family: 'ProximaNovaSemibold';
    margin-right: 10px;
    margin-top: 13px;
    cursor: pointer;
    transition: 0.1s ease-out;
    user-select: none;
}
.fc-case-study {
  position: relative;
    background-size: cover;
    height: auto;
    background: -webkit-linear-gradient(
132deg,#29036a,#7864ff);
    width: 100%;
    padding: 0;
    margin-top: 100px;
    display: flow-root;
}

.customer-img {
  border-radius: 110px;
  max-width: 100px;
  display: block;
  border: 1px solid #cdcdcd;
}
.customer-review {
      font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.54px;
    color: #324056;
    margin: 15px 0px 0px 0px;
    font-family: 'ProximaNovaRgRegular';
    font-size: 15px;
}
.customer-review >span {
         font-family: 'ProximaNovaSemibold';
    display: block;
    font-size: 17px;

}
.case-study-banner-left {
max-width: 350px;
    margin-top: -90px;
    margin: -90px auto 0 auto;
       background-color: #fff;
    padding:  25px 35px;
    box-shadow: 0 4px 4px rgb(0 0 0 / 25%), 0 1px 8px 1px hsl(0deg 0% 69% / 26%);
    border-radius: 12px;
    position: relative;

}
.case-study-link>a:hover::after {
margin-left: 15px;
}
.case-study-link > a{
  font-size: 17px;
    font-family: 'ProximaNovaRgRegular';
    margin: 45px 0px 0px 0px;
    color: #fff  !important;
    cursor: pointer;
    display: inline-block;
    margin-bottom: 20px;
    transition: 0.2s ease-out;
}
.case-study-link >a::after {
  content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    position: absolute;
    margin-top: 6px;
    margin-left: 10px;
    opacity: 1;
    transition: .3s ease;
    background: url(/images/icons/navbar-white-back.png) 50%/contain no-repeat;

}
.case-study-banner-left::after {
  content: "";
    position: absolute;
    top: -19px;
    right: 35px;
    width: 55px;
    height: 40px;
    background: url(https://webstatic.chargebee.com/assets/web/434/images/footer/cb-quote-white.svg) no-repeat;
    background-size: contain;
}
.feature-desc {
  max-width: 600px !important;
  padding-bottom: 20px;
}
.w-feature-button >div:hover {
    background-color:  rgba(98, 0, 238, 0.04);
}
.w-feature-button {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;

}
.fc-case-study-content {
      margin: auto;
    text-align: center;
    font-family: 'ProximaNovaBold';
    font-size: 36px;
    color: #fff;
}
.img-jpeg-format {
  width: 50px !important;
}
.fc-case-study-content > p {
  color: #fff;
    font-family: 'ProximaNovaRgRegular';
    font-size: 22px;
    text-align: center;
    margin-top: 25px;
}
.fc-customer-logos {
  margin: auto !important;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px !important;
}
.case-study-band {
       -webkit-box-ordinal-group: 2;
     -webkit-order: 1;
    -ms-flex-order: 1;
     order: 1;
     padding-top: 30px;
}
.fc-customer-logos > img {
width: 90px;
}
@media screen and (max-width: 600px) {
  .fc-home-other-feature-card {
    min-height: 180px !important;
  }
}
@media screen and (max-width:500px) {
.w-feature-button >div {
    font-size: 11px;
    height: 32px;
}
@media screen and (max-width:974px) {
 .fc-case-study-content{
        margin-top: 35px;
        font-size: 25px;
}
.fc-case-study-content > p {
  font-size: 16px;
}
.fc-case-study-content > a {
font-size: 16px;
}
.fc-customer-logos > img {
  width: 55px;
}
.large-image {
  width: 35px !important;
}
.fc-case-study {
  display: grid !important;
}
.case-study-banner-left {
  margin-top: 0 !important;
}
}

}
.activeButton {
    border: solid 1px #6200ee !important;
  background-color: rgba(98, 0, 238, 0.12) !important;
}
@media screen and (min-width:975px){
  .fc-customer-logos > img {
      margin-left: -50px;
    margin-right: -50px;
}
.img-1 {
    padding-top: 50px;
}
.feature-2 {
  margin-top: 40px !important;
}
.case-study-band {
    padding-top: 100px !important;
}

.fc-case-study-content {
  text-align: left  !important;
  margin-left: 70px;
}
.fc-case-study-content > p {
  text-align: left;
}
}
@media screen and (max-width:770px) {
  .overview-page-headings >h1 > span {
    font-size: 18px  !important;
  }

}
</style>

