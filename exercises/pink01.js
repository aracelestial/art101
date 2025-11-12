$(".favorite-list span").click(function () {

    $(this).parent().toggleClass("read");

    $(this).animate({left: '250px'});

    if ($(this).html() == "read") {
        $(this).html("less");
    } else {
        $(this).html("read");
    }

});

$("button").click(function(){
  $("div").animate({left: '500px'});
}); 