
class ItcAccordion {
    constructor(target, config) {
        this._el = typeof target === 'string' ? document.querySelector(target) : target;
        const defaultConfig = {
            alwaysOpen: true,
            duration: 350
        };
        this._config = Object.assign(defaultConfig, config);
        this.addEventListener();
    }
    addEventListener() {
        this._el.addEventListener('click', (e) => {
            const elHeader = e.target.closest('.accordion__header');
            if (!elHeader) {
                return;
            }
            if (!this._config.alwaysOpen) {
                const elOpenItem = this._el.querySelector('.accordion__item_show');
                if (elOpenItem) {
                    elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null;
                }
            }
            this.toggle(elHeader.parentElement);
        });
    }
    show(el) {
        const elBody = el.querySelector('.accordion__body');
        if (elBody.classList.contains('collapsing') || el.classList.contains('accordion__item_show')) {
            return;
        }
        elBody.style['display'] = 'block';
        const height = elBody.offsetHeight;
        elBody.style['height'] = 0;
        elBody.style['overflow'] = 'hidden';
        elBody.style['transition'] = `height ${this._config.duration}ms ease`;
        elBody.classList.add('collapsing');
        el.classList.add('accordion__item_slidedown');
        elBody.offsetHeight;
        elBody.style['height'] = `${height}px`;
        window.setTimeout(() => {
            elBody.classList.remove('collapsing');
            el.classList.remove('accordion__item_slidedown');
            elBody.classList.add('collapse');
            el.classList.add('accordion__item_show');
            elBody.style['display'] = '';
            elBody.style['height'] = '';
            elBody.style['transition'] = '';
            elBody.style['overflow'] = '';
        }, this._config.duration);
    }
    hide(el) {
        const elBody = el.querySelector('.accordion__body');
        if (elBody.classList.contains('collapsing') || !el.classList.contains('accordion__item_show')) {
            return;
        }
        elBody.style['height'] = `${elBody.offsetHeight}px`;
        elBody.offsetHeight;
        elBody.style['display'] = 'block';
        elBody.style['height'] = 0;
        elBody.style['overflow'] = 'hidden';
        elBody.style['transition'] = `height ${this._config.duration}ms ease`;
        elBody.classList.remove('collapse');
        el.classList.remove('accordion__item_show');
        elBody.classList.add('collapsing');
        window.setTimeout(() => {
            elBody.classList.remove('collapsing');
            elBody.classList.add('collapse');
            elBody.style['display'] = '';
            elBody.style['height'] = '';
            elBody.style['transition'] = '';
            elBody.style['overflow'] = '';
        }, this._config.duration);
    }
    toggle(el) {
        el.classList.contains('accordion__item_show') ? this.hide(el) : this.show(el);
    }
}


document.querySelectorAll('.accordion').forEach((accordion) => {
    new ItcAccordion(accordion, {
        alwaysOpen: false
    });
});


const radios = document.querySelectorAll('.gallery-page__btn .radio-input');
const tabs = document.querySelectorAll('.gallery-page__main .tab-content');

const radiosFlat = document.querySelectorAll('.flat-hero__left__btn .radio-input');
const tabsFlat = document.querySelectorAll('.flat-hero__left__content .tab-content');

const radiosCatalog = document.querySelectorAll('.catalog-page__right__btn .radio-input');
const tabsCatalog = document.querySelectorAll('.catalog-page__right__content .tab-content');


function showTab(index) {
    tabs.forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
    });
}

radios.forEach((radio, index) => {
    radio.addEventListener('change', function () {
        if (radio.checked) {
            showTab(index);
        }
    });
});

function showTabFlat(index) {
    tabsFlat.forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
    });
}

radiosFlat.forEach((radio, index) => {
    radio.addEventListener('change', function () {
        if (radio.checked) {
            showTabFlat(index);
        }
    });
});

function showTabCatalog(index) {
    tabsCatalog.forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
    });
}

radiosCatalog.forEach((radio, index) => {
    radio.addEventListener('change', function () {
        if (radio.checked) {
            showTabCatalog(index);
        }
    });
});

document.querySelectorAll('.gallery-page__swiper').forEach((swiperEl, index) => {
    const prevBtn = swiperEl.closest('.tab-content').querySelector('.gallery-page__swiper__prev');
    const nextBtn = swiperEl.closest('.tab-content').querySelector('.gallery-page__swiper__next');

    new Swiper(swiperEl, {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 20,
        navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
        },
    });
});


function openOffer() {
    $('.offer-popup').addClass('active');
    $('.popup-blur').addClass('active');
    $('body').addClass('no-scroll');
}

function closeOffer() {
    $('.offer-popup').removeClass('active');
    $('.popup-blur').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.offer-popup .feedback-popup__close').on('click', closeOffer);

$('.comerc-hero__btn, .planirovka-slider__item__btn').on('click', openOffer);


function openCall() {
    $('.call-popup').addClass('active');
    $('.popup-blur').addClass('active');
    $('body').addClass('no-scroll');
}

function closeCall() {
    $('.call-popup').removeClass('active');
    $('.popup-blur').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.call-popup .feedback-popup__close').on('click', closeCall);

$('.header__feedback-btn').on('click', openCall);

function openBron() {
    $('.bron-popup').addClass('active');
    $('.popup-blur').addClass('active');
    $('body').addClass('no-scroll');
}

function closeBron() {
    $('.bron-popup').removeClass('active');
    $('.popup-blur').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.bron-popup .feedback-popup__close').on('click', closeBron);

$('.flat-hero__bron').on('click', openBron);


function openCatalog() {
    $('.catalog-popup').addClass('active');
    $('.popup-blur').addClass('active');
    $('body').addClass('no-scroll');
}

function closeCatalog() {
    $('.catalog-popup').removeClass('active');
    $('.popup-blur').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.catalog-popup .feedback-popup__close').on('click', closeCatalog);

$('.comerc-advantages__btn').on('click', openCatalog);



function openMenu() {
    $('.mobile-menu').addClass('active');
    $('body').addClass('no-scroll');
}

function closeMenu() {
    $('.mobile-menu').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.mobile-menu__close').on('click', closeMenu);

$('.header__menu-btn').on('click', openMenu);



const category__swiper = new Swiper('.flat-products__swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 16,

    navigation: {
        nextEl: '.flat-products__swiper__next',
        prevEl: '.flat-products__swiper__prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 40
        },
    }
});

const planirovka_slider__swiper = new Swiper('.planirovka-slider__swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 16,

    navigation: {
        nextEl: '.planirovka-slider__swiper__next',
        prevEl: '.planirovka-slider__swiper__prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 40
        },
    }
});

const design__swiper = new Swiper('.design__swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 12,

    navigation: {
        nextEl: '.design__swiper__next',
        prevEl: '.design__swiper__prev',
    },
    breakpoints: {
        768: {
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


let mediaSwiper = null;

function initMediaSwiper() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile && !mediaSwiper) {
        mediaSwiper = new Swiper('.media__swiper', {
            slidesPerView: 'auto',
            loop: true,
            spaceBetween: 16,
        });
    } else if (!isMobile && mediaSwiper) {
        mediaSwiper.destroy(true, true);
        mediaSwiper = null;
    }
}

initMediaSwiper();

window.addEventListener('resize', initMediaSwiper);



document.querySelectorAll('.choosing-header__slider').forEach((sliderBlock) => {
    const rangeInput = sliderBlock.querySelectorAll(".range-input input"),
        priceInput = sliderBlock.querySelectorAll(".price-input span"),
        range = sliderBlock.querySelector(".slider .progress");

    const priceGap = 1;

    rangeInput.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minVal = parseInt(rangeInput[0].value),
                maxVal = parseInt(rangeInput[1].value),
                minRange = parseInt(rangeInput[0].min),
                maxRange = parseInt(rangeInput[0].max);

            if (maxVal - minVal < priceGap) {
                if (e.target.classList.contains("range-min")) {
                    rangeInput[0].value = maxVal - priceGap;
                    minVal = maxVal - priceGap;
                } else {
                    rangeInput[1].value = minVal + priceGap;
                    maxVal = minVal + priceGap;
                }
            }

            priceInput[0].textContent = minVal;
            priceInput[1].textContent = maxVal;
            range.style.left = ((minVal - minRange) / (maxRange - minRange)) * 100 + "%";
            range.style.right = 100 - ((maxVal - minRange) / (maxRange - minRange)) * 100 + "%";
        });
    });
});



$('.catalog-page__filter__dop__header .switch-btn').click(function () {
    $(this).toggleClass('switch-on');

    const $mainBlock = $(this).closest('.catalog-page__filter__dop').find('.catalog-page__filter__dop__main');

    if ($(this).hasClass('switch-on')) {
        $mainBlock
            .stop(true, true)
            .slideDown({
                duration: 300,
                start: function () {
                    $(this).css('display', 'flex');
                }
            });
        $(this).trigger('on.switch');
    } else {
        $mainBlock.stop(true, true).slideUp();
        $(this).trigger('off.switch');
    }
});

$('.catalog-page__filter__bron .switch-btn').click(function () {
    $(this).toggleClass('switch-on');
    if ($(this).hasClass('switch-on')) {
        $(this).trigger('on.switch');
    } else {
        $(this).trigger('off.switch');
    }
});


const $sortBlock = $('.catalog-page__right__sort');
const $sortBtn = $sortBlock.find('.catalog-page__right__sort__btn');
const $sortContent = $sortBlock.find('.catalog-page__right__sort__content');

$sortBlock.on('mouseenter', function () {
    $sortContent.stop(true, true).fadeIn(150);
}).on('mouseleave', function () {
    $sortContent.stop(true, true).fadeOut(150);
});

$sortContent.find('input[type="radio"]').on('change', function () {
    const selectedLabel = $(this).siblings('label').text();
    $sortBtn.text(selectedLabel);
    $sortContent.fadeOut(150);
});


$('.tab-content__row__item').hover(
    function () {
        const imgSrc = $(this).data('img');
        $('.catalog-page__product__img img').attr('src', imgSrc);
        $('.catalog-page__product__img').fadeIn(0);

        $('.catalog-page__filter').fadeOut(10);
    },
    function () {
        $('.catalog-page__product__img').fadeOut(10);

        $('.catalog-page__filter').fadeIn(10);
    }
);



const items = document.querySelectorAll('.genplan__item');
const popup = document.querySelector('.genplan__popup');

const isMobile = window.matchMedia('(max-width: 768px)').matches;

if (isMobile) {
    items.forEach(item => {
        item.addEventListener('click', () => {
            popup.classList.add('active');
        });
    });

    document.addEventListener('click', (e) => {
        const isClickInside = popup.contains(e.target) || [...items].some(item => item.contains(e.target));
        if (!isClickInside) {
            popup.classList.remove('active');
        }
    });
} else {
    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            popup.classList.add('active');
        });

        item.addEventListener('mouseleave', () => {
            popup.classList.remove('active');
        });
    });
}

const closeHandle = document.querySelector('.genplan__popup__close-mob');

let startY = 0;
let isSwiping = false;
let isTap = true;

closeHandle.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
    isSwiping = true;
    isTap = true;
});

closeHandle.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;

    const currentY = e.touches[0].clientY;
    const diffY = currentY - startY;

    if (Math.abs(diffY) > 5) {
        isTap = false;
    }

    if (diffY > 0 && diffY < 150) {
        popup.style.transform = `translateY(${diffY}px)`;
    }
});

closeHandle.addEventListener('touchend', (e) => {
    if (!isSwiping) return;
    isSwiping = false;

    const endY = e.changedTouches[0].clientY;
    const diffY = endY - startY;

    if (isTap || diffY > 50) {
        popup.classList.remove('active');
    }

    popup.style.transform = '';
});


gsap.registerPlugin(ScrollTrigger);

const counters = document.querySelectorAll('.project-label__item .name');

counters.forEach(counter => {
    const finalValue = parseInt(counter.textContent.replace(/\s/g, ''), 10);

    counter.textContent = '0';

    gsap.fromTo(counter,
        { innerText: 0 },
        {
            innerText: finalValue,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.project-label',
                start: 'top 90%',
                once: true,
            },
            snap: { innerText: 1 },
            onUpdate: function () {
                const val = Math.floor(counter.innerText);
                counter.textContent = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
            }
        }
    );
});


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const swiper_ad_page2 = new Swiper('.advantages__page-2__swiper', {
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 16,
    breakpoints: {
        768: {
            slidesPerView: 'auto',
            spaceBetween: 40
        },
    }
});
const swiper_ad_page4 = new Swiper('.advantages__page-4__swiper', {
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 16,
    breakpoints: {
        768: {
            slidesPerView: 'auto',
            spaceBetween: 40
        },
    }
});
const swiper_ad_page7 = new Swiper('.advantages__page-7__swiper', {
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 16,
    breakpoints: {
        768: {
            slidesPerView: 'auto',
            spaceBetween: 40
        },
    }
});



    const lenis = new Lenis({
        duration: 1.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        direction: 'vertical',
        gestureDirection: 'vertical',
        smoothTouch: false,
        touchMultiplier: 2,
    });


    ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
            return arguments.length ? lenis.scrollTo(value) : window.scrollY;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        fixedMarkers: true
    });

    // синхронизация в каждом кадре
    function raf(time) {
        lenis.raf(time);
        ScrollTrigger.update();
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (window.innerWidth >= 769) {
        const pages = gsap.utils.toArray(".advantages__page-main");

        pages.forEach((page, i) => {
            if (i === 0) return;
            gsap.set(page, { right: "-100%" });
        });

        let currentStep = 0;
        let isAnimating = false;

        const sliders = {
            1: {
                swiper: swiper_ad_page2,
                index: 0,
                max: swiper_ad_page2.slides.length - 1
            },
            3: {
                swiper: swiper_ad_page4,
                index: 0,
                max: swiper_ad_page4.slides.length - 1
            },
            6: {
                swiper: swiper_ad_page7,
                index: 0,
                max: swiper_ad_page7.slides.length - 1
            }
        };

        const trigger = ScrollTrigger.create({
            id: "advantages-pin",
            trigger: ".advantages__main",
            start: "top top",
            end: () => `+=${(pages.length - 1) * window.innerHeight}`,
            pin: true,
            scrub: false,
            anticipatePin: 1
        });

        window.addEventListener("wheel", (e) => {
            if (isAnimating) return;
            const trig = ScrollTrigger.getById("advantages-pin");
            if (!trig || !trig.isActive) return;

            const direction = e.deltaY > 0 ? "down" : "up";

            const slider = sliders[currentStep];
            if (slider) {
                const { swiper, max } = slider;

                if (direction === "down" && slider.index < max) {
                    slider.index++;
                    swiper.slideTo(slider.index);
                    return;
                } else if (direction === "up" && slider.index > 0) {
                    slider.index--;
                    swiper.slideTo(slider.index);
                    return;
                }
                // дошли до конца/начала слайдера — идём дальше
            }

            if (direction === "down" && currentStep < pages.length - 1) {
                scrollAndAnimate(currentStep + 1, direction);
            } else if (direction === "up" && currentStep > 0) {
                scrollAndAnimate(currentStep - 1, direction);
            }
        });

        function scrollAndAnimate(step, direction) {
            isAnimating = true;
            currentStep = step;

            const y = trigger.start + step * window.innerHeight;

            lenis.scrollTo(y, {
                duration: 0.6,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });

            pages.forEach((page, index) => {
                if (index === 0) return;

                if (index <= step) {
                    gsap.to(page, {
                        right: "0%",
                        duration: 0.6,
                        ease: "power2.out",
                        overwrite: "auto",
                        onStart: () => {
                            page.style.zIndex = index + 2;
                        }
                    });
                } else {
                    gsap.to(page, {
                        right: "-100%",
                        duration: 0.6,
                        ease: "power2.in",
                        overwrite: "auto"
                    });
                }
            });

            // Разблокировка после анимации
            setTimeout(() => {
                isAnimating = false;
            }, 650); // чуть больше, чем scrollTo duration
        }
    }





    new SplitType('.split-lines-words', {
        types: 'lines words',
        tagName: 'span'
    });
    document.querySelectorAll('.split-lines-words .line').forEach(line => {
        const wrapper = document.createElement('span');
        wrapper.classList.add('line-content');

        while (line.firstChild) {
            wrapper.appendChild(line.firstChild);
        }

        line.appendChild(wrapper);
    });


    const hero = document.querySelector('.hero');
    const heroHeight = hero.offsetHeight;


    gsap.to(hero, {
        y: -heroHeight,
        ease: "none",
        scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: () => `+=${heroHeight * 2}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
        }
    });






    document.querySelectorAll(".anim-split-text").forEach(section => {
        const lines = section.querySelectorAll(".line");

        lines.forEach(line => {
            const lineContent = line.querySelectorAll(".line-content");

            gsap.set(lineContent, { y: "120%", skewY: 1 });

            gsap.to(lineContent, {
                y: "0%",
                skewY: 0,
                rotate: 0,
                duration: 1.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
        });
    });





    gsap.to(".two-section__left__right-border", {
        height: "100%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".two-section__wrap",
            start: "top 65%",
            toggleActions: "play none none none"
        }
    });
    gsap.to(".five-section__left__right-border", {
        height: "100%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".five-section__wrap",
            start: "top 65%",
            toggleActions: "play none none none"
        }
    });

    gsap.to(".two-section__right__img", {
        height: "100%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".two-section__wrap",
            start: "top 65%",
            toggleActions: "play none none none"
        }
    });


    gsap.to(".three-section__left__img", {
        height: "100%",
        duration: 1.7,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".three-section__wrap",
            start: "top 90%",
            toggleActions: "play none none none"
        }
    });

    gsap.to(".five-section__right__img", {
        height: "100%",
        duration: 1.7,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".five-section__right",
            start: "top 90%",
            toggleActions: "play none none none"
        }
    });

    gsap.to(".three-section__right__img__container", {
        height: "100%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".three-section__right",
            start: "top 60%",
            toggleActions: "play none none none"
        }
    });
    gsap.to(".parking__right__img", {
        height: "100%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".parking__wrap",
            start: "top 60%",
            toggleActions: "play none none none"
        }
    });
    gsap.to(".parking__left__img", {
        height: "100%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".parking__wrap",
            start: "top 60%",
            toggleActions: "play none none none"
        }
    });

    gsap.to(".three-section__right__ico", {
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".three-section__wrap",
            start: "top 90%",
            toggleActions: "play none none none",
        }
    });

    document.querySelectorAll(".gradient-text").forEach((el) => {
        gsap.to(el, {
            duration: 0.8,
            ease: "power1.in",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
            },
            onUpdate: function () {
                const progress = this.progress() * 100;

                const stop1 = Math.max(progress - 5, 0).toFixed(2);
                const stop2 = progress.toFixed(2);

                const mask = `linear-gradient(to top,
                black 0%,
                black ${stop1}%,
                rgba(0, 0, 0, 0.6) ${stop2}%,
                rgba(0, 0, 0, 0.2) ${+stop2 + 3}%,
                transparent ${+stop2 + 6}%)`;

                el.style.webkitMaskImage = mask;
                el.style.maskImage = mask;
            }
        });
    });

