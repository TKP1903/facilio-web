<template>
  <div class="container">
    <ul id="pagination" class="fc-pagination" align="center"></ul>
  </div>
</template>
<script>
export default {
  mounted: function() {
    var pageSize = 4;

    var pageCount = $(".webinar-media").length / pageSize;

    for (var i = 0; i < pageCount; i++) {
      $("#pagination").append('<li><a href="#">' + (i + 1) + "</a></li> ");
    }
    $("#pagination li")
      .first()
      .find("a")
      .addClass("current");
    let showPage = function(page) {
      $(".webinar-media").hide();
      $(".webinar-media").each(function(n) {
        if (n >= pageSize * (page - 1) && n < pageSize * page) $(this).show();
      });
    };

    showPage(1);

    $("#pagination li a").click(function() {
      $("#pagination li a").removeClass("current");
      $(this).addClass("current");
      showPage(parseInt($(this).text()));
    });
  },
};
</script>
