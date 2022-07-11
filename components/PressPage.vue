<template>
  <div class="myPage" id="myPage">
    <div id="fc-header"></div>
    <!-- home banner section -->
    <div class="press-details-home-banner">
      <div class="press-home-wrap container">
        <div class="row">
          <div class="col-md-7" v-html="bannerText">
            <p class="press-date-txt">{{ timestamp }}</p>
          </div>
          <div class="col-md-5">
            <img class="pressimg" src="/images/press-release.jpg" />
          </div>
        </div>
      </div>
    </div>
    <!-- home banner end -->

    <!-- facilio content  start-->
    <section>
      <div class="legal-main">
        <div class="privacy-content-container">
          <div class="two-thirds">
            <div class="legal-sidebar">
              <nav>
                <ul class="nav-list-ul mobile-list-ul">
                  <li class="nav-list-item">
                    <a v-bind:href="navLinkOne" class="nav-list-alink">{{ navTextOne }}</a>
                  </li>
                  <li class="nav-list-item">
                    <a v-bind:href="navLinkTwo" class="nav-list-alink">{{ navTextTwo }}</a>
                  </li>
                  <li class="nav-list-item">
                    <a v-bind:href="navLinkThree" class="nav-list-alink">{{ navTextThree }}</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="legal-content" v-html="innerContent"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- facilio content end -->
  </div>
</template>

<script>
export default {
  props: {
    bannerText: {
      type: String,
      required: true
    },
    timestamp: {
      type: String,
      required: true
    },
    navLinkOne: {
      type: String,
      required: true
    },
    navLinkTwo: {
      type: String,
      required: true
    },
    navLinkThree: {
      type: String,
      required: true
    },
    navTextOne: {
      type: String,
      required: true
    },
    navTextTwo: {
      type: String,
      required: true
    },
    navTextThree: {
      type: String,
      required: true
    },
    innerContent: {
      type: String,
      required: true
    }
  }
};
</script>
