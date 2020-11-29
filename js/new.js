$(".flex-item").on("click", function () {
    $(".flex-item").css("-webkit-flex", "1").removeClass("enlarged");
    $(this).css("-webkit-flex", "3").addClass("enlarged");
  });
  