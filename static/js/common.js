$(window).on("scroll", function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 750) {
    // $('#menuHeader').removeClass('moveUp');
    $("#menuHeader")
      .removeClass("moveUp")
      .addClass("fixed");
    $(".btn-shade").addClass("down");
  } else {
    $("#menuHeader")
      .addClass("moveUp")
      .removeClass("fixed")
      .addClass("moveUp");
    $(".btn-shade").removeClass("down");
  }
});

function carouselfunction() {
  $(window).on("scroll", function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 450) {
      // $('#menuHeader').removeClass('moveUp');
      // $('#menuHeader').removeClass('moveUp').addClass('fixed');
      $("body").addClass("down");
    } else {
      // $('#menuHeader').addClass('moveUp').removeClass('fixed').addClass('moveUp');
      $("body").removeClass("down");
    }
  });
  $(document).ready(function() {
    $(".nav-tabs a").click(function(e) {
      $(this).tab("show");
      e.preventDefault();
      $(this)
        .siblings()
        .removeClass("active")
        .end()
        .addClass("active");
    });
  });
}

//  $('.carousel').carousel({
//     interval: 500
//   })

function showEnquiryForm() {
  var x = $(".demo a").offset();
  console.log("Top: " + x.top + " Left: ", x.left);
  console.log("offset", x);
  $("#enquireForm").css({
    left: x.left - 190 + "px"
  });
  $("#enquireForm").addClass("formSlideUp");
  $("#productPage").addClass("blind");
  $("#enquiryIcon").hide(100);
}
function hideEnquiryForm() {
  $("#leadFormDemo")
    .find("input[type=text], input[type=email], input[type=number]")
    .val("");
  $("#enquireForm").removeClass("formSlideUp");
  $("#productPage").removeClass("blind");
  $("#enquiryIcon").show(100);
}

var WebFormEvent = {
      afterInstall: function() {
        console.log("After hook.");
        let url = location.protocol + "//geoip-db.com/json/";
        $.getJSON(url, function(data) {
          if (data && data.country_name) {
            WebForm.$('input[name="lead[country]"]').val(data.country_name);
          }
        });
      },
      beforeSubmit:function(event){
        console.log('before submit hook is triggered')
      },
      afterSubmit: function(event, data, error) {
        console.log("After submit hook triggered.");
        console.log("Data => ", data);
        var dt = JSON.parse(data);
        var obj = dt.find(e => {
          return e.name == "lead[email]";
        });
        var email = "undefined";
        if (obj) {
          email = obj.value;
        }
        ga("send", {
          hitType: "event",
          eventCategory: "Form",
          eventAction: "contactus",
          eventLabel: email
        });
        if (error) {
          console.log("Error => ", error);
        }
        else{
          console.log("success sending data - "+email);
        }
      }
    };
