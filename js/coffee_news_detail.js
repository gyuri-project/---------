var swiper = new Swiper(".list", {
    spaceBetween: 30,
    freeMode: true,
    /* 반응형 */
    breakpoints: {
        300: {
            slidesPerView: 1.5,
        },

        500: {
            slidesPerView: 2.5,
        },

        1000: {
            slidesPerView: 4,
        },
    },
});
