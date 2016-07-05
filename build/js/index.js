$(document).ready(function () {

    // init slider
    $('#block-testimonials .slider').slick({
        infinite: true,
        slidesToShow: 2,
        autoplay: true,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i> Prev</button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i>< Next/button>'
    });
});