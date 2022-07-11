<template>
  <div class="fc-verdantix-band">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div>
            <h3 style="max-width: 440px; line-height: 50px;margin-top: 0;">All the ways Facilio can turn your BAS data into insights</h3>
          </div>
        </div>
        <div class="col-md-7">
            <div class="fc-verdantix-desc" style="cursor: inherit;">
              <p style="font-family: ProximaNovaLtLight;">We don’t want to uproot what you have - we want to centrally connect your existing systems and make it data-driven. From BAS to sensory platforms to business apps, connect Facilio with your existing systems, and discover new ways to improve operational efficiency.</p>
            </div>
            <div>
              <a href="https://facilio-client-build.s3-us-west-2.amazonaws.com/facilio-client/guide/pdf/turning-bas-data-to-insights.pdf" target="_blank" class="fc-verdantix-cta">Check out how Facilio + Tridium maximizes efficiency at scale</a>
              </div>
              <div class="pT15">
              <a href="/integrations" class="fc-verdantix-cta">Explore 50+ integrations that offer data-driven operating models</a>
              </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/****verdantix-band***********/
.fc-verdantix-band {
  margin-top: 50px;
  padding: 90px 0px;
  background-color: #3b2f7f;
}

.verdantix-badge {
  max-width: 250px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.fc-verdantix-band a {
  text-decoration: none;
}

.fc-verdantix-band h3 {
  font-size: 32px;
  font-family: Merriweather, ProximaNovaRgRegular;
  color: #95f1fd;
}

.fc-verdantix-band p {
  font-family: ProximaNovaRgRegular;
  font-size: 18px;
  line-height: 1.67;
  padding: 10px 0px;
  color: #ffffff;
}

.fc-verdantix-cta {
  font-family: "ProximaNovaSemibold";
  font-size: 18px;
  cursor: pointer;
  color: #95f1fd;
}

.fc-verdantix-cta:hover {
  text-decoration: none;
  color: #95f1fd;
}

.fc-verdantix-desc {
  cursor: pointer;
}

.fc-verdantix-cta:after {
  content: "";
  display: inline-block;
  width: 19px;
  height: 13px;
  position: absolute;
  margin-top: 6px;
  margin-left: 8px;
  transition: 0.3s ease;
  background: url(/images/svg/right-blue.svg) center/contain no-repeat;
}

.fc-verdantix-cta:hover:after,
.fc-verdantix-desc:hover ~ .fc-verdantix-cta:after {
  -webkit-transform: translateX(4px);
  -ms-transform: translateX(4px);
  transform: translateX(4px);
}

/****verdantix-band***********/

@media screen and (max-width: 500px) {
  .verdantix-badge {
    max-width: 160px;
    width: 100%;
    padding: 0px 20px;
  }
  .fc-verdantix-desc,
  .fc-verdantix-cta {
    padding: 0px 15px;
  }
}
</style>