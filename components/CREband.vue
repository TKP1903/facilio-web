<template>
<div>
<section class="fc-cre-band">
        <div class="container">
      <div class="row">
        <div class="col-md-8">
          <a
            href="/ebooks/state-of-cre-operations-2020-report"
            target="blank"
          >
            <div class="fc-cre-band-desc">
              <span>CRE 3.0 Report</span>
              <h3>The Modern Portfolio’s Guide to Data-driven Operations</h3>
              <p>This report packs strategic insights on top priorities for modern CREs, corporates and FM services in 2020, how to unify and own your operational data in real-time and measurably improve sustainability performance across portfolio.</p>
            </div>
            <div class="fc-cre-band-cta">Get the Ebook</div>
          </a>
        </div>
      </div>
    </div>
    </section>
</div>
</template>

<style>
.fc-cre-band
{
    min-height: 450px;
    left: 0;
    right: 0;
    background-size: cover !important;
    background: url("/images/cre-band.svg");
  background-repeat: no-repeat;

}
.fc-cre-band a
{
  text-decoration:none;
}
.fc-cre-band-desc
{
  padding:80px 0px 0px 0px;
  text-decoration:none;
}
.fc-cre-band-desc span
{
 font-size: 26px;
   font-family: "ProximaNovaBold", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  color: #2dc5d9;

}
.fc-cre-band-desc h3
{
    font-family: Merriweather, ProximaNovaRgRegular;
 font-weight:500;
  font-size: 32px;
  max-width:600px;
  line-height:42px;
  width:100%;
  color: #181b3b;
}
.fc-cre-band-desc p
{
max-width: 526px;
width:100%;
 font-family: "ProximaNovaRgRegular", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol" !important;
  font-size: 18px;
  line-height: 1.67;
  color: #181b3b;
}
.fc-cre-band-cta
{
  font-size: 16px;
  font-weight: 600;
   font-family: 'ProximaNovaSemiBold';
  line-height: 1;
  margin-top:30px;
  color: #FF3185;
}
.fc-case-cta-black:after
{
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
    background: url(/images/pink-arrow.svg) center/contain no-repeat;
}
.fc-cre-band:hover .fc-cre-band-cta:after {
   -webkit-transform: translateX(4px);
  -ms-transform: translateX(4px);
  transform: translateX(4px);
}




@media screen and (max-width: 450px) {
.fc-cre-band {
    height: 500px;
    padding:10px;
    background: url(/images/cre-band-mobile.svg);
    background-repeat: no-repeat;
}
.fc-cre-band-desc h3 {
    font-size: 22px;

}
.fc-cre-band-desc p
{
  font-size: 15px;
}
.fc-cre-band-desc
{
  padding:30px 0px 0px 0px;
}
}
</style>