$(document).ready(function () {
  // $('.slider-for').slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: false,
  //     fade: true,
  //     asNavFor: '.slider-nav',
  //     draggable: false,
  //     infinite: false,
  //     lazyLoad: 'ondemand'
  // });
  // $('.slider-nav').slick({
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     asNavFor: '.slider-for',
  //     dots: false,
  //     centerMode: false,
  //     focusOnSelect: true,
  //     infinite: false,
  //     draggable: false,
  //     arrows: true,
  //     nextArrow: '<span class="next-arrow"><i class="fas fa-chevron-right"></i></span>',
  //     prevArrow: '<span class="prev-arrow"><i class="fas fa-chevron-left"></i></span>',
  // });
  // var productItem = $('.product-item-slider.owl-carousel');
  // var productList = $('.product-list-slider.owl-carousel');
  // productList.owlCarousel({
  //     loop: false,
  //     margin: 20,
  //     nav: true,
  //     dots: false,
  //     navText: [
  //         '<i class="fas fa-chevron-left"></i>',
  //         '<i class="fas fa-chevron-right"></i>',
  //     ],
  //     autoplay: false,
  //     autoplayHoverPause: false,
  //     responsive: {
  //         0: {
  //             items: 1
  //         },
  //         600: {
  //             items: 2
  //         },
  //         1000: {
  //             items: 4
  //         }
  //     },
  //     touchDrag: false,
  //     mouseDrag: false,
  // }).on('drag.owl.carousel', function (e) {
  //     e.stopPropagation();
  // })
  // productItem.owlCarousel({
  //     loop: false,
  //     touchDrag: false,
  //     mouseDrag: false,
  //     margin: 0,
  //     nav: true,
  //     dots: false,
  //     navText: [
  //         '<i class="fas fa-chevron-left"></i>',
  //         '<i class="fas fa-chevron-right"></i>',
  //     ],
  //     autoplay: false,
  //     autoplayHoverPause: false,
  //     responsive: {
  //         0: {
  //             items: 3
  //         },
  //         600: {
  //             items: 3
  //         },
  //         1000: {
  //             items: 3
  //         }
  //     }
  // }).on('drag.owl.carousel', function (e) {
  //     e.stopPropagation();
  // })
  // $('.product-item').get().forEach(function (item) {
  //     let thumbnailItem = $(item).find(".thumbnail-item");
  //     let productItemImage = $(item).find('.product-item-image img')
  //     thumbnailItem.on('click', function (e) {
  //         e.stopPropagation();
  //         thumbnailItem.removeClass('active');
  //         $(this).addClass('active');
  //         let imgSrc = $(this).children('img').attr('src');
  //         if ($(this).children('img').attr('src') === productItemImage.attr("src")) {
  //             return;
  //         } else {
  //             productItemImage.attr("src", imgSrc);
  //         }
  //     })
  // })
  $('.status').on('click', function (e) {
    $(this).toggleClass('like unlike');
  })

  // Choose Props Colors

  $('.prop-colors span').on('click', function (e) {
    e.stopPropagation();
    $('.prop-colors span.active').removeClass('active');
    $(this).addClass('active');
  })
  // Control view less, more content
  $('.control-content').on('click', function (e) {
    $('#viewToggle').toggleClass('read-less read-more');
    if ($('#viewToggle').hasClass('read-more')) {
      $(this).html('Thu gọn')
    } else {
      $(this).html('Xem thêm')
    }
  })
  // Prevent typing in number amount input
  $('.amount-box input').on('keypress keydown', function (e) {
    e.preventDefault();
  })
  // Handle Count Amount Props
  $('.handle-amount').on('click', function (e) {
    var $this = $(this);
    var oldVal = $('.amount-number').val();
    var newVal;

    newVal = $this.data('multi') == '1' ? parseInt(oldVal) + 1 : (+oldVal >= 2) ? parseInt(oldVal) - 1 : oldVal;
    $('.amount-number').val(newVal);
  })

  // Carousel Product Detail
  var productDetail = $('#productViewCarousel');
  productDetail.slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    vertical: true,
    draggable: false,
    focusOnSelect: false,
    prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>'

  })

  // Get the url of the first images
  function getFirstImage() {
    var firstUrl = $('.thumbs-item img').first().attr('src');
    var imgZoom = $('.thumbs-item img').first().attr('data-zoom')
    $('#media-image').attr('src', firstUrl);
    $('#media-image').attr('data-zoom-image', imgZoom);
    $('.thumbs-item img').first().addClass('active');

  }
  getFirstImage();

  // Add border when click the thumb images
  $('.thumbs-img').on('click', function (e) {
    var $this = $(this);
    var imgUrl = $this.attr('src');
    var imgZoom = $this.attr('data-zoom')
    $('.thumbs-img.active').removeClass('active');
    $this.addClass('active');
    $('#media-image').attr('src', imgUrl);
    if (imgZoom) $('#media-image').attr('data-zoom-image', imgZoom);


  })
  // Change slick slider to horizontal in smaller screen
  if (window.innerWidth < 990) {
    productDetail.slick({
      vertical: false
    })
  }
  // Zoom image when hover
  $("#media-image").ezPlus(
    {
      zoomType: 'inner',
      cursor: 'crosshair'
    }
  );
});
