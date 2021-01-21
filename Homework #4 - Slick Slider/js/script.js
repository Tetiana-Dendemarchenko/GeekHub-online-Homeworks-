$(document).ready(function(){
    $(".slider").slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        easing: "ease",
        infinite: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        touchMove: true,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: true,
        slidesPerRow: 1
    });
});