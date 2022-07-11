<template>
  <div class="press-release-content">
    <div class="media">
      <div class="press-content">
        <nuxt-link class="media-link" v-bind:to="link">{{description}}</nuxt-link>
        <p class="media-info">{{timestamp}}</p>
      </div>
    </div>
    <div class="border-bottom2"></div>
  </div>
</template>
<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    timestamp: {
      type: String,
      required: true
    }
  }
};
</script>