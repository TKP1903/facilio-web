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
          <p>November 2020</p>
          <h1>Facilio Newsletter</h1>
        </div>
      </section>
      <section class="fc-newsletter-template">
        <div class="fc-social-float-bar">
          <a
            href="https://www.facebook.com/facilioinc/"
            target="_blank"
            class="fc-facebook"
          >
            <img class="fc-icon-news" src="/images/newsletter/facebook.png" />
          </a>
          <a
            href="https://twitter.com/FacilioInc"
            class="fc-twitter"
            target="_blank"
          >
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

        <div class="fc-news-head">
          When HR professional Arte Nathan vacationed at Four Seasons in Paris,
          he had no idea the hotel would inspire a new story he would share at
          every HR convention he’d ever attend.
        </div>
        <div class="fc-newspaper-txt">
          Nathan and his family had breakfast one morning, and left to tour the
          city. His daughter saved half her croissant for later that day. But
          when they returned, the pastry was gone. Naturally, housekeeping
          assumed that the half-croissant was trash and removed it.
        </div>
        <div class="fc-newspaper-txt">
          Or did they?
        </div>
        <div class="fc-newspaper-txt">
          A light was blinking on the room’s telephone. It was a message from
          the front desk.
        </div>

        <div class="fc-news-img">
          <img src="/images/newsletter/november/four-seasons.jpg" />
        </div>

        <div class="fc-newspaper-txt">
          The clerk stated that housekeeping had removed the croissant from the
          room, assuming that upon return the rightful owner would prefer a
          fresh pastry. The front desk contacted the kitchen to set aside a
          croissant, and room service was informed that upon request, they would
          need to deliver the pastry posthaste.
        </div>

        <div class="fc-newspaper-txt">
          Nathan was awestruck.
        </div>

        <div class="fc-newspaper-txt">
          <span style="font-family: ProximaNovaBold;color: #181b3b;"
            >Departments across the entire hotel—the front desk, housekeeping,
            kitchen, room service—operated together as one big team to deliver
            an unbelievable customer experience.</span
          >
          It could have easily gone another way if these departments had been
          working in silos, but their seamless collaboration is instead the
          stuff of customer delight.
        </div>

        <div class="fc-newspaper-txt">
          And the envy of other property operations experts.
        </div>

        <div class="fc-newspaper-txt">
          All operational teams can achieve this level of customer service when
          united with the right data and tools to reduce reaction time, improve
          communication, and align processes towards a common goal of delivering
          delightful experiences.
        </div>

        <div class="fc-newspaper-txt">
          What could your teams achieve if they didn’t have to chase approvals
          and shuffle between multiple tools, sheets, calls, emails, and
          paperwork? What if they instead had access to real-time information
          like the Four Seasons? Wouldn’t tenant satisfaction be closer than
          ever?
        </div>

        <div class="fc-newspaper-txt">
          This month, we’ve curated resources to help you take that first step
          toward frictionless operations and experiences in your buildings.
        </div>

        <hr />
        <div class="fc-news-subhead">EXPERT INSIGHTS</div>

        <div class="fc-news-img">
          <img src="/images/newsletter/november/conor.png" />
        </div>

        <div class="fc-news-list">
          <ul>
            <li>
              <a
                href="https://facilio.com/futureproof/covid-19-educational-series/?utm_source=meleads&utm_medium=email&utm_campaign=novnewsletter"
                target="_blank"
              >
                <span
                  >REbuild Episode #7 - Sustainability in Buildings Post
                  COVID-19: Opportunities that Should Not be Missed.</span
                >
              </a>
              Conor Merrigan shares his thoughts on complying with evolving IAQ
              guidelines and the right questions to ask building owners about
              innovation in building operations and sustainability.
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=xM7NLqcmDG0&feature=youtu.be&ab_channel=CommunityManagementToday"
                target="_blank"
              >
                <span>The Need for Better Customer Experiences.</span>
              </a>
              Prabhu (CEO of Facilio) and Sumith Sukumaran (Operations at QFM
              Group) discuss the rise of new opportunities and services to
              attract tenants.
            </li>
          </ul>
        </div>
        <hr />
        <div class="fc-news-subhead">GOOD READS:</div>

        <div class="fc-news-img">
          <img
            src="https://img2.storyblok.com/1100x550/smart/f/52232/4256x2832/36e0b6741d/1.jpg"
          />
        </div>

        <div class="fc-newspaper-txt">
          <a
            href="https://resources.wellcertified.com/press-releases/empire-state-realty-trust-achieves-well-health-safety-rating/"
            target="_blank"
          >
            <span>
              Empire State Realty Trust Achieves WELL Health-Safety Rating
            </span>
          </a>
        </div>
        <div class="fc-newspaper-txt">
          <a
            href="https://www.hesterconsulting.net/blog/https/wwwhesterconsultingnet/blog-page-url/new-post-title-2"
            target="_blank"
          >
            <span>
              Enhanced MSI and MEP Relationship Brings Benefits of Smart
              Building To More Clients
            </span>
          </a>
        </div>

        <div class="fc-news-subhead">ARTICLES TO HELP YOU LEVEL UP</div>

        <div class="fc-newspaper-txt">
          <a
            href="https://blog.facilio.com/how-to-get-started-with-data-driven-building-operations/?utm_source=meleads&utm_medium=email&utm_campaign=novnewsletter"
            target="_blank"
          >
            <span>Facilio Blog:</span>
          </a>
          How to Get Started with Data-Driven Building Operations
        </div>
        <div class="fc-newspaper-txt">
          <a
            href="https://facilio.com/blog/how-facility-managers-can-win-today/?utm_source=meleads&utm_medium=email&utm_campaign=novnewsletter"
            target="_blank"
          >
            <span>Facilio Blog:</span>
          </a>
          How Facility Managers Can Win in Today’s Reality
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
    Footer,
  },
  head() {
    return {
      title: "November Issue | Facilio",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            " When HR professional Arte Nathan vacationed at Four Seasons in Paris,he had no idea the hotel would inspire a new story he would share at every HR convention he’d ever attend.",
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "October Issue | Facilio",
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            " When HR professional Arte Nathan vacationed at Four Seasons in Paris, he had no idea the hotel would inspire a new story he would share at every HR convention he’d ever attend.",
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "https://facilio.com/images/og-images/newsletter-og.png",
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/resources/newsletter",
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary",
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "October Issue | Facilio",
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            " When HR professional Arte Nathan vacationed at Four Seasons in Paris, he had no idea the hotel would inspire a new story he would share at every HR convention he’d ever attend.",
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "https://facilio.com/images/og-images/newsletter-og.png",
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content: "https://facilio.com/resources/newsletter",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/resources/newsletter",
        },
      ],
    };
  },
};
</script>
<style type="text/css">
body {
  font-family: Helvetica, "Roboto", Arial, sans-serif !important;
}
</style>
