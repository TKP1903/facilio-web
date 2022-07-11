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
                    <p>January 2020</p>
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
                    A brand-new year is here!
                </div>
                <div class="fc-newspaper-txt">
                    Isn’t it fantastic to reboot your endeavours with a fresh outlook? More so, when it aligns with the
                    birth of a decade, there can’t be a better time to recognize changes and innovations from the
                    get-go.</div>
                <div class="fc-newspaper-txt">
                    And when it comes to game-changing innovation, ‘data-driven’ processes and technologies lead the
                    space. ‘Chefling’, a Silicon Valley startup, reinvented culinary experience with connected
                    appliances and ML-driven smart kitchen. Experts from the built world are unifying construction life
                    cycle from design-to-development with advanced technology.</div>

                <div class="fc-newspaper-txt">
                    Modern CREs are but taking it to the next level 😎 - embracing data-driven solutions to improve
                    operational performance across portfolio.</div>

                <div class="fc-newspaper-txt">
                    Sounds like the perfect start to a disruptive decade, no?✌️</div>

                <div class="fc-newspaper-txt">
                    Also, here’s a curated list for you to make 2020 a year of data-driven growth 👇</div>

                <div class="fc-newspaper-txt-semibold">Wish you all a great year from Team Facilio</div>
                <hr>
                <div class="fc-news-subhead">Real Estate and Growth in 2020</div>

                <div class="fc-news-img"><img src="/images/newsletter/jan/feature1.png"></div>

                <div class="fc-newspaper-txt">
                    Top 2020 trends that will influence Real Estate Portfolio growth - A Facilio Research.
                  <a href="https://blog.facilio.com/cre-operations-trends-in-2020/?utm_source=newsletter&utm_medium=web&utm_campaign=jannewsletter" target="_blank">  <div class="fc-news-read-more">
                        Read more
                    </div></a>
                </div>
                <div class="fc-newspaper-txt">3 reasons why you need data at the centre of your CRE universe.
                 <a href="https://facilio.wistia.com/medias/6q10arqo93"  target="_blank">  <div class="fc-news-read-more">
                        Watch The Video
                    </div></a>
                </div>
                <div class="fc-newspaper-txt">Hear from the experts: Six emerging trends in facilities management sourcing.
                    <a href="https://www.mckinsey.com/business-functions/operations/our-insights/six-emerging-trends-in-facilities-management-sourcing" target="_blank"><div class="fc-news-read-more">
                        Know more
                    </div></a>
                </div>
                <hr>
                <div class="fc-news-subhead">Reinventing CRE | Facilio in 2019</div>

                <div class="fc-news-img"><img src="/images/newsletter/jan/feature2.png"></div>

                <div class="fc-news-list">
                    <ul>
                        <li><nuxt-link to="/customer-success/"><span>Team Facilio</span></nuxt-link> bigger and better - we set up new offices in Dubai and NYC</li>
                        <li>We hosted <a href="https://blog.facilio.com/top-7-things-facilities-management-leaders-are-talking-about-futureproof-highlights/?utm_source=newsletter&utm_medium=web&utm_campaign=jannewsletter"><span>‘FutureProof’</span></a> - the word’s first modern FM summit shaping the future of built world</li>
                        <li>We <nuxt-link to="/newsroom/dewa-facilio-smart-iot-partnership-gitex-2019/"><span>signed an MoU with Digital X</span></nuxt-link>, a subsidiary of Digital DEWA, towards ‘Dubai 10X’ vision.</li>
                        <li>Leading analyst firms Verdantix, and M&M recognized us as an <a href="https://blog.facilio.com/revolutionising-fm-facilio-named-an-innovation-driven-challenger-by-leading-analyst-firms-verdantix-mm/?utm_source=newsletter&utm_medium=web&utm_campaign=jannewsletter" target="_blank"><span>innovation-driven challenger.</span></a></li>
                        <li>We grew to <nuxt-link to="/resources/case-study/"><span>manage 40 million sq.ft across 350 buildings</span></nuxt-link> in the US, India, MENA & Brazil.</li>
                        <li>We set into 2020 with what we do best - making our<nuxt-link to="/platform-overview/"><span> #1 platform engineered for portfolio intelligence </span></nuxt-link> more powerful.</li>
                    </ul>
                </div>
                <hr/>
                 <div class="fc-news-subhead">NEWS FROM AROUND THE GLOBE:</div>
                 <div class="fc-newspaper-txt">
                   <a href="https://www.forbes.com/sites/forbestechcouncil/2020/01/10/a-five-step-guide-to-data-driven-property-and-asset-management/#13f362cf1aa8" target="_blank"> <span> Forbes:</span></a> A Five-Step Guide To Data-Driven Property And Asset Management
                 </div>
                  <div class="fc-newspaper-txt">
                     <a href="https://www.constructionweekonline.com/video/262081-cw-interview-taking-buildings-to-the-next-level" target="_blank"><span>Construction Week Online: </span></a> time has come to take buildings to the “next level”
                 </div>
                   <div class="fc-newspaper-txt">
                  <a href="https://fedtechmagazine.com/article/2020/01/tech-behind-smart-building-automation-systems-perfcon" target="_blank">  <span> FedTech:</span></a> The Tech Behind Smart Building Automation Systems
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
                title: "January Issue | Facilio",
                meta: [{
                        hid: "description",
                        name: "description",
                        content: "Towards a prosperous 2020: A new key to unlock your portfolio intelligence. "
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
                        content: "Towards a prosperous 2020: A new key to unlock your portfolio intelligence  . "
                    },
                    {
                        hid: "fb-share-description",
                        property: "og:description",
                        content: "Towards a prosperous 2020: A new key to unlock your portfolio intelligence  . "
                    },
                    {
                        hid: "fb-share-image",
                        property: "og:image",
                        content: "/images/og-images/newsletter-og.png"
                    },
                    {
                        hid: "fb-share-url",
                        property: "og:url",
                        content: "http://facilio.com/"
                    },
                    {
                        hid: "twitter-meta",
                        name: "twitter:card",
                        content: "summary"
                    },
                    {
                        hid: "twitter-title",
                        name: "twitter:title",
                        content: "January Issue | Facilio"
                    },
                    {
                        hid: "twitter-description",
                        name: "twitter:description",
                        content: "Towards a prosperous 2020: A new key to unlock your portfolio intelligence  . "
                    },
                    {
                        hid: "twitter-image",
                        name: "twitter:image",
                        content: "/images/og-images/newsletter-og.png"
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