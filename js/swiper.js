document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper", {
      loop: true, // 無限ループ
      speed: 8000, // 8秒かけて1スライド
      autoplay: {
        delay: 0, // 一定速度で動かすために0にする
        disableOnInteraction: false, // ユーザー操作後も継続
      },
      slidesPerView: "auto", // 画面いっぱいに表示
      centeredSlides: false, // スライドを左詰めにする
      allowTouchMove: false, // スワイプ禁止（止まらないように）
      spaceBetween: 0, // スライド間の隙間なし
    });
  });
  