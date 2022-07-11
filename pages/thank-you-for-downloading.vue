<template>
    <div>
        <div class="productPage btn-shade">
            <div id="productPage"></div>
            <div class="myPage" id="myPage">
                <div id="fc-header">
                    <Navbar />
                </div>
                <div class="container thank-you-page-head" >
                    <div style="margin: auto;display: table;">
               <div style="display:table;margin:auto;"> <img style="max-width:110px;" src="/images/pink-tick.png"/></div>
                <div class="ty-head">Thank you for Downloading!</div>
                <p class="ty-sub">Check out more useful content on optimising your building operations.</p>
               
               <div class="fc-button-collapsive" style="max-width: 100%;margin: 70px auto;text-align: center;">
                   <nuxt-link to="/resources" class="fc-button-get-started" style="margin: auto;padding:25px 100px;">Read now</nuxt-link>
                   </div> 
                <a id="downloadLink"   href="/pdf/Frost-and-Sullivant-Study-on-IoT-in-Building-Operations.pdf" download></a>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Navbar from "../components/Navbar.vue"
export default {
data() {
    return {
        
    }
},
mounted() {
this.downloadfile()
},
methods: {
  downloadfile(){ 
   setTimeout(function () {
       document.getElementById('downloadLink').click();
    }, 3000);
} 
},
 components: {
    Navbar,
  },
  head() {
         return {
            title: "Thank you for Downloading! | Facilio",
            meta: [{
                  hid: "description",
                  name: "description",
                  content: ""
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
                  content: "Thank you for Downloading! | Facilio"
               },
               {
                  hid: "fb-share-description",
                  property: "og:description",
                  content: ""
               },
               {
                  hid: "fb-share-image",
                  property: "og:image",
                  content: "https://facilio.com/images/Group12.png"
               },
               {
                  hid: "fb-share-url",
                  property: "og:url",
                  content: "http://facilio.com/"
               },
               {
                  hid: "twitter-title",
                  name: "twitter:title",
                  content: "Thank you for Downloading! | Facilio"
               },
               {
                  hid: "twitter-description",
                  name: "twitter:description",
                  content: ""
               },
               {
                  hid: "twitter-image",
                  name: "twitter:image",
                  content: "https://facilio.com/images/Group12.png"
               },
               {
                  hid: "twitter-url",
                  name: "twitter:url",
                  content: "https://facilio.com/"
               }
            ],
            link: [{
               rel: "canonical",
               href: "https://facilio.com/"
            }],
            script: [{
                  src: "../../../js/page.js"
               },
               {
                  src: "../../../js/waypoints.min.js"
               },
               {
                  src: "../../../js/includes.js"
               },
               {
                  src: "../../../js/position.js"
               }
            ]
         };
      }
}
</script>
<style>
.thank-you-page-head {
    margin-top: 150px  !important;
}
.ty-head {
    font-size: 34px;
    font-family: 'ProximaNovaLtLight';
    color: #483a9e;
    margin: 40px 0px;
    font-weight: 600;
    margin-bottom: 30px;
    text-align: center;
}
.ty-sub {
    font-size: 18px;
    max-width: 450px;
    text-align: center;
    font-family: 'ProximaNovaLtLight';
    font-weight: 600;
}
</style>