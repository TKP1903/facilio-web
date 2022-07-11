<template>
  <div class="col-md-4">
    <div class="fc-integration-card">
      <img
        class="integrate-img"
        v-bind:src="`/images/customer-logo/integration/${integrationImage}`"
      />
      <div class="fc-first-show">
        <h3>{{firstShowTitle}}</h3>
        <p>{{firstShowDescription}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    integrationImage: {
      type: String,
      required: true
    },
     firstShowTitle: {
      type: String,
      required: true
    },
     firstShowDescription: {
      type: String,
      required: true
    }
  }
};
</script>