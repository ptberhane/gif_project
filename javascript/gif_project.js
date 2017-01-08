var animals = [""];
      function renderButtons() {
        $("#buttons").empty();
        for ( var i=0; i <animals.length; i ++){
          var newButton = $('<button>');
          newButton.text(animals[i]);
          $("#buttons").append(newButton);

        }
      }

function addButton(newAnimal){
       var anotherButton =  $('<button>').text(newAnimal);
       $('#buttons').append(anotherButton);
      }

      $("#add-animal").on("click", function(event) {
        event.preventDefault();
        var animalText = $('#animal').val();
        animals.push(animalText);
        renderButtons();
      });
      renderButtons();




$("button").on("click", function() {
      var animal = $(this).data("animal");
      var myURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";


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





