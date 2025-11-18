//make the creature react
$("#creature").hover(
  function() { $("#status").text("You’re close... 👀"); }
  function() { $("#status").text("You left me :("); }
);
