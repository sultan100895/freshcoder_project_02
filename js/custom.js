$(document).ready(function(){
  'use strict';

  //===== for banner slider =====
  $(".banner-slider").slick({
    prevArrow: '<i class="fas fa-chevron-left left-arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right right-arrow"></i>',
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  //===== top scroll button
  var $button = $.backToTop({
          // background color
          backgroundColor: '#64b141',
          // text color
          color: '#FFFFFF',
          // container element
          container: this._body,
          // 'nonn', 'spin', 'fade', 'zoom', or 'spin-inverse'
          effect: 'spin',
          // enable the back to top button
          enabled: true,
          // width/height of the back to top button
          height: 70, 
          width: 70,
          // icon
          icon: 'fas fa-chevron-up',
          // margins
          marginX: 20,
          marginY: 20, 
          // bottom/top left/right
          position: 'bottom right',          
          // trigger position
          pxToTrigger: 600,
          // or 'fawesome'
          theme: 'default',
          // z-index
          zIndex: 999
      });
  });