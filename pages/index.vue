<template>
  <main class="main" v-bind:class="{ hide: hideMain }">
    <header class="header">
      <b-container>
        <b-row class="align-items-center">
          <b-col>
            <img class="img-fluid logo" src="~~/assets/images/logo.svg" alt="Viz Logotype">
          </b-col>
          <b-col>
            <div class="lang-switch text-right">
              <nuxt-link :to="switchLocalePath('ru')">RU</nuxt-link>
              <!--<span>/</span>
              <nuxt-link :to="switchLocalePath('en')">ENG</nuxt-link>-->
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>
    
    <section class="entry-slide">
      <b-container>
        <b-row>
          <b-col>
            <h1 class="title" v-html="$t('home.entry_title')"></h1>
            <h2 class="subtitle" v-html="$t('home.entry_subtitle')"></h2>
            <div class="button-group w-100">
              <a href="#about" class="btn button arrow">
                {{ $t('home.read_more') }}
                <img class="img-fluid" src="~~/assets/images/arrow.svg" alt="">
              </a>
              <a href="#guide" class="btn button arrows">
                {{ $t('home.connect') }}
                <img class="img-fluid" src="~~/assets/images/arrows.svg" alt="">
              </a>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <Slider />

    <section class="advantages">
      <b-container>
        <b-row>
          <b-col v-for="(advantage, i) in $t('advantages')" v-bind:key="i">
            <div class="title" v-html="`1,5`" v-if="advantage.title === `1,5`"></div>
            <div class="title" v-html="`$`+advantages[advantage.title]" v-else-if="advantage.title === `supply_value`"></div>
            <div class="title" v-html="advantages[advantage.title]" v-else></div>

            <div class="subtitle" v-html="advantage.subtitle"></div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section id="guide">
      <Tabs/>
      <TabsMobile/>
    </section>

    <footer class="footer">
      <b-container fluid>
        <b-row>
          <b-col cols="12" sm="12" md="12" lg="3" xl="4">
            <span class="logo">VIZ+</span>
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="9" xl="8" class="right-col">
            <ul class="viz-list">
              <li v-for="link in $t('viz_list')" v-bind:key="link.name">
                <a class="link" :href="link.link" target="_blank" v-html="link.name"></a>
              </li>
            </ul>
            <a class="tg-link link" target="_blank" :href="link.link" v-for="(link, i) in $t('footer_links')" v-bind:key="i">
              {{link.name}}
            </a>
            <div class="email">
              <a class="mail-link link" :href="'mailto:'+$t('home.email')" v-html="$t('home.email')"></a>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </footer>

  </main>
</template>

<script>
import Slider from '~~/components/Slider.vue'
import Tabs from '~~/components/Tabs.vue'
import TabsMobile from '~~/components/TabsMobile.vue'

export default {
  components: {
        Slider, Tabs, TabsMobile
  },
  head() {
    return {
      title: this.$t('title'),
      htmlAttrs: {
          lang: this.$i18n.locale,
      }
    };
  },
  
  transition: {
    name: 'slide',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$anime.set(el, {
        scale: 1,
        opacity: 0,
        top: '-100%'
      })
    },

    enter(el, done) {
      this.$anime({
        targets: el,
        opacity: [0, 1],
        top: ['-100%', 0],
        duration: 900,
        easing: 'easeInOutSine',
        complete: done
      })
    },

    leave(el, done) {
      this.$anime({
        targets: el,
        opacity: [1, 0],
        top: [0, '100%'],
        duration: 0,
        easing: 'easeInOutSine',
        complete: done
      })
    }
  },

  data() {
    return {
      hideMain: true,
      advantages: [],
    }
  },

  mounted() {
    setTimeout(()=>{
      this.hideMain = false
    }, 425)
  },

  methods: {
  },

  async fetch() {
    this.advantages = await fetch(
      `https://info.viz.plus/ajax/stats/`
    ).then(res => res.json())
  }
}
</script>

<style lang="scss">
$primary-color: #000000;
$main-color: #0D8CE9;

html {scroll-behavior: smooth;}
body {
  font-family: 'Montserrat';
}

.main {
  opacity: 1;
  transition: 1s;

  &.hide {opacity: 0;}
}

.header {
  padding: 30px 0;

  .logo {
    max-width: 66px;
    width: 100%;
    height: 66px;
  }
  .lang-switch {
    font-size: 21px;
    line-height: 1.2em;
    
    a {
      color: $main-color;
      transition: .3s;

      &.nuxt-link-exact-active {
        color: $primary-color;
        pointer-events: none;
      }
    }
  }
}

.entry-slide {
  padding: 80px 0 100px;
  background: url(~~/assets/images/bg-entry.png) no-repeat top right;

  .col {
    padding-left: 40px;
  }
  .title {
    font-size: 46px;
    line-height: 1.3em;
    font-weight: 500;
    color: $main-color;
    margin: 0;
  }
  .subtitle {
    font-size: 24px;
    line-height: 1.3em;
    font-weight: 400;
    color: $primary-color;
    margin: 40px 0 45px;
  }
  .button-group {

    .btn {
      min-height: 60px;
      text-align: center;
      font-size: 21px;
      line-height: 1.2em;
      color: $primary-color;
      border: 1px solid $primary-color;
      border-radius: 5px;
      padding: 5px 15px 10px;
      transition: .3s;

      &:hover {
        color: $main-color;
      }

      &.arrow img {max-height: 10px; margin-top: 12px;}
      &.arrows img {max-height: 16px}
      img {
        display: block;
        position: relative;
        width: 57px;
        margin: 8px auto 0;
        transition: .3s;
      }
    }

    .btn + .btn {
      margin-left: 20px;
    }
  }
}

.advantages {
  padding: 50px 0 60px;

  .title {
    color: $main-color;
    font-size: 40px;
    font-weight: 500;
    line-height: 1.2em;
  }
  .subtitle {
    margin-top: 5px;
    color: $primary-color;
    font-size: 21px;
    line-height: 1.3em;
    padding-right: 6.5%;
  }
}

.footer {
  margin-top: 40px;
  padding: 90px 60px 30px;
  display: flex;
  align-items: flex-end;
  background: url(~~/assets/images/footer-bg.svg) no-repeat top center;
  background-size: cover;
  min-height: 160px;

  .row {
    align-items: flex-end;
  }
  .right-col {
    text-align: right;
  }
  .viz-list {
    padding: 0;
    margin: 0 0 15px;
    display: flex;
    justify-content: flex-end;

    li + li {margin-left: 12.5px}

    li {
      list-style: none;
      display: inline-flex;

      .link {
        border-bottom: none;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.875em;

        &:hover {text-decoration: underline;}
      }
    }
  }

  .link {
    position: relative;
    color: #fff;
    font-weight: 500;
    font-size: 21px;
    line-height: 1.3em;
    border-bottom: 1px solid #fff;
    transition: .2s;
    display: inline-flex;
    
    &.tg-link::after {content: '';position: absolute;top: -5px;left: -40px;width: 38px;height: 38px;background: url(~~/assets/images/tg-planer.svg) no-repeat center center;}
    &.mail-link::after {content: '';position: absolute;top: 0;left: -37.5px;width: 34px;height: 34px;background: url(~~/assets/images/i-mail.svg) no-repeat center center;}

    &:hover {
      border-bottom: 1px solid transparent;
      text-decoration: none;
    }
  }
  .email {
    display: inline-flex;
  }
  .logo {
    color: #fff;
    opacity: .5;
    font-weight: bold;
    font-size: 92px;
    line-height: 1.4rem;
  }
}

@media all and (min-width: 570px){
  .footer .email {
     margin-left: 45px;
  }
}

/* media */
@media all and (max-width: 990px) {
  .entry-slide {
    padding: 40px 0 60px;
  }
  .advantages {
    padding: 40px 0 60px;
    
    .title {
      font-size: 32px;
    }
    .subtitle {
      font-size: 18px;
    }
  }
  .footer {
    .right-col {text-align: left;}
    .viz-list {margin: 30px 0 15px;justify-content: flex-start;}
    .tg-link.link {margin-left: 30px}
  }
}

@media all and (max-width: 768px) {
  .entry-slide {
    padding: 40px 0 80px;

    .col {
      padding-left: 20px;
    }

    .title {
      font-size: 40px;
    }
    .subtitle {
      font-size: 24px;
    }
    .button-group .btn {
      font-size: 21px;
    }
  }
  .advantages {
    padding: 60px 20px 40px;
    
    .title {
      font-weight: 500;
      font-size: 28px;
    }
    .subtitle {
      font-size: 16px;
      margin-bottom: 30px;
    }
  }
  .footer {
    .link {
      font-size: 18px;
    }
    .logo {
      font-size: 64px;
    }
  }
}

@media all and (max-width: 690px) {
  .footer {
    .viz-list {flex-direction: column; li + li {margin-left: 0px}}
  }
}

@media all and (max-width: 670px) {
  .footer {
    .email {display: flex; margin: 10px 0 0 30px}
  }
}

@media all and (max-width: 568px) {
  .header {
    .lang-switch {
      font-size: 18px;
    }
  }
  .entry-slide {
    background-position: center left;

    .col {
      padding-left: 15px;
    }

    .title {
      font-size: 32px;
    }
    .subtitle {
      font-size: 18px;
    }
    .button-group .btn {
      min-height: auto;
      font-size: 18px;
      position: relative;
      padding: 7.5px 12.5px;

      &.arrow img {margin-top:0px;}
      
      img {
        position: absolute;
        display: block;
        bottom: -30px;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
    }
  }
  .footer {
    background: url(~~/assets/images/bg-mobile-footer.svg) no-repeat top center;
    background-size: cover;
    padding: 80px 0 40px 10px;

    .col:nth-child(2) {
      text-align: left!important;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: baseline;
    }

    .row {
      flex-direction: column;
    }
    .link {
      font-size: 16px;
      margin-left: 0!important;

       &.tg-link::after, &.mail-link::after {left: unset; top: -7.5px; right: -40px;}
    }
    .link + .link {
      margin-left: 0;
      margin-top: 24px;
    }
    .email {
      margin-left: 0;
      margin-top: 12px;
    }
    .logo {
      font-size: 70px;
      display: block;
      width: 100%;
      margin-bottom: 30px;
    }
  }
}

@media all and (max-width: 420px) {
  .entry-slide {

    .title {
      font-size: 28px;

      br {
        display: none;
      }
    }
    .button-group .btn {
      font-size: 16px;
      padding: 5px 7.5px;
    }
  }
}

@media all and (max-width: 340px) {
  .entry-slide {

    .button-group .btn {
      font-size: 14px;
      padding: 5px;
    }
  }
}

/* media tabs */
@media all and (min-width: 990px) {
  section.tabs-mobile {
    display: none!important;
  }
}

@media all and (max-width: 990px) {
  section.tabs {
    display: none!important;
  }
}
</style>