$(".favorite-list span").click(function () {

    $(this).parent().toggleClass("read");

    if ($(this).html() == "read") {
        $(this).html("less");
    } else {
        $(this).html("read");
    }

});

$(".favorite-list").on({
  mouseenter: function(){
    $(this).css("background-color", "#DB7093");
  },
  mouseleave: function(){
    $(this).css("background-color", "rgb(239, 92, 185");
  },
});



$("a").dblclick(function(){
  $("div").animate({left: '420px'});
}); 

$("a")
    .slideUp(1000)
    .slideDown(1000);


$("a").hover(
  function() { $("#thinking").text("are you sure?"); },
  function() { $("#thinking").text("maybe not!"); },
);
