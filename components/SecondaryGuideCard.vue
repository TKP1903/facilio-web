<template>
  <div class="col-md-6">
    <a v-bind:href="link">
      <div class="guide-hub-card">
        <div class="guide-hub-image">
          <img v-bind:src="`/images/guide-banners/${image}`" />
        </div>
        <div class="hub-content">
          <div class="fc-guide-info">{{ tag }}</div>
          <h3>{{ heading }}</h3>
          <p>{{ description }}</p>
          <div class="fc-actions">
            <div class="fc-guide-button">
              <div class="fc-guide-cta">{{ button }}</div>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    tag: {
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
    button: {
      type: String,
      required: true
    }
  }
};
</script>
