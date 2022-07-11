<template>
  <div class="productPage btn-shade">
    <div id="productPage"></div>
    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <section class="fc-newsletter-specific-banner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="229"
          class="fc-vertical-small-dots hidden-xs"
        >
          <path
            fill="#DEDEF7"
            fill-rule="evenodd"
            d="M88.811 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177A3.182 3.182 0 0192 92.344a3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 70.11a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177A3.182 3.182 0 0192 47.877a3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 25.643a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0188.811.233 3.182 3.182 0 0192 3.41a3.182 3.182 0 01-3.189 3.176zM67.858 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233A3.182 3.182 0 0164.67 3.41 3.182 3.182 0 0167.858.233a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM45.994 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0145.994.233a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM25.041 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0125.04 44.7a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0125.04.233a3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zM4.088 95.52a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234A3.182 3.182 0 01.899 70.11a3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176A3.182 3.182 0 014.088 44.7a3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233A3.182 3.182 0 01.899 3.41 3.182 3.182 0 014.088.233 3.182 3.182 0 017.276 3.41a3.182 3.182 0 01-3.188 3.176zM88.81 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 135.96a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zM67.858 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM45.994 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM25.041 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM4.088 228.07a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176z"
          />
        </svg>
        <div class="container">
          <p>August 2020</p>
          <h1>Facilio Newsletter</h1>
        </div>
      </section>
      <section class="fc-newsletter-template">
        <div class="fc-social-float-bar">
          <a href="https://www.facebook.com/facilioinc/" target="_blank" class="fc-facebook">
            <img class="fc-icon-news" src="/images/newsletter/facebook.png" />
          </a>
          <a href="https://twitter.com/FacilioInc" class="fc-twitter" target="_blank">
            <img class="fc-icon-news" src="/images/newsletter/twitter.png" />
          </a>
          <a
            href="https://www.linkedin.com/company/facilio-inc/"
            target="_blank"
            class="fc-linkedin"
          >
            <img class="fc-icon-news" src="/images/newsletter/linkedin.png" />
          </a>
        </div>

        <div class="fc-news-head">Will it rain tomorrow? When was AI invented? What is herd immunity?</div>
        <div class="fc-newspaper-txt">It’s fast and easy to find answers to just about any question today.</div>
        <div
          class="fc-newspaper-txt"
        >But that hasn’t always been the case. Just a few decades ago, curious minds had to rely on networking, libraries, information hubs, and other resources to search for answers to their queries.</div>
        <div class="fc-news-img">
          <img src="/images/newsletter/august/google.png" />
        </div>
        <p
          style="text-align: center; font-size:12px; color: #a9a9a9; margin-right: 18%;margin-top:10px"
        >Source: First-ever home page of Google (Source: dailymail.co.uk)</p>
        <div
          class="fc-newspaper-txt"
        >
        Then in 1996, a search engine called BackRub was born. BackRub was rechristened as Google in 1997—a play on the word googol, which means the number 1 followed by 100 zeroes.
        </div>
        <div
          class="fc-newspaper-txt"
        >And the way people sought information was changed forever.</div>
        <div class="fc-newspaper-txt">Today, when you search for a good restaurant nearby, Google returns a complete picture of what you seek—website, hours, phone number, street address, menu, guest reviews—by collating information from multiple data sources, like Google Maps, the restaurant's website, Yelp, Google ratings, and more.</div>
        <div class="fc-newspaper-txt fwbold" style="font-family: ProximaNovaSemibold;">All of the information you’re likely to need. In one spot. Organized intuitively.</div>
        <div
          class="fc-newspaper-txt"
        >Google made it fast and easy for people to make decisions with phenomenal clarity.</div>
        <div class="fc-newspaper-txt">
          In the same way, a single, accessible source of truth would make life easier for the real estate industry, too. Consolidating contextual data in one platform would make it easier for property owners and operators to get answers to hard questions, focus on what’s important, and make informed decisions.
        </div>
        <div class="fc-newspaper-txt">The goal of our curation this month is to help you forward on the path to unifying your own operational data so you, too, can enjoy speed, convenience, and clarity in your steps to improve operational efficiency.</div>
        <hr />
        <div class="fc-news-subhead">GOOD READS</div>

        <div class="fc-news-img">
          <img src="/images/newsletter/august/feature2.png" />
        </div>

        <div class="fc-news-list">
          <ul>
            <li>
              <a
                href="https://www.sme10x.com/10x-industry/reshaping-property-management-through-digital-enhancementsr"
                target="_blank"
              >
                <span>Property Management: Reshaping property management through digital enhancements</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.fm-middleeast.com/business/76856-rethinking-customer-experience-and-how-fms-can-succeed-in-the-new-reality?utm_source=meleads&utm_medium=email&utm_campaign=Augustnewsletter"
                target="_blank"
              >
                <span>Facilities Management: Rethinking customer experience and how FMs can succeed in the new reality</span>
              </a>
            </li>
            <li>
              <a
                href="https://memoori.com/technology-alliances-tackle-thorny-issue-of-interoperability-in-smart-buildings/"
                target="_blank"
              >
                <span>Memoori: Technology alliances tackle thorny issue of interoperability in smart buildings</span>
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div class="fc-news-subhead">Market Trends</div>

        <div class="fc-news-img">
          <img src="/images/newsletter/august/feature1.png" />
        </div>

        <div class="fc-news-list">
          <ul>
            <li>
              <a
                href="https://www.gensler.com/uploads/document/695/file/Gensler-US-Work-From-Home-Survey-2020-Briefing-1.pdf"
                target="_blank"
              >
                <span>Gensler Survey: Only 12% of U.S. workers want to work from home full-time.</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.theinvestor.jll/news/world/others/why-real-estate-transparency-is-harder-to-achieve-than-ever"
                target="_blank"
              >
                <span>JLL Study: Why real estate transparency is harder to achieve than ever</span>
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div class="fc-news-subhead">WHAT’S NEWS</div>
        <div class="fc-newspaper-txt">
          <a
            href="https://blog.facilio.com/meet-the-facilio-partners-powering-the-data-driven-building-operations-revolution/?utm_source=meleads&utm_medium=email&utm_campaign=augnewsletter"
            target="_blank"
          >
            <span>Facilio Blog:</span>
          </a> Meet the Facilio Partners Powering the Data-driven Building Operations Revolution
        </div>
        <div class="fc-newspaper-txt">
          <a
            href="https://rew-online.com/onyx-moves-to-capture-post-covid-office-users-with-high-tech-smart-campus/"
            target="_blank"
          >
            <span>Real Estate Weekly:</span>
          </a>  Onyx moves to capture post-COVID office users with high-tech smart campus
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default {
  components: {
    Navbar,
    Footer
  },
  head() {
    return {
      title: "August Issue | Facilio",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Will it rain tomorrow? When was AI invented? What is herd immunity?"
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "August Issue | Facilio"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Will it rain tomorrow? When was AI invented? What is herd immunity?"
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "https://facilio.com/images/og-images/newsletter-og.png"
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/resources/newsletter"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "August Issue | Facilio"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Will it rain tomorrow? When was AI invented? What is herd immunity?"
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "https://facilio.com/images/og-images/newsletter-og.png"
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/resources/newsletter"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/resources/newsletter"
        }
      ]
    };
  }
};
</script>
<style type="text/css">
body {
  font-family: Helvetica, "Roboto", Arial, sans-serif !important;
}
</style>