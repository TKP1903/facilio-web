<template>
    <div>
        <div class="productPage btn-shade">
            <div id="productPage"></div>
            <div class="myPage" id="myPage">
                <div id="fc-header">
                    <Navbar />
                </div>
                <!--End platform-overview-hero-sec-->
                <div class="mask"></div>
                <!--platform-feature-1-->
                <section class="fc-webinar-series-banner rebuild-banner">
                    <div class="container">
                        <div class="intro-txt-rebuild">Introducing</div>
                        <div class="rebuild-head-colored"><img src="/images/icons/REbuild_logo.svg" alt=""></div>
                        <div class="remodel-txt-main"><span class="blue-patch">Restart properties confidently with
                                adaptable</span> solutions for operations and maintenance
                        </div>
                        <div class="remodel-text-sub">In these challenging times, empower your property teams
                            with increased agility
                        </div>
                        <div class="fc-button-collapsive" style="margin-bottom: 30px;">
                            <a href="#rebuild-datasheet">
                                <div class="fc-webinar-cta">GET THE REBUILD BROCHURE</div>
                            </a>
                        </div>
                        <a @click="openPopup()" class="pointer">
                            <div class="text-center">
                                <span class="blue-underline black-txt-18 text-uppercase font-heavy"
                                    style="font-family: ProximaNovaSemibold;color: #fff;border-bottom: 1px solid #89e6ee;">Watch
                                    Demo Now</span>
                            </div>
                        </a>
                    </div>
                </section>
                <section class="seize-sec fc-container">
                    <div class="row sec-rebuild-wrapper">
                        <div class="col-md-6 pad-left-remote">
                            <div class="fc-workplace-table-text shrink-desc-rebuild-top">
                                Seize the zero hour
                                <br>before
                                <span class="bg-blue">RE-OPEN</span>
                            </div>
                        </div>
                        <div class="col-md-6 pad-right-10">
                            <div class="fc-workplace-table-des">
                                The emerging reality is one where property owners continue to operate real estate
                                portfolios
                                with a lean workforce, under stringent cost structure, while complying with dynamic
                                operating
                                guidelines.
                            </div>
                            <div class="fc-workplace-table-des" style="margin-top:20px;">
                                While property teams are putting their best foot forward to navigate the new condition,
                                the
                                stakes get even higher as we move further - to quickly adapt, and accelerate the path
                                forward.
                            </div>
                            <div class="fc-workplace-table-des" style="margin-top:20px;">
                                The question then remains, how do we equip ourselves to effectively respond in this
                                dynamic
                                environment?
                            </div>
                        </div>
                    </div>
                </section>
                <div class="fc-rebuild-video-sec">
                    <div>
                        <rebuildVideo></rebuildVideo>
                    </div>
                </div>
                <div class="clear-both fc-smartae-cycle-con">
                    <div class="fc-case-challenge">
                        <div class="fc-container">
                            <div></div>
                            <div class="max-width707 width-center">
                                <div class="black-txt2 f30 fc-workplace-subhead" style="margin-top: 10px;">Smoothly
                                    transition
                                    your operations with data-driven solutions
                                </div>
                                <div class="pT10 black-txt2 f18 mobile-18 fc-case-text-rebuild">
                                    With REbuild, you have a powerful set of tools to help your teams optimize building
                                    operations, turn insights to avenues for cost reduction & operational efficiency -
                                    in all
                                    circumstances.
                                </div>
                                <div class="toolkit-container">
                                    <div class="row">
                                        <a href="#hygiene-mgt" id="hygiene">
                                            <div class="col-lg-4 col-md-3 toolkit-box">
                                                <div class="toolkit-content">
                                                    <img src="/images/rebuild/icons/hygiene.svg" alt="" id="image1"
                                                        class="toolkit-img">
                                                    <p class="toolkit-txt">Hygiene Management</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#visitor-mgt" id="visitor">
                                            <div class="col-lg-4 col-md-3 text-center toolkit-box">
                                                <div class="toolkit-content">
                                                    <img src="/images/rebuild/icons/visitor.svg" alt="" id="image2"
                                                        class="toolkit-img">
                                                    <p class="toolkit-txt">Visitor Management </p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#centralised-opt" id="centralised">
                                            <div class="col-lg-4 col-md-3 text-center toolkit-box">
                                                <div class="toolkit-content">
                                                    <img src="/images/rebuild/icons/centralised.svg" alt="" id="image3"
                                                        class="toolkit-img">
                                                    <p class="toolkit-txt">Portfolio Analytics & Compliance</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="row mobile-only-top-margin">
                                        <a href="#dynamic-hvac" id="dynamic">
                                            <div class="col-md-6 text-center toolkit-box">
                                                <div class="toolkit-content">
                                                    <img src="/images/rebuild/icons/dynamic_hvac.svg" alt="" id="image4"
                                                        class="toolkit-img">
                                                    <p class="toolkit-txt">Portfolio Automation</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#touchless-con" id="touchless">
                                            <div class="col-md-6 text-center toolkit-box">
                                                <div class="toolkit-content">
                                                    <img src="/images/rebuild/icons/touchless.svg" alt="" id="image5"
                                                        class="toolkit-img">
                                                    <p class="toolkit-txt">Touchless Occupant Controls</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#command-center" id="command">
                                            <div class="col-md-4 text-center toolkit-box">
                                                <div class="toolkit-content">
                                                    <img src="/images/rebuild/icons/command_center.svg" alt=""
                                                        id="image6" class="toolkit-img">
                                                    <p class="toolkit-txt">Operational Command Center</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="fc-button-collapsive"><a href="#rebuild-datasheet">
                                <div class="fc-webinar-cta">GET THE REBUILD BROCHURE</div>
                            </a></div>
                    </div>
                </div>
                <div class="workplace-feature-2">
                    <div class="fc-container w-feature-wrapper">
                        <div class="row fc-wrapper-pad container" id="hygiene-mgt">
                            <div class="col-md-6">
                                <div><img src="/images/rebuild/icons/hygiene.svg" alt=""></div>
                                <div class="fc-workplace-rebuild-head"><span class="blue-underline">Hygiene
                                        Management</span>
                                </div>
                                <div class="fc-workplace-rebuild-subhead">
                                    Digitize disinfection of properties at scale
                                </div>
                                <div class="w-feature-desc">
                                    Centrally manage disinfection of high touch areas and deep cleaning measures across
                                    properties. Proactively track essential inventory, build confidence with tenants by
                                    effectively communicating real-time hygiene updates - all with zero-dependency on
                                    your
                                    existing CMMS solutions.
                                </div>
                                <div class="rebuild-list-container">
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Off-the-rack hygiene
                                        routines
                                    </div>
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Digital record of
                                        disinfection,
                                        photo capture on mobile</div>
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""> </span>Portfolio-wide
                                        hygiene
                                        compliance</div>
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Cleaning supplies &
                                        inventory
                                        management</div>
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Live updates, health
                                        score
                                        display for tenants</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="product-img">
                                    <img src="/images/rebuild/hygiene.png" alt="Connect disparate data sources "
                                        title="Connect disparate data sources" style="max-width:560px;width:100%;" />
                                </div>
                            </div>
                        </div>
                        <div class="row fc-wrapper-pad fc-reverse" id="visitor-mgt">
                            <div class="col-md-6">
                                <div class="product-img">
                                    <img src="/images/rebuild/visitor.png"
                                        alt="Activate intelligence with cloud-native FDD "
                                        title="Activate intelligence with cloud-native FDD "
                                        style="max-width:560px;width:100%;" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div><img src="/images/rebuild/icons/visitor.svg" alt=""></div>
                                <div class="fc-workplace-rebuild-head"><span class="blue-underline">Visitor
                                        Management</span>
                                </div>
                                <div class="fc-workplace-rebuild-subhead">
                                    Enable touchless visitor entry and contact tracing
                                </div>
                                <div class="w-feature-desc">
                                    Streamline arrivals and provide a comfortable environment for visitors even with
                                    enhanced
                                    screening. Enable a touchless sign-in experience and protect your property by
                                    recording
                                    essential visitor information on the purpose of visit, travel history, and wellness
                                    etc. for
                                    contact tracing
                                </div>
                                <div class="rebuild-list-container">
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>No touch QR-code
                                        based check-in
                                    </div>
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Digital record of
                                        visitor
                                        information</div>
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Host and spaces
                                        accessed for
                                        contact tracing</div>
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Pre-register
                                        visitors, print
                                        badge</div>
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Notify hosts ahead of
                                        time</div>
                                </div>
                            </div>
                        </div>
                        <div class="row fc-wrapper-pad" id="centralised-opt">
                            <div class="col-md-6">
                                <div><img src="/images/rebuild/icons/centralised.svg" alt=""></div>
                                <div class="fc-workplace-rebuild-head"><span class="blue-underline">Portfolio Analytics
                                        &
                                        Compliance</span></div>
                                <div class="fc-workplace-rebuild-subhead">
                                    Adapt operations to support new SOP
                                </div>
                                <div class="w-feature-desc">
                                    Prepare for safe re-opening of properties by enabling portfolio-wide visibility of
                                    regulatory
                                    compliances and SOP adherence, on cloud. Leverage REbuild to capture real-time data
                                    from
                                    existing BAS, get critical insights on HVAC and indoor air quality compliance, and
                                    proactively act on areas that may put occupants at risk.
                                </div>
                                <div class="rebuild-list-container">
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Real-time BAS data
                                        capture</div>
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Portfolio-wide fault
                                        detection &
                                        diagnostics</div>
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Drill down analytics
                                        for insights
                                        on HVAC, IAQ compliance</div>
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Benchmark against
                                        Covid-19
                                        guidelines</div>
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Automated workflows
                                        for
                                        escalation & work request</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="product-img">
                                    <img src="/images/rebuild/centralised.png" alt="Connect disparate data sources "
                                        title="Connect disparate data sources" style="max-width:560px;width:100%;" />
                                </div>
                            </div>
                        </div>
                        <div class="row fc-wrapper-pad fc-reverse" id="dynamic-hvac">
                            <div class="col-md-6">
                                <div class="product-img">
                                    <img src="/images/rebuild/dynamic_hvac.png"
                                        alt="Activate intelligence with cloud-native FDD "
                                        title="Activate intelligence with cloud-native FDD "
                                        style="max-width:560px;width:100%;" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div><img src="/images/rebuild/icons/dynamic_hvac.svg" alt=""></div>
                                <div class="fc-workplace-rebuild-head"><span class="blue-underline">Portfolio
                                        Automation</span>
                                </div>
                                <div class="fc-workplace-rebuild-subhead">
                                    Remotely control BAS across properties
                                </div>
                                <div class="w-feature-desc">
                                    Position yourself to align portfolio-wide operations to dynamic changes in HVAC
                                    guidelines
                                    and tenant requests based on occupancy, space occupied, or season. Respond with
                                    agility and
                                    deploy BAS changes across properties by automating trigger based sequences, bulk
                                    schedules
                                    and overrides.
                                </div>
                                <div class="rebuild-list-container">
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Portfolio-level
                                        automation &
                                        control</div>
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Automate trigger
                                        based BAS
                                        operations</div>
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Bulk setpoint
                                        overrides</div>
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Dynamic HVAC
                                        scheduling</div>
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Across multi-vendor
                                        building
                                        systems</div>
                                </div>
                            </div>
                        </div>
                        <div class="row fc-wrapper-pad" id="touchless-con">
                            <div class="col-md-6">
                                <div><img src="/images/rebuild/icons/touchless.svg" alt=""></div>
                                <div class="fc-workplace-rebuild-head"><span class="blue-underline">Touchless Occupant
                                        Controls</span></div>
                                <div class="fc-workplace-rebuild-subhead">
                                    Welcome tenants safely with touchless experiences
                                </div>
                                <div class="w-feature-desc">
                                    Confidently welcome back tenants by enabling touchless app-based access to spaces
                                    and
                                    controls of lighting, HVAC points, or elevator calls. Build trust and extend a
                                    touchless
                                    experience for access control, and visits across properties.
                                </div>
                                <div class="rebuild-list-container">
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Mobile-app based HVAC
                                        control
                                    </div>
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Touchless elevator
                                        entry</div>
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Touchless access
                                        control</div>
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Touchless lighting
                                        and ambient
                                        control </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="product-img">
                                    <img src="/images/rebuild/touchless.png" alt="Connect disparate data sources "
                                        title="Connect disparate data sources" style="max-width:560px;width:100%;" />
                                </div>
                            </div>
                        </div>
                        <div class="row fc-wrapper-pad fc-reverse" id="command-center">
                            <div class="col-md-6">
                                <div class="product-img command-center-image">
                                    <img src="/images/rebuild/command_center.png"
                                        alt="Activate intelligence with cloud-native FDD "
                                        title="Activate intelligence with cloud-native FDD "
                                        style="max-width:500px;width:100%;" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div><img src="/images/rebuild/icons/command_center.svg" alt=""></div>
                                <div class="fc-workplace-rebuild-head"><span class="blue-underline">Operational Command
                                        Center</span></div>
                                <div class="fc-workplace-rebuild-subhead">
                                    Monitor reopening readiness with data-driven decisions
                                </div>
                                <div class="w-feature-desc">
                                    Access a single pane of glass operational data across the portfolio. Benchmark
                                    against C-19
                                    guidelines for hygiene, maintenance, BAS operations, and tenant management. Spot
                                    strained
                                    areas instantly and intelligently automate response workflows - all from one place.
                                </div>
                                <div class="rebuild-list-container">
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Single pane of glass
                                        to determine
                                        property readiness</div>
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Unified data engine
                                        for
                                        operations </div>
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Integrates with
                                        existing business
                                        systems</div>
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Ready-to-deploy
                                        Facilio apps for
                                        O&M</div>
                                    <div class="rebuild-list-sec"><span class="tick-circle"><img class="tick-circle-img"
                                                src="/images/rebuild/icons/tick.svg" alt=""></span>Customize & extend
                                        workflows to
                                        your needs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clear-both fc-smartae-cycle-con bg-grey-testimonial">
                <div class="fc-case-challenge-rebuild">
                    <div class="fc-container-testimonial">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="rebuild-testimonial-wrapper">
                                    <div class="rebuild-testimonial-txt">“Facilio has been immensely supportive in
                                        scaling our
                                        operations during tough times. Their REbuild toolkit provided granular
                                        visibility into our
                                        portfolio performance, allowing us to control expenses and operate efficiently
                                        during this
                                        hour. The transition was unbelievably smooth to the new operating guidelines.”
                                    </div>
                                    <div class="testimonial-name">Sumith Sukumaran</div>
                                    <div class="testimonial-company">Operations Head, Quality Group</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <img src="/images/rebuild/sumith.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!---workplace-feature-3-->
            <div class="workplace-feature-3">
                <div class="container w-mobile-feature-wrapper">
                    <div class="w-feature-head-center">
                        Build resilience with a neatly laid out recovery strategy
                    </div>
                    <div class="row w-col-wrapper">
                        <div class="col-md-4 col-sm-6">
                            <div class="partner-featur-icon text-left">
                                <img src="/images/rebuild/icons/centralized.svg" alt title />
                            </div>
                            <div class="w-col-head partner-feature-heading text-left">
                                Centralized building data
                            </div>
                            <div class="w-col-desc">
                                Centrally consolidate hard-to-access building data across the portfolio onto a single
                                platform
                                by connecting existing automation systems, sensor and devices
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="partner-featur-icon text-left">
                                <img src="/images/rebuild/icons/zoomed.svg" alt title />
                            </div>
                            <div class="w-col-head">Zoomed-in exec visibility</div>
                            <div class="w-col-desc">
                                Gain remote visibility into portfolio-wide operational performance with custom KPIs,
                                drilled-down impact reporting and real-time dashboards
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="partner-featur-icon text-left">
                                <img src="/images/rebuild/icons/cloud.svg" alt title />
                            </div>
                            <div class="w-col-head">Cloud-native apps</div>
                            <div class="w-col-desc">
                                Break free from site-level restrictions to unlock holistic efficiency. Empower remote
                                efficiency
                                for your teams with fully mobile operations, on cloud
                            </div>
                        </div>
                    </div>
                    <div class="row w-col-wrapper">
                        <div class="col-md-4 col-sm-6">
                            <div class="partner-featur-icon text-left">
                                <img src="/images/rebuild/icons/faster.svg" alt title />
                            </div>
                            <div class="w-col-head">Faster and remote onboarding</div>
                            <div class="w-col-desc">
                                Be it deploying hygiene templates or setting up a virtual response room - our
                                remote-assisted
                                platform can be onboarded in a few weeks, not months
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="partner-featur-icon text-left">
                                <img src="/images/rebuild/icons/integration.svg" alt title />
                            </div>
                            <div class="w-col-head">Hassle-free no code integration</div>
                            <div class="w-col-desc">
                                Deploy return to operations strategy at ease - seamless integration with multi-vendor
                                systems,
                                augment existing apps & workflows to generate quick wins.
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="partner-featur-icon text-left">
                                <img src="/images/rebuild/icons/barrier.svg" alt title />
                            </div>
                            <div class="w-col-head partner-feature-heading text-left">
                                No-barrier scaling of ops
                            </div>
                            <div class="w-col-desc">
                                Focus on improving performance across the portfolio. Adopt highly scalable infra that’s
                                future-ready to add new systems, apps & workflows for the new normal
                            </div>
                        </div>
                    </div>
                </div>
                <!---workplace-feature-3-->
            </div>
            <div class="cta-feature-rebuild">Designed for flexible and faster time-to-value</div>
            <div class="text-center try-link">
                <nuxt-link to="/get-started" class="rebuildBluearrow-center">TRY REBUILD</nuxt-link>
            </div>
            <div class="clear-both fc-smartae-cycle-con">
                <div class="fc-case-challenge">
                    <div class="fc-container">
                        <div class="black-txt2 f30 w-feature-head-center wrap-feature-div" style="margin-top: 10px;">
                            Emerge
                            stronger on the other side, together
                        </div>
                        <div class="max-width800 width-center">
                            <div class="pT20 black-txt2 f18 mobile-18 fc-video-txt-rebuild">
                                As you gear up for the new normal, it's important more than ever to collectively seek
                                direction
                                & best practices from industry experts who have practically deployed operating models
                                for remote
                                efficiency. At Facilio, we’ve created an educational platform to open up dialogue and
                                collaborate with the best minds in the industry. Join 100s of other REbuild leaders who
                                are
                                learning new ways to meet post-pandemic operational demands.
                            </div>
                        </div>

                        <div class="row fc-container">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="fc-speaker-card">
                                        <img src="/images/futureproof/episode-1.jpg" alt="">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="fc-speaker-card">
                                        <img src="/images/futureproof/episode-2.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="home-input-sec rebuild-cta">
                            <nuxt-link to="/futureproof/covid-19-educational-series/"
                                class="try-demo-btn mobile-try-demo-btn try-demo-btn-2">Access expert insights
                            </nuxt-link>
                        </div>
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
            <div class="workplace-feature-2">
                <div class="container w-feature-wrapper">
                    <div class="w-feature-head-center faq-txt">
                        Frequently asked questions
                    </div>
                    <div id="accordion" class="panel-group fc-accordion">
                        <div class="panel fc-panel">
                            <div data-toggle="collapse" data-parent="#accordion" href="#collapse1"
                                class="panel-heading fc-panel-heading">
                                <img src="/images/rebuild/arrow.svg" alt="" class="rebuild-acc-arrow">
                                <h4 class="panel-title fc-acc-head">What is REbuild?</h4>
                            </div>
                            <div id="collapse1" class="panel-collapse collapse in">
                                <div class="panel-body fc-acc-desc">REbuild from Facilio is a remote operations toolkit
                                    that
                                    equips property teams for an impactful post-pandemic response. It enables properties
                                    to
                                    transition building maintenance to the new guidelines, remotely operate legacy
                                    building
                                    systems, and provide real-time support for tenants using touchless controls.</div>
                            </div>
                        </div>
                        <div class="panel fc-panel">
                            <div data-toggle="collapse" data-parent="#accordion" href="#collapse2"
                                class="panel-heading fc-panel-heading">
                                <img src="/images/rebuild/arrow.svg" alt="" class="rebuild-acc-arrow">
                                <h4 class="panel-title fc-acc-head">Why do you need REbuild now? Who can benefit from
                                    it?</h4>
                            </div>
                            <div id="collapse2" class="panel-collapse collapse">
                                <div class="panel-body fc-acc-desc">
                                    <p>
                                        With the largely unfamiliar remote environment being the new normal, property
                                        management
                                        is struggling to cope against an economic standstill with a lean workforce. The
                                        need to
                                        trim costs while improving efficiency and aligning to the new operating
                                        guidelines has put
                                        property teams across the globe in pressure.
                                    </p>
                                    <p>With REbuild, owners and operators now have a robust ready-to-use platform to
                                        drive
                                        efficiency while expanding profit margins. Built for augmenting remote
                                        operations, REbuild
                                        serves multiple real estate stakeholders -</p>
                                    <ul>
                                        <li>Impact reporting and remote visibility for executives / owners </li>
                                        <li>Virtual command centre and supervisory controls for property managers</li>
                                        <li>Remote operations & mobile maintenance for agile workforce</li>
                                        <li>Shareable real-time reports and touchless engagement for tenants</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="panel fc-panel">
                            <div data-toggle="collapse" data-parent="#accordion" href="#collapse3"
                                class="panel-heading fc-panel-heading">
                                <img src="/images/rebuild/arrow.svg" alt="" class="rebuild-acc-arrow">
                                <h4 class="panel-title fc-acc-head">I already have a BAS software, why do I need
                                    REbuild?</h4>
                            </div>
                            <div id="collapse3" class="panel-collapse collapse">
                                <div class="panel-body fc-acc-desc">
                                    <p>Unlike traditional BAS software, REbuild dissolves operational silos, connects
                                        multi-vendor automation systems and optimizes ops performance at the
                                        portfolio-level.
                                        Furthermore, it</p>
                                    <ul>
                                        <li>Consolidates portfolio-wide buildings data on Facilio’s centralized platform
                                        </li>
                                        <li>Seamlessly moves BAS operations from on-site to cloud with virtual command
                                            control
                                            center</li>
                                        <li>Augments multi-vendor legacy systems using a proprietary IoT edge</li>
                                        <li>Turns data to insights with real-time performance analytics</li>
                                        <li>Has extensive integration and customization capabilities</li>
                                        <li>Designed for quick and smooth onboarding</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="panel fc-panel">
                            <div data-toggle="collapse" data-parent="#accordion" href="#collapse4"
                                class="panel-heading fc-panel-heading">
                                <img src="/images/rebuild/arrow.svg" alt="" class="rebuild-acc-arrow">
                                <h4 class="panel-title fc-acc-head">Can I integrate REbuild with existing building
                                    systems?</h4>
                            </div>
                            <div id="collapse4" class="panel-collapse collapse">
                                <div class="panel-body fc-acc-desc">Yes, you can. REbuild is designed to seamlessly
                                    integrate
                                    with multi-vendor building systems and 3rd party apps. There is absolutely no need
                                    to uproot
                                    your existing infrastructure.</div>
                            </div>
                        </div>
                        <div class="panel fc-panel">
                            <div data-toggle="collapse" data-parent="#accordion" href="#collapse5"
                                class="panel-heading fc-panel-heading">
                                <img src="/images/rebuild/arrow.svg" alt="" class="rebuild-acc-arrow">
                                <h4 class="panel-title fc-acc-head">Do I need any additional hardware to deploy REbuild?
                                </h4>
                            </div>
                            <div id="collapse5" class="panel-collapse collapse">
                                <div class="panel-body fc-acc-desc">No. You do not need any additional hardware to
                                    deploy
                                    REbuild. REbuild is fully hardware agnostic and takes a pure software-approach to
                                    setup
                                    remote connectivity and enable cloud-native remote access to building ops.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <productForm />
        </div>
        <Footer />
    </div>
</template>
<script>
    import Navbar from "../../components/Navbar.vue"
    import Footer from "../../components/Footer"
    import productForm from "../../components/form/productWalkThroughForm";
    import rebuildVideo from "../../components/rebuild-video";
    export default {
        data() {
            return {
                interviews: [{
                        link: "SEc9jyzFjTM",
                        image: "interview-0.png"
                    },
                    {
                        link: "whh-513d9ik",
                        image: "interview-1.jpg"
                    }
                ]
            }
        },
        mounted: function () {
            $(document).ready(function () {

                //scroll support for utm params - email campaigns (temperory fix)
                var url = window.location.href;
                if (url.indexOf("#") != -1) {
                    var hash = url.substring(url.indexOf("#") + 1);
                    // Handler for .ready() called.
                    $('html, body').animate({
                        scrollTop: $('#' + hash).offset().top
                    }, 'slow');
                }

                $("#hygiene").mouseover(function () {
                    $("#image1").attr("src", "/images/rebuild/icons/hover/hygiene.svg");
                });
                $("#hygiene").mouseleave(function () {
                    $("#image1").attr("src", "/images/rebuild/icons/hygiene.svg");
                });
                $("#visitor").mouseover(function () {
                    $("#image2").attr("src", "/images/rebuild/icons/hover/visitor.svg");
                });
                $("#visitor").mouseleave(function () {
                    $("#image2").attr("src", "/images/rebuild/icons/visitor.svg");
                });
                $("#centralised").mouseover(function () {
                    $("#image3").attr("src", "/images/rebuild/icons/hover/centralised.svg");
                });
                $("#centralised").mouseleave(function () {
                    $("#image3").attr("src", "/images/rebuild/icons/centralised.svg");
                });
                $("#dynamic").mouseover(function () {
                    $("#image4").attr("src", "/images/rebuild/icons/hover/dynamic_hvac.svg");
                });
                $("#dynamic").mouseleave(function () {
                    $("#image4").attr("src", "/images/rebuild/icons/dynamic_hvac.svg");
                });
                $("#touchless").mouseover(function () {
                    $("#image5").attr("src", "/images/rebuild/icons/hover/touchless.svg");
                });
                $("#touchless").mouseleave(function () {
                    $("#image5").attr("src", "/images/rebuild/icons/touchless.svg");
                });
                $("#command").mouseover(function () {
                    $("#image6").attr("src", "/images/rebuild/icons/hover/command_center.svg");
                });
                $("#command").mouseleave(function () {
                    $("#image6").attr("src", "/images/rebuild/icons/command_center.svg");
                });
            });
        },
        components: {
            Navbar,
            Footer,
            productForm,
            rebuildVideo
        },
        methods: {
            openPopup() {
                document.getElementById("registerPopup").style.display = "block";
            }
        },
        head() {
            return {
                title: "REbuild from Facilio | Solutions for Reopening Properties",
                meta: [{
                        hid: "description",
                        name: "description",
                        content: "A remote operations toolkit to help real estate owners confidently restart property operations and create a safe environment"
                    },
                    {
                        hid: "fb-share-title",
                        property: "og:title",
                        content: "REbuild from Facilio | Solutions for Reopening Properties"
                    },
                    {
                        hid: "fb-share-description",
                        property: "og:description",
                        content: "A remote operations toolkit to help real estate owners confidently restart property operations and create a safe environment"
                    },
                    {
                        hid: "fb-share-image",
                        property: "og:image",
                        content: "https://facilio.com/images/og-images/rebuild-og.png"
                    },
                    {
                        hid: "fb-share-url",
                        property: "og:url",
                        content: "https://facilio.com/rebuild/"
                    },
                    {
                        hid: "twitter-meta",
                        name: "twitter:card",
                        content: "summary"
                    },
                    {
                        hid: "twitter-title",
                        name: "twitter:title",
                        content: "REbuild from Facilio | Solutions for Reopening Properties"
                    },
                    {
                        hid: "twitter-description",
                        name: "twitter:description",
                        content: "A remote operations toolkit to help real estate owners confidently restart property operations and create a safe environment"
                    },
                    {
                        hid: "twitter-image",
                        name: "twitter:image",
                        content: "https://facilio.com/images/og-images/rebuild-og.png"
                    },
                    {
                        hid: "twitter-url",
                        name: "twitter:url",
                        content: "https://facilio.com/rebuild/"
                    }
                ],
                link: [{
                    rel: "canonical",
                    href: "https://facilio.com/rebuild/"
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