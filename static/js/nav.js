function platform()
{  
    $("#platform-content").toggleClass("contentshow");
    $("#platform").toggleClass("borderactive");
    $(".mask").addClass("backactive");


}

function solutions()
{
  $("#solution-content").toggleClass("contentshow");
  $("#solutions").toggleClass("borderactive");
  $(".mask").addClass("backactive");
}

function resources()
{
    $("#resource-content").toggleClass("contentshow");
    $("#resources").toggleClass("borderactive");
    $(".mask").addClass("backactive");

}

function partners()
{
    $("#partners-content").toggleClass("contentshow");
    $("#partners").toggleClass("borderactive");
    $(".mask").addClass("backactive");

}

function company()
{
    $("#company-content").toggleClass("contentshow");
    $("#company").toggleClass("borderactive");
    $(".mask").addClass("backactive");

}


$(function ()
{

  $(window).on("click", function (e) {
    if ($(e.target).is("#platform-content, #platform") === false) {
        $("#platform-content").removeClass("contentshow");
        $("#platform").removeClass("borderactive")
        
    }
});

  $(window).on("click", function (e) {
      if ($(e.target).is("#solution-content, #solutions") === false) {
          $("#solution-content").removeClass("contentshow");
          $("#solutions").removeClass("borderactive");
      
      }
  });

  $(window).on("click", function (e) {
      if ($(e.target).is("#resource-content, #resources") === false) {
          $("#resource-content").removeClass("contentshow");
          $("#resources").removeClass("borderactive");

      }
  });

  $(window).on("click", function (e) {
    if ($(e.target).is("#partners-content, #partners") === false) {
        $("#partners-content").removeClass("contentshow");
        $("#partners").removeClass("borderactive");

    }

  });

  
  $(window).on("click", function (e) {
    if ($(e.target).is("#company-content, #company") === false) {
        $("#company-content").removeClass("contentshow");
        $("#company").removeClass("borderactive");

    }

  });


})