<template>
  <div class="productPage btn-shade">
    <div id="productPage"></div>
    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <div class="mask"></div>

      <div class="news-hero topless">
        <div class="container">
          <div
            class="col-xs-12 col-sm-12 col-md-12 col-lg-12 pL0 mobile-new-hero"
            style="margin-top: 2rem; margin-bottom: 6rem;"
          >
            <h1 class="text-center grow-H">
              Grow with our
              <br />
              <span class="partner-txt">Partner</span> Program!
            </h1>
          </div>
        </div>
      </div>
      <section class="become-partner-tab">
        <ul class="nav nav-tabs">
          <li class="active">
            <a data-toggle="tab" href="#home">North America</a>
          </li>
          <li>
            <a data-toggle="tab" href="#menu4">UK & Europe</a>
          </li>
          <li>
            <a data-toggle="tab" href="#menu1">MIDDLE EAST</a>
            
          </li>
          <li>
            <a data-toggle="tab" href="#menu3">ANZ</a>
          </li>
          <li>
            <a data-toggle="tab" href="#menu2">ROW</a>
          </li>
          
        </ul>

        <div class="tab-content">
          <div id="menu1" class="tab-pane fade">
            <!-- section -->
            <div class="become-partner-comp-logo-con">
              <div class="icon-container">
                <!-- Feature row one start -->
                <div class="product-feature-row">
                  <PartnerCard
                    v-for="item in middleEastRow1"
                    v-bind:key="item.link"
                    v-bind:logo="item.logo"
                    v-bind:heading="item.heading"
                    v-bind:description="item.description"
                    v-bind:link="item.link"
                    v-bind:width="item.width"
                  />
                </div>
                <!-- Feature row one start -->

                <!-- Feature row two start -->
                <div class="product-feature-row">
                  <PartnerCard
                    v-for="item in middleEastRow2"
                    v-bind:key="item.link"
                    v-bind:logo="item.logo"
                    v-bind:heading="item.heading"
                    v-bind:description="item.description"
                    v-bind:link="item.link"
                    v-bind:width="item.width"
                  />
                </div>
                <!-- Feature row two start -->
                <div class="product-feature-row">
                  <PartnerCard
                    v-for="item in middleEastRow3"
                    v-bind:key="item.link"
                    v-bind:logo="item.logo"
                    v-bind:heading="item.heading"
                    v-bind:description="item.description"
                    v-bind:link="item.link"
                    v-bind:width="item.width"
                  />
                </div>

                <div class="product-feature-row">
                  <PartnerCard
                    v-for="item in middleEastRow4"
                    v-bind:key="item.link"
                    v-bind:logo="item.logo"
                    v-bind:heading="item.heading"
                    v-bind:description="item.description"
                    v-bind:link="item.link"
                    v-bind:width="item.width"
                  />
                </div>
                <!-- Feature row two start -->
              </div>
            </div>
            <!-- section -->
          </div>
              
          <div id="home" class="tab-pane fade in active">
            <!-- section -->
            <div class="become-partner-comp-logo-con">
              <div class="icon-container">
                <!-- Feature row one start -->
                <div class="product-feature-row">
                  <PartnerCard
                    v-for="item in north"
                    v-bind:key="item.link"
                    v-bind:logo="item.logo"
                    v-bind:heading="item.heading"
                    v-bind:description="item.description"
                    v-bind:link="item.link"
                    v-bind:width="item.width"
                  />
                </div>
                  <!-- Feature row one start -->
              </div>
            </div>
            <!-- section -->
          </div>

          <div id="menu2" class="tab-pane fade">
            <!-- section -->
            <div class="become-partner-comp-logo-con">
              <div class="icon-container">
                <!-- Feature row one start -->
                <div class="product-feature-row">
                  <PartnerCard
                    v-for="item in indiaRow1"
                    v-bind:key="item.link"
                    v-bind:logo="item.logo"
                    v-bind:heading="item.heading"
                    v-bind:description="item.description"
                    v-bind:link="item.link"
                    v-bind:width="item.width"
                  />
                </div>
                <!-- Feature row one start -->

                <!-- Feature row two start -->

                <!-- Feature row two start -->
              </div>
            </div>
            <!-- section -->
          </div>
          <div id="menu3" class="tab-pane fade">
            <div class="become-partner-comp-logo-con">
              <div class="icon-container">
                <div class="product-feature-row">
                  <PartnerCard
                    v-for="item in anz"
                    v-bind:key="item.link"
                    v-bind:logo="item.logo"
                    v-bind:heading="item.heading"
                    v-bind:description="item.description"
                    v-bind:link="item.link"
                    v-bind:width="item.width"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="menu4" class="tab-pane fade">
            <div class="become-partner-comp-logo-con">
              <div class="icon-container">
                <div class="product-feature-row">
                  <PartnerCard
                    v-for="item in europeRow1"
                    v-bind:key="item.link"
                    v-bind:logo="item.logo"
                    v-bind:heading="item.heading"
                    v-bind:description="item.description"
                    v-bind:link="item.link"
                    v-bind:width="item.width"
                  />
                </div>
                <div class="product-feature-row">
                  <PartnerCard
                    v-for="item in europeRow2"
                    v-bind:key="item.link"
                    v-bind:logo="item.logo"
                    v-bind:heading="item.heading"
                    v-bind:description="item.description"
                    v-bind:link="item.link"
                    v-bind:width="item.width"
                  />
                </div>
                <div class="product-feature-row">
                  <PartnerCard
                    v-for="item in europeRow3"
                    v-bind:key="item.link"
                    v-bind:logo="item.logo"
                    v-bind:heading="item.heading"
                    v-bind:description="item.description"
                    v-bind:link="item.link"
                    v-bind:width="item.width"
                  />
                </div>
                <div class="product-feature-row">
                  <PartnerCard
                    v-for="item in europeRow4"
                    v-bind:key="item.link"
                    v-bind:logo="item.logo"
                    v-bind:heading="item.heading"
                    v-bind:description="item.description"
                    v-bind:link="item.link"
                    v-bind:width="item.width"
                  />
                </div>
                <div class="product-feature-row">
                  <PartnerCard
                    v-for="item in europeRow5"
                    v-bind:key="item.link"
                    v-bind:logo="item.logo"
                    v-bind:heading="item.heading"
                    v-bind:description="item.description"
                    v-bind:link="item.link"
                    v-bind:width="item.width"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import PartnerCard from "../../components/PartnerCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
export default {
  data() {
    return {

      north: [
        {
          logo: "tridium.png",
          heading: "Tridium Inc",
          description:
            "3951 Westerre Parkway, Suite 350<br/> Richmond, VA 23233",
          link: "https://www.tridium.com/",
          width: "130px",
        },
        {
          logo: "kfi.png",
          heading: "KFI Engineering, USA",
          description: "670 County Road B West<br/> St. Paul, MN 55113",
          link: "https://www.kfi-eng.com/",
          width: "50px",
        },
        {
          logo: "integro.png",
          heading: "Integro Associates Global Inc.",
          description:
            "1309 Coffeen Avenue STE 1200, Sherdian, Wyoming, 82801 USA.",
          link: "https://www.integrosoftwares.com/",
          width: "110px",
        },
        {
          logo: "conectric.png",
          heading: "Conectric Networks, LLC",
          description: "8400 Miramar Rd. San Diego, CA 92126",
          link: "https://www.conectric.com/",
          width: "200px",
        },
        {
          logo: "techdad.png",
          heading: "Techmentity",
          description: "119 West 23rd Street Suite 404, New York, NY 10011",
          link: "https://www.techdad.com/",
          width: "200px",
        },
        {
          logo: "siemens_logo.png",
          heading: "Siemens",
          description: "Energy Performance Services Building Technologies Division 9707 S. Sandy Parkway, Sandy, UT 84070",
          link: "https://siemens.com/",
          width: "100px",
        },
        {
          logo: "distech_logo.png",
          heading: "Distech Controls",
          description: "4205 place de JavaBrossard, Quebec Canada, J4Y 0C4",
          link: "https://www.distech-controls.com/",
          width: "100px",
        },
        {
          logo: "mri_logo.png",
          heading: "MRI Software",
          description: "28925 Fountain Parkway Solon, OH 44139 United States",
          link: "https://www.mrisoftware.com/",
          width: "100px",
        },
        {
          logo: "assetsoft_Logo.png",
          heading: "Assetsoft - Toronto",
          description: "3950 14th Avenue, Suite 401, Markham, Ontario L3R 0A9",
          link: "https://www.assetsoft.biz/",
          width: "100px",
        },
         
      ],     
      middleEastRow1: [
       
        {
          logo: "optima_logo.png",
          heading: "Green Optima",
          description: "P.O. Box. 115858 -<br/> Dubai - United Arab Emirates",
          link: "http://www.optimain.ae/",
          width: "100px",
        },
        {
          logo: "alpha_logo.png",
          heading: "Alpha Data",
          description:"Addax Tower, Level 26, Reem Island P.O.box 45384,Abu Dhabi, UAE",
          link: "https://www.alpha.ae/",
          width: "49px",
        },
         {
          logo: "Innvohub logo.jpeg",
          heading: "InnvoHub IT Solutions",
          description:"Address: Jeddah, Saudi Arabia, Salamah Dist. Sary St. Al Saadi Building Number: 2720, Additional Number: 6259, Office Number: 201",
          link: "http://www.innvohub.com/",
          width: "100px",
        },
      ],
      middleEastRow2: [
        {
          logo: "exedra-logo.png",
          heading: "Exedra",
          description:"Salmiya, Block 3, Yousif Al Qinai Street,Building 7, Office A.",
          link: "http://exedra-kw.com/",
          width: "80px",
        },
         {
          logo: "elitser_logo_3.png",
          heading: "Elitser Tech",
          description:"No.1403-04, Grosvenor Business Tower, Barsha Heights, P.O.Box:454597, Dubai, UAE",
          link: "https://elitser-me.com/",
          width: "49px",
        },
        {
          logo: "bdas_logo.jpeg",
          heading: "BDAS Smart",
          description:"Saudi Arabia, Riyadh, Anas bin Malik rd,St. 281, Bldg. B3, 1st Floor, 4th Office, 13326 KSA.",
          link: "http://www.bdassmart.com/",
          width: "100px",
        },
       
      ],
      middleEastRow3: [
        {
          logo: "moro_logo.png",
          heading: "Moro Hub",
          description:"Moro Hub, Garn Al Sabkha Street, Dubai Marina, Dubai UAE ",
          link: "https://www.morohub.com/",
          width: "140px",
        },
        {
          logo: "ANACITY-FINAL-LOGO.jpg",
          heading: "Anacity",
          description:"ANAROCK Group Business Services Pvt. Ltd. 506, Building 12, Bay Square, Business Bay – Dubai, UAE ",
          link: "http://anacity.com/",
          width: "85px",
        },
       
       
      ],
      middleEastRow4: [
       
      ],
      indiaRow1: [
        {
          logo: "value-ibms.png",
          heading: "Value IBMS Solutions Pvt. Ltd., India",
          description:
            "59-30, Ramakrishna Nagar,<br/>Valasaravakkam,<br/>Chennai, Tamil Nadu 600087",
          link: "http://www.valueibms.com/",
          width: "auto",
        },
        {
          logo: "smc.png",
          heading: "SM Clean",
          description:
            "Plot No.18, 3rd Floor, DDA Community Center,Okhla Industrial Area, Phase-I, New Delhi – 110020",
          link: "https://servicemastercleanindia.com/",
          width: "auto",
        },
        {
          logo: "pd7.png",
          heading: "PD7 Technology",
          description:
            "Av. Henrique Valadares,<br/>23 – 9º<br/> Andar Centro - RJ - CEP 20231-030",
          link: "http://pd7.com.br/",
          width: "130px",
        },
      ],
      anz: [
        {
          logo: "controlworks_logo.png",
          heading: "ControlWorks",
          description:
            "Unit 2, 39 King Road Hornsby NSW 2077",
          link: "https://www.controlworks.com.au/",
          width: "130px",
        },
      ],
      europeRow1: [
        {
          logo: "calosi.png",
          heading: "Calosi Group",
          description:
            "Sede Firenze Sud Via Rocca Tedalda, 17 50136 Firenze (FI)",
          link: "http://www.calosigroup.it/",
          width: "130px",
        },
        {
          logo: "steb.jpg",
          heading: "STEB Srl",
          description: "Via della Madonna Alta, 138A - 06128 Perugia - Italy",
          link: "http://www.stebsrl.it/",
          width: "130px",
        },
        {
          logo: "bludis.png",
          heading: "Bludis",
          description: "Via Adriano Olivetti 24 00131, Rome",
          link: " https://www.bludis.it/",
          width: "100px",
        }
      ],
      europeRow2: [
        {
          logo: "rtc.jpeg",
          heading: "RTC Spa",
          description: "Via Thomas Alva Edison, 31, 37059 Zevio – VR – Italy",
          link: "http://www.rtc-spa.it/",
          width: "130px",
        },
        {
          logo: "c2h.png",
          heading: "C2H Environmental Engineering",
          description: "56 Panepistimiou Avenue, Athens, 10678 – Greece",
          link: "https://www.c2h.gr/en/",
          width: "65px",
        },
        {
          logo: "smartnode.png",
          heading: "SmartNode Kft",
          description: "Lándzsa u. 21  --  4030 Debrecen - Hungary",
          link: "http://www.smartnode.hu/",
          width: "100px",
        },
      ],
      europeRow3: [
        {
          logo: "brainWise.jpg",
          heading: "Brainwise Srl",
          description:
            "Via della Borsa,<br /> 1A – 31033 Castelfranco Veneto – TV - Italy",
          link: "http://brainwise.it/",
          width: "130px",
        },
        {
          logo: "belimo.png",
          heading: "Belimo",
          description: "Brunnenbachstrasse 1, Hinwil, ZH 8340, CH",
          link: "https://www.belimo.com/",
          width: "130px",
        },
        {
          logo: "wspace.jpg",
          heading: "W.Space FM",
          description: "Rua dos Bacalhoeiros 4, 1º Andar 1100-070 Lisboa",
          link: "https://wspacefm.com/",
          width: "120px",
        },
      ],
      europeRow4: [
        {
          logo: "evogy.png",
          heading: "Evogy",
          description: "Via Pastrengo, <br /> 9,24068 Seriate (BG) - Italy",
          link: "https://www.evogy.it/",
          width: "100px",
        },
        {
          logo: "esimalta.png",
          heading: "Esimalta",
          description:
            "53, Old Railway Track St Venera, <br /> SVR 9010 - Malta",
          link: "https://www.esimalta.com/",
          width: "100px",
        },
        {
          logo: "cmc.png",
          heading: "CMC Group",
          description:
            "Avenida de San Luis, 25 - 28033 <br /> - Madrid - Spain",
          link: "https://www.grupocmc.es/",
          width: "100px",
        },
      ],
      europeRow5: [
        {
          logo: "ambercom.png",
          heading: "Ambercom",
          description: "Via Camuzzoni 1 - 37138 Verona",
          link: "http://www.ambercom.it/it/",
          width: "150px",
        }
      ],
    };
  },
  components: {
    PartnerCard,
    Navbar,
    Footer,
  },
  head() {
    return {
      title: "Facilio Partner Program",
      meta: [
        {
          hid: "decription",
          name: "description",
          content:
            "Facilio partners get results by helping CREs transform their facilities experience. Learn how you can build a consistent recurring revenue.",
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Facilio Partner Program",
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Facilio partners get results by helping CREs transform their facilities experience. Learn how you can build a consistent recurring revenue.",
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "https://facilio.com/images/og-images/become-partner.png",
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/partners/partner-directory",
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Facilio Partner Program",
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Facilio partners get results by helping CREs transform their facilities experience. Learn how you can build a consistent recurring revenue.",
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "https://facilio.com/images/og-images/become-partner.png",
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/partners/partner-directory",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/partners/partner-directory",
        },
      ],
      script: [{ src: "../../js/includes.js" }],
    };
  },
};
</script>

<style>
.become-partner-tab .nav-tabs > li.active :after {
  content: "";
  display: block;
  position: absolute;
  background: #ff3185;
  top: 38px;
  width: 40%;
  height: 3px;
  opacity: 0.8;
}
.partner-feature-row, .product-feature-row {
       width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding-bottom: 60px;
   
}
   .become-partner-tab .nav-tabs:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #f0f1f5;
    text-align: center;
    margin-left: 86px;
    margin-right: auto;
}
.become-partner-tab .nav-tabs > li.active :after {
    content: "";
    display: block;
    position: absolute;
    background: #ff3185;
    top: 38px;
    width: 89%;
    height: 3px;
    opacity: 0.8;
}

.nav-tabs>li.active a:after {
    left: 8px;
}
.become-partner-tab .nav-tabs:after {
    content: "";
    display: block;
    width: 71%;
    height: 1px;
    background: #f0f1f5;
    text-align: center;
    margin-left: 228px;
    margin-right: auto;
}

@media screen and (max-width: 600px) {
  .become-partner-tab .nav-tabs > li.active :after {
    content: "";
    display: block;
    position: absolute;
    background: #ff3185;
    top: 36px;
    width: 35%;
    opacity: 0.8;
  }
  .become-partner-tab .nav-tabs > li > a {
    font-family: ProximaNovaSemibold !important;
    padding: 10px 15px !important;
    font-size: 12px !important;
    
  }
}

.become-partner-tab .nav-tabs {
  max-width: 100% !important;
  padding-right: 225px !important;
}

.become-partner-tab .nav-tabs > li > a {
  font-family: ProximaNovaSemibold !important;
  padding: 10px 15px !important;
  font-size: 14px !important;
}
@media screen and ( max-width: 380px){
 .become-partner-tab .nav-tabs {
  padding-right: 0px !important;
}
  
}
</style>
