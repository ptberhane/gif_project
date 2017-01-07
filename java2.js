var animals = ["dog", "lion"];

      function renderButtons() {
        $('#images').empty();
        for ( var i=0; i <animals.length; i ++){
          var newButton = $('<button>');
          newButton.text(animals[i]);
          $("#buttons").append(newButton);

        }
      }
      //creating a new button and appending 
      function addButton(newAnimal){
        //create the button 
       var anotherButton =  $('<button>').text(newAnimal);
       $('#buttons').append(anotherButton);
      }

      // This function handles events where the add movie button is clicked
      $("#add-animal").on("click", function(event) {

        console.log('clicked on the add movie button');
        // event.preventDefault() prevents submit button from trying to send a form.
        // Using a submit button instead of a regular button allows the user to hit
        // "Enter" instead of clicking the button if desired
        event.preventDefault();

        // Write code to grab the text the user types into the input field
        // Write code to add the new movie into the movies array
        var animalText = $('#animal').val();
        animals.push(animalText);

        // The renderButtons function is called, rendering the list of movie buttons
        renderButtons();
      });

      // Calling the renderButtons function to display the initial list of movies
      renderButtons();

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
