<template>
    <div class="productPage btn-shade fc-meetup-page fc-webinar-page">
        <div id="productPage"></div>

        <div class="myPage" id="myPage">
            <div id="fc-header">
                <Navbar />
            </div>

            <div class="mask"></div>

            <div class="fc-case-study-hub" style="background: #312481;">
                <div class="container">
                    <div class="fc-hub-content text-center">
                        <div class="fc-meetup-badge">Facilio Webinar</div>
                        <h1>
                           Improving energy efficiency in buildings: Digital retrofits as a force multiplier
                        </h1>
                        <p class="pB20 fc-yellow-txt">
                            March 16, 2021 - 9:00 AM PST | 5:00 PM GMT
                        </p>
                        <a href="https://zoom.us/webinar/register/6116148771221/WN_kq7CUHqxQpu6FZyVO98Tog"
                            target="_blank" class="fc-cs-try-white">Watch recording</a>
                    </div>
                </div>
            </div>

            <div class="container fc-webinar-series">
                <h3>The era of continuous sustainability in a digital-first world</h3>
                <div class="fc-meetup-page-content-con">
                    <p>
                        2021 has seen several adoption drivers for sustainability across economies: Government-mandated
                        climate goals and energy <a href="https://joebiden.com/clean-energy/" target="_blank"> programs,</a> initiatives to democratize and finance <a href="https://www.prnewswire.com/news-releases/steve-wozniak-launches-his-next-billion-dollar-venture-to-democratize-and-finance-energy-efficiency-investments-worldwide-301186307.html" target="_blank"> energy efficiency
                        investments,</a> investor demand on ESG strategies, and more.
                    </p>
                    <h3 class="fc-webniar-h3">Globally, we’re heading towards a major energy efficiency breakthrough!</h3>
                    <p>
                      However, unlike other economies, we, the people of real estate industry, have a unique leverage to create maximum sustainable impact with the aid of these 3 important pillars:
                    </p>
                    <div class="fc-webinar-feat-card" style="max-width: 1000px;margin-left: inherit;">
                        <p>
                            <span class="pink-dot mR10"></span> Energy retrofits/upgrades (Lighting, HVAC, sensors) to restore design-optimal performance
                        </p>
                        <p>
                            <span class="pink-dot mR10"></span> Connecting existing systems to aggregate, and analyze real-time building data (analytics, FDD, retro commissioning, etc.)
                        </p>
                        <p>
                            <span class="pink-dot mR10"></span> Software-driven optimizations (occupant-based controls, dynamic schedules, portfolio automation, etc.) as force multipliers of building performance at scale
                        </p>
                    </div>
                    <p>
                            Real estate portfolio owners/operators and EsCO companies, across the globe, are increasingly turning to energy efficiency-drivers that can scale and help them act their part in this major shift towards continuous sustainability - and this webinar aims to do just that.
                        </p>
                    <!-- sample -->
                    <div class="text-center pT50 pB40">
                        <a href="https://zoom.us/webinar/register/6116148771221/WN_kq7CUHqxQpu6FZyVO98Tog" target="_blank"
                            style="border: 1px solid #48d0e0; color: #1c35af;" class="fc-cs-try-white">Watch recording</a>
                    </div>
                </div>
            </div>

            <!-- second -->
            <div class="container-speakers">
                <div class="container">
                    <h3 class="primeHead text-center">Meet the Speakers</h3>
                    <div class="fc-event-speacker-con row">
                        <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6 text-center pB60">
                            <img src="/images/customer/phillip.jpg" class="fc-img-round" title="andrea pavesi" />
                            <div class="fc-workplace-subhead">
                                Phillip Kopp
                            </div>
                            <div class="fc-speacker-designation">
                                CEO, Conectric Networks
                            </div>
                            <div class="w-feature-desc pT10 text-left">
                                A disruptive technology innovator with experience spanning hardware, wireless, and software tech for buildings, Phillip is a profound expert in the commercial building retrofit and overlay sensor industry. With the aim to integrate buildings, the people that use them, and renewable energy grid systems together in harmony, he's passionate about all things sustainability.
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6 text-center pB60">
                            <img src="/images/customer/shaun-profile.jpg" class="fc-img-round" title="stefano" />
                            <div class="fc-workplace-subhead">
                                Shaun Taylor
                            </div>
                            <div class="fc-speacker-designation">
                                International IoT Director, Facilio Inc
                            </div>
                            <div class="w-feature-desc pT10 text-left">
                               A seasoned professional in the smart buildings industry, Shaun has over 30+ years of experience delivering new and innovative solutions for operational excellence and cost reduction. A true evangelist in the IoT sector, Shaun is passionate about using technology to future proof real estate O&M.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- sample -->

            <div class="container" style="max-width: 900px; padding-top: 50px;">
                <div>
                    <h3 class="mB0 text-center primeHead">
                        What you’ll learn
                    </h3>
                    <div class="fc-learn-txt pT20"><span class="pink-dot mR10"></span>Identifying existing energy optimization opportunities that remain unrecognized</div>
                    <div class="fc-learn-txt"><span class="pink-dot mR10"></span>What your connected O&M strategy should look like heading into clean energy future</div>
                    <div class="fc-learn-txt"><span class="pink-dot mR10"></span>3 practical energy efficiency strategies and IoT value-drivers (at portfolio scale)</div>
                    <div class="text-center pT80 pB80">
                        <a href="https://zoom.us/webinar/register/6116148771221/WN_kq7CUHqxQpu6FZyVO98Tog" target="_blank"
                            style="border: 1px solid #48d0e0; color: #1c35af;" class="fc-cs-try-white">Watch recording</a>
                    </div>
                </div>

                <div class="fc-meetup-cus-logo">
                    <div class="pB50">
                        <img src="/images/customer-logo/facilio-logo.svg" alt title width="150" />
                    </div>
                    <div class="pB50">
                        <img src="/images/integrations/conectric.png" alt title width="230" />
                    </div>
                </div>
            </div>
            <!-- end -->

        </div>
        <Footer />
    </div>
</template>

<script>
    import Navbar from "../../components/Navbar";
    import Footer from "../../components/Footer";

    export default {
        components: {
            Navbar,
            Footer,
        },
        head() {
            return {
                title: "Improving energy efficiency in buildings using digital retrofits | Facilio Webinar",
                meta: [{
                        hid: "description",
                        name: "description",
                        content: "Learn how leading experts in property operations and the automation industry are leveraging technology to scale sustainability and energy savings across portfolios."
                    },
                    {
                        hid: "fb-share-title",
                        property: "og:title",
                        content: "Improving energy efficiency in buildings using digital retrofits | Facilio Webinar"
                    },
                    {
                        hid: "fb-share-description",
                        property: "og:description",
                        content: "Learn how leading experts in property operations and the automation industry are leveraging technology to scale sustainability and energy savings across portfolios."
                    },
                    {
                        hid: "fb-share-image",
                        property: "og:image",
                        content: "https://facilio.com/images/og-images/improving-energy-efficiency-in-buildings.png"
                    },
                    {
                        hid: "fb-share-url",
                        property: "og:url",
                        content: "https://facilio.com/webinar/improving-energy-efficiency-in-buildings"
                    },
                    {
                        hid: "twitter-meta",
                        name: "twitter:card",
                        content: "summary_large_image"
                    },
                    {
                        hid: "twitter-title",
                        name: "twitter:title",
                        content: "Improving energy efficiency in buildings using digital retrofits | Facilio Webinar"
                    },
                    {
                        hid: "twitter-description",
                        name: "twitter:description",
                        content: "Learn how leading experts in property operations and the automation industry are leveraging technology to scale sustainability and energy savings across portfolios."
                    },
                    {
                        hid: "twitter-image",
                        name: "twitter:image",
                        content: "https://facilio.com/images/og-images/improving-energy-efficiency-in-buildings.png"
                    },
                    {
                        hid: "twitter-url",
                        name: "twitter:url",
                        content: "https://facilio.com/webinar/improving-energy-efficiency-in-buildings"
                    }
                ],
                link: [{
                    rel: "canonical",
                    href: "https://facilio.com/webinar/improving-energy-efficiency-in-buildings"
                }],
                script: [{
                        src: "../js/page.js"
                    },
                    {
                        src: "../js/waypoints.min.js"
                    },
                    {
                        src: "../js/includes.js"
                    }
                ]
            };
        }
    };
</script>

<style>
   .fc-meetup-page .fc-webniar-h3{
        margin-left: inherit;
        margin-right: inherit;
        text-align: left;
        max-width: inherit;
        font-size: 23px;
    }
    .fc-webinar-page .fc-hub-content{
        max-width: 1000px;
    }

    @media screen and (max-width: 700px)  {
        .fc-meetup-page .fc-webniar-h3{
            padding-left: 0;
            padding-right: 0;
        }
    }
</style>