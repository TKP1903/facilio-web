<template>
    <div class="productPage btn-shade">
        <div id="productPage"></div>
        <div class="myPage" id="myPage">
            <div id="fc-header">
                <Navbar />
            </div>
            <section class="fc-newsletter-specific-banner">
                <svg xmlns="http://www.w3.org/2000/svg" width="85" height="229"
                    class="fc-vertical-small-dots hidden-xs">
                    <path fill="#DEDEF7" fill-rule="evenodd"
                        d="M88.811 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177A3.182 3.182 0 0192 92.344a3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 70.11a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177A3.182 3.182 0 0192 47.877a3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 25.643a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0188.811.233 3.182 3.182 0 0192 3.41a3.182 3.182 0 01-3.189 3.176zM67.858 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233A3.182 3.182 0 0164.67 3.41 3.182 3.182 0 0167.858.233a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM45.994 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0145.994.233a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM25.041 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0125.04 44.7a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0125.04.233a3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zM4.088 95.52a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234A3.182 3.182 0 01.899 70.11a3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176A3.182 3.182 0 014.088 44.7a3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233A3.182 3.182 0 01.899 3.41 3.182 3.182 0 014.088.233 3.182 3.182 0 017.276 3.41a3.182 3.182 0 01-3.188 3.176zM88.81 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 135.96a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zM67.858 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM45.994 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM25.041 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM4.088 228.07a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176z">
                    </path>
                </svg>
                <div class="container">
                    <p>March 2020</p>
                    <h1>Facilio Newsletter </h1>
                </div>
            </section>
            <section class="fc-newsletter-template">
                <div class="fc-social-float-bar">
                  <a href="https://www.facebook.com/facilioinc/" target="_blank"  class="fc-facebook"><img class="fc-icon-news" src="/images/newsletter/facebook.png"></a> 
                  <a  href="https://twitter.com/FacilioInc" class="fc-twitter" target="_blank" ><img class="fc-icon-news" src="/images/newsletter/twitter.png"></a> 
                   <a href="https://www.linkedin.com/company/facilio-inc/" target="_blank"  class="fc-linkedin"><img class="fc-icon-news" src="/images/newsletter/linkedin.png"></a> 
                </div>

                <div class="fc-news-head">
                   How to teach yourself hard things during hard times
                </div>
                <div class="fc-newspaper-txt">
                    “Circumstances do not make the man, they reveal him.” - James Allen</div>
                <div class="fc-newspaper-txt">
                 There are only a few challenges that compare to the rigor of the SEAL training.</div>

                <div class="fc-newspaper-txt">
                   Twenty-six weeks of notoriously intense exercises to prepare for that unknown combat that may or may not happen.</div>

                <div class="fc-newspaper-txt">
                   Of the many challenges, the hell week is perhaps the hardest - with the iconic ‘surf passage’ also part of the same regiment.</div>

                <div class="fc-news-img"><img src="/images/newsletter/march/march-feature-1.png"></div>
                  <div class="fc-newspaper-txt">
                  What is so special about the ‘surf passage’?</div>
                     <div class="fc-newspaper-txt">
                It is the very nature of the exercise which reminds the small units what the most fundamental aspect of warfare is; particularly when facing the unknown - teamwork.</div>
                     <div class="fc-newspaper-txt">
                When the units make their way into the water, carrying heavy boats, it is not about who is the toughest, bravest, or the strongest.</div>
                     <div class="fc-newspaper-txt">
                  It is the group that sticks together, that comes out on top.</div>
                     <div class="fc-newspaper-txt">
                 At this moment, just like the SEAL trainees, property management professionals find themselves fighting an unknown pandemic, testing them physically and mentally. But, the biggest strength here?</div>
                     <div class="fc-newspaper-txt">
                 It's how these folks continue to function as one, helping and supporting the common cause of people's health and wellbeing.</div>
                                      <div class="fc-newspaper-txt">
                Let us take a moment to thank and show our support to property operations and facilities teams across the world - the technicians, maintenance staff, operators, and everyone involved here - as they rally for the common good.</div>
                <hr>
                <div class="fc-news-subhead">REAL ESTATE AND COVID-19</div>

                <div class="fc-news-img"><img src="/images/newsletter/march/march-feature-2.png"></div>

       <div class="fc-news-list">
                    <ul>
                        <li><a href="https://www.jdsupra.com/legalnews/covid-19-checklist-for-real-estate-and-86866/" target="_blank"><span>COVID-19 checklist for real estate and construction projects</span></a></li>
                                              <li><a href="https://www.propmodo.com/commercial-real-estate-in-the-age-of-the-covid-19-virus/" target="_blank"><span>Commercial Real Estate in the Age of the COVID-19 Virus</span></a></li>

                    </ul>
                </div>
                <hr>
                      <div class="fc-news-subhead">PROPERTY MANAGEMENT COMMUNITY LEADING THE WAY IN FIGHTING THE BATTLE</div>

                <div class="fc-news-img"><img src="/images/newsletter/march/march-feature-3.png"></div>

       <div class="fc-news-list">
                    <ul>
                        <li><a href="https://blog.facilio.com/how-property-management-can-respond-to-covid-19/" target="_blank"><span>Property Management Responding to Covid-19</span></a></li>
                                              <li><a href="https://blog.facilio.com/preventive-measures-taken-by-property-operators-during-covid19/" target="_blank"><span>10 Inspiring examples of Property Operation Teams coming together to fight the viral spread</span></a></li>

                    </ul>
                </div>
                <hr>
                <div class="fc-news-subhead">GOOD READS</div>
                 <div class="fc-newspaper-txt">
                   <a href="https://www.livescience.com/coronavirus-flatten-the-curve.html" target="_blank"> <span> Live Science: </span></a> Coronavirus: What is 'flattening the curve,' and will it work?
                 </div>
                  <div class="fc-newspaper-txt">
                     <a href="https://twitter.com/jayzalowitz/status/1239685378249871361" target="_blank"><span>Twitter: </span></a>  COVID-19 is pretty bad out there, but here is some good news
                 </div>
            </section>
        </div>
        <Footer />
    </div>
</template>
<script>
    import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

    export default {

        components: {
            Navbar, Footer

        },
        head() {
            return {
                title: "March Issue | Facilio",
                meta: [{
                        hid: "description",
                        name: "description",
                        content: "How to teach yourself hard things during hard times. "
                    },
                    {
                        hid: "fb-share-title",
                        property: "og:title",
                        content: "March Issue | Facilio"
                    },
                    {
                        hid: "fb-share-description",
                        property: "og:description",
                        content: "How to teach yourself hard things during hard times. "
                    },
                    {
                        hid: "fb-share-image",
                        property: "og:image",
                        content: "https://facilio.com/images/og-images/newsletter-og.png"
                    },
                    {
                        hid: "fb-share-url",
                        property: "og:url",
                        content: "https://facilio.com/resources/newsletter"
                    },
                    {
                        hid: "twitter-meta",
                        name: "twitter:card",
                        content: "summary"
                    },
                    {
                        hid: "twitter-title",
                        name: "twitter:title",
                        content: "March Issue | Facilio"
                    },
                    {
                        hid: "twitter-description",
                        name: "twitter:description",
                        content: "How to teach yourself hard things during hard times. "
                    },
                    {
                        hid: "twitter-image",
                        name: "twitter:image",
                        content: "https://facilio.com/images/og-images/newsletter-og.png"
                    },
                    {
                        hid: "twitter-url",
                        name: "twitter:url",
                        content: "https://facilio.com/resources/newsletter"
                    }
                ],
                link: [{
                    rel: "canonical",
                    href: "https://facilio.com/resources/newsletter"
                }]
               
            };
        }
    };
</script>
<style type="text/css">
    body {
        font-family: Helvetica, 'Roboto', Arial, sans-serif !important;
    }


</style>