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
          <p>July 2020</p>
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

        <div class="fc-news-head">A seed of opportunity for real estate businesses in this crisis</div>
        <div class="fc-newspaper-txt">It was another day of sweating it out on the training ground.</div>
        <div
          class="fc-newspaper-txt"
        >John Register was training in track and field for the US Olympic Trials. He had been an All-American track star, won nine gold medals in the Armed Services competition, and two World Military Championships.</div>

        <div
          class="fc-newspaper-txt"
        >But with a single misstep, everything suddenly fell out of reach.</div>
        <div class="fc-news-img">
          <img src="/images/newsletter/july/july-feature-1.jpg" />
        </div>
        <p
          style="text-align: center; font-size:12px; color: #a9a9a9; margin-right: 18%;margin-top:10px"
        >Source: johnregister.com</p>
        <div
          class="fc-newspaper-txt"
        >He hyperextended his knee and suffered a serious injury. His leg had to be amputated. But worse - he felt crushed mentally thinking about the stigma associated with disabilities.</div>
        <div
          class="fc-newspaper-txt"
        >His only solace was his wife. She stood by him like a rock, instilled confidence in him, and said - "We'll get through this together. It's just our new normal."</div>
        <div class="fc-newspaper-txt">Those were the magic words.</div>
        <div class="fc-newspaper-txt">He latched on to hope. He believed what he was destined for.</div>
        <div
          class="fc-newspaper-txt"
        >John went on to win a silver medal in the Paralympics and carved himself an opportunity out of his ‘new normal’.</div>
        <div class="fc-newspaper-txt">
          He looked at life, not from the standpoint of loss, but what lay ahead in this new normal - he saw
          <b>opportunities despite the obstacles.</b>
        </div>
        <div class="fc-newspaper-txt">Opportunities are the bedrock of the real estate industry.</div>
        <div
          class="fc-newspaper-txt"
        >In an industry long known to skillfully deal with setbacks, this is the time for real estate leaders to modernize operational structures and systems, focus on what really matters, and never lose sight of innovation.</div>
        <div
          class="fc-newspaper-txt"
        >This month’s edition brings you curated insights to help you tread the new path and uncover opportunities with confidence.</div>
        <hr />
        <div class="fc-news-subhead">Expert Insights</div>

        <div class="fc-news-img">
          <img src="/images/newsletter/july/july-feature-2.png" />
        </div>

        <div class="fc-news-list">
          <ul>
            <li>
              <a
                href="https://facilio.com/futureproof/covid-19-educational-series/?utm_source=meleads&utm_medium=email&utm_campaign=julynewsletter"
                target="_blank"
              >
                <span>REbuild: How to set real estate portfolios up for success in today's changing reality?</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.propmodo.com/what-property-owners-and-operators-can-learn-from-telecom/"
                target="_blank"
              >
                <span>Propmodo: How to access centralized intelligence that’s necessary to run large operations?</span>
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div class="fc-news-subhead">Market Trends</div>

        <div class="fc-news-img">
          <img src="/images/newsletter/july/july-feature-3.png" />
        </div>

        <div class="fc-news-list">
          <ul>
            <li>
              <a
                href="https://www.jll.co.in/en/trends-and-insights/research/covid-19-global-real-estate-implications#offices"
                target="_blank"
              >
                <span>A JLL report: Practical challenges global businesses will face for re-entry.</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.bisnow.com/national/news/office/offices-competing-with-remote-work-104588"
                target="_blank"
              >
                <span>Bisnow: How will future offices compete with remote working?</span>
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div class="fc-news-subhead">GOOD READS</div>
        <div class="fc-newspaper-txt">
          <a
            href="https://blog.facilio.com/property-compliance-in-the-new-normal/?utm_source=meleads&utm_medium=email&utm_campaign=julynewsletter"
            target="_blank"
          >
            <span>Facilio Blog:</span>
          </a> Everything you need to know about compliance in property operations today (with practical examples)
        </div>
        <div class="fc-newspaper-txt">
          <a
            href="https://nexus.substack.com/p/how-a-platform-app-architecture-enables"
            target="_blank"
          >
            <span>Nexus:</span>
          </a> How does the platform architecture allow building owners to have the coveted “single pane of glass” for the portfolio?
        </div>
        <div class="fc-newspaper-txt">
          <a
            href="https://blog.facilio.com/5-ways-to-prepare-and-operate-hvac-for-the-new-guidelines/?utm_source=meleads&utm_medium=email&utm_campaign=julynewsletter"
            target="_blank"
          >
            <span>Facilio Blog:</span>
          </a> 5 ways to perform portfolio-level benchmarking of HVAC for the new guidelines
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
      title: "July Issue | Facilio",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "A seed of opportunity for real estate businesses in this crisis"
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "July Issue | Facilio"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "A seed of opportunity for real estate businesses in this crisis"
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
          content: "July Issue | Facilio"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "A seed of opportunity for real estate businesses in this crisis"
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