<template>
  <div class="col-md-4">
    <div class="podacast-thumbnail">
      <div class="events-podcast-card">
        <script v-bind:src="link1" async></script>
        <script v-bind:src="link2" async></script>
        <div class="wistia_responsive_padding" style="padding:100.0% 0 0 0;position:relative;">
          <div
            class="wistia_responsive_wrapper"
            style="height:100%;left:0;position:absolute;top:0;width:100%;"
          >
            <span
              class="wistia_embed wistia_async_z7lg4b6lgt popover=true popoverAnimateThumbnail=true videoFoam=true"
              style="display:inline-block;height:100%;position:relative;width:100%"
            >&nbsp;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link1: {
      type: String,
      required: true
    },
    link2: {
      type: String,
      required: true
    }
  }
};
</script>