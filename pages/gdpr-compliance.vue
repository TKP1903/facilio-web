<template>
  <div class="productPage btn-shade">
    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <section>
        <div class="privacy-hero-container">
          <h1>FACILIO and GDPR</h1>
         <span
                    id="intro"
                    ></span>
        </div>
      </section>
      <section>
        <div class="legal-main">
          <div class="privacy-content-container">
            <div class="two-thirds">
              <div class="legal-sidebar" style="width:330px; padding-left: 20px;">
                <nav id="seo-sidebar" class="hidden-xs">
                  <h3>Table of Contents</h3>
                  <ul class="nav-list-ul">
                    <li class="nav-list-item">
                      <a class="nav-list-alink" href="#intro">Introduction</a>
                    </li>
                    <li class="nav-list-item">
                      <a class="nav-list-alink" href="#gdpr">Facilio and GDPR</a>
                    </li>
                    <li class="nav-list-item">
                      <a class="nav-list-alink" href="#data">
                        Collection, storage, and processing of Personal Data
                      </a>
                    </li>
                    <li class="nav-list-item">
                      <a class="nav-list-alink" href="#conclusion">
                        Conclusion
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="legal-content">
                <p class="legal-content-para">
                  Facilio is an IoT and AI-driven operations and maintenance software for large real estate portfolios This includes SaaS applications for facilities, sustainability and property and tenant management that helps customers like commercial real estate owners, property developers and building owners to centrally manage their operations, maintenance, asset performance, sustainability - energy performance and the tenant experience across their distributed portfolio of buildings, in real-time.
                </p>
                <p class="legal-content-para">
                  We have end-to-end capabilities like help desk, work order management, service portal, pre-scheduled and preventive maintenance,predictive maintenance, asset management which includes fault detection and diagnostics, false alarm detection, etc., Comprehensive energy management including M&V, regression analysis, heatmap analysis, load analysis, consumption analysis, EnPI, baselining, benchmarking energy efficiency, etc.  Service catalogs, portals for tenants, and Vendors.
                </p>
                <p class="legal-content-para">
                    Facilio can integrate with existing Building Automation Systems and make use of all data (used or currently unused) to deliver real-time facilities management.
                </p>
                <p class="legal-content-para">
                    Facilio is available to its user via web or as dedicated apps in mobile platforms.
                </p>
                <p class="legal-content-para">
                    <u class="legal-content-heading-small">GDPR -General Data Protection Rights</u>
                   gives an individual the right to know what personal data is being held, how the data is stored, processed, and it also provides the end-user with the rights/consent to have their personal data to be erased upon request. 
                </p>
                <p class="legal-content-heading-small">What is Personally Identifiable  Data</p>
                <p class="legal-content-para">
                    Personally identifiable data includes any information that can be used to identify or track and individual uniquely. It includes Name, personal email Id, Personal phone number,  home address, age,and other sensitive data like medical information, Social security numbers, Credit card information, etc.
                </p>
                <p class="legal-content-heading-small">What is Facilio’s role in GDPR</p>
                <p class="legal-content-para">
                    Facilio acts as a Processor of Data, and we do not explicitly collect any end-user personal data as a part of signup or Onboarding.
                    The controllers (or the clients that use Facilio's service) are encouraged to collect only official information like office address/phone numbers and email id's when adding users to use Facilio's Services. They also hold the responsibility to remove a particular user when the user leaves their organization.
                    <span
                    id="gdpr"
                    ></span>
                    Facilio does not hold any of the information removed from the application in our servers or databases.
                </p>
                <p
                  class="legal-content-heading"
                >There are many rights in GDPR , but at Facilio we basically</p>
                <ul>
                    <li>
                        <p class="legal-content-para">
                        Do not insist on collecting any personal information explicitly, and the customers are encouraged to use their official email ID and phone numbers during the signup process. 
                        </p>
                    </li>
                    <li>
                        <p class="legal-content-para">
                        Facilio does not hold any personal data longer than necessary. The data will be removed in immediate effect from our servers and databases if the controllers request us or delete the information directly. 
                        </p>
                    </li>
                    <li>
                        <p class="legal-content-para">
                        Facilio is clear on how and who and why a person accesses the data - the access is provided only to specified personnel through IAM control. 
                        </p>
                    </li>
                    <li>
                        <p class="legal-content-para">
                        Facilio is clear on how the data is processed. 
                        </p>
                    </li>
                    <li>
                        <p class="legal-content-para">
                        Facilio never collects / stores any sensitive personal data either directly or indirectly from any other websites. 
                        </p>
                    </li>
                    <li>
                        <p class="legal-content-para">
                        Facilio is obliged to make clients aware in case of any data breaches that occur. 
                                                  <span
                    id="data"
                    ></span>
                        </p>
                    </li>
                    <li>
                        <p class="legal-content-para">
                        Facilio trains all employees about GDPR. 
                        </p>
                    </li>
                  </ul>
                <p class="legal-content-heading-small">
                    Personal Data Collection, Storage, and Processing Details that happen in Facilio: 
                    This section details the forms in our product that collects the data, how it's segregated, stored, and how it's processed.
                </p>
                <p class="legal-content-heading-small">
                    Signup Form 
                </p>
                <p class="legal-content-para">
                    Name and work email (Specifically tagged as work email)  is collected and stored in a database table called <span class="legal-content-heading-small">Account_Users</span>. This is the only table where the information gets stored, and an ID is generated for the corresponding user in that particular organization. Only the ID is referred to in all other places in the database. This specific table can be encrypted. In this form, only Name is the PII collected and can not be avoided. Usually, the Facility Manager signing up for Facilio's services uses this Page, and he becomes the Super Administrator for the account, for their organization, and has access to all data that is entered in this account.
                    The Facility manager becomes the controller of all data belonging to the organization. Facilio acts as a processor.
                </p>
                <p class="legal-content-heading">Add Users/Requesters/Tenants/Labour Form</p>
                <p class="legal-content-para">
                  Name and email ID  is collected and stored in a database table called <span class="legal-content-heading-small">Account_users</span>. This is the only table where the information is stored, and an ID is generated. Only the ID is referred to in all other places. In this form, the Name, email ID, and phone number are collected and can not be avoided. For Labour addition, the work location address is collected.  Email ID and Phone numbers are collected to send a notification to the technician when a work order is assigned to him or if he must manage an asset.  The controller has to make sure that the email ID and phone numbers are official email id/phone numbers. Facilio also performs a regular audit ( once in 3 months ) of the data in the Account_users table. If we identify any personal email IDs ( like @gmail/@yahoo, etc.), we notify the controller to get the consent. However, this kind of validation cannot be performed for phone numbers. Hence, phone number detail is not mandated in these forms. Further, the details entered in the Account_users table are integrated with 3rd party tools (Email Server for sending email notifications)  and (Twilio for sending SMS notifications ). Facilio triggers notifications only on tasks related to Work order management/alarms/asset management and does
                  not send any other notifications to the end-user.
                  Further, all data that is transferred from and to the 3rd party tools are managed to secure TLS lines.
                </p>
                <p class="legal-content-heading">Visitor and Vendor Management Forms</p>
                <p class="legal-content-para">
                  When Facilio Visitor Management/Service portal is used for a visitor management system, the Facility Manager and the Tenants in a Facility can use Facilio to invite people, Invite Vendors and record visits of Guests. In all these forms, the Name, phone number, Email ID, and Address of the visitor is collected, which are all classified as PII. This information is stored in the <span class="legal-content-heading-small">"Visitor"</span> table of the database, and this storage is encrypted. Again this email ID and phone numbers are processed for email generation /SMS generation for  Invite/ check-in and check-out of the visitor. All transit data is handled through secured lines. The information that goes into this portal is directly done with the consent of the visitor/vendor, and if there is a need/concern regarding this data,
                  the Facility manager/controller can delete the visit/invite, and the data gets removed from the database immediately.
                </p>
                <p class="legal-content-heading">Vendor Management Form</p>
                <p class="legal-content-para">
                  A Facility manager or a Tenant can add Vendor related information and is stored in the <span class="legal-content-heading-small">"Vendors"</span> table. The Name, phone number, Email ID, and Address of the Vendor - which must most probably be an official address, but it can also be personal information. Again this email ID and phone numbers are processed for email generation/SMS generation for  Invite/ check-in and check-out of the vendor since Vendor management is interconnected to visitor management. All transit data is handled through secured lines.
                </p>
                <p class="legal-content-para">
                 A reference number value will be created for each of the user/visitor/vendor stored in the above table, and these values will be referenced in at least  20 other places like:
                </p>
                <ol>
                    <li>
                        <p class="legal-content-para">
                            Tables that track login and Logout
                        </p> 
                    </li>
                    <li>
                        <p class="legal-content-para">
                            Tables that track active users
                        </p> 
                    </li>
                    <li>
                        <p class="legal-content-para">
                            Tables that manage the visits
                        </p> 
                    </li>
                    <li>
                        <p class="legal-content-para">
                            Tables that manage Invites 
                        </p> 
                    </li>
                    <li>
                        <p class="legal-content-para">
                            Work order scheduling 
                        </p> 
                    </li>
                    <li>
                        <p class="legal-content-para">
                            Asset management etc.
                        </p> 
                    </li>
                </ol>
                <p class="legal-content-para">
                    The data stored in the above tables will be referenced and displayed in the following places: Work order assignment, workflow criteria, Stateflow Criteria, Asset and purchase request management, Contract, and SLA management pages.
                </p>
                <p class="legal-content-para">
                    The Work request submissions will have the affect person's Name
                    and details of the location where the issue is seen.
                    This detail is essential to check the location within the Premises where a particular issue is seen.
                </p>
                <p class="legal-content-heading">Who from Facilio has access to the Data</p>
                <p class="legal-content-para">
                    At Facilio, the access to the databases where the customer data is stored is strictly prohibited to office IP addresses and only to very few members. Since the tables that contain PII are encrypted, the data can not be locally imported. 
                </p>
                <p class="legal-content-para">
                    Specific members from customer support have access to the Super Admin logins of the customers as a part of the Onboarding process. 
                    <span
                    id="responsibilities"
                    ></span>
                    Once the Onboarding is complete, the Customers are encouraged to change the password to prevent any data breach. 
                </p>
                <p class="legal-content-heading">Responsibilities of a the Controllers / our Clients</p>
                <p class="legal-content-para">
                    Every Facilio client's implementation of Facility management is different, and many not exist with some degree of customization. Each of Facilio's clients as a Data controller must make their assessment and take into account all the configurations used /
                    <span
                    id="conclusion"
                    ></span>
                    reports generated and check if photos or other attachments
                    uploaded contain any personal data and must perform a regular audit on what they are collecting and controlling.
                </p>
                <p class="legal-content-heading">Conclusion</p>
                <p class="legal-content-para">
                    The main areas where personal data is held in Facilio is found in Person/Users, Labour/Tenant/Visitor/Vendor. But there are many more places like custom modules where there is a potential to store personal data.  Email ID and Phone numbers are often referenced with User Name as a unique key, that gets referenced as a numeric value generated in one of the above-mentioned tables.
                </p>
                <p class="legal-content-para">
                    Facilio Databases are designed to determine if a person's data is no longer needed / or if a concern arises regarding storing one's data, then the data can be removed with immediate effect without creating referential integrity issues by the controller
                </p>
                <p class="legal-content-para">
                    Through the above two practices that are followed, GDPR compliance and security of personal data is significantly controllable by the controllers/facility managers that use Facilio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer />

    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default {
  components: {
    Navbar, Footer
  },
  head() {
    return {
      title: "GDPR at Facilio",
      meta: [
        {
          hid: "decription",
          name: "description",
          content:
            "An overview of GDPR compliance, how personal data is handled, and secured at Facilio."
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "GDPR at Facilio"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "An overview of GDPR compliance, how personal data is handled, and secured at Facilio."
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content:
            "https://s3-us-west-2.amazonaws.com/ws-facilio.com/assets/images/og-title.jpg"
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/gdpr-compliance"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "GDPR at Facilio"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "An overview of GDPR compliance, how personal data is handled, and secured at Facilio."
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content:
            "https://s3-us-west-2.amazonaws.com/ws-facilio.com/assets/images/og-title.jpg"
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/gdpr-compliance"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/gdpr-compliance"
        }
      ],
      script: [{ src: "../js/includes.js" }]
    };
  }
};
</script>

<style>
.privacy-hero-container h1 {
  font-size: 40px;
}
.legal-content-heading-small {
  max-width: 40rem;
  margin: 0;
  margin-bottom: 1rem;
  color: #5b5e6d;
  font-weight: 700;
  font-family: "ProximaNovaSemiBold";
  font-size: 16px;
}
@media only screen and (max-width: 500px) {
  .privacy-hero-container h1 {
    font-size: 26px;
}
.thankyou-txt-desc {
    font-size: 17px;
    max-width: 370px;
    margin:0 auto;
}
}
</style>
