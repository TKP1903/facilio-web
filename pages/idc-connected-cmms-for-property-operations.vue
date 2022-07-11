<template>
  <div class="productPage btn-shade">
    <div class="mask"></div>
    <div id="productPage"></div>
    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <section>
        <div class="head-banner-scope">
          <div class="container idc-banner " style="width:100vw;">
            <div class="idc-header">
              <div class="container" style="padding-left:0">
                  <img
                    class="idc-logo"
                    src="/images/IDC_LOGO_Header_White_Color.svg"
                  />
                  <div
                    class="hero-banner-header"
                    style=" max-width: 690px;padding: 0;margin-top: 35px;"
                  >
                    IDC Study: How CMMS is Evolving Beyond Asset Management & Maintenance
                  </div>
                  </div>
                </div>
            <div>
              
                <div class="hero-banner-sub banner-sub scoped-css"
                >
                  We teamed up with IDC Analyst Juliana Beauvais to unearth how Connected CMMS is helping solve complex property operations challenges. This study arms O&M leaders with a modern yet practical approach to optimize spend and boost performance.
                </div>
                <div
                  class="hero-banner-sub scoped-css"
                  style="max-width: 650px !important;"
                >
                  “With the demands on property owners, service providers, and occupiers, effective property operations can't be achieved on paper or with a hodgepodge of disconnected, unrelated, and untraceable tools.“
                </div>
                <div style="margin-top:40px;display:flex;align-items:center;">
                  <div>
                    <img
                      style="    max-width: 110px;    border: 0.5px solid #fff;    border-radius: 60px;"
                      src="/images/JulianaBeauvaisPhoto1.jpeg"
                    />
                  </div>

                  <div style="margin-left:35px;">
                    <div class="profile-det">Juliana Beauvais</div>
                    <div class="profile-det-span" style="margin-top:6px;">
                      Research Manager,
                    </div>
                    <div class="profile-det-span">
                      Enterprise Asset Management and Smart Facilities
                    </div>
                    <div class="profile-det-span">IDC</div>
                  </div>
                </div>
            </div>
          </div>
          <div class="col-md-5 form-scope">
            <div
              class="fc-right-details"
              style=" background: #fff;border: 2.5px solid rgba(29, 24, 108, 0.52);border-radius: 12px;padding:15px 0px;"
            >
              <Form />
            </div>
          </div>
        </div>
        <div class="page-2" >
        <div class="container" style="margin: 100px auto 280px">
          <div class="band-2-head-1">Inside you will find</div>
          <div>
            <ul style="max-width: 640px;margin-top: 10px;">
              <li class="sub-point-li">
                The truth about what's lacking in traditional CMMS systems
              </li>
              <li class="sub-point-li">
                How winning owner-operators reduce O&M complexities to curtail
                spend and deliver the best customer experiences across their
                portfolio.
              </li>
              <li class="sub-point-li">
                Practical ways to ambush silos inside and outside your
                organization, unlock transparency and efficiency across all
                facets of property operations
              </li>
            </ul>
          </div>
        </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Form from "../components/form/connected-cmms-form";

export default {
  components: {
    Navbar,
    Form,
  },
  head() {
    return {
      title:
        "IDC Study: Connected CMMS for Increasingly Complex Property Operations",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Equip and align your O&M teams with best practices to improve operational agility and efficiency across your portfolio.",
        },

        {
          hid: "fb-share-title",
          property: "og:title",
          content:
            "IDC Study: Connected CMMS for Increasingly Complex Property Operations",
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Equip and align your O&M teams with best practices to improve operational agility and efficiency across your portfolio.",
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "https://facilio.com/images/Group12.png",
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "http://facilio.com/idc-connected-cmms-for-property-operations",
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content:
            "IDC Study: Connected CMMS for Increasingly Complex Property Operations",
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Equip and align your O&M teams with best practices to improve operational agility and efficiency across your portfolio.",
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "https://facilio.com/images/Group12.png",
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/idc-connected-cmms-for-property-operations",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/idc-connected-cmms-for-property-operations",
        },
      ],
      script: [
        {
          src: "../../../js/page.js",
        },
        {
          src: "../../../js/waypoints.min.js",
        },
        {
          src: "../../../js/includes.js",
        },
        {
          src: "../../../js/position.js",
        },
      ],
    };
  },
};
</script>

<style>
.head-banner-scope {
  background: url(/images/landing-page-bg.png) center/contain no-repeat;
  width: 100%;
  background-position: 50%;
  max-width: none;
  background-size: cover;
  padding: 150px 0px 90px;
  margin-top: 75px;
}
.scoped-css {
  padding: 0 !important;
  max-width: 700px !important;
  margin-top: 30px;
}

.profile-det {
  font-family: "ProximaNovaSemibold";
  display: block;
  font-size: 17px;
  text-transform: uppercase;
  color: #fff;
}
.profile-det-span {
  font-size: 15px;
  font-family: "ProximaNovaRgRegular";
  letter-spacing: 0.83px;
  color: #fff;
}
.band-2-head-1 {
  font-family: "ProximaNovaBold";
  font-size: 24px;
}
.sub-point-li {
  font-family: "ProximaNovaRgRegular";
  font-size: 18px;
  padding: 10px 0px;
}
.form-scope {
  position: fixed;
  top: 120px;
  right: 30px;
}
.idc-banner{
   margin-top:-80px !important;
}
.idc-header{
  padding-top: 80px;
  padding-bottom: 40px;
  padding-left:0px;
  margin-top:-80px !important;
  position:fixed;
  display: block;
  right: 0px;
  width: 100%;
  background: url(/images/landing-page-bg1.png) center/cover no-repeat;
}
.page-2{
  height: 45vh;
}
.banner-sub{
  margin-top:195px
}
.hero-banner-header {
      
    font-family: 'ProximaNovaBold';
    color: #fff;
    line-height: 1.2;
    font-size: 35px;
    border-radius: 13px;
    max-width: 900px;
    padding: 15px 40px;
   }
    .hero-banner-sub {
    font-size: 19px;
    color: #fff;
    font-family: 'ProximaNovaRgRegular';
    font-weight: 500;
    padding: 15px 40px;
   }
@media screen and (max-width: 900px) { 
  .form-scope {
    position: sticky;
    margin: 50px 20px 10px;
  }
  .idc-logo {
    display: flex;
    margin: auto;
  }
}
@media screen and (max-width: 600px) {
  .idc-header{
    position: relative;
    padding-bottom: 0px;
    padding-left:0px;
    margin-top:0px !important;
    background:transparent;
    padding-top: 0px;
  }
  .banner-sub{
    margin-top: 10px !important;
  }
}
</style>
