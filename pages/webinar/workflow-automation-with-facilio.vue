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
                            Moving away from manual & broken O&M processes: Workflow automation with Facilio
                        </h1>
                        <p class="pB20 fc-yellow-txt">
                            Wednesday Feb 23, 2022 - 9:00 AM EST | 2:00 PM GMT
                        </p>
                        <a href="https://us06web.zoom.us/webinar/register/5016445869981/WN_YUdjx4-ST3OaBGFQMF4lbA" target="_blank"
                            class="fc-cs-try-white">Reserve your spot</a>
                    </div>
                </div>
            </div>

            <div class="container fc-webinar-series " style="max-width: 900px;">
                <h3>Give operations teams their time back</h3>
                <div class="fc-meetup-page-content-con">
                    <p>
                        Have you or your teams ever:
                        <ul class="list-unstyled mT20 mL20 leading-loose">
                        
                        <li>
                            <span class="pink-dot mR10"></span>Overlooked an equipment issue because your BMS operator couldn’t keep track of an overwhelming no. of alarms?
                            </li>
                            <li>
                        <span class="pink-dot mR10"></span>Felt lost having spent half the time chasing ppl for simple things like—asking for updates, approvals, and reports?
                        </li>
                        <li>
                        <span class="pink-dot mR10"></span>Finally got a vendor to inspect and share a quote. But now it’s stuck in the finance desk for another week?
                        </li>
                        <li>
                        <span class="pink-dot mR10"></span>Couldn’t suggest the best budget plan—for repair or replacement—because you lacked context into the full asset lifecycle?
                        </li>

                        </ul>
                        </p>
                        
                    
                    <p>
                       If you can relate to any or all of the above, you need process automation. Property operations is so much more painful in a distributed, remote environment. Your operational workflows should enable your teams—not get in their way.
                    </p>
                    <p>
                        Automate all your low-value work to focus on strategic business wins—join this webinar and learn how to optimize time & resources using workflow automation with Facilio.

                    </p>
                    <!-- sample -->
                    <div class="text-center pT50 pB40">
                        <a href="https://us06web.zoom.us/webinar/register/5016445869981/WN_YUdjx4-ST3OaBGFQMF4lbA" target="_blank"
                            style="border: 1px solid #48d0e0; color: #1c35af;" class="fc-cs-try-white">Register now</a>
                    </div>
                </div>
            </div>

            <!-- second -->
            <div class="container-speakers">
                <div class="container">
                        <h3 class="primeHead text-center">Meet the Speaker</h3>
                        <div class="fc-event-speacker-con row">

                            <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6 text-center pB60">
                                <img src="/images/vishak-chandra-prakash.jpg" class="fc-img-round" title="stefano" />
                                <div class="fc-workplace-subhead">
                                    Vishak Chandra Prakash
                                </div>
                                <div class="fc-speacker-designation">
                                    Solutions Architect, Facilio Inc.
                                </div>
                                <div class="w-feature-desc pT10 text-left" style="margin:auto;">
                                    Vishak Chandra Prakash leads the Pre-sales activities at Facilio. He is passionate about building efficient solutions to solve operational challenges at the portfolio scale and add value to the end customers.
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
                    <div class="mL50">
                    <div class="fc-learn-txt pT20"><span class="pink-dot mR10"></span>How to make workflows across enterprise systems more efficient</div>
                    <div class="fc-learn-txt"><span class="pink-dot mR10"></span>Enhancing collaboration & experience by automating stakeholder interactions</div>
                    <div class="fc-learn-txt"><span class="pink-dot mR10"></span>Automating alarms to work orders for single-pane-of-glass control </div>
                    <div class="fc-learn-txt"><span class="pink-dot mR10"></span>Real-time Metrics & reporting to implement successful fiscal strategies
                    </div>
                    </div>
                    <div class="text-center pT80 pB80">
                        <a href="https://us06web.zoom.us/webinar/register/5016445869981/WN_YUdjx4-ST3OaBGFQMF4lbA" target="_blank"
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
                title: "Automating Operations & Maintenance Workflows | Facilio Webinar",
                meta: [{
                        hid: "description",
                        name: "description",
                        content: "Your operational workflows should empower your teams—not get in their way. Learn how to save time, and resources using workflow automation—and more at our upcoming Facilio webinar!"
                    },
                    {
                        hid: "fb-share-title",
                        property: "og:title",
                        content: "Automating Operations & Maintenance Workflows | Facilio Webinarr"
                    },
                    {
                        hid: "fb-share-description",
                        property: "og:description",
                        content: "Your operational workflows should empower your teams—not get in their way. Learn how to save time, and resources using workflow automation—and more at our upcoming Facilio webinar!"
                    },
                    {
                        hid: "fb-share-image",
                        property: "og:image",
                        content: "https://facilio.com/images/og-images/webinar-workflow-automation-with-facilio.png"
                    },
                    {
                        hid: "fb-share-url",
                        property: "og:url",
                        content: "https://facilio.com/webinar/workflow-automation-with-facilio"
                    },
                    {
                        hid: "twitter-meta",
                        name: "twitter:card",
                        content: "summary_large_image"
                    },
                    {
                        hid: "twitter-title",
                        name: "twitter:title",
                        content: "Automating Operations & Maintenance Workflows | Facilio Webinar"
                    },
                    {
                        hid: "twitter-description",
                        name: "twitter:description",
                        content: "Your operational workflows should empower your teams—not get in their way. Learn how to save time, and resources using workflow automation—and more at our upcoming Facilio webinar!"
                    },
                    {
                        hid: "twitter-image",
                        name: "twitter:image",
                        content: "https://facilio.com/images/og-images/webinar-workflow-automation-with-facilio.png"
                    },
                    {
                        hid: "twitter-url",
                        name: "twitter:url",
                        content: "https://facilio.com/webinar/workflow-automation-with-facilio"
                    }
                ],
                link: [{
                    rel: "canonical",
                    href: "https://facilio.com/webinar/workflow-automation-with-facilio"
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