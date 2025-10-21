let count = 0;
let colors = ["orchid", "coral", "hot pink", "plum"]; 

$("#needy-button").click(function() {

    $("#needy-button").html( "Clicks: " + count + " Color:" + colors[count] );

    count = count +1;

    });
