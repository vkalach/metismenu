$(function() {
  var navbarHeight = $('.navbar').height();
  $('#menu')
    .metisMenu()
    .on('shown.metisMenu', function(event) {
      $('body,html').animate({
        scrollTop: $(event.target).parent('li').position().top - navbarHeight
      }, 600);
    });
});
