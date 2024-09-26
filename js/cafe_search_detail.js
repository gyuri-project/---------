var swiper = new Swiper(".thumbnail_slide", {
    slidesPerView: 3,
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

const heart = document.querySelector('.fa-heart');
const mark = document.querySelector('.fa-bookmark');

function icon(){
    if (this.classList.contains('fa-regular')) {
        this.classList.replace('fa-regular', 'fa-solid');
    } else {
        this.classList.replace('fa-solid', 'fa-regular');
    }
};

heart.addEventListener('click', icon);
mark.addEventListener('click', icon);


$(function(){
    $('.swiper-slide:nth-child(1)').click(function(){
        $('.pop1').show();
    });
    $('.swiper-slide:nth-child(2)').click(function(){
        $('.pop2').show();
    });

    $('.popup i').click(function(){
        $('.popup').hide();
    });
});