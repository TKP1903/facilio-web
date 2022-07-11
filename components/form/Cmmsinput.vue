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
          formId: "c1b704be-be06-425e-920c-8af703b6e5c8",
         css:"",
          target: "#hubspotForm"
        });
      }
    },
  },
};
</script>
<style >
.main {
  padding: 0px 30px;
}
.hs-form {
  display: flex;
}
.hs-form-required {
     color: #FFFFFF;
     font-weight: 400;
}
#email-c1b704be-be06-425e-920c-8af703b6e5c8::placeholder {
  font-size: 18px;
position: relative;
top: -7px;
left: 7px;  
font-family: 'ProximaNovaSemibold';
}
#hubspotForm {
  padding-left: 0;
}
#label-email-c1b704be-be06-425e-920c-8af703b6e5c8 {
  display: none;
}
.input#email-c1b704be-be06-425e-920c-8af703b6e5c8 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
#email-c1b704be-be06-425e-920c-8af703b6e5c8 {
  height: 55px;
}
.hs-button {
  padding: 19px 23px;
    font-family: 'ProximaNovaSemibold';
    text-transform: uppercase;
    font-size: 16px;
    background: #ff3184;
    color: #fff;
    border: none;
    cursor: pointer;
}
#hubspotForm {
  margin: 70px 0px;
}
.main .hs_email .hs-form-required{
  font-size: 10px;
}
</style>
