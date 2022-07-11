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
          <p>September 2020</p>
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

        <div class="fc-news-head">The financial meltdown in 2008 battered businesses all over the world—and Starbucks was one of them.</div>
        <div class="fc-newspaper-txt">Hundreds of locations were closed.</div>
        <div
          class="fc-newspaper-txt"
        >Thousands of employees were laid off.</div>
        <div
          class="fc-newspaper-txt"
        >They saw nearly a 30% dip in profits.</div>
        <div class="fc-news-img">
          <img src="/images/newsletter/september/starbucks.jpg" />
        </div>
        <div
          class="fc-newspaper-txt"
        >
        Starbucks knew it was no time for business as usual—it was time to re-brew their operational strategies.
        </div>
        <div
          class="fc-newspaper-txt"
        >But unlike its competitors, they took a fresh approach to align their operations to a changed world. They took bold steps to <b style="font-family: ProximaNovaBold;">revive the customer experience and provide new value.</b></div>
        <div class="fc-newspaper-txt">From engaging on social media to new and improved customer loyalty cards to iPhone apps, Starbucks innovated to give customers a personalized and interactive experience.</div>
        <div class="fc-newspaper-txt fwbold">Initiatives like <i>My Starbucks Idea</i> and <i>MyStarbucksSignature</i> instantly struck a chord with customers. The brand showed it valued every one of them.</div>
        <div
          class="fc-newspaper-txt" style="font-family: ProximaNovaBold;"
        >One cup. One customer. One experience at a time.</div>
        <div class="fc-newspaper-txt">
          Needless to say, Starbucks turned its business around. And continues to lead the pack with revenues of over $24 billion and 28,000 stores worldwide.
        </div>
        <div class="fc-newspaper-txt">Fast forward to today.</div>
        <div class="fc-newspaper-txt">As a real estate professional, you can probably relate to the challenges Starbucks faced a decade ago. And like Starbucks, you can succeed in this down market by pivoting to focus squarely on your customers.</div>
        <div class="fc-newspaper-txt">This month's resources will show you how to reignite brand trust by swiftly responding to evolving customer needs.</div>
        <hr />
        <div class="fc-news-subhead">EXPERT INSIGHTS</div>

        <div class="fc-news-img">
          <img src="/images/newsletter/september/leaders-guide.jpg" />
        </div>

        <div class="fc-news-list">
          <ul>
            <li>
              <a
                href="https://facilio.com/real-estate-leaders-guide/?utm_source=meleads&utm_medium=email&utm_campaign=septnewsletter"
                target="_blank"
              >
                <span>How to rebuild, retool, and reopen buildings during a global pandemic [Leader’s Guide]</span>
              </a>
            </li>
            <li>
              <a
                href="https://facilio.com/futureproof/covid-19-educational-series/?utm_source=meleads&utm_medium=email&utm_campaign=septnewsletter"
                target="_blank"
              >
                <span>Rebuild video series episode 5: Transitioning to a data-first real estate strategy - Challenges and opportunities ahead.</span>
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div class="fc-news-subhead">GOOD READS</div>

        <div class="fc-news-img">
          <img src="https://blog.facilio.com/wp-content/uploads/2020/08/118316574_697514570832426_516240980712968524_o.png" />
        </div>

        <div class="fc-news-list">
          <ul>
            <li>
              <a
                href="https://www.forbes.com/sites/forbesrealestatecouncil/2020/08/17/15-steps-landlords-can-take-to-build-a-great-relationship-with-tenants/#61ec2c767644"
                target="_blank"
              >
                <span>15 steps property owners can take to build a great relationship with tenants</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.theinvestor.jll/news/world/others/why-real-estate-transparency-is-harder-to-achieve-than-ever"
                target="_blank"
              >
                <span>How tenant experience can attract and retain</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.mepmiddleeast.com/business/75667-focus-must-be-on-occupants-as-opposed-to-just-occupied-spaces"
                target="_blank"
              >
                <span>Focus must be on occupants as opposed to just occupied spaces</span>
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div class="fc-news-subhead">ARTICLES TO HELP YOU LEVEL UP</div>
        <div class="fc-newspaper-txt">
          <a
            href="https://blog.facilio.com/insights-from-pandemic-mode-dashboard/?utm_source=meleads&utm_medium=email&utm_campaign=septnewsletter"
            target="_blank"
          >
            <span>Facilio Blog:</span>
          </a> How to drive quick action during uncertain times: KPIs on disinfection, air quality, distancing and more
        </div>
        <div class="fc-newspaper-txt">
          <a
            href="https://blog.facilio.com/reimagining-the-office/?utm_source=meleads&utm_medium=email&utm_campaign=septnewsletter"
            target="_blank"
          >
            <span>Facilio Blog:</span>
          </a> Reimagining the office: what property operators need to know post-pandemic?
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
            "The financial meltdown in 2008 battered businesses all over the world—and Starbucks was one of them."
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
            "The financial meltdown in 2008 battered businesses all over the world—and Starbucks was one of them."
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
            "The financial meltdown in 2008 battered businesses all over the world—and Starbucks was one of them."
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