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
