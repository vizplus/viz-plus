<template>
    <section class="slider" id="about">
        <b-container>
            <b-row>
                <b-col>
                    <h2 class="main-title" v-html="$t('home.slider_title')"></h2>
                    <hooper :settings="sliderSettings">
                        <slide v-for="(slide, i) in $t('slider')" v-bind:key="i">
                            <span class="count" v-if="i < 9">0{{i+1}}</span>
                            <span class="count" v-else>{{i+1}}</span>
                            <div class="slider-info desktop">
                                <div class="title" v-html="slide.title"></div>
                                <div class="subtitle" v-html="slide.subtitle"></div>
                            </div>
                            <template v-if="slide.image !== ''">
                                <img class="img-fluid slide-image" :src="require(`~/assets/images/${slide.image}`)" :alt="slide.title">
                            </template>
                            <div class="slider-info mobile">
                                <div class="subtitle" v-html="slide.subtitle"></div>
                            </div>
                        </slide>
                        <hooper-navigation slot="hooper-addons"></hooper-navigation>
                    </hooper>
                    <span class="after" v-html="$t('home.slider_after')"></span>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
    components: {
        Hooper,
        Slide,
        HooperPagination,
        HooperNavigation
    },
    data() {
      return {
        sliderSettings: {
            infiniteScroll: false,
            autoPlay: false,
            wheelControl: false,
            mouseDrag: false,
            transition: 0,
            itemsToShow: 1,
            centerMode: true
        }
      }
    },
}
</script>

<style lang="scss">
.slider {
    background: url(~~/assets/images/slider-bg-01.svg) no-repeat top left, url(~~/assets/images/slider-bg-02.svg) no-repeat top right;
    background-size: auto 100%, 10%;
    min-height: 825px;
    overflow: hidden;

    .after {
        text-align: center;
        font-size: 19px;
        line-height: 1.2em;
        color: #fff;
        position: absolute;
        bottom: -55px;
        right: 5vw;
        @media all and (min-width: 2275px) {right: unset; left: 25px;}
    }

    @media all and (max-width: 1500px) {min-height: 875px;background-position: bottom left, top right; background-size: 100% 100%, 10%; .after {bottom: -25px;} }
    @media all and (min-width: 1325px) and (max-width: 1440px) {min-height: 895px; .after {bottom: -30px;} }

    .main-title {
        font-size: 46px;
        line-height: 1.3em;
        color: #000000;
        margin-bottom: 40px;
        text-align: center;

        .colored {
            color: #0D8CE9;
        }
    }

    .hooper {
        height: auto;
        min-height: 600px;

        .hooper-track {
            align-items: center;
        }
        .hooper-navigation {
            position: absolute;
            max-width: 120%;
            width: 120%;
            margin: auto;
            top: 0;
            bottom: 0;
            right: 0;
            left: -10%;
            
            .hooper-prev {left: 45px;}

            button {
                padding: 0;
                opacity: 1;
                    
                svg {
                    width: 64px;
                    height: 64px;
                    fill: #0D8CE9;
                    transition: .3s;
                }
                    
                &:hover {
                    svg {
                            fill: #0764a7;
                    }
                }
            }
        }

        .hooper-slide {
            display: flex;
            flex-direction: row;
            align-items: center;
            position: relative;

            .slide-image {
                transition: .9s ease-in-out;
                transform: scale(0.65) rotate(0.225turn);
                opacity: 0;
            }

            .title, .subtitle {
                transition: .45s ease-in-out;
                opacity: 0;
            }

            &.is-current {

                .title, .subtitle, .slide-image {
                    transform: scale(1) rotate(0turn);
                    opacity: 1;
                }
            }
        }
        .count {
            font-size: 32px;
            font-weight: 600;
            color: #000;
            opacity: 0;
            position: absolute;
            top: 20px;
            right: 0px;
        }
        .slide-image {
            display: block;
            margin-left: auto;
            margin-right: 0;
        }
        .slider-info {
            display: inline-flex;
            width: 50%;
            flex-direction: column;
            position: relative;

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
                margin-top: 15px;
            }
        }
    }

    .is-disabled {
        display: none;
    }
}

/* slider media */

@media all and (max-width: 990px){
    .slider {
        .main-title {
            font-size: 40px;
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
            text-align: left;
            margin-bottom: 25px;
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
            font-size: 36px;
        }

        div.subtitle {
            font-size: 24px;
            width: 80%;
        }
    }
}

@media all and (max-width: 548px){
    .slider {
        .main-title {
            font-size: 30px;
        }
    }
    .slider .hooper img.slide-image {
        max-height: 225px;
    }
    .slider .hooper .slider-info {
        div.title {
            font-size: 30px;
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
            font-size: 16px;
            bottom: -60px;
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
</style>