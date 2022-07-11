<template>
    <div>
        <div class="productPage btn-shade product-walkthrough-page">
            <div id="productPage"></div>
            <div class="myPage" id="myPage">
                <div id="fc-header">
                    <Navbar />
                </div>
                <!--End platform-overview-hero-sec-->
                <div class="mask"></div>
                <!--platform-feature-1-->
                <section class="fc-webinar-series-banner product-rebuild-banner rebuild-banner">
                    <div class="container">
                        <div class="intro-txt-rebuild" style="color: #feda42;opacity: 1;">Rebuild Walkthrough Videos</div>
                        <div class="remodel-txt-main">
                            Rethink property operations with data 
                        </div>
                        <div class="remodel-text-sub">
                            From automating processes to optimizing systems remotely, learn best practices to operate
                            properties with agility.
                        </div>
                        <div class="fc-button-collapsive">
                            <!-- <button type="button" class="btn btn-primary fc-product-cta" @click="openPopup()">
                                Take full tour now
                            </button> -->

                            <a @click="openPopup()">
                                <div class="fc-product-cta">
                                    Watch Demo Now
                                </div>
                            </a>



                        </div>
                    </div>
                </section>
            </div>

            <div class="fc-product-walkthrough-main">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="fc-rebuild-card-layout">
                                <div class="fc-rebuild-card">
                                    <div class="fc-rebuild-con container">
                                        <div class="row flex-middle flex-wrap">
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <a @click="openPopup()">
                                                <div class="fc-rebuid-card__container">
                                                    <div class="fc-rebuid-card__header">
                                                        <div class="fc-rebuid-card-duration">
                                                            12 mins
                                                        </div>
                                                        <div class="fc-rebuid-card-title">
                                                            Introduction to REbuild
                                                        </div>
                                                        <div class="fc-rebuid-card-desc">
                                                            Learn why you need an agile operational framework to make
                                                            informed
                                                            decisions and operate confidently in the new reality
                                                        </div>
                                                        <div class="fc-rebuid-card-host">
                                                            <div>
                                                                 <a @click="openPopup()">
                                                                     <div class="watchnow-btn">
                                                                         Watch Now
                                                                     </div>
                                                                 </a>
                                                            </div>
                                                            <div class="fc-img-position">
                                                                <img src="/images/arun.jpg" class="fc-img-round" title="Arun Tamilarasan"/>
                                                                <img src="/images/vaishnavi.jpg" class="fc-img-round fc-vai-img"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 fc-build-col-padding">
                                                <div class="row pB20">
                                                    <div class="fc-rebuild-card-heading pL15 pR15">KEY TAKEAWAYS</div>
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <p class="fc-product-content"><i
                                                                class="fa fa-circle fc-circle-medium pR10"
                                                                aria-hidden="true"></i> Core driver of organizational
                                                            strategy for real estate businesses
                                                        </p>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <p class="fc-product-content"><i
                                                                class="fa fa-circle fc-circle-medium pR10"
                                                                aria-hidden="true"></i> Increasing stakes in property
                                                            operations with the pandemic
                                                        </p>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <p class="fc-product-content"><i
                                                                class="fa fa-circle fc-circle-medium pR10"
                                                                aria-hidden="true"></i> Staged recovery from the
                                                            downside of economic change
                                                        </p>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <p class="fc-product-content"><i
                                                                class="fa fa-circle fc-circle-medium pR10"
                                                                aria-hidden="true"></i> Re-evaluating long-term
                                                            strategies for portfolio-wide efficiency
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <!-- second row -->
                                    <div class="fc-rebuild-con container">
                                        <div class="row flex-middle flex-wrap">
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <a @click="openPopup()">
                                                <div class="fc-rebuid-card__container">
                                                    <div class="fc-rebuid-card__header">
                                                        <div class="fc-rebuid-card-duration">
                                                            13 mins
                                                        </div>
                                                        <div class="fc-rebuid-card-title">
                                                            How to ensure hygiene and safety for tenants
                                                        </div>
                                                        <div class="fc-rebuid-card-desc">
                                                            Learn what critical metrics to track for portfolio-wide
                                                            hygiene
                                                            compliance, and communicate safety updates to tenants
                                                        </div>
                                                        <div class="fc-rebuid-card-host">
                                                            <div>
                                                                  <a @click="openPopup()">
                                                                     <div class="watchnow-btn">
                                                                         Watch Now
                                                                     </div>
                                                                 </a>
                                                            </div>
                                                            <div class="fc-arun-position">
                                                                <img src="/images/arun.jpg" class="fc-img-round" title="Arun Tamilarasan"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 fc-build-col-padding">
                                                <div class="row pB20">
                                                    <div class="fc-rebuild-card-heading pL15 pR15">KEY TAKEAWAYS</div>
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <p class="fc-product-content"><i
                                                                class="fa fa-circle fc-circle-medium pR10"
                                                                aria-hidden="true"></i> Gain complete overview of
                                                            disinfection across properties
                                                        </p>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <p class="fc-product-content"><i
                                                                class="fa fa-circle fc-circle-medium pR10"
                                                                aria-hidden="true"></i> Tenant safety as priority:
                                                            effective communication of real-time
                                                            hygiene updates
                                                        </p>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <p class="fc-product-content"><i
                                                                class="fa fa-circle fc-circle-medium pR10"
                                                                aria-hidden="true"></i> Enable touchless sign-in
                                                            experience and contact tracing
                                                        </p>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <p class="fc-product-content"><i
                                                                class="fa fa-circle fc-circle-medium pR10"
                                                                aria-hidden="true"></i> How agile meets compliance
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Third Row -->

                                     <div class="fc-rebuild-con container">
                                        <div class="row flex-middle flex-wrap">
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <a @click="openPopup()">
                                                <div class="fc-rebuid-card__container">
                                                    <div class="fc-rebuid-card__header">
                                                        <div class="fc-rebuid-card-duration">
                                                            13 mins
                                                        </div>
                                                        <div class="fc-rebuid-card-title">
                                                            How to adapt operations and improve compliance for new SOPs
                                                        </div>
                                                        <div class="fc-rebuid-card-desc">
                                                            Learn how to benchmark your building performance and gain portfolio-wide visibility of regulatory compliances
                                                        </div>
                                                        <div class="fc-rebuid-card-host">
                                                            <div>
                                                                  <a @click="openPopup()">
                                                                     <div class="watchnow-btn">
                                                                         Watch Now
                                                                     </div>
                                                                 </a>
                                                            </div>
                                                            <div class="fc-img-position">
                                                                <img src="/images/vishak.jpeg" class="fc-img-round" title="Vishak"/>
                                                                <img src="/images/vaishnavi.jpg" class="fc-img-round fc-vai-img"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 fc-build-col-padding">
                                                <div class="row pB20">
                                                    <div class="fc-rebuild-card-heading pL15 pR15">KEY TAKEAWAYS</div>
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <p class="fc-product-content"><i
                                                                class="fa fa-circle fc-circle-medium pR10"
                                                                aria-hidden="true"></i> Benchmark against changing operating guidelines
                                                        </p>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <p class="fc-product-content"><i
                                                                class="fa fa-circle fc-circle-medium pR10"
                                                                aria-hidden="true"></i> Get complete overview of regulatory compliances and SOP adherence, on cloud
                                                        </p>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <p class="fc-product-content"><i
                                                                class="fa fa-circle fc-circle-medium pR10"
                                                                aria-hidden="true"></i> Gain critical insights on HVAC, IAQ and real-time building conditions
                                                        </p>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <p class="fc-product-content"><i
                                                                class="fa fa-circle fc-circle-medium pR10"
                                                                aria-hidden="true"></i> Mitigate risks and create safe building experiences
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- modal for form -->

        <!-- modal for form -->


        <div class="row fc-container-rebuild">
            <div class="black-txt2 f30 w-feature-head-center learn-more-txt">Learn more about REbuild
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="bg-grey">
                        <div class="blue-pdf-head left-pdf-sec">
                            Adapt to a new reality: Building operations as a margin driver
                            <div class="rebuild-datasheet-btn">
                                <a href="#rebuild-datasheet" class="fc-circular-voilet-btn">Get the REbuild
                                    Datasheet</a>
                            </div>
                        </div>
                        <div class="ebook-img">
                            <img src="/images/rebuild/ebook.png" alt="" class="ebook-img-inner">
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="bg-grey grey-right-pad">
                        <div class="right-pdf-sec">
                            <div class="blue-pdf-head">
                                Useful Resources to benchmark against C-19 guidelines
                            </div>
                            <div class="pT20">
                                <p class="pT10 blog-item-container"><a class="list-blog-items"
                                        href="https://blog.facilio.com/5-ways-to-prepare-and-operate-hvac-for-the-new-guidelines/">5
                                        ways to prepare and operate HVAC for the new guidelines</a><span
                                        class="tag">New</span>
                                </p>
                                <p class="pT10 blog-item-container"><a class="list-blog-items"
                                        href="https://blog.facilio.com/how-property-management-can-respond-to-covid-19/">Practical
                                        tactics on how Property Management can respond to Covid-19</a></p>
                                <p class="pT10 blog-item-container"><a class="list-blog-items"
                                        href="https://blog.facilio.com/preventive-measures-taken-by-property-operators-during-covid19/">10
                                        Inspiring examples of Property Operation Teams coming together to fight the
                                        viral
                                        spread</a></p>
                                <p class="pT10 blog-item-container"><a class="list-blog-items"
                                        href="https://blog.facilio.com/facilios-ceo-prabhu-in-conversation-with-controltrends-cre3-0-containing-covid-19-and-more/">Facilio’s
                                        CEO Prabhu in conversation with ControlTrends – CRE3.0, containing Covid-19,
                                        and
                                        more.</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <productForm />
        <div class="pT80">
            <Footer />
        </div>
    </div>
</template>
<script>
    import Navbar from "../../../components/Navbar.vue"
    import Footer from "../../../components/Footer"
    import productForm from "../../../components/form/productWalkThroughForm";
    export default {
        data() {
            return {
                
            }
        },
        mounted: function () {},
        components: {
            Navbar,
            Footer,
            productForm
        },
        methods: {
            openPopup() {
                document.getElementById("registerPopup").style.display = "block";
            }
        },
        head() {
            return {
                title: "Rebuild Product Walkthrough",
                meta: [{
                        hid: "description",
                        name: "description",
                        content: "Learn how to effectively respond in the new reality with a full blown product walkthrough of REbuild"
                    },
                    {
                        hid: "fb-share-title",
                        property: "og:title",
                        content: "Rebuild Product Walkthrough"
                    },
                    {
                        hid: "fb-share-description",
                        property: "og:description",
                        content: "Learn how to effectively respond in the new reality with a full blown product walkthrough of REbuild"
                    },
                    {
                        hid: "fb-share-image",
                        property: "og:image",
                        content: "https://facilio.com/images/og-images/product-walk.png"
                    },
                    {
                        hid: "fb-share-url",
                        property: "og:url",
                        content: "https://facilio.com/rebuild/product-walkthrough/"
                    },
                    {
                        hid: "twitter-meta",
                        name: "twitter:card",
                        content: "summary"
                    },
                    {
                        hid: "twitter-title",
                        name: "twitter:title",
                        content: "Rebuild Product Walkthrough"
                    },
                    {
                        hid: "twitter-description",
                        name: "twitter:description",
                        content: "Learn how to effectively respond in the new reality with a full blown product walkthrough of REbuild"
                    },
                    {
                        hid: "twitter-image",
                        name: "twitter:image",
                        content: "https://facilio.com/images/og-images/product-walk.png"
                    },
                    {
                        hid: "twitter-url",
                        name: "twitter:url",
                        content: "https://facilio.com/rebuild/product-walkthrough/"
                    }
                ],
                link: [{
                    rel: "canonical",
                    href: "https://facilio.com/rebuild/product-walkthrough/"
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