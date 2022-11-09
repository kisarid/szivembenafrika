<template>
  <div id="app">
    <div class="header-holder"></div>
    <Header :menuItems="menuItems" />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'
import modal from '@/components/moyo/modal.vue'
import { MenuItem } from '@/interfaces/menu-item'

@Component({
  name: 'App',
  components: { Header, Footer, container, heading, modal },
})
export default class App extends Vue {
  @Watch('$route', { immediate: true, deep: true })
  onUrlChange() {
    window.scrollTo(0, 0)
  }

  getTranslation(path: string): string {
    return this.$i18n.t(path) as string
  }

  get menuItems(): MenuItem[] {
    return [
      {
        text: this.getTranslation('1.menu'),
        submenu: [
          { text: this.getTranslation('1.submenu1'), route: 'rolunk' },
          { text: this.getTranslation('1.submenu2'), route: 'eves-beszamolok' },
        ],
      },
      {
        text: this.getTranslation('2.menu'),
        submenu: [
          { text: this.getTranslation('2.submenu1'), route: 'alapelvek' },
          { text: this.getTranslation('2.submenu2'), route: 'hol-segitunk' },
          { text: this.getTranslation('2.submenu3'), route: 'projektjeink' },
        ],
      },
      {
        text: this.getTranslation('3.menu'),
        submenu: [
          { text: this.getTranslation('3.submenu1'), route: 'onkentesseg' },
          { text: this.getTranslation('3.submenu2'), route: 'gyermektamogatas' },
          { text: this.getTranslation('3.submenu3'), route: 'graduate-a-girl' },
          { text: this.getTranslation('3.submenu4'), route: 'adomanyozas' },
          { text: this.getTranslation('3.submenu5'), route: 'esemenyek' },
        ],
      },
      { text: this.getTranslation('4.menu'), route: 'media' },
      { text: this.getTranslation('5.menu'), route: 'blog' },
      { text: this.getTranslation('6.menu'), route: 'tamogatok' },
      { text: this.getTranslation('7.menu'), route: 'kapcsolat' },
    ]
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap');

html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  color: var(--moyo-font-dark);
  background-color: var(--moyo-light);
  -webkit-tap-highlight-color: transparent;

  // colors
  --moyo-font-deep-dark: #53504c;
  --moyo-font-dark: #6f6a66;
  --moyo-font-light: #ccc0c0;

  --moyo-light: #f9f1e6;
  --moyo-highlight: #e95d00;

  --moyo-yellow: #ffc55f;
  --moyo-orange: #e7ad47;
  --moyo-grey: #53504c;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header-holder {
  width: 100%;
  height: 70px;

  @media (min-width: 768px) {
    height: 80px;
  }
}

section {
  margin-bottom: 20px;
}

.sub-heading {
  margin: 0 0 20px 0;
  font-size: 20px;
  font-weight: bold;

  &.center {
    font-size: 24px;
    text-align: center;
  }
}

.text-and-pic {
  display: grid;
  grid-template: auto auto / 100%;
  gap: 20px;

  .text p:first-child {
    margin-top: 0;
  }

  @media (min-width: 1024px) {
    grid-template: auto / 1fr 1fr;

    &.two-three {
      grid-template: auto / 2fr 3fr;
    }

    &.three-two {
      grid-template: auto / 3fr 2fr;
    }
  }
}

.pic-grid,
.pic-flex {
  gap: 15px;
}

.pic-grid {
  display: grid;
  grid-template: auto / 1fr;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    grid-template: auto / 1fr 1fr;
  }
}

.pic-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

a {
  color: var(--moyo-font-deep-dark);
}

a:hover {
  color: var(--moyo-highlight);
  transition: color 300ms ease;
}

svg {
  height: 100%;

  * {
    transition: fill 0.4s ease, stroke 0.4s ease;
  }
}

.donation-info {
  width: fit-content;
  padding: 20px;
  border: 1px solid var(--moyo-font-light);
  border-radius: 5px;

  .title {
    margin-bottom: 15px;
    font-size: 110%;
  }

  p {
    margin: 0;
    margin-bottom: 5px;
    padding-left: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.vm--modal {
  max-height: 90vh;
}

.swiper-container {
  z-index: auto !important;
}

.swiper-wrapper {
  z-index: auto !important;
}
</style>

<i18n>
{
  "hu": {
    "1": {
      "menu": "Rólunk",
      "submenu1": "Csapatunk",
      "submenu2": "Éves beszámolók"
    },
    "2": {
      "menu": "Így segítünk",
      "submenu1": "Alapelvek",
      "submenu2": "Hol segítünk?",
      "submenu3": "Projektjeink"
    },
    "3": {
      "menu": "Így segíthetsz",
      "submenu1": "Önkéntesség",
      "submenu2": "Gyermektámogatás",
      "submenu3": "Graduate a Girl!",
      "submenu4": "Adományozás",
      "submenu5": "Események"
    },
    "4": {
      "menu": "Média"
    },
    "5": {
      "menu": "Blog"
    },
    "6": {
      "menu": "Támogatók"
    },
    "7": {
      "menu": "Kapcsolat"
    }
  },
  "en": {
   "1": {
      "menu": "About us",
      "submenu1": "Our team",
      "submenu2": "Annual reports"
    },
    "2": {
      "menu": "How we help",
      "submenu1": "Principles",
      "submenu2": "Where do we help?",
      "submenu3": "Our projects"
    },
    "3": {
      "menu": "How you can help",
      "submenu1": "Volunteering",
      "submenu2": "Child support",
      "submenu3": "Graduate a Girl!",
      "submenu4": "Donation",
      "submenu5": "Events"
    },
    "4": {
      "menu": "Media"
    },
    "5": {
      "menu": "Blog"
    },
    "6": {
      "menu": "Supporters"
    },
    "7": {
      "menu": "Contact"
    }
  }
}
</i18n>