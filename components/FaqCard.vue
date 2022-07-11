<template>
     <div class="col-md-4 guide">
              <nuxt-link
               v-bind:to="link"
              >
                <div class="guide-card">
                  <div class="guide-wrapper">
                    <h3 class="guide-card-title">
                    {{ heading }}
                    </h3>
                    <p class="guide-card-subhead">
                     {{ description }}
                    </p>
                    <div class="guide-start" :class="colorClass">
                      <span style="font-weight: 400;" >{{ cta_text }}</span>
                      <img
                        class="arrow-right"
                        src="/images/icons/arrow-point-to-right.png"
                      />
                    </div>
                  </div>
                  <img
                    class="guide-image"
                    v-bind:src="`/images/guide-banners/${banner_img}`"
                  />
                </div>
              </nuxt-link>
            </div>
</template>

<script>
export default {
   props: {
    link: {
      type: String,
      required: true
    },
      heading:  {
      type: String,
      required:true
    },
    description: {
      type: String,
      required: true
    },
    cta_text: {
      type: String,
      required: true
    },
    colorClass:
    {
        type: String,
      required: true  
    },
    banner_img: {
      type: String,
      required: true
    }
  
  }
}
</script>