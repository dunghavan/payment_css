//Column Snap
var scrollWraper = $(".scroller");
var lastScrollLeft = 0;
var ScrollTo = 2;
var scrollDirection;
var columnWidth = 180;
var columnCount = $("thead tr td").length - 1;
var columnScroll = [];
var activeSlide = 0;
var nextSlide = activeSlide + 1;
var nextSlideF = activeSlide + ScrollTo;
var previousSlide = activeSlide - 1;
var nextSlideF = activeSlide + ScrollTo;
var previousSlideF = activeSlide - ScrollTo;

for (i = 0; i < columnCount; i++) {
  columnScroll[i] = columnWidth * i;
}

scrollWraper.scroll(function() {

  var documentScrollLeft = scrollWraper.scrollLeft();
  console.log(documentScrollLeft);

  if (documentScrollLeft >= columnScroll[activeSlide] + columnWidth) {
    activeSlide = nextSlide;
    nextSlide = activeSlide + 1;
	previousSlide = activeSlide - 1;
	nextSlideF = activeSlide + ScrollTo;
    previousSlideF = activeSlide - ScrollTo;

  } else if (documentScrollLeft < columnScroll[activeSlide]) {
    activeSlide = previousSlide;
    nextSlide = activeSlide + 1;
	previousSlide = activeSlide - 1;
	nextSlideF = activeSlide + ScrollTo;
    previousSlideF = activeSlide - ScrollTo;
}

if ( nextSlide > 1 ){
	$('.icon-prv-all, .icon-prv').fadeIn();  
}
else {
	$('.icon-prv-all, .icon-prv').fadeOut();  
}



  if (lastScrollLeft < documentScrollLeft) {
    var scrollDirection = "right";
  }
  if (lastScrollLeft > documentScrollLeft) {
    var scrollDirection = "left";
  }
  console.log(scrollDirection);

  if (lastScrollLeft != documentScrollLeft) {
    lastScrollLeft = documentScrollLeft;
  }

  //Ext - Timeout delay on end of scroll
  $.fn.scrollEnd = function(callback, timeout) {
    $(this).scroll(function() {
      var $this = $(this);
      if ($this.data("scrollTimeout")) {
        clearTimeout($this.data("scrollTimeout"));
      }
      $this.data("scrollTimeout", setTimeout(callback, timeout));
    });
  };

  scrollWraper.scrollEnd(function() {
    if (
      documentScrollLeft > columnScroll[activeSlide] + columnWidth * 0.25 &&
      documentScrollLeft < columnScroll[nextSlide]
    ) {
      scrollWraper.animate({ scrollLeft: columnScroll[nextSlide] }, 150);  
    } else if (
      documentScrollLeft < columnScroll[activeSlide] + columnWidth * 0.25 &&
      documentScrollLeft > columnScroll[activeSlide]
    ) {
	  scrollWraper.animate({ scrollLeft: columnScroll[activeSlide] },150); 
    }
  }, 50);
});

//Click Next
$(".icon-nxt").click(function() {
  scrollWraper.animate({ scrollLeft: columnScroll[nextSlide] }, 500);
});

//Click Next
$(".icon-prv").click(function() {
  scrollWraper.animate({ scrollLeft: columnScroll[previousSlide] }, 500);
});
$(".icon-nxt-all").click(function() {
	scrollWraper.animate({ scrollLeft: columnScroll[nextSlideF] }, 500);
  });
  
  //Click Next
$(".icon-prv-all").click(function() {
	scrollWraper.animate({ scrollLeft: columnScroll[previousSlideF] }, 500);
});

$('.icon-prv-all, .icon-prv').hide();
