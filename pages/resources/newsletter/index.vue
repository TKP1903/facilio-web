<template>
  <div class="productPage btn-shade newsletter-page-con">
    <div id="productPage"></div>
    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>

      <section class="fc-newsletter-banner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="190"
          class="fc-vertical-news-dots hidden-xs"
        >
          <path
            fill="#f7cfdf"
            fill-rule="evenodd"
            d="M88.811 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177A3.182 3.182 0 0192 92.344a3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 70.11a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177A3.182 3.182 0 0192 47.877a3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 25.643a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0188.811.233 3.182 3.182 0 0192 3.41a3.182 3.182 0 01-3.189 3.176zM67.858 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233A3.182 3.182 0 0164.67 3.41 3.182 3.182 0 0167.858.233a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM45.994 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0145.994.233a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM25.041 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0125.04 44.7a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0125.04.233a3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zM4.088 95.52a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234A3.182 3.182 0 01.899 70.11a3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176A3.182 3.182 0 014.088 44.7a3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233A3.182 3.182 0 01.899 3.41 3.182 3.182 0 014.088.233 3.182 3.182 0 017.276 3.41a3.182 3.182 0 01-3.188 3.176zM88.81 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 135.96a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zM67.858 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM45.994 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM25.041 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM4.088 228.07a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176z"
          ></path>
        </svg>
        <div class="container">
          <h1>Facilio Newsletter</h1>
          <!-- Begin Mailchimp Signup Form -->
          <div id="mc_embed_signup">
            <form
              action="https://facilio.us18.list-manage.com/subscribe/post?u=27c202586edf8e852296a9faf&amp;id=3a8a932bdc"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank"
              novalidate
            >
              <div id="mc_embed_signup_scroll">
                <div class="indicates-required">
                  <span class="asterisk">*</span> indicates required
                </div>
                <div class="mc-field-group">
                  <label for="mce-EMAIL"
                    >Email Address <span class="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    value=""
                    name="EMAIL"
                    class="required email"
                    id="mce-EMAIL"
                  />
                </div>
                <div id="mce-responses" class="clear">
                  <div
                    class="response"
                    id="mce-error-response"
                    style="display:none"
                  ></div>
                  <div
                    class="response"
                    id="mce-success-response"
                    style="display:none"
                  ></div>
                </div>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div
                  style="position: absolute; left: -5000px;"
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_27c202586edf8e852296a9faf_3a8a932bdc"
                    tabindex="-1"
                    value=""
                  />
                </div>

                <div class="clear">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button"
                  />
                </div>
              </div>
            </form>
          </div>
          <script
            type="text/javascript"
            src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
          ></script>
          <script type="text/javascript">
            (function($) {
              window.fnames = new Array();
              window.ftypes = new Array();
              fnames[0] = "EMAIL";
              ftypes[0] = "email";
            })(jQuery);
            var $mcj = jQuery.noConflict(true);
          </script>
          <!--End mc_embed_signup-->
        </div>
      </section>
      <section class="fc-product-update-area">
        <div class="fc-container">
          <div class="row">
            <ProductUpdateCard
              v-for="item in ProductUpdate"
              v-bind:key="item.link"
              v-bind:link="item.link"
              v-bind:image="item.image"
              v-bind:month="item.month"
              v-bind:desc="item.desc"
              v-bind:theme="cardtheme[item.themes]"
            />
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import ProductUpdateCard from "../../../components/newsletterCard";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default {
  data() {
    return {
      ProductUpdate: [
        {
          themes: 10,
          link: "/resources/newsletter/march-2021-newsletter",
          image: "march-2021-news.png",
          month: "March 2021",
          desc: "This month, let’s travel back in time. To 2010.",
        },
        {
          themes: 9,
          link: "/resources/newsletter/feburary-2021-newsletter",
          image: "feburary-2021-news.png",
          month: "Feburary 2021",
          desc:
            "Imagine it’s 2030. And an online shopping customer is posed with these questions",
        },
        {
          themes: 8,
          link: "/resources/newsletter/november-2020-newsletter",
          image: "november-2020-news.png",
          month: "November 2020",
          desc:
            "Did you know that customer success is a science? When Arte Nathan, an HR professional, vacationed at Four Seasons in Paris, little did he know..",
        },
        {
          themes: 7,
          link: "/resources/newsletter/october-2020-newsletter",
          image: "october-2020-news.png",
          month: "October 2020",
          desc:
            "In 1987, the Aluminum Company of America—popularly known as Alcoa—was going through a rough patch.",
        },
        {
          themes: 6,
          link: "/resources/newsletter/september-2020-newsletter",
          image: "sep-2020-news.png",
          month: "September 2020",
          desc:
            "The financial meltdown in 2008 battered businesses all over the world—and Starbucks was one of them.",
        },
        {
          themes: 5,
          link: "/resources/newsletter/august-2020-newsletter",
          image: "aug-2020-news.png",
          month: "August 2020",
          desc:
            "Will it rain tomorrow? When was AI invented? What is herd immunity?",
        },
        {
          themes: 4,
          link: "/resources/newsletter/july-2020-newsletter",
          image: "july-2020-news.png",
          month: "July 2020",
          desc: "It was another day of sweating it out on the training ground.",
        },
        {
          themes: 3,
          link: "/resources/newsletter/march-2020-newsletter",
          image: "march-2020-news.png",
          month: "March 2020",
          desc: "How to teach yourself hard things during hard times",
        },
        {
          themes: 1,
          link: "/resources/newsletter/february-2020-newsletter",
          image: "february-2020-news.png",
          month: "February 2020",
          desc: "The real history of proptech and where it is headed",
        },
        {
          themes: 2,
          link: "/resources/newsletter/january-2020-newsletter",
          image: "january-2020-news.png",
          month: "January 2020",
          desc:
            "Towards a prosperous 2020: A new key to unlock your portfolio intelligence",
        },
        //   {
        //   themes: 3,
        //   link: "/newsletter/november-2019-newsletter",
        //   image: "november-2019-news.png",
        //   month: "November 2019",
        //   desc: "Help us help you grow 🚀. Tips to improve your facilities (+ a guide inside)📗"
        // },
      ],
      cardtheme: {
        1: "news-theme-1",
        2: "news-theme-2",
        3: "news-theme-3",
        4: "news-theme-4",
        5: "news-theme-5",
        6: "news-theme-6",
        7: "news-theme-7",
        8: "news-theme-8",
        9: "news-theme-9",
        10: "news-theme-10",
      },
    };
  },
  components: {
    ProductUpdateCard,
    Navbar,
    Footer,
  },
  methods: {
    name() {},
  },
  head() {
    return {
      title: "Facilio Newsletters",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "A digest of the latest trends and insights about the real estate and proptech space. Stay informed about the market trends and technology.",
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "Facilio Newsletters",
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            " A digest of the latest trends and insights about the real estate and proptech space. Stay informed about the market trends and technology.",
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "/images/og-images/newletter-og.png",
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content: "https://facilio.com/resources/newsletter",
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Facilio Newsletters",
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            " A digest of the latest trends and insights about the real estate and proptech space. Stay informed about the market trends and technology.",
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "/images/og-images/newletter-og.png",
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
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn-images.mailchimp.com/embedcode/classic-10_7.css",
        },
      ],
      script: [
        {
          src: "../../js/page.js",
        },
        {
          src: "../../js/waypoints.min.js",
        },
        {
          src: "../../js/includes.js",
        },
      ],
    };
  },
};
</script>

<style>
.fc-newsletter-card {
  margin: 50px 10px 0px;
  height: 520px;
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    -webkit-transform 0.3s ease;
  border-radius: 5px;
  background-color: #ffffff;
}

.fc-newsletter-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.1);
}

.fc-newsletter-card-placeholder {
  height: 305px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: relative;
}

.fc-newsletter-card:hover {
  box-shadow: 0 12px 18px rgba(161, 166, 181, 0.2);
}

.fc-vertical-news-dots {
  position: absolute;
  top: 180px;
  left: 0px;
  z-index: 0;
}

.news-theme-1 {
  background-color: #d8fdff;
}

.news-theme-2 {
  background-color: #fda7c985;
}

.news-theme-3 {
  background-color: #b9c6ffad;
}

.news-theme-4 {
  background-color: #fff9ee;
}

.news-theme-5 {
  background-color: #fac;
}

.news-theme-6 {
  background: #e8e5fd;
}

.news-theme-7 {
  background: #bae4f0;
}

.news-theme-8 {
  background: #fff0f5;
}

.news-theme-9 {
  background: #ffffe0;
}

.news-theme-10 {
  background: #f8f8ff;
}

.newsletter-page-con #mc_embed_signup {
  background: none;
}

.newsletter-page-con .email {
  width: 100%;
  box-shadow: 0 1px 3px 1px rgba(160, 161, 188, 0.14);
  transition: box-shadow 0.3s ease-in-out;
  border-width: 0px;
  border: none;
  color: #8d8d8d;
  display: block;
  padding-top: 14px;
  padding-bottom: 14px;
}

.newsletter-page-con
  #mc_embed_signup
  #mc-embedded-subscribe-form
  div.mce_inline_error {
  background: none;
  color: #f05a5a;
}

.newsletter-page-con #mc_embed_signup {
  clear: left;
  font: 14px Helvetica, Arial, sans-serif;
}

.newsletter-page-con #mc_embed_signup .mc-field-group {
  margin-bottom: 0;
}

.newsletter-page-con #mc_embed_signup .mc-field-group label {
  display: none;
}

.newsletter-page-con #mc_embed_signup .button {
  height: 45px;
  background-color: #ff3185;
  border-radius: 0px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.newsletter-page-con #mc_embed_signup div#mce-responses {
  position: absolute;
  top: 40px;
  line-height: 20px;
  left: 100px;
  word-break: break-word;
}

.newsletter-page-con
  #mc_embed_signup
  #mc-embedded-subscribe-form
  input.mce_inline_error {
  border: 2px solid #ff3185;
  height: 45px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.newsletter-page-con .email:focus {
  border: 2px solid #ff3185;
  outline-color: #ff3185;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  outline-width: 0;
}

#mc_embed_signup .mc-field-group input {
  display: block;
  width: 100%;
  padding: 8px 10px;
  text-indent: 2%;
  height: 45px;
  color: #324056;
  letter-spacing: 0.7px;
  font-weight: 600;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 2px solid #ff3185;
  border-right: 0;
}

.newsletter-page-con #mc_embed_signup_scroll {
  width: 100%;
  max-width: 400px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
}

.newsletter-page-con #mc_embed_signup .indicates-required {
  display: none;
}

.newsletter-page-con #mc_embed_signup #mce-success-response {
  text-align: center;
}
</style>
