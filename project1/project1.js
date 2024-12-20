const section = $(".timeline-result").offset().top;
$(window).on("scroll", function () {
  if (scrollY > section ) {
    $(".site-btn").addClass("active");
  } else {
    $(".site-btn").removeClass("active");
  }

});s