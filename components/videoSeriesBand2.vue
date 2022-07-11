<template>
  <div class="video-series-page video-series-page2">
    <div class="workplace-feature-2">
      <div class="fc-container w-feature-wrapper">
        <div class="row fc-wrapper-pad">
          <div class="col-md-7">
            <a href="/futureproof/covid-19-educational-series/" target="blank">
              <div class="fc-cre-band-desc">
                <span>
                  REbuild Video Series
                </span>
                <h3>Emerge Stronger on the Other Side, Together.</h3>
                <p>As you gear up for the new normal, at Facilio, we've created an educational platform to open up dialogue and collaborate with the best minds in the industry. Join 100s of other REbuild leaders who are learning to meet post-pandemic operational demands. </p>
              </div>
              <div class="fc-cre-band-cta">Watch Now</div>
            </a>
          </div>
          <div class="col-md-5 video-series-img">
            <div class="product-img"><img src="/images/videoseries.png"
                alt="Connect disparate data sources " title="Connect disparate data sources" style="max-width: 600px;">
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<style scoped>
  .video-series-page2 .product-img {
    margin-left: 50px;
  }

  .video-series-page2 .w-feature-wrapper{
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .workplace-feature-2 {
    padding: 0 !important;
    background-color: #f2f7fe;
  }

  .w-feature-wrapper {
    padding: 0 !important;
  }

  .fc-wrapper-pad {
    padding: 0 !important;
  }

  .fc-cre-band {
    min-height: 450px;
    left: 0;
    right: 0;
    background-size: cover !important;
    background: url("/images/cre-band.svg");
    background-repeat: no-repeat;

  }

  .fc-cre-band a {
    text-decoration: none;
  }

  .fc-cre-band-desc {
    text-decoration: none;
    padding: 50px 0px 0px 0px;
  }

  .fc-cre-band-desc span {
    font-size: 26px;
    font-family: "ProximaNovaBold", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 20px;
    font-weight: 600;
    color: #ff3184;

  }

  .fc-cre-band-desc h3 {
    font-family: Merriweather;
    font-size: 40px;
    max-width: 600px;
    line-height: 1.28;
    width: 100%;
    color: #181b3b;
  }

  .fc-cre-band-desc p {
    max-width: 526px;
    width: 100%;
    font-family: "ProximaNovaRgRegular", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol" !important;
    font-size: 18px;
    line-height: 1.78;
    color: #181b3b;
  }

  .fc-cre-band-cta {
    font-size: 16px;
    font-weight: 600;
    font-family: 'ProximaNovaSemiBold';
    line-height: 1;
    margin-top: 30px;
    color: #3269d6;
  }

  .fc-case-cta-black:after {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    position: absolute;
    margin-top: 5px;
    margin-left: 10px;
    opacity: 1;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
    background: url(/images/icons/arrow-right-black.png) center/contain no-repeat;
  }

  .fc-cre-band-cta:after {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    position: absolute;
    margin-top: 0px;
    margin-left: 10px;
    opacity: 1;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
    background: url(/images/icons/videoSeriesBlueArrow.svg) center/contain no-repeat;
  }

  .fc-cre-band-cta:hover:after,
  .fc-cre-band-desc:hover~.fc-cre-band-cta:after {
    -webkit-transform: translateX(4px);
    -ms-transform: translateX(4px);
    transform: translateX(4px);
  }

  .video-series-page .product-img {
    margin-top: 0;
  }

  @media screen and (max-width: 991px) {
    .product-img {
      display: none;
    }
  }

  @media screen and (max-width: 769px) {
    .video-series-img {
      margin: 10px;
    }
  }

  @media screen and (max-width: 450px) {
    .fc-cre-band {
      height: 500px;
      padding: 10px;
      background: url(/images/cre-band-mobile.svg);
      background-repeat: no-repeat;
    }

    .fc-cre-band-desc h3 {
      font-size: 22px;

    }

    .fc-cre-band-desc p {
      font-size: 15px;
    }

    .fc-cre-band-desc {
      padding: 30px 0px 0px 0px;
    }
  }
</style>