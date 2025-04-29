$(function () {
    $('.js-btn, header nav a').on('click', function () {        // js-btnクラスとheader nav aをクリックすると、
      $('header nav, .btn , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
    })
  });