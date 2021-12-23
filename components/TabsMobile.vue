<template>
    <section class="tabs-mobile">

        <b-container>
            <b-row>
                <b-col>
                    <h2 class="main-title text-left" v-html="$t('home.tabs_title')"></h2>
                    <ul class="tabs-list">
                        <li class="list-item d-flex justify-content-between align-items-center" @click="openModal(indx)" v-for="(tab, indx) in $t('tabs')" v-bind:key="indx">
                            <span class="name" v-html="tab.name"></span>
                            <span class="count" v-if="indx < 9">0{{indx+1}}</span>
                            <span class="count" v-else>{{indx+1}}</span>
                        </li>
                    </ul>
                </b-col>
            </b-row>
        </b-container>

        <b-modal :id="'tabsModal-'+indx" v-for="(tab, indx) in $t('tabs')" v-bind:key="indx" centered>

            <template #modal-header="{ close }">
                <div class="close-btn" @click="openPrevModal(indx)" v-html="$t('home.back')" v-if="indx != 0"></div>
                <div class="btn" style="opacity: 0;" v-else></div>
                <span class="close" @click="close()">X</span>
            </template>

            <div class="content-body">
                <h3 class="title" v-html="'0'+(indx+1)+'. '+tab.title" v-if="indx < 9"></h3>
                <h3 class="title" v-html="(indx+1)+'. '+tab.title" v-else></h3>
                <div class="content" v-html="tab.content"></div>
                <div class="before-circle"></div>
                <div class="after-circle"></div>

                <b-carousel v-model="slide" controls @sliding-start="onSlideStart" @sliding-end="onSlideEnd" v-if="tab.slider">
                    <b-carousel-slide v-for="(slide, ind) in tab.slider" v-bind:key="ind" :style="'background:'+slide.bg">
                        <div class="title" v-html="slide.title"></div>
                        <div class="subtitle" v-html="slide.subtitle"></div>
                        <div class="name-group">
                            <div class="name" v-html="slide.name"></div>
                        </div>
                        <p class="content" v-html="slide.content"></p>
                        <div class="name-group">
                            <a class="link" :href="'https://'+slide.link" target="_blank" v-html="slide.link"></a>
                        </div>
                    </b-carousel-slide>
                </b-carousel>

                <template v-if="tab.custom_links">
                    <div class="custom-link" v-for="link in tab.custom_links" v-bind:key="link.title">
                        <img :src="'/images/icons/'+link.image" :alt="link.title" v-if="link.image">
                        <a :href="link.url" class="link" target="_blank" v-html="link.title"></a>
                    </div>
                </template>

                <template v-if="tab.after_content">
                    <div class="content" v-html="tab.after_content"></div>
                </template>

                <template v-if="tab.notifications_after_content">
                    <div @click="notificationLink(notification.link)" class="notification" v-for="notification in tab.notifications_after_content" v-bind:key="notification.title">
                        <div class="title-group">
                            <template v-if="notification.icon">
                                <img class="icon" src="~~/assets/images/tg.svg" alt="" v-if="notification.icon == 'telegram'">
                                <img class="icon" src="~~/assets/images/viz.png" alt="Viz" v-else-if="notification.icon == 'viz'">
                                <img class="icon" src="~~/assets/images/viz-media.png" alt="Viz" v-else-if="notification.icon == 'viz_media'">
                                <img class="icon" src="~~/assets/images/v-p.png" alt="Viz Plus" v-else-if="notification.icon == 'viz_plus'">
                                <img class="icon" src="~~/assets/images/v-w.png" alt="Viz World" v-else-if="notification.icon == 'viz_world'">
                            </template>
                            <span class="title" v-html="notification.title"></span>
                            <span class="source" v-if="notification.source" v-html="notification.source"></span>
                        </div>
                        <p class="message" v-html="notification.message" v-if="notification.message"></p>
                    </div>
                </template>

                <template v-if="tab.notification_message">
                    <div class="notification-message">
                        <div class="title" v-html="tab.notification_message"></div>
                    </div>
                </template>

                <ul class="menu" v-if="tab.social_links">
                    <li v-for="slink in tab.social_links" v-bind:key="slink.title">
                        <img :src="'/images/icons/'+slink.image+'.png'" :alt="slink.title" v-if="slink.image" />
                        <span v-html="slink.title"></span>
                    </li>
                </ul>

                <template v-if="tab.notifications">
                    <div @click="notificationLink(notification.link)" class="notification" v-for="notification of tab.notifications" v-bind:key="notification.title">
                        <template v-if="notification.icon">
                            <div class="title-group">
                                <div class="w-100 d-flex align-items-center">
                                    <img class="icon" src="~~/assets/images/tg.svg" alt="" v-if="notification.icon == 'telegram'">
                                    <img class="icon" src="~~/assets/images/viz.png" alt="Viz" v-else-if="notification.icon == 'viz'">
                                    <img class="icon" src="~~/assets/images/v-p.png" alt="Viz Plus" v-else-if="notification.icon == 'viz_plus'">
                                    <img class="icon" src="~~/assets/images/v-w.png" alt="Viz World" v-else-if="notification.icon == 'viz_world'">
                                    <span class="title" v-html="notification.title"></span>
                                </div>
                                <span class="source" v-if="notification.source" v-html="notification.source"></span>
                            </div>
                        </template>

                        <template v-else>
                            <div class="title-group no-icon">
                                <span class="title" v-html="notification.title"></span>
                                <span class="source" v-if="notification.source" v-html="notification.source"></span>
                            </div>
                        </template>
                        <p class="message" v-html="notification.message" v-if="notification.message"></p>
                    </div>
                </template>
            </div>

            <template #modal-footer="{ close }">
                <div class="next-item" @click="openNextModal(indx)" v-if="indx < 10">
                    <span class="name" v-html="$t('tabs['+(indx+1)+'].name')"></span>
                    <span class="count" v-if="indx < 8">0{{indx+2}}</span>
                    <span class="count" v-else>{{indx+2}}</span>
                </div>
                <div class="next-item last" v-else>
                    <span class="name" @click="close()" v-html="$t('home.close')"></span>
                    <span class="count">X</span>
                </div>
            </template>

        </b-modal>

    </section>
</template>

<script>
export default {
    data() {
      return {
        thisTab: 0,
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
      openModal(indx) {
        this.thisTab = indx;
        this.$root.$emit('bv::show::modal', 'tabsModal-'+indx, '#btnShow')
      },
      openPrevModal(indx) {
        this.$root.$emit('bv::hide::modal', 'tabsModal-'+indx, '#btnShow')
        this.$root.$emit('bv::show::modal', 'tabsModal-'+(indx-1), '#btnShow')
      },
      openNextModal(indx) {
        this.$root.$emit('bv::hide::modal', 'tabsModal-'+indx, '#btnShow')
        this.$root.$emit('bv::show::modal', 'tabsModal-'+(indx+1), '#btnShow')
      },
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      notificationLink(link) {
          window.open(link);
      }
    }
}
</script>

<style lang="scss">
.modal {
    .modal-dialog {
        transition: .25s ease-in-out;
        max-width: 100%;
        max-height: 100%;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        
        .modal-header {
            border-bottom: 0;

            .close {
                color: #000;
                font-weight: 600;
                opacity: 0.8;
                font-size: 21px;
                line-height: 1.2em;
            }
        }

        .modal-content {
            height: 100%;
            border-radius: 0;
        }
        
        .modal-body {
            overflow-y: auto;
            overflow-x: hidden;
        }

        .close-btn {
            color: #4E4E4E;
            font-size: 20px;
            line-height: 1.4em;
            display: flex;
            align-items: center;

            &:before {
                content: '';
                width: 36px;
                height: 20px;
                display: inline-flex;
                margin-right: 10px;
                background: url(~~/assets/images/arrow-back.svg) no-repeat center center;
                background-size: cover;
            }
        }
        .modal-footer {
            border-top: 0;
            padding: 0px 15px 15px;

            .next-item {
                width: 100%;
                background: #F4F4F4;
                border-radius: 15px;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                padding: 15px 30px 15px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                * {
                    transition: .3s;
                }

                &:hover {

                    .name {
                        color: #0D8CE9;
                    }
                }

                &.last {

                    .name {
                        font-size: 21px;
                    }
                }

                .name {
                    max-width: 100%;
                    width: 100%;
                    display: flex;
                    color: #000;
                    font-weight: 500;
                    font-size: 21px;
                    line-height: 1.3em;
                    align-items: center;

                    &:before {
                        content: '';
                        background: #0D8CE9;
                        max-width: 24px;
                        width: 100%;
                        height: 24px;
                        border-radius: 100%;
                        display: inline-flex;
                        margin-right: 10px;
                    }
                }
                .count {
                    color: #707070;
                    font-weight: 500;
                    font-size: 21px;
                    line-height: 1.3em;
                    margin-left: 15px;
                }
            }
        }

        .content-body {
            padding: 0px 10px 15px;

            h3.title {
                font-size: 30px;
                line-height: 1.3em;
                font-weight: 400;

                br {
                    display: none;
                }
            }
            .content {
                margin-top: 25px;
                color: #000000;
                font-size: 21px;
                line-height: 1.3em;
                position: relative;
                z-index: 2;
                overflow-y: hidden;
            }
            .custom-link + .custom-link {margin-top: 15px}
            .custom-link {
                display: flex;
                flex-direction: row;
                align-items: center;
                z-index: 2;
                position: relative;

                img {max-width: 100%; width: 28px; height: 28px; margin-right: 10px;}
                .link {font-size: 18px; color: #000; border-bottom: 1px solid #0D8CE9; transition: .2s; &:hover {text-decoration: none; border-bottom: 1px solid transparent;}}
            }
            ul {
                padding: 0;
                margin-top: 5px;
                
                li+li {margin-top: 10px}
                li {
                    width: 100%;
                    font-size: 16px;
                    display: inline-flex;
                    align-items: center;
                    list-style: none;

                    img {width: 26px; height: 26px; object-fit: cover; object-position: center center; margin-right: 10px}
                }
            }
            .content + .notification {
                margin-top: 25px;
            }

            .after-circle {
                background: #0D8CE9;
                border-radius: 100%;
                max-width: 100%;
                width: 214px;
                height: 214px;
                position: absolute;
                top: 40%;
                right: -70px;
                z-index: 1;
                opacity: .85;
            }

            .before-circle {
                background: #0D8CE9;
                border-radius: 100%;
                max-width: 100%;
                width: 95px;
                height: 95px;
                position: absolute;
                bottom: -50px;
                left: -40px;
                z-index: 1;
                opacity: .85;
            }

            .carousel {
            z-index: 2;
            position: relative;
            margin-top: 40px;
            min-height: 405px;
            height: 100%;

            .carousel-item {
                padding: 25px 30px;
                height: 100%;
                position: relative;
                min-height: 455px;

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
                    font-size: 28px;
                    line-height: 1.4em;
                    text-align: left;
                }
                .subtitle {
                    color: #3F3F3F;
                    font-weight: 600;
                    font-size: 21px;
                    line-height: 1.3em;
                    text-align: left;
                }
                .name-group {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 20px;

                    .name {
                        color: #fff;
                        font-weight: 600;
                        font-size: 22px;
                        line-height: 1.3em;
                    }
                    .link {
                        color: #3F3F3F;
                        font-weight: 600;
                        font-size: 16px;
                        line-height: 1.3em;
                    }
                }
                .content {
                    width: 100%;
                    padding-right: 0;
                    margin-top: 20px;
                    font-size: 18px;
                    line-height: 1.2em;
                    text-align: left;
                    color: #232323;
                    min-height: 175px;
                }
            }
            .carousel-control-next {
                top: unset;
                width: auto;
                bottom: 20px;
                right: 25px;
                z-index: 91;

                .carousel-control-next-icon {
                    width: 35px;
                    height: 35px;
                }
            }
            .carousel-control-prev {
                top: unset;
                left: unset;
                right: 125px;
                width: auto;
                bottom: 20px;
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
            margin: 25px 0 20px;
            position: relative;
            z-index: 2;

            .title {
                font-weight: 500;
                font-size: 16px;
                line-height: 1.3em;
                color: #000000;
            }

            .icon {
                display: block;
                font-weight: 600;
                color: #fff;
                text-align: center;
                margin-right: 15px;
                max-width: 24px;
                width: 100%;
                height: 24px;
                background: #0D8CE9;
                font-size: 12px;
                line-height: 24px;
                border-radius: 100%;
            }
        }
        
        .notification {
            background: #F4F4F4;
            padding: 20px 28px 15px 14px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 15px;
            position: relative;
            z-index: 2;

            &:hover {cursor: pointer;background: #eeeeee;box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);}

            .message {
                font-size: 18px;
                line-height: 1.3em;
                color: #000000;
            }

            .title-group {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 20px;

                &.no-icon {
                    flex-wrap: wrap;
                    margin-bottom: 10px;

                    .title {
                        margin-bottom: 10px;
                    }
                    .source {
                        margin-bottom: 10px;
                    }
                }

                .icon {
                    max-width: 30px;
                    width: 100%;
                    height: 30px;
                    border-radius: 100%;
                    margin-right: 15px;
                }
                .title {
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 1.2em;
                    color: #000000;
                }
                .source {
                    color: #707070;
                    font-size: 16px;
                    line-height: 1.3em;
                    font-weight: 500;
                }
            }
        }
        .notification + .notification {
            margin-top: 20px;
        }
    }
    }
}

.tabs-mobile {

    .main-title {
        color: #000000;
        font-size: 32px;
        font-weight: 400;
        line-height: 1.3em;
        margin: 0px 0 30px;
        padding-bottom: 7.5px;
        border-bottom: 1px solid #000;

        .colored {
            color: #0D8CE9;
        }
    }

    .tabs-list {
        display: flex;
        flex-direction: column;
        padding-left: 0;
        
        .list-item + .list-item {
            margin-top: 25px;
        }

        .list-item {
            position: relative;
            background: #F4F4F4;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 20px;
            padding: 9px 35px 9px 25px;

            * {
                transition: .3s;
            }
            &:hover {
                cursor: pointer;

                .name {
                    color: #0D8CE9;
                }
                .count {
                    font-weight: 600;
                }
            }
            .name {
                color: #000;
                font-size: 21px;
                line-height: 1.3em;
            }
            .count {
                position: absolute;
                top: 4px;
                right: 20px;
                color: #000;
                font-size: 14px;
            }
        }
    }
}
</style>