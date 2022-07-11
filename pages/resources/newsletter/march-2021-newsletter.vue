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
          <p>March 2021</p>
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
          This month, let’s travel back in time. To 2010.
        </div>
        <div class="fc-newspaper-txt">
          The world just saw the first iPad, everyone used Facebook, and if you
          wanted to watch a movie, the internet would help you watch it from the
          comfort of your home.
        </div>
        <div class="fc-newspaper-txt">
          And yet, when you needed to make a trip across town (and didn’t own a
          car), the internet couldn’t have helped you. Not yet, anyway. Getting
          lifts and being on time was a risky situation. Even when you booked a
          taxi, they showed up late causing delays despite no traffic.
        </div>
        <div class="fc-newspaper-txt">
          Fast forward to a year later —thousands of cars zoomed across the
          city, much more than average.
          <span style="font-family: ProximaNovaBold;color: #181b3b;">
            The better part of the population had yet to own their vehicle and
            still traveled as if they did own one.
          </span>
        </div>
        <div class="fc-newspaper-txt">
          How? The answer lies in what would soon become a household name, Uber.
        </div>

        <div class="fc-news-img">
          <img src="/images/newsletter/november/uber-dashboard.jpeg" />
        </div>
        <div class="fc-newspaper-txt">
          In 2012, the number of people using Uber grew phenomenally. The app
          established a direct connection between passengers and drivers,
          <span style="font-family: ProximaNovaBold;color: #181b3b;"
            >all without owning a single vehicle.</span
          >
          You now know how incredibly hassle-free it is to get across town.
        </div>

        <div class="fc-newspaper-txt">
          Uber went on to not only create viable employment opportunities for
          drivers but also many benefits for urban middle-class passengers. By
          building a new business model, Uber transferred immense value to all
          parties involved, plus, giving rise to a new breed of aggregator
          platform benefiting different aspects of life. All of this made Uber a
          stellar success—even going so far as to include boats, helicopters,
          and self-driving cars into their fleet of transportation options.
        </div>

        <div class="fc-newspaper-txt">
          Uber showed how tremendous value could be unlocked by tapping into
          existing resources; without acquiring new assets.
        </div>

        <div class="fc-newspaper-txt">
          As property operators, now you too have the opportunity to provide
          value by harnessing the full potential of your existing systems;
          without going through the ordeal of new operational investment. By
          embracing tools of technology.
        </div>

        <div class="fc-newspaper-txt">
          Just like Uber, you can deliver excellent service to your tenants
          simply by enhancing performance and processes you already have in
          place.
        </div>

        <div class="fc-newspaper-txt">
          This month, we've curated resources to help you strategize and utilize
          all your resources to refine your portfolio operations and offer
          multi-fold value.
        </div>

        <hr />
        <div class="fc-news-subhead">EXPERT INSIGHTS</div>

        <div class="fc-news-img">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AlxzKJKaALQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div class="fc-news-list">
          <ul>
            <li>
              <a
                href="https://www.youtube.com/watch?v=AlxzKJKaALQ&ab_channel=JamesDice"
                target="_blank"
              >
                <span
                  >The Nexus Podcast: Rajavel Subramanian on the 3 types of
                  software silos and how the overlay helps:</span
                >
              </a>
              Watch Raj and James deep dive on the overlay option, including the
              types of overlays in the market and why they’re excited about the
              hybrid overlay approach.
            </li>
            <li>
              <a
                href="https://facilio.wistia.com/medias/e3k0ttkoxs"
                target="_blank"
              >
                <span>Unlocking the Potential of IoT in Buildings:</span>
              </a>
              Watch Phillip Kopp, CEO of Conectric Networks and Rajavel
              Subramanian discuss how technology is going to play a huge role
              when buildings start to reach full occupancy.
            </li>
            <li>
              <a
                href="https://facilio.wistia.com/medias/xxeko72mlo"
                target="_blank"
              >
                <span
                  >Smart Buildings Showcase III: Projects featuring leading-edge
                  technology, integration, and connectivity:</span
                >
              </a>
              These projects demonstrate what is possible when fully utilizing a
              company-wide strategy, big data, and an ecosystem of partners to
              produce the best buildings and workspaces.
            </li>
          </ul>
        </div>
        <hr />
        <div class="fc-news-subhead">GOOD READS:</div>

        <div class="fc-news-img">
          <img src="/images/newsletter/feburary/sale.png" />
        </div>

        <div class="fc-newspaper-txt">
          <a
            href="https://www.propmodo.com/the-fall-and-rise-of-pandemic-era-retail-real-estate/"
            target="_blank"
          >
            <span>
              The Fall and Rise of Pandemic-Era Retail Real Estate
            </span>
          </a>
        </div>

        <div class="fc-news-subhead">FACILIO BLOG</div>

        <div class="fc-newspaper-txt">
          <a
            href="https://facilio.com/blog/smart-building-success-needs-a-new-improved-system-integration-model-heres-why/?utm_source=meleads&utm_medium=email&utm_campaign=mar21newsletter"
            target="_blank"
          >
            <span
              >Smart building success needs a new & improved system integration
              model - Here’s why:</span
            >
          </a>

          Rajavel shares his insights on how to overcome the bottlenecks of
          integrating your existing systems to new emerging technologies.
        </div>
        <div class="fc-newspaper-txt">
          <a
            href="https://facilio.com/blog/why-you-need-to-extract-more-value-from-your-building-data-and-analytics/?utm_source=meleads&utm_medium=email&utm_campaign=mar21newsletter"
            target="_blank"
          >
            <span
              >Why you need to extract more value from your building data and
              analytics:
            </span>
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
          content: "This month, let’s travel back in time. To 2010",
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "October Issue | Facilio",
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content: " This month, let’s travel back in time. To 2010",
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
          content: "This month, let’s travel back in time. To 2010",
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
