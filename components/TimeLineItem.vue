<template>
  <li>
    <div v-bind:class="timelineStyle">
      <time>{{ timestamp }}</time>
      {{ text }}<br>
       {{ text2}}<br>
        {{ text3 }}<br>
         {{ text4 }}
    </div>
  </li>
</template>

<script>
export default {
  props: {
    timelineStyle: {
      type: String
    },
    timestamp: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
     text2: {
      type: String,
      required: true
    },
     text3: {
      type: String,
      required: true
    },
     text4: {
      type: String,
      required: true
    }
  }
};
</script>
