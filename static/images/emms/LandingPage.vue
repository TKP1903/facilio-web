<template>
<div class="input-cover">
  <div class="image-cmms">
    <img id="cmms" src="./cmms.png" />
  </div>
  <div class="ic2">
    <p class="p1">Connected CMMS Evaluation Guide 
      (Free Worksheet Inside)</p>
      <p class="p2">A Facilio guide to choose the right CMMS for your building portfolio—that can help you simplify and automate processes, enhance stakeholder visibility, and unlock fully connected operations. This ebook will guide you through how.</p> 
    <input id="input-field" type="text" placeholder="Enter Work Email"/><button id="btn"  >GET THE GUIDE</button>
  </div>

</div>
<div class="carousel-container">
  <div class="cc1">
    <p class="p3">Buying CMMS is like buying a car—it’s an intense process, and often driven by very unique preferences. Choosing the right CMMS is a complex web of decision covering your org’s unique considerations 
      such as operational processes to be adapted, hierarchy of goals to be met, compatibility with current tech stack, budget and more. This Guide will arm you with the tools and tips to keep in mind to find a solution 
      that best suits your evolving O&M needs. </p><br>

      <p class="p4">Connected CMMS Evaluation Guide puts buyers in driver’s seat with–</p>
    <div class="b-points">
      <div class="b-point">
        <img src="./check.png" id="check-img" />
        <p>Reimagined perspective: Why CMMS evaluation needs to 
            evolve into a comprehensive, and client-centric process</p>
      </div>
      <div class="b-point">
        <img src="./check.png" id="check-img" />
        <p>Buyer-driven Framework: Map your current & evolving O&M processes to CMMS requirements</p>
      </div>
      <div class="b-point">
        <img src="./check.png" id="check-img" />
        <p>Downloadable worksheet to Assess ROI and Validate Your Top Needs</p>
      </div>
      <div class="b-point">
        <img src="./check.png" id="check-img" />
        <p>Confidence in your final CMMS choice: Best practices & 
          insights from Facilio</p>
      </div>
    </div>
  </div>
  <div class="cc2">
    <div class="cc2-1">
       <vueper-slides 3d fixed-height="600px" arrows-inside bullets-outside >
        <vueper-slide v-for="i in images" :key="i" :image="i.url" style="background-size: 100% auto; background-position: center; background-repeat: no-repeat;"/>
        </vueper-slides>
    </div>
       
  </div>
</div>
<div class="quote-container">
  <div class="qc1">
      <div class="qc1-1">
          <img src="./has.jpg" id="has"/>
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
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  name: 'App',
  components: { VueperSlides, VueperSlide },
  data(){
    return{
    images: [
        { url: require('../assets/carousel-img/art1.jpg'), alt: 'img-1' },
        { url: require('../assets/carousel-img/art2.jpg'), alt: 'img-2' },
        {url: require('../assets/carousel-img/art3.jpg'), alt: 'img-3' },
        {url: require('../assets/carousel-img/art4.jpg'), alt: 'img-4' }
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
  src: url('proximanova.otf');
}
  .input-cover{
    background-image: url("bg1.png");
    height:692px;
    width: 1100px;
    background-repeat:no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    
  }
  .image-cmms{
    width: 444px;
    height: 601.7px;
    margin-left: 80px;
    margin-top: 40px;
  }

  .ic2{
    margin-top: 130px;
  }
  .carousel-container{
    background-color: white;
    border: none;
    height: 690px;
    display: flex;
    justify-content: center;
    width: 1100px;
    border: 2px solid blue   ;
  }

  .cc1{
    height:690px;
    width: 50%;
    border-right: 1px solid black;
  }
   .cc2{
    height:690px;
    width: 50%;
    border: none;
    /* border-right: 2px solid black; */
  }
  .cc2-1{
    margin-top: 50px;
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
    font-family: ProximaNova;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: left;
  }
  .p4{
    font-family: ProximaNova;
    font-size: 20px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
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
  
  
  #cmms{
  width: 444px;
  height: 601.7px;
  object-fit: contain;
}

.b-point{
  display:flex;
  align-items: center;
}

#check-img{
  margin-right: 30px;
  height: 20px;
}
.quote-container{
  height: 390px;
  width: 1104px;
  border: none;
  border: 2px solid #000;;
}
.qc1{
  height:340px;
  width: 1100px;
  border: none;
  margin-left: 10px;
  margin-top: 40px;
  background-image: url("./bqb.png");
  background-repeat:no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
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
}
.qc1-2{
  width: 820px;
  height: 300px;
  margin-top: 18px;
  margin-bottom: 2px;
  margin-right: 17px;
  border: none;
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

@media (max-width: 999px){

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
}
.ic2{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.p1{
  text-align: center;
}
.p2{
  text-align: center;
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
}
.cc2{
  width: 100%;
}
.quote-container{
  height: 100%;
  width: auto;
}
.qc1{
  height:900px;
  width:auto;
  /* border: 2px solid red; */
  margin-left: 35px;
  background-image: url("./bqb-potrait.png");
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
  margin-right: 80px;;
}

}
}
  
</style>