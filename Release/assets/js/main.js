$(window).on('load', function() {$('#loader').delay(1500).fadeOut('slow')});
$(document).ready(function(){
  function toggleSidebar() {
    $(".button").toggleClass("active");
    $("main").toggleClass("move-to-left");
    $(".sidebar-item").toggleClass("active");
  }
  // ! Put auto callpaser here //
  $(".button").on("click tap", function() {
    toggleSidebar();
  });

    $('.dark').hover(
        // trigger when mouse hover
        function(){
            $(this).animate({
                marginTop: "-=1%",
            },200);
        },
        function(){
            $(this).animate({
                marginTop: "0%"
            },200);
        }
    );
});

$(function () {
  $(document).scroll(function () {
	  var $nav = $("nav");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

function copyIp(element) {
  var range, selection, worked;

  if (document.body.createTextRange) {
    range = document.body.createTextRange();
    range.moveToElementText(element);
    range.select();
  } else if (window.getSelection) {
    selection = window.getSelection(); range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
  }
    
  try {
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }
  catch (err) {
    alert('unable to copy text');
  }
}