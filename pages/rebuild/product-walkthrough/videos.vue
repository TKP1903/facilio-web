<template>
    <div class="homePage btn-shade fc-product-intro-page">
        <div id="productPage"></div>

        <div class="myPage" id="myPage">
            <div id="fc-header">
                <Navbar />
            </div>
            <!-- navbar end -->
            <!-- webinar-banner -->
            <section class="fc-webinar-series-banner"
                style="min-height: inherit;background: #fff;margin-top: 100px;color: #181b3b;">
                <div class="container">
                    <h1 style="color: #181b3b;">REbuild Product Walkthrough</h1>
                    <h2 style="color: #181b3b;">All the insights and best practices you need to operate properties with agility</h2>
                </div>
            </section>

            <div class="container mT50 mB20">
                <div class="row">
                    <covidWebinarCard v-for="item in webinarseries" v-bind:key="item.link1" v-bind:link1="item.link1"
                        v-bind:link2="item.link2" v-bind:vclass="item.vclass" v-bind:title="item.title"
                        v-bind:desc="item.desc" />
                </div>
            </div>


        </div>
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

        <div class="pT80">
            <Footer />
        </div>
    </div>
</template>

<script>
    import Navbar from "../../../components/Navbar";
    import Footer from "../../../components/Footer"
    import covidWebinarCard from "../../../components/covidWebinarCard";
    export default {
        data() {
            return {
                webinarseries: [
                    {
                        link1: "https://fast.wistia.com/embed/medias/fm7vsuqngv.jsonp",
                        link2: "https://fast.wistia.com/assets/external/E-v1.js",
                        vclass: "wistia_async_fm7vsuqngv ",
                        title: "Introduction to REbuild",
                        desc: "Learn why you need an agile operational framework to make informed decisions and operate confidently in the new reality."
                    },
                    {
                        link1: "https://fast.wistia.com/embed/medias/8qn300lrsy.jsonp",
                        link2: "https://fast.wistia.com/assets/external/E-v1.js",
                        vclass: "wistia_async_8qn300lrsy",
                        title: "How to ensure hygiene and safety for tenants",
                        desc: "Learn what critical metrics to track for portfolio-wide hygiene compliance, and communicate safety updates to tenants."
                    },
                    {
                        link1: "https://fast.wistia.com/embed/medias/egox9oxo86.jsonp",
                        link2: "https://fast.wistia.com/assets/external/E-v1.js",
                        vclass: "wistia_async_egox9oxo86 ",
                        title: "How to adapt operations and improve compliance for new SOPs",
                        desc: "Learn how to benchmark your building performance and gain portfolio-wide visibility of regulatory compliances"
                    }
                ]
            }
        },
        components: {
            Navbar,
            Footer,
            covidWebinarCard
        },
        head() {
            return {
                title: "REbuild Walkthrough: Best practices for agile operations",
                meta: [{
                        hid: "description",
                        name: "description",
                        content: "REbuild is Facilio’s agile operations toolkit for the new reality, this walkthrough explains its features and how it can help confidently restart operations across your portfolio"
                    },
                    {
                        hid: "fb-share-title",
                        property: "og:title",
                        content: "REbuild Walkthrough: Best practices for agile operations"
                    },
                    {
                        hid: "fb-share-description",
                        property: "og:description",
                        content: "REbuild is Facilio’s agile operations toolkit for the new reality, this walkthrough explains its features and how it can help confidently restart operations across your portfolio"
                    },
                    {
                        hid: "fb-share-image",
                        property: "og:image",
                        content: "https://facilio.com/images/og-images/videos.png"
                    },
                    {
                        hid: "fb-share-url",
                        property: "og:url",
                        content: "https://facilio.com/rebuild/product-walkthrough/videos/"
                    },
                    {
                        hid: "twitter-meta",
                        name: "twitter:card",
                        content: "summary"
                    },
                    {
                        hid: "twitter-title",
                        name: "twitter:title",
                        content: "Property Operations in the post-COVID World | REBUILD by Facilio"
                    },
                    {
                        hid: "twitter-description",
                        name: "twitter:description",
                        content: "REbuild is Facilio’s agile operations toolkit for the new reality, this walkthrough explains its features and how it can help confidently restart operations across your portfolio"
                    },
                    {
                        hid: "twitter-image",
                        name: "twitter:image",
                        content: "https://facilio.com/images/og-images/videos.png"
                    },
                    {
                        hid: "twitter-url",
                        name: "twitter:url",
                        content: "https://facilio.com/rebuild/product-walkthrough/videos/"
                    }
                ],
                link: [{
                    rel: "canonical",
                    href: "https://facilio.com/rebuild/product-walkthrough/videos/"
                }],
                script: [{
                    src: "../../js/includes.js"
                }]
            };
        }
    };
</script>