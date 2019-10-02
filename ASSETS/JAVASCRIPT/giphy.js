
$("button").on("click", function () {
    var dinosaur = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        dinosaur + "&api_key=0FEUTWqxcNww2JBF5jHJ8ehQQYva0Z9a&limit=10";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);

        var results = response.data

        for (var i = 0; i < results.length; i++) {

            var dinosaurDiv = $("<div>");

            var p = $("<p>");

            p.text("rating" + results[i].rating);

            var dinosaurImage = $("<img>")

            dinosaurImage.attr("src", results[i].images.fixed_height.url);

            dinosaurDiv.prepend(p);

            dinosaurDiv.append(dinosaurImage);

            $("#gifs-appear-here").prepend(dinosaurDiv);

        }
    });

});

$( document ).ready(function(){

   
    $(".search-button").on('click', function(){

      
      var userInput = $('#form-value').val().trim();
      
      var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + userInput + '&api_key=0FEUTWqxcNww2JBF5jHJ8ehQQYva0Z9a&limit=10';

      $.ajax({url: queryURL, method: 'GET'}).done(function(response){

        var giphyURL = response.data[0].images.fixed_height.url;
       
        $("#gifs-appear-here").attr("src", giphyURL);

      });

      
      $("#reset-button").on("click", function(){
       
        $("#gifs-appear-here").attr("src", "");
      })

      return false;
    })

  });

$(".gif").on("click", function() {
   
    var state = $(this).attr("data-state");
   
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });



  // I couldn't figure out how to make the buttons and track the user input without breaking my code.
 // I know I need to render buttons and capture a user input and turn it into a variable to pull information from,
 // but I just couldn't get the code right.
 // The button does let a user search, but only once (lol?), and then it pulls random images not related to the search term.
 // The pause/play was also a challenge because I know exactly what to do, but it just wouldn't come together.
 // *sad face*

