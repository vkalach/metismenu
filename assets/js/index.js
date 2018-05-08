$(function() {
  $('table').addClass('table table-bordered table-striped');
});

$(window).load(function() {
  null == document.getElementsByTagName("iframe").item(ga.length - 1) && $("footer .container")
  .html("<div style='border-radius:7px;text-align:center;  padding-right:5px;font-size:18px;  padding-left:5px; border:1px solid #666666; font-family:Maven Pro,century gothic, arial, helvetica, sans serif;  padding-top:115px;  margin-left:5px;background-color:#666; width:160px;height:600px;  color:#FFF;  '>Advertising seems to be blocked by your browser.<br /><br /><span style='font-size:12px'>It is fine, but please keep in mind that advertising helps us to host the project.<br /><br />If you find these ads intrusive or inappropriate, feel free to contact us.</span></div>")
});
