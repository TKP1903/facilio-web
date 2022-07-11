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
                    <div class="fc-hub-content text-center" style="max-width: 980px;">
                        <div class="fc-meetup-badge">CONNECTED CMMS WALKTHROUGH                           
                        </div>
                        <h1>
                            Engage all operations stakeholders in a single system: Multi-User Experiences with Facilio
                        </h1>
                        <p class="pB20 fc-yellow-txt">
                            Tuesday, March 29, 2022 <br/> 10:30 AM EST | 2:30 PM GMT | 8:00 PM IST
                        </p>
                        <a href="https://us06web.zoom.us/webinar/register/WN_SQk9iTMNT-OpvlvVehM74w" target="_blank"
                            class="fc-cs-try-white">Reserve your spot</a>
                    </div>
                </div>
            </div>

            <div class="container fc-webinar-series " style="max-width: 900px;">
                <h3>Let your CMMS work for you. Not the other way around.</h3>
                <div class="fc-meetup-page-content-con">
                    <p>
                         Ever felt frustrated with your CMMS because it …
                        <ul class="list-unstyled mT20 mL20 leading-loose">
                        
                        <li>
                            <span class="pink-dot mR10"></span>Feels purpose-built for technicians or field teams only?
                            </li>
                            <li>
                        <span class="pink-dot mR10"></span>Felt lost having spent half the time Is a hindrance instead of an aid in coordinating with vendors & clients?
                        </li>
                        <li>
                        <span class="pink-dot mR10"></span>Isn’t transparent and leaves much of issue resolution to email back and forth?
                        </li>
                        <li>
                        <span class="pink-dot mR10"></span>Isn’t data-driven and much of reporting requires spreadsheets or BI tools? 
                        </li>

                        </ul>
                        </p>
                        
                    
                    <p>
                       If you can relate to any of the above, you are not alone. A CMMS software needs to meet unique & individual stakeholder needs—not the other way around. 

                    </p>
                    <p>
                        Large, efficiency-driven portfolios need more from their CMMS software—one that can provide enhanced value to all stakeholders involved from executives to technicians, vendors to customers. 

                    </p>
                    <p>Block your calendar on 29th March and discover how connected CMMS can enable value across the board and seamless organizational alignment all while accounting for your custom goals. With real life examples across the globe, you can unlock the best turnaround times, agile decision making and greater client satisfaction right within your CMMS. </p>
                    <!-- sample -->
                    <div class="text-center pT50 pB40">
                        <a href="https://us06web.zoom.us/webinar/register/WN_SQk9iTMNT-OpvlvVehM74w" target="_blank"
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
                    <div class="fc-learn-txt pT20"><span class="pink-dot mR10"></span> Why CMMS should contextually empower all O&M stakeholders </div>
                    <div class="fc-learn-txt"><span class="pink-dot mR10"></span>The benefit of two-way interactive capabilities between vendors and internal stakeholders</div>
                    <div class="fc-learn-txt"><span class="pink-dot mR10"></span>How a service portal and catalog improves client satisfaction </div>
                    <div class="fc-learn-txt"><span class="pink-dot mR10"></span>How real time visibility on issue resolution enables agile decision making
                    </div>
                    </div>
                    <div class="text-center pT80 pB80">
                        <a href="https://us06web.zoom.us/webinar/register/WN_SQk9iTMNT-OpvlvVehM74w" target="_blank"
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
                title: "Engaging All Operations Stakeholders in a Single System | Facilio Webinar",
                meta: [{
                        hid: "description",
                        name: "description",
                        content: "Your CMMS should empower all stakeholders involved in O&M with better efficiency. Learn how to enable quick decision making, better communication, increase client satisfaction —and more at our upcoming Facilio webinar!"
                    },
                    {
                        hid: "fb-share-title",
                        property: "og:title",
                        content: "Engaging All Operations Stakeholders in a Single System | Facilio Webinar"
                    },
                    {
                        hid: "fb-share-description",
                        property: "og:description",
                        content: "Your CMMS should empower all stakeholders involved in O&M with better efficiency. Learn how to enable quick decision making, better communication, increase client satisfaction —and more at our upcoming Facilio webinar!"
                    },
                    {
                        hid: "fb-share-image",
                        property: "og:image",
                        content: "https://facilio.com/images/og-images/webinar-workflow-automation-with-facilio.png"
                    },
                    {
                        hid: "fb-share-url",
                        property: "og:url",
                        content: "https://facilio.com/webinar/multi-stakeholder-experiences-with-facilio"
                    },
                    {
                        hid: "twitter-meta",
                        name: "twitter:card",
                        content: "summary_large_image"
                    },
                    {
                        hid: "twitter-title",
                        name: "twitter:title",
                        content: "Engaging All Operations Stakeholders in a Single System | Facilio Webinar"
                    },
                    {
                        hid: "twitter-description",
                        name: "twitter:description",
                        content: "Your CMMS should empower all stakeholders involved in O&M with better efficiency. Learn how to enable quick decision making, better communication, increase client satisfaction —and more at our upcoming Facilio webinar!"
                    },
                    {
                        hid: "twitter-image",
                        name: "twitter:image",
                        content: "https://facilio.com/images/og-images/webinar-workflow-automation-with-facilio.png"
                    },
                    {
                        hid: "twitter-url",
                        name: "twitter:url",
                        content: "https://facilio.com/webinar/multi-stakeholder-experiences-with-facilio"
                    }
                ],
                link: [{
                    rel: "canonical",
                    href: "https://facilio.com/webinar/multi-stakeholder-experiences-with-facilio "
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
.fc-meetup-badge{
    max-width: 250px !important;
}

</style>