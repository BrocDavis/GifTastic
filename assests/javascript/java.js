topics = ["destiny2", "wakboarding"]


$("#submit-button").on("click", function () {

  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=cats";

  $.ajax({
    url: queryURL,
    method: "GET"
  })

    .then(function (response) {
      var imageUrl = response.data.image_original_url;


      var storeImage = $("<img>");

      // Setting the catImage src attribute to imageUrl
      storeImage.attr("src", imageUrl);
      storeImage.attr("alt", "image");

      // Prepending the catImage to the images div
      $("#images").prepend(storeImage);
    });

});