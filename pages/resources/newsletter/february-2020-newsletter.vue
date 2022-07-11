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
                    <p>February 2020</p>
                    <h1>Facilio Newsletter </h1>
                </div>
            </section>
            <section class="fc-newsletter-template">
                <div class="fc-social-float-bar">
                    <a href="https://www.facebook.com/facilioinc/" target="_blank" class="fc-facebook"><img
                            class="fc-icon-news" src="/images/newsletter/facebook.png"></a>
                    <a href="https://twitter.com/FacilioInc" class="fc-twitter" target="_blank"><img
                            class="fc-icon-news" src="/images/newsletter/twitter.png"></a>
                    <a href="https://www.linkedin.com/company/facilio-inc/" target="_blank" class="fc-linkedin"><img
                            class="fc-icon-news" src="/images/newsletter/linkedin.png"></a>
                </div>

                <div class="fc-news-head">
                    The year was 1883.
                </div>

                <div class="fc-flex-wrapper">
                    <div class="fc-left-img">
                        <img class="fc-news-img" style="width:320px;" src="/images/newsletter/march/warren-johnson.jpg">
                    </div>
                    <div class="fc-right-txt">
                        <div class="fc-newspaper-txt">
                            Warren was a school teacher in Wisconsin who faced the same annoying issues we’ve all faced
                            - his room temperature was erratic; often getting chilly. Of course, he didn’t have the
                            luxury of a thermostat back then - instead, every time he wanted to increase the
                            temperature, he had to walk down to the basement where janitors shoveled coal into the
                            furnace for heat
                        </div>
                        <div class="fc-newspaper-txt">
                            Now, Warren was a smart inventor - he wouldn’t have any of it; so he invented a device that
                            would activate a light in the boiler room whenever his room temperature fell below a preset
                            threshold - that was the first automation in buildings.
                        </div>
                    </div>
                </div>
                <div class="fc-newspaper-txt">
                    In the next century, many path-breaking innovations would follow in buildings management, <nuxt-link
                        to="/platform-overview/"> <span>from smart sensors to remote operations to data-driven
                            platforms;</span></nuxt-link>
                </div>
                <div class="fc-newspaper-txt">
                    What about Warren? He would go on to found a company that focussed on building automation - Johnson
                    Controls, the Fortune 500 giant that is a household name for facilities today.</div>

                <div class="fc-newspaper-txt">
                    That’s the beauty of innovations - once kindled, the spirit just keeps evolving.</div>

                <div class="fc-newspaper-txt">
                    And lucky for us, we're treading an exciting phase in the real estate industry today - with
                    technology unlocking value at every step of the real estate value chain.</div>

                <div class="fc-newspaper-txt">
                    <span>"We are surrounded by data, but starved for insights."</span>
                    - Jay Baer</div>


                <div class="fc-newspaper-txt">As you prepare for the year and envision the next decade, we've curated 6
                    brilliant pieces to help you steer through the next cycle of tech-driven innovation. Dive right in!
                </div>
                <hr />
                <div class="fc-news-subhead">GOOD READS</div>

                <div class="fc-news-img"><img src="/images/newsletter/jan/feature1.png"></div>

                <div class="fc-newspaper-txt">
                   <nuxt-link to="/ebooks/state-of-cre-operations-2020-report/"> <span> State of CRE operations 3.0 - A report on CRE trends for 2020 and beyond </span></nuxt-link>- A global
                    benchmarking study by Facilio that uncovers gaps, trends, and priorities in real estate operations.

                </div>
                <div class="fc-newspaper-txt">
                                     <a href="https://www.realmassive.com/what-commercial-real-estate-data/" target="_blank"><span> Big Data: The future of commercial real estate </span></a>- This article throws light on the different types of
                    data available to CRE owners and its impact on operational efficiency going forward.

                </div>
    
                <hr>
                <div class="fc-news-subhead">MARKET TRENDS</div>

                <div class="fc-news-img"><img src="/images/newsletter/march/feature2.png"></div>

                <div class="fc-news-list">
                    <ul>

                        <li> <a
                                href="https://www.propmodo.com/how-analytics-and-algorithms-are-transforming-property-development/"><span>Propmodo:</span></a>
                           How analytics and algorithms are transforming property development</li>
                        <li><a href="https://www.globest.com/2020/02/05/technology-how-tech-is-finally-remaking-cre/?slreturn=20200216024955" ><span>Globest: </span></a>How tech is finally remaking CRE, transforming from NOI to ROI</li>
                    </ul>
                </div>
                <hr />
                <div class="fc-news-subhead">TECH CAPSULE:</div>
                <div class="fc-newspaper-txt">
                    <a href="https://www.constructionweekonline.com/video/262081-cw-interview-taking-buildings-to-the-next-level"
                        target="_blank"> <span> CW:</span></a> “The time has come to take buildings to the next level” - Vimal Kapur, CEO HoneyWell Building Technologies
                </div>
                <div class="fc-newspaper-txt">
                    <a href="https://www.forbes.com/sites/forbesrealestatecouncil/2020/02/21/how-will-artificial-intelligence-change-the-commercial-real-estate-industry/#528dc67b24f8"
                        target="_blank"><span>Forbes: </span></a>How will Artificial Intelligence change the CRE industry?

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
                title: "February Issue | Facilio",
                meta: [{
                        hid: "description",
                        name: "description",
                        content: "The Real History of proptech and where it is headed."
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
                        content: "February Issue | Facilio"
                    },
                    {
                        hid: "fb-share-description",
                        property: "og:description",
                        content: "The Real History of proptech and where it is headed."
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
                        content: "The Real History of proptech and where it is headed."
                    },
                    {
                        hid: "twitter-description",
                        name: "twitter:description",
                        content: "The Real History of proptech and where it is headed."
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