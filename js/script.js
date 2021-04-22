$(document).ready(function() {
    //CLICKABLES
    $('.clicked').click(function()
    {
      $('#show_samsung').toggle();
      $('#hide_samsung').toggle();
    });

    $('.clicked_2').click(function()
    {
      $('#show_apple').toggle();
      $('#hide_apple').toggle();
    });

    $('.clicked_buds').click(function()
    {
      $('#buds_1').toggle();
      $('#buds_1').toggle();
    });

    $('#show_items').mouseover(function()
    {
      $(".clickable").fadeIn("slow");
    });

    $("#show_mac").mouseover(function()
    {
      $("#hide_mac").fadeIn("slow");
    });

    $("#hide_mac").mouseover(function()
    {
      $(".clickable_2").fadeIn("slow");
    });


});