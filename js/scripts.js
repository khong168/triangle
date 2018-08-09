$(document).ready(function() {
  $("form#triangleForm").submit(function(event) {
    var oppositeInput = parseInt($("input#opposite").val());
    var adjacentInput = parseInt($("input#adjacent").val());
    var hypotenuseInput = parseInt($("#hypotenuse").val());

    var realTriangle = function(oppositeInput, adjacentInput) {
      return oppositeInput + adjacentInput;
    };

    console.log(realTriangle);

    if (realTriangle !== hypotenuseInput) {
      $("#non-triangle").show();
    } else if (oppositeInput === adjacentInput && adjacentInput === hypotenuseInput) {
      $("#equilateral").show();
    } else if (oppositeInput === adjacentInput && adjacentInput !== hypotenuseInput) {
      $("#isosceles").show();
    } else if (oppositeInput !== adjacentInput && adjacentInput === hypotenuseInput) {
      $("#isosceles").show();
    } else if (oppositeInput === hypotenuseInput && adjacentInput !== hypotenuseInput) {
      $("#isosceles").show();
    } else {
      $("#scalene").show();
    }



    event.preventDefault();
  });
});
