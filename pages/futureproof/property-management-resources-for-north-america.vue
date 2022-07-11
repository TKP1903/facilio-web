<template>
    <div class="homePage btn-shade property-manage-page">
        <div id="productPage"></div>

        <div class="myPage" id="myPage">
            <div id="fc-header">
                <Navbar />
            </div>
            <!-- webinar-banner -->
            <section class="fc-video-host-banner">
                <div class="container">
                    <div class="fp-crafted-corner"><img src="/images/futureproof/fp-crafted.svg"></div>
                    <div class="fp-web-dots"><svg xmlns="http://www.w3.org/2000/svg" width="214" height="157">
                            <path fill="#5385E7" fill-rule="evenodd"
                                d="M-110.715 5.939c0 2.761-2.394 5-5.348 5-2.954 0-5.349-2.239-5.349-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 36c0 2.761-2.394 5-5.348 5-2.954 0-5.349-2.239-5.349-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 37c0 2.761-2.394 5-5.348 5-2.954 0-5.349-2.239-5.349-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 37c0 2.761-2.394 5-5.348 5-2.954 0-5.349-2.239-5.349-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 36c0 2.761-2.394 5-5.348 5-2.954 0-5.349-2.239-5.349-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm40.65-146c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm40.65-146c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 36c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 37c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 37c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 36c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm40.649-146c0 2.761-2.395 5-5.349 5S.537 8.7.537 5.939c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm39.58-36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0-110c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 73c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 73c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0-110c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm40.65 74c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0-110c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 73c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 73c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0-110c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm40.649 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0-146c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm40.65-36c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 36c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 37c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 37c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm0 36c0 2.761-2.395 5-5.35 5-2.953 0-5.348-2.239-5.348-5 0-2.762 2.395-5 5.349-5s5.348 2.238 5.348 5zm40.649-146c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 37c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5zm0 36c0 2.761-2.395 5-5.349 5s-5.348-2.239-5.348-5c0-2.762 2.394-5 5.348-5 2.954 0 5.349 2.238 5.349 5z" />
                        </svg></div>
                    <div class="banner-me">
                        <h1>Property Management Resources for the United States </h1>
                        <h4>All the insights you need to transform your real estate operations, delivered by leading
                            regional
                            experts.</h4>
                    </div>

                </div>
            </section>
            <!-- webinar-banner-->

            <section class="fc-webinar-videos-sec">
                <div class="container">

                    <div class="row fc-video-card-extend">
                        <div class="col-md-6 hover">
                            <div class="webseries-thumbnail">
                                <a href="https://plus.cretech.com/product-demos/season:9/videos/vdd-july-facilio/" target="_blank">
                                    <div class="webinar-series-card">
                                        <div class="card-overlay">
                                        </div>
                                        <img src="/images/events/cretech.png" class="meVideoImg video_img">
                                        <div class="text-container">
                                            <div class="fc-epi-name pT20">Virtual demo day- Facilio </div>
                                            <div class="fc-epi-desc">
                                              We’ve teamed up with CREtech in their latest Demo Day edition to discuss
                                              how a unified overlay software can help O&M teams overcome common efficiency
                                              roadblocks, remotely control systems, and gain a sense of portfolio performance in real-time. 
                                        </div>
                                     </div>
                                   </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-6 hover">
                            <div class="webseries-thumbnail">
                                <a href="https://www.realcomm.com/webinars/837/best-practice-showcase-by-asset-class-nextgen-smart-office-and-corporate-campuses-part-i" target="_blank">
                                    <div class="webinar-series-card">
                                        <div class="card-overlay">
                                        </div>
                                        <img src="/images/events/realcom.png" class="meVideoImg video_img">
                                        <div class="text-container">
                                            <div class="fc-epi-name pT20">NextGen smart office and corporate campuses (part1)</div>
                                            <div class="fc-epi-desc">
                                               Case studies on some of the most progressive and successful examples of smart commercial
                                               real estate projects by asset type. For each asset class, the owner/developers, consultants,
                                               or integrators showcase significant buildings. 
                                       </div>
                                    </div>
                                 </div>
                                </a>
                            </div>
                        </div>
                         <div class="col-md-6 hover">
                            <div class="webseries-thumbnail">
                                <a href="https://vimeo.com/576779062" target="_blank">
                                    <div class="webinar-series-card">
                                        <div class="card-overlay">
                                        </div>
                                        <img src="/images/events/vimeo.png" class="meVideoImg video_img">
                                        <div class="text-container">
                                            <div class="fc-epi-name pT20">Proving the business case for building analytics </div>
                                            <div class="fc-epi-desc">
                                              This session will outline how building operators in the Campaign
                                              were encouraged to share information on their energy usage and
                                              cost savings and how that data was analyzed into a report from Lawrence Berkeley National Lab. 
                                    </div>
                                </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <FcVideoCard v-for="card in cards" v-bind:key="card.videoLink"
                            v-bind:filterType="card.filterType" v-bind:videoLink="card.videoLink"
                            v-bind:toggleData="card.toggleData" v-bind:target="card.target"
                            v-bind:modalStyle="card.modalStyle" v-bind:description="card.description"
                            :title="card.title" :customClass="card.customClass" />
                        <MeVideoCard v-for="item in interviews" v-bind:key="item.link" v-bind:link="item.link"
                            v-bind:image="item.image" v-bind:title="item.title" v-bind:description="item.description" />

                        <div class="col-md-6 hover">
                            <div class="webseries-thumbnail">
                                <a href="https://builtworlds.com/videos/data-lakes-decoded-owners-improving-building-efficiency-leveraging-iot/" target="_blank">
                                    <div class="webinar-series-card">
                                        <div class="card-overlay">
                                        </div>
                                        <img src="/images/events/buildwords.png" class="meVideoImg">
                                        <div class="text-container">
                                            <div class="fc-epi-name pT20">Data Lakes Decoded: How owners are improving building efficiency leveraging IoT </div>
                                            <div class="fc-epi-desc">
                                                Through one software.wistia_responsive_wrapper platform, owners and developers can take control of their buildings. Predictive maintenance, streamlined operations, optimized utility management, it’s all just a few clicks away
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>


                </div>

            </section>
            <VideoZoomModel />
            <FooterVideo />
        </div>
    </div>
</template>

<script>
    import Navbar from "../../components/Navbar";
    import FooterVideo from "../../components/FooterVideo";
    import MeVideoCard from "../../components/MeVideoCard";
    import MePodcastCard from "../../components/MePodcastCard";
    import FcVideoCard from "../../components/FcVideoCardVisitia";
    import VideoZoomModel from "../../components/VideoZoomModel";

    export default {

        components: {
            VideoZoomModel,
            MePodcastCard,
            Navbar,
            MeVideoCard,
            FooterVideo,
            FcVideoCard
        },
        methods: {
            openPopup() {
                document.getElementById("webinarPopup").style.display = "block";
            }
        },
        data() {
            return {
                interviews: [{
                        link: "VlAomwDsfbQ",
                        image: "usa7.png",
                        title: "Two Powerful New Smart Building Products",
                        description: "Facilio's CEO, Prabhu Ramachandran, and Passive Logics Founder Troy Harvey introduce us to two powerful Smart Building Controls products on this week's show",
                    },
                    //   {
                    //     link: "2wd7u1Re1LA",
                    //     image: "usa6.png",
                    //     title: "Data Lakes Decoded: How owners are improving building efficiency leveraging IoT ",
                    //     description: "Through one software platform, owners and developers can take control of their buildings. Predictive maintenance, streamlined operations, optimized utility management, it’s all just a few clicks away",
                    //   },
                    {
                        link: "whh-513d9ik",
                        image: "usa8.png",
                        title: "Machine Learning & Facility Management",
                        description: "Rich Berliner, the CEO of Connected Real Estate Magazine interviewed the CEO of Facilio, Prabhu Ramachandran. Facilio is a facility management software that utilizes machine learning and the internet of things to aid in the property management process. ",
                    },
                    {
                        link: "whh-513d9ik",
                        image: "usa9.png",
                        title: "How the Internet of Things will change how buildings are managed ",
                        description: "Facilio Co-founder Rajavel Subramanian talks about IoT and SaaS in Buildings at Realcomm 2018 in Las Vegas",
                    },
                    //   {
                    //     link: "SEc9jyzFjTM",
                    //     image: "usa9.png",
                    //     title: "IoT Technologies for the Built Environment",
                    //     description: "In the session, Raj breaks down the problem of silos in building operations, a scalable software blueprint for O&M adaptability, and how leading RE players are realizing efficiency & value through this approach.",
                    //   },
                ],
                cards: [{
                        filterType: "",
                        videoLink: "https://fast.wistia.com/embed/medias/tdscnvi4m7.jsonp",
                        toggleData: "",
                        target: "",
                        title: "Enhancing Customer Experience with Agile Property and Facilities Management",
                        modalStyle: "wistia_embed wistia_async_tdscnvi4m7 popover=true popoverAnimateThumbnail=true videoFoam=true",
                        description: "We see an increased focus on how properties are operated and maintained. This huge opportunity for property service providers to adopt technology for data-driven operations and tenant servicing."
                    },
                    {
                        filterType: "",
                        videoLink: "https://fast.wistia.com/embed/medias/e3k0ttkoxs.jsonp",
                        toggleData: "",
                        target: "",
                        title: "Unlocking the Potential of IoT in Buildings",
                        modalStyle: "wistia_embed wistia_async_e3k0ttkoxs popover=true popoverAnimateThumbnail=true videoFoam=true",
                        description: "Technology is going to play a huge role when buildings start to reach full occupancy. Hardware and software vendors need to collaborate, reduce dependency on deep integrations or IP. This will be the real Internet of Things."
                    },
                    {
                        filterType: "",
                        videoLink: "https://fast.wistia.com/embed/medias/5a71ya48jy.jsonp",
                        toggleData: "",
                        target: "",
                        customClass: "videoPadding",
                        title: "2021 Property O&M Challenges and Opportunities",
                        modalStyle: "wistia_embed wistia_async_5a71ya48jy popover=true popoverAnimateThumbnail=true videoFoam=true",
                        description: "Operations is a strategic arm of business and properties are no longer physical immovable assets but a dynamic center of business. Prabhu Ramachandran shares his perspective on how now is the ripe time for leaders to push forward transformational changes."
                    },
                ]
            }
        },
        head() {
            return {
                title: "Property Management Resources for the United States",
                meta: [{
                        hid: "description",
                        name: "description",
                        content: "All the insights you need to transform your real estate operations, delivered by leading regional experts."
                    },
                    {
                        hid: "fb-share-title",
                        property: "og:title",
                        content: "Property Management Resources for the United States"
                    },
                    {
                        hid: "fb-share-description",
                        property: "og:description",
                        content: "All the insights you need to transform your real estate operations, delivered by leading regional experts."
                    },
                    {
                        hid: "fb-share-image",
                        property: "og:image",
                        content: "/images/og-images/property-management-resources-for-usa.png"
                    },
                    {
                        hid: "fb-share-url",
                        property: "og:url",
                        content: "https://facilio.com/futureproof/property-management-resources-for-usa"
                    },
                    {
                        hid: "twitter-meta",
                        name: "twitter:card",
                        content: "summary_large_image"
                    },
                    {
                        hid: "twitter-title",
                        name: "twitter:title",
                        content: "Property Management Resources for the United States"
                    },
                    {
                        hid: "twitter-description",
                        name: "twitter:description",
                        content: "All the insights you need to transform your real estate operations, delivered by leading regional experts."
                    },
                    {
                        hid: "twitter-image",
                        name: "twitter:image",
                        content: "/images/og-images/property-management-resources-for-usa.png"
                    },
                    {
                        hid: "twitter-url",
                        name: "twitter:url",
                        content: "https://facilio.com/futureproof/property-management-resources-for-usa"
                    }

                ],
                link: [{
                    rel: "canonical",
                    href: "https://facilio.com/futureproof/property-management-resources-for-usa"
                }],
                script: [{
                    src: "../js/includes.js"
                }]
            };
        }
    };
</script>
<style>
    .banner-me {
        padding: 100px 0 0;
        margin: 50px auto 0;
    }

    .mgT60 {
        margin-top: 60px;
    }

    .fc-video-host-banner h1 {
        max-width: 80% !important;
    }

    .fc-video-host-banner h4 {
        max-width: 900px !important;
        line-height: 40px;
    }

    .fc-video-card-extend {
        display: flex;
        flex-wrap: wrap;
    }

    .fc-video-card-extend .fc-video-img .line-img {
        display: none !important;
    }

    .fc-video-card-extend .fc-video-card-flex-column {
        flex-direction: column;
        align-items: flex-start;
    }

    .fc-video-card-extend .video-block-content {
        font-size: 16px;
        background-color: #000000;
        color: #ffffff;
        opacity: 0;
        padding-left: 0;
        position: relative;
        transition-delay: 0s;
        transition-duration: 0.2s;
        font-family: 'ProximaNovaRgRegular', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    .fc-video-card-extend .video-title {
        font-size: 22px;
        color: #ffffff;
        text-align: left;
        font-family: 'ProximaNovaBold', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    .fc-video-element-item:hover {
        transform: scale(1.08);
        transition: transform 100ms ease 0s;
        opacity: 1;
    }

    .fc-video-element-item:hover .video-block-content {
        background-color: #000000;
        opacity: 1;
        transform: translateY(5px);
        -webkit-transform: translateY(5px);
    }
    .property-manage-page .wistia_responsive_wrapper{
        height: 330px !important;
        margin-top: 20px;
    }
    .video_img{
        max-height: 280px;
        min-width: 100%;
        margin-top: 15px;
    }
    @media screen and (max-width: 600px) {
        .fc-webinar-videos-sec h3 {
            margin-top: 80px !important;
            margin-bottom: 0px !important;
        }

        .fc-video-host-banner h1 {
            max-width: 100% !important;
            font-size: 28px;
            line-height: 38px;
        }

        .fc-video-card-extend .video-block-content {
            opacity: 1;
        }

        .video-desc-con .video-title {
            margin-top: 20px !important;
        }

        .fc-video-host-banner h4 {
            line-height: 25px;
        }

        .fc-video-pad-bottom {
            margin-bottom: 20px;
        }
    }
</style>