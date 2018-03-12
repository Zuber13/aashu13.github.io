$(document).ready(function() {
  $(".hamburgur").on("click", function() {
    $(this).toggleClass("active");
    $("#menu_bar").toggleClass("nav-active");
  });

  $('a[href^="#"]').on("click", function(e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $("html,body").animate(
      {
        scrollTop: $target.offset().top
      },
      1000,
      "swing"
    );
  });
});
