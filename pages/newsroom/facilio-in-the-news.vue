<template>
  <div class="productPage btn-shade">
    <div id="productPage"></div>
    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <!--End platform-overview-hero-sec-->
      <div class="mask"></div>

      <div class="news-hero">
        <div class="container">
          <div
            class="col-xs-12 col-sm-12 col-md-12 col-lg-6 pL0 press-hero-left"
          >
            <h1>Facilio Newsroom</h1>
            <p class="partner-description">
              The latest and best stories from the world of real-time facilities
              optimisation.
            </p>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <img
              src="/images/newsroom/news-room.svg"
              alt="Facilio in the news"
              title="Facilio in the news"
            />
          </div>
        </div>
      </div>
    </div>
    <section>
      <div class="press-tab-section">
        <ul>
          <li>
            <!-- <a href="/print">PRINT</a> -->
            <nuxt-link to="/newsroom/print">PRINT</nuxt-link>
          </li>
          <li class="active-tab-news">
            <!-- <a href="/facilio-in-the-news" class="tab-active-news">IN THE NEWS</a> -->
            <nuxt-link to="#">IN THE NEWS</nuxt-link>
          </li>
          <li>
            <!-- <a href="/press-release">PRESS RELEASE</a> -->
            <nuxt-link to="/newsroom/press-release">PRESS RELEASE</nuxt-link>
          </li>
        </ul>
      </div>
    </section>

    <section>
      <div class="news-section mT50 mobile-pad" id="newslist">
        <News
          v-for="(item, index) in news"
          v-bind:key="index"
          v-bind:linkLogo="item.linkLogo"
          v-bind:logo="item.logo"
          v-bind:linkNews="item.linkNews"
          v-bind:description="item.description"
          v-bind:timestamp="item.timestamp"
        />
      </div>
      <Pagination />
    </section>
    <Footer />
  </div>
</template>

<script>
import News from "../../components/News";
import Pagination from "../../components/Pagination";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
export default {
  data() {
    return {
      news: [
        {
          linkLogo: "https://www.cbnme.com",
          logo: "construction-business.png",
          linkNews:
            "https://www.cbnme.com/news/facilio-wins-software-solutions-provider-of-the-year-at-the-innovation-in-fm-awards-2021/",
          description:
            "Facilio wins Software Solutions Provider of the Year at the Innovation in FM Awards 2021",
          timestamp: "June 2021",
        },
        {
          linkLogo: "https://www.constructionweekonline.com",
          logo: "contruction-week-online.png",
          linkNews:
            "https://www.constructionweekonline.com/business/272528-in-smart-building-projects-success-is-being-defined-by-new-integration-models",
          description:
            "In smart building projects, success is being defined by new integration models",
          timestamp: "June 2021",
        },
        {
          linkLogo: "https://energy-utilities.com",
          logo: "energy-utilities.png",
          linkNews:
            "https://energy-utilities.com/middle-east-to-invest-heavily-in-smart-grids-over-news112528.html",
          description:
            "Middle East to invest heavily in smart grids over next decade",
          timestamp: "June 2021",
        },
        {
          linkLogo: "https://energy-utilities.com",
          logo: "energy-utilities.png",
          linkNews:
            "https://energy-utilities.com/digitalisation-to-drive-efficiency-and-news111368.html",
          description:
            "Digitalisation to drive efficiency and sustainability efforts across Middle East",
          timestamp: "May 2021",
        },
        {
          linkLogo: "https://www.cm-today.com/",
          logo: "construction-business.png",
          linkNews: "https://online.flippingbook.com/view/811598426/18/",
          description: "Balancing the scales of Diversity",
          timestamp: "April 2021",
        },
        {
          linkLogo: "https://www.cm-today.com/",
          logo: "construction-business.png",
          linkNews:
            "https://www.cm-today.com/top-stories/proptech/there-is-nothing-more-valuable-for-a-professional-than-mentorship",
          description:
            "There is nothing more valuable for a professional than mentorship",
          timestamp: "April 2021",
        },
        {
          linkLogo: "https://www.cbnme.com",
          logo: "construction-business.png",
          linkNews:
            "https://www.cbnme.com/magazines/construction-business-news-me-march-2021/",
          description:
            "UAE’s FM Power 30 List by Construction Business News Middle East",
          timestamp: "March 2021",
        },
        {
          linkLogo: "https://www.cityscape-intelligence.com",
          logo: "city.png",
          linkNews:
            "https://www.cityscape-intelligence.com/proptech/four-expert-predictions-how-proptech-will-change-industry-2021",
          description:
            "Four expert predictions on how PropTech will change the industry in 2021",
          timestamp: "March 2021",
        },
        {
          linkLogo: "https://content.yudu.com",
          logo: "tomfm.jpeg",
          linkNews:
            "https://content.yudu.com/web/1jybr/0A1vxp9/TFMFeb2021/html/index.html?page=56&origin=reader",
          description: "Reimagining Operations for 2021",
          timestamp: "February 2021",
        },
        {
          linkLogo: "http://climatecontrolme.com",
          logo: "climate-control3.png",
          linkNews:
            "http://climatecontrolme.com/2021/02/cre-operations-reliant-on-securing-hvac-systems-against-covid-19/",
          description: "The digital revolution in the residential market",
          timestamp: "February 2021",
        },
        {
          linkLogo: "https://www.cm-today.com",
          logo: "cmt_logo.png",
          linkNews:
            "https://www.cm-today.com/top-stories/proptech/the-digital-revolution-in-the-residential-market",
          description:
            "CRE operations reliant on securing HVAC systems against COVID-19",
          timestamp: "February 2021",
        },
        {
          linkLogo: "https://www.gulftoday.ae",
          logo: "gulf-today-beta.png",
          linkNews:
            "https://www.gulftoday.ae/business/2021/01/28/uae--emerges-as-a-global-leader-in--next-gen-real-estate-technologies",
          description:
            "UAE emerges as a global leader in next-gen real estate technologies",
          timestamp: "January 2021",
        },
        {
          linkLogo: "https://www.cbnme.com",
          logo: "construction-business.png",
          linkNews:
            "https://www.cbnme.com/news/facilio-eu-based-evogy-partner-to-help-properties-enhance-operating-efficiency-boost-portfolio-performance/",
          description:
            "Facilio & EU-based Evogy partner to help properties enhance operating efficiency & boost portfolio performance",
          timestamp: "January 2021",
        },
        {
          linkLogo: "https://brec.ro",
          logo: "propmodo.png",
          linkNews:
            "https://brec.ro/facilio-evogy-partner-to-improve-efficiency-for-real-estate-portfolios/",
          description:
            "Facilio & Evogy Partner to Improve Efficiency for Real Estate Portfolios",
          timestamp: "January 2021",
        },
        {
          linkLogo: "https://www.wfmj.com",
          logo: "wfmj.png",
          linkNews:
            "https://www.wfmj.com/story/43241053/facilio-eu-based-evogy-partner-to-help-properties-enhance-operating-efficiency-boost-portfolio-performance",
          description:
            "Facilio & EU-based Evogy partner to help properties enhance operating efficiency & boost portfolio performance",
          timestamp: "January 2021",
        },
        {
          linkLogo: "https://www.propmodo.com",
          logo: "propmodo.png",
          linkNews:
            "https://www.propmodo.com/whats-stopping-innovation-in-buildings-the-overlay-approach-to-building-operations-and-managementgs/",
          description: "What’s Stopping Innovation in Buildings?",
          timestamp: "January 2021",
        },
        {
          linkLogo: "https://www.propmodo.com",
          logo: "propmodo.png",
          linkNews:
            "https://www.propmodo.com/whats-stopping-innovation-in-buildings-the-overlay-approach-to-building-operations-and-managementgs/",
          description: "What’s Stopping Innovation in Buildings?",
          timestamp: "January 2021",
        },
        {
          linkLogo: "https://www.caba.org",
          logo: "caba.png",
          linkNews:
            "https://www.caba.org/why-you-need-to-extract-more-value-from-your-building-data-and-analytics/",
          description:
            "Why you need to extract more value from your building data and analytics",
          timestamp: "January 2021",
        },
        {
          linkLogo: "https://www.automatedbuildings.com/",
          logo: "automated-buildings.jpg",
          linkNews:
            "https://www.automatedbuildings.com/news/jan21/articles/Facilio/201215011001Facilio.html",
          description:
            "Rethinking BAS software (that was built for a world that no longer exists)",
          timestamp: "January 2021",
        },
        {
          linkLogo: "https://www.khaleejtimes.com",
          logo: "khaleej-times2.png",
          linkNews:
            "https://www.khaleejtimes.com/business/uae-companies-on-board-with-sustainability-drive",
          description: "UAE companies on board with sustainability drive",
          timestamp: "December 2020",
        },
        {
          linkLogo: "https://www.propmodo.com",
          logo: "propmodo.png",
          linkNews:
            "https://www.propmodo.com/brookfields-new-icd-tower-in-dubai-is-a-marvel-of-building-and-software-design/",
          description:
            "Brookfield’s New ICD Tower in Dubai Is a Marvel of Building and Software Design",
          timestamp: "December 2020",
        },
        {
          linkLogo: "https://www.cm-today.com/",
          logo: "cmt_logo.png",
          linkNews: "https://www.cm-today.com/facilio-inc",
          description:
            "Facilio’s greatest strength is the game changing vision and outstanding execution they bring, to transform the way properties are operated, maintained, and managed.",
          timestamp: "December 2020",
        },
        {
          linkLogo: "https://www.constructionweekonline.com",
          logo: "contruction-week-online.png",
          linkNews:
            "https://www.constructionweekonline.com/business/269555-column-facilio-reflects-on-2020-and-how-to-prepare-for-the-future",
          description:
            "Facilio reflects on 2020 and how to prepare for the future",
          timestamp: "December 2020",
        },
        {
          linkLogo: "https://www.cm-today.com",
          logo: "cmt_logo.png",
          linkNews:
            "https://www.cm-today.com/trends/ifm/how-fms-can-transition-towards-agile-customer-focused-operations",
          description:
            "How FMs can transition towards agile, customer-focused operations",
          timestamp: "December 2020",
        },
        {
          linkLogo: "https://www.constructionweekonline.com",
          logo: "contruction-week-online.png",
          linkNews:
            "https://www.constructionweekonline.com/business/269551-moro-hub-partners-with-facilio-to-boost-uaes-energy-saving-strategies",
          description:
            "Moro Hub partners with Facilio to boost UAE's energy-saving strategies",
          timestamp: "December 2020",
        },
        {
          linkLogo: "https://www.forbesmiddleeast.com",
          logo: "forbes.png",
          linkNews:
            "https://www.forbesmiddleeast.com/industry/energy/moro-hub-and-facilio-to-launch-energy-management-and-monitoring-services-in-dubai",
          description:
            "Progressive and tech driven FMs are poised to surpass industry incumbents",
          timestamp: "December 2020",
        },
        {
          linkLogo: "https://www.fm-middleeast.com",
          logo: "facilities-management2.png",
          linkNews:
            "https://www.fm-middleeast.com/people/77477-comment-progressive-and-tech-driven-fms-are-poised-to-surpass-industry-incumbents",
          description:
            "Progressive and tech driven FMs are poised to surpass industry incumbents",
          timestamp: "December 2020",
        },
        {
          linkLogo: "https://www.fm-middleeast.com",
          logo: "facilities-management2.png",
          linkNews:
            "https://www.fm-middleeast.com/suppliers/hvacmep/77289-facilio-and-belimo-partner-to-advance-iot-driven-connected-building-environments",
          description:
            "Facilio and Belimo partner to advance IoT-driven connected building environments",
          timestamp: "November 2020",
        },
        {
          linkLogo: "http://climatecontrolme.com",
          logo: "climate-control3.png",
          linkNews:
            "http://climatecontrolme.com/2020/11/facilio-belimo-announce-initiative-to-advance-iot-driven-connected-built-environment/",
          description:
            "Facilio, Belimo announce initiative to advance IoT-driven connected built-environment",
          timestamp: "November 2020",
        },
        {
          linkLogo: "https://www.cm-today.com",
          logo: "cmt_logo.png",
          linkNews:
            "https://www.cm-today.com/news/proptech/facilio-and-belimo-announce-a-strategic-collaboration",
          description:
            "Facilio, Belimo announce initiative to advance IoT-driven connected built-environment",
          timestamp: "November 2020",
        },
        {
          linkLogo: "http://ipt.net/",
          logo: "itp.png",
          linkNews:
            "https://www.itp.net/business/94595-uae-fm-service-providers-turn-to-tech-to-deliver-seamless-customer-experiences",
          description:
            "UAE FM service providers turn to tech to deliver seamless customer experiences",
          timestamp: "November 2020",
        },
        {
          linkLogo: "https://www.cbnme.com",
          logo: "construction-business.png",
          linkNews:
            "https://www.cbnme.com/news/uaes-fm-service-providers-harness-technology-to-deliver-seamless-customer-experiences-amid-pandemic/",
          description:
            "UAE’s FM service providers harness technology to deliver seamless customer experiences amid pandemic",
          timestamp: "November 2020",
        },
        {
          linkLogo: "https://gulfnews.com",
          logo: "gulfnews.png",
          linkNews:
            "https://gulfnews.com/business/company-releases/uae-fm-service-providers-harness-technology-to-deliver-seamless-customer-experiences-amid-pandemic-1.1605075424536",
          description:
            "UAE’s FM service providers harness technology to deliver seamless customer experiences amid pandemic",
          timestamp: "November 2020",
        },
        {
          linkLogo: "https://www.khaleejtimes.com",
          logo: "khaleej-times2.png",
          linkNews:
            "https://www.khaleejtimes.com/business-and-technology-review/facilio-inc-operational-intelligence",
          description: "Facilio Inc.: Operational Intelligence",
          timestamp: "October 2020",
        },
        {
          linkLogo: "https://www.cm-today.com",
          logo: "cmt_logo.png",
          linkNews:
            "https://www.cm-today.com/icd-brookfield-place-sets-new-benchmarks-using-ai",
          description: "ICD Brookfield Place sets new benchmarks using AI",
          timestamp: "October 2020",
        },
        {
          linkLogo: "https://www.khaleejtimes.com",
          logo: "khaleej-times2.png",
          linkNews:
            "https://www.khaleejtimes.com/supplements/technology-vital-in-new-normal",
          description: "Technology vital in new normal",
          timestamp: "October 2020",
        },
        {
          linkLogo: "https://www.khaleejtimes.com",
          logo: "khaleej-times2.png",
          linkNews:
            "https://www.khaleejtimes.com/kt-network/facilio,-icdbp-to-deliver-a-data-driven,-sustainable-cloud-environment",
          description:
            "Facilio, ICDBP to deliver a data-driven, sustainable cloud environment",
          timestamp: "September 2020",
        },
        {
          linkLogo: "https://www.cm-today.com",
          logo: "cmt_logo.png",
          linkNews:
            "https://www.cm-today.com/setting-new-standards-with-data-driven-building-operations",
          description:
            "Setting new standards with data-driven building operations",
          timestamp: "September 2020",
        },
        {
          linkLogo: "https://www.fm-middleeast.com",
          logo: "facilities-management2.png",
          linkNews:
            "https://www.fm-middleeast.com/suppliers/technology/76956-q-a-interview-with-facilio-ceo-and-quality-group-operations-manager",
          description:
            "Q & A: Interview with Facilio, CEO, and Quality Group, operations manager",
          timestamp: "September 2020",
        },
        {
          linkLogo: "https://www.khaleejtimes.com",
          logo: "khaleej-times2.png",
          linkNews:
            "https://www.khaleejtimes.com/business/local/fm-companies-adapting-to-new-normal-as-demand-surges",
          description: "FM firms adapt to new normal as demand surges",
          timestamp: "September 2020",
        },
        {
          linkLogo: "https://www.hsradar.com",
          logo: "hs-radar.png",
          linkNews:
            "https://www.hsradar.com/hs-posts/facilios-prabhu-on-how-to-take-buildings-from-smart-to-smarter",
          description:
            "Facilio’s Prabhu On How To Take Buildings From Smart To Smarter",
          timestamp: "August 2020",
        },
        {
          linkLogo: "https://www.fm-middleeast.com",
          logo: "facilities-management2.png",
          linkNews:
            "https://www.fm-middleeast.com/business/76856-rethinking-customer-experience-and-how-fms-can-succeed-in-the-new-reality",
          description:
            "Rethinking customer experience and how FMs can succeed in the new reality",
          timestamp: "July 2020",
        },
        {
          linkLogo: "https://www.mepmiddleeast.com",
          logo: "mepme.png",
          linkNews:
            "https://www.mepmiddleeast.com/business/75572-changing-regulations-and-the-need-for-a-new-perspective-to-operating-hvac-systems",
          description:
            "Changing regulations and the need for a new perspective to operationg HVAC systems",
          timestamp: "July 2020",
        },
        {
          linkLogo: "https://www.constructionweekonline.com",
          logo: "contruction-week-online.png",
          linkNews:
            "https://www.constructionweekonline.com/business/266432-tech-a-non-negotiable-pillar-in-post-pandemic-facility-operations",
          description:
            "Tech: A non-negotiable pillar in post-pandemic operations",
          timestamp: "July 2020",
        },
        {
          linkLogo: "https://www.cm-today.com",
          logo: "cmt_logo.png",
          linkNews:
            "https://www.cm-today.com/news/proptech/facilio-helps-uae-s-quality-group-deliver-a-frictionless-customer-experience",
          description:
            "Facilio helps UAE’s Quality Group deliver a frictionless customer experience",
          timestamp: "July 2020",
        },
        {
          linkLogo: "https://soundcloud.com",
          logo: "sound-cloud.jpeg",
          linkNews:
            "https://soundcloud.com/breakfastbytes/emerging-trends-technology-in-service-delivery",
          description: "Emerging Trends: Technology In Service Delivery",
          timestamp: "July 2020",
        },
        {
          linkLogo: "https://www.ccr-mag.com",
          logo: "commercial-renovation.jpg",
          linkNews:
            "https://www.ccr-mag.com/facilities-managements-role-in-securing-public-spaces/",
          description: "Facilities management’s role in securing public spaces",
          timestamp: "July 2020",
        },
        {
          linkLogo: "https://www.propmodo.com",
          logo: "propmodo.png",
          linkNews:
            "https://www.propmodo.com/what-property-owners-and-operators-can-learn-from-telecom/",
          description:
            "What Property Owners and Operators Can Learn From Telecom",
          timestamp: "June 2020",
        },
        {
          linkLogo: "https://www.sme10x.com",
          logo: "smeicx.png",
          linkNews:
            "https://www.sme10x.com/10x-industry/reshaping-property-management-through-digital-enhancements",
          description:
            "Reshaping property management through digital enhancements",
          timestamp: "June 2020",
        },
        {
          linkLogo: "https://www.gulftoday.ae",
          logo: "gulf-today-beta.png",
          linkNews:
            "https://www.gulftoday.ae/business/2020/06/05/uae-realty-turns-to-tech-solutions-to-address-post-pandemic-needs",
          description:
            "UAE realty turns to tech solutions to address post-pandemic needs",
          timestamp: "June 2020",
        },
        {
          linkLogo: "http://climatecontrolme.com",
          logo: "climate-control3.png",
          linkNews: "http://climatecontrolme.com/2020/05/28502/",
          description: "Putting a Price on Health ",
          timestamp: "May 2020",
        },
        {
          linkLogo: "http://climatecontrolme.com",
          logo: "climate-control3.png",
          linkNews:
            "http://climatecontrolme.com/2020/04/remote-hvac-om-in-the-time-of-covid/",
          description: "Remote HVAC O&M in the time of COVID",
          timestamp: "May 2020",
        },
        {
          linkLogo: "https://www.propmodo.com/",
          logo: "propmodo.png",
          linkNews:
            "https://www.propmodo.com/is-your-building-management-technology-a-part-of-the-solution-or-the-problem/",
          description:
            "Is Your Building Management Technology A Part of the Solution or the Problem?",
          timestamp: "May 2020",
        },
        {
          linkLogo: "https://www.fm-middleeast.com",
          logo: "fm-mag.jpg",
          linkNews:
            "https://www.fm-middleeast.com/people/76508-comment-data-driven-revolution",
          description: "Data driven revolution",
          timestamp: "April 2020",
        },
        {
          linkLogo: "https://www.fm-middleeast.com",
          logo: "fm-mag.jpg",
          linkNews:
            "https://www.fm-middleeast.com/people/76453-comment-the-facility-managers-role-in-fight-against-covid-19-contagion",
          description:
            "The facility manager's role in fight against COVID-19 contagion",
          timestamp: "April 2020",
        },
        {
          linkLogo: "https://controltrends.org",
          logo: "control-trends.png",
          linkNews:
            "https://controltrends.org/controltalk-now-2/03/episode-355-controltalk-now-features-facilios-co-founder-and-ceo-prabhu-ramachandran-and-passivelogics-ceo-troy-harvey/",
          description:
            "Episode 355 ControlTalk Now features Facilio’s Co-founder",
          timestamp: "March 2020",
        },
        {
          linkLogo: "https://www.fm-middleeast.com",
          logo: "fm-mag.jpg",
          linkNews:
            "https://www.fm-middleeast.com/suppliers/technology/76642-facilio-launches-new-remote-operations-toolkit-to-help-real-estate-owners-safely-restart-operations",
          description: "Facilio launches new remote operations toolkit",
          timestamp: "March 2020",
        },
        {
          linkLogo: "https://www.fm-middleeast.com",
          logo: "fm-mag.jpg",
          linkNews:
            "https://www.fm-middleeast.com/suppliers/technology/76273-top-innovations-for-cre-business",
          description: "Top innovations for CRE business",
          timestamp: "March 2020",
        },
        {
          linkLogo: "https://www.cm-today.com",
          logo: "cmt_logo.png",
          linkNews:
            "https://www.cm-today.com/expert-talk/proptech/digitising-the-sustainability-services-of-escos",
          description: "Digitising the sustainability services of ESCOs",
          timestamp: "March 2020",
        },
        {
          linkLogo: "https://www.khaleejtimes.com",
          logo: "khaleej-times2.png",
          linkNews:
            "https://www.khaleejtimes.com/commercial-realty-sector-seen-as-huge-contributor-to-uaes-economic-growth",
          description:
            "Commercial realty sector seen as huge contributor to UAE's economic growth",
          timestamp: "February 2020",
        },
        {
          linkLogo: "https://www.cbnme.com",
          logo: "construction-business.png",
          linkNews:
            "https://www.cbnme.com/news/facilio-releases-cre3-0-report-on-impact-of-data-driven-building-operations-in-2020/",
          description: "Facilio releases CRE3.0 report",
          timestamp: "February 2020",
        },
        {
          linkLogo: "https://www.gulftoday.ae",
          logo: "gulf-today-beta.png",
          linkNews:
            "https://www.gulftoday.ae/business/2020/02/14/expo-2020-propels-need-for-data-driven-operations",
          description: "Expo 2020 propels need for data-driven operations",
          timestamp: "February 2020",
        },
        {
          linkLogo: "http://climatecontrolme.com",
          logo: "climate-control2.png",
          linkNews:
            "http://climatecontrolme.com/2020/02/breathing-new-life-into-old-buidings/",
          description: "Breathing new life into old buidings",
          timestamp: "February 2020",
        },
        {
          linkLogo: "https://controltrends.org/",
          logo: "control-trends.png",
          linkNews:
            "https://controltrends.org/building-automation-and-integration/01/facilios-ceo-prabhu-ramachandran-on-cre-3-0-a-data-driven-revolution-is-transforming-building-operations/",
          description:
            "Connected buildings are putting the control back into the hands of CRE owners",
          timestamp: "January 2020",
        },
        {
          linkLogo: "https://controltrends.org/",
          logo: "control-trends.png",
          linkNews:
            "https://controltrends.org/building-automation-and-integration/01/facilios-ceo-prabhu-ramachandran-on-cre-3-0-a-data-driven-revolution-is-transforming-building-operations/",
          description:
            "Data-Driven Revolution is Transforming Building Operations",
          timestamp: "January 2020",
        },
        {
          linkLogo: "https://www.constructionweekonline.com/",
          logo: "contruction-week-online.png",
          linkNews:
            "https://www.constructionweekonline.com/products-and-services/261919-facilio-ceo-connected-buildings-are-the-future-and-the-future-is-now",
          description: "Connected buildings are the future",
          timestamp: "January 2020",
        },
        {
          linkLogo: "https://cm-today.com/",
          logo: "cmt_logo.png",
          linkNews:
            "https://cm-today.com/news/technology/3-ways-in-which-technology-is-changing-community-management",
          description:
            "3 ways in which Technology is changing Community Management",
          timestamp: "January 2020",
        },
        {
          linkLogo: "https://www.forbes.com/",
          logo: "forbes.png",
          linkNews:
            "https://www.forbes.com/sites/forbestechcouncil/2020/01/10/a-five-step-guide-to-data-driven-property-and-asset-management/#7fd7ddc31aa8",
          description:
            "A Five-Step Guide To Data-Driven Property And Asset Management",
          timestamp: "January 2020",
        },
        {
          linkLogo: "http://www.automatedbuildings.com/",
          logo: "automated-buildings.jpg",
          linkNews:
            "http://www.automatedbuildings.com/news/jan20/articles/facilio/1912170330facilio.html",
          description: "Crafting a Data-Defined Future for New York",
          timestamp: "January 2020",
        },
        {
          linkLogo: "https://www.fm-middleeast.com/",
          logo: "fm-mag.jpg",
          linkNews:
            "https://www.fm-middleeast.com/suppliers/75698-top-fm-suppliers-2019?utm_source=whatsapp&utm_medium=Social-Share",
          description: "Top FM Suppliers 2019",
          timestamp: "December 2019",
        },
        {
          linkLogo: "https://www.cretech.com",
          logo: "cretech.svg",
          linkNews:
            "https://www.cretech.com/directory/company/cretech/press-release/top-5-advantages-a-unified-om-platform-can-unlock-for-your-cre-business-model",
          description:
            "Top 5 advantages a unified O&M platform can unlock for your CRE business model",
          timestamp: "December 2019",
        },
        {
          linkLogo: "https://www.industrialindia.in",
          logo: "industrial-india.svg",
          linkNews:
            "https://www.industrialindia.in/decoding-the-digital-10x-vision/",
          description: "Decoding the Digital 10X Vision",
          timestamp: "November 2019",
        },
        {
          linkLogo: "https://fmindustry.com",
          logo: "fm-industry.png",
          linkNews:
            "https://www.fmindustry.com/en/2019/news/47828/Disrupting-Building-Operations-and-Maintenance-technology-challengers-disruptive-facilities-management-building-operations-Facilio-Operation--Maintenance-Internet-of-Things-(IoT)-EMEA-Americas-Supplier-News.htm",
          description: "Disrupting Building Operations and Maintenance",
          timestamp: "November 2019",
        },
        {
          linkLogo: "https://www.cretech.com/",
          logo: "cretech.svg",
          linkNews:
            "https://www.cretech.com/directory/company/cretech/press-release/commercial-real-estate-and-the-changing-dynamics-of-customer-experience",
          description:
            "Commercial real estate and the changing dynamics of customer experience",
          timestamp: "November 2019",
        },
        {
          linkLogo: "https://www.ameinfo.com/",
          logo: "ame-info.png",
          linkNews:
            "https://www.ameinfo.com/industry/energy/smart-living-as-a-service-coming-to-the-uae",
          description:
            "Developing the 'Smart Living as a Service' model in the UAE",
          timestamp: "November 2019",
        },
        {
          linkLogo: "https://www.forbesmiddleeast.com/",
          logo: "forbes.png",
          linkNews:
            "https://www.forbesmiddleeast.com/industry/real-estate/the-survival-toolkit-dubai-buildings-need-to-be-future-ready",
          description:
            "The Survival Toolkit Dubai Buildings Need To Be Future Ready",
          timestamp: "November 2019",
        },
        {
          linkLogo: "https://www.propmodo.com/",
          logo: "propmodo.png",
          linkNews:
            "https://www.propmodo.com/technology-is-turning-facilities-management-from-boring-to-bespoke/",
          description:
            "Technology Is Turning Facilities Management From Boring to Bespoke",
          timestamp: "November 2019",
        },
        {
          linkLogo: "https://www.khaleejtimes.com/",
          logo: "Khaleej-Times.png",
          linkNews:
            "https://www.khaleejtimes.com/digital-skills-taking-us-to-task",
          description: "Digital skills taking us to task",
          timestamp: "November 2019",
        },
        {
          linkLogo: "https://www.cm-today.com/",
          logo: "cmt_logo.png",
          linkNews:
            "https://www.cm-today.com/news/technology/enterprise-scale-software-platforms-is-your-legacy-cafm-solution-holding-you-back",
          description:
            "Enterprise scale software platforms: Is your legacy CaFM solution holding you back?",
          timestamp: "October 2019",
        },
        {
          linkLogo: "https://www.forbes.com/",
          logo: "forbes.png",
          linkNews:
            "https://www.forbes.com/sites/forbestechcouncil/2019/10/22/would-your-organization-benefit-from-an-enterprise-wide-digital-platform/#6910f99b5efd",
          description:
            "Enterprise-wide digital platforms: Taking emerging innovations to scale for the real estate industry",
          timestamp: "October 2019",
        },
        {
          linkLogo: "https://www.arabianbusiness.com",
          logo: "ABe.jpg",
          linkNews: "https://www.youtube.com/watch?v=TZINMDdQunI",
          description:
            "Arabian Business LIVE Video panel on technology in real estate with Prabhu & Fahad",
          timestamp: "October 2019",
        },
        {
          linkLogo: "https://www.cm-today.com/",
          logo: "fm-today.jpg",
          linkNews:
            "https://www.cm-today.com/news/technology/community-management-and-customer-experience-taking-the-meta-view-in-fm",
          description:
            "Community Management and Customer Experience: Taking the meta-view in FM",
          timestamp: "October 2019",
        },
        {
          linkLogo: "http://climatecontrolme.com",
          logo: "climate-control2.png",
          linkNews:
            "http://climatecontrolme.com/2019/09/data-driven-technology-takes-centrestage-at-fm-expo/",
          description: "Data-driven technology takes centrestage at FM EXPO",
          timestamp: "September 2019",
        },
        {
          linkLogo: "https://www.constructionweekonline.com",
          logo: "contruction-week-online.png",
          linkNews:
            "https://www.constructionweekonline.com/products-and-services/258643-facilio-eyes-growth-as-middle-east-seeks-digital-transformation",
          description:
            "Facilio eyes growth as Middle East seeks digital transformation",
          timestamp: "September 2019",
        },
        {
          linkLogo: "https://www.khaleejtimes.com",
          logo: "Khaleej-Times.png",
          linkNews:
            "https://www.khaleejtimes.com/faciliobrings-enterprise-wide-o--m-platform-during-fm-expo",
          description:
            "Facilio brings enterprise-wide O & M platform during FM Expo",
          timestamp: "September 2019",
        },
        {
          linkLogo: "https://www.khaleejtimes.com",
          logo: "Khaleej-Times.png",
          linkNews:
            "https://www.khaleejtimes.com/business/global/two-sided-marketplace-can-unlock-efficiencies-for-cres",
          description: "Two-sided marketplace can unlock efficiencies for CREs",
          timestamp: "September 2019",
        },
        {
          linkLogo: "https://www.greenjournal.co.uk",
          logo: "green-journel.png",
          linkNews:
            "https://www.greenjournal.co.uk/2019/09/how-tech-driven-facilities-can-promote-positive-and-eco-friendly-habits/",
          description: "Tech-driven facilities promoting eco-friendly habits",
          timestamp: "September 2019",
        },
        {
          linkLogo: "https://www.buildings.com",
          logo: "buildings-com-logo.png",
          linkNews:
            "https://www.buildings.com/news/industry-news/articleid/22077/title/daily-sustainability-future-proof-your-building",
          description: "Adding the Smart to Sustainability in buildings",
          timestamp: "September 2019",
        },
        {
          linkLogo: "https://www.fm-middleeast.com/",
          logo: "forbes-middleeast.png",
          linkNews:
            "https://www.fm-middleeast.com/people/74882-how-wasl-properties-is-enhancing-its-operational-efficiency-by-implementing-facilios-software",
          description:
            "How Wasl Properties is enhancing its operational efficiency by implementing Facilio’s software",
          timestamp: "September 2019",
        },
        {
          linkLogo: "http://www.businessworld.in",
          logo: "BW-logo.png",
          linkNews:
            "http://www.businessworld.in/article/Preparing-Buildings-For-The-Cities-Of-Tomorrow/12-08-2019-174477/",
          description: "Preparing Buildings For The Cities Of Tomorrow",
          timestamp: "September 2019",
        },
        {
          linkLogo: "https://www.cm-today.com/",
          logo: "fm-today.jpg",
          linkNews:
            "https://www.cm-today.com/news/technology/connected-buildings-and-predictive-asset-optimisation",
          description: "Connected Buildings and Predictive Asset Optimisation",
          timestamp: "August 2019",
        },
        {
          linkLogo: "https://www.cm-today.com/",
          logo: "fm-today.jpg",
          linkNews:
            "https://www.cm-today.com/news/technology/unlocking-the-era-of-connected-buildings",
          description: "Era of Connected Buildings",
          timestamp: "August 2019",
        },
        {
          linkLogo: "http://climatecontrolme.com/",
          logo: "climate-control2.png",
          linkNews:
            "http://climatecontrolme.com/2019/08/shooting-for-an-energy-smart-world/",
          description: "Shooting for an energy-smart world",
          timestamp: "August 2019",
        },
        {
          linkLogo: "https://www.khaleejtimes.com",
          logo: "Khaleej-Times.png",
          linkNews:
            "https://www.khaleejtimes.com/faciliobrings-enterprise-wide-o--m-platform-during-fm-expo",
          description:
            "Ever heard of 'proptech'? It will change the way you choose your next home",
          timestamp: "August 2019",
        },
        {
          linkLogo: "https://www.cretech.com/",
          logo: "cretech.svg",
          linkNews:
            "https://www.cretech.com/directory/company/facilio-inc/news/could-digital-retrofits-be-the-answer-to-new-yorks-sustainability-woes#",
          description:
            "Could digital retrofits be the answer to NY sustainability woes",
          timestamp: "August 2019",
        },
        {
          linkLogo: "https://www.fm-today.com/",
          logo: "fm-today.jpg",
          linkNews:
            "https://www.cm-today.com/news/technology/commercial-real-estate-and-the-two-sided-market-1",
          description: "Commercial real estate and the two sided market",
          timestamp: "August 2019",
        },
        {
          linkLogo: "https://www.forbes.com",
          logo: "forbes.png",
          linkNews:
            "https://www.forbes.com/sites/forbestechcouncil/2019/08/09/could-iot-hold-the-biggest-opportunity-to-impact-our-planet-and-humans/#623253ce461e",
          description: "IoT holds the biggest opportunity to impact our planet",
          timestamp: "August 2019",
        },
        {
          linkLogo: "https://gulfnews.com/",
          logo: "gulfnews.png",
          linkNews:
            "https://gulfnews.com/business/property/flexible-workspaces-adapt-to-uaes-new-gen-workers-1.65893553",
          description: "Co-working theme",
          timestamp: "August 2019",
        },
        {
          linkLogo: "https://www.connectedremag.com",
          logo: "connectedre.png",
          linkNews:
            "https://www.connectedremag.com/newsletter/putting-connectivity-at-the-heart-of-the-commercial-real-estate-experience/",
          description: "Connectivity at the heart of CRE",
          timestamp: "August 2019",
        },
        {
          linkLogo: "https://timesofindia.indiatimes.com/",
          logo: "times-of-india.PNG",
          linkNews:
            "https://timesofindia.indiatimes.com/city/chennai/made-in-chennai-for-the-world/articleshow/70745049.cms",
          description: "Made in Chennai, for the world",
          timestamp: "August 2019",
        },
        {
          linkLogo: "https://www.dqindia.com/",
          logo: "cnbc-logo.png",
          linkNews:
            "https://www.cnbctv18.com/videos/young-turks/here-are-4-businesses-that-are-providing-new-age-concepts-in-the-realty-market-4152681.htm",
          description:
            "Young Turks: Here are 4 businesses that are providing new age concepts in the realty market",
          timestamp: "August 2019",
        },
        {
          linkLogo: "https://www.dqindia.com/",
          logo: "dq-logo.png",
          linkNews:
            "https://www.dqindia.com/three-simple-ways-make-smart-buildings-smarter/",
          description: "Three simple ways to make buildings smarter",
          timestamp: "August 2019",
        },
        {
          linkLogo: "https://telanganatoday.com",
          logo: "telangana-today.png",
          linkNews:
            "https://telanganatoday.com/facilio-looking-to-expand-globally",
          description: "Facilio looking to expand globally",
          timestamp: "July 2019",
        },
        {
          linkLogo: "https://www.livemint.com/",
          logo: "livemint-log0.svg",
          linkNews:
            "https://www.livemint.com/technology/tech-news/8-startups-that-are-using-emerging-technologies-to-make-life-easier-1562856663586.html",
          description:
            "8 startups that are using emerging technologies to make life easier for others in real world",
          timestamp: "July 2019",
        },
        {
          linkLogo: "https://www.cm-today.com",
          logo: "fm-today.jpg",
          linkNews:
            "https://www.cm-today.com/news/technology/connected-buildings-and-predictive-asset-optimisation",
          description: "Connected Buildings and predictive asset management",
          timestamp: "July 2019",
        },
        {
          linkLogo: "https://www.facilitiesnet.com",
          logo: "facilitesnet.png",
          linkNews:
            "https://www.facilitiesnet.com/site/brand-feature/Facilio%E2%80%99s-enterprisewide-platform-Realtime-unified-dataled-facilities-O-M--44208",
          description:
            "Facilio’s enterprise-wide platform - Real-time, unified, data-led facilities O & M ",
          timestamp: "July 2019",
        },
        {
          linkLogo:
            "https://www.forbesmiddleeast.com/softbanks-multi-billion-dollar-investments-in-real-estate-techwhat-might-the-future-hold",
          logo: "forbes-middleeast.png",
          linkNews:
            "https://www.forbesmiddleeast.com/softbanks-multi-billion-dollar-investments-in-real-estate-techwhat-might-the-future-hold",
          description:
            "Softbank’s Multi-Billion Dollar Investments In Real Estate Tech—What Might The Future Hold?",
          timestamp: "Jun 2019",
        },
        {
          linkLogo: "https://www.cm-today.com/",
          logo: "fm-logo.jpg",
          linkNews:
            "https://www.cm-today.com/news/technology/7-key-drivers-of-change-that-will-future-proof-the-industry",
          description:
            "7 key drivers of change that will future-proof the industry",
          timestamp: "Jun 2019",
        },
        {
          linkLogo:
            "https://www.mepmiddleeast.com/people/72520-the-power-of-digital-retrofits",
          logo: "mep-logo.png",
          linkNews:
            "https://www.mepmiddleeast.com/people/72520-the-power-of-digital-retrofits",
          description: "The Power of Digital Retrofits",
          timestamp: "Jun 2019",
        },
        {
          linkLogo:
            "https://www.mepmiddleeast.com/people/72559-using-iot-to-meps-advantage",
          logo: "mep-logo.png",
          linkNews:
            "https://www.mepmiddleeast.com/people/72559-using-iot-to-meps-advantage",
          description: "Using IoT to MEP's Advantage",
          timestamp: "Jun 2019",
        },
        {
          linkLogo:
            "https://www.fm-middleeast.com/operations/hard-services/74056-digital-retrofits-could-leave-to-savings-in-billions?utm_source=Jarvis&utm_medium=notifications&utm_campaign=push-may",
          logo: "facilities-management-middle-east.png",
          linkNews:
            "https://www.fm-middleeast.com/operations/hard-services/74056-digital-retrofits-could-leave-to-savings-in-billions?utm_source=Jarvis&utm_medium=notifications&utm_campaign=push-may",
          description: "Digital retrofits could lead to savings in billions",
          timestamp: "May 2019",
        },
        {
          linkLogo:
            "http://automatedbuildings.com/news/jun19/articles/facilio/190522111404facilio.html",
          logo: "automated-buildings.jpg",
          linkNews:
            "http://automatedbuildings.com/news/jun19/articles/facilio/190522111404facilio.html",
          description: "Creating Future-Ready Smart Building Environments",
          timestamp: "May 2019",
        },
        {
          linkLogo: "https://www.fmmedia.com.au/sectors/technology-revolution/",
          logo: "FacilityManagementFM.png",
          linkNews: "https://www.fmmedia.com.au/sectors/technology-revolution/",
          description: "Expert Talk- Technology Revolution",
          timestamp: "May 2019",
        },
        {
          linkLogo: "https://www.cm-today.com/",
          logo: "FacilityManagementFM.png",
          linkNews:
            "https://www.cm-today.com/news/technology/adding-the-magic-an-enterprise-data-platform-is-the-wizard-of-oz-of-the-fm-world",
          description:
            "Adding the Magic: An Enterprise Data Platform is the Wizard of Oz of the FM World",
          timestamp: "May 2019",
        },
        {
          linkLogo:
            "http://climatecontrolme.com/2019/05/making-the-call-for-digital-retrofits/",
          logo: "climate-control2.png",
          linkNews:
            "http://climatecontrolme.com/2019/05/making-the-call-for-digital-retrofits/",
          description: "Making the call for digital retrofits",
          timestamp: "May 2019",
        },
        {
          linkLogo:
            "https://www.analyticsinsight.net/facilio-optimizing-facilities-for-building-people-energy-and-assets-in-real-time/",
          logo: "analytic-sight.png",
          linkNews:
            "https://www.analyticsinsight.net/facilio-optimizing-facilities-for-building-people-energy-and-assets-in-real-time/",
          description:
            "Facilio: Optimizing Facilities For Building- People, Energy, and Assets, in Real-Time",
          timestamp: "May 2019",
        },
        {
          linkLogo:
            "https://forbescouncils.com/2019/04/forbes-technology-council-member-news-april-2019/",
          logo: "forbes-council.png",
          linkNews:
            "https://forbescouncils.com/2019/04/forbes-technology-council-member-news-april-2019/",
          description: "Facilio hosts future proof Dubai",
          timestamp: "Apr-2019",
        },
        {
          linkLogo: "https://www.ceocfointerviews.com/interviews/Facilio19.htm",
          logo: "ceocfo.jpg",
          linkNews: "https://www.ceocfointerviews.com/interviews/Facilio19.htm",
          description:
            "Facilio’s Enterprise-wide Platform harnesses IoT and AI to help your facilities become smarter and efficient in real-time",
          timestamp: "Apr-2019",
        },
        {
          linkLogo:
            "https://www.khaleejtimes.com/developers-builders-eye-higher-roi-sustainable-future",
          logo: "Khaleej-Times.png",
          linkNews:
            "https://www.khaleejtimes.com/developers-builders-eye-higher-roi-sustainable-future",
          description:
            "Realty story on how tech is helping developesr gain ROI",
          timestamp: "Apr-2019",
        },
        {
          linkLogo: "https://www.cm-today.com/",
          logo: "fm-today.jpg",
          linkNews:
            "https://www.cm-today.com/news/technology/why-iot-amp-ai-driven-software-is-a-critical-survival-need-for-the-built-environment-today",
          description:
            "Why IoT & AI-driven software is a CRITICAL SURVIVAL need for the built environment today",
          timestamp: "Mar 2019",
        },
        {
          linkLogo:
            "https://www.tahawultech.com/industry/property/uae-based-facilio-tech-led-transformation-built-environment/",
          logo: "tahawultechdotcom.png",
          linkNews:
            "https://www.tahawultech.com/industry/property/uae-based-facilio-tech-led-transformation-built-environment/",
          description:
            "Facilio unites top CRE and FM leaders at future proof dubai",
          timestamp: "Mar 2019",
        },
        {
          linkLogo:
            "https://www.tahawultech.com/industry/property/uae-based-facilio-tech-led-transformation-built-environment/",
          logo: "tahawultechdotcom.png",
          linkNews:
            "https://www.tahawultech.com/industry/property/uae-based-facilio-tech-led-transformation-built-environment/",
          description:
            "UAE-based Facilio highlights tech-led transformation in the built environment",
          timestamp: "Mar 2019",
        },
        {
          linkLogo:
            "https://curiousdose.com/2019/03/this-chennai-atlanta-based-facilio-is-using-iot-to-streamline-facility-management-services/",
          logo: "curious-dose.png",
          linkNews:
            "https://curiousdose.com/2019/03/this-chennai-atlanta-based-facilio-is-using-iot-to-streamline-facility-management-services/",
          description:
            "This Chennai & Atlanta-Based Facilio Is Using IoT To Stramline Facility Management Services",
          timestamp: "Mar 2019",
        },
        {
          linkLogo: "http://www.epcworld.in/epcissue/mar-issue-19/",
          logo: "epcworld.png",
          linkNews: "http://www.epcworld.in/epcissue/mar-issue-19/",
          description: "Technology the future of commercial facilities",
          timestamp: "Mar 2019",
        },
        {
          linkLogo:
            "https://www.zawya.com/mena/en/press-releases/story/Facilio_unites_top_CRE_and_FM_leaders_at_FUTURE_PROOF_Dubai_to_discuss_how_technology_is_transforming_the_built_environment-ZAWYA20190323080855/",
          logo: "zawya.svg",
          linkNews:
            "https://www.zawya.com/mena/en/press-releases/story/Facilio_unites_top_CRE_and_FM_leaders_at_FUTURE_PROOF_Dubai_to_discuss_how_technology_is_transforming_the_built_environment-ZAWYA20190323080855/",
          description:
            "Facilio unites top CRE and FM leaders at FUTURE PROOF Dubai to discuss how technology is transforming the built environment",
          timestamp: "Mar 2019",
        },
        {
          linkLogo:
            "http://climatecontrolme.com/2019/03/facilio-led-conference-highlights-challenges-related-to-digitalisation-in-fm/",
          logo: "climate-control2.png",
          linkNews:
            "http://climatecontrolme.com/2019/03/facilio-led-conference-highlights-challenges-related-to-digitalisation-in-fm/",
          description:
            "Facilio-led conference highlights challenges related to digitalisation in FM",
          timestamp: "Mar 2019",
        },
        {
          linkLogo:
            "https://www.gulftoday.ae/business/2019/03/27/top-industry-leaders-share-best",
          logo: "gulf-today.jpg",
          linkNews:
            "https://www.gulftoday.ae/business/2019/03/27/top-industry-leaders-share-best",
          description:
            "Top industry leaders share best practices of tech–led transformation",
          timestamp: "Mar 2019",
        },
        {
          linkLogo:
            "https://www.khaleejtimes.com/technology-transforms-the-built-environment",
          logo: "Khaleej-Times.png",
          linkNews:
            "https://www.khaleejtimes.com/technology-transforms-the-built-environment",
          description: "How technology transforms the built environment",
          timestamp: "Mar 2019",
        },
        {
          linkLogo: "https://www.fmmedia.com.au/sectors/building-a-future/",
          logo: "FacilityManagementFM.png",
          linkNews: "https://www.fmmedia.com.au/sectors/building-a-future/",
          description: "Building a future",
          timestamp: "Mar 2019",
        },
        {
          linkLogo:
            "http://automatedbuildings.com/news/mar19/articles/facilio/190224033707facilio.html",
          logo: "automated-buildings.jpg",
          linkNews:
            "http://automatedbuildings.com/news/mar19/articles/facilio/190224033707facilio.html",
          description: "Integrating Automation, and Helping it Scale",
          timestamp: "Mar 2019",
        },
        {
          linkLogo:
            "https://www.dqindia.com/artificial-intelligence-machine-learning-create-multifold-efficiency-optimizing-facilities-real-time/",
          logo: "dataquest.png",
          linkNews:
            "https://www.dqindia.com/artificial-intelligence-machine-learning-create-multifold-efficiency-optimizing-facilities-real-time/",
          description:
            "Artificial Intelligence, Machine Learning Create Multifold Efficiency by Optimizing Facilities in Real-time",
          timestamp: "Mar 2019",
        },
        {
          linkLogo:
            "http://digitalterminal.in/news/facilio-organizes-the-first-edition-of-futureproof-the-next-wave-in-connected-buildings/15293.html",
          logo: "dt.jpg",
          linkNews:
            "http://digitalterminal.in/news/facilio-organizes-the-first-edition-of-futureproof-the-next-wave-in-connected-buildings/15293.html",
          description:
            "Facilio Organizes The First Edition Of #Futureproof – The Next Wave In Connected Buildings",
          timestamp: "Mar 2019",
        },
        {
          linkLogo:
            "https://yourstory.com/2019/03/facilio-founder-prabhu-ramachandran-r7pldabicc",
          logo: "yourstorylogo.png",
          linkNews:
            "https://yourstory.com/2019/03/facilio-founder-prabhu-ramachandran-r7pldabicc",
          description:
            "Buildings are a lot more than just bricks and mortar: Facilio Co-founder Prabhu Ramachandran",
          timestamp: "Mar 2019",
        },
        {
          linkLogo:
            "https://www.infrabuddy.com/key-focus-areas-for-facilities-managers-by-prabhu-ramachandran/",
          logo: "infrabuddy.png",
          linkNews:
            "https://www.infrabuddy.com/key-focus-areas-for-facilities-managers-by-prabhu-ramachandran/",
          description: "Key focus areas for Facilities Managers",
          timestamp: "Feb-2019",
        },
        {
          linkLogo:
            "http://realtyplusmag.com/iot-is-leading-the-transformation-of-the-fm-industry-4/",
          logo: "rp.jpg",
          linkNews:
            "http://realtyplusmag.com/iot-is-leading-the-transformation-of-the-fm-industry-4/",
          description: "IoT is leading the transformation of the FM industry",
          timestamp: "Feb-2019",
        },
        {
          linkLogo:
            "https://www.cretech.com/cretech-blog/real-time-facilities-experience-is-it-the-future/",
          logo: "cretech.svg",
          linkNews:
            "https://www.cretech.com/cretech-blog/real-time-facilities-experience-is-it-the-future/",
          description: "Real Time Facilities Experience – Is it the Future?",
          timestamp: "Feb-2019",
        },
        {
          linkLogo:
            "https://www.arabianindustry.com/construction/news/2019/feb/11/watch-series-future-of-fm-tech-with-facilio-6037863/",
          logo: "arabianindustry.png",
          linkNews:
            "https://www.arabianindustry.com/construction/news/2019/feb/11/watch-series-future-of-fm-tech-with-facilio-6037863/",
          description: "Watch series: Future of FM Tech with Facilio",
          timestamp: "Feb-2019",
        },
        {
          linkLogo:
            "https://www.fm-middleeast.com/business/73550-watch-series-future-of-fm-tech-with-facilio",
          logo: "facilities-management-middle-east.png",
          linkNews:
            "https://www.fm-middleeast.com/business/73550-watch-series-future-of-fm-tech-with-facilio",
          description: "Watch series: Future of FM Tech with Facilio",
          timestamp: "Feb-2019",
        },
        {
          linkLogo:
            "http://techcompanynews.com/facilio-raises-6-4m-series-funding-led-tiger-global-existing-investor-accel/",
          logo: "automated-buildings.jpg",
          linkNews:
            "http://techcompanynews.com/facilio-raises-6-4m-series-funding-led-tiger-global-existing-investor-accel/",
          description:
            "Facilio Raises $6.4M Series A Funding Led By Tiger Global And Existing Investor Accel",
          timestamp: "Jan-2019",
        },
        {
          linkLogo: "https://uaebusiness.com/2019/01/10/facilio-2/",
          logo: "automated-buildings.jpg",
          linkNews:
            "http://automatedbuildings.com/news/jan19/interviews/181218114303facilio.html",
          description: "Smart Buildings, Smart Workforce, Smart Cities",
          timestamp: "Jan-2019",
        },
        {
          linkLogo: "https://uaebusiness.com/2019/01/10/facilio-2/",
          logo: "uaebusiness.jpg",
          linkNews: "https://uaebusiness.com/2019/01/10/facilio-2/",
          description: "Reimagining the facilities experience",
          timestamp: "Jan-2019",
        },
        {
          linkLogo:
            "https://www.thehindubusinessline.com/specials/emerging-entrepreneurs/integrating-building-maintenance-the-smart-way/article25820856.ece",
          logo: "gulf-construction.png",
          linkNews:
            "https://www.thehindubusinessline.com/specials/emerging-entrepreneurs/integrating-building-maintenance-the-smart-way/article25820856.ece",
          description: "Taking the leap into next frontier of FM",
          timestamp: "Jan-2019",
        },
        {
          linkLogo:
            "https://www.thehindubusinessline.com/specials/emerging-entrepreneurs/integrating-building-maintenance-the-smart-way/article25820856.ece",
          logo: "the-hindu.png",
          linkNews:
            "https://www.thehindubusinessline.com/specials/emerging-entrepreneurs/integrating-building-maintenance-the-smart-way/article25820856.ece",
          description: "Integrating building maintenance, the smart way",
          timestamp: "Dec 2018",
        },
        {
          linkLogo:
            "https://www.fm-middleeast.com/suppliers/73335-top-suppliers-of-2018",
          logo: "facilities-management-middle-east.png",
          linkNews:
            "https://www.fm-middleeast.com/suppliers/73335-top-suppliers-of-2018",
          description: "Meet The Top FM Suppliers of 2018",
          timestamp: "Dec 2018",
        },
        {
          linkLogo:
            "https://www.visitdubai.com/en/business-in-dubai/grow-your-business/dynamic-dubai/dubai-ai-ambitions",
          logo: "dubai.jpg",
          linkNews:
            "https://www.visitdubai.com/en/business-in-dubai/grow-your-business/dynamic-dubai/dubai-ai-ambitions",
          description: "Dubai showcases AI ambitions at dedicated show",
          timestamp: "Dec-2018",
        },
        {
          linkLogo:
            "https://www.fm-middleeast.com/suppliers/73341-facilio-powers-2018-fmme-power-50?utm_source=newsletter&utm_medium=email&utm_campaign=fm-middleeast_newsletters",
          logo: "facilities-management-middle-east.png",
          linkNews:
            "https://www.fm-middleeast.com/suppliers/73341-facilio-powers-2018-fmme-power-50?utm_source=newsletter&utm_medium=email&utm_campaign=fm-middleeast_newsletters",
          description: "Facilio powers 2018 fmME Power 50",
          timestamp: "Dec 2018",
        },
        {
          linkLogo:
            "https://www.business-standard.com/article/technology/making-buildings-smarter-through-iot-platform-118121100602_1.html",
          logo: "business-standard.png",
          linkNews:
            "https://www.business-standard.com/article/technology/making-buildings-smarter-through-iot-platform-118121100602_1.html",
          description: "Making buildings smarter through IoT platform",
          timestamp: "Dec 2018",
        },
        {
          linkLogo:
            "https://www.livemint.com/AI/LDVHtYp6YR6gE1F3qY6rWM/Optimizing-facilities-and-sustainability-management-with-IoT.html",
          logo: "livemint.jpg",
          linkNews:
            "https://www.livemint.com/AI/LDVHtYp6YR6gE1F3qY6rWM/Optimizing-facilities-and-sustainability-management-with-IoT.html",
          description: "Optimising facilities and sustainability with IoT",
          timestamp: "Nov 2018",
        },
        {
          linkLogo:
            "https://www.ciol.com/iot-ai-led-facilities-management-next-frontier/",
          logo: "ciol.png",
          linkNews:
            "https://www.ciol.com/iot-ai-led-facilities-management-next-frontier/",
          description:
            "IoT and AI-led facilities management is the next frontier",
          timestamp: "Nov 2018",
        },
        {
          linkLogo:
            "https://techobserver.in/2018/11/26/looking-for-aggressive-global-growth-in-2019-says-facilio-ceo-prabhu-ramachandran/",
          logo: "tech-observer.png",
          linkNews:
            "https://techobserver.in/2018/11/26/looking-for-aggressive-global-growth-in-2019-says-facilio-ceo-prabhu-ramachandran/",
          description: "Exclusive interview with Tech Observer",
          timestamp: "Nov 2018",
        },
        {
          linkLogo:
            "http://www.constructionweekonline.com/article-50768-iot-and-ai-can-change-the-meaning-of-facilities-management/",
          logo: "cwonline-logo.png",
          linkNews:
            "http://www.constructionweekonline.com/article-50768-iot-and-ai-can-change-the-meaning-of-facilities-management/",
          description:
            "IoT and AI can change the meaning of facilities management",
          timestamp: "Nov 2018",
        },
        {
          linkLogo:
            "https://timesofindia.indiatimes.com/people/my-startup-idea-facilios-prabhu-ramachandran-is-rethinking-the-way-buildings-are-managed/articleshow/66784655.cms",
          logo: "toi.png",
          linkNews:
            "https://timesofindia.indiatimes.com/people/my-startup-idea-facilios-prabhu-ramachandran-is-rethinking-the-way-buildings-are-managed/articleshow/66784655.cms",
          description:
            "Rethinking the way buildings are managed - Startup Column",
          timestamp: "Nov 2018",
        },
        {
          linkLogo:
            "https://itknowledgeexchange.techtarget.com/quality-assurance/facilio/",
          logo: "tt.png",
          linkNews:
            "https://itknowledgeexchange.techtarget.com/quality-assurance/facilio/",
          description: "Interaction with TechTarget",
          timestamp: "Nov 2018",
        },
        {
          linkLogo:
            "https://www.aeconline.ae/digital-retrofits-driving-iot-driven-transformation-in-the-building-automation-127675/news.html",
          logo: "aec-online.gif",
          linkNews:
            "https://www.aeconline.ae/digital-retrofits-driving-iot-driven-transformation-in-the-building-automation-127675/news.html",
          description:
            "Digital retrofits: IoT-driven transformation in building automation",
          timestamp: "Oct 2018",
        },
        {
          linkLogo:
            "http://climatecontrolme.com/2018/10/customer-education-most-challenging-in-adoption-of-technology-in-the-hvac-sector-says-facilio/",
          logo: "climate-control.png",
          linkNews:
            "http://climatecontrolme.com/2018/10/customer-education-most-challenging-in-adoption-of-technology-in-the-hvac-sector-says-facilio/",
          description: "Adoption of technology in the HVAC and FM sector",
          timestamp: "Oct 2018",
        },
        {
          linkLogo:
            "http://climatecontrolme.com/2018/10/the-use-of-iot-in-integrating-existing-bms-to-sensors-for-fm-is-growing/",
          logo: "climate-control.png",
          linkNews:
            "http://climatecontrolme.com/2018/10/the-use-of-iot-in-integrating-existing-bms-to-sensors-for-fm-is-growing/",
          description:
            "Use of IoT in integrating existing BMS to Sensors for FMs ",
          timestamp: "Oct 2018",
        },
        {
          linkLogo:
            "https://www.khaleejtimes.com/business/local/where-ai-iot-improve-building-efficiency",
          logo: "Khaleej-Times.png",
          linkNews:
            "https://www.khaleejtimes.com/business/local/where-ai-iot-improve-building-efficiency",
          description: "Where AI & IoT improves building efficiency",
          timestamp: "Oct 2018",
        },
        {
          linkLogo:
            "https://edition.pagesuite-professional.co.uk/html5/reader/production/default.aspx?pubname=&edid=2571459d-b1ea-4999-8809-073448f187db",
          logo: "fm-mag.jpg",
          linkNews:
            "https://edition.pagesuite-professional.co.uk/html5/reader/production/default.aspx?pubname=&edid=2571459d-b1ea-4999-8809-073448f187db",
          description: "Companies to watch out for at FM Expo",
          timestamp: "Sep 2018",
        },
        {
          linkLogo: "https://press.fm-expo.com/exhibitor-interview-facilio",
          logo: "fmexpo.png",
          linkNews: "https://press.fm-expo.com/exhibitor-interview-facilio",
          description: "Interview with Facilio -FM Expo Dubai",
          timestamp: "Sep 2018",
        },
        {
          linkLogo:
            "https://www.cretech.com/directory/company/facilio-inc/news/7-ways-facility-managers-can-create-value-with-technology",
          logo: "cretech.svg",
          linkNews:
            "https://www.cretech.com/directory/company/facilio-inc/news/7-ways-facility-managers-can-create-value-with-technology",
          description:
            "7 Ways facility managers can create value with technology",
          timestamp: "Aug 2018",
        },
        {
          linkLogo:
            "https://ameinfo.com/construction-real-estate/residential/intelligent-facilities-management/",
          logo: "ame-info.png",
          linkNews:
            "https://ameinfo.com/construction-real-estate/residential/intelligent-facilities-management/",
          description:
            "IoT & ML based building management a critical need of the hour",
          timestamp: "Aug 2018",
        },
        {
          linkLogo:
            "http://www.cio.in/opinion/facilities-management-ai-driven-enterprise-saas-tech-raise-efficiencies",
          logo: "cio-logo.png",
          linkNews:
            "http://www.cio.in/opinion/facilities-management-ai-driven-enterprise-saas-tech-raise-efficiencies",
          description:
            "Interview: Facilities management: AI-driven enterprise SaaS tech raise efficiencies",
          timestamp: "July 2018",
        },
        {
          linkLogo:
            "https://www.fm-middleeast.com/suppliers/72549-watch-what-is-facilios-new-disruptive-tech-for-facilities-managers",
          logo: "fm-mag.jpg",
          linkNews:
            "https://www.fm-middleeast.com/suppliers/72549-watch-what-is-facilios-new-disruptive-tech-for-facilities-managers",
          description: "Video interview with Prabhu, Founder & CEO",
          timestamp: "July 2018",
        },
        {
          linkLogo:
            "http://gulftoday.ae/portal/20ce918f-46b0-4966-8208-75583420df64.aspx",
          logo: "gulf-today.jpg",
          linkNews:
            "http://gulftoday.ae/portal/20ce918f-46b0-4966-8208-75583420df64.aspx",
          description: "Dubai's smart city goals march ahead",
          timestamp: "June 2018",
        },
        {
          linkLogo:
            "https://www.financialexpress.com/industry/facilio-buildings-on-autopilot/1245860/",
          logo: "finacial-express-logo.png",
          linkNews:
            "https://www.financialexpress.com/industry/facilio-buildings-on-autopilot/1245860/",
          description: "Interview: Buildings on autopilot",
          timestamp: "July 2018",
        },
        {
          linkLogo:
            "http://bwcio.businessworld.in/article/Facilio-Facilitating-Disruptive-Evolution-in-Facilities-Management-Space-Prabhu-Ramachandran-CEO/21-06-2018-152604/",
          logo: "cio-logo.png",
          linkNews:
            "http://bwcio.businessworld.in/article/Facilio-Facilitating-Disruptive-Evolution-in-Facilities-Management-Space-Prabhu-Ramachandran-CEO/21-06-2018-152604/",
          description:
            "Interview: Disruptive Evolution in Facilities Management ",
          timestamp: "June 2018",
        },
        {
          linkLogo:
            "http://www.mepmiddleeast.com/people/70943-mep-professionals-can-help-buildings-to-run-on-autopilot",
          logo: "mep-logo.png",
          linkNews:
            "http://www.mepmiddleeast.com/people/70943-mep-professionals-can-help-buildings-to-run-on-autopilot",
          description: "Smart cities & role of MEPs",
          timestamp: "May 2018",
        },
        {
          linkLogo:
            "https://www.mepmiddleeast.com/people/70851-comment-technology-can-be-a-disruptive-force-in-countering-mep-challenges",
          logo: "mep-logo.png",
          linkNews:
            "https://www.mepmiddleeast.com/people/70851-comment-technology-can-be-a-disruptive-force-in-countering-mep-challenges",
          description:
            "Technology can be a disruptive force in countering MEP challenges",
          timestamp: "May 2018",
        },
        {
          linkLogo:
            "https://yourstory.com/2018/05/10-indian-iot-startups-watch-2018/",
          logo: "yourstorylogo.png",
          linkNews:
            "https://yourstory.com/2018/05/10-indian-iot-startups-watch-2018/",
          description:
            "Faciliolisted in Top 10 IoT startups to watch out for in 2018",
          timestamp: "May 2018",
        },
        {
          linkLogo:
            "http://www.mepmiddleeast.com/business/70759-comment-mep-as-sustainability-champion-of-built-environment",
          logo: "mep-logo.png",
          linkNews:
            "http://www.mepmiddleeast.com/business/70759-comment-mep-as-sustainability-champion-of-built-environment",
          description: "MEP as sustainability champion of built environment ",
          timestamp: "April 2018",
        },
        {
          linkLogo:
            "https://yourstory.com/2018/04/accel-funds-ex-zoho-teams-startup-facilio-that-makes-buildings-smarter/?utm_source=twitter&utm_medium=share",
          logo: "yourstorylogo.png",
          linkNews:
            "https://yourstory.com/2018/04/accel-funds-ex-zoho-teams-startup-facilio-that-makes-buildings-smarter/?utm_source=twitter&utm_medium=share",
          description:
            "Accel funds ex-Zoho team’s startup Facilio that makes buildings smarter",
          timestamp: "April 2018",
        },
        {
          linkLogo:
            "http://technicalreview.me/construction/buildings/sustaining-sustainability-buildings-on-autopilot-might-be-the-answer",
          logo: "technical-review.png",
          linkNews:
            "http://technicalreview.me/construction/buildings/sustaining-sustainability-buildings-on-autopilot-might-be-the-answer",
          description:
            "Sustaining sustainability: Buildings on autopilot might be the answer",
          timestamp: "April 2018",
        },
        {
          linkLogo:
            "http://www.constructionweekonline.com/article-48718-software-led-building-management-enables-increased-roi-and-value/",
          logo: "cwonline-logo.png",
          linkNews:
            "http://www.constructionweekonline.com/article-48718-software-led-building-management-enables-increased-roi-and-value/",
          description:
            "Software-led building management enables increased ROI and value",
          timestamp: "Mar 2018",
        },
        {
          linkLogo:
            "https://www.dtnext.in/News/Business/2018/03/20002855/1065688/Greentech-startup-vies-for-share-in-USD-2-trillion-.vpf",
          logo: "dt-next-logo.jpg",
          description:
            "Green-tech start-up vies for share in USD 2 trillion facility management pie",
          linkNews:
            "https://www.dtnext.in/News/Business/2018/03/20002855/1065688/Greentech-startup-vies-for-share-in-USD-2-trillion-.vpf",
          timestamp: "Mar 2018",
        },
        {
          linkLogo:
            "https://builtworlds.com/news/the-new-real-time-facilities-experience/",
          logo: "builtworlds.jpg",
          linkNews:
            "https://builtworlds.com/news/the-new-real-time-facilities-experience/",
          description: "The New, Real-time Facilities Experience",
          timestamp: "Mar 2018",
        },
        {
          linkLogo:
            "https://timesofindia.indiatimes.com/business/india-business/accel-backs-green-tech-startup-facilio/articleshow/63364664.cms?from=mdr",
          logo: "times-of-india.jpg",
          linkNews:
            "https://timesofindia.indiatimes.com/business/india-business/accel-backs-green-tech-startup-facilio/articleshow/63364664.cms?from=mdr",
          description: "Accel backs green-tech startup Facilio",
          timestamp: "Mar 2018",
        },
        {
          linkLogo:
            "https://www.forbesmiddleeast.com/en/ai-and-iot-are-the-future-of-facilities-management/",
          logo: "forbes-middleeast.png",
          linkNews:
            "https://www.forbesmiddleeast.com/en/ai-and-iot-are-the-future-of-facilities-management/",
          description: "AI and IoT are the Future of Facilities Management",
          timestamp: "Mar 2018",
        },
        {
          linkLogo:
            "http://www.constructionweekonline.com/article-48506-how-technology-can-help-prolong-building-lifecycles/",
          logo: "cwonline-logo.png",
          linkNews:
            "http://www.constructionweekonline.com/article-48506-how-technology-can-help-prolong-building-lifecycles/",
          description: "How technology can help prolong building life cycles",
          timestamp: "Mar 2018",
        },
        {
          linkLogo:
            "http://technicalreview.me/construction/buildings/interview-building-with-iot",
          logo: "technical-review.png",
          linkNews:
            "http://technicalreview.me/construction/buildings/interview-building-with-iot",
          description: "Interview: Building with IoT",
          timestamp: "Feb 2018",
        },
        {
          linkLogo:
            "http://www.constructionweekonline.com/article-48148-how-to-run-fm-operations-on-autopilot/2/",
          logo: "cwonline-logo.png",
          linkNews:
            "http://www.constructionweekonline.com/article-48148-how-to-run-fm-operations-on-autopilot/2/ ",
          description: "How to run FM operations on autopilot",
          timestamp: "Feb 2018",
        },
      ],
    };
  },
  components: {
    News,
    Pagination,
    Navbar,
    Footer,
  },
  head() {
    return {
      title: "Facilio in the news",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "See key media mentions of Facilio and the latest stories about us. Media members can directly get in touch with us. We’d love to engage.",
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Facilio in the news",
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "See key media mentions of Facilio and the latest stories about us. Media members can directly get in touch with us. We’d love to engage.",
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "https://facilio.com/images/og-images/facilio-news.png",
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/newsroom/facilio-in-the-news",
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Facilio in the news",
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "See key media mentions of Facilio and the latest stories about us. Media members can directly get in touch with us. We’d love to engage.",
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "https://facilio.com/images/og-images/facilio-news.png",
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/newsroom/facilio-in-the-news",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/newsroom/facilio-in-the-news",
        },
      ],
      script: [
        {
          src: "../../js/includes.js",
        },
      ],
    };
  },
};
</script>

<style>
#fc-header .navbar-default {
  background-color: #ffffff !important;
}
</style>
