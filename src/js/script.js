/* ハンバーガーメニュー */

$(function () {
  $('.js-btn').on('click', function () {
    $('.menu , .btn-line').toggleClass('open');
    $('.menu').hide().fadeIn(0);
  })
});


// スクロールボタン設定
$(function() {
  let pagetop = $('.scroll-top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      pagetop.fadeIn();
     }else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 100);
    return false;
  });
});

// コメントタブ
$(function() {
  $('.count').click(function(e){

    let index = $('.index')
    let hidden = ('display-none')

    if (index.hasClass(hidden)) {	
        index.removeClass(hidden)
        $(this).css('opacity','none')
      }
      else{
        index.addClass(hidden)
      }	
  });
});