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
                        <h1>Resources for a Connected Built Environment</h1>
                        <h4>All the insights you need to transform your real estate operations, delivered by leading expert</h4>
                    </div>

                </div>
            </section>
            <!-- webinar-banner-->

            <section class="fc-webinar-videos-sec">
                <div class="container">
                    <h3>Videos</h3>
                    <div class="row fc-video-card-extend">
                        <FcVideoCard v-for="card in cards" v-bind:key="card.videoLink"
                            v-bind:filterType="card.filterType" v-bind:videoLink="card.videoLink"
                            v-bind:toggleData="card.toggleData" v-bind:target="card.target"
                            v-bind:modalStyle="card.modalStyle" v-bind:description="card.description"
                            :title="card.title" :customClass="card.customClass" />
                    </div>
                    <h3>Webinars</h3>
                    <div class="row fc-video-card-extend">
                            <div class="col-md-6 hover">
                            <div class="webseries-thumbnail">
                                <a href="https://plus.cretech.com/product-demos/season:9/videos/vdd-july-facilio/" target="_blank">
                                    <div class="webinar-series-card">
                                        <div class="card-overlay">
                                        </div>
                                        <img src="/images/events/cretech.png" class="meVideoImg video_img">
                                        <div class="text-container">
                                            <div class="fc-epi-name pT20">Virtual demo day- Facilio</div>
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
                                            <div class="fc-epi-name pT20">NextGen smart office and corporate campuses (part1) </div>
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
                                <a href="https://plus.cretech.com/product-demos/season:9/videos/vdd-july-facilio/" target="_blank">
                                    <div class="webinar-series-card">
                                        <div class="card-overlay">
                                        </div>
                                        <img src="/images/events/vimeo.png" style="margin-top:-10px" class="meVideoImg video_img">
                                        <div class="text-container">
                                            <div class="fc-epi-name pT20">Proving the business case for building analytics</div>
                                            <div class="fc-epi-desc">
                                            This session will outline how building operators in the Campaign were encouraged to share information
                                            on their energy usage and cost savings and how that data was analyzed into a report from Lawrence Berkeley National Lab.
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                             <FcVideoCard v-for="webinar in webinars" v-bind:key="webinar.videoLink"
                            v-bind:filterType="webinar.filterType" v-bind:videoLink="webinar.videoLink"
                            v-bind:toggleData="webinar.toggleData" v-bind:target="webinar.target"
                            v-bind:modalStyle="webinar.modalStyle" v-bind:description="webinar.description"
                            :title="webinar.title" :customClass="webinar.customClass" />
                    </div>
                    <h3>
                        Blogs
                    </h3>

                    <div class="row fc-video-card-extend">
                           <div class="col-md-6 hover">
                            <div class="webseries-thumbnail">
                                <a href="https://facilio.com/blog/smart-building-success-needs-a-new-improved-system-integration-model-heres-why/" target="_blank">
                                    <div class="webinar-series-card">
                                        <div class="card-overlay">
                                        </div>
                                        <img src="/images/events/smart-building.png" class="meVideoImg">
                                        <div class="text-container">
                                            <div class="fc-epi-name pT20">Smart building success needs a new & improved system integration model: Here’s why</div>
                                            <div class="fc-epi-desc">
                                                There’s an ever-growing momentum behind property owners deploying smart building tech projects across their portfolios.
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>

                        <div class="col-md-6 hover">
                            <div class="webseries-thumbnail">
                                <a href="https://facilio.com/blog/why-you-need-to-extract-more-value-from-your-building-data-and-analytics/" target="_blank">
                                    <div class="webinar-series-card">
                                        <div class="card-overlay">
                                        </div>
                                        <img src="/images/events/building-data-and-analytics.jpeg" class="meVideoImg">
                                        <div class="text-container">
                                            <div class="fc-epi-name pT20">Why you need to extract more value from your building data and analytics</div>
                                            <div class="fc-epi-desc">
                                                It is largely understood that analytics software for buildings provides unmatched power to support the processes—such as energy management, commissioning.
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                         <div class="col-md-6 hover">
                            <div class="webseries-thumbnail">
                                <a href="https://facilio.com/blog/how-to-get-started-with-data-driven-building-operations/" target="_blank">
                                    <div class="webinar-series-card">
                                        <div class="card-overlay">
                                        </div>
                                        <img src="/images/events/data-driven-building-operations.jpeg" class="meVideoImg">
                                        <div class="text-container">
                                            <div class="fc-epi-name pT20">How to get started with data-driven building operations</div>
                                            <div class="fc-epi-desc">
                                               This is the second post in the series on leveraging data to optimize building performance and operate your entire portfolio as one. In our first post, we talked about the importance for property owners and operators.
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                          <div class="col-md-6 hover">
                            <div class="webseries-thumbnail">
                                <a href="https://facilio.com/blog/how-property-owners-can-overcome-information-barriers-in-fdd-evaluation/" target="_blank">
                                    <div class="webinar-series-card">
                                        <div class="card-overlay">
                                        </div>
                                        <img src="/images/events/information-barriers-in-fdd-evaluation.png" class="meVideoImg">
                                        <div class="text-container">
                                            <div class="fc-epi-name pT20">How property owners can overcome information barriers in FDD evaluation</div>
                                            <div class="fc-epi-desc">
                                               We’re seeing a surge in Fault Detection and Diagnostics (FDD) solutions across the buildings industry. This is unsurprising, as the role of FDD in achieving operational efficiency is becoming more and more clear. 
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                           <div class="col-md-6 hover">
                            <div class="webseries-thumbnail">
                                <a href="https://facilio.com/blog/visibility-into-building-operations-is-anything-but-straightforward-heres-why/" target="_blank">
                                    <div class="webinar-series-card">
                                        <div class="card-overlay">
                                        </div>
                                        <img src="/images/events/straightforward-heres-why.png" class="meVideoImg">
                                        <div class="text-container">
                                            <div class="fc-epi-name pT20">Visibility Into Building Operations Is Anything but Straightforward, Here’s Why</div>
                                            <div class="fc-epi-desc">
                                              The world is in a bit of a unique place right now. And for us in property operations it is filled with too many questions: when to reopen, how to adapt to the new SOPs, which technology to adopt, and the list goes on!
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                            <div class="col-md-6 hover">
                            <div class="webseries-thumbnail">
                                <a href="https://facilio.com/blog/rethinking-bas-software/" target="_blank">
                                    <div class="webinar-series-card">
                                        <div class="card-overlay">
                                        </div>
                                        <img src="/images/events/rethinking-bas-software.png" class="meVideoImg">
                                        <div class="text-container">
                                            <div class="fc-epi-name pT20">Building automation needs innovation big time (and it’s all coming together finally)</div>
                                            <div class="fc-epi-desc">
                                              2020 may go down as the year when longstanding issues in the BAS industry ignited a whole new level of interest. While building automation has been hallmarked for years by outdated software,
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>


                    </div>

                     <h3>
                        Guides
                    </h3>

                    <div class="row fc-video-card-extend">

                            <div class="col-md-6 hover">
                            <div class="webseries-thumbnail">
                                <a href="https://facilio-client-build.s3-us-west-2.amazonaws.com/facilio-client/guide/pdf/Facilio-State-of-Operations-and-Maintenance-Software.pdf" target="_blank">
                                    <div class="webinar-series-card">
                                        <div class="card-overlay">
                                        </div>
                                        <img src="/images/events/state-of-operations-and-maintenance-software.png" class="meVideoImg">
                                        <div class="text-container">
                                            <div class="fc-epi-name pT20">State of Property Operations & Maintenance Software</div>
                                            <div class="fc-epi-desc">
                                             A landmark study identifying key challenges and opportunities in BAS operations and O&M applications to help portfolio stakeholders be more proactive, efficient, and adaptive going into 2021.
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-md-6 hover">
                            <div class="webseries-thumbnail">
                                <a href="https://facilio.com/resources/guide/fdd-evaluation-guide/" target="_blank">
                                    <div class="webinar-series-card">
                                        <div class="card-overlay">
                                        </div>
                                        <img src="/images/events/fdd-evaluation-guide.png" class="meVideoImg">
                                        <div class="text-container">
                                            <div class="fc-epi-name pT20">How to benchmark your FDD solution for today's demand</div>
                                            <div class="fc-epi-desc">
                                             Fault Detection and Diagnostics (FDD) tools automate investigation into the abnormal performance of building systems. As a core component of Energy Management and Information Systems (EMIS), these tools simplify energy analysis and make results more accessible.
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
                webinars: [
                    {
                        filterType: "",
                        videoLink: "https://fast.wistia.com/embed/medias/g2zbwt2tlz.jsonp",
                        toggleData: "",
                        target: "",
                        title: "Improving energy efficiency in buildings: Digital retrofits as a force multiplier",
                        modalStyle: "wistia_embed wistia_async_g2zbwt2tlz popover=true popoverAnimateThumbnail=true videoFoam=true",
                        description: "Real estate portfolio owners/operators and EsCO companies, across the globe, are increasingly turning to energy efficiency-drivers that can scale and help them act their part in the major shift towards continuous sustainability - and this webinar aims to do just that."
                    },
                    {
                        filterType: "",
                        videoLink: "https://fast.wistia.com/embed/medias/dkko3wqpvw.jsonp",
                        toggleData: "",
                        target: "",
                        title: "Unlocking the potential of connected buildings with IoT",
                        modalStyle: "wistia_embed wistia_async_dkko3wqpvw popover=true popoverAnimateThumbnail=true videoFoam=true",
                        description: "Property operators and service providers are increasingly turning to new synergies in existing building IoT ecosystems that can fast-track connected building use case deployments (in days versus months) - and this webinar aims to do just that."
                    },
                     {
                        filterType: "",
                        videoLink: "https://fast.wistia.com/embed/medias/xxeko72mlo.jsonp",
                        toggleData: "",
                        target: "",
                        title: "Smart Buildings Showcase III: Projects featuring leading edge technology, integration and connectivity ",
                        modalStyle: "wistia_embed wistia_async_xxeko72mlo popover=true popoverAnimateThumbnail=true videoFoam=true",
                        description: "These projects demonstrate what is possible when fully utilizing a company-wide strategy, big data and an ecosystem of partners to produce the best buildings and workspaces."
                    },
                ],
                cards: [
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
                        videoLink: "https://fast.wistia.com/embed/medias/a9wij0vzzl.jsonp",
                        toggleData: "",
                        target: "",
                        customClass: "videoPadding",
                        title: "Rajavel Subramanian on the 3 types of software silos and how the overlay helps",
                        modalStyle: "wistia_embed wistia_async_a9wij0vzzl popover=true popoverAnimateThumbnail=true videoFoam=true",
                        description: "Watch Raj and James deep dive on the overlay option, including the types of overlays in the market and why they’re excited about Facilio’s hybrid overlay approach."
                    },
                ]
            }
        },
        head() {
            return {
                title: "Facilio Resources | Connected Buildings",
                meta: [{
                        hid: "description",
                        name: "description",
                        content: "All the insights you need to transform your real estate operations, delivered by leading expert"
                    },
                    {
                        hid: "fb-share-title",
                        property: "og:title",
                        content: "Facilio Resources | Connected Buildings"
                    },
                    {
                        hid: "fb-share-description",
                        property: "og:description",
                        content: "All the insights you need to transform your real estate operations, delivered by leading expert"
                    },
                    {
                        hid: "fb-share-image",
                        property: "og:image",
                        content: "/images/og-images/connected-building.png?reset=1"
                    },
                    {
                        hid: "fb-share-url",
                        property: "og:url",
                        content: "https://facilio.com/futureproof/resources-for-a-connected-built-environment"
                    },
                    {
                        hid: "twitter-meta",
                        name: "twitter:card",
                        content: "summary_large_image"
                    },
                    {
                        hid: "twitter-title",
                        name: "twitter:title",
                        content: "Facilio Resources | Connected Buildings"
                    },
                    {
                        hid: "twitter-description",
                        name: "twitter:description",
                        content: "All the insights you need to transform your real estate operations, delivered by leading expert"
                    },
                    {
                        hid: "twitter-image",
                        name: "twitter:image",
                        content: "/images/og-images/connected-building.png?reset=1"
                    },
                    {
                        hid: "twitter-url",
                        name: "twitter:url",
                        content: "https://facilio.com/futureproof/resources-for-a-connected-built-environment"
                    }

                ],
                link: [{
                    rel: "canonical",
                    href: "https://facilio.com/futureproof/resources-for-a-connected-built-environment"
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
        min-width: 100%;
        min-height: 330px;
        margin-top: -35px;
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