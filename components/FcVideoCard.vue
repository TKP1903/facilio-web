<template>
  <div v-bind:class="filterType">
    <div class="fc-video-element-item" v-bind:data-toggle="toggleData" v-bind:data-target="target">
      <!-- <img src="../../assets/images/speaker/facilio-uros-speaker.jpg" class="speaker-radius" alt="" title="" /> -->
      <script v-bind:src="videoLink" async></script>
      <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
      <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
        <div
          class="wistia_responsive_wrapper"
          style="height:100%;left:0;position:absolute;top:0;width:100%;"
        >
          <span
            v-bind:class="modalStyle"
            style="display:inline-block;height:100%;position:relative;width:100%"
          >&nbsp;</span>
        </div>
      </div>
      <div class="flex-middle pT30 pB30 fc-video-card-flex-column">
        <div class="video-title">{{title}}</div>
        <div class="video-block-content">{{ description }}</div>
        <div class="position-relative fc-video-img">
          <img src="/images/svg/future-line.svg" class="line-img" alt title />
        </div>
      </div>
    </div>
    <!-- video dialog  -->
  </div>
</template>

<script>
export default {
  props: {
    toggleData: {
      type: String
    },
    target: {
      type: String
    },
    filterType: {
      type: String,
      required: true
    },
    videoLink: {
      type: String,
      required: true
    },
    modalStyle: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    title: {
      type: String
    }
  }
};
</script>
