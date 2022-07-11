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
                                    UAE’s FM service providers harness technology to deliver seamless customer
                                    experiences amid pandemic, marking pivotal turning point in industry
                                </h3>

                                <p class="press-date-txt">11 November 2020</p>
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
                                    <div class="fwbold black-txt-24 blk-txt-mobile">
                                        Progressive niche FMs are driving personalized and proactive services for
                                        customers by adopting a data-driven operational approach
                                    </div>
                                    <div class="legal-content-para pT20">
                                        <span class="fwbold" style="font-family: 'ProximaNovaSemibold'">Dubai - UAE,
                                            November 11th, 2020:</span>
                                        Facilio, a leading AI-driven property operations & maintenance platform, today
                                        announced that UAE’s niche FM service providers are replacing manual processes
                                        and legacy tools with modern software for portfolio operations. Build Well
                                        Holdings, a real estate investment company, GGFM, a Data-Driven Smart Facilities
                                        Management Solution Provider, and Bright Environment, an integrated facility
                                        management service provider, are using the Facilio platform to be agile and
                                        drive seamless customer experiences amidst changing conditions.
                                    </div>

                                    <div class="legal-content-para">
                                        The global pandemic has become a catalyst for long-term change across the real
                                        estate and FM services landscape, accelerating trends in occupant health,
                                        wellness, sustainability, service delivery, and agile operations. As
                                        digital-native tenants and occupants are demanding proactive services and
                                        hands-on control of their spaces, progressive FM service providers are taking
                                        the role of strategic pillars in reopening and operating buildings with a strong
                                        data-led and future-ready operations strategy in place.
                                    </div>
                                    <div class="legal-content-para">
                                        “We believe that data is the new oil, and processes are the key differentiator
                                        in the service industry. By harnessing technology, we will be able to reimagine
                                        service delivery, transform the operational approach, to meet clients where they
                                        are today and ultimately provide friction-less experiences” said Hafilur Rahman,
                                        Executive Director at GGFM.
                                    </div>
                                    <div class="legal-content-para">
                                        Facilio’s unique property operations cloud platform is enabling FM operatives to
                                        make this transition in approach, by allowing them to:
                                    </div>
                                    <ul class="press-list-view mB30">
                                        <li>
                                            Automate maintenance at portfolio scale
                                        </li>
                                        <li>
                                            Customize and manage complex workflows
                                        </li>
                                        <li>
                                            Benchmark equipment performance in real-time
                                        </li>
                                        <li>
                                            Drive delightful end-to-end experiences for tenants
                                        </li>
                                        <li>
                                            Introduce new value-based wellness, sustainability, and predictive services
                                        </li>
                                    </ul>
                                    <div class="legal-content-para">
                                        More than ever before, real estate owners, operators, and FM service providers
                                        recognize the need for real-time operational intelligence to help them make
                                        informed decisions on efficiency and experience improvements. “With Facilio, we
                                        are able to consolidate every building data into one system to create a
                                        sustainable and well-maintained built environment. This helps us focus our
                                        energy on improving the asset value and experience”, said Zaheer Rattonsey,
                                        Managing Director, Build Well Holdings.
                                    </div>

                                    <div class="legal-content-para">
                                        "By observing both the real time and historical indicators of the various
                                        operational parameters, we have been able to implement effective responsiveness
                                        and optimize resource allocations, instantly. Further, through the unique
                                        cloud-native portfolio operational models in Facilio, we are better equipped to
                                        surpass the capabilities of traditional CaFM and ERP solutions. With Facilio on
                                        board, we can confidently state that we are miles ahead in the journey of our
                                        mission of " Excellence through Innovation”. As a dynamic and hands-on FM
                                        operator, real-time dashboards help us embody both agility and automation
                                        capabilities, enhancing our insights to make value-added business decisions in
                                        any climate”, added Balaji Parthasarathy, Director - Operations, at Bright
                                        Environment."
                                    </div>
                                    <div class="legal-content-para">
                                        “We’re excited about the continued validation of data-led operations,
                                        demonstrating the technology opportunity for FM service providers to execute a
                                        portfolio-wide service approach. Our solution will serve as a foundation to
                                        remove inefficiencies and barriers to innovate and grow in new market
                                        conditions”, said Prabhu Ramachandran, Founder & CEO at Facilio, in closing.
                                    </div>
                                    <div class="legal-content-heading">
                                        About Facilio
                                    </div>
                                    <div class="legal-content-para">
                                        Facilio’s AI-driven property operations platform allows real estate owners to
                                        aggregate building data, optimize performance, and control portfolio operations
                                        - all from one place. Customers in the commercial office, healthcare & retail
                                        categories use Facilio across 40 million square feet to reduce operations costs,
                                        increase net asset value & derisk operational liability. Headquartered in New
                                        York City with offices in Padova, Dubai, Chennai & Singapore, Facilio is a
                                        global company backed by leading investors including Accel Partners and Tiger
                                        Global Management.
                                    </div>
                                    <div class="legal-content-para">
                                        For more information please visit: <a href="https://facilio.com/"
                                            target="_blank">https://facilio.com/</a>
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
                title: "UAE’s FM Service Providers Harness Technology to Deliver Seamless Customer Experiences Amid Pandemic",
                meta: [{
                        hid: "description",
                        name: "description",
                        content: "Progressive niche FMs are driving personalized and proactive services for customers by adopting a data-driven operational approach "
                    },
                    {
                        hid: "fb-share-title",
                        property: "og:title",
                        content: "UAE’s FM Service Providers Harness Technology to Deliver Seamless Customer Experiences Amid Pandemic"
                    },
                    {
                        hid: "fb-share-description",
                        property: "og:description",
                        content: "Progressive niche FMs are driving personalized and proactive services for customers by adopting a data-driven operational approach "
                    },
                    {
                        hid: "fb-share-image",
                        property: "og:image",
                        content: "https://facilio.com/images/og-images/uae-fm-service.png"
                    },
                    {
                        hid: "fb-share-url",
                        property: "og:url",
                        content: "https://facilio.com/newsroom/uae-fm-service-providers-harness-technology-to-deliver-seamless-customer-exeperience-amid-pandemic"
                    },
                    {
                        hid: "twitter-meta",
                        name: "twitter:card",
                        content: "summary"
                    },
                    {
                        hid: "twitter-title",
                        name: "twitter:title",
                        content: "UAE’s FM Service Providers Harness Technology to Deliver Seamless Customer Experiences Amid Pandemic"
                    },
                    {
                        hid: "twitter-description",
                        name: "twitter:description",
                        content: "Progressive niche FMs are driving personalized and proactive services for customers by adopting a data-driven operational approach "
                    },
                    {
                        hid: "twitter-image",
                        name: "twitter:image",
                        content: "https://facilio.com/images/og-images/uae-fm-service.png"
                    },
                    {
                        hid: "twitter-url",
                        name: "twitter:url",
                        content: "https://facilio.com/newsroom/uae-fm-service-providers-harness-technology-to-deliver-seamless-customer-exeperience-amid-pandemic"
                    }
                ],
                link: [{
                    rel: "canonical",
                    href: "https://facilio.com/newsroom/uae-fm-service-providers-harness-technology-to-deliver-seamless-customer-exeperience-amid-pandemic"
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