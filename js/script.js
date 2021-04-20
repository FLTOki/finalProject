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

    // $('#buds').hover(function() {
    //     $('#buds_1').show();
    //   }, function() {
    //     $('#buds_1').hide();
    // });

    $('.clicked_buds').click(function()
    {
      $('#buds_1').toggle();
      $('#buds_1').toggle();
    });
});