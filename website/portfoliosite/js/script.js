/* ハンバーガーメニュー */
$(function () {
  $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
    $('.menu , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })
});

/* スクロールしたときのハンバーガーメニュー */
let mvh = $('header').height();

$(window).scroll(function() {
  let top = $(window).scrollTop();
  if (mvh < top) {
    $('.js-btn').css('background-color', 'rgb(48 51 53 / 0%)');
    $('.js-btn').css('padding', '16px');
    $('.js-btn').css('right', '0px');
    $('.js-btn').css('border-radius', '3px');
    } else {
      $('.js-btn').css('background-color', 'rgb(48 51 53 / 0%)');
      $('.js-btn').css('padding', '16px');
      $('.js-btn').css('right', '0px');
      $('.js-btn').css('border-radius', '3px');
  }
});

/* ページ内リンク */
$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      let speed = 400; // ミリ秒
      // アンカーの値取得
      let href= $(this).attr("href");
      // 移動先を取得
      let target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      let position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});
/* 到達したら要素を表示させる*/
function showElementAnimation() {

  let element = document.getElementsByClassName('js-animation');
  if(!element) return; // 要素がなかったら処理をキャンセル

  let showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
  let scrollY = window.pageYOffset;
  let windowH = window.innerHeight;

  for(let i=0;i<element.length;i++) { let elemClientRect = element[i].getBoundingClientRect(); let elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('is-show');
    } else if(scrollY + windowH < elemY) {
      // 上にスクロールして再度非表示にする場合はこちらを記述
      element[i].classList.remove('is-show');
    }
  }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);
/*もっと見るボタン*/
$(function(){
  $(".more").on("click", function() {
    $(this).toggleClass("on-click");
    $(".txt-hide").slideToggle(1000);
  });
});
