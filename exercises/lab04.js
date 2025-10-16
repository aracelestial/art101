// declaring an array with name myCommutes
let myCommutes = ["Caltrain", "Amtrak bus", "SC Metro bus", "walking", "Ray's truck", "the LOOP bus"];

// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "bus",
    route:  "highway 17",
    print: "Mountain Lion",
    hasMiddleDoor: true,
    drivers: ["the lady that's always late", "the fast driver", "the woman with the pretty earrings",],
};

let megaSentence;

megaSentence = "<p>My three top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[4] + ", "+ myCommutes[1] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ",route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[1] + "</p>";

$("#output").html(megaSentence);