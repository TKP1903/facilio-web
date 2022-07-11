<template>
  <h1>
    <div class="main" id="hubspotForm" v-once></div>
  </h1>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", this.onLoad);
  },
  methods: {
    onLoad() {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "21672176",
          formId: "ea1ba5b4-cb56-4fd8-b76e-81d72aefb4a6",
          target: "#hubspotForm",
          onFormSubmitted: () => {
            window.location.href = "/thankyou-for-your-interest";
          },
        });
      }
    },
  },
};
</script>
<style scoped>
.main {
  padding: 0px 30px;
}
.hs-main-font-element > h1 {
  font-family: "ProximaNovaSemibold";
}
.input {
  margin: 100px !important;
}
</style>
