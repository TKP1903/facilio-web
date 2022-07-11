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
          <p>October 2020</p>
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

        <div class="fc-news-img">
          <img src="/images/newsletter/october/paul.jpeg" style="height: 260px; margin-bottom: 40px; width: 200px; object-fit: cover;"/>
        </div>

        <div class="fc-news-head">In 1987, the Aluminum Company of America—popularly known as Alcoa—was going through a rough patch. As one of the largest producers of raw Aluminum, its quality was declining and growth hit an all-time low. The board appointed Paul O'Neill as the new CEO to resurrect the company.</div>
        <div class="fc-newspaper-txt">At the first investor conference, O'Neill said, "I intend to make Alcoa the safest company in America. I intend to go for zero injuries."</div>
        <div
          class="fc-newspaper-txt"
        >People were confused. There was no mention of the debt ratios. Not even revenues and expenses.</div>
        <div
          class="fc-newspaper-txt"
        >
       When questioned further, he stood his ground and said, “If you want to understand how Alcoa is doing, you need to look at our workplace safety figures.” Profits, O'Neill said, didn’t matter as much as safety.
        </div>
        <div
          class="fc-newspaper-txt"
        >But within a year of O'Neill's speech, profits hit a record high. Within a decade, the company's annual revenue quintupled, and the market valuation grew by $27 billion.</div>
        <div class="fc-newspaper-txt">How?</div>
        <div class="fc-newspaper-txt fwbold" style="font-family: ProximaNovaSemibold;">O'Neill wanted to sow seeds in the present that boosted Alcoa's long-term value.</div>
        <div
          class="fc-newspaper-txt"
        >He tackled the problem at its root, having a clear eye for Alcoa's efficiency, quality, and profitability that was fundamentally rooted in the health and safety of workers.</div>
        <div class="fc-newspaper-txt">
          He made small changes to worker safety that powered a chain reaction of growth in the long term.
        </div>
        <div class="fc-newspaper-txt">Like O’Neill, property operators are also grappling with tough decisions to overcome growth bottlenecks. And like Alcoa, you can build value and bring sustained growth by making decisions that address the future needs of your property—rather than implementing reactive or band-aid solutions.</div>
        <div class="fc-newspaper-txt">This month, we've curated resources to help you make incremental progress in the long-term by adopting solutions that are future proof.</div>
        <hr />
        <div class="fc-news-subhead">EXPERT INSIGHTS:</div>

        <div class="fc-news-img">
          <img src="/images/newsletter/october/fdd-guide.png" />
        </div>

        <div class="fc-news-list">
          <ul>
            <li>
                Learn the top criteria to consider when evaluating and benchmarking an FDD solution for your property. 
              <a
                href="https://facilio.com/resources/guide/fdd-evaluation-guide-half/?utm_source=sbsau&utm_medium=email&utm_campaign=octnewsletter"
                target="_blank"
              >
                <span>Get the comprehensive guide now.</span>
              </a>
            </li>
            <li>
              <a
                href="https://facilio.com/rebuild/product-walkthrough/?utm_source=sbsau&utm_medium=email&utm_campaign=octnewsletter"
                target="_blank"
              >
                <span>Rethink Property Operations with Data.</span>
              </a>
              Check out the video walk-through gallery of our ready-to-deploy toolkit, REbuild - everything you need to reopen with confidence and operate with agility.
            </li>
            <li>
              <a
                href="https://facilio.com/futureproof/covid-19-educational-series/?utm_source=sbsau&utm_medium=email&utm_campaign=octnewsletter"
                target="_blank"
              >
                <span>
                    REbuild Episode #6 - Using Digital to Elevate Built Asset Value and Experiences In a Changing World.
                </span>
              </a>
              Emma Hendry talks about how leading properties in Australia responded to the viral outbreak—and how digital-led business models are boosting efficiency.
            </li>
          </ul>
        </div>
        <hr />
        <div class="fc-news-subhead">ARTICLES TO HELP YOU LEVEL UP</div>

        <div class="fc-news-img">
          <img src="https://blog.facilio.com/wp-content/uploads/2020/09/Screen-Shot-2020-08-21-at-3.25.4.png" />
        </div>

        <div class="fc-news-list">
          <ul>
            <li>
              <a
                href="https://blog.facilio.com/visibility-into-building-operations-is-anything-but-straightforward-heres-why/?utm_source=sbsau&utm_medium=email&utm_campaign=octnewsletter"
                target="_blank"
              >
                <span>Visibility Into Building Operations Is Anything but Straightforward. Here’s Why.</span>
              </a>
            </li>
            <li>
              <a
                href="https://blog.facilio.com/a-new-era-of-property-operations/?utm_source=sbsau&utm_medium=email&utm_campaign=octnewsletter"
                target="_blank"
              >
                <span>A New Era of Property Operations: The Future is All About Unifying Data for Real-Time Operational Intelligence</span>
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div class="fc-news-subhead">GOOD READS:</div>
        <div class="fc-newspaper-txt">
          <a
            href="https://www.globest.com/2020/09/04/real-estate-industry-turns-to-digital-twins-to-model-back-to-work-contingencies"
            target="_blank"
          >
            <span>Facilio Blog:</span>
          </a> How Digital Twins Technology can Model Back-to-Work Contingencies
        </div>
        <div class="fc-newspaper-txt">
          <a
            href="https://www.wsj.com/articles/making-offices-safe-for-workers-and-making-money-doing-it-11600162203"
            target="_blank"
          >
            <span>Real Estate Weekly:</span>
          </a> Making Offices Safe for Workers, and Making Money Doing It
        </div>
        <div class="fc-newspaper-txt">
          <a
            href="https://rmi.org/google-shows-the-path-to-a-clean-energy-future/"
            target="_blank"
          >
            <span>Real Estate Weekly: </span>
          </a> Google Shows the Path to a Clean Energy Future
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
      title: "October Issue | Facilio",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "America—popularly known as Alcoa—was going through a rough patch. As one of the largest producers of raw Aluminum, its quality was declining and growth hit an all-time low. The board appointed Paul O'Neill as the new CEO to resurrect the company."
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "October Issue | Facilio"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "America—popularly known as Alcoa—was going through a rough patch. As one of the largest producers of raw Aluminum, its quality was declining and growth hit an all-time low. The board appointed Paul O'Neill as the new CEO to resurrect the company."
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
          content: "October Issue | Facilio"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "America—popularly known as Alcoa—was going through a rough patch. As one of the largest producers of raw Aluminum, its quality was declining and growth hit an all-time low. The board appointed Paul O'Neill as the new CEO to resurrect the company."
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