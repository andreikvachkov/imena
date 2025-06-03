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

$('.comerc-hero__btn').on('click', openOffer);


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
