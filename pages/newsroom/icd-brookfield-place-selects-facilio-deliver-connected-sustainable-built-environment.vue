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
                                    ICD Brookfield Place Selects Facilio to Deliver on a Connected & Sustainable Built
                                    Environment
                                </h3>

                                <p class="press-date-txt">23rd September 2020</p>
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
                                    <img src="/images/og-images/icd-brookfield.jpg" alt="IDC Brookfield" title="IDC Brookfield" class="object-fit-cover"/>
                                    <div class="legal-content-para pT20">
                                        <span class="fwbold" style="font-family: 'ProximaNovaSemibold'">NEW YORK - USA,
                                            September 23rd, 2020:</span>
                                        Facilio, a leading AI-driven property operations platform, announced today that
                                        it has been chosen by ICD Brookfield Place (ICDBP) to optimize building
                                        performance and deliver real-time operational intelligence. ICDBP, a joint
                                        venture between Investment Corporation of Dubai (ICD) and Brookfield Properties,
                                        is one of Dubai’s premier lifestyle and business destinations.
                                    </div>

                                    <div class="legal-content-para">
                                        With over 4 acres of curated dining, retail, and community space, alongside
                                        990,000 square feet of Grade A office space in the heart of Dubai’s Commercial
                                        Business District, ICDBP sets the benchmark in addressing the changing
                                        wellbeing, environmental and productivity needs of today’s workforce. ICDBP
                                        selected Facilio after an extensive process to support this objective. Facilio’s
                                        cloud platform will allow ICDBP to:
                                    </div>
                                    <ul class="press-list-view mB30">
                                        <li>
                                            Gain real-time insights into building performance
                                        </li>
                                        <li>
                                            Control spaces, equipment, and multiple building systems remotely from a
                                            “single pane of glass”
                                        </li>
                                        <li>
                                            Exceed sustainability goals by leveraging embedded AI capabilities
                                        </li>
                                        <li>
                                            Automate operations and equipment maintenance
                                        </li>
                                        <li>
                                            Introduce new experiences for tenants
                                        </li>
                                    </ul>
                                    <div class="legal-content-para">
                                        “We needed a scalable and flexible solution to unify all of our disparate
                                        building systems. Facilio’s thought leadership and innovative product portfolio
                                        stood out clearly & aligned well with our vision. As we look forward to
                                        launching the workplace of the future, we are proud to work with a partner like
                                        Facilio”, said Rob Devereux, CEO of ICD Brookfield.
                                    </div>

                                    <div class="legal-content-para">
                                        “Facilio was designed to help the real estate industry transition away from
                                        reactive and inefficient operations to a proactive, data-driven model. As ICDBP
                                        welcomes new tenants, we are confident that our collaboration will enrich
                                        occupant experience and transform how buildings are managed”, said Prabhu
                                        Ramachandran, CEO of Facilio.
                                    </div>
                                    <div class="legal-content-para">
                                        To learn more about the partnership and the Facilio solution, please visit: <a
                                            href="https://facilio.com/" target="_blank">https://facilio.com/</a>
                                    </div>

                                    <div class="legal-content-heading">
                                        About ICD Brookfield Place
                                    </div>
                                    <div class="legal-content-para">
                                        Located in the Dubai International Finance Centre, ICD Brookfield Place is the
                                        region's premier lifestyle and business destination, with over 4 acres of highly
                                        curated world-class dining, retail, and community spaces. The precinct, designed
                                        by Foster + Partners, comprises a 53-storey, 990,000 square foot office tower,
                                        140,000 sf of retail space, a private members club, and 2,700 car parking
                                        spaces. At the heart of the scheme is the 20,000 sf summer garden, a 31m high
                                        public realm with an award-winning arts and events program.
                                    </div>
                                    <div class="legal-content-para">
                                        For more information about ICD Brookfield Place, please visit: 
                                        <a href="http://www.icdbrookfieldplace.com/" target="_blank">www.icdbrookfieldplace.com</a>
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

                                    <div class="legal-content-heading">
                                        For more information or interviews please contact:
                                    </div>

                                    <div class="legal-content-para">
                                        <b style="font-family: ProximaNovaBold;">Mukil Ganesan</b> <br />
                                        Marketing at Facilio <br />
                                        +918190853197 <br />
                                        mukil@facilio.com
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
                title: "ICD Brookfield Place Selects Facilio to Deliver on a Connected & Sustainable Built Environment",
                meta: [{
                        hid: "description",
                        name: "description",
                        content: "Facilio has been chosen by ICD Brookfield Place (ICDBP) to optimize building performance and deliver real-time operational intelligence."
                    },
                    {
                        hid: "fb-share-title",
                        property: "og:title",
                        content: "ICD Brookfield Place Selects Facilio to Deliver on a Connected & Sustainable Built Environment"
                    },
                    {
                        hid: "fb-share-description",
                        property: "og:description",
                        content: "Facilio has been chosen by ICD Brookfield Place (ICDBP) to optimize building performance and deliver real-time operational intelligence."
                    },
                    {
                        hid: "fb-share-image",
                        property: "og:image",
                        content: "https://facilio.com/images/og-images/icd-brookfield.jpg"
                    },
                    {
                        hid: "fb-share-url",
                        property: "og:url",
                        content: "https://facilio.com/futureproof/icd-brookfield"
                    },
                    {
                        hid: "twitter-meta",
                        name: "twitter:card",
                        content: "summary"
                    },
                    {
                        hid: "twitter-title",
                        name: "twitter:title",
                        content: "ICD Brookfield Place Selects Facilio to Deliver on a Connected & Sustainable Built Environment"
                    },
                    {
                        hid: "twitter-description",
                        name: "twitter:description",
                        content: "Facilio has been chosen by ICD Brookfield Place (ICDBP) to optimize building performance and deliver real-time operational intelligence."
                    },
                    {
                        hid: "twitter-image",
                        name: "twitter:image",
                        content: "https://facilio.com/images/og-images/icd-brookfield.jpg"
                    },
                    {
                        hid: "twitter-url",
                        name: "twitter:url",
                        content: "https://facilio.com/futureproof/icd-brookfield"
                    }
                ],
                link: [{
                    rel: "canonical",
                    href: "https://facilio.com/futureproof/icd-brookfield"
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