$("button").on("click", function() {
    var dinosaur = $(this).attr("data-dinosaur");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      dinosaur + "&api_key=0FEUTWqxcNww2JBF5jHJ8ehQQYva0Z9a";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    
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


  $(".gif").on("click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });