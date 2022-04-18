$(() => {
  $("#Anime").click(function () {
    $( "#Tab1" ).load( "../Html/testCopia.html" );
    $( "#Tab1" ).toggle("slow");
  });
  $("#Formu").click(function () {
    $("#Tab2").load("../Html/tables.html");
    $("#Tab2").toggle("slow");
  });
});
