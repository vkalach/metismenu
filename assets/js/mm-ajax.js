$(function() {

  $('#menu').metisMenu();

  $("#ajaxButton").one('click', function() {
    var $this = $(this);
    $.ajax({
      url: "demo-ajax.html",
      success: function(result) {

        $('#menu').metisMenu('dispose');
        $("#menu").append(result);

        noty({
            text: 'ajax menu appended to menu',
            layout: 'topRight',
            type: 'success',
            theme: 'metroui',
            progressBar: true,
            timeout: 2000
        });

        $('#menu').metisMenu();
        $this.attr('disabled', 'disabled');
      }
    });
  });

  $('#menu2').metisMenu();

  $("[data-url]").each(function(){
      $(this).one('click', function(event){
        event.preventDefault();
        var $this = $(this);
        var url = $this.attr('data-url');
        console.log(url);

        $.ajax({
          url: url,
          success: function(result) {

            $('#menu2').metisMenu('dispose');
            $this.parent('li').append(result);

            $('#menu2').metisMenu();

            $this.click();
          }
        });

      });
  });

});
