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


  