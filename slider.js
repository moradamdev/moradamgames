const imageContainer = document.querySelector('.image-slide');
const imageSlide = document.querySelectorAll('.image-slide img');


//buttons
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

let count = 1;
var size = imageSlide[0].clientWidth;
imageContainer.style.transform = 'translateX(' + (-size * count) + 'px)';

nextBtn.addEventListener('click', () => {
        imageContainer.style.transition = "transform 0.4s ease-in-out";
        count++;
        imageContainer.style.transform = 'translateX(' + (-size * count) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if(count <= 0) return;
    imageContainer.style.transition = "transform 0.4s ease-in-out";
    count--;
    imageContainer.style.transform = 'translateX(' + (-size * count) + 'px)';
});

imageContainer.addEventListener('transitionend', ()=>{
    if(imageSlide[count].id == 'last-clone'){
        imageContainer.style.transition = 'none';
        count = imageSlide.length - 2;
        imageContainer.style.transform = 'translateX(' + (-size * count) + 'px)';
    }
    if(imageSlide[count].id == 'first-clone'){
        imageContainer.style.transition = 'none';
        count = imageSlide.length - count;
        imageContainer.style.transform = 'translateX(' + (-size * count) + 'px)';
    }
});




