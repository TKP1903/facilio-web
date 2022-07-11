<template>
    <div class="events-page newspage btn-shade">
        <div class="mypage">
            <div id="productPage"></div>
            <div class="myPage" id="myPage">
                <div id="fc-header">
                    <Navbar />
                </div>

                <!-- home banner section -->
                <div class="press-details-home-banner">
                    <div class="press-home-wrap container">
                        <div class="row">
                            <div class="col-md-7">
                                <h3 class="press-subhead">
                                    Facilio helps UAE’s Quality Group automate facility operations at scale and deliver
                                    a frictionless customer experience
                                </h3>

                                <p class="press-date-txt">21st July 2020</p>
                            </div>
                            <div class="col-md-5">
                                <img class="pressimg" src="/images/press-release.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- home banner end -->

                <!-- facilio content  start-->
                <section>
                    <div class="legal-main">
                        <div class="privacy-content-container">
                            <div class="two-thirds">
                                <div class="legal-sidebar">
                                </div>

                                <div class="legal-content">
                                    <img src="/images/rebuild/sumith.png" alt="sumith, quality group" title="sumith, quality group" class="object-fit-cover"/>
                                    <div class="fwbold black-txt-24 blk-txt-mobile pT40">
                                        Quality Group reduces customer escalation by 85% percent, improves staff
                                        productivity, and gains portfolio-wide visibility into facility operations on
                                        the Facilio platform.
                                    </div>
                                    <div class="legal-content-para pT20">
                                        <span class="fwbold" style="font-family: 'ProximaNovaSemibold'">Dubai, July 21st, 2020</span>
                                        Facilio, the leading cloud-based property operations and maintenance platform
                                        provider, today announced that Quality Group, one of the top facilities
                                        management service providers in the UAE and a 25-year-old sister entity of
                                        multi-venture enterprise Gate Holdings, is successfully using the Facilio O&M
                                        platform to automate maintenance, engage with tenants in real-time, as well as
                                        strengthen its service quality for clients.
                                    </div>

                                    <div class="legal-content-para">
                                        Occupants are increasingly demanding better-maintained facilities and instant
                                        service resolutions as opposed to the conventional priorities of good aesthetics
                                        and pricing. New FM business models are therefore centered on resolving
                                        inefficiencies in day-to-day operations while taking a proactive approach to
                                        identifying friction points, even before end-users feel its impact. Recognizing
                                        the incredible demand and opportunity for value-added facility services, Quality
                                        Group has realigned its focus towards leveraging a digital strategy that has
                                        helped them streamline routines, minimize compliance risk, and gain real-time
                                        operations insights - something conventional CAFM and ERP solutions were
                                        incapable of supporting.
                                    </div>
                                    <div class="legal-content-para">
                                        “Our vision is to deliver and scale a truly agile FM services business that puts
                                        customers’ needs first. From our experience of using multiple clunky and bloated
                                        CAFM, we knew we needed an adaptable solution that enhances our business
                                        operations, and seamlessly fits the way we operate, rather than the other way
                                        around”, said Sumith Sukumaran, the Operations Manager of Quality Group, UAE.
                                        “Facilio’s comprehensive, integrated solution suite is perfect for our current
                                        and future needs. With the Facilio platform, we can consolidate maintenance
                                        routines, tenants requests, and workforce KPIs, and help our stakeholders make
                                        data-led operational decisions to deliver continuous value to our customers
                                        across UAE”, he adds.
                                    </div>

                                    <div class="legal-content-para">
                                        Progressive FM’s are realising the benefits of technology partners to create
                                        end-user value, with agile operations becoming even more significant in light of
                                        the recent crisis. “Modern FM leaders need data-driven decision-making as well
                                        as portfolio-wide visibility to drive efficiency. We built Facilio as a flexible
                                        platform to enable a suite of cloud-native apps and seamless mobility. This also
                                        ensures a fast implementation cycle, something that can be especially useful
                                        when you need agile responsiveness during turbulent times”, says Prabhu
                                        Ramachandran, Founder and CEO of Facilio Inc. “We are very happy that our
                                        platform implementation has enabled the Quality Group to rapidly realize
                                        benefits and meet their benchmarks for frictionless customer experience”, he
                                        adds.
                                    </div>

                                    <div class="legal-content-para">
                                        With over 1500 units under its management, Quality Group needed to establish the
                                        infrastructure to automate thousands of routines, manage customer requests, and
                                        optimize staff time, in order to find new ways to retain tenants and expand to
                                        new offerings. After an extensive review of leading CAFMs offerings, the company
                                        chose Facilio as its operational platform due to Facilio’s custom capabilities
                                        and its ability to deliver granular, contextual insights to all levels of
                                        stakeholders - enabling them with the freedom to focus on what’s important to
                                        their business - customer experience. “Through its customer-first approach and
                                        Facilio as its strategic technology partner, Quality Group’s goal is to transfer
                                        the value of operational efficiency to clients through technology-led services.
                                        The success in reducing escalations drastically within a short span is paving
                                        the way for us to closely look at predictive analytics and sustainability
                                        management as an added service”, concludes Sumith.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <!-- facilio content end -->
            <Footer />

        </div>
    </div>
</template>

<script>
    import Navbar from "../../components/Navbar";
    import Footer from "../../components/Footer";
    export default {
        components: {
            Navbar,
            Footer
        },
        head() {
            return {
                title: "Facilio helps UAE’s Quality Group automate facility operations at scale and deliver a frictionless customer experience",
                meta: [{
                        hid: "description",
                        name: "description",
                        content: "Quality Group reduces customer escalation by 85% percent, improves staff productivity, and gains portfolio-wide visibility into facility operations on the Facilio platform."
                    },
                    {
                        hid: "fb-share-title",
                        property: "og:title",
                        content: "Facilio helps UAE’s Quality Group automate facility operations at scale and deliver a frictionless customer experience"
                    },
                    {
                        hid: "fb-share-description",
                        property: "og:description",
                        content: "Quality Group reduces customer escalation by 85% percent, improves staff productivity, and gains portfolio-wide visibility into facility operations on the Facilio platform."
                    },
                    {
                        hid: "fb-share-image",
                        property: "og:image",
                        content: "/images/rebuild/sumith.png"
                    },
                    {
                        hid: "fb-share-url",
                        property: "og:url",
                        content: "https://facilio.com/newsroom/newsroom/facilio-helps-quality-group-deliver-frictionless-customer-experience"
                    },
                    {
                        hid: "twitter-meta",
                        name: "twitter:card",
                        content: "summary_large_image"
                    },
                    {
                        hid: "twitter-title",
                        name: "twitter:title",
                        content: "Facilio helps UAE’s Quality Group automate facility operations at scale and deliver a frictionless customer experience"
                    },
                    {
                        hid: "twitter-description",
                        name: "twitter:description",
                        content: "Quality Group reduces customer escalation by 85% percent, improves staff productivity, and gains portfolio-wide visibility into facility operations on the Facilio platform."
                    },
                    {
                        hid: "twitter-image",
                        name: "twitter:image",
                        content: "/images/rebuild/sumith.png"
                    },
                    {
                        hid: "twitter-url",
                        name: "twitter:url",
                        content: "https://facilio.com/newsroom/newsroom/facilio-helps-quality-group-deliver-frictionless-customer-experience"
                    }
                ],
                link: [{
                    rel: "canonical",
                    href: "https://facilio.com/newsroom/newsroom/facilio-helps-quality-group-deliver-frictionless-customer-experience"
                }],
                script: [{
                        src: "../../js/page.js"
                    },
                    {
                        src: "../../js/waypoints.min.js"
                    },
                    {
                        src: "../../js/includes.js"
                    }
                ]
            };
        }
    };
</script>

<style>
    #fc-header .navbar-default {
        background-color: #ffffff !important;
    }

    .nav>li>a,
    .nav>li>a:focus {
        background-color: transparent !important;
        color: #000;
        border: none !important;
        font-size: 22px !important;
        font-weight: 700;
    }
</style>