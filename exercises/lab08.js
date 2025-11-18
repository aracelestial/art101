$("#creature").click(function() {
  $("#status").text("You clicked me! 🐾");
  $("#creature").css("background", "lavender");
});

$("#creature").hover(function() { $("#status").text("You’re close... 👀"); }
  function() { $("#status").text("You left me :("); }
);
