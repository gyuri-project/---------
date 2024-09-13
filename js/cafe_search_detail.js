var swiper = new Swiper(".thumbnail_slide", {
    slidesPerView: 2,
    spaceBetween: 10,

    breakpoints: {
        400: {
            slidesPerView: 4
        },
        750: {
            slidesPerView: 6
        },
        1000: {
            slidesPerView: 8
        },
    },
});