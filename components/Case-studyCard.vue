<template>
  <div class="col-md-6 col-sm-6">
      <nuxt-link :to="link" >
    <div class="fc-cs-card" >
        <div class="fc-cs-card-placeholder">
            <div class="fc-cs-image-inner">
              <img class="fc-cs-upd-img" v-bind:src="`/images/case-study/hub/${image}`" />
            </div>
        </div>
        <div class="fc-cs-product-desc-set" >
      <h3>{{ desc }}</h3> 
         <div class="fc-case-image-logo">
                        <img v-bind:src="`/images/customer-logo/${logo}`" />
                      </div>
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
    logo: {
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
