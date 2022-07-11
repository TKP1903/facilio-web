<template>
  <div class="panel fc-panel">
    <div
      class="panel-heading fc-panel-heading"
      data-toggle="collapse"
      data-parent="#accordion"
      v-bind:href="`#${collapseId}`"
    >
      <Arrow />
      <h4 class="panel-title fc-acc-head">{{heading}}</h4>
    </div>
    <div v-bind:id="collapseId" v-bind:class="collapseState">
      <div class="panel-body fc-acc-desc">{{description}}</div>
    </div>
  </div>
</template>

<script>
import Arrow from "./Arrow";
export default {
  components: {
    Arrow
  },
  props: {
    heading: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    collapseId: {
      type: String,
      required: true
    },
    collapseState: {
      type: String,
      required: true
    }
  }
};
</script>