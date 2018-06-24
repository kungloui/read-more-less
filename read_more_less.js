$(document).ready(function() {
  $('.reference-text').each(function() {
    var $p = $(this);
       var text = $p.text();
       var shortString = text.substring(0, 200) + '[...]';
       $p.data('fulltext', text);
        $p.text(shortString);

  })

  $('.read-more').click(function(){
    var title = $(this).prevAll('.reference-title').html();
    var text = $(this).prev('.reference-text').data('fulltext');
    var img = $(this).prevAll('.reference-img');
    var src = img.attr('src');
    //console.log('text: ', text);
    //console.log('img: ', img);
    //console.log('src: ', src);
    $('.modal').show();
    $('.modal-title').html(title);
    $('.modal-img').attr('src', src);
    $('.modal-text').html(text);
  })

  $('.close').click(function(){
    $('.modal').hide();
  })



});
