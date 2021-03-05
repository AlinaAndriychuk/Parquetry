"use-strict";
 
$(function() {
  $('.preloader').css('display', 'none');
  $('body').css({
    'overflow': 'visible',
    'padding-right': 0,
  });
  let swiper = new Swiper('.swiper-container', {
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
  });

  $('.header__burger-menu').on("click", function() {
    if ($('.header__menu').hasClass('header__menu-open')) {
      $('body').removeClass('show_menu');
      $('.header__burger-menu').attr('src', 'img/menu.png');
      $('.header__menu').removeClass('header__menu-open');
      document.documentElement.style.overflow = "";
    } else {
      $('body').addClass('show_menu');
      $('.header__burger-menu').attr('src', 'img/close.png');
      $('.header__menu').addClass('header__menu-open');
      document.documentElement.scrollTop = 0;
      document.documentElement.style.overflow = "hidden";
    };
  });

  $(".header__link-item").on("click", function(event) {
    let anchor = $(this);
    $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top - 30 + "px"}, 777);

    if ($('.header__menu').hasClass('header__menu-open')) {
      $('body').removeClass('show_menu');
      $('.header__burger-menu').attr('src', 'img/menu.png');
      $('.header__menu').removeClass('header__menu-open');
      document.documentElement.style.overflow = "";
    }

    event.preventDefault();
    return false;
  });

  window.addEventListener("scroll", function(){
    if (document.documentElement.clientWidth >= 845) {
      if (document.documentElement.scrollTop > 100) {
        let stickyElement = $(".header__content");
        stickyElement.addClass("header__sticky");
      }

      if (document.documentElement.scrollTop < 100) {
        let stickyElement = $(".header__content");
        stickyElement.removeClass("header__sticky");
      }    
    }  
  })
});