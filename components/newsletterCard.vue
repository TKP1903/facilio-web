<template>
  <div class="col-md-4 col-sm-6">
      <nuxt-link :to="link" >
    <div class="fc-newsletter-card">
        <div class="fc-newsletter-card-placeholder" :class="theme">
            <div class="fc-product-image-inner">
              <img class="fc-pd-upd-img" v-bind:src="`/images/newsletter/${image}`" />
            </div>
        </div>
        <div class="fc-product-desc-set">
      <div class="fc-month-float">{{ month }}</div>
      <h3>{{ desc }}</h3> 
    </div>
    <!-- <div class="fc-read-more">
          Read more
      </div> -->
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
      theme:  {
      type: String,
      required:true
    },
    image: {
      type: String,
      required: true
    },
    month: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  
  }
};
</script>
