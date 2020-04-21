$(".hamburger").on("click", function(e) {
  $(".hamburger").toggleClass("is-active");
  $("#sidebar").toggleClass("open");
});