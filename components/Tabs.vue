<template>
    <section class="tabs">
        <b-container>
            <b-row>
                <b-col>
                    <h2 class="main-title text-center" v-html="$t('home.tabs_title')"></h2>
                    <b-tabs pills card vertical v-model="tabIndex">
                        <template #tabs-start>
                            <div :class="'tab-indicator '+'tab-'+tabIndex"></div>
                        </template>
                        <b-tab :title="tab.name" :data-index="i+1" v-for="(tab, i) in $t('tabs')" v-bind:key="i">
                            <div class="content-body">
                                <h3 class="title" v-html="tab.title"></h3>
                                <div class="content" v-html="tab.content"></div>

                                <b-carousel v-model="slide" controls @sliding-start="onSlideStart" @sliding-end="onSlideEnd" v-if="tab.slider">
                                    <b-carousel-slide v-for="(slide, ind) in tab.slider" v-bind:key="ind" :style="'background:'+slide.bg">
                                        <div class="title" v-html="slide.title"></div>
                                        <div class="subtitle" v-html="slide.subtitle"></div>
                                        <div class="name-group">
                                            <div class="name" v-html="slide.name"></div>
                                            <a class="link" :href="'https://'+slide.link" target="_blank" v-html="slide.link"></a>
                                        </div>
                                        <p class="content" v-html="slide.content"></p>
                                    </b-carousel-slide>
                                </b-carousel>

                                <template v-if="tab.after_content">
                                    <div class="content after" v-html="tab.after_content"></div>
                                </template>

                                <template v-if="tab.notification_message">
                                    <div class="notification-message">
                                        <span class="icon">—</span>
                                        <div class="title" v-html="tab.notification_message"></div>
                                    </div>
                                </template>

                                <template v-if="tab.notifications">
                                    <div class="notification" v-for="notification in tab.notifications" v-bind:key="notification.title">
                                        <div class="title-group">
                                            <template v-if="notification.icon">
                                                <img class="icon" src="~~/assets/images/tg.svg" alt="" v-if="notification.icon == 'telegram'">
                                                <img class="icon" src="~~/assets/images/viz.png" alt="Viz" v-else-if="notification.icon == 'viz'">
                                                <img class="icon" src="~~/assets/images/v-p.png" alt="Viz Plus" v-else-if="notification.icon == 'viz_plus'">
                                                <img class="icon" src="~~/assets/images/v-w.png" alt="Viz World" v-else-if="notification.icon == 'viz_world'">
                                            </template>
                                            <span class="title" v-html="notification.title"></span>
                                            <span class="source" v-if="notification.source" v-html="notification.source"></span>
                                        </div>
                                        <p class="message" v-html="notification.message"></p>
                                    </div>
                                </template>
                            </div>
                        </b-tab>
                    </b-tabs>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
    data() {
      return {
        tabIndex: 0,
        slide: 0,
        sliding: null,
        tabSliderSettings: {
            infiniteScroll: false,
            autoPlay: false,
            wheelControl: false,
            transition: 350,
            itemsToShow: 1,
            centerMode: false,
        }
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
}
</script>

<style lang="scss">
.tabs {
    margin-bottom: 40px;

    .main-title {
        color: #000000;
        font-size: 60px;
        font-weight: 400;
        line-height: 1.3em;
        margin: 40px 0 90px;

        .colored {
            color: #0D8CE9;
        }
    }

    .col-auto {
        display: flex;
        align-items: center;
    }
    .nav.nav-pills {
        min-width: 376px;
        background: transparent;
        padding: 0 20px 0 0;
        border-right: 1px solid #000;
        height: auto !important;
        transition: .4s;
        position: relative;
    }
    .nav-item {
        text-align: right;
    }
    .nav-item + .nav-item {
        margin-top: 13px;
    }
    .nav-item .nav-link {
        display: inline-flex;
        width: auto;
        position: relative;
        margin-left: 0;
        margin-right: auto;
        padding: 13px;
        border-radius: 30px;
        color: #000;
        font-size: 20px;
        line-height: 1.4em;
        transition: .3s;

        &:hover {
            color: #0D8CE9;
        }
    }
    .nav-item .nav-link::after {
        content: '0' attr(aria-posinset);
        margin-left: 8px;
        font-size: 14px;
        line-height: 1;
        font-weight: 400;
    }
    .nav-item:nth-last-child(1) .nav-link::after {
        content: attr(aria-posinset);
    }
    .nav-item .nav-link.active {
        color: #fff;
        font-weight: bold;
        background: #0D8CE9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .nav-item .nav-link.active::after {
        font-weight: 700;
    }
    .tab-indicator {
        width: 17px;
        height: 17px;
        background: #0D8CE9;
        position: absolute;
        display: block;
        right: -22px;
        top: 0;
        transition: .45s;

        &.tab-0 {top: 0%;}
        &.tab-1 {top: 10.5%;}
        &.tab-2 {top: 20.75%;}
        &.tab-3 {top: 31%;}
        &.tab-4 {top: 41.25%;}
        &.tab-5 {top: 51.5%;}
        &.tab-6 {top: 61.75%;}
        &.tab-7 {top: 72%;}
        &.tab-8 {top: 82.25%;}
        &.tab-9 {top: 97.5%;}

    }

    .card-body {
        padding: 0 70px;
        padding-right: 0;

        &::after {
            content: '';
            background: #0D8CE9;
            border-radius: 100%;
            max-width: 100%;
            width: 214px;
            height: 214px;
            position: absolute;
            top: 0px;
            right: 25px;
            z-index: -1;
        }
        h3.title {
            font-size: 40px;
            line-height: 1.3em;
            font-weight: 400;
        }
        .content {
            padding-right: 20%;
            margin-top: 50px;
            color: #000000;
            font-size: 24px;
            line-height: 1.3em;

            &.after {
                padding-right: 0;
                text-align: justify;
            }
        }

        .content + .notification {
            margin-top: 45px;
        }

        .carousel {
            margin-top: 40px;
            min-height: 575px;
            height: 100%;

            .carousel-item {
                padding: 25px 30px;
                height: 100%;
                position: relative;
                min-height: 550px;

                .carousel-caption {
                    position: relative;
                    right: unset;
                    top: unset;
                    bottom: unset;
                    left: unset;
                    padding: 0;
                    text-align: none;
                }
                .title {
                    color: #fff;
                    font-weight: bold;
                    font-size: 60px;
                    line-height: 1.4em;
                    text-align: left;
                }
                .subtitle {
                    color: #3F3F3F;
                    font-weight: 600;
                    font-size: 40px;
                    line-height: 1.3em;
                    text-align: left;
                }
                .name-group {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 60px;

                    .name {
                        color: #fff;
                        font-weight: 600;
                        font-size: 40px;
                        line-height: 1.3em;
                    }
                    .link {
                        color: #3F3F3F;
                        font-weight: 600;
                        font-size: 24px;
                        line-height: 1.3em;
                    }
                }
                .content {
                    width: 70%;
                    padding-right: 0;
                    margin-top: 20px;
                    font-size: 24px;
                    line-height: 1.3em;
                    text-align: justify;
                    color: #232323;
                    min-height: 220px;
                }
            }
            .carousel-control-next {
                top: unset;
                width: auto;
                bottom: 55px;
                right: 35px;
                z-index: 91;

                .carousel-control-next-icon {
                    width: 35px;
                    height: 35px;
                }
            }
            .carousel-control-prev {
                top: unset;
                left: unset;
                width: auto;
                bottom: 55px;
                right: 125px;
                z-index: 91;

                .carousel-control-prev-icon {
                    width: 35px;
                    height: 35px;
                }
            }
        }

        .notification-message {
            display: flex;
            align-items: center;
            margin: 55px 0 40px;

            .title {
                font-weight: 500;
                font-size: 19px;
                line-height: 24px;
                color: #000000;
            }

            .icon {
                display: block;
                font-weight: 600;
                color: #fff;
                text-align: center;
                margin-right: 20px;
                max-width: 36px;
                width: 100%;
                height: 36px;
                background: #0D8CE9;
                font-size: 18px;
                line-height: 36px;
                border-radius: 100%;
            }
        }
        
        .notification {
            background: #F4F4F4;
            padding: 20px 48px 15px 24px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 15px;

            .message {
                font-size: 22px;
                line-height: 1.4em;
                color: #000000;
            }

            .title-group {
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-bottom: 10px;

                .icon {
                    max-width: 46px;
                    width: 100%;
                    height: 46px;
                    border-radius: 100%;
                    margin-right: 15px;
                }
                .title {
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 1.3em;
                    color: #000000;
                }
                .source {
                    color: #707070;
                    font-size: 21px;
                    line-height: 1.4em;
                    margin-left: auto;
                    margin-right: 0;
                    font-weight: 500;
                }
            }
        }
        .notification + .notification {
            margin-top: 35px;
        }
    }
}
</style>