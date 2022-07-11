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
                    <p>November 2019</p>
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
                    Let me be honest with you.
                </div>


                <div class="fc-news-txt">
                    I wanted to know what it takes for a Facility Manager to thrive. I wore my captain’s hat, dived into
                    the internet and started an exploration. One search led to another and finally after reams of
                    contextless content, I searched - “Can a building operate without an FM team?” The internet gave me
                    a big NO as an answer.
                </div>
                <div class="fc-news-txt">
                    We recognise that the FM community are constant challenge seekers and are motivated by efficiency.
                    That’s why we’re committed to understanding your priorities and helping you become organised and
                    growth-oriented.</div>

                <div class="fc-news-txt">
                    If you wouldn't mind, can I pick your mind with one quick question - what is the one thing you wish
                    you had to operate buildings better? Asking because knowing this is helpful for us in making sure we
                    curate insightful content for your success. Rest assured, we're always mindful of your Inbox.</div>

                <div class="fc-news-txt">
                    With that, here’s the first set of content curated by us. There’s many more to come :)</div>


                <hr />
                <div class="fc-news-subhead">Won’t you feel happy to grow
your net operating income?</div>

                <div class="fc-news-img"><img src="/images/newsletter/november/feature-1.png"></div>

                <div class="fc-news-txt">
                   For any CRE, the first priority is to generate high net operating income (NOI). However, to maximise NOI, you need to optimize multiple parameters such as - O&M costs, energy spend, asset capital, etc. Check out The Guide to Enterprise-wide Facilities Operations & Maintenance.
                </div>
               <nuxt-link to="resources/guide/evaluating-facilities-management-software/">  <div class="fc-read-more-btn">Get The Guide</div></nuxt-link>

                <hr>
                <div class="fc-news-subhead">It’s high time to invest in smart
tech! Here’s an interesting stat:</div>

                <div class="fc-news-img"><img src="/images/newsletter/november/feature-2.png"></div>

                <div class="fc-news-txt">
                    Of the 100 asset managers in the Verdantix survey of real estate asset managers, 63% believe the investment in smart buildings is justified as the buildings will generate gains in efficiency and tenant experience. Meanwhile, 76% believe they open up new opportunities that lie untapped.</div>

                                   <div class="fc-news-txt">We believe that now is the time to enhance your Commercial Real Estate Experience. Are you ready to transform your Facilities with game changing technologies?</div> 

                                  <a href="https://blog.facilio.com/connectivity-the-key-to-enhancing-commercial-real-estate-experience/?utm_source=newsletter&utm_medium=email&utm_campaign=novembernewsletter" target="_blank">  <div class="fc-read-more-btn">Get The Guide</div></a>
                <hr />
                <div class="fc-news-subhead">NEWS FROM AROUND THE GLOBE:</div>
                <div class="fc-news-txt">
                    <a href="https://www.cnbc.com/2019/10/16/us-green-economy-generates-1point3-trillion-and-employs-millions-new-study-finds.html"
                        target="_blank"> <span> CNBC:</span></a> US ‘green economy’ generates $1.3 trillion and employs millions, new study finds.
                </div>
                <div class="fc-news-txt">
                    <a href="https://www.cpexecutive.com/post/proptech-explosion-fracking-are-transforming-cre/"
                        target="_blank"><span>Commercial Property Executive: </span></a> Proptech Explosion, “Fracking” Are Transforming CRE

                </div>
                <div class="fc-news-txt"><a href=""><span>Khaleej Times:</span></a> Facilio and Smart IoT ink partnership with Digital X, a subsidiary of Digital DEWA.</div>

            </section>
        </div>
    </div>
</template>
<script>
    import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

    export default {

        components: {
            Navbar

        },
        head() {
            return {
                title: "November 2019 Newsletter | Facilio",
                meta: [{
                        hid: "description",
                        name: "description",
                        content: "Check out what's new with Facilio's data-driven O&M platform to help you deliver enhanced experiences in your buildings."
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
                        content: "February Product Updates | Facilio"
                    },
                    {
                        hid: "fb-share-description",
                        property: "og:description",
                        content: "Check out What's new with Facilio's data-driven O&M platform to help you deliver enhanced experiences in your buildings."
                    },
                    {
                        hid: "fb-share-image",
                        property: "og:image",
                        content: "/images/og-images/feb-2020.png"
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
                        content: "February Product Updates | Facilio"
                    },
                    {
                        hid: "twitter-description",
                        name: "twitter:description",
                        content: "Check out What's new with Facilio's data-driven O&M platform to help you deliver enhanced experiences in your buildings."
                    },
                    {
                        hid: "twitter-image",
                        name: "twitter:image",
                        content: "/images/og-images/feb-2020.png"
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