$(document).ready(function(){
  $('a').targetBlank();
  $('#search_button').on('click', function() {
    var search_term = $('#search_term').val();
    $('body p').highlight(search_term);
  });
});
