<template>
    <section class="slider" id="about">
        <b-container>
            <b-row>
                <b-col>
                    <h2 class="main-title" v-html="$t('home.slider_title')"></h2>

                    <div class="slider-group w-100">
                        <hooper ref="slider" class="slider-group__center" :settings="sliderSettings">
                            <slide v-for="(slide, i) in $t('slider')" v-bind:key="i">
                                <div class="slider-info desktop">
                                    <div class="navigation">
                                        <button class="navigation__btn" v-on:click="slidePrev()" v-bind:class="{ isDisabled: slideIndex === 0 }">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" fill="none" viewBox="0 0 27 24">
                                                <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM27 10.5L2 10.5V13.5L27 13.5V10.5Z" fill="#0D8CE9"/>
                                            </svg>
                                        </button>
                                        
                                        <div class="count" v-if="i < 9">0{{i+1}} / {{ +$t('slider').length }}</div>
                                        <div class="count" v-else>{{i+1}} / {{ +$t('slider').length }}</div>
                                        
                                        <button class="navigation__btn" v-on:click="slideNext()" v-bind:class="{ first: !slideFirst, isDisabled: slideIndex === ( (+$t('slider').length) + (-1)) }">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" fill="none" viewBox="0 0 27 24">
                                                <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807612 14.9792 0.807612 14.3934 1.3934C13.8076 1.97918 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM0 13.5L25 13.5V10.5L0 10.5L0 13.5Z" fill="#0D8CE9"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="title" v-html="slide.title"></div>
                                    <div class="subtitle" v-html="slide.subtitle"></div>
                                </div>
                                <template v-if="slide.image !== ''">
                                    <SliderImages :name="slide.image"/>
                                </template>
                                <div class="slider-info mobile">
                                    <div class="subtitle" v-html="slide.subtitle"></div>
                                </div>
                            </slide>
                        </hooper>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import SliderImages from "@/components/SliderImages.vue"
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
    components: {
        Hooper,
        Slide,
        SliderImages
    },
    data() {
      return {
        slideFirst: false,
        slideIndex: 0,
        sliderSettings: {
            infiniteScroll: false,
            autoPlay: false,
            wheelControl: false,
            mouseDrag: false,
            touchDrag: false,
            keysControl: false,
            transition: 0,
            itemsToShow: 1,
            centerMode: true
        }
      }
    },
    methods: {
        slidePrev() {
            if (this.slideIndex !== 0) {
                this.$refs.slider.slidePrev();
                this.slideIndex--;
            }
        },
        slideNext() {
            if (this.slideIndex < ( (+this.$t('slider').length) + (-1))) {
                this.$refs.slider.slideNext();
                this.slideIndex++;

                if (!this.slideFirst) { this.slideFirst = true; }
            }
        }
    }
}
</script>

<style lang="scss">
.slider {
    background: url(~~/assets/images/slider-bg-01.svg) no-repeat bottom left, url(~~/assets/images/slider-bg-02.svg) no-repeat top right;
    background-size: auto, 10%;
    min-height: 750px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    @media all and (min-width: 1600px) {
        min-height: 805px;
    }

    /* @media all and (max-width: 1500px) {min-height: 875px;background-position: bottom left, top right; background-size: 100% 100%, 10%;} */

    .main-title {
        font-size: 42px;
        line-height: 1.3em;
        color: #000000;
        margin-bottom: 10px;
        text-align: center;

        .colored {
            color: #0D8CE9;
        }
    }

    .navigation {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin: 0 0 20px;
        @media all and (max-width: 990px) {margin: 5px 0 60px;}
        @media all and (max-width: 540px) {margin: 10px 0 30px; svg{max-width: 30px;}}

        .count {min-width: 60px;display: flex;align-items: center;justify-content: center;}
        @media all and (max-width: 540px) {.count {min-width: 40px}}
        &__btn + .navigation__btn {margin-left: 20px;}
        &__btn {box-shadow: none;border: none;background: transparent;transition: .3s; &:hover {opacity:.75;}}
        &__btn.isDisabled {pointer-events: none;opacity: .25;}
        &__btn.first svg {animation: .825s linear .825s infinite alternate arrowFirst;}
    }

    .hooper {
        height: auto;
        min-height: 475px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media all and (max-width: 1400px) and (min-width: 1300px){width: 95%; margin-left: auto; margin-right: 0;}
        @media all and (max-width: 1300px) and (min-width: 1105px){width: 90%; margin-left: auto; margin-right: 0;}
        @media all and (max-width: 1105px) and (min-width: 990px){width: 87.5%; margin-left: auto; margin-right: 0;}

        .hooper-track {
            align-items: center;
        }

        .hooper-slide {
            display: flex;
            flex-direction: row;
            align-items: center;
            position: relative;

            .svg-image {
                margin-left: auto; margin-right: 0;
                max-width: 47.5%;
                width: 100%;

                svg {max-width: 100%; width: 100%; max-height: 30vw;height: 100%; margin-left: auto; margin-right: 0; display: block;}
                @media all and (min-width: 1890px) {svg {max-height: 25vw;}}
                svg .lay-01 {opacity: 0; transform: scale(0.45);transition: 0.75s}
                svg .lay-02, svg .lay-03, svg .lay-04 {opacity: 0;transition: 1.5s;}
            }
            @media all and (max-width: 990px) {
                .svg-image {
                    margin: 30px auto 15px;
                    max-width: 100%;
                    svg {max-height: 60vw;}
                }
            }

            .slide-image {
                transition: .9s ease-in-out;
                transform: scale(0.65) rotate(0.225turn);
                opacity: 0;
            }
            .title, .subtitle {
                transition: .7s ease-in-out;
                opacity: 0;
            }

            &.is-current {
                .navigation {transition-delay: 0s}
                .title {transition-delay: 0.4s}
                .subtitle {transition-delay: 0.7s}
                .title, .subtitle {opacity: 1}

                .svg-image {
                    svg .lay-01 {transition-delay: 0.4s}
                    svg .lay-02 {transition-delay: 0.85s}
                    svg .lay-03 {transition-delay: 1s}
                    svg .lay-04 {transition-delay: 1.25s}

                    svg .lay-01 {opacity: 1;transform: scale(1); }
                    svg .lay-02, svg .lay-03, svg .lay-04 {opacity: 1;}
                }

                .slide-image {
                    transform: scale(1) rotate(0turn);
                    opacity: 1;
                }
            }
        }
        .count {
            font-size: 18px;
            font-weight: 500;
            color: #8C8C8C;
            margin: auto 13px;
            
            @media all and (max-width: 540px){
                font-size: 16px;
            }
        }
        .slide-image {
            display: block;
            margin-left: auto;
            margin-right: 0;
        }
        .slider-info {
            display: inline-flex;
            justify-content: flex-start;
            width: 50%;
            flex-direction: column;
            position: relative;
            @media all and (min-width: 990px) {min-height: 300px;}

            .title {
                font-size: 34px;
                line-height: 1.2em;
                color: #000000;

                .colored {
                    color: #0D8CE9;
                }
            }
            .subtitle {
                font-size: 21px;
                line-height: 1.2em;
                color: #000000;
                margin-top: 30px;
            }
        }
    }

    .is-disabled {
        display: none;
    }
}

@keyframes arrowFirst {
 from { transform: scale(1, 1); }
 to { transform: scale(1.4, 1.4); }
}

/* slider media */

@media all and (max-width: 990px){
    .slider {
        .main-title {
            font-size: 40px;
            text-align: left;
        }
    }
    .slider .hooper .hooper-track {
        align-items: flex-start;
    }
    .slider .hooper .hooper-slide {
        flex-wrap: wrap;
    }
    .slider .hooper img.slide-image {
        margin: 30px auto 25px;
        max-height: 350px;
    }
    .slider .hooper .slider-info {
        width: 100%;
        
        div.subtitle {
            width: 70%;
            margin-left: auto;
            margin-right: 0;
        }
    }
}

@media all and (max-width: 768px){
    .slider {
        .main-title {
            font-size: 36px;
        }
    }
    .slider .hooper div.hooper-navigation {
        max-width: 108%;
        width: 108%;
        left: -5%;
    }
    .slider .hooper img.slide-image {
        max-height: 300px;
        max-width: 85%;
    }
    .slider .hooper .slider-info {
                
        div.title {
            font-size: 34px;
        }

        div.subtitle {
            font-size: 22px;
            width: 80%;
        }
    }
}

@media all and (max-width: 548px){
    .slider {
        .main-title {
            font-size: 28px;
        }
    }
    .slider .hooper img.slide-image {
        max-height: 225px;
    }
    .slider .hooper .slider-info {
        div.title {
            font-size: 24px;
        }
        div.subtitle {
            font-size: 18px;
        }
    }
}

/* slider-info media */

@media all and (max-width: 990px) {
    section.slider {
        background: url(~~/assets/images/slide-mobile-bg.svg) no-repeat bottom center;
        background-size: contain;
        min-height: 925px;

        .after {
            font-size: 21px;
            bottom: -70px;
        }
    }
}

@media all and (max-width: 768px) {
    section.slider {
        min-height: 915px;

        .after {
            font-size: 18px;
            bottom: -120px;
        }
    }
}

@media all and (max-width: 580px) {
    section.slider {
        min-height: 895px;

        .after {
            font-size: 18px;
            bottom: -130px;
        }
    }
}

@media all and (max-width: 548px) {
    section.slider {
        min-height: 755px;

        .after {
            font-size: 18px;
            bottom: -50px;
        }
    }
}

@media all and (max-width: 436px) {
    section.slider {

        .after {
            font-size: 14px;
        }
    }
}

@media all and (min-width: 990px) {
    .hooper .slider-info.mobile {
        display: none;
    }
}
@media all and (max-width: 990px) {
    .hooper .slider-info.desktop {
        
        .subtitle {
            display: none
        }
    }
}

@media all and (min-width: 680px) and (max-width: 990px) {
    .hooper .slider-info.mobile {
        min-height: 320px;
    }
}
@media all and (min-width: 490px) and (max-width: 680px) {
    .hooper .slider-info.mobile {
        min-height: 270px;
    }
}
@media all and (min-width: 400px) and (max-width: 490px) {
    .hooper .slider-info.mobile {
        min-height: 240px;
    }
}
</style>