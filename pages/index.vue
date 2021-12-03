<template>
  <main>
    <header class="header">
      <b-container>
        <b-row class="align-items-center">
          <b-col>
            <img class="img-fluid logo" src="~~/assets/images/logo.svg" alt="Viz Logotype">
          </b-col>
          <b-col>
            <div class="lang-switch text-right">
              <nuxt-link :to="switchLocalePath('ru')">RU</nuxt-link>
              <span>/</span>
              <nuxt-link :to="switchLocalePath('en')">ENG</nuxt-link>
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
            <div class="title" v-html="advantage.title"></div>
            <div class="subtitle" v-html="advantage.subtitle"></div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <Tabs/>
    
    <TabsMobile/>

    <footer class="footer">
      <b-container fluid>
        <b-row>
          <b-col>
            <span class="logo">VIZ+</span>
          </b-col>
          <b-col class="text-right">
            <a class="link" target="_blank" :href="link.link" v-for="(link, i) in $t('footer_links')" v-bind:key="i">
              {{link.name}}
            </a>
            <div class="email">
              <a class="link" :href="'mailto:'+$t('home.email')" v-html="$t('home.email')"></a>
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
        duration: 750,
        easing: 'easeInOutSine',
        complete: done
      })
    },

    leave(el, done) {
      this.$anime({
        targets: el,
        opacity: [1, 0],
        top: [0, '100%'],
        duration: 750,
        easing: 'easeInOutSine',
        complete: done
      })
    }
  }
}
</script>

<style lang="scss">
$primary-color: #000000;
$main-color: #0D8CE9;

body {
  font-family: 'Montserrat';
}

.header {
  padding: 30px 0;

  .logo {
    max-width: 66px;
    width: 100%;
    height: 66px;
  }
  .lang-switch {
    font-size: 24px;
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
  padding: 100px 0 80px;
  background: url(~~/assets/images/bg-entry.png) no-repeat top right;

  .col {
    padding-left: 40px;
  }
  .title {
    font-size: 54px;
    line-height: 1.3em;
    font-weight: 500;
    color: $main-color;
    margin: 0;
  }
  .subtitle {
    font-size: 30px;
    line-height: 1.3em;
    font-weight: 400;
    color: $primary-color;
    margin: 40px 0 45px;
  }
  .button-group {

    .btn {
      min-height: 70px;
      text-align: center;
      font-size: 24px;
      line-height: 1.2em;
      color: $primary-color;
      border: 1px solid $primary-color;
      border-radius: 5px;
      padding: 5px 15px 10px;

      &.arrow img {max-height: 11px; margin-top: 12px;}
      &.arrows img {max-height: 17px}
      img {
        display: block;
        position: relative;
        width: 66px;
        margin: 8px auto 0;
      }
    }

    .btn + .btn {
      margin-left: 10px;
    }
  }
}

.advantages {
  padding: 60px 0 80px;

  .title {
    color: $main-color;
    font-size: 50px;
    font-weight: 500;
    line-height: 1.2em;
  }
  .subtitle {
    color: $primary-color;
    font-size: 25px;
    line-height: 1.3em;
  }
}

.footer {
  margin-top: 40px;
  padding: 80px 60px 30px;
  display: flex;
  align-items: flex-end;
  background: url(~~/assets/images/footer-bg.svg) no-repeat top center;
  background-size: cover;
  min-height: 160px;

  .row {
    align-items: flex-end;
  }

  .link {
    color: #fff;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.3em;
    border-bottom: 1px solid #fff;
    transition: .2s;

    &:hover {
      border-bottom: 1px solid transparent;
      text-decoration: none;
    }
  }
  .link + .link {
    margin-left: 10px;
  }
  .email {
    margin-top: 7.5px;
  }
  .logo {
    color: #fff;
    opacity: .5;
    font-weight: bold;
    font-size: 98px;
    line-height: 1.4rem;
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
    }
    .link + .link {
      margin-left: 0;
      margin-top: 24px;
    }
    .email {
      margin-top: 24px;
    }
    .logo {
      font-size: 70px;
      display: block;
      width: 100%;
      margin-bottom: 60px;
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