<template>
  <div class="aboutPage btn-shade">
    <div id="productPage"></div>
    <div class="myPage">
      <div id="fc-header"><Navbar /></div>

      <div class="mask"></div>

      <section class="banner" style="z-index: -5 !important;">
        <div class="bannerCont text-center mobile-pad-20">
          <h2 class="bannerHead aboutBhead" style="z-index: -10 !important;">
           To help properties operate efficiently and sustainably
            <br />
          </h2><br />
          <h4 class="bannerHeadQuote mobile-pad">
            To simplify your life by unifying all aspects of property operations
            and maintenance 
            <!-- <br /><br />
            To be the only solution you will need to manage your properties
            efficiently and sustainably
            <br /><br />
            To use AI to transform the way properties have been managed
            traditionally
            <br /><br />
            To make property operations and maintenance easy, intelligent and
            sustainable
            <br /><br />
            To transform property operations with data driven intelligence / AI
            driven data -->
          </h4>
          <div class="dots-wrap clearfix center-block">
            <div class="red-dot"></div>
            <div class="blue-dot"></div>
          </div>         
        </div>
      </section>
      <section class="story_block">
        <div class="container storyContent">            
            <div class="abtQuesContent whyContent pull-left">
              <p class="primeDesc">
                Back in the early 1990s, when the telecom boom took over the world,
                telcos were faced with a problem that was growing increasingly complex.
                How were they going to manage and maintain the thousands of towers that
                they had across the globe? Facilio's founders were early movers in this
                space who answered this question with a product that encompassed
                everything from predictive maintenance to remote fix of these towers.
              </p>
              <p class="primeDesc">
                They then dabbled in sectors ranging from A to C using their knowledge of
                IoT to improve the way things were being done when real estate caught
                their attention. The problem was big and the opportunity bigger. CMMS
                systems were helpful but the fact remained that they were built for
                manufacturing and oil & gas industries. They were just being repurposed
                and used for real estate. The systems did not work for their real estate
                users, the latter had to change to fit the system. Unsurprisingly, this leaves
                many problems unresolved.
              </p>
              <p class="primeDesc">
                With their extensive research and experience in using technology to solve
                large problems, our founders developed an operations and maintenance 
                solution specifically for real estate with cutting edge IoT technology. If you
                have a portfolio of buildings that you are looking to manage, check out
                what we have built for you here. We promise, you'll love it. 

                <strong>
                  Sphistication of telecom + Futuristic Iot
                </strong>
              </p>
            </div>
            <div class="cardBg why pull-left">
              <div class="cardImage">
                <img src="https://media.gettyimages.com/photos/startup-business-team-in-office-picture-id618963256?s=612x612" height="auto"/>
              </div>              
              <div class="dots-wrap">
                <div class="red-dot"></div>
                <div class="blue-dot"></div>
              </div>
            </div>
          </div>
      </section>
      <div class="aboutContent">
          <div class="container">
            <div class="cardBg what pull-left">
              <h3 class="cardBgText" style="font-size: 70px;">what we offer</h3>                
            </div>
            <div class="abtQuesContent whatContent pull-left">
              <p class="primeDesc primeDescTop">
                  <a href="#">
                      Connected CMMS - Workflow automation, Tenant and
                      Visitor Management, Portfolio maintenance
                  </a>                
              </p>
              <p class="primeDesc primeDescTop">
                  <a href="#">
                      Sustainability - Energy Saving, Sustainability
                      Management, Reporting and more
                  </a>                                 
              </p>
              <p class="primeDesc primeDescTop">
                  <a href="#">
                      Connected buildings - Predictive Maintenance,
                      Analytics and Insights, Remote monitoring and control
                  </a>                
              </p>                            
              <div class="dots-wrap">
                <div class="red-dot"></div>
                <div class="blue-dot"></div>
              </div>
            </div>
          </div>
        </div>  
        <section>
          <div class="snapshot">
            <div class="container">
              <div class="progressBar">
                <radial-progress-bar :diameter="200"
                       :completed-steps="41"
                       :total-steps="100"                       
                       >
                  <p>41%</p>
                </radial-progress-bar>
                <h4>assets managed</h4>
              </div>
              <div class="progressBar">
                <radial-progress-bar :diameter="200"
                       :completed-steps="37"
                       :total-steps="100">
                  <p>37%</p>
                </radial-progress-bar>
                <h4>no of customers</h4>
              </div>
              <div class="progressBar">
                <radial-progress-bar :diameter="200"
                       :completed-steps="29"
                       :total-steps="100">
                  <p>29%</p>
                </radial-progress-bar>
                <h4>Sqft covered</h4>
              </div>
              <div class="progressBar">
                <radial-progress-bar :diameter="200"
                       :completed-steps="4.8"
                       :total-steps="5">
                  <p>4.8M</p>
                </radial-progress-bar>
                <h4>Hours saved</h4>
              </div>
            </div>
          </div>
        </section>    
      <secion>
        <div class="investors">
          <h3 class="">Our investors</h3>
          <div class="container">
            <div class="invLogo">
              <img src="https://i0.wp.com/dragoneer.com/wp-content/uploads/2018/11/dig-logo_high-res-cropped.jpg?resize=710%2C568&ssl=1" alt="" />
            </div>
            <div class="invLogo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Accel_%28Partners%29_2015_logo.png" alt="" />
            </div><br />
            <div class="invLogo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeCuZUdtw0XH3cBDcSZVUxn9mHrG9TTBdixZzzb6_OjHWxsbVIhx-w1je8Rgm5pKwcgdo&usqp=CAU" alt="" />
            </div>
            <div class="invLogo">
              <img src="https://cdn.dividendmax.com/companies/brookfield-infrastructure-corp.png" alt="" />
            </div>
          </div>
        </div>        
      </secion>
      <section>
        <!-- Latest update -->
        <vue-timeline-update
          :date="new Date('2017-02-26')"
          title="v2.2.0 - Initial D"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatem praesentium doloremque, molestiae culpa architecto veniam voluptatibus quisquam sed. Facere repellendus saepe, modi ipsam molestiae id qui aliquid hic eveniet?"
          category="announcement"
          icon="code"
          color="red"
        />
        <!-- Another update -->
        <vue-timeline-update
          :date="new Date('2016-11-22')"
          title="v2.1.0 - Hunter X Hunter"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatem praesentium doloremque, molestiae culpa architecto veniam voluptatibus quisquam sed. Facere repellendus saepe, modi ipsam molestiae id qui aliquid hic eveniet?Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatem praesentium doloremque, molestiae culpa architecto veniam voluptatibus quisquam sed. Facere repellendus saepe, modi ipsam molestiae id qui aliquid hic eveniet?"
          category="announcement"
          icon="code"
          color="turquoise"
        />

        <!-- Yet another update -->
        <vue-timeline-update
          :date="new Date('2016-09-30')"
          title="v2.0.0 - Ghost in the Shell"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatem praesentium doloremque, molestiae culpa architecto veniam voluptatibus quisquam sed. Facere repellendus saepe, modi ipsam molestiae id qui aliquid hic eveniet?"
          category="announcement"
          icon="code"
          color="white"
          is-last
        />
      </section>
    </div>
  <Footer />

  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RadialProgressBar from 'vue-radial-progress';

export default {  
  components: {
    Navbar, Footer, RadialProgressBar
  },
  head() {
    return {
      title: "About Facilio - The Multi-site Facilities Management Software",
      meta: [
        {
          hid: "decription",
          name: "description",
          content:
            "Facilio delivers the best technology that creates smart facilities experience for everyone interacting with a building, in real-time"
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
          hid: "fb-share-title",
          property: "og:title",
          content: "About Us | Transforming The Facilities Experience | Facilio"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Learn about our company. Discover how Facilio is transforming the facilities experience, who we are, and our mission to help the built environment achieve real-time sustainability."
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content:
            "https://s3-us-west-2.amazonaws.com/ws-facilio.com/assets/images/og-title.jpg"
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/about"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "About Us | Transforming The Facilities Experience | Facilio"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Learn about our company. Discover how Facilio is transforming the facilities experience, who we are, and our mission to help the built environment achieve real-time sustainability."
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content:
            "https://s3-us-west-2.amazonaws.com/ws-facilio.com/assets/images/og-title.jpg"
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/about"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/about"
        }
      ]
    };
  }
};
</script>

<style>
.howDesc span {
  font-size: 1.4rem !important;
}

.howDesc {
  font-size: 1.4rem !important;
}
.aboutBhead {
  font-size: 54px !important;
}
.story_block {
  margin: 200px;
}
.storyContent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.cardImage {
  width: 400px;
  height: 500px;
}
.cardImage img{
  width: 100%;
  height: 100%;
}
.teamContent .container .row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.module {
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.snapshot {
  margin: 150px 0;
}
.snapshot .container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.progressBar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.progressBar p{
  font-size: 3rem;
}
.investors{
  margin: 100px;
}
.investors h3 {
  font-size: 2.5rem;
  text-align: center;
}
.investors .container{
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 70px;
}
.invLogo {
  width: 240px;
  height: auto;
}
.invLogo img{
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 600px) {
  .aboutPage .bannerCont {
    padding-top: 130px;
    font-size: 2rem;
  }
  .aboutBhead {
    font-size: 28px !important;
  }
  .aboutPage .bannerHead {
    font-size: 1.6rem;
    line-height: 42px;
    margin-bottom: 30px;
  }

  .bannerCont .dots-wrap {
    margin-top: 10px !important;
    width: 13%;
    margin: auto;
  }

  .aboutPage .bannerHeadQuote {
    font-size: 1.5rem;
  }
  .story_block {
  margin: 0px;
}
.storyContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}


  .myPage .navbar-default {
    z-index: 11;
  }

  .aboutPage.down .myPage.down .navbar-default {
    background: #fff !important;
  }
}

.fc-dropdown .about-nav > ul > li > a {
  color: #fff;
}
</style>
