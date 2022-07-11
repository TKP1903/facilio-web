<template>
  <div class="partner-feature-col">
    <div class="partner-featur-icon text-left">
      <img v-bind:src="`/images/become-partner-logo/${logo}`" v-bind:style="`width:${width};`" />
    </div>
    <h5 class="partner-feature-heading text-left">{{heading}}</h5>
    <p class="partner-feature-desc text-left">
      <span v-html="description"></span>
    </p>
    <a v-bind:href="link" target="_blank" class="link">{{link}}</a>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
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
    },
    link: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    }
  }
};
</script>