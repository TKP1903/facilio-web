<template>
  <div
    class="modal modal-bg"
    id="myModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myModalLabel"
  >
    <button type="button" class="close" data-dismiss="modal">x</button>
    <div class="modal-dialog" role="document" style="max-width:1000px;width:100%">
      <div class="modal-body">
        <div class="modal-content">
          <iframe
            id="iframeYoutube"
            style="max-width:1000px;width:100%;height:500px;"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function() {
    $(document).ready(function() {
      $("#videoModal").on("hidden.bs.modal", function() {
        $("#iframeYoutube").attr("src", "");
      });
    });
  }
};
</script>