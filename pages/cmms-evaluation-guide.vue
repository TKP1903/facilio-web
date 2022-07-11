<template>
<div>
    <div id="productPage"></div>
      <div id="fc-header">
        <Navbar />
      </div>
      <div class="mask"></div>
      <div style="margin-top: 75px">

 <div class="head-band">
   <div class="container">
<div class="col-md-5"><img class="fc-head-band-img" src="/images/emms/cmms.png"></div>
<div class="col-md-7 band-right-scope">
  <div class="heading-band-1">Connected CMMS Evaluation Guide 
(Free Worksheet Inside)</div>
<div class="fc-head-band-para">A Facilio guide to choose the right CMMS for your building portfolio—that can help you simplify and automate processes, enhance stakeholder visibility, and unlock fully connected operations. This ebook will guide you through how.</div>
    <Cmmsinput/>

</div>
   </div>
 </div>
  

<div style="padding: 50px 0px;" class="container">
<div class="col-md-12">
  <div class="col-md-6 band-2-left-card">
    <p class="p3">Buying CMMS is like buying a car—it’s an intense process, and often driven by very unique preferences. Choosing the right CMMS is a complex web of decision covering your org’s unique considerations 
      such as operational processes to be adapted, hierarchy of goals to be met, compatibility with current tech stack, budget and more. This Guide will arm you with the tools and tips to keep in mind to find a solution 
      that best suits your evolving O&M needs. </p><br>

      <p class="p4">Connected CMMS Evaluation Guide puts buyers in driver’s seat with–</p>
    <div class="b-points">
      <div class="b-point">
        <img src="../static/images/emms/check.png" id="check-img" />
        <p style="margin-top: 10px;">Reimagined perspective: Why CMMS evaluation needs to 
            evolve into a comprehensive, and client-centric process</p>
      </div>
      <div class="b-point">
        <img src="../static/images/emms/check.png" id="check-img" />
        <p style="margin-top: 10px;">Buyer-driven Framework: Map your current & evolving O&M processes to CMMS requirements</p>
      </div>
      <div class="b-point">
        <img src="../static/images/emms/check.png" id="check-img" />
        <p style="margin-top: 10px;">Downloadable worksheet to Assess ROI and Validate Your Top Needs</p>
      </div>
      <div class="b-point">
        <img src="../static/images/emms/check.png" id="check-img" />
        <p style="margin-top: 10px;">Confidence in your final CMMS choice: Best practices & 
          insights from Facilio</p>
      </div>
    </div>
  </div>
  <div class="col-md-6 slider-band">
      <p class="p9">The world is changing, so should your
            CMMS evaluation process.</p>
    <div class="cc2-1">
       <vueper-slides  arrows-inside bullets-outside :visible-slides="1" slide-multiple :gap="3"
                            :slide-ratio="4 / 4" :dragging-distance="200"
                            :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 2 } }" >
        <vueper-slide v-for="i in images" :key="i" :image="i.url" style="background-size: contain; background-position: center; background-repeat: no-repeat;"/>
        </vueper-slides>
    </div>
       
  </div>
</div>
</div>
<div class="quote-container">
  <div class="qc1">
      <div class="qc1-1">
          <img src="../static/images/emms/has.jpg" id="has"/>
          <p class="p5">Hanie Abdul Sathar</p>
          <p class="p6">Director, Eurohealth Systems</p>
      </div>
      <div class="qc1-2">
          <p class="p7">A Powerful Framework that Puts CMMS Buyers in Control</p>
          <p id="dq">“</p>
          <p class="p8">Staying ahead of the game involves using technology efficiently to drive intelligent decisions, better monitoring, minimizing human intervention and increasing asset efficiency. Narrowing down the problem and then understanding how to solve it is the best way to choose the right technology needed to improve your O&M processes</p>
          <p id="dq" style="margin-left: 90%">”</p>
      </div>
  </div>

</div>
<Footer/>
</div>
</div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Cmmsinput from '../components/form/Cmmsinput.vue'
export default {
  name: 'App',
   head() {
            return {
                title: "Connected CMMS Evaluation Guide",
                meta: [{
                        hid: "description",
                        name: "description",
                        content: "A Facilio guide to choose the right CMMS for your building portfolio—that can help you simplify and automate processes, enhance stakeholder visibility, and unlock fully connected operations."
                    },
                    {
                        hid: "fb-share-title",
                        property: "og:title",
                        content: "Connected CMMS Evaluation Guide"
                    },
                    {
                        hid: "fb-share-description",
                        property: "og:description",
                        content: "A Facilio guide to choose the right CMMS for your building portfolio—that can help you simplify and automate processes, enhance stakeholder visibility, and unlock fully connected operations."
                    },
                    {
                        hid: "fb-share-image",
                        property: "og:image",
                        content: "/images/og-images/resources.png"
                    },
                    {
                        hid: "fb-share-url",
                        property: "og:url",
                        content: "https://facilio.com/resources"
                    },
                    {
                        hid: "twitter-meta",
                        name: "twitter:card",
                        content: "summary_large_image"
                    },
                    {
                        hid: "twitter-title",
                        name: "twitter:title",
                        content: "Connected CMMS Evaluation Guide"
                    },
                    {
                        hid: "twitter-description",
                        name: "twitter:description",
                        content: " A Facilio guide to choose the right CMMS for your building portfolio—that can help you simplify and automate processes, enhance stakeholder visibility, and unlock fully connected operations."
                    },
                    {
                        hid: "twitter-image",
                        name: "twitter:image",
                        content: "/images/og-images/resources.png"
                    },
                    {
                        hid: "twitter-url",
                        name: "twitter:url",
                        content: "https://facilio.com/resources"
                    }
                ],
                link: [{
                    rel: "canonical",
                    href: "https://facilio.com/resources"
                }],
            };
        },
  components: { VueperSlides, VueperSlide,Navbar,Cmmsinput,Footer },
  data(){
    return{
    images: [
        { url: require('../static/images/emms/carousel-img/art1.jpg'), alt: 'img-1' },
        { url: require('../static/images/emms/carousel-img/art2.jpg'), alt: 'img-2' },
        {url: require('../static/images/emms/carousel-img/art3.jpg'), alt: 'img-3' },
        {url: require('../static/images/emms/carousel-img/art4.jpg'), alt: 'img-4' }
      ]
    
  }
 
  },
   methods :{
  
  }
}
</script>

<style>
@font-face {
  font-family:  ProximaNova;
  src: url('../static/images/emms/fonts/proximanova.otf');
}
  .head-band{
    background-image: url("../static/images/emms/bg1.png");
    width: 100%;
    background-repeat:no-repeat;
    background-size: 100% 100%;
    padding: 50px 0px 25px;
  }
  .image-cmms{
    width: 444px;
    height: 601.7px;
    margin-left: 0px;
    margin-top: 80px;
    /* border: 2px solid white; */
  }
  .band-right-scope {
        margin-top: 110px;
    padding-left: 30px;
  }
  .fc-head-band-para {
     font-family: 'ProximaNovaRgRegular';
    font-size: 18px;
    color: #fff;
    margin-top: 30px;
    line-height: 1.6;
    letter-spacing: 0.4px;
  }
  .band-2-left-card {
    border-right: 1px solid;
    padding-right: 30px;
  }

  .heading-band-1 {
        font-family: 'ProximaNovaSemibold';
    font-size: 38px;
    color: #fff;
  }
  .fc-head-band-img {
        max-width: 480px;
  }
  .ic1{
    max-width:1100px;
    /* border: 2px solid yellow ; */
    display: flex;
    justify-content: center;
  }
  .ic2{
    margin-top: 200px;
    margin-left: 40px;
     /* border: 2px solid white; */
     width:50%;
    
  }

  .ic2-1{
      margin-top: 50px;
  }
  .b2{
    width: 100%;
    /* border: 2px solid red; */
    display: flex;
    justify-content: center;
  }
  .b-points > p{
      font-family: ProximanNova;
  }
  .b-point{
             padding: 3px 0px;

  }
  .carousel-container{
    background-color: white;
    border: none;
    height: 790px;
    display: flex;
    justify-content: center;
    width: 1100px;
    margin-top: 20px;
    border: none  ;
    
  }

  .cc1{
    height:740px;
    width: 50%;
    border-right: 0.6px solid #adadad;
    padding-right: 50px;
    /* text-align: center; */
    /* border: 2px solid black; */
  }
   .cc2{
    height:690px;
    width: 50%;
    border: none;
    /* border-right: 2px solid black; */
  }
  .cc2-1{
    margin-top: 20px;
    margin-left: 50px;
    height: 100%;
  }
  .p1{
    font-family:  ProximaNova;
    font-size: 42px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: white;
    margin-bottom: 30px;
  }
  .p2{
      font-family: ProximaNova;
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: normal;
      text-align: left;
      color: white;
  }
  .p3{
    font-family: "ProximaNovaRgRegular";
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: left;
    margin-top: 20px;
  }
  .p4{
    font-family: "ProximaNovaSemiBold";
    font-size: 20px;
  }
  .p5{
    font-family: ProximaNova;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: center;
    color: #2df0f9;
  }
  .p6{
    font-family: ProximaNova;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
  }
  .p7{
    font-family: ProximaNova;
    font-size: 28px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: justify;
    color: #2df0f9;
  }
  .p8{
    font-family: ProximaNova;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: justify;
    color: #fff;
    margin:0;
  }
  .p9{
      font-family: ProximaNova;
      font-size: 22px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #000;
      margin-top: 20px;
      margin-left: 30px;
  }
  
  
  /* #cmms{
  width: auto;
  height: auto;
  
  transform: scale(1);
} */

.b-point{
  display:flex;
  align-items: center;
}

#check-img{
  margin-right: 15px;
  height: 20px;
}
.quote-container{
  height: 390px;
  width: 100%;
  border: none;
  /* border: 2px solid #000; */
  display: flex;
  justify-content: center;
}
.qc1{
  height:340px;
  width: 1100px;
  border: none;
  margin-left: 10px;
  margin-top: 40px;
  background-image: url("../static/images/emms/bqb.png");
  background-repeat:no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
  /* border: 2px solid black; */
}
#has{
  width: 120px;
  height: 120px;
  border-radius: 100px;
  border: solid 3px #ff3184;
  margin-top: 20px;
}
.qc1-1{
  border: none;
  margin-top: 18px;
  margin-bottom: 18px;
  margin-left: 17px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}
.qc1-2{
  width: 820px;
  height: 300px;
  margin-top: 18px;
  margin-bottom: 2px;
  margin-right: 17px;
  border: none;
  padding-top: 40px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
}

#dq{
  font-family: ProximaNova;
  font-size: 40px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #ff3184;
  margin: 0;
  
}
#btn{
  width: 223px;
  height: 52px;
  background-color: #ff3184;
  border: none;
  font-family: ProximaNova;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  
}
#input-field{
  width: 257px;
  height: 50px;
  border: none;
}

@media screen and (max-width: 999px){

.input-cover{
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.image-cmms{
  margin-top: 150px;;
  margin-left: 50px;
}
.ic1{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ic2{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0px;
  margin-right: 30px;
}
.p1{
  text-align: center;
}
.p2{
  text-align: center;
}
.p9{
  margin-left: 10px;
}
.carousel-container{
  display: flex;
  height: auto;
  flex-direction: column;
  width: 100%;
  /* height: 1380px; */
}
.cc1{
  width: 100%;
  border-right: none;
  /* border-bottom: 2px solid black; */
  height: auto;
  padding-left: 20px;
}
.cc2{
  width: 100%;
}
.cc2-1{
 margin-left: 0px;
}
.quote-container{
  height: 100%;
  width: auto;
  margin-top: 50px;
}
.qc1{
  height:900px;
  width:auto;
  /* border: 2px solid red; */
  margin-left: 0px;
  background-image: url("../static/images/emms/bqb-potrait.png");
  background-repeat:no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.qc1-1{
  /* border: 2px solid white; */
  margin-top: 18px;
  margin-bottom: 18px;
  margin-left: 17px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
}
.qc1-2{
  width: auto;
  height: auto;
  margin-top: 18px;
  margin-bottom: 2px;
  padding-left: 70px;
  padding-right: 50px;
  /* border: 2px solid white; */
  display: flex;
  flex-direction: column;
  
}
@media (max-width: 400px){
.qc1{
  width:auto;
  
  /* word-break: break-all */
}
.image-cmms{
  margin-right: 80px;
  padding-left: 80px;
}
.ic2{
  /* width:400px ;
  border:2px solid red;
  margin-right: 40px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 390px;
  
}
.cc1{
  padding-left: 20px;
}
.cc2-1{
 margin-left: 0px;
}
.p9{
  margin-left: 15px;
}
.qc1{
  margin-left: 0px;
}
.qc1-2{
  margin-bottom:30px;
  padding-bottom: 30px;
  
}
}
}
@media screen and (max-width:991px){
  .fc-head-band-img {
    display: none;
  }
  .band-right-scope {
    text-align: center;
  }
  .head-band {
    padding: 0px;
  }
  .heading-band-1 {
    font-size: 30px;
  }
  .fc-head-band-para {
    font-size: 17px;
  }
  .band-2-left-card {
    border: none;
  }
  .qc1 {
    display: block;
    height: 800px;
  }
  .qc1-1 {
    margin: auto;
    margin-top: 30px;
  }

}
@media screen and (max-width:500px) {
  .heading-band-1 {
    font-size: 26px;
  }
  .slider-band {
      margin-top: 40px;

}
}
  
</style>