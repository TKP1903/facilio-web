<template>
  <div style="display:inline">
    <input
      type="checkbox"
      v-bind:value="inputValue"
      v-bind:id="inputId"
      class="visibility-hidden checked"
      v-bind:rel="inputId"
    />
    <label v-bind:for="inputId" class="fc-video-sec-selection pointer">
      <img src="/images/svg/plus-icon.svg" alt title class="plus-remove mR10" />
      <img src="/images/svg/tick-icon.svg" alt title class="tick-icon mR10" />
      {{ inputLabel }}
    </label>
  </div>
</template>
<script>
export default {
  props: {
    inputValue: {
      type: String,
      required: true
    },
    inputId: {
      type: String,
      required: true
    },
    inputLabel: {
      type: String,
      required: true
    }
  }
};
</script>
