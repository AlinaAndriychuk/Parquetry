"use-strict";
 
$(function(){
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
  // $('body').addClass('item_is_visible');
    
  // function removeClasses() {
  //   $(".burger-menu ul li").each(function() {
  //     var custom_class = $(this).find('a').data('class');
  //     $('body').removeClass(custom_class);
  //   });
  // }
      
  // $('.burger-menu a').on('click',function(e){
  //   e.preventDefault();
  //   // removeClasses();
  //   var custom_class = $(this).data('class');
  //   $('body').addClass(custom_class);
  // });

  window.addEventListener("scroll", function(){
    if(document.documentElement.clientWidth >= 845) {
      if (document.documentElement.scrollTop > 100) {
        let stickyElement = $(".header__content");
        stickyElement.addClass("header__sticky")
      }

      if (document.documentElement.scrollTop < 100) {
        let stickyElement = $(".header__content");
        stickyElement.removeClass("header__sticky")
      }    
    }  
  })
});



    // $(document).ready(function(){

    //   var stickyElement = $(".header-sticky"),
    //       stickyClass = "sticky-pin",
    //       stickyPos = stickyElement.offset().top, //Distance from the top of the window.
    //       stickyHeight;
    
    //   //Create a negative margin to prevent content 'jumps':
    //   stickyElement.after('<div class="jumps-prevent"></div>');
    //   function jumpsPrevent() {
    //     stickyHeight = stickyElement.innerHeight();
    //     stickyElement.css({"margin-bottom":"-" + stickyHeight + "px"});
    //     stickyElement.next().css({"padding-top": + stickyHeight + "px"}); 
    //   };
    //   jumpsPrevent(); //Run.
    
    //   //Function trigger:
    //   $(window).resize(function(){
    //     jumpsPrevent();
    //   });
    
    //   //Sticker function:
    //   function stickerFn() {
    //     var winTop = $(this).scrollTop();
    //     //Check element position:
    //     winTop >= stickyPos ?
    //       stickyElement.addClass(stickyClass):
    //       stickyElement.removeClass(stickyClass) //Boolean class switcher.
    //   };
    //   stickerFn(); //Run.
    
    //   //Function trigger:
    //   $(window).scroll(function(){
    //     stickerFn();
    //   });
    
    // });
    
   


    (function() {
      var floatingLabel;
    
      floatingLabel = (function() {
        function floatingLabel(form, options) {
          var event, i, input, j, label, len, len1, ref, ref1;
          if (options == null) {
            options = {};
          }
          if (!form) {
            return;
          }
          options.focusClass || (options.focusClass = "focus");
          options.activeClass || (options.activeClass = "active");
          options.errorClass || (options.errorClass = "error");
          form.classList.add('has-floated-label');
          ref = form.querySelectorAll('label');
          for (i = 0, len = ref.length; i < len; i++) {
            label = ref[i];
            if (!(input = document.querySelector("#" + (label.getAttribute('for'))))) {
              return;
            }
            ref1 = ['keyup', 'input', 'change'];
            for (j = 0, len1 = ref1.length; j < len1; j++) {
              event = ref1[j];
              input.addEventListener(event, function() {
                this.parentNode.classList.remove(options.errorClass);
                return this.parentNode.classList.toggle(options.activeClass, !!this.value);
              });
            }
            input.addEventListener('focus', function() {
              return this.parentNode.classList.add(options.focusClass);
            });
            input.addEventListener('blur', function() {
              return this.parentNode.classList.remove(options.focusClass);
            });
            input.parentNode.classList.toggle(options.activeClass, !!input.value);
          }
        }
    
        return floatingLabel;
    
      })();
    
      window.floatingLabel = new floatingLabel(document.querySelector('.form'));
    
    }).call(this);