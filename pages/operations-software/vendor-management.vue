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
            Synchronize in-house and contracted operations.<br/> Forge happier contractors.
            </h1>
            <p style="max-width:611px;">
              The end goal for every property operations team is one—less boilerplate,
              more business value. Managing it in-house or via contract doesn’t change
              it one bit. Steer both vendor and internal performance towards hassle-free
              building management experiences, with an integrated view of both.
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
                <h6 class="productHeadPink text-uppercase">
                  AUTOMATE RISK TO SECURE
                </h6>
              <div class="fc-workplace-subhead">
               Drive vendor onboarding and compliance on cruise control
              </div>
              <div class="w-feature-desc feature-desc">
                Enlisting your contractors and vendors can be process-heavy ,
                especially with stringent compliance procedures. With Facilio, move new vendors
                quickly to risk-free status for faster service turnaround. Stay in complete control
                by effectively processing all documentation requirements in a single location.
              </div>
              <div class="w-feature-button">
                  <div @click="activeBtn1 = 'btn1'"  :class="{activeButton: activeBtn1 === 'btn1' }" data-toggle="tab" href="#tab1">Contractor Tracking</div>
                  <div @click="activeBtn1 = 'btn2'"  :class="{activeButton: activeBtn1 === 'btn2' }" data-toggle="tab" href="#tab2">Vendor-Site Mapping</div>
                  <div @click="activeBtn1 = 'btn4'"  :class="{activeButton: activeBtn1 === 'btn4' }" data-toggle="tab" href="#tab4">Centralized Policy Management</div>
                  <div @click="activeBtn1 = 'btn3'"  :class="{activeButton: activeBtn1 === 'btn3' }" data-toggle="tab" href="#tab3">Acknowledgements & Exceptions</div>
                  <div @click="activeBtn1 = 'btn5'"  :class="{activeButton: activeBtn1 === 'btn5' }" data-toggle="tab" href="#tab5">Compliance Automation</div>
              </div>
            </div>
            <div class="col-md-6  col-sm-12">
              <div class="fc-img-src tab-content">
                <div id="tab1" class="tab-pane fade in active">
                    <img
                      src="/images/vendor-management/1.png"
                      style="max-width:600px;width:100%;"
                    />
                  </div>
                  <div id="tab2" class="tab-pane fade">
                    <img
                      src="/images/vendor-management/2.png"
                      style="max-width:600px;width:100%;"
                    />
                  </div>
                  <div id="tab3" class="tab-pane fade">
                    <img
                      src="/images/vendor-management/5.png"
                      style="max-width:600px;width:100%;"
                    />
                  </div>
                  <div id="tab4" class="tab-pane fade" >
                    <img
                      src="/images/vendor-management/3.png"
                      style="max-width: 600px;width: 100%;"
                    />
                  </div>
                  <div id="tab5" class="tab-pane fade">
                    <img
                      src="/images/vendor-management/4.png"
                      style="max-width:600px;width:100%;"
                    />
                  </div>

              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad fc-reverse feature-2" >
            <div class="col-md-6  col-sm-12">
              <div class="fc-img-src tab-content">
                <div id="tab6" class="tab-pane fade in active">
                    <img
                      src="/images/vendor-management/8.png"
                      style="max-width:550px;width:100%;"
                    />
                  </div>
                  <div id="tab7" class="tab-pane fade">
                    <img
                      src="/images/vendor-management/9.png"
                      style="max-width:600px;width:100%;"
                    />
                  </div>
                  <div id="tab8" class="tab-pane fade">
                    <img
                      src="/images/vendor-management/10.png"
                      style="max-width:600px;width:100%;"
                    />
                  </div>

              </div>
            </div>
            <div class="col-md-6">
                <h6 class="productHeadPink text-uppercase">
                  WIN-WIN RELATIONSHIPS
                </h6>
              <div class="fc-workplace-subhead">
                Elevate vendor operational expertise—with a dedicated portal, performance visibility, and more
              </div>
              <div class="w-feature-desc feature-desc">
                Experience service delivery transformation when you heighten
                your engagement with your vendors—communicate in real-time through a dedicated
                vendor portal. With our performance analysis dashboard, gain incredible value
                for your investments by leveraging your best-performing vendors and enhance client
                satisfaction
              </div>
              <div class="w-feature-button">
                  <div @click="activeBtn2 = 'btn1'"  :class="{activeButton: activeBtn2 === 'btn1' }" data-toggle="tab" href="#tab6">Vendor Portal</div>
                  <div @click="activeBtn2 = 'btn2'"  :class="{activeButton: activeBtn2 === 'btn2' }" data-toggle="tab" href="#tab7">Automated Best Practices</div>
                  <div @click="activeBtn2 = 'btn3'"  :class="{activeButton: activeBtn2 === 'btn3' }" data-toggle="tab" href="#tab8">Performance Benchmarks</div>
              </div>
            </div>
          </div>

          <div class="row fc-wrapper-pad feature-2">
            <div class="col-md-6">
                <h6 class="productHeadPink text-uppercase">
                  SEAMLESS HANDOVER
                </h6>
              <div class="fc-workplace-subhead">
               The new operational paradigm for keeping vendors in the loop, wherever you need them
              </div>
              <div class="w-feature-desc feature-desc">
               Execute a smarter way to transition open issues in a real-time environment
               and update status on the go. Deploy a vendor-neutral operations ecosystem that
               equips every worker with the right information to perform tasks effectively—creating
               whip-smart operational partners.
              </div>
              <div class="w-feature-button">
                  <div @click="activeBtn3 = 'btn1'"  :class="{activeButton: activeBtn3 === 'btn1' }"  data-toggle="tab" href="#tab9">Mobile Work Orders/ Permit</div>
                  <div @click="activeBtn3 = 'btn2'"  :class="{activeButton: activeBtn3 === 'btn2' }" data-toggle="tab" href="#tab10">Worker Check-in/Check-out</div>
                  <div @click="activeBtn3 = 'btn3'"  :class="{activeButton: activeBtn3 === 'btn3' }" data-toggle="tab" href="#tab11">Work Order Comments/ Contextual Info  </div>
              </div>

            </div>
            <div  class="col-md-6 col-sm-12">
              <div class="fc-img-src tab-content">
                <div id="tab9" class="tab-pane fade in active">
                    <img
                      src="/images/vendor-management/12.png"
                      style="max-width:556px;width:100%;"
                    />
                  </div>
                  <div id="tab10" class="tab-pane fade">
                    <img
                      src="/images/vendor-management/13.png"
                      style="max-width:600px;width:100%;"
                    />
                  </div>
                  <div id="tab11" class="tab-pane fade">
                    <img
                      src="/images/vendor-management/14.png"
                      style="max-width:589px;width:100%;"
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="background:-webkit-linear-gradient(132deg,#29036a,#7864ff);margin-top:100px;">
      <div class="fc-case-study fc-container">
        <div class="col-md-6 case-study-band">
          <div class="fc-case-study-content">
            <div>Facilities become<br/>
            future-ready with Facilio</div>
          <p>How Quality FM automated property operations at <br/>scale for frictionless customer experience?</p>
            <div class="case-study-link"><a href="https://facilio.com/resources/case-study/quality-fm/">Explore Case Studies</a></div>
         </div>

       </div>
        <div class="col-md-6">
         <div class="case-study-banner-left">
           <img
            class="customer-img"
           src="/images/vendor-management/logos-and-headshots/sumith-qfm.png" />
          <br/>
           <p class="customer-review" style="margin-top:5px">We knew silo-ed software wasn't the way anymore. We had to modernize our operations management and make it easier for managers to stay one step ahead of portfolio performance.</p>
           <p class="customer-review"><span>Sumith Sukumaran</span>
Operations Manager, Quality Group
</p>
         </div>
         <div class="fc-customer-logos">
           <img
           
           style="width: 45px;"
            class="large-image"
           src="/images/tenant-management/logos-and-headshots/Bright-FM-copy.png"
            />
            <img
            
           src="/images/tenant-management/logos-and-headshots/Brookfield_logo.png"
            />
            <img
            
           src="/images/tenant-management/logos-and-headshots/Fidum_logo.png"
            />
            <img
            
           src="/images/tenant-management/logos-and-headshots/Investa_logo_black.png"
            />
            <img
            
            style="width: 45px;"
            class="large-image"
           src="/images/tenant-management/logos-and-headshots/Quality-group-logo.png"
            />
            </div>
        </div>
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
              <nuxt-link to="/operations-software/vendor-management">
                <div class="fc-home-other-feature-card fc-home-card-5">
                  <h3>Vendor Management</h3>
                  <p>
                   Drive synchronized vendor performance and SLA tracking, across portfolio
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
      title: "Vendor Management | Facilio",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Manage vendor and operational performance from a single platform | Facilio Vendor Management"
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Vendor Management | Facilio"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Manage vendor and operational performance from a single platform | Facilio Vendor Management"
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content:
            "https://facilio.com/images/og-images/vendor-mngmnt.png"
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/operations-software/vendor-management"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Vendor Management | Facilio"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Manage vendor and operational performance from a single platform | Facilio Vendor Management"
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content:
            "https://facilio.com/images/og-images/vendor-mngmnt.png"
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/operations-software/vendor-management"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/operations-software/vendor-management"
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

<style>
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
    padding: 40px 0;
    width: 100%;
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
    font-family: 'ProximaNovaSemibold';
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
.feature-2 {
  margin-top: 40px !important;
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

