var slickM = $('.slider-list');


slickM.slick({
  dots: true,
  arrows: false,
});

slickM.mousewheel(function(e) {
    e.preventDefault();

    if (e.deltaY < 0) {
      $(this).slick('slickNext');
    }
    else {
      $(this).slick('slickPrev');
    }
  });




/*
.mousewheel(function(e) {
    e.preventDefault();

    if (e.deltaY < 0) {
        $(this).slickNext();
    }
    else {
        $(this).slickPrev();
    }
});


.on("mousewheel", function (event) {
        event.preventDefault();
    if (event.deltaX > 0 || event.deltaY < 0) {
        $(this).slickNext();
    } else if (event.deltaX < 0 || event.deltaY > 0) {
        $(this).slickPrev();
    }
})
*/