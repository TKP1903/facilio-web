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
                                    Facilio & EU-based Evogy partner to help properties enhance operating efficiency & boost portfolio performance
                                </h3>

                                <p class="press-date-txt">27th January 2021</p>
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
                                    <img src="/images/become-partner-logo/evogy.png" alt="IDC Brookfield" title="IDC Brookfield" class="object-fit-cover" style="width: 160px;"/>
                                    <div class="legal-content-para pT20">
                                        <span class="fwbold" style="font-family: 'ProximaNovaSemibold'">New York, January 27th, 2021:</span>
                                       Facilio, a leading AI-driven property operations platform, and Italy-based Evogy, a leading digital energy service provider specializing in the Energy-as-a-Service model, announced a strategic partnership to deliver IoT-led solutions and services to drive sustainability and improve operational efficiency for real estate portfolios.
                                    </div>

                                    <div class="legal-content-para">
                                      Commenting on the partnership, Stefano Zanin of Evogy, CTO and Co-Founder, stressed the need for a proactive response to climate-change and adherence to sustainability, in real estate. "There are huge opportunities to realize cost savings through energy efficiency, with the power of technology like IoT & Cloud. Using Facilio's cloud-based platform, we will enhance our digital energy services via a command and control center, to optimize asset performance at enterprise scale, and fulfill the needs of large portfolio customers," Stefano added. 
                                    </div>
                                    <div class="legal-content-para">
                                      "The Facilio+Evogy combo unlocks great value for customers, through complementary solutions that enhance the portfolio performance in real-time”, CEO and Founder of Facilio, Prabhu Ramachandran said. “The Facilio platform, in combination with Evogy’s ‘Simon’ plug-and-play retrofit solution, reduces barriers to connectivity, aggregates building data, and identifies operational inefficiencies proactively. Our partnership with a regional leader of Evogy’s caliber will enable real estate owners and operators to elevate portfolio operations, exceed sustainability goals, and realize value faster” Prabhu added.
                                    </div>
                                    <div class="legal-content-para">
                                      As a result of this partnership, Facilio and Evogy will extend their offerings to deliver well-rounded, intelligence-led connected operations and sustainability services, for large commercial portfolios. The enhanced capabilities include:
                                    </div>
                                     <ul class="press-list-view mB30">
                                        <li>
                                           Remote monitoring and control of multiple building assets, equipment, and systems (HVAC, fire safety, access control, etc.) through a “single-pane-of-glass” dashboard.
                                        </li>
                                        <li>
                                            Automated operational workflows, along with preventive, condition-based, and predictive maintenance.
                                        </li>
                                        <li>
                                            New occupant/tenant services through personalized comfort control apps; App-based tenant service requests and visitor management.
                                        </li>
                                        <li>
                                            Automated, ML-driven algorithms for optimization of HVAC systems for energy efficiency.
                                        </li>
                                        <li>
                                            Dynamic optimization of energy assets using Evogy’s ‘Simon’ digital energy specialist, in response to variable load, weather forecasts, electricity tariffs, etc.
                                        </li>
                                    </ul>
                                    <div class="legal-content-para">
                                        Facilio and Evogy's synergetic operating model will enable clients to unlock the power of building data and make real-time performance changes; to optimize costs, energy usage, and productivity. End users and occupants will benefit from superior experiences and continuous responsive control.
                                    </div>
                                    <div class="legal-content-heading">
                                        About Evogy:
                                    </div>
                                    <div class="legal-content-para">
                                        Evogy is a leading digital energy service provider specializing in the Energy-as-a-Service model of sustainability services. This includes consulting, project management, and full-stack consumption optimization services for industries, retail, large properties, and more. Thanks to Evogy’s IoT and AI-cloud-based platform called Simon, the “digital energy specialist”, Evogy provides a suite of apps for advanced energy management (monitoring, control, and optimization of performance equipment building systems), demand response, and energy communities. Learn more about Evogy at <a href="https://www.evogy.it/" target="_balnk">www.evogy.it</a> 
                                    </div>
                                    <div class="legal-content-heading">
                                        About Facilio:
                                    </div>
                                    <div class="legal-content-para">
                                       Facilio's AI-driven property operations platform allows real estate owners to aggregate building data, optimize performance, and control portfolio operations - all from one place.  Customers in the commercial office, healthcare & retail categories use Facilio across 40 million square feet to reduce operations costs, increase net asset value & derisk operational liability. Headquartered in New York City with offices in Padova, Dubai, Chennai & Singapore, Facilio is a global company backed by leading investors including Accel Partners and Tiger Global Management. Learn more about Facilio O&M platform: <a href="https://facilio.com/" target="_balnk">https://facilio.com</a>
                                    </div>
               
                                    <div class="legal-content-heading">
                                       For more information or interviews please contact:
                                    </div>
                                    <div class="legal-content-para mB0" style="font-family: ProximaNovaBold;">
                                        FACILIO
                                    </div>
                                      <div class="legal-content-para">
                                        <b style="font-family: ProximaNovaBold;">Mukil Ganesan</b> <br />
                                        Marketing at Facilio <br />
                                        +918190853197 <br />
                                        mukil@facilio.com
                                    </div>
                                    <div class="legal-content-para mB0" style="font-family: ProximaNovaBold;">
                                        EVOGY
                                    </div>
                                    <div class="legal-content-para">
                                        <b style="font-family: ProximaNovaBold;">Stefano Zanin</b> <br />
                                        CTO & Co-Founder <br />
                                        +39 3315791987 <br />
                                        stefano.zanin@evogy.it
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
                title: " Facilio & EU-based Evogy partner to help properties enhance operating efficiency & boost portfolio performance ",
                meta: [{
                        hid: "description",
                        name: "description",
                        content: "The partnership will deliver 360° lifecycle management and services of real-time energy monitoring, equipment performance optimization, and actionable workflow in real estate operations."
                    },
                    {
                        hid: "fb-share-title",
                        property: "og:title",
                        content: " Facilio & EU-based Evogy partner to help properties enhance operating efficiency & boost portfolio performance"
                    },
                    {
                        hid: "fb-share-description",
                        property: "og:description",
                        content: "The partnership will deliver 360° lifecycle management and services of real-time energy monitoring, equipment performance optimization, and actionable workflow in real estate operations."
                    },
                    {
                        hid: "fb-share-image",
                        property: "og:image",
                        content: "https://facilio.com/images/og-images/evogy.png"
                    },
                    {
                        hid: "fb-share-url",
                        property: "og:url",
                        content: "https://facilio.com/newsroom/facilio-evogy-partner-to-help-properties-enhance-operating-efficiency-boost-portfolio-performance"
                    },
                    {
                        hid: "twitter-meta",
                        name: "twitter:card",
                        content: "summary"
                    },
                    {
                        hid: "twitter-title",
                        name: "twitter:title",
                        content: " Facilio & EU-based Evogy partner to help properties enhance operating efficiency & boost portfolio performance "
                    },
                    {
                        hid: "twitter-description",
                        name: "twitter:description",
                        content: "The partnership will deliver 360° lifecycle management and services of real-time energy monitoring, equipment performance optimization, and actionable workflow in real estate operations."
                    },
                    {
                        hid: "twitter-image",
                        name: "twitter:image",
                        content: "https://facilio.com/images/og-images/evogy.png"
                    },
                    {
                        hid: "twitter-url",
                        name: "twitter:url",
                        content: "https://facilio.com/newsroom/facilio-evogy-partner-to-help-properties-enhance-operating-efficiency-boost-portfolio-performance"
                    }
                ],
                link: [{
                    rel: "canonical",
                    href: "https://facilio.com/newsroom/facilio-evogy-partner-to-help-properties-enhance-operating-efficiency-boost-portfolio-performance"
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