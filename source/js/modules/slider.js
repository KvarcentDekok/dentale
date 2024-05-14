import Swiper from 'swiper';
import {EffectFade, Autoplay} from 'swiper/modules';

export function initHomeSlider() {
    const homeSlider = new Swiper('.home-slider', {
        modules: [EffectFade, Autoplay],
        loop: true,
        lazy: true,
        effect: 'fade',
        autoplay: true,
        speed: 500
    });
}

export function initTeamSlider() {
    const sliderTeam = new Swiper('.team-slider', {
        spaceBetween: 16,
        loop: true,
        lazy: true,
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 4
            }
        }
    });
}