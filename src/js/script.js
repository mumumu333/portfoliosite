let hidden = ('display-none')

// sp版ヘッダー検索メニュー
$(function () {
  let menu = $('.js-menu')
  let search = $('.js-btn-search')
  let cancel = $('.js-btn-cancel')
  let btn = $('.js-btn')
  let overlay = $('.js-over-lay')

  btn.click(function() {
    if (menu.hasClass(hidden)) {
      menu.removeClass(hidden)
      search.addClass(hidden)
      cancel.removeClass(hidden)
    } else {
      menu.addClass(hidden)
      cancel.addClass(hidden)
      search.removeClass(hidden)
    }
  });

  overlay.click(function() {
    menu.addClass(hidden)
    cancel.addClass(hidden)
    search.removeClass(hidden)
  });
});

// スクロールボタン設定
$(function() {
  let pagetop = $('.js-scroll-top');

  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });

  pagetop.click(function() {
    $('body, html').animate({ scrollTop: 0 }, 100);
    return false;
  });
});

// サイトリンクバナー設定
$(function() {
  let footer = $('.footer').innerHeight(); // footerの高さ
  let sitelink = $('.js-sitelink-banner');

  $(window).scroll(function() {
    let point = window.pageYOffset; // 現在のスクロール地点
    let docHeight = $(document).height(); // ページ全体の高さ
    let dispHeight = $(window).height(); // 表示されているブラウザウィンドウの高さ

    if (point > docHeight-dispHeight-footer || $(this).scrollTop() < 200) {
      sitelink.fadeOut();
    } else {
      sitelink.fadeIn();
    }
  });
});

// コメントタブ
$(function() {
  let index = $('.js-index')
  
  $('.js-count').click(function() {
    if (index.hasClass(hidden)) {
      index.removeClass(hidden)
      $(this).css('opacity','none')
    } else {
      index.addClass(hidden)
    }
  });
});