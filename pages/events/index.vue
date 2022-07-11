<template>
  <div class="productPage btn-shade events-page">
    <div id="productPage"></div>
    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <div class="mask"></div>
      <section class="fc-events-sec">
        <h1>Let’s talk PropTech!</h1>
        <p>We’d love to meet you at these events happening around the world</p>
      </section>

       <section class="fc-events-area">
        <div class="fc-events-tab">
          <div class="container">
            <ul id="tabs" class="nav nav-tabs fc-tab-switch" role="tablist">
              <li class="active">
                <a href="#upcoming" role="tab" data-toggle="tab" style="color:#ff3184 !important">
                  <svg
                    class="tab-switch-img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25 25"
                  >
                    <path
                      d="M18.75 11.875a6.25 6.25 0 110 12.5 6.25 6.25 0 010-12.5zM17.361.625c.384 0 .695.31.695.694l-.001.417h3.75c.998 0 1.806.808 1.806 1.806v7.184a.694.694 0 11-1.389 0V8.124H1.388v13.195c0 .23.187.417.418.417h9.389a.694.694 0 110 1.389h-9.39A1.806 1.806 0 010 21.319V3.542c0-.998.808-1.806 1.806-1.806h3.749v-.417a.694.694 0 111.39 0l-.001.417h4.167v-.417a.694.694 0 111.389 0v.417h4.166v-.417c0-.383.312-.694.695-.694zm1.389 12.639a4.861 4.861 0 100 9.722 4.861 4.861 0 000-9.722zm0 1.641c.384 0 .694.311.694.695v3.03c0 .384-.31.694-.694.694h-2.02a.694.694 0 110-1.388l1.325-.001V15.6c0-.384.311-.695.695-.695zM5.555 3.125h-3.75a.417.417 0 00-.416.417l-.001 3.194h20.834V3.542a.417.417 0 00-.416-.417h-3.751v.417a.694.694 0 01-1.388 0l-.001-.417H12.5v.417a.694.694 0 11-1.389 0v-.417H6.944v.417a.694.694 0 11-1.388 0l-.001-.417z"
                    /></svg
                  >Upcoming Events
                </a>
              </li>
              <!-- <li ><a href="#pastevents" role="tab" data-toggle="tab">Past Events</a></li> -->
            </ul>

        

            <div class="tab-content fc-tab-content">
              <div
                role="tabpanel"
                class="tab-pane fade in active"
                id="upcoming"
              >
                <div class="row">
                  <EventCard
                    v-for="item in upcomingEvents"
                    v-bind:key="item.link"
                    v-bind:link="item.link"
                    v-bind:image="item.image"
                    v-bind:timestamp="item.timestamp"
                    v-bind:booth="item.booth"
                    v-bind:address="item.address"
                    v-bind:name="item.name"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="fc-events-area">
        <div class="fc-events-tab">
          <div class="container">
            <ul id="tabs" class="nav nav-tabs fc-tab-switch" role="tablist">
              <li class="active">
                <a href="#upcoming" role="tab" data-toggle="tab" style="color:#ff3184 !important">
                  <svg
                    class="tab-switch-img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25 25"
                  >
                    <path
                      d="M18.75 11.875a6.25 6.25 0 110 12.5 6.25 6.25 0 010-12.5zM17.361.625c.384 0 .695.31.695.694l-.001.417h3.75c.998 0 1.806.808 1.806 1.806v7.184a.694.694 0 11-1.389 0V8.124H1.388v13.195c0 .23.187.417.418.417h9.389a.694.694 0 110 1.389h-9.39A1.806 1.806 0 010 21.319V3.542c0-.998.808-1.806 1.806-1.806h3.749v-.417a.694.694 0 111.39 0l-.001.417h4.167v-.417a.694.694 0 111.389 0v.417h4.166v-.417c0-.383.312-.694.695-.694zm1.389 12.639a4.861 4.861 0 100 9.722 4.861 4.861 0 000-9.722zm0 1.641c.384 0 .694.311.694.695v3.03c0 .384-.31.694-.694.694h-2.02a.694.694 0 110-1.388l1.325-.001V15.6c0-.384.311-.695.695-.695zM5.555 3.125h-3.75a.417.417 0 00-.416.417l-.001 3.194h20.834V3.542a.417.417 0 00-.416-.417h-3.751v.417a.694.694 0 01-1.388 0l-.001-.417H12.5v.417a.694.694 0 11-1.389 0v-.417H6.944v.417a.694.694 0 11-1.388 0l-.001-.417z"
                    /></svg
                  >Recent Events
                </a>
              </li>
              <!-- <li ><a href="#pastevents" role="tab" data-toggle="tab">Past Events</a></li> -->
            </ul>

        

            <div class="tab-content fc-tab-content">
              <div
                role="tabpanel"
                class="tab-pane fade in active"
                id="upcoming"
              >
                <div class="row">
                  <EventCard
                    v-for="item in events"
                    v-bind:key="item.link"
                    v-bind:link="item.link"
                    v-bind:image="item.image"
                    v-bind:timestamp="item.timestamp"
                    v-bind:booth="item.booth"
                    v-bind:address="item.address"
                    v-bind:name="item.name"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section class="fc-awards" id="fcawards">
        <div class="container">
           <h3>Awards</h3>
               <div class="row">
                  <awardCard
                    v-for="(item,id) in awards"
                    v-bind:key="id"
                    v-bind:link="item.link"
                    v-bind:image="item.image"
                     v-bind:year="item.year"
                    v-bind:desc="item.desc"
                  />
                </div>
                <!-- <p class="pL20 fc-award-all" id="loadMore">View all Awards</p> -->
        </div>
      </section>
      <section class="fc-event-interviews" id="interviews">
        <div class="container">
          <h3>Interviews</h3>
          <p>Listen to the expert talks by FM and Real Estate leaders.</p>

          <div class="row">
            <PodcastCard
              v-bind:link1="podcast.link1"
              v-bind:link2="podcast.link2"
            />
            <InterviewCard
              v-for="item in interviews"
              v-bind:key="item.link"
              v-bind:link="item.link"
              v-bind:image="item.image"
            />
          </div>
        </div>
      </section>

      <section class="fc-events-webinar">
        <div class="container">
          <h3>Webinars</h3>
          <p>
            Register for our free webinars co-hosted with PropTech communities.
          </p>
          <div class="row">
            <WebinarCard
              v-for="item in webinars"
              v-bind:key="item.link"
              v-bind:link="item.link"
              v-bind:image="item.image"
              v-bind:heading="item.heading"
              v-bind:description="item.description"
              
            />
          </div>
        </div>
      </section>
      <VideoZoomModel />
    <Footer />

    </div>
  </div>
</template>

<script>
import EventCard from "../../components/EventCard";
import InterviewCard from "../../components/InterviewCard";
import PodcastCard from "../../components/PodcastCard";
import WebinarCard from "../../components/WebinarCard";
import awardCard from "../../components/awardCard";
import VideoZoomModel from "../../components/VideoZoomModel";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
export default {
  data() {
    return {
      events: [
        
{
          name:" Global Proptech ",
          link: "https://www.globalproptech.online/ ",
          image: "global.png",
          timestamp: "23 November, 2021",
          booth: "Booth -",
          address: "Virtual"
        },
        { 
          name:"Smart Buildings Expo",
          link: "https://smartbuildingexpo.it/en/# ",
          image: "SmartBuildingExpo2021.png",
          timestamp: " 22 - 24 November, 2021",
          booth: "Booth -",
          address: "Milan"
        },
        {
          name:" Realcomm IBCon",
          link: " https://www.realcomm.com/ibcon-2021/ ",
          image: "RealcommIBCon2021.png",
          timestamp: "2 - 3 November, 2021",
          booth: "Booth -",
          address: "Arizona"
        },
         
        {
          name:"CRE Tech London",
          link: " https://london.cretech.com/London2021/en/page/home ",
          image: "CRETech2021.png",
          timestamp: " 27 - 28 October, 2021",
          booth: "Booth -",
          address: "London"
        },
        {
          name:"MRI Ascend",
          link: " https://mriusersconference.com/ ",
          image: "mri.png",
          timestamp: "17 - 20 October, 2021",
          booth: "Booth -",
          address: "Ohio"
        },
        {
          name:" WorkplaceX Summit",
          link: " https://www.inspiredbusinessmedia.com/inspired-events/workplace-x-summit/",
          image: "WorkplaceXSummit2021.svg",
          timestamp: "19 October, 2021",
          booth: "Booth -",
          address: " Ascot"
        },
        {
          name:"CRE Tech New York",
          link: " https://newyork.cretech.com/cretechnyc21/en/page/home ",
          image: "CRETech2021.png",
          timestamp: " 13 - 14 October, 2021",
          booth: "Booth -",
          address: "New York"
        },
         {
          name:"Smart Buildings Show ",
          link: "https://smartbuildingsshow.com/",
          image: "SmartBuildingsShow2021.svg",
          timestamp: "6 - 7 October, 2021",
          booth: "Booth -",
          address: "London"
        },
         {
           name:"CIO Institute ",
          link: "https://cio-institute.com/",
          image: "CIOInstitute2021.png",
          timestamp: "5 October, 2021",
          booth: "Booth -",
          address: "Virtual"
        },
        {
          name:"FM Expo",
          link: "https://www.thebig5.ae/specialised-events/fmexpo/ ",
          image: "fm-logo.png",
          timestamp: "12 -15 September, 2021",
          booth: "Booth -",
          address: " Dubai"
        },
        {
          name:"Optimised Group Conference",
          link: "/",
          image: "optimized-groups.png",
          timestamp: "30 September, 2021",
          booth: "Booth -",
          address: "Dubai"
        },
         {
           name:"IWFM Conference",
          link: "https://www.iwfm.org.uk/iwfmconference.html",
          image: "IWFM2021.png",
          timestamp: "13 September, 2021",
          booth: "Booth -",
          address: " Hybrid conference"
        },
        {
          name:"Retrofit Tech",
          link: "http://www.retrofittechad.com/",
          image: "RetroFit2021.png",
          timestamp: "7 - 8 September, 2021",
          booth: "Booth -",
          address: "Abu Dhabi"
        },
        {
          name:"CM Today | SBEF",
          link: "https://www.sbefa.com/forum",
          image: "cmtgreen.png",
          timestamp: "1 - 2 September, 2021",
          booth: "Booth -",
          address: "Virtual"
        },
        {
          name:" Smart Facilities Management",
          link: "https://facilitiesmiddleeast.com/",
          image: "SmartFacilitiesManagement.jpeg",
          timestamp: "18 - 19 August, 2021",
          booth: "Booth -",
          address: "Dubai"
        },
        {
          name:"ASHE",
          link: "https://www.ashe.org/ashe-annual",
          image: "ASHE2021.png",
          timestamp: "8 - 11 August, 2021",
          booth: "Booth -",
          address: "Tennessee"
        },
        {
          link: "https://events.unissu.com/reconnect-january-2021/sessions/themes",
          image: "unissu.png",
          timestamp: "7th January 2021",
          booth: "Booth -",
          address: "Virtual"
        },
        {
          link: "https://innovator2020.commercialobserver.com/",
          image: "commerical.png",
          timestamp: "Dec 1st, 2020",
          booth: "Booth -",
          address: "Virtual",
        },
         {
          link: "https://thebig5digitalfestival.app.swapcard.com/event/the-big-5-digital-festival-global",
          image: "thebig.jpg",
          timestamp: "Nov 23rd-26th, 2020",
          booth: "Booth -",
          address: "Virtual",
        },
           {
          link: "https://www.cm-today.com/page/smart_built_environment_forum#day1",
          image: "cmtgreen.png",
          timestamp: "Nov 16th-19th, 2020",
          booth: "Booth -",
          address: "Virtual",
        },
        {
          link: "https://www.realcomm.com/ibcon-2020/",
          image: "realcomm.png",
          timestamp: "Oct 26th-29th, 2020",
          booth: "Booth -",
          address: "Hybrid conference",
        },
         
        {
          link: "https://smartbuildingsummit.com.au/",
          image: "eventlogo.png",
          timestamp: "26-28 November 2019",
          booth: "Booth B9",
          address: "Sydney Harbour Marriott Hotel, Australia"
        },
        {
          link: "https://www.mipim-proptech.com/",
          image: "miplogo.png",
          timestamp: "12-13 November 2019",
          booth: "Booth B9",
          address: "Metropolitan Pavilion, New York"
        },
        {
          link: "https://www.realcomm.com/",
          image: "realcomm.png",
          timestamp: "13 - 15 November 2019",
          booth: "Booth 18",
          address: "McEnery Convention Center, San Jose"
        },
        {
          link: "http://retrofittechksa.com/",
          image: "retrofit.png",
          timestamp: "11 - 12 April 2019",
          booth: "Booth A10",
          address: "Riyadh, KSA"
        },
        {
          link: "https://www.fm-expo.com/",
          image: "fm-logo.png",
          timestamp: "17 - 19 September 2019",
          booth: "Booth -",
          address: "Dubai"
        }
        
      ],
      upcomingEvents: [
         {
           name:"Digital Twin Consortium",
          link: "https://dt22.saifee-events.com/",
          image: "DigitalTwin.png",
          timestamp: "21 March, 2022",
          booth: "Booth 17",
          address: "Dubai",
        }
      ],

      awards: [
        {
          link:"https://facilio.com/frost-and-sullivan-facilio-product-leadership-award",
          image: "Group44.png",
          year: "2021",
          desc: "Frost and Sullivan Product Leadership Award"
        },
         {
          link:"https://www.cbnme.com/news/innovation-in-construction-fm-awards-2020-winners-revealed/",
          image: "construction-business.png",
          year: "2020",
          desc: "Software of the Year - CEO of the Year"
        },
        {
          link:"https://builtworlds.com/insights/2020-building-tech-50-list/",
          image: "buildworlds.jpg",
          year: "2020",
          desc: "Voted Top platform in Asset Management- Builtworlds 2020"
        },
         {
             link:"https://www.entrepreneurindia.com/awards_winner.php",
          image: "enp-india.jpg",
          year: "2019",
          desc: "Entrepreneur India- Best IoT Startup of the year"
        },
             {
               link:"https://www.facebook.com/BUILTWORLDcom/photos/a.1431436403638530/2246117282170434/?type=3",
          image: "expo-real.jpg",
          year: "2019",
          desc: "Finalists at The Global Expo Real Innovation Contest in Germany"
        },
        {
          link:"https://www.cbnme.com/news/facilio-inc-recognized-as-an-innovation-driven-challenger-in-the-2019-iot-for-smart-buildings/",
             image: "m_and_m.jpg",
          year: "2019",
          desc:"Innovation driven challenger in the 2019 IoT for Smart Buildings and IWMS categories "
        },
        {
          link:"https://www.constructionweekonline.in/people/11454-facilio-recognised-as-an-innovation-driven-challenger-in-the-2019-iot-for-smart-buildings-and-iwms-categories",
             image: "verdantix_g_quad.png",
          year: "2019",
          desc:"Named a Challenger in the Verdantix Green Quadrant for IoT Platform "
        },
             {
               link:"https://www.constructionworld.in/Latest-Construction-News/JLL-Announces-Winners-of-India%E2%80%99s-Biggest-Proptech-Challenge/22490",
             image: "fm_award.png",
          year: "2019",
          desc:"Runner Up in the Construction Innovation Awards  - Technology & Innovation in FM"
        },
        {
          link:"https://twitter.com/WorldAIShow/status/1065963559287484417",
           image: "startup-worldcup.jpg",
          year: "2018",
          desc:"Winner of the Fenox VC Start Up World Cup India"
        },
           {
             link:"https://yourstory.com/2018/05/10-indian-iot-startups-watch-2018/",
           image: "youstory.jpg",
          year: "2018",
          desc:"Top 10 IOT Startups in India by Yourstory "
        },
               {
             link:"https://www.builtworld.com/blog/india-contest/",
           image: "built-world.jpg",
          year: "2018",
          desc:"Winner of the Built World Technology competition for most innovative startup in Proptech "
        },
          {
             link:"https://www.fm-middleeast.com/suppliers/73335-top-suppliers-of-2018",
           image: "fm-management.jpg",
          year: "2018",
          desc:"Top 2018 FM Tech suppliers list by Facilities Management Middle East (ITP Media)"
        }

      ],
      interviews: [
        {
          link: "SEc9jyzFjTM",
          image: "interview-0.png"
        },
        {
          link: "whh-513d9ik",
          image: "interview-1.jpg"
        },
        {
          link: "VlAomwDsfbQ",
          image: "interview-2.png"
        },
        {
          link: "xyJ6wvmJ1R4",
          image: "interview-3.jpg"
        },
        {
          link: "zYSbeeXlKPQ",
          image: "interview-4.jpg"
        }
      ],
      podcast: {
        link1: "https://fast.wistia.com/embed/medias/z7lg4b6lgt.jsonp",
        link2: "https://fast.wistia.com/assets/external/E-v1.js"
      },
      webinars: [
        {
          link:
            "https://www.realcomm.com/webinars/726/smart-building-showcase-case-studies-iot-ai-experience-and-beyond",
          image: "webinar-4.png",
          heading: "Data-driven Operations <br /> & Maintenance in 2020 ",
          description:
            "Unifying Silo-ed operational data for real-time building portfolio and intelligence"
        },
        {
          link:
            "https://www.realcomm.com/webinars/686/understanding-designing-and-implementing-a-corporate-re-enterprise-wide-strategy",
          image: "webinars-1.png",
          heading: "CORPORATE REAL ESTATE & <br/> Technology",
          description: "The Importance of Developing a STRATEGY"
        },
        {
          link:
            "https://www.realcomm.com/webinars/675/real-estate-information-management-data-analytics",
          image: "webinars.png",
          heading: "REAL ESTATE INFORMATION<br/> ANALYTICS",
          description: "Harnessing the Power of Data"
        },
        {
          link:
            "https://www.realcomm.com/webinars/682/smart-buildings-visualization-and-digital-twins",
          image: "webinars.png",
          heading: "Visualizing Building Data",
          description: "Unpacking the Potential of DIGITAL TWINS"
        }
      ]
    };
  },
  components: {
    EventCard,
    InterviewCard,
    PodcastCard,
    WebinarCard,
    awardCard,
    VideoZoomModel,
    Navbar, Footer
  },
  mounted: function() {
$(function () {
    var x;
    $('#awardlist a').slice(0, 6).show();
    $('#loadMore').on('click', function (e) {
        $('#awardlist a').slice(0, x).slideDown();
        var count = $("#awardlist").children().length;
        console.log(count);
        if("#loadMore a:last-child")
        {
      $('#loadMore').css("display","none");
        }
    }
    );
});
  },
  head() {
    return {
      title: "Facilio Events",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Register for our upcoming events, webinars, and podcasts. Meet and interact with our experts on how you can optimize your facilities."
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Facilio Events"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Register for our upcoming events, webinars, and podcasts. Meet and interact with our experts on how you can optimize your facilities."
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content:
            "https://s3-us-west-2.amazonaws.com/ws-facilio.com/assets/images/logo.png"
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/events"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Facilio Events"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Register for our upcoming events, webinars, and podcasts. Meet and interact with our experts on how you can optimize your facilities."
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content:
            "https://s3-us-west-2.amazonaws.com/ws-facilio.com/assets/images/logo.png"
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/events"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/events"
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
.fc-past-table tr:nth-child(even) {
  background-color: #f8f9fe;
}
.fc-past-table tr {
  border: solid 0.9px #e6ecf3;
}
.podacast-thumbnail > .wistia_responsive_wrapper {
  height: 300px !important;
}

.nav > li > a:hover {
  color: #ff3185;
}
.events-podcast-card {
  position: relative;
  max-width: 350px;
  height: 300px;
  background: linear-gradient(-45deg, #bebebe, #7a7a7a, #e6e6e6, #cef3ea);
  background-size: 400% 400%;
  -webkit-animation: gradientBG 10s ease infinite;
  animation: gradientBG 10s ease infinite;
}
.podcast-card-overlay
{
  position: absolute;
  height:300px;
  max-width:400px;
  width:100%;
}
.podcast-card-overlay:hover
{

  height: 300px; 
  position: absolute; 
  width: 340px; 
  z-index: 0;
   background-color: rgba(74, 48, 140, 0.5);
    transition: all 80ms ease-out 0s; 
    left: 0px; top: 0px;
}
.podcast-card-overlay img
{
    max-width: 50px;
    width: 100%;
    margin: 0 auto;
    padding:10px;
    z-index:1;
    background-color:#4B2E87;
    position: absolute;
    top: 120px;
    right: 150px;
}
#awardlist a{ display:none;
}
#awardlist a
{
  max-width: 400px;
    width: 100%;
}
.fc-award-all
{
  padding:10px;
  max-width:200px;
  width:100%;
  text-align: center;
  margin:40px auto;
  font-size:14px;
   font-family: "ProximaNovaSemiBold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-transform: uppercase;
  letter-spacing: 0.8px;
  cursor:pointer;
  background-color:#ff3185;
  color:#ffffff;
}
.fc-play
{
  position: absolute;
}
@-webkit-keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}



.fc-scroll-wrapper {
    position:relative;
    margin:0 auto;
    overflow:hidden;
	padding:5px;
  	height:50px;
}

.fc-scroll-ist {
    position:absolute;
    left:0px;
    top:0px;
  	min-width:3000px;
  	margin-left:12px;
    margin-top:0px;
}

.fc-scroll-list li{
	display:table-cell;
    position:relative;
    text-align:center;
    cursor:grab;
    cursor:-webkit-grab;
    color:#efefef;
    vertical-align:middle;
}

.fc-scroller {
  text-align:center;
  cursor:pointer;
  display:none;
  padding:7px;
  padding-top:11px;
  white-space:no-wrap;
  vertical-align:middle;
  background-color:#fff;
}

.scroller-right{
  float:right;
}

.scroller-left {
  float:left;
}
 
.scroller-left img, .scroller-right img
{
  margin-top:15px;
max-width: 30px;
width:100%;
}
@media screen and (max-width: 500px) {
  .nav > li > a,
  .nav > li > a:focus {
    font-size: 15px !important;
  }
  .fc-tab-switch > li > a,
  .fc-tab-switch > li > a.active {
    padding: 2px 10px !important;
  }
  .fc-tab-switch > li.active a::after {
    top: 40px !important;
  }
}

/* The Modal (background) */
.events-page .modal {
  display: none;
  position: fixed;
  z-index: 10;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #000000c7;
}

/* Modal Content */
.events-page .modal-content {
  position: relative;
  background-color: transparent;
  margin: auto;
  padding: 0;
  width: 100%;
  box-shadow: none;
  max-width: 1300px;
}

/* The Close Button */
.close {
  color: #ffffff !important;
  position: absolute;
  top: 50px;
  right: 60px;
  font-size: 50px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
}
.nav-tabs {
  border-bottom: none !important;
}
.cursor {
  cursor: pointer;
}
.modal-backdrop {
  z-index: 0 !important;
  background: transparent !important;
}
.fc-awards
{
  padding:100px 0px;
}
.fc-awards h3
{
      font-size: 35px;
    line-height: 1.2;
    font-family: "ProximaNovaBold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: #000000;
}
</style>
