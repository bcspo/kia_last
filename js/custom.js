$(function () {
  const mainVisualSlide = new Swiper(".main_visual_slide", {
    parallax: true,
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: "#main_visual .arrows .next",
      prevEl: "#main_visual .arrows .prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    on: {
      slideChangeTransitionEnd: function () {
        console.log(this.realIndex);
        let num = this.realIndex;

        $("#main_solution .inner .left .txt .a")
          .eq(num)
          .addClass("on")
          .siblings()
          .removeClass("on");
      },
    },
  });

  $('.mopen').on('click', function () {
    $('.gnb').toggleClass('on')
  });

  $('#header .gnb>ul>li>a').on('click', function (e) {
    if ($('.gnb').hasClass('on')) {
      e.preventDefault();
      $(this).next().slideToggle();
    }
  });

  $(window).on('resize', function () {
    $('.gnb').removeClass('on');
    $('#header .gnb>ul>li ul').removeAttr('style')
  });

  const bestSlide = new Swiper(".slide_swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: "#main_solution .main_slide_arrows .next",
      prevEl: "#main_solution .main_slide_arrows .prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  $(".to_top").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1200);
  });


  $(window).on('scroll', function () {
    let sct = $(window).scrollTop();

    if (sct > 600) {
      $(".to_top").addClass('on')
    } else {
      $(".to_top").removeClass('on')
    }
  });

  $(window).on('scroll', function () {
    let sct = $(window).scrollTop();

    if (sct > 600) {
      $(".accessory").addClass('on')
    } else {
      $(".accessory").removeClass('on')
    }
  });


  $('#main_solution .list li').on('click', function () {
    let num = $(this).index();

    $(this).addClass('on').siblings().removeClass('on')

    $('#main_solution .slide_swiper').eq(num).addClass('on').siblings().removeClass('on')
  });



  $(window).on('scroll', function () {
    let sct = $(window).scrollTop();
    let h = $('#footer').offset().top;


    console.log(sct, h)

    if (sct > h - $(window).height()) {
      $('.accessory').css({ position: 'absolute' })
    } else {
      $('.accessory').css({ position: 'fixed' })
    }

  })

});
