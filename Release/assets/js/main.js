// PRELOADER
$(window).on('load', function(){$('#loader').delay(1500).fadeOut('slow')});

// Copy IP
function copyIp(e){
  if(window.getSelection){
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(e);
    selection.removeAllRanges();
    selection.addRange(range);
  }try{
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    Swal.fire({
      icon: 'success',
      title: 'The IP has been copied!',
      showConfirmButton: false,
      timer: 1000
    })
  }catch(err) {
    Swal.fire({
      icon: 'error',
      title: 'Yikes!',
      text: 'Something went wrong!',
      footer: 'Contact us at support@hydrasurvival.us'
    })
  }
}

// Everything that needs to load during the ready statement
$(document).ready(function(){
    // Toggle Nav
    function toggleNav(){
        $(".button, .main-nav").toggleClass("active");
        $("main").toggleClass("move-to-left");
        if($(".sidebar-item").hasClass("active")) {
          setTimeout(function() {$(".sidebar-item").toggleClass("active")},600);
        }else {
          $(".sidebar-item").toggleClass("active");
        }
    }
    // Button listner
    $('.button').on('click tap', function(){
        toggleNav();
    })
    
    // News Animation 
    $('.dark').hover(function(){
        $(this).animate({
            marginTop: "-=1%",
        },200);
    },function(){
        $(this).animate({
            marginTop: "0%"
        },200);
    });

    // Nav Scroll
    $(document).scroll(function(){
        var $nav = $('nav');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    })
  });