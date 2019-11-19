$('.owl-one').owlCarousel({
    nav:true,
    items: 1,
    dots: false,
    center: true,
    loop: true,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:5
        }
    }
});
$('.owl-two').owlCarousel({
    items:1,
    merge:true,
    video:true,
    lazyLoad:true,
    dots: false,
    loop: true,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items: 3
        }
    }
})