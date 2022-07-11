<template>
  <div>
    <script
      src="https://facilio.freshsales.io/web_forms/29dd5d2c0367133005d212a574ea5b04092eb9704bc417e74b8f8108401afc0b/form.js"
      crossorigin="anonymous"
      id="fs_29dd5d2c0367133005d212a574ea5b04092eb9704bc417e74b8f8108401afc0b"
    ></script>
  </div>
</template>

<script>
export default {
mounted: function() {
    //--google analytics

        (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-MFHN2HR');

  //--google analytics
},

      script: [
        { src: "../../../js/includes.js" }
      ]


};
</script>

<style scoped>
::v-deep .fserv-button-submit{
  border-radius: 3px;
  height: 50px;
}
::v-deep .fserv-form {
  border-radius: 3px;
  padding: 30px;
  position: relative;
  font-family: ProximaNovaRgRegular;
}
</style>
