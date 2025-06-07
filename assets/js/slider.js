const design__swiper = new Swiper('.design__swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 12,

    navigation: {
        nextEl: '.design__swiper__next',
        prevEl: '.design__swiper__prev',
    },
    breakpoints: {
        769: {
            slidesPerView: 3,
            spaceBetween: 40
        },
    }
});

function syncDuplicateSlideHeights() {
    const isMobile = window.innerWidth <= 768;
    const realSlides = document.querySelectorAll('.design__swiper .swiper-slide:not(.swiper-slide-duplicate)');
    const duplicateSlides = document.querySelectorAll('.design__swiper .swiper-slide.swiper-slide-duplicate');

    realSlides.forEach((slide, index) => {
        const isEven = (index + 1) % 2 === 0;
        const correspondingDuplicates = [...duplicateSlides].filter(dup => dup.innerHTML === slide.innerHTML);

        correspondingDuplicates.forEach(dup => {
            const img = dup.querySelector('.design__slide-img');
            if (img) {
                if (isMobile) {
                    img.style.height = isEven ? '17.625rem' : '20.4375rem';
                } else {
                    img.style.height = isEven ? '45.5rem' : '39.25rem';
                }
            }
        });
    });
}

syncDuplicateSlideHeights();



const planirovka_slider__swiper = new Swiper('.planirovka-slider__swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 16,

    navigation: {
        nextEl: '.planirovka-slider__swiper__next',
        prevEl: '.planirovka-slider__swiper__prev',
    },
    breakpoints: {
        769: {
            slidesPerView: 4,
            spaceBetween: 40
        },
    }
});