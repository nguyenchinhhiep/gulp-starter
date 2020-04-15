//  Author: Nguyen Chinh Hiep
//  Email: nguyenchinhhiep95@gmail.com
//  Facebook: facebook.com/hiepnguyen1003

$(document).ready(function () {
  // // Control view less, more content
  // $('.control-content').on('click', function (e) {
  //   $('#viewToggle').toggleClass('read-less read-more');
  //   if ($('#viewToggle').hasClass('read-more')) {
  //     $(this).html('Thu gọn')
  //   } else {
  //     $(this).html('Xem thêm')
  //   }
  // })
  // // Prevent typing in number amount input
  // $('.amount-box input').on('keypress keydown', function (e) {
  //   e.preventDefault();
  // })
  // // Handle Count Amount Props
  // $('.handle-amount').on('click', function (e) {
  //   var $this = $(this);
  //   var oldVal = $('.amount-number').val();
  //   var newVal;

  //   newVal = $this.data('multi') == '1' ? parseInt(oldVal) + 1 : (+oldVal >= 2) ? parseInt(oldVal) - 1 : oldVal;
  //   $('.amount-number').val(newVal);
  // })

  // Open Video Modals
  const videoOverlay = () => {
    const btnPlayVideos = document.querySelectorAll('.btn-play-video');
    btnPlayVideos.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            $('body').css('overflow','hidden');
            const videoUrl = $(this).attr('href');
            $('#video-overlay').addClass('show');
            $('#video-overlay').find('.video-overlay-inner').append(`<iframe width="100%" height="100%" src=${videoUrl} frameborder="0" allowfullscreen></iframe>`)     
        })
    })

    $(document).keyup(function(e){
        if(e.keyCode === 27) {
            closeVideoModal();
         }
    });
}

function closeVideoModal() {
    $('.video-overlay').removeClass('show').find('iframe').remove();
    $('body').removeAttr('style');
}
// Window close
const windowClose = () => {
  $(window).click(function(e){
      e.stopPropagation()
      if(e.target.className == 'video-overlay-close' || e.target.className == 'video-overlay show'){
          closeVideoModal();
      }
  })
}

  const init = () => {
    windowClose();
    videoOverlay();
}

init();
  
});
