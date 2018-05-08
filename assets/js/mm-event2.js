$(function() {
  $('#menu')
    .metisMenu()
    .on('shown.metisMenu', function(event) {
      $('body,html').animate({
        scrollTop: $(event.target).parent('li').offset().top
      }, 600);
    });
});
