$(() => {
  $("#Anime").click(function () {
    $("#Tab1").load("../Html/testCopia.html");
    // $("#Tab1").toggle(display);
  });
  $("#Formu").click(function () {
    $("#Tab2").load("../Html/tables.html");
    // $("p").toggle("slow");
    // formModal.hide();
  });
  $("#Fecha").click(function () {
    $("div").toggle("slow");
    formModal.hide();
  });
});
