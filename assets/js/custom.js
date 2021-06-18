$(document).ready(function() {
    $('.custom-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          });
          $('.custom-slider2').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          });
          $('.custom-slider3').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
          });
    });
    var tabEl = document.querySelectorAll('button[data-bs-toggle="tab"]');
    console.log(tabEl);

    for(i = 0; i < tabEl.length; i++) {
        tabEl[i].addEventListener('shown.bs.tab', function (event) {
        $(window).resize();
    });
    }   
