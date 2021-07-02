(function ($)
  { "use strict"
  

/* 1. Proloder */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });

/* 2. sticky And Scroll UP */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 400) {
        $(".header-sticky").removeClass("sticky-bar");
        $('#back-top').fadeOut(500);
      } else {
        $(".header-sticky").addClass("sticky-bar");
        $('#back-top').fadeIn(500);
      }
    });

  // Scroll Up
    $('#back-top a').on("click", function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  

/* 3. slick Nav */
// mobile_menu
    var menu = $('ul#navigation');
    if(menu.length){
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol:'-'
      });
    };



    
/* 4. MainSlider-1 */
    // h1-hero-active
    function mainSlider() {
      var BasicSlider = $('.slider-active');
      BasicSlider.on('init', function (e, slick) {
        var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
      });
      BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
      });
      BasicSlider.slick({
        autoplay: false,
        autoplaySpeed: 4000,
        dots: false,
        fade: true,
        arrows: false, 
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      });

      function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
          var $this = $(this);
          var $animationDelay = $this.data('delay');
          var $animationType = 'animated ' + $this.data('animation');
          $this.css({
            'animation-delay': $animationDelay,
            '-webkit-animation-delay': $animationDelay
          });
          $this.addClass($animationType).one(animationEndEvents, function () {
            $this.removeClass($animationType);
          });
        });
      }
    }
    mainSlider();




/* 4. Testimonial Active*/
var testimonial = $('.h1-testimonial-active');
if(testimonial.length){
testimonial.slick({
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay:true,
    loop:true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="ti-arrow-top-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="ti-arrow-top-right"></i></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrow:true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow:true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow:true
        }
      }
    ]
  });
}



// Single Img slder
$('.top-job-slider').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 400,
  centerPadding: '60px',
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
  prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: false
      }
    },
  ]
});



 // Brand Active
 $('.brand-active').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 400,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


/* 6. Nice Selectorp  */
  var nice_Select = $('select');
    if(nice_Select.length){
      nice_Select.niceSelect();
    }

/* 7. data-background */
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
      });


/* 10. WOW active */
    new WOW().init();

// 11. ---- Mailchimp js --------//  
    function mailChimp() {
      $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();


// 12 Pop Up Img
    var popUp = $('.single_gallery_part, .img-pop-up');
      if(popUp.length){
        popUp.magnificPopup({
          type: 'image',
          gallery:{
            enabled:true
          }
        });
      }
// 12 Pop Up Video
    var popUp = $('.popup-video');
    if(popUp.length){
      popUp.magnificPopup({
        type: 'iframe'
      });
    }

/* 13. counterUp*/
    $('.counter').counterUp({
      delay: 10,
      time: 3000
    });

/* 14. Datepicker */
  $('#datepicker1').datepicker();

// 15. Time Picker
  $('#timepicker').timepicker();

//16. Overlay
  $(".snake").snakeify({
    speed: 200
  });


//17.  Progress barfiller

  $('#bar1').barfiller();
  $('#bar2').barfiller();
  $('#bar3').barfiller();
  $('#bar4').barfiller();
  $('#bar5').barfiller();
  $('#bar6').barfiller();

})(jQuery);

// MODAL POPUP 

function activeModalOverlayChild(){
  var modal = $('.modal-overlay.active .modal');
  modal.addClass('active');
}

var modalOverlay = $('.modal-overlay');

// Here We have used PDFJS express for displaying PDF.
// We use this because some browser having issues that the pdf ask automatically to download.
// Here we are appending this iframe if user clicked on the button and also checking the iframe is not present already 
// to avoid multiple iframe appending. and also doing this to reduce time and memory usage

// Python
var pythonModal = $('.modal-overlay.pythonModal');
$('button#pythonModalBtn').click(function(){
    pythonModal.addClass('active');
    activeModalOverlayChild();
    if(!$('.pythonModal .modal-body .row .col-lg-8 iframe').length)
    $('.pythonModal .modal-body .row .col-lg-8').append(' <iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2F1)python syllabus.pdf" title="webviewer" frameborder="0" class="w-100 h-100"></iframe>');

});

// Java
var javaModal = $('.modal-overlay.javaModal');
$('button#javaModalBtn').click(function(){
    javaModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.javaModal .modal-body .row .col-lg-8 iframe').length)
  $('.javaModal .modal-body .row .col-lg-8').append('<iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2F2)java.pdf" title="webviewer" frameborder="0" class="w-100 h-100"></iframe> ');

});


// react
var reactModal = $('.modal-overlay.reactModal');
$('button#reactModalBtn').click(function(){
    reactModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.reactModal .modal-body .row .col-lg-8 iframe').length)
  $('.reactModal .modal-body .row .col-lg-8').append('<iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2F3)REACT JS PDF.pdf"title="webviewer" frameborder="0" class="w-100 h-100"></iframe> ');

});

// angular
var angularModal = $('.modal-overlay.angularModal');
$('button#angularModalBtn').click(function(){
    angularModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.angularModal .modal-body .row .col-lg-8 iframe').length)
  $('.angularModal .modal-body .row .col-lg-8').append('<iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2F4)Angular 9 Syllabus.pdf" title="webviewer" frameborder="0" class="w-100 h-100"></iframe>');

});

// UIUX
var UIUXModal = $('.modal-overlay.UIUXModal');
$('button#UIUXModalBtn').click(function(){
    UIUXModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.UIUXModal .modal-body .row .col-lg-8 iframe').length)
  $('.UIUXModal .modal-body .row .col-lg-8').append(' <iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2FUIUX Syllabus.pdf" title="webviewer"frameborder="0" class="w-100 h-100"></iframe>');

});


// php
var phpModal = $('.modal-overlay.phpModal');
$('button#phpModalBtn').click(function(){
    phpModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.phpModal .modal-body .row .col-lg-8 iframe').length)
  $('.phpModal .modal-body .row .col-lg-8').append(' <iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2FPHP.pdf" title="webviewer" frameborder="0" class="w-100 h-100"></iframe> ');

});

// laravel
var laravelModal = $('.modal-overlay.laravelModal');
$('button#laravelModalBtn').click(function(){
    laravelModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.laravelModal .modal-body .row .col-lg-8 iframe').length)
  $('.laravelModal .modal-body .row .col-lg-8').append(' <iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2Flaravel.pdf" title="webviewer" frameborder="0" class="w-100 h-100"></iframe> ');

});



// codeigniater
var codeigniaterModal = $('.modal-overlay.codeigniaterModal');
$('button#codeigniaterModalBtn').click(function(){
    codeigniaterModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.codeigniaterModal .modal-body .row .col-lg-8 iframe').length)
  $('.codeigniaterModal .modal-body .row .col-lg-8').append(' <iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2Fcodeignater.pdf" title="webviewer"  frameborder="0" class="w-100 h-100"></iframe> ');

});


// js
var jsModal = $('.modal-overlay.jsModal');
$('button#jsModalBtn').click(function(){
    jsModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.jsModal .modal-body .row .col-lg-8 iframe').length)
  $('.jsModal .modal-body .row .col-lg-8').append('  <iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2FJS.pdf" title="webviewer" frameborder="0" class="w-100 h-100"></iframe> ');

});


// node
var nodeModal = $('.modal-overlay.nodeModal');
$('button#nodeModalBtn').click(function(){
    nodeModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.nodeModal .modal-body .row .col-lg-8 iframe').length)
  $('.nodeModal .modal-body .row .col-lg-8').append(' <iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2F8)node js pdf 909098.pdf" title="webviewer" frameborder="0" class="w-100 h-100"></iframe> ');

});

// mean
var meanModal = $('.modal-overlay.meanModal');
$('button#meanModalBtn').click(function(){
    meanModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.meanModal .modal-body .row .col-lg-8 iframe').length)
  $('.meanModal .modal-body .row .col-lg-8').append(' <iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2FMEAN.pdf" title="webviewer" frameborder="0" class="w-100 h-100"></iframe> ');

});

// mern
var mernModal = $('.modal-overlay.mernModal');
$('button#mernModalBtn').click(function(){
    mernModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.mernModal .modal-body .row .col-lg-8 iframe').length)
  $('.mernModal .modal-body .row .col-lg-8').append(' <iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2FMERN.pdf" title="webviewer" frameborder="0" class="w-100 h-100"></iframe> ');

});

// digital
var digitalModal = $('.modal-overlay.digitalModal');
$('button#digitalModalBtn').click(function(){
    digitalModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.digitalModal .modal-body .row .col-lg-8 iframe').length)
  $('.digitalModal .modal-body .row .col-lg-8').append(' <iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2F11)DIGITALMARKETING.pdf" title="webviewer" frameborder="0" class="w-100 h-100"></iframe> ');

});

// android
var androidModal = $('.modal-overlay.androidModal');
$('button#androidModalBtn').click(function(){
    androidModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.androidModal .modal-body .row .col-lg-8 iframe').length)
  $('.androidModal .modal-body .row .col-lg-8').append(' <iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2Fandroid basic + adv  pdf.pdf" title="webviewer" frameborder="0" class="w-100 h-100"></iframe> ');

});


// wordpress
var wordpressModal = $('.modal-overlay.wordpressModal');
$('button#wordpressModalBtn').click(function(){
    wordpressModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.wordpressModal .modal-body .row .col-lg-8 iframe').length)
  $('.wordpressModal .modal-body .row .col-lg-8').append(' <iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2FWordPress.pdf" title="webviewer" frameborder="0" class="w-100 h-100"></iframe> ');

});


// sap
// var sapModal = $('.modal-overlay.sapModal');
// $('button#sapModalBtn').click(function(){
//     sapModal.addClass('active');
//   activeModalOverlayChild();
    // if(!$('.pythonModal .modal-body .row .col-lg-8 iframe').length)
//   $('.sapModal .modal-body .row .col-lg-8').append(' <iframe id="pdf-js-viewer"src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2F25)SQL PDF 11.pdf" title="webviewer"frameborder="0" class="w-100 h-100"></iframe> ');

// });


// matlab
var matlabModal = $('.modal-overlay.matlabModal');
$('button#matlabModalBtn').click(function(){
    matlabModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.matlabModal .modal-body .row .col-lg-8 iframe').length)
  $('.matlabModal .modal-body .row .col-lg-8').append(' <iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2F15)MATLAB and Simulink.pdf" title="webviewer" frameborder="0" class="w-100 h-100"></iframe> ');

});


// seo
var seoModal = $('.modal-overlay.seoModal');
$('button#seoModalBtn').click(function(){
    seoModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.seoModal .modal-body .row .col-lg-8 iframe').length)
  $('.seoModal .modal-body .row .col-lg-8').append(' <iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2F16) SEO TRAINING PDF.pdf" title="webviewer" frameborder="0" class="w-100 h-100"></iframe> ');

});


// ds
var dsModal = $('.modal-overlay.dsModal');
$('button#dsModalBtn').click(function(){
    dsModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.dsModal .modal-body .row .col-lg-8 iframe').length)
  $('.dsModal .modal-body .row .col-lg-8').append(' <iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2F17)DATA SCIENCE PDF.pdf" title="webviewer" frameborder="0" class="w-100 h-100"></iframe> ');

});


// ml
var mlModal = $('.modal-overlay.mlModal');
$('button#mlModalBtn').click(function(){
    mlModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.mlModal .modal-body .row .col-lg-8 iframe').length)
  $('.mlModal .modal-body .row .col-lg-8').append(' <iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2FML.pdf" title="webviewer" frameborder="0" class="w-100 h-100"></iframe> ');

});


// graphic
var graphicModal = $('.modal-overlay.graphicModal');
$('button#graphicModalBtn').click(function(){
    graphicModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.graphicModal .modal-body .row .col-lg-8 iframe').length)
  $('.graphicModal .modal-body .row .col-lg-8').append('<iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2F19)Graphic design course 11.pdf" title="webviewer" frameborder="0" class="w-100 h-100"></iframe> ');

});


// ba
var baModal = $('.modal-overlay.baModal');
$('button#baModalBtn').click(function(){
    baModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.baModal .modal-body .row .col-lg-8 iframe').length)
  $('.baModal .modal-body .row .col-lg-8').append(' <iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2F20)businessAnalytics.pdf" title="webviewer" frameborder="0" class="w-100 h-100"></iframe> ');

});


// hr
var hrModal = $('.modal-overlay.hrModal');
$('button#hrModalBtn').click(function(){
    hrModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.hrModal .modal-body .row .col-lg-8 iframe').length)
  $('.hrModal .modal-body .row .col-lg-8').append(' <iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2F21)HR SYLLABUS PDF.pdf" title="webviewer" frameborder="0" class="w-100 h-100"></iframe> ');

});


// marketing
// var marketingModal = $('.modal-overlay.marketingModal');
// $('button#marketingModalBtn').click(function(){
//     marketingModal.addClass('active');
//   activeModalOverlayChild();
//     if(!$('.marketingModal .modal-body .row .col-lg-8 iframe').length)
//   $('.marketingModal .modal-body .row .col-lg-8').append(' <iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2Fwb.pdf" title="webviewer" frameborder="0" class="w-100 h-100"></iframe> ');
// });


// sf
var sfModal = $('.modal-overlay.sfModal');
$('button#sfModalBtn').click(function(){
    sfModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.sfModal .modal-body .row .col-lg-8 iframe').length)
  $('.sfModal .modal-body .row .col-lg-8').append(' <iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2F22)salesforce pdf.pdf" title="webviewer" frameborder="0" class="w-100 h-100"></iframe> ');

});


// stm
var stmModal = $('.modal-overlay.stmModal');
$('button#stmModalBtn').click(function(){
    stmModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.stmModal .modal-body .row .col-lg-8 iframe').length)
  $('.stmModal .modal-body .row .col-lg-8').append(' <iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2Fmanualtesting.pdf" title="webviewer" frameborder="0" class="w-100 h-100"></iframe> ');

});


// sta
var staModal = $('.modal-overlay.staModal');
$('button#staModalBtn').click(function(){
    staModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.staModal .modal-body .row .col-lg-8 iframe').length)
  $('.staModal .modal-body .row .col-lg-8').append(' <iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2F24.2)seleniumtesting.pdf" title="webviewer" frameborder="0" class="w-100 h-100"></iframe> ');

});




// sql
var sqlModal = $('.modal-overlay.sqlModal');
$('button#sqlModalBtn').click(function(){
    sqlModal.addClass('active');
  activeModalOverlayChild();
    if(!$('.sqlModal .modal-body .row .col-lg-8 iframe').length)
  $('.sqlModal .modal-body .row .col-lg-8').append(' <iframe id="pdf-js-viewer" src="/assets/library/pdfjs/web/viewer.html?file=%2Fassets%2Fpdf%2F25)SQL PDF 11.pdf" title="webviewer" frameborder="0" class="w-100 h-100"></iframe> ');

});


$('.close-modal-btn').click(function(){
  var modal = $('.modal');
  modal.removeClass('active');
  modalOverlay.removeClass('active');
  // $('iframe').remove();
});


var elements = $('.modal-overlay.contactUsModal');

$('button#modal_button').click(function(){
    elements.addClass('active');
    var modal = $('.modal-overlay.active .modal');
    modal.addClass('active');
});

$('.close-modal').click(function(){
  var elements = $('.modal-overlay, .modal');
    elements.removeClass('active');

});

// show more show less 


function showMore1(){
  var container = document.getElementsByClassName('training-list')[0];
  container.style.height = "auto";
  container.style.transition= "300s max-height ease-in-out";
  document.getElementById('showmore1').style.display ="none"
}

function showMore2(){
  var container = document.getElementsByClassName('internship-list')[0];
  container.style.height = "auto";
  container.style.transition= "300s max-height ease-in-out";
  document.getElementById('showmore2').style.display ="none"
}


// shuffling classes for hero green icon 

  