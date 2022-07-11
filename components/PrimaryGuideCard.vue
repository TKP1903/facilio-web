<template>
  <div class="row">
    <div style="padding:5px 15px;">
      <a v-bind:href="link">
        <div class="guide-hub-card" style="min-height: 380px;padding:10px 0px;">
          <div class="col-md-6">
            <div class="guide-hub-image" style="max-width: 600px;">
              <img
                v-bind:src="`/images/${image}`"
                style="max-width:650px;width:100%;margin-top:30px;"
                :class="imageClass"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="hub-content">
              <div class="fc-guide-suc">{{ tag }}</div>
              <h3 style="border:none; padding: 10px 40px 0px 40px !important;">
                {{ heading }}
              </h3>
              <p>{{ description }}</p>
            </div>
            <div class="fc-actions">
              <div class="fc-guide-button">
                <div class="fc-guide-cta">{{ button }}</div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    imageClass: {
      type: String,
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
