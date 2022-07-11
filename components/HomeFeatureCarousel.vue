<template>
      <div class="fc-feature-three-carousel hidden-xs hidden-sm">
          <h2>Benefit from our full platform or from combinations of our ready-to-deploy modules.</h2>
        <div class="fc-carousel-container">
          <ul class="nav nav-pills fc-feature-carousel-set">
            <li
              v-for="(tab, index) in tabs"
              :key="index"
              :class="{ 'activeTab' : activeTabIndex === index}"
              @click="changeTab(index)"
            >
              <a>
                <!-- <span>0{{ index + 1 }}.</span> -->
                <br />
                <div class="hide-mobile">{{ tab.header }} <nuxt-link to="/operations-and-maintenance"><img  style="width: 36px;position: absolute;right: -40px;top: 2px;" v-if="tab.src" :src="tab.src"/></nuxt-link></div> </a
              >
              <div :class="{ 'lineAnimation' : lineAnimation }">
                </div>
            </li>
          </ul>
          <div class="tab-content fc-three-carousel">
            <div
              class="tab-pane fade in active animated mT40" v-if="showAnimation"
              :class="{ 'fadeInNow' : showAnimation }"
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="fc-home-carousel-left">
                    <!-- <span>0{{ activeTabIndex + 1 }}.</span> -->
                    <h3>{{ activeTab.title }}</h3>
                    <p>
                    </p>
                  </div>
                  <div class="fc-cta">
          <div style="max-width: 100px;margin: auto;margin-left: 0;padding: 5px 0px 25px;">
            <img :src="activeTab.cta.img"
            style="border-radius: 100px;background: #fff;    max-width: 80px; margin-left:10px"/>
          </div>
          <div class="fc-cus-quotes">
            <p>
              {{activeTab.cta.quotes}}
              </p>
               <p class="customer-review" style="font-size: 14px"><span style="color: #30f0f9;">{{activeTab.cta.name}}</span>
{{activeTab.cta.head}}
</p>
          </div>
          </div>
                </div>
                <div class="col-md-6">
                  <img
                    class="fc-home-feature-image-3"
                    :src="activeTab.imgUrl"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>



export default {

  data() {
    return {
      showAnimation: true,
         lineAnimation:true,
      activeTabIndex: 0,
      tabs: [
        {
          header: "Operational & Maintenance Suite",
          title: "The Modern CMMS your teams  deserve",
          src:"/images/label-1.svg",
          desc:
            "Building portfolios are sick of bygone CMMS/CaFM software and its barriers to efficiency—not anymore. Built for the new digital world, our all-in-one platform is your freedom to say goodbye to silos, and complexities in building management.",
          imgUrl: "/images/operations-maintenance.webp",
          cta:{
            img:'/images/cus-1.webp',
            quotes:"“It was a blessing to migrate to Facilio just before the pandemic began in 2020. Flexibility to quickly adapt to the existing operational methods without any hassle and amazing support post-implementation—are two things that make Facilio stand out for us”",
            name:"Sumith Sukumaran",
            head:"Operations Manager, Quality Group"
          }
        },

        {
          header: "Sustainability Suite",
          title: "Built for sustainability, beyond one-time savings",
          desc:
            "Continuously close the energy efficiency gaps by embedding sustainability with your routine operations. Visualize and manage performance, predictively identify inefficiencies, and automate corrective actions on loop at the portfolio level.",
          imgUrl: "/images/sustainability.png",
          cta:{
            img:'/images/cus-3.png',
            quotes:"“Our industry is engaged in creating sustainable buildings and contributing to ESG goals through digital transformation. The synergy between Belimo's digital ecosystem and Facilio's O&M platform leverage available data to unlock the potential of connected buildings”",
            name:"Salvatore Cataldi ",
            head:"Global Strategic Building IoT Expert, Belimo"
          }
        },
        {
          header: "Connected Buildings",
          title:
            "Truly connect your operations tech stack—including IoT, BIM, and ERP Software",
          desc:
            "With a standalone CMMS, building management is siloed and fraught with unknowns. Facilio removes the guesswork out of operations and enables easy deployment of smart and fully connected solutions across the enterprise with no significant IT investment.",
          imgUrl: "/images/connected-bldng.png",
          cta:{
            img:'/images/cus-2.webp',
            quotes:"“We needed a scalable and flexible solution to unify all of our disparate building systems. Facilio’s thought leadership and innovative product portfolio stood out clearly & aligned well with our vision”",
            name:"Rob Devereux",
            head:"CEO, ICD Brookfield Place"
          }
        },

      ]
    };
  },
  computed: {
    activeTab() {
      let { activeTabIndex, tabs } = this;
      return tabs[activeTabIndex];
    }
  },
  watch: {
    activeTabIndex() {
      this.animateTabChange();
    }
  },
  mounted() {
    this.animationTimer = window.setInterval(() => {
      this.changeActiveIndex();
    }, 7500);
  },
  methods: {

    changeTab(index) {
      this.activeTabIndex = index;
      window.clearInterval(this.animationTimer);
      this.animationTimer = window.setInterval(() => {
        this.changeActiveIndex();
      }, 7500);
    },
    changeActiveIndex() {
      let { activeTabIndex } = this;
      let nextActiveTabIndex = (activeTabIndex + 1) % 3;
      this.$set(this, "activeTabIndex", nextActiveTabIndex);
    },
    turnOffAnimation(){
      this.lineAnimation=true;
   },
    animateTabChange() {
      this.showAnimation = false;
      this.$nextTick(() => {
        this.showAnimation = true;
      });
    },
  }
};
</script>
<style>
.fc-feature-carousel-set {
  margin-top: 40px;
}
.fc-feature-carousel-set > li.activeTab a span,
.fc-feature-carousel-set > li.activeTab a .hide-mobile {
  color: #ffffff;
}
.fc-cta {
    margin: 0px auto 0;
    background-color: #411888;
    padding: 25px 35px;
    max-width: 475px;
    display: flex;
    align-items: center;
    border-radius: 12px;
    position: relative;
    flex-direction: column;
}
.fc-feature-three-carousel {
  background-color: #492196;
  min-height:max-content;
  position: relative;
  padding: 50px 0px;
}
.fc-feature-carousel-set {
  position: relative !important;
}

.fc-feature-carousel-set li {
      padding: 0px 190px 0px 10px;
  margin: 0 auto;
  position: relative;
}
@media screen and (max-width:500px) {
  .fc-cus-quotes p{
    font-size: 15px !important;
  }
}

/* .fc-feature-carousel-set li i {
  position: absolute;
  left: 15%;
  width: 85%;
  top: 12px;
  bottom: 0;
  height: 2px;
  border-radius: 0;
  overflow: hidden;
  background-color: #ccc;
} */

.fc-carousel-container
{
    max-width:1200px;
    width:100%;
    margin:0 auto;
}

.fc-feature-three-carousel li .lineAnimation {
  content: "";
  position: absolute;
  top: 60px;
  left: 10px;
  bottom: 0;
  height: 2px;
  width: 0;
  max-width: 490px;
  border-radius: 15px;
  background: #cec2f9;
}

.fc-feature-three-carousel li.activeTab .lineAnimation {
  width: 100%;
  -webkit-transition: width 7s;
  -webkit-transition-timing-function: linear;
  transition: width 7s;
  transition-timing-function: linear;
}


/* .fadeInNow {
    opacity: 1;
    animation: fade 2s linear;
}
@keyframes fade {
  0%{ opacity: 0 }
  20% { opacity: 1 }
   40% { opacity: 1 }
   100% { opacity: 1 }
} */

.fadeInNow{
-webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  -moz-animation: fadeIn ease 1s;
  -o-animation: fadeIn ease 1s;
  -ms-animation: fadeIn ease 1s;
}
@keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
}
}

.fc-feature-three-carousel h2 {
    max-width: 1000px;
    font-family: Merriweather;
    font-size: 40px;
    font-weight: 300 !important;
    line-height: 55px;
    font-weight: 400;
    letter-spacing: .5px;
    text-align: center;
    color: #fff;
    margin: 0 auto;
    padding-top: 10px;
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
.case-study-banner-left::after {
  content: "";
    position: absolute;
    top: -19px;
    right: 35px;
    width: 55px;
    height: 40px;
    background: url(https://webstatic.chargebee.com/assets/web/434/images/footer/cb-quote-white.svg) no-repeat;
    fill: #fff !important;
    background-size: contain;
}
.fc-feature-three-carousel li a {
 font-family: "ProximaNovaSemiBold", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol" !important;
  font-size: 18px !important;
  padding: 0px !important;
   cursor: pointer;
  text-transform: none !important;
  text-align: left !important;
  color: #a795e9 !important;
}
.fc-feature-three-carousel li.activeTab a {
 font-family: "ProximaNovaSemiBold", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol" !important;
  font-size: 18px !important;
  padding: 0px !important;
  cursor: pointer;
  color: #ffffff !important;
  text-transform: none !important;
  text-align: left !important;
}

.fc-cus-quotes p {
      font-family: 'ProximaNovaRgRegular';
    font-size: 15px;
    color: #fff;
    letter-spacing: 0.6px;
    line-height: 1.72;
    padding: 10px 10px;
}
/* .fc-feature-carousel-set li.active a:after {
  content: "";
  display: block;
  position: absolute;
  background: #30f0f9;
  top: 60px;

  width:300px;
  height: 3px;
} */
.fc-feature-carousel-set li.activeTab a:focus {
 font-family: "ProximaNovaSemiBold", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol" !important;
  font-size: 18px !important;
  text-transform: none !important;
   cursor: pointer;
  text-align: left !important;
}
.fc-feature-carousel-set li a:focus {
 font-family: "ProximaNovaSemiBold", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol" !important;
  font-size: 18px !important;
  text-transform: none !important;
   cursor: pointer;
  color: #ffffff;
  text-align: left !important;
}

.nav-justified > li > a {
  border-radius: 0px;
}
.fc-feature-carousel-set:before {
  content: "";
  display: block;
  position: absolute;
  background: #6e53d3;
  bottom: -12px;
  width: 98%;
  height: 2px;
  left: 10px;
  opacity: 0.8;
}
.fc-feature-sub-nav li a {
 font-family: "ProximaNovaSemiBold", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol" !important;
  font-size: 18px !important;
  padding: 0px !important;
  text-transform: none !important;
  text-align: left !important;
  color: #a795e9 !important;
}

</style>
