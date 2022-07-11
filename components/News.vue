<template>
  <div class="media-content news-content-border">
    <div class="media">
      <div class="media-logo">
        <a v-bind:href="linkLogo" target="_blank">
          <img v-bind:src="`/images/press-logo/${logo}`" alt title />
        </a>
      </div>
      <div class="media-title pL80">
        <a class="media-link" v-bind:href="linkNews" target="_blank">{{description}}</a>
        <p class="media-info">{{timestamp}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    linkLogo: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: true
    },
    linkNews: {
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