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
                                    Moro Hub joins forces with US-based Facilio to Boost UAE’s Energy Saving Strategies
                                </h3>

                                <p class="press-date-txt">13th December 2020</p>
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
                                    <img src="/images/newsroom/moro-banner.png" alt="IDC Brookfield" title="IDC Brookfield" class="object-fit-cover" style="width: 250px;"/>
                                    <div class="legal-content-para pT20">
                                        <span class="fwbold" style="font-family: 'ProximaNovaSemibold'">Dubai, UAE, December 13th, 2020:</span>
                                       Moro Hub (Data Hub Integrated Solutions), a wholly-owned subsidiary of Dubai Electricity and Water Authority (DEWA) and US-based Facilio, a leading AI-driven property operations cloud platform, has announced a strategic partnership to launch Energy Management and Monitoring Services for commercial and residential buildings in the UAE. The new service aims to reinforce and bring to focus the next level energy-saving strategies of Dubai and the UAE. 
                                    </div>

                                    <div class="legal-content-para">
                                      Equipped with innovative and top-notch digital features, the next-generation service will be deployed across buildings and key structures that will reinforce the country's overarching sustainability goals, as well as result in more substantial and integrated electricity conservation programs. 
                                    </div>
                                    <div class="legal-content-para">
                                      Mohammad Bin Sulaiman, CEO of Moro Hub, said: "We are pleased to associate with Facilio to deliver the Energy Monitoring and Management service. Through this platform, we seek to highlight the role of technologies in maximizing power utilization in various infrastructures, including buildings, and minimizing electricity consumption through higher operational efficiency of key structures and facilities. This commitment is according to our endeavors to promote energy efficiency in buildings and in line with DEWA's intensified initiatives to decrease power consumption levels of Dubai's buildings."
                                    </div>
                                    <div class="legal-content-para">
                                      Energy Monitoring and Management services ensure asset reliability and reduce energy-related capital and operational expenses. This cloud-based service provides a tailored approach to the efficient management of power in buildings by providing asset owners with the capability to control their digitized energy and assets network. The Energy Monitoring and Management service includes energy management; asset performance; fault detection and diagnostics; proactive maintenance management and Measurement & Verification
                                    </div>
                                    <div class="legal-content-para">
                                      "The Energy Monitoring and Management services leverage the Internet of Things connectivity and distributed intelligence to ensure an optimized and cost-effective performance of buildings and assets through centrally monitored and controlled operational systems. By rolling out these services, facilities managers and owners can maximize uptime and operational efficiency, reduce cost, meet sustainability goals, and enrich the overall occupant experience. Its other benefits include lower repair costs and downtime prevention apart from resolving other key issues," Bin Sulaiman added. 
                                    </div>
                                    <div class="legal-content-para">
                                     Moro Hub, one of Dubai's 10X enablers, is a next-generation data hub that provides cutting-edge services to its clients and creates opportunities now and in the future. Its mission is to contribute to the digital transformation of society by leveraging its expertise, capabilities, and alliances.
                                    </div>
                                    <div class="legal-content-para">
                                     Prabhu Ramachandran, Founder & CEO of Facilio said, "We are pleased to collaborate with Moro Hub to deliver a single connected operational environment. This cloud-based service will unify disparate building systems and enable a modern, data-driven model of property operations to improve building performance in real-time and meet sustainability goals. We are optimistic that the synergy between Moro Hub's advanced digital ecosystem and Facilio's O&M platform will help the industry unlock new potential for renewed operational excellence with greater agility."
                                    </div>
                                    <div class="legal-content-para">
                                     By providing its digital services, including its new Energy Monitoring and Management services, Moro Hub guarantees minimum capital expenditure, 24/7 operation via its Smart Cities Command and Control Centre, maintenance and warranty of all materials and software during the engagement term, and unlimited access to the portals for asset and site monitoring. Moro Hub's offerings are also hosted in Government Data Centres within the country with the highest level of security protocols. 
                                    </div>
                                    <div class="legal-content-heading">
                                        About Facilio:
                                    </div>

                                    <div class="legal-content-para">
                                      Facilio is the leading AI-based property operations platform that helps real estate portfolios aggregate building data, optimize performance in real-time, and control operations - all from one place. With its hardware-agnostic IoT Edge agent, Facilio aggregates hard-to-access building data onto a single platform-within days and not weeks. Facilio provides a suite of apps for O&M management including maintenance management, connected buildings solutions, and tenant experience management. Customers in the commercial office, healthcare & retail categories use Facilio across 60 million square feet to reduce operations costs, increase net asset value & de-risk operational liability. Headquartered in New York City with offices in Padova, Dubai, Chennai & Singapore, Facilio is a global company backed by leading investors including Accel Partners and Tiger Global Management.
                                    </div>
                                    <div class="legal-content-para">
                                        Learn more about Facilio O&M platform: <nuxt-link to="/">https://facilio.com/</nuxt-link>
                                    </div>
               
                                    <div class="legal-content-heading">
                                       For media inquiries and interview, please contact: 
                                    </div>
                                    <div class="legal-content-para mB0" style="font-family: ProximaNovaBold;">
                                        MORO
                                    </div>

                                    <div class="legal-content-para mB0">
                                      Widad Abdalhadi
                                    </div>
                                    <div class="legal-content-para mB0">
                                        Marketing Manager, Moro Hub
                                    </div>
                                    <div class="legal-content-para">
                                      widad.abdalhadi@morohub.com 
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
                title: "Moro Hub joins forces with US-based Facilio to boost UAE's energy-saving strategies ",
                meta: [{
                        hid: "description",
                        name: "description",
                        content: "Moro Hub, a wholly-owned subsidiary of Dubai Electricity and Water Authority (DEWA) and US-based Facilio, a leading AI-driven property operations cloud platform, has announced a strategic partnership to launch Energy Management and Monitoring Services for commercial and residential buildings in the UAE. "
                    },
                    {
                        hid: "fb-share-title",
                        property: "og:title",
                        content: "Moro Hub joins forces with US-based Facilio to boost UAE's energy-saving strategies"
                    },
                    {
                        hid: "fb-share-description",
                        property: "og:description",
                        content: "Moro Hub, a wholly-owned subsidiary of Dubai Electricity and Water Authority (DEWA) and US-based Facilio, a leading AI-driven property operations cloud platform, has announced a strategic partnership to launch Energy Management and Monitoring Services for commercial and residential buildings in the UAE. "
                    },
                    {
                        hid: "fb-share-image",
                        property: "og:image",
                        content: "https://facilio.com/images/og-images/moro.png"
                    },
                    {
                        hid: "fb-share-url",
                        property: "og:url",
                        content: "https://facilio.com/newsroom/moro-hub-joins-forces-us-based-facilio-boost-uae-energy-saving-strategies"
                    },
                    {
                        hid: "twitter-meta",
                        name: "twitter:card",
                        content: "summary"
                    },
                    {
                        hid: "twitter-title",
                        name: "twitter:title",
                        content: "Moro Hub joins forces with US-based Facilio to boost UAE's energy-saving strategies "
                    },
                    {
                        hid: "twitter-description",
                        name: "twitter:description",
                        content: "Moro Hub, a wholly-owned subsidiary of Dubai Electricity and Water Authority (DEWA) and US-based Facilio, a leading AI-driven property operations cloud platform, has announced a strategic partnership to launch Energy Management and Monitoring Services for commercial and residential buildings in the UAE. "
                    },
                    {
                        hid: "twitter-image",
                        name: "twitter:image",
                        content: "https://facilio.com/images/og-images/moro.png"
                    },
                    {
                        hid: "twitter-url",
                        name: "twitter:url",
                        content: "https://facilio.com/newsroom/moro-hub-joins-forces-us-based-facilio-boost-uae-energy-saving-strategies"
                    }
                ],
                link: [{
                    rel: "canonical",
                    href: "https://facilio.com/newsroom/moro-hub-joins-forces-us-based-facilio-boost-uae-energy-saving-strategies"
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