window.setTimeout(function () {
  $(".loading").fadeOut(500);
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 130,
    mobile: true,
    live: true,
  });
  wow.init();
}, 400);

$(document).ready(function () {
  $(window).load(function () {
    $(".mobile-inner-header-icon").click(function () {
      $(this).toggleClass(
        "mobile-inner-header-icon-click mobile-inner-header-icon-out"
      );
      $(".mobile-inner-nav").slideToggle(250);
    });
    $(".mobile-inner-nav li").each(function (index) {
      $(this).css({ "animation-delay": index / 10 + "s" });
    });
    $(".mobile-inner-nav li").click(function () {
      $(this).find("dl").slideToggle(200);
    });
  });
});

$(document).ready(function () {
  $(".section1 .content>*").each(function (index) {
    $(this).css({ "animation-delay": index / 10 + "s" });
  });
  $(".section4 .dec1 p").each(function (index) {
    $(this).css({ "animation-delay": index / 4 + "s" });
  });
  $(".section4 .dec2 p").each(function (index) {
    $(this).css({ "animation-delay": index / 4 + "s" });
  });

  $(".section5 .list ul li .num").each(function (index) {
    $(this).css({ "animation-delay": index / 8 + "s" });
  });

  $(".section5 .list ul li .card").each(function (index) {
    $(this).css({ "animation-delay": index / 8 + "s" });
  });
  $(".section6 .items .item").each(function (index) {
    $(this).css({ "animation-delay": index / 8 + "s" });
  });

  $(".section6 .links a").each(function (index) {
    $(this).css({ "animation-delay": index / 8 + "s" });
  });
  $(".section7 .dec p").each(function (index) {
    $(this).css({ "animation-delay": index / 8 + "s" });
  });
  $(".section7 .link a").each(function (index) {
    $(this).css({ "animation-delay": index / 8 + "s" });
  });

  // $('.section1 .bg').addClass('wow calc')

  $(
    ".section5 .list ul li .card,.titlemodel,.section2 .list,.index>*,.section4 .dec1 p,.section4 .dec2 p"
  )
    .not(".section1")
    .addClass("wow fadeInUp");

  $(
    ".section3 .imgbox .line,.section5 .list ul li .num,.section7 .dec p"
  ).addClass("wow fadeInDown");

  $(".section6 .items .item").addClass("wow zoomInDown");

  $(".section4 .right").addClass(" wow bounceIn");

  $(".section3 .item:nth-child(1),.section3 .item:nth-child(3)").addClass(
    "wow fadeInLeft"
  );
  $(".section3 .item:nth-child(2),.section3 .item:nth-child(4)").addClass(
    "wow fadeInRight"
  );

  $(".section7 .link .icon").addClass("wow zoomInRight ");

  $(".titlemodel img.tit,.section1 .title").addClass("wow puffIn ");

  $(".section6 .links a,.section7 .link a").addClass("wow flipInX");

  $(".section1 .link a:nth-child(1),.section1 .link a:nth-child(2)").addClass(
    "wow fadeInLeft"
  );
  $(".section1 .link a:nth-child(3),.section1 .link a:nth-child(4)").addClass(
    "wow fadeInRight"
  );

  $(".section6 .links .icon").addClass("wow launch");

  $(".section2 .left .poster").hover(function () {
    $(this).toggleClass("animated tada");
  });

  function height() {
    var sc = $(window).scrollTop();
    if (sc > 200) {
      $("body").addClass("current");
    } else {
      $("body").removeClass("current");
    }
  }
  height();
  $(window).scroll(function () {
    height();
  });

  var section2 = new Swiper(".section2 .swiper-container", {
    pagination: ".section2 .swiper-pagination",
    paginationClickable: ".section2 .swiper-pagination",
    nextButton: ".section2 .swiper-button-next",
    prevButton: ".section2 .swiper-button-prev",
    autoplay: false,
    autoplayDisableOnInteraction: false,
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 30,
    autoHeight: true,
  });
});
