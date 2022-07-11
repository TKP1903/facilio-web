<template>
  <div class="col-md-4 col-sm-6">
      <a :href="link">
    <div class="fc-product-update-card">
        <div class="fc-product-card-placeholder" :style="{'background-color':color}">
            <div class="fc-product-image-inner">
              <img class="fc-pd-upd-img" v-bind:src="`/images/whatsnew/${image}`" />
            </div>
        </div>
        <div class="fc-product-desc-set">
      <div class="fc-month-float">{{ month }}</div>
      <h3>{{ desc }}</h3> 
    </div>
    <div class="fc-read-more">
          Read more
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
      color:  {
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
