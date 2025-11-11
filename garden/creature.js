// a variable for storing names

//when the button is clicked (event)

    $("#add-creature").click(
    function(){

    //grab the value from the list
    let crName = $("#crName").val();

    //check for the field value do not add empty names
    if ( (crName == "") || (crName.length>12) ){
        }
    else { 
            $("#creature-list").append(crName + ", ");
        }

   
    // remove the name after it has been added
    $("#crName").val("");

});