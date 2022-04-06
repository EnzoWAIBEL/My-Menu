$(document).ready(function () {
  $("body").prepend("<div class='menu' style='display: none;'></div>");

  $(".menu").prepend(
    "<li style='--i:7; --clr:#ff00c0'><a href='#'><ion-icon name='planet-outline'></ion-icon></a></li>"
  );
  $(".menu").prepend(
    "<li style='--i:6; --clr:#cb00ff'><a href='#'><ion-icon name='beer-outline'></ion-icon></a></li>"
  );
  $(".menu").prepend(
    "<li style='--i:5; --clr:#002cff'><a href='#'><ion-icon name='alarm-outline'></ion-icon></a></li>"
  );
  $(".menu").prepend(
    "<li style='--i:4; --clr:#00ffe1'><a href='#'><ion-icon name='camera-outline'></ion-icon></a></li>"
  );
  $(".menu").prepend(
    "<li style='--i:3; --clr:#52ff00'><a href='#'><ion-icon name='settings-outline'></ion-icon></a></li>"
  );
  $(".menu").prepend(
    "<li style='--i:2; --clr:#fcff00'><a href='#'><ion-icon name='chatbubble-outline'></ion-icon></a></li>"
  );
  $(".menu").prepend(
    "<li style='--i:1; --clr:#ff8900'><a href='#'><ion-icon name='person-outline'></ion-icon></a></li>"
  );
  $(".menu").prepend(
    "<li style='--i:0; --clr:#ff0000'><a href='#'><ion-icon name='home-outline'></ion-icon></a></li>"
  );

  $(".menu").prepend(
    "<div class='toggle'><ion-icon name='add-outline'></ion-icon></div>"
  );

  $(".toggle").click(function () {
    $(".menu").toggleClass("active");
  });

  jQuery(function ($) {
    $("body").on("keydown", function (event) {
      let key = event.keyCode || event.charCode;
      if (key == 27) {
        $(".menu").toggle("open").toggleClass("active", false);
      }
    });
  });
});
