<template>
    <div class="productPage btn-shade fc-meetup-page">
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
                            Leading property operations through change with data
                        </h1>
                        <p class="pB20 fc-yellow-txt">
                            November 18, 2020 - 12:00 PM CET
                        </p>
                        <a href="https://zoom.us/webinar/register/WN_udF_P-42T5GVFA5fTitB8w" target="_blank"
                            class="fc-cs-try-white">Reserve your spot</a>
                    </div>
                </div>
            </div>

            <div class="container fc-webinar-series">
                <h3>The inflection point in real estate today</h3>
                <div class="fc-meetup-page-content-con">
                    <p>
                        Macro trends are accelerating the need for digital innovation in buildings today. Climate
                        change, millennial occupants, increasing knowledge gap in controlling building systems, emphasis
                        on smart buildings, and to add to it pandemic compliance and constraints. With changing
                        conditions in today's real estate landscape, building operators, service providers, and digital
                        providers are fast adopting agile innovation.
                    </p>
                    <p>
                        If you find yourself constantly asking the following questions, this webinar is for you
                    </p>
                    <div class="fc-webinar-feat-card" style="max-width: 1000px;margin-left: inherit;">
                        <p>
                            <span class="pink-dot mR10"></span> How can I solve the most important occupant-related challenges for my customers?
                        </p>
                        <p>
                            <span class="pink-dot mR10"></span> How can I drive visibility and unlock more value from the data that is already being
                            generated in buildings?
                        </p>
                        <p>
                            <span class="pink-dot mR10"></span> What do I need to offer more integrated, and predictive services?
                        </p>
                    </div>
                    <!-- sample -->
                    <div class="text-center pT50 pB40">
                        <a href="https://zoom.us/webinar/register/WN_udF_P-42T5GVFA5fTitB8w" target="_blank"
                            style="border: 1px solid #48d0e0; color: #1c35af;" class="fc-cs-try-white">Register now</a>
                    </div>
                </div>
            </div>

            <!-- second -->
            <div class="container-speakers">
                <div class="container">
                        <h3 class="primeHead text-center">Meet the Speakers</h3>
                        <div class="fc-event-speacker-con row">
                            <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6 text-center pB60">
                                <img src="/images/andrea-pavesi.jpg" class="fc-img-round" title="andrea pavesi" />
                                <div class="fc-workplace-subhead">
                                    Andrea Pavesi
                                </div>
                                <div class="fc-speacker-designation">
                                    Head of Energy Division, RTC SpA
                                </div>
                                <div class="w-feature-desc pT10 text-left">
                                    Responsible for energy management solutions for key strategic sectors like
                                    integrated urban water management and telecom companies, Andrea is driven by
                                    customer focus and flexibility while he spearheads projects with real estate
                                    portfolios.
                                </div>
                            </div>

                            <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6 text-center pB60">
                                <img src="/images/stefano.jpg" class="fc-img-round" title="stefano" />
                                <div class="fc-workplace-subhead">
                                    Stefano Strapparava
                                </div>
                                <div class="fc-speacker-designation">
                                    CEO, Smart Services International Sagl
                                </div>
                                <div class="w-feature-desc pT10 text-left">
                                    A seasoned professional in remote monitoring of industrial equipment, Stefano runs
                                    SSI - a recognized Niagara partner. Stefano is passionate about enabling customers
                                    to create and deliver value services based on IoT.
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6 text-center">
                                <img src="/images/prabhu-facilio.jpg" class="fc-img-round" title="stefano" />
                                <div class="fc-workplace-subhead">
                                    Prabhu Ramachandran
                                </div>
                                <div class="fc-speacker-designation">
                                    Founder & CEO, Facilio Inc.
                                </div>
                                <div class="w-feature-desc pT10 text-left">
                                    A proponent of data-driven building operations, Prabhu is on a mission to help the
                                    built environment thrive towards continuous sustainability by empowering people,
                                    machines, and buildings to achieve the highest levels of efficiency.
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
                    <div class="fc-learn-txt pT20"><span class="pink-dot mR10"></span>Adopting IoT in Buildings for real-time operational intelligence</div>
                    <div class="fc-learn-txt"><span class="pink-dot mR10"></span>How automation of operations and maintenance workflows can uncover data-driven decision for
                        your customers</div>
                    <div class="fc-learn-txt"><span class="pink-dot mR10"></span>Harnessing Cloud, Mobility, and IoT to meet today's market demand</div>
                    <div class="text-center pT80 pB80">
                        <a href="https://zoom.us/webinar/register/WN_udF_P-42T5GVFA5fTitB8w" target="_blank"
                            style="border: 1px solid #48d0e0; color: #1c35af;" class="fc-cs-try-white">Register now</a>
                    </div>
                    </div>

                    <div class="fc-meetup-cus-logo">
                        <div class="pB50">
                            <img src="/images/customer-logo/facilio-logo.svg" alt title width="150" />
                        </div>
                        <div class="pB50">
                            <img src="/images/customer-logo/rtc-spa.png" alt title width="150" />
                        </div>
                        <div class="pB50">
                            <img src="/images/customer-logo/ss-smart.png" alt title width="150" />
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
                title: "Leading Property Operations With Data | Facilio Webinar",
                meta: [{
                        hid: "description",
                        name: "description",
                        content: "Learn how leading experts in property operations and automation industry are leveraging technology to meet new-age expectations and uncover data-driven insights for their customers."
                    },
                    {
                        hid: "fb-share-title",
                        property: "og:title",
                        content: "Leading Property Operations With Data | Facilio Webinar"
                    },
                    {
                        hid: "fb-share-description",
                        property: "og:description",
                        content: "Learn how leading experts in property operations and automation industry are leveraging technology to meet new-age expectations and uncover data-driven insights for their customers."
                    },
                    {
                        hid: "fb-share-image",
                        property: "og:image",
                        content: "https://facilio.com/images/og-images/webniar.png"
                    },
                    {
                        hid: "fb-share-url",
                        property: "og:url",
                        content: "https://facilio.com/webinar/leading-property-operations-with-data"
                    },
                    {
                        hid: "twitter-meta",
                        name: "twitter:card",
                        content: "summary_large_image"
                    },
                    {
                        hid: "twitter-title",
                        name: "twitter:title",
                        content: "Leading Property Operations With Data | Facilio Webinar"
                    },
                    {
                        hid: "twitter-description",
                        name: "twitter:description",
                        content: "Learn how leading experts in property operations and automation industry are leveraging technology to meet new-age expectations and uncover data-driven insights for their customers."
                    },
                    {
                        hid: "twitter-image",
                        name: "twitter:image",
                        content: "https://facilio.com/images/og-images/webniar.png"
                    },
                    {
                        hid: "twitter-url",
                        name: "twitter:url",
                        content: "https://facilio.com/webinar/leading-property-operations-with-data"
                    }
                ],
                link: [{
                    rel: "canonical",
                    href: "https://facilio.com/webinar/leading-property-operations-with-data"
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

<style></style>