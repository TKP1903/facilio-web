$(document).ready(function() {
  var s = $(".sticker");
  var pos = s.position();
  $(window).scroll(function() {
    var windowpos = $(window).scrollTop();
    if (pos) {
      if ((windowpos >= pos.top) & (windowpos <= 2000)) {
        s.addClass("stick");
      } else {
        s.removeClass("stick");
      }
    }
  });
});
