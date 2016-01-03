$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animal1Input = $("input#animal1").val();
    var animal2Input = $("input#animal2").val();
    var badwordInput = $("input#badword").val();
    var attackInput = $("input#attack").val();
    var verbInput = $("input#verb").val();
    var nounsInput =$("input#nouns").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal1").text(animal1Input);
    $(".animal2").text(animal2Input);
    $(".badword").text(badwordInput);
    $(".attack").text(attackInput);
    $(".verb").text(verbInput);
    $(".nouns").text(nounsInput);

    $("#survey").hide();
    $("#story").show();

    $("#refresh").click(function() {
      location.reload();
    })

    event.preventDefault();
  });
});
