<template>
  <div class="col-md-4 col-sm-6">
    <a v-bind:href="link" target="_blank">
      <div class="fc-events-card">
        <div class="fc-event-card-img">
          <img v-bind:src="`/images/events/${image}`" />
        </div>
      
        <h3 class="name"> {{name}} </h3>
      <h4>{{ timestamp }}</h4>
      <h5 class="first">{{ booth }}</h5>
      <p class="fc-event-place">{{ address }}</p>
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
    name: {
      type: String,
    },
    image: {
      type: String,
      required: true
    },
    timestamp: {
      type: String,
      required: true
    },
    booth: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    }
  }
};
</script>
<style>
.name{
  font-size: 23px;
    font-family: 'ProximaNovaSemibold';
    color: #000000;
    margin-top: 30px;


}

</style>
