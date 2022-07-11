<template>
  <div id="webinarPopup" class="fc-md-overlay">
    <a href="javascript:void(0)" class="closebtn" @click="closePopup()"
      >&times;</a
    >
    <div class="fc-md-overlay-content">
      <futureform />
    </div>
  </div>
</template>

<script>
import futureform from "../../webinar/components/FutureCmmsForm";
export default {
  components: {
    futureform,
  },
  methods: {
    closePopup() {
      document.getElementById("webinarPopup").style.display = "none";
    },
  },
};
</script>

<style>
.fc-md-overlay-content {
  top: 0 !important;
  margin-top: 0px !important;
}

.fc-md-overlay .closebtn {
  z-index: 1000 !important;
}
</style>
