<template>
  <div class="fc-why-customer-card animated fadeInUp">
    <div class="pink-text-13 fwbold" style="font-family: 'ProximaNovaSemibold';">{{helperText}}</div>
    <div class="fc-homepage-card-H pT5">{{heading}}</div>
    <div class="fc-homepage-card-desc pT20">{{description}}</div>
  </div>
</template>

<script>
export default {
  props: {
    helperText: {
      type: String,
      required: true
    },
    heading: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>