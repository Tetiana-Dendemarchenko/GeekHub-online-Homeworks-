document.addEventListener('DOMContentLoaded', function() {
    const move = document.querySelector('.carousel__move');
    let items = document.querySelectorAll('.carousel__item');
    const left = document.querySelector('.carousel__left');
    const right = document.querySelector('.carousel__right');

    left.addEventListener('click', function() {
        move.insertBefore(items[items.length - 1], items[0]);
        items = document.querySelectorAll('.carousel__item');
    });

    right.addEventListener('click', function() {
        move.appendChild(items[0]);
        items = document.querySelectorAll('.carousel__item');

    });
    
});

/*const move = document.querySelector('.carousel__move');
let items = document.querySelectorAll('.carousel__item');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const dotsNav = document.querySelectorAll('.dot-buttons');
const dots = document.querySelectorAll('.dot-button');



slideWidth = items[0].getBoundingClientRect().width;
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 0 + 'px';
};

items.forEach(setSlidePosition);

const moveToSlide = (move, currentSlide, targetSlide) => {
    move.style.transform = 'translateX(' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

prevButton.addEventListener('click', () => {
    const currentSlide = move.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(move, currentSlide, prevSlide);
});

nextButton.addEventListener('click', () => {
    const currentSlide = move.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(move, currentSlide, nextSlide);
});*/