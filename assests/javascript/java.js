var topics = ["destiny2", "wakeboarding", "dominoes","explosions"];
//dipslay topics array as buttons to click
displayButtons();

$("#button-layout").on("click",".topic-button", function () {
  var topic = $(this).attr("data-topic");
  var key = "XzBs6CdLaZ3hdeMUzEqOHA21QMUx1BXV";
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topic + "&api_key=" + key + "&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })

    .then(function (response) {
      var results = response.data;

      for (var i = 0; i < results.length; i++) {

        var topicDiv = $("<div>");
        var p = $("<p>").text("Rating: " + results[i].rating);
        var topicImage = $("<img>");
        //grabs the still of the gif first
        topicImage.attr("src", results[i].images.fixed_height_still.url);
        topicImage.attr("data-still", results[i].images.fixed_height_still.url);
        topicImage.attr("data-animate", results[i].images.fixed_height.url);
        topicImage.attr("data-state", "still");
        topicImage.addClass("gif");

        topicDiv.append(p);
        topicDiv.append(topicImage);

        $("#gifs-appear-here").prepend(topicDiv);
      }
    });
});

//if a gif is clicked set to animate and set to still if animated
$("#gifs-appear-here").on("click", ".gif", function() {
  var state = $(this).attr("data-state");
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});
//submit button puts new topic button to click along default buttons.
$(".submit-button").on("click", function(){
  event.preventDefault();
  var newTopic = $("#topic-input").val().trim();
  topics.push(newTopic);
  console.log(topics);
  displayButtons();
});

//function to display each index of the array as a button
function displayButtons() {
  $("#button-layout").empty();
  for (var i = 0; i < topics.length; i++) {
    var b = $("<button>").text(topics[i]);
    b.attr({"data-topic": topics[i]}).addClass("topic-button");
    $("#button-layout").append(b);
  }
}
