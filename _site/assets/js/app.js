$(document).ready(() => {
  // $('.slide-portfolio').slick({
  //   mobileFirst:true,
  //   adaptiveHeight: true,
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 5,
  //         slidesToScroll: 1,
  //         centerMode: false,
  //       }
  //     },
  //     {
  //       breakpoint: 524,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         centerMode: false,
  //       }
  //     },
  //     {
  //       breakpoint: 0,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         centerMode: true,
  //       }
  //     }
  //     // You can unslick at a given breakpoint now by adding:
  //     // settings: "unslick"
  //     // instead of a settings object
  //   ]
  // })

  $(window).on('load', () => {
    $('.loader').fadeOut();
  })

  const carouselInnerHeight = window.innerHeight - ($('.navbar-head').outerHeight() + $('footer').outerHeight());
  $('#portfolioSlide .carousel-item').css('height', carouselInnerHeight);
})