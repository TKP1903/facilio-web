<template>
  <div class="productPage btn-shade">
    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>

      <section>
        <div class="privacy-hero-container">
          <h1>Data Security and Compliance at Facilio</h1>
          <span id="dataSecurity"></span>
        </div>
      </section>
      <section>
        <div class="legal-main">
          <div class="privacy-content-container">
            <div class="two-thirds">
              <div class="legal-sidebar" style="width:330px;">
                <nav id="seo-sidebar" class="hidden-xs">
                  <h3>Table of Contents</h3>
                  <ul class="nav-list-ul">
                    <li class="nav-list-item">
                      <a
                        class="nav-list-alink"
                        href="#dataSecurity"
                      >What is Data Security and why is it important?</a>
                    </li>
                    <li class="nav-list-item">
                      <a class="nav-list-alink" href="#ensureSecurity">How we ensure data security?</a>
                    </li>
                    <li class="nav-list-item">
                      <a class="nav-list-alink" href="#FacilioCompliance">
                        Facilio Compliances and Security Control Procedures
                        :
                      </a>
                      <ul style="margin-top:20px;">
                        <li class="nav-list-item">
                          <a
                            class="nav-list-alink"
                            href="#logicalAccess"
                          >Logical Access Control and Host Security</a>
                        </li>
                        <li class="nav-list-item">
                          <a
                            class="nav-list-alink"
                            href="#Restrictions"
                          >Restriction over Administrative Operations</a>
                        </li>
                        <li class="nav-list-item">
                          <a
                            class="nav-list-alink"
                            href="#application"
                          >Application Security ,Backup and Monitoring</a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-list-item">
                      <a class="nav-list-alink" href="#disclosure">Disclosure</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="legal-content">
                <p class="legal-content-heading">The Facilio Promise on Data Security</p>
                <p class="legal-content-para">
                  Security of Facilio customers' data is our primary concern. By
                  sticking to our promise, we take protective measures that
                  prevent unauthorized access to our databases, computers, and
                  servers.
                </p>
                <p class="legal-content-para">
                  All information you store in Facilio remains yours, and we are
                  committed to ensuring that your data is not accessed, shared
                  to, or viewed by anyone without permission to do so.
                </p>

                <p
                  class="legal-content-heading"
                  id="dataSecurity"
                >What is Data Security and why is it important?</p>
                <p class="legal-content-para">
                  Data security, in essence, means protecting your digital data,
                  such as data stored in databases/data centers from
                  accidental/intentional destruction or modification. It also
                  includes unwanted data access by unauthorized users and even
                  breach of data. In today's modern world where commercial
                  buildings and large enterprises are managed via internet
                  <span
                    id="ensureSecurity"
                  ></span>
                  and cloud-based services, it's essential to understand where
                  and how data is stored, how data moves across the network and
                  is used to provide better operational experience.
                </p>
                <p class="legal-content-heading">How do we ensure your data remains safe?</p>
                <p class="legal-content-para">
                  Facilio as an organization is committed to data security of
                  all its customers by taking protective digital privacy
                  measures that prevent unauthorized access to our databases,
                  computers, and servers .The discretion to provide or not
                  provide private information solely rests on our end users and
                  Facilio does not use any of the entered information anywhere
                  else.
                </p>
                <p class="legal-content-para">
                  We do not collect any sensitive information such as credit
                  card and other payment details anywhere on our website. None
                  of the data that we collect from you is stored locally or
                  modified in any way.
                </p>
                <p class="legal-content-para">
                  All Facilio services are hosted in Amazon Web Services Cloud
                  facilities and infrastructure and no Facilio employee is
                  authorised any physical access to the AWS Cloud. To know more
                  about AWS security features, please
                  <a
                    href="https://aws.amazon.com/security/"
                  >check here.</a>
                </p>
                <p class="legal-content-para">
                  Cloud Security is the highest priority for Amazon AWS services
                  and Facilio leverages the same standards by placing all our
                  production databases and servers in AWS thereby meeting core
                  security and compliance requirements which include data
                  locality, protection, and confidentiality. These stringent
                  measures provide significant protection of data from
                  traditional
                  <span
                    id="logicalAccess"
                  ></span> security issues such as DoS
                  attacks and Data sniffing . On top of these measures, we have
                  in place a web
                  <span
                    id="FacilioCompliance"
                  ></span> application security
                  filter that prevents Cross-Site Scripting (XSS), Cross-Site
                  Request Forgery (CSRF), SQL Injection and HTML Injection.
                </p>

                <p class="legal-content-heading">Our Compliances and Security Control Procedures</p>
                <p class="legal-content-heading-small">Logical Access Control and Host Security</p>
                <p class="legal-content-para">
                  Fundamentally, we have mandated two Factor Authentication and
                  Secure keys for all Facilio employees to even login to the AWS
                  console,
                  <span
                    id="Restrictions"
                  ></span> thereby preventing any kind of
                  unauthorized logical access or security breach of the Facilio
                  services hosted in AWS.
                </p>

                <p class="legal-content-para">
                  We have configured All Services hosted on AWS to be accessible
                  only from Static Office IP addresses , which prevents anyone
                  outside Facilio premises attempting to logically hack our
                  databases or Production servers.
                </p>
                <p class="legal-content-heading-small">Restriction over Administrative Operations</p>
                <p class="legal-content-para">
                  Within Facilio, we provide administrative privileges only to
                  select employees for AWS configurations, databases, servers,
                  and services that are hosted on AWS. Additionally, role based
                  AWS access configuration ensures that any employee can gain
                  operational access only to the extent of their authorization.
                </p>
                <p class="legal-content-para">
                  All administrative operations performed on the hosted services
                  are documented, reviewed, and tested
                  <span
                    id="application"
                  ></span> on stage before applying on
                  production. All administrative actions performed are also
                  logged automatically.
                </p>
                <p class="legal-content-para">
                  Encryption keys shared secrets and master encryption keys
                  shall be accessible only to authorized system administrators.
                </p>
                <p class="legal-content-heading-small">Application Security ,Backup and Monitoring</p>
                <ul>
                  <li>
                    <p class="legal-content-para">
                      Facilio applications are run on HTTPs and we use industry
                      standard encryption for data traversing from and to our
                      application servers.
                    </p>
                  </li>
                  <li>
                    <p class="legal-content-para">
                      Regular VAPT tests are conducted on AWS services and
                      required steps are taken to mitigate the vulnerabilities
                      and are updated with the latest service packs and the
                      required security patches.
                    </p>
                  </li>
                  <li>
                    <p class="legal-content-para">
                   Regular VAPT tests are conducted on the Facilio Application and the vulnerabilities
                    are prioritized and prompt action is taken.
                    </p>
                  </li>
                  <li>
                    <p class="legal-content-para">
                      All sensitive fields in the testing and development
                      databases are masked to prevent data leak and other
                      sensitive information are stored in the database in
                      encrypted format.
                    </p>
                  </li>
                  <li>
                    <p class="legal-content-para">
                      We host Facilio file store, Queue data and Production SQL
                      databases in AWS, which comply with security standards
                      elaborated in the earlier sections with need based Secured
                      Key management .
                    </p>
                  </li>
                  <li>
                    <p class="legal-content-para">
                      All requests patterns to the production servers and
                      databases are logged, which helps in easy in quick
                      detection of anomalies or attacks if any.
                    </p>
                  </li>
                  <li>
                    <p class="legal-content-para">
                      All Data in production databases are backed up every 24hours and a 7 day  backup is maintained.
                    </p>
                  </li>
                          <li>
                    <p class="legal-content-para">
                    All operations on the AWS infra are monitored and tracked using AWS guard too.
                    </p>
                  </li>
                          <li>
                    <p class="legal-content-para">
                   All operations on the application is montitored for any malicious activity or security incident via an internal logging tool hosted in AWS.
                    </p>
                  </li>
                  <li>
                    <p class="legal-content-para">
                      All passwords of operating systems, applications,
                      databases, network and security devices etc. are stored in
                      hashed format (i.e. one-way encryption)
                    </p>
                  </li>
                  <li>
                    <p class="legal-content-para">
                      Proprietary or nonstandard encryption algorithms are
                      reviewed and approved by the Facilio IT security.
                    </p>
                  </li>
                  <li>
                    <p class="legal-content-para">
                      Key management processes shall be established, and control
                      procedures shall be implemented for:
                    </p>
                    <ol>
                      <li>
                        <p class="legal-content-para" id="disclosure">
                          Distributing, storing, archiving, changing, and
                          updating keys.
                        </p>
                      </li>
                      <li>
                        <p class="legal-content-para">
                          Recovering, revoking, destroying, and dealing with
                          compromised keys.
                        </p>
                      </li>
                      <li>
                        <p class="legal-content-para">Logging all transactions associated with keys.</p>
                      </li>
                    </ol>
                  </li>
                </ul>
                <p class="legal-content-heading">Disclosure</p>
                <p class="legal-content-para">
                  We are continuously working towards making our systems
                  foolproof and achieving SOC2 security compliance standards. 
                  Facilio will be obliged to inform its customers when there is 
                  a data breach or a security attack that causes a outage of the application.
                  If you wish to report a security concern, please email to
                  security@facilio.com. Facilio will address the security questions 
                  and issues with an expected response time of 2 working days.
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
  mounted: function() {
    window.onscroll = function() {
      if (window.XMLHttpRequest) {
        var position = window.pageYOffset;
        var guideViewTop = $(window).scrollTop();
        var guideViewBottom = guideViewTop + $(window).height();
        var elemTop = $("#fc-footer").offset().top;
        if (position > 300 && !(guideViewBottom >= elemTop)) {
          $("#seo-sidebar").css({
            position: "fixed",
            top: "0",
            height: "auto",
            "margin-top": "100px",
            "max-width": "300px",
            width: "100%"
          });
        } else {
          if (guideViewBottom >= elemTop) {
            $("#seo-sidebar").css({
              top: 0 - (guideViewBottom - elemTop)
            }); // scroll the #main div relative to the footer
          } else {
            $("#seo-sidebar").css({
              position: "relative",
              top: "auto",
              "margin-top": "0px",
              "max-width": "300px",
              width: "100%"
            });
          }
        }
      }
    };
  },
  head() {
    return {
      title: "Security| Facilio",
      meta: [
        {
          hid: "decription",
          name: "description",
          content:
            "Security is always a top priority when you're dealing with business data. Facilio uses physical, procedural, and technical safeguards to preserve the integrity and security of your information."
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Facilio’s commitment to data Security"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Security is always a top priority when you're dealing with business data. Facilio uses physical, procedural, and technical safeguards to preserve the integrity and security of your information."
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
          content: "https://facilio.com/security"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Facilio’s commitment to data Security"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Security is always a top priority when you're dealing with business data. Facilio uses physical, procedural, and technical safeguards to preserve the integrity and security of your information."
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
          content: "https://facilio.com/security"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/security"
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
