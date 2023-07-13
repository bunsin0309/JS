$(function() {
  var items = $('#navMenu-items').width();
  var itemSelected = document.getElementsByClassName('navMenu-item');
  navPointerScroll($(itemSelected));
  $("#navMenu-items").scrollLeft(200).delay(200).animate({
    scrollLeft: "-=200"
  }, 2000, "easeOutQuad");
 
  $('.navMenu-paddle-right').click(function () {
    $("#navMenu-items").animate({
      scrollLeft: '+='+items
    });
  });
  $('.navMenu-paddle-left').click(function () {
    $( "#navMenu-items" ).animate({
      scrollLeft: "-="+items
    });
  });

  if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var scrolling = false;

    $(".navMenu-paddle-right").bind("mouseover", function(event) {
        scrolling = true;
        scrollContent("right");
    }).bind("mouseout", function(event) {
        scrolling = false;
    });

    $(".navMenu-paddle-left").bind("mouseover", function(event) {
        scrolling = true;
        scrollContent("left");
    }).bind("mouseout", function(event) {
        scrolling = false;
    });

    function scrollContent(direction) {
        var amount = (direction === "left" ? "-=3px" : "+=3px");
        $("#navMenu-items").animate({
            scrollLeft: amount
        }, 1, function() {
            if (scrolling) {
                scrollContent(direction);
            }
        });
    }
  }
  
  $('.navMenu-item').click(function () {
    $('#navMenu').find('.active').removeClass('active');
    $(this).addClass("active");
    navPointerScroll($(this));
  });

});

function navPointerScroll(ele) {

  var parentScroll = $("#navMenu-items").scrollLeft();
  var offset = ($(ele).offset().left - $('#navMenu-items').offset().left);
  var totalelement = offset + $(ele).outerWidth()/2;

  var rt = (($(ele).offset().left) - ($('#navMenu-wrapper').offset().left) + ($(ele).outerWidth())/2);
  $('#menuSelector').animate({
    left: totalelement + parentScroll
  })
}
