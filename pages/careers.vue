<template>
  <div class="aboutPage btn-shade">
    <div id="productPage"></div>
    <div class="myPage">
      <div id="fc-header"><Navbar /></div>

      <div class="mask"></div>

      <section class="banner" style="z-index: -5 !important;">
        <div class="bannerCont text-center mobile-pad-20">
          <h2 class="bannerHead aboutBhead" style="z-index: -10 !important;">
            Explore opportunities            
          </h2>
          <h4 class="bannerHeadQuote mobile-pad">
            Make your next big move
          </h4>
          <div class="dots-wrap clearfix center-block">
            <div class="red-dot"></div>
            <div class="blue-dot"></div>
          </div>          
        </div>
      </section>
      <section class="abtContSect">                    
        <div class="teamContent">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-sm-6 col-sm-6">
                <h3 class="primeHead">What is Facilio ?</h3>                
                <div class="dots-wrap">
                  <div class="red-dot"></div>
                  <div class="blue-dot"></div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-sm-6 col-sm-6">
                <p class="primeDesc">
                    Facilio is a new age O&M platform for real estate/properties that transforms the way
                    buildings are being managed. We help O&M teams shift from traditional, tactical
                    facilities management towards a smarter, predictive facilities experience powered by ML
                    and IoT
                </p>
                <div class="careers-pege-apply" style="margin-top: 40px">
            <a href="/about" style="box-shadow:none" class="fc-start-btn"
              >Read More About Us</a
            >
          </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <section class="empbenifits_container">        
        <h1 class="empbenifits_header">Employee benefits</h1>
        <div class="empbenifits_block">
            <div class="empbenifits_card">
                <span class="empbenifits_icon">
                    <img src="https://www.gong.io/wp-content/themes/gong-2018/images/icons/icon-health-and-wellness.svg" height="40" width="40" /> 
                </span>
                <h5 class="empbenifits_title">Health & Wellness</h5>
                <ul class="empbenifits_points">
                    <li>Mental health support resources</li>
                    <li>Weekly wellness events</li>
                    <li>Work from home stipend</li>
                </ul>
            </div>
            <div class="empbenifits_card">
                <span class="empbenifits_icon">
                    <img src="https://www.gong.io/wp-content/themes/gong-2018/images/icons/icon-pto.svg" height="40" width="40" /> 
                </span>
                <h5 class="empbenifits_title">Paid Time Off</h5>
                <ul class="empbenifits_points">
                    <li>Generous vacation days</li>
                    <li>Quarterly recharge company shutdowns</li>
                    <li>Parental leave</li>
                </ul>
            </div>
            <div class="empbenifits_card">
                <span class="empbenifits_icon">
                    <img src="https://www.gong.io/wp-content/themes/gong-2018/images/icons/icon-financial-well-being.svg" height="40" width="40" /> 
                </span>
                <h5 class="empbenifits_title">Financial Well-being</h5>
                <ul class="empbenifits_points">
                    <li>Employee equity</li>
                    <li>Retirement savings & financial coaches</li>
                    <li>Commuter & parking benefits</li>
                </ul>
            </div>
            <div class="empbenifits_card">
                <span class="empbenifits_icon">
                    <img src="https://www.gong.io/wp-content/themes/gong-2018/images/icons/icon-professional-development.svg" height="40" width="40" /> 
                </span>
                <h5 class="empbenifits_title">Professional Development</h5>
                <ul class="empbenifits_points">
                    <li>raining & learning programs</li>
                    <li>Monthly lunch & learns</li>
                    <li>Mentor & buddy programs</li>
                </ul>
            </div>        
        </div>
      </section>
      <section class="office_container">
        <h1 class="empbenifits_header">Our Offices</h1>
        <div class="office_block">
            <div class="office_card">
                <div class="office_des">
                    <p>Berlin, Germany</p>
                    <a>Learn More</a>
                </div>
                <div class="office_img">
                    <img src="https://i.pinimg.com/736x/15/d9/67/15d967948e023fc8c0fc82cac551bd51.jpg" width="130" height="140" alt=""/>
                </div>
            </div>
            <div class="office_card">
                <div class="office_des">
                    <p>Berlin, Germany</p>
                    <a>Learn More</a>
                </div>
                <div class="office_img">
                    <img src="https://i.pinimg.com/736x/15/d9/67/15d967948e023fc8c0fc82cac551bd51.jpg" width="130" height="140" alt=""/>
                </div>
            </div>
            <div class="office_card">
                <div class="office_des">
                    <p>Berlin, Germany</p>
                    <a>Learn More</a>
                </div>
                <div class="office_img">
                    <img src="https://i.pinimg.com/736x/15/d9/67/15d967948e023fc8c0fc82cac551bd51.jpg" width="130" height="140" alt=""/>
                </div>
            </div>
            <div class="office_card">
                <div class="office_des">
                    <p>Berlin, Germany</p>
                    <a>Learn More</a>
                </div>
                <div class="office_img">
                    <img src="https://i.pinimg.com/736x/15/d9/67/15d967948e023fc8c0fc82cac551bd51.jpg" width="130" height="140" alt=""/>
                </div>
            </div>
        </div>
      </section>
      
    </div>
  <Footer />

  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default {
  components: {
    Navbar, Footer
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
.empbenifits_container, .office_container {
    margin: 100px;
}
.empbenifits_header{
    width: 100%;
    text-align: center;
    color: #140354;
    font-size: 50px;
    font-weight: bold;
}
.empbenifits_block {
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
.empbenifits_card{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 10px;
}
.empbenifits_title{
    font-size: 20px;
    color: #271370;
    margin-top: 20px;
}
.empbenifits_points{
    display: flex;
    flex-direction: column;
    gap: 3px;
    align-items: start;
    color: #442c9c;
    margin-top: 15px;
    margin-left: -10px; 
}
.office_block {
    margin: 100px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 50px;
}
.office_card {
    height: 140px;
    width: 400px;
    margin: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    background-color: #fff;
    border: 2px solid #989898;
    border-radius: 10px;
}
.office_des{
    height: 120px;
    padding-left: 10px; 
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;    
}
.office_des p{
    font-size: 27px;
    font-weight: bold;
}
.office_des a{
    font-size: 20px;
    cursor: pointer;
}
.office_img img{
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

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
  .empbenifits_container {
    margin: 0;
  }
  .office_container{
    margin: 0 2px;
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
