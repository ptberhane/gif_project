$("button").on("click", function() {
      var animal = $(this).data("animal");
      var myURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=9";


      $.ajax({
          url: myURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var animalImage = $("<img>");
            animalImage.attr("src", results[i].images.fixed_height.url);
            console.log(animalImage);
            gifDiv.prepend(p);
            gifDiv.prepend(animalImage);

            $("#images").prepend(gifDiv);
          }
        });
    });

function addButton(textOfAnimal){
       var anotherButton =  $('<button>').text(textOfAnimal);
       $('#buttons').append(anotherButton);
       console.log(anotherButton);
      }

 $("#add-animal").on("click", function(event) {
     var newAnimal = $("#animal").val();
        $("#buttons").html(newAnimal);

       
        renderButtons();
      });