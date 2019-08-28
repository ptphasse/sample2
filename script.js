$('img.box').fadeIn(2000);
$('p.box').fadeIn(4000);

$(function(){
  $('.index-btn').click(
    function(){
    $('.active').removeClass('active');
    var clickedIndex=$('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');

  });

  $('.index-btn').hover(
    function(){
    $(this).animate({
      'font-size':'15px'
    },300);
  },
  function(){
    $(this).animate({
      'font-size':'12px'
    },300);
  });

  $('#top-btn').click(function(){
    $('html,body').animate({
      'scrollTop':0
    },500);
  });



  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop':position
    },500);
  });

  $('.product').hover(
    function(){
      $(this).find('.price').addClass('price-active');
    },
    function(){
      $(this).find('.price').removeClass('price-active');
    }
  );

  $('.faq-list-item').click(function(){
    var $answer=$(this).find('.answer');
    if ($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').text('+');

    }else{
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('span').text('-');
    }
  });

  /*スライド*/
  var setImg = '#photo';
    var fadeSpeed = 1600;
    var switchDelay = 5000;

    $(setImg).children('img').css({opacity:'0'});
    $(setImg + ' img:first').stop().animate({opacity:'1'},fadeSpeed);

    setInterval(function(){
        $(setImg + ' :first-child').animate(
          {opacity:'0'},fadeSpeed).
          next('img').animate({opacity:'1'},fadeSpeed).end().appendTo(setImg);
    },switchDelay);
});
