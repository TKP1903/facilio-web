<template>
  <div class="col-md-4 col-sm-6" >
      <a :href="link" target="_blank">
    <div class="fc-award-card">
        <div class="fc-award-card-img">
          <img v-bind:src="`/images/events/${image}`" />
        </div>
        <div class="fc-float-bottom">
     <span>{{ year }}</span>
      <p class="fc-award-desc">{{ desc }}</p>
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
        year: {
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
