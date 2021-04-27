const sliderImages = document.getElementById('slide-images');
const indicators = document.querySelectorAll('.indicator');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const movingLimits = 50;
let locationOnStart = 30;
let locationOnMove = 20;
let primaryLocation;
let finalLocation;

function moveSlider(sliderImages) {
    let slideIndex = 0;
    let sliderMoveAction = true;
    const images = sliderImages.getElementsByClassName('slide');
    const imageLength = images.length;
    const imageSize = sliderImages.getElementsByClassName('slide')[0].offsetWidth;
    const firstImage = images[0];
    const lastImage = images[imageLength - 1];
    const cloneFirstImage = firstImage.cloneNode(true);
    const cloneLastImage = lastImage.cloneNode(true);

    sliderImages.onmousedown = startDragging;
    sliderImages.appendChild(cloneFirstImage);
    sliderImages.insertBefore(cloneLastImage, firstImage);

    sliderImages.addEventListener('touchstart', startDragging);
    sliderImages.addEventListener('touchend', finishDragging);
    sliderImages.addEventListener('touchmove', applyDragging);

    prev.addEventListener('click', () => {
        changeImage(-1)
    });
    next.addEventListener('click', () => {
        changeImage(1)
    });

    sliderImages.addEventListener('transitionend', checkIndex);

    useIndicators();

    function startDragging(e) {
        if (!sliderMoveAction) return;
        e.preventDefault();
        primaryLocation = sliderImages.offsetLeft;

        if (e.type === 'touchstart') {
            locationOnStart = e.touches[0].clientX;
        } else {
            locationOnStart = e.clientX;
            document.onmouseup = finishDragging;
            document.onmousemove = applyDragging;
        }
    }

    function applyDragging(e) {
        if (e.type === 'touchmove') {
            locationOnMove = locationOnStart - e.touches[0].clientX;
            locationOnStart = e.touches[0].clientX;
        } else {
            locationOnMove = locationOnStart - e.clientX;
            locationOnStart = e.clientX;
        }

        sliderImages.style.left = (sliderImages.offsetLeft - locationOnMove) + "px";
    }

    function finishDragging() {
        finalLocation = sliderImages.offsetLeft;

        if (finalLocation - primaryLocation < -movingLimits) {
            changeImage(1, 'drag');
        } else if (finalLocation - primaryLocation > movingLimits) {
            changeImage(-1, 'drag');
        } else {
            sliderImages.style.left = (primaryLocation) + "px";
        }

        document.onmouseup = null;
        document.onmousemove = null;
    }

    function changeImage(direction, action) {
        sliderImages.classList.add('shifting');

        if (sliderMoveAction) {
            if (!action) {
                primaryLocation = sliderImages.offsetLeft;
            }

            if (direction === 1) {
                sliderImages.style.left = (primaryLocation - imageSize) + "px";
                slideIndex++;
            } else if (direction === -1) {
                sliderImages.style.left = (primaryLocation + imageSize) + "px";
                slideIndex--;
            }

        }

        sliderMoveAction = false;
    }

    function checkIndex() {
        sliderImages.classList.remove('shifting');

        if (slideIndex === -1) {
            sliderImages.style.left = -(imageLength * imageSize) + "px";
            slideIndex = imageLength - 1;
        }

        if (slideIndex === imageLength) {
            sliderImages.style.left = -imageSize + "px";
            slideIndex = 0;
        }
        clearIndicators();
        useIndicators();

        sliderMoveAction = true;
    }

    function useIndicators() {
        indicators.forEach((indicator, indicatorIndex) => {
            if (indicatorIndex === slideIndex) {
                indicator.classList.add('active');
            }
        })
    }

    function clearIndicators() {
        for (let i = 0; i < indicators.length; i++) {
            indicators[i].classList.remove('active');
        }
    }

    indicators.forEach((indicator, indicatorIndex) => {
        indicator.addEventListener('click', () => {

            if (indicatorIndex !== slideIndex) {
                sliderImages.style.left = -((1 + indicatorIndex) * imageSize) + 'px';
                slideIndex = indicatorIndex;
            } else {
                sliderImages.style.left = -imageSize + 'px';
                slideIndex = 0;
            }
            clearIndicators();
            indicator.classList.add('active');
        })
    })
}

moveSlider(sliderImages);
