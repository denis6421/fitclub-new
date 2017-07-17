$(".headerbtn1").click(function() {
  $(".main_section").hide();
  $("footer").hide();
  $(".container").fadeOut(function() {
    $(".container").load("home.html", function() {
    $(".container").fadeIn(700);
    $("footer").fadeIn(2000);


    });
  });
});

$(".headerbtn2").click(function() {
  $(".main_section").hide();
  $("footer").hide();
  $(".container").fadeOut(function() {
    $(".container").load("results.html", function() {
      $(".container").fadeIn(700);
        $("footer").fadeIn(2000);

    });
  });
});
$(".headerbtn3").click(function() {
  $(".main_section").hide();
  $("footer").hide();
  $(".container").fadeOut(function() {
    $(".container").load("schedule.html", function() {
      $("footer").fadeIn(2000);
      $(".container").fadeIn(700);

    });
  });
});

$(".headerbtn4").click(function() {
  $(".main_section").hide();
  $("footer").hide();
  $(".container").fadeOut(function() {
    $(".container").load("contact.html", function() {
      $("footer").fadeIn(2000);
      $(".container").fadeIn(700);

    });
  });
});

var selector = 'header ul li ';

$(selector).on('click', function() {
  $(selector).removeClass('active');
  $(this).addClass('active');
});

$(".menu-button").click(function(){
  $(".mobile_header").slideToggle("slow").toggleClass("show");
});
$(".mobile_bar>li").click(function(){
  $(".mobile_header").slideToggle("slow").toggleClass("show");
});


$(window).resize(function() {
   if ($(window).width() > 955) {
  $(".mobile_header").slideUp("slow");
}
});
