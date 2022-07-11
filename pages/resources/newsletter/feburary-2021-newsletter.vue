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
          <p>Feburary 2021</p>
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
          Imagine it’s 2030. And an online shopping customer is posed with these
          questions-
        </div>
        <div class="fc-newspaper-txt">
          Do you want more selection?
        </div>
        <div class="fc-newspaper-txt">
          Do you want faster shipping?
        </div>
        <div class="fc-newspaper-txt">
          Do you want lower prices?
        </div>
        <div class="fc-newspaper-txt">
          As someone accustomed to buying online, you can right away say the
          answer will be an emphatic ‘yes’ to all of these.
        </div>
        <div class="fc-newspaper-txt">
          It's interesting how the fundamental preferences of the future
          consumer will stay the same as today's demands. Some things are basic
          and won't change.
        </div>
        <div class="fc-newspaper-txt">
          But how many of today's online retailers are tightening their nuts and
          bolts around getting their basics right?
        </div>
        <div class="fc-newspaper-txt">
          Amazon is.
        </div>

        <div class="fc-news-img">
          <img src="/images/newsletter/feburary/amazon.jpg" />
        </div>
        <div class="fc-newspaper-txt">
          <span style="font-family: ProximaNovaBold;color: #181b3b;"
            >Right from its inception, the e-commerce giant invested its energy
            into building a strong core - focussing on what won’t change.</span
          >
          Instead of redoing things at every opportunity of growth, they made
          strides down the same path they had started.
        </div>

        <div class="fc-newspaper-txt">
          Amazon had a clear vision of things people are going to want today and
          in the foreseeable future. "And spinning those things up", according
          to its CEO, Jeff Bezos, "will still be paying off dividends for
          customers 10 years from now."
        </div>

        <div class="fc-newspaper-txt">
          They offered a vast selection of products at competitive prices and
          rolled out no hassle returns. As Amazon breezed through free shipping
          and convenience, its competitors scrambled to keep pace. Though
          same-day and next-day delivery looked enticing, it called for a quick
          remodeling of business strategies. And these retailers were not
          prepared for something like this.
        </div>

        <div class="fc-newspaper-txt">
          The result? Amazon quickly became the go-to option for a growing
          number of consumers.
        </div>

        <div class="fc-newspaper-txt">
          Just like Amazon, you can get your core competency right, by adopting
          a strong tech base for property operations. Most operatives seeking
          modern solutions deploy multiple 'start from scratch' projects; that
          are both time and cost-intensive. By leveraging data, you can avoid
          going down that rabbit hole altogether.
        </div>

        <div class="fc-newspaper-txt">
          This month, we have curated resources to help you make the most of
          your building data so you don't reinvent the wheel - even while
          customer demands shift.
        </div>

        <hr />
        <div class="fc-news-subhead">EXPERT INSIGHTS</div>

        <div class="fc-news-img">
          <img src="/images/newsletter/feburary/propmodo.png" />
        </div>

        <div class="fc-news-list">
          <ul>
            <li>
              <a
                href="https://www.propmodo.com/whats-stopping-innovation-in-buildings-the-overlay-approach-to-building-operations-and-management/?utm_source=meleads&utm_medium=email&utm_campaign=feb21newsletter"
                target="_blank"
              >
                <span>What’s Stopping Innovation in Buildings?</span>
              </a>
              The Overlay Approach to Building Operations and Management
            </li>
            <li>
              <a
                href="https://facilio.com/blog/for-real-estate-leaders-top-5-takeaways-from-the-smart-built-environment-forum/"
                target="_blank"
              >
                <span
                  >For Real Estate Leaders: Top 5 Takeaways from the Smart Built
                  Environment Forum</span
                >
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div class="fc-news-subhead">GOOD READS:</div>

        <div class="fc-news-img">
          <img src="/images/newsletter/feburary/memoori.png" />
        </div>

        <div class="fc-newspaper-txt">
          <a
            href="https://memoori.com/hvac-manufacturers-collaborate-with-startups-to-unlock-the-potential-of-connected-healthy-buildings/"
            target="_blank"
          >
            <span>
              HVAC Manufacturers Collaborate with Startups to Unlock the
              Potential of Connected Buildings
            </span>
          </a>
        </div>
        <div class="fc-newspaper-txt">
          <a
            href="https://www.aceee.org/blog-post/2020/12/iea-energy-efficiency-plays-notable-role-global-economic-recovery-packages"
            target="_blank"
          >
            <span>
              IEA: COVID-19 cut energy efficiency investments, but efficiency
              plays notable role in global economic recovery packages
            </span>
          </a>
        </div>
        <div class="fc-newspaper-txt">
          <a
            href="https://brec.ro/new-york-based-ai-property-platform-facilio/"
            target="_blank"
          >
            <span>
              New York based AI property platform Facilio: Romania is a key
              market in our strategic expansion
            </span>
          </a>
        </div>

        <div class="fc-news-subhead">FACILIO BLOG</div>

        <div class="fc-newspaper-txt">
          <a
            href="https://facilio.com/blog/5questionswith-a-propops-expert/?utm_source=meleads&utm_medium=email&utm_campaign=feb21newsletter"
            target="_blank"
          >
            <span
              >#5QuestionsWith Edward Ehlers, CEO of Silver Brook
              Management:</span
            >
          </a>

          Learn new approaches to dealing with and driving change in the
          reshaped RE industry.
        </div>
        <div class="fc-newspaper-txt">
          <a
            href="https://facilio.com/blog/5questionswith-an-iot-expert/?utm_source=meleads&utm_medium=email&utm_campaign=feb21newsletter"
            target="_blank"
          >
            <span
              >#5QuestionsWith Phillip Kopp, CEO of Conectric Networks:</span
            >
          </a>

          Learn about the challenges in the current approach to IoT in buildings
          and how property owners can overcome them.
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
      title: "March Issue | Facilio",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Imagine it’s 2030. And an online shopping customer is posed with these questions",
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
            " Imagine it’s 2030. And an online shopping customer is posed with these questions",
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
            "Imagine it’s 2030. And an online shopping customer is posed with these questions",
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
