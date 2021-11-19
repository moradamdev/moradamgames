const mobileBtn = document.getElementById('mobile-cta')
const previBtn = document.querySelector('#prev-btn');
const nextiBtn = document.querySelector('#next-btn');
const image_slide = document.querySelector('.image-slide');

nav = document.querySelector('nav');
mobileBtnExit = document.getElementById('mobile-exit');
mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
    if(previBtn != null){
        previBtn.style.display = 'none';
        nextiBtn.style.display = 'none';
        image_slide.style.visibility = 'hidden';
    }
})
mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
    console.log(nav.style.zIndex);
    if(previBtn != null){
        previBtn.style.display = 'initial';
        nextiBtn.style.display = 'initial';
        image_slide.style.visibility = 'visible';
    }
})

//check if buttons exist



