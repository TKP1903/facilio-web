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
                    <div class="fc-hub-content text-center" style="max-width: 1100px;">
                        <div class="fc-meetup-badge">Facilio Webinar</div>
                        <h1>
                            End of stopgap software era: Reinventing CMMS for real estate game changers
                        </h1>
                        <p class="pB20 fc-yellow-txt">
                            August 25, 2021 - 10:00 AM EST | 3:00 PM GMT
                        </p>
                        <a href="https://us06web.zoom.us/webinar/register/WN_50QRDxLdS2ewdGDKOnryWA" target="_blank"
                            class="fc-cs-try-white">Reserve your spot</a>
                    </div>
                </div>
            </div>

            <div class="container fc-webinar-series">
                <h3>Say no to ‘submissive’ operations</h3>
                <div class="fc-meetup-page-content-con">
                    <p>
                        Full disclosure: You probably already know this.
                    </p>
                    <p>
                        Most CMMS are designed to offer the bare minimum (digitized maintenance). And in that, they work ‘just fine’.
                    </p>
                    <p>
                        But that’s an <u>awful threshold to evaluate technology today.</u>
                    </p>
                    <p>
                        O&M tools, including but not limited to CMMS, continue to be built in silos—with the sole emphasis on ‘what’ (assets, work orders, parts, and policies).
                         Zero thought goes into the ‘how’ (it’s a pain to automate your own processes) and ‘why’ (lack of meaningful asset repair/replace insights). 
                    </p>
                     <p>
                        As a result, insights & efficiencies are locked in a stalemate. 
                         What’s worse, it requires so much dirty work to get any real value that a CMMS feels like a trap.
                     </p>
                     <p>
                         <b>
                             Real estate innovation needs rethinking. Period!
                         </b>
                     </p>
                     <p>
                         Real estate and FM game changers are increasingly turning to innovation as a ‘winning advantage’ to operate in a digitally transformed business
                       - and this webinar provides the modern tech insights and resources to do just that.
                     </p>

                    <!-- sample -->
                    <div class="text-center pT50 pB40">
                        <a href="https://us06web.zoom.us/webinar/register/WN_50QRDxLdS2ewdGDKOnryWA" target="_blank"
                            style="border: 1px solid #48d0e0; color: #1c35af;" class="fc-cs-try-white">Register now</a>
                    </div>
                </div>
            </div>

            <!-- second -->
            <div class="container-speakers">
                <div class="container">
                        <h3 class="primeHead text-center">Meet the Speakers</h3>
                        <div class="fc-event-speacker-con row">
                            <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6 text-center">
                                <img src="/images/prabhu-facilio.jpg" class="fc-img-round" title="stefano" />
                                <div class="fc-workplace-subhead">
                                    Prabhu Ramachandran
                                </div>
                                <div class="fc-speacker-designation">
                                    Founder & CEO, Facilio Inc.
                                </div>
                                <div class="w-feature-desc pT10 text-left">
                                    Founder & CEO of Facilio Inc, Prabhu is on a mission to help the built environment
                                    thrive towards continuous sustainability by empowering people, equipment, and buildings 
                                    to achieve the highest levels of efficiency.
                                </div>
                            </div>

                            <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6 text-center pB60">
                                <img src="/images/vishak-chandra-prakash.jpg" class="fc-img-round" title="stefano" />
                                <div class="fc-workplace-subhead">
                                    Vishak Chandra Prakash
                                </div>
                                <div class="fc-speacker-designation">
                                    Solutions Architect, Facilio Inc.
                                </div>
                                <div class="w-feature-desc pT10 text-left">
                                    Vishak Chandra Prakash leads the Pre-sales activities at Facilio. 
                                    He is passionate about building efficient solutions
                                    to solve operational challenges at the portfolio scale and add value to the end customers.
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
                    <div class="fc-learn-txt pT20"><span class="pink-dot mR10"></span>Decoding legacy CMMS traps: One-dimensional insights, manual processes, and standstill efficiencies</div>
                    <div class="fc-learn-txt"><span class="pink-dot mR10"></span>Need for systemic change in tech stack: Process and stakeholder-first O&M platform approach</div>
                    <div class="fc-learn-txt"><span class="pink-dot mR10"></span>Facilio Walkthrough: Modern O&M use cases and outcome/benefit analysis </div>
                    <div class="text-center pT80 pB80">
                        <a href="https://us06web.zoom.us/webinar/register/WN_50QRDxLdS2ewdGDKOnryWA" target="_blank"
                            style="border: 1px solid #48d0e0; color: #1c35af;" class="fc-cs-try-white">Register now</a>
                    </div>
                    </div>

                    <div class="fc-meetup-cus-logo">
                        <div class="pB50">
                            <img src="/images/customer-logo/facilio-logo.svg" alt title width="150" />
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
                title: "End of stopgap CMMS era: Rethinking O&M for Real estate game-changers | Facilio Webinar",
                meta: [{
                        hid: "description",
                        name: "description",
                        content: "Your legacy CMMS is bogging you down. Learn how to unlock new efficiencies, create momentum for seamless digital experiences—and more at our upcoming webinar!"
                    },
                    {
                        hid: "fb-share-title",
                        property: "og:title",
                        content: "End of stopgap CMMS era: Rethinking O&M for Real estate game-changers | Facilio Webinar"
                    },
                    {
                        hid: "fb-share-description",
                        property: "og:description",
                        content: "Your legacy CMMS is bogging you down. Learn how to unlock new efficiencies, create momentum for seamless digital experiences—and more at our upcoming webinar!"
                    },
                    {
                        hid: "fb-share-image",
                        property: "og:image",
                        content: "https://facilio.com/images/og-images/webinar-6.png"
                    },
                    {
                        hid: "fb-share-url",
                        property: "og:url",
                        content: "https://facilio.com/webinar/rethinking-operations-and-maintenance"
                    },
                    {
                        hid: "twitter-meta",
                        name: "twitter:card",
                        content: "summary_large_image"
                    },
                    {
                        hid: "twitter-title",
                        name: "twitter:title",
                        content: "End of stopgap CMMS era: Rethinking O&M for Real estate game-changers | Facilio Webinar"
                    },
                    {
                        hid: "twitter-description",
                        name: "twitter:description",
                        content: "Your legacy CMMS is bogging you down. Learn how to unlock new efficiencies, create momentum for seamless digital experiences—and more at our upcoming webinar!"
                    },
                    {
                        hid: "twitter-image",
                        name: "twitter:image",
                        content: "https://facilio.com/images/og-images/webinar-6.png"
                    },
                    {
                        hid: "twitter-url",
                        name: "twitter:url",
                        content: "https://facilio.com/webinar/rethinking-operations-and-maintenance"
                    }
                ],
                link: [{
                    rel: "canonical",
                    href: "https://facilio.com/webinar/rethinking-operations-and-maintenance"
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