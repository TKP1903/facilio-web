<template>
  <div class="webinar-media">
    <a :href="link" class="pointer" v-if="link || videoLink" target="_blank">
      <div v-if="imageUrl">
        <img
          :src="imageUrl"
          style="height: 279px; width: 100%;object-fit: cover;"
        />
      </div>
      <div v-if="videoLink">
        <div>
          <script :src="videoLink" async></script>
          <script
            src="https://fast.wistia.com/assets/external/E-v1.js"
            async
          ></script>
          <div
            class="wistia_responsive_padding"
            style="padding:56.25% 0 0 0;position:relative;"
          >
            <div
              class="wistia_responsive_wrapper"
              style="height:100%;left:0;position:absolute;top:0;width:100%;"
            >
              <div
                class="wistia_embed videoFoam=true"
                style="height:100%;position:relative;width:100%"
                :class="wistiaClass"
              >
                <div
                  class="wistia_swatch"
                  style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"
                >
                  <img
                    :src="videoImage"
                    style="filter:blur(5px);height:100%;object-fit:contain;width:100%;"
                    alt=""
                    aria-hidden="true"
                    onload="this.parentNode.style.opacity=1;"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fc-webinar-video-title mT10">
        {{ heading }}
      </div>
      <div class="fc-webinar-video-desc">
        {{ description }}
      </div>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    heading: {
      type: String,
    },
    description: {
      type: String,
    },
    videoLink: {
      type: String,
    },
    link: {
      type: String,
    },
    vistia: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    videoImage: {
      type: String,
    },
    wistiaClass: {
      type: String,
    },
  },
};
</script>
