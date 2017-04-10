$(document).ready(function(){
  $('a').targetBlank();
  $('#search_button').on('click', function() {
    var search_term = $('#search_term').val();
    $('body').unhighlight().highlight(search_term);
  });
});
