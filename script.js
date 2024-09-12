const slider = document.querySelector('.image-slider');
const images = document.querySelectorAll('.image-slider img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let index = 0;
function showImage(idx) {
    slider.style.transform = `translateX(${-idx * 100}%)`;
}

prevButton.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : images.length - 1;
    showImage(index);
});

nextButton.addEventListener('click', () => {
    index = (index < images.length - 1) ? index + 1 : 0;
    showImage(index);
});

// Automatically move to the next image every 4 seconds

// setInterval(() => {
//     nextButton.click();
// }, 4000);
