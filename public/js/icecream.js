$(function (){ 
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
 
  
      var newEatenState = {
        devoured: 0
      };
  
      // Send the PUT request.
      $.ajax("/api/icecream/" + id, {
        type: "PUT",
        data: newEatenState
      }).then(
        function(result) {
           console.log("changed Eaten to", result);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newicecream = {
        name: $("#ice").val(),
        devoured: $("[name=devoured]:checked").val()
      };
  
      // Send the POST request.
      $.ajax("/api/icecream", {
        type: "POST",
        data: newicecream
      }).then(
        function() {
          console.log("created new icecreamChoice");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });