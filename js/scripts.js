$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["person1", "person2", "animal1", "animal2", "badword", "attack", "verb", "nouns"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#survey").hide();
    $("#story").show();

    $("#refresh").click(function() {
      location.reload();
    })

    event.preventDefault();
  });
});
