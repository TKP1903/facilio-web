<template>
  <div class="productPage btn-shade">
    <div class="myPage" id="myPage">
      <Navbar />
      <!-- <section class="fc-404">
        <div class="fc-404-image-sec">
        <img class="fc-404-image" src="/images/404.png">
        <div class="fc-404-float-card">
          <h1>404</h1>
          <h3>Looks like we took a wrong turn.</h3>
          <p>Sorry, we couldn't find the page you were looking for. Let’s take you back</p>
          <div class="fc-go-back-wrapper"><nuxt-link to="/" class="fc-404-go-back">GO BACK</nuxt-link></div>
        </div>
        </div>
        <div class="fc-404-redirect-features">
          <h3>You can explore some of the popular resources among our visitors! </h3>
          <div class="container">
          <div class="row mT40">
            <div class="col-md-4">
              <div class="fc-404-feature-card">
               <h4>Facilio Success Stories</h4>
               <p>Take a look at the amazing future that awaits you - a future these companies have made their own. </p>
              </div>
            </div>
            <div class="col-md-4">
                 <div class="fc-404-feature-card">
               <h4> Talk of the town</h4>
               <p>Get a free copy of the State of CRE Operations 3.0 Report on the 2020 trends in Facilities Management. </p>
              </div>
            </div>
            <div class="col-md-4">
                  <div class="fc-404-feature-card">
               <h4>Don’t feel like exploring? </h4>
               <p>Dive in straight to our curated picks - a handful of resources primed to help hit your operational goals for 2020.  </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section> -->
      <section class="fc-404">
        <div class="fc-404-dummy-sec">
          <img class="fc-404-dummy-image" src="/images/404.svg">
          <div class="fc-404-float-dummy-card">
            <div class="row">
              <div class="col-md-12">
                <h1>404</h1>
                <h3>Looks like we took a wrong turn.</h3>
                <p>Sorry, we couldn't find the page you were looking for. Let’s take you back</p>
                <div class="fc-go-back-wrapper">
                  <nuxt-link to="/" class="fc-404-go-back">GO BACK</nuxt-link>
                </div>
              </div>
              <div class="col-md-12">
                <div class="fc-404-redirect-dummy-features">
                  <div class="row mT40">
                    <div class="col-md-4">
                      <nuxt-link to="/resources/case-study/">
                        <div class="fc-404-feature-card">
                          <h4>Facilio Success Stories</h4>
                          <p>Take a look at the amazing future that awaits you - a future these companies have made
                            their own. </p>
                        </div>
                      </nuxt-link>
                    </div>
                    <div class="col-md-4">
                      <a href="https://facilio.com/blog/whats-new-with-facilio-popular-upgrades-from-the-last-year-and-whats-ahead-in-2021/"
                        target="_blank">
                        <div class="fc-404-feature-card">
                          <h4>What’s New with Facilio</h4>
                          <p>Popular upgrades from the last year and what’s ahead in 2021</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-md-4">
                      <a href="https://facilio.com/blog/gear-up-for-agile-property-operations-in-2021-best-ways-to-prepare/"
                        target="_blank">
                        <div class="fc-404-feature-card">
                          <h4> In a hurry? </h4>
                          <p>Dive straight into our curated picks—best ways to prepare and gear up for agile property
                            operations in 2021</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  </div>
</template>

<script>
  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";


  export default {

    components: {
      Navbar

    },
    head() {
      return {
        title: "404 | Facilio",
        meta: [{
          hid: "description",
          name: "description",
          content: "oops Something went wrong"
        }, ],
        link: [{
          rel: "canonical",
          href: "https://facilio.com/newsroom/facilio-in-the-news"
        }],
        script: [{
          src: "../../js/includes.js"
        }]
      };
    }
  }
</script>