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
                            Unlocking the potential of connected buildings with IoT
                        </h1>
                        <p class="pB20 fc-yellow-txt">
                            On Demand Webinar
                        </p>

                        <a @click="openPopup()" class="fc-cs-try-white">
                            Watch The recording
                        </a>
                    </div>
                </div>
            </div>

            <div class="container fc-webinar-series">
                <h3 class="fc-maxWidth-750">A new era of interoperable IoT ecosystems</h3>
                <div class="fc-meetup-page-content-con">
                    <p>
                        Smart building initiatives are at the core of every operational strategy. 
                    </p>
                    <p>
                        However, at the moment, deploying smart building use cases can be an uphill battle. Even more when the underlying systems do not check these important boxes:
                    </p>
                    <div class="fc-webinar-feat-card" style="max-width: 1000px;margin-left: inherit;">
                        <p>
                            <span class="pink-dot mR10"></span> Support seamless and scalable integrations to unlock real-time building data
                        </p>
                        <p>
                            <span class="pink-dot mR10"></span> Increase ‘time to value’ by making the data accessible for all operations stakeholders 
                        </p>
                        <p>
                            <span class="pink-dot mR10"></span> Transform data into insights that enhance building performance, account for operating costs, and inform business decisions
                        </p>
                    </div>
                    <p>
                        Property operators and service providers are increasingly turning to new synergies in existing building IoT ecosystems that can fast-track connected building use case deployments (in days versus months) - and this webinar aims to do just that.
                    </p>
                    <!-- sample -->
                    <div class="text-center pT50 pB40">
                        <a @click="openPopup()" 
                            style="border: 1px solid #48d0e0; color: #1c35af;" class="fc-cs-try-white">Watch The recording</a>
                    </div>
                </div>
            </div>

            <!-- second -->
            <div class="container-speakers">
                <div class="container">
                        <h3 class="primeHead text-center">Meet the Speakers</h3>
                        <div class="fc-event-speacker-con row">
                            <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6 text-center pB60">
                                <img src="/images/belimo-salvatore.png" class="fc-img-round" title="andrea pavesi" />
                                <div class="fc-workplace-subhead">
                                    Salvatore Cataldi
                                </div>
                                <div class="fc-speacker-designation">
                                    Global Strategic Building IoT Expert, Belimo
                                </div>
                                <div class="w-feature-desc pT10 text-left">
                                   A specialist in designing distributed automation systems and solutions, Salvatore leads Belimo’s digital ecosystem initiatives. With his profound expertise in the building automation industry, he strives to enable interoperability between digital and building IoT ecosystems
                                </div>
                            </div>

                            <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6 text-center pB60">
                                <img src="/images/nexus-jwd.jpg" class="fc-img-round" title="stefano" />
                                <div class="fc-workplace-subhead">
                                    James Dice
                                </div>
                                <div class="fc-speacker-designation">
                                    Founder, Nexus Labs
                                </div>
                                <div class="w-feature-desc pT10 text-left">
                                   A seasoned professional in the smart buildings industry, James runs Nexus labs - a weekly blog, podcast, online school, and consultancy striving to create smarter, more efficient buildings. Through Nexus, James shares remarkable stories with the aim of educating and moving the industry forward.
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
                                   A proponent of data-driven building operations, Prabhu is on a mission to help the built environment thrive towards continuous sustainability by empowering people, equipment, and buildings to achieve the highest levels of efficiency.
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
                    <div class="fc-learn-txt pT20"><span class="pink-dot mR10"></span>How to alleviate challenges in deploying smart building use cases </div>
                    <div class="fc-learn-txt"><span class="pink-dot mR10"></span>Synergies between building IoT ecosystems: IoT and software architecture for connected building operations</div>
                    <div class="fc-learn-txt"><span class="pink-dot mR10"></span>Optimizing for enhanced stakeholder value, continuous system stability, and performance improvements</div>
                    <div class="text-center pT80 pB80">
                        <a @click="openPopup()" 
                            style="border: 1px solid #48d0e0; color: #1c35af;" class="fc-cs-try-white">Watch The recording</a>
                    </div>
                    </div>

                    <div class="fc-meetup-cus-logo">
                        <div class="pB50">
                            <img src="/images/customer-logo/facilio-logo.svg" alt title width="150" />
                        </div>
                        <div class="pB50">
                            <img src="/images/become-partner-logo/belimo.png" alt title width="150" />
                        </div>
                        <div class="pB50">
                            <img src="/images/become-partner-logo/nexus.png" alt title width="100" />
                        </div>
                    </div>
                    </div>
            <!-- end -->

        </div>

        <webinarModal></webinarModal>

        <!-- form modal dialog -->
        <Footer />
    </div>
</template>

<script>
    import Navbar from "../../components/Navbar";
    import Footer from "../../components/Footer";
    import webinarModal from "../../components/unlockingWebniarModel";

    export default {
        data() {
            return {
                
            }
        },
        components: {
            Navbar,
            Footer,
            webinarModal
        },
        methods: {
            openPopup() {
        document.getElementById("webinarPopup").style.display = "block";
      },
      openTrailerPopup() {
        document.getElementById("trailerPopup").style.display = "block";
      }
        },
        head() {
            return {
                title: "Unlocking the potential of connected buildings with IoT | Facilio Webinar",
                meta: [{
                        hid: "description",
                        name: "description",
                        content: "Learn how leading experts in property operations and the automation industry are leveraging technology to build new synergies in the building IoT ecosystems."
                    },
                    {
                        hid: "fb-share-title",
                        property: "og:title",
                        content: "Unlocking the potential of connected buildings with IoT | Facilio Webinar"
                    },
                    {
                        hid: "fb-share-description",
                        property: "og:description",
                        content: "Learn how leading experts in property operations and the automation industry are leveraging technology to build new synergies in the building IoT ecosystems."
                    },
                    {
                        hid: "fb-share-image",
                        property: "og:image",
                        content: "https://facilio.com/images/og-images/webniar2.png"
                    },
                    {
                        hid: "fb-share-url",
                        property: "og:url",
                        content: "https://facilio.com/webinar/unlocking-connected-buildings-with-iot"
                    },
                    {
                        hid: "twitter-meta",
                        name: "twitter:card",
                        content: "summary_large_image"
                    },
                    {
                        hid: "twitter-title",
                        name: "twitter:title",
                        content: "Unlocking the potential of connected buildings with IoT | Facilio Webinar"
                    },
                    {
                        hid: "twitter-description",
                        name: "twitter:description",
                        content: "Learn how leading experts in property operations and the automation industry are leveraging technology to build new synergies in the building IoT ecosystems."
                    },
                    {
                        hid: "twitter-image",
                        name: "twitter:image",
                        content: "https://facilio.com/images/og-images/webniar2.png"
                    },
                    {
                        hid: "twitter-url",
                        name: "twitter:url",
                        content: "https://facilio.com/webinar/unlocking-connected-buildings-with-iot"
                    }
                ],
                link: [{
                    rel: "canonical",
                    href: "https://facilio.com/webinar/unlocking-connected-buildings-with-iot"
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

</style>