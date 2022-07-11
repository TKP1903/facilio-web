<template>
  <div class="col-md-6">
    <a v-bind:href="link">
      <div class="fc-webinar-card">
        <div class="fc-events-pink">
          <h4>
            The Next wave of
            <br />
            <span>Information Revolution</span>
            <br />is here !
          </h4>
        </div>
        <img class="fc-webinar-img" v-bind:src="`/images/events/${image}`" />
        <div class="fc-webinar-down">
          <h4>
            <span v-html="heading"></span>
          </h4>
          <p>{{ description }}</p>
          <a class="fc-arrow-events">Read More</a>
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
    heading: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>
