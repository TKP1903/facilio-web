<template>
    <div>

        <b-tabs content-class="mt-3" class="fc-tabs-with-accordion-list">

            <b-tab title="Data Aggregation" active>

                <div class="accordion fc-card-tab" role="tablist">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle.accordion-1 variant="info"><Arrow /> What devices and building systems can Facilio connect to?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    Facilio connects with any traditional building system–BAS/BMS, metering, lighting, fire safety, etc. Plus, with modern devices, IoT sensors, and controllers. We capture building data in real-time on to the Facilio cloud via our IoT-based edge software.
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle.accordion-2 variant="info"> <Arrow /> Can Facilio connect to my existing BAS/BMS or device? Is it vendor-specific?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    You can absolutely connect to an already available BMS or building system. In fact, Facilio’s edge software is vendor-agnostic and can capture data effortlessly from multi-vendor (Honeywell, Schneider, Seimens, etc.) automation systems and equipment.
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle.accordion-3 variant="info"><Arrow /> What happens if I add new sensors or devices to my building?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    Our IoT edge software is built with the evolving scope of smart buildings in mind. Since Facilio’s edge technology is fully hardware-agnostic, the same agent/software seamlessly supports any upgrades in the building, the addition of new systems and sensors to the network. This saves a lot of redundant system integration efforts.
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                     <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle.accordion-4 variant="info"><Arrow /> How does the edge software acquire data?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>Once the edge software is installed in your building device network, you can acquire data two ways - </b-card-text>
                                <ul class="fc-tab-list-inside">
                                    <li>For IP-based systems: Our edge software supports industry-standard protocols such as BACnet/IP, Modbus, oBIX, OPC, etc. for traditional system integrations</li>
                                    <li class="pT20">For non-IP based systems, our edge software leverages the Niagara framework and can connect with JACE or other Tridium and IoT-based middleware</li>
                                </ul>
                            </b-card-body>
                        </b-collapse>
                    </b-card>

                     <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle.accordion-5 variant="info"><Arrow /> How secure is it? Is it safe to access building data over the internet? </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    Yes, we absolutely ensure that your building data is always safe. Everything you do in the Facilio edge and application layer is fully encrypted by an SSL (Secure Sockets Layer) connection and accessed over the internet. The data from building systems and sensors are captured via MQTT protocol over SSL and follows secure communication with the cloud. More information on Facilio’s data and application security here - <a href="https://facilio.com/gdpr-compliance/"> Facilio privacy policy, Facilio GDPR Compliance</a>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    
                </div>
            </b-tab>

            <b-tab title="Edge Deployment">
                    <div class="accordion fc-card-tab" role="tablist">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle.accordion-6 variant="info"><Arrow />How can I implement the Facilio edge? </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    The Facilio edge software can be remotely installed in a virtual machine/industrial PC or an existing server in your device network. It accesses real-time data from the building network and executes secure, encrypted communication with the cloud. It can also be run on other gateways and/or any IoT-based environment. 
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle.accordion-7 variant="info"> <Arrow /> Do I need an additional gateway or local hardware to deploy the edge? </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    No, Facilio uses a fully hardware-agnostic approach to connect buildings. All it requires is that the server/VM, where the edge s/w is installed, has access to the device network and connectivity to the internet.
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle.accordion-8 variant="info"><Arrow /> Who does it for me?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                   We have a <a href="https://facilio.com/guide/article-categories/agent/"> step-by-step guide</a> that customers can use to deploy and activate our edge software. In addition, our <a href="https://facilio.com/customer-success"> customer success team</a> provides end-to-end support through the integration process. Facilio’s edge deployment is vendor-independent, can be done remotely or on-site with little to no manual intervention. 
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                     <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle.accordion-9 variant="info"><Arrow /> How long does it take? </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>It takes a few simple steps and less than half an hour to install Facilio’s edge software. The equipment commissioning and onboarding can be done within a span of a few weeks to 3 months depending on the number of buildings and data points. You can check the <a href="https://facilio.com/customer-success"> onboarding stages within Facilio here. </a></b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    
                </div>
            </b-tab>
            <b-tab title="O&M Use cases & Benefits">
                      <div class="accordion fc-card-tab" role="tablist">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle.accordion-10 variant="info"><Arrow />How does the data help O&M functionalities?  </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-10" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    Facilio’s cloud platform frees up the building data across silos to be centrally accessed for various O&M contexts and smart building use cases. The data works with our <a href="https://facilio.com/features">suite of O&M SaaS apps</a> to unlock real-time end-user functionalities with data.
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle.accordion-11 variant="info"> <Arrow /> Who can use the data?  </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-11" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                   Facilio provides authorized access for all property stakeholders including building owners, operators, 3rd party managers, service providers, MSIs and contractors, and O&M teams (building level, regional, portfolio-wide).
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle.accordion-12 variant="info"><Arrow /> What if I already have an EMS or FDD that utilizes real-time system data?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-12" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                  The purpose of connecting your building systems is much more than solving a single function. Every portfolio has evolving smart building needs, and every time a new use case is deployed, it requires its own solution for integration, data extraction, storage, and analytics. When data across building silos is consolidated, it unlocks value greater than the sum of its parts. Facilio’s approach provides the flexibility to implement what is required today and a pathway to extend the same solution for any new use cases in the future such as IAQ monitoring, occupancy engagement, energy efficiency at the portfolio level, after-hour scheduling, and more. 
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                
                </div>
            </b-tab>
        </b-tabs>
    </div>
</template>
<script>
    import Arrow from "./Arrow";
    export default {
        components: {
            Arrow
        },
    }
</script>