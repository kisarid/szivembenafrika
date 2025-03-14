<template>
  <div id="app">
    <div class="header-holder"></div>
    <Header :menuItems="menuItems" />
    <router-view />
    <Footer style="margin-top: 20px" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'
import { MenuItem } from '@/interfaces/menu-item'
import NewsletterForm from '@/components/moyo/newsletter-form.vue'

@Component({
  name: 'App',
  components: { Header, Footer, container, heading, NewsletterForm },
})
export default class App extends Vue {
  @Watch('$route', { immediate: true, deep: true })
  onUrlChange() {
    window.scrollTo(0, 0)
  }

  mounted() {
    const width = Math.min(window.innerWidth, 400)
    if (window.localStorage.getItem('newsletter-modal-seen') !== 'true') {
      this.$modal.show(
        NewsletterForm,
        {},
        {
          width: `${width}px`,
          height: 'auto',
        }
      )
      window.localStorage.setItem('newsletter-modal-seen', 'true')
    }
  }

  getTranslation(path: string): string {
    return this.$i18n.t(path) as string
  }

  get menuItems(): MenuItem[] {
    return [
      {
        text: this.getTranslation('1.menu'),
        submenu: [
          { text: this.getTranslation('1.submenu1'), route: '/rolunk' },
          {
            text: this.getTranslation('1.submenu2'),
            route: '/eves-beszamolok',
          },
        ],
      },
      {
        text: this.getTranslation('2.menu'),
        submenu: [
          { text: this.getTranslation('2.submenu1'), route: '/alapelvek' },
          { text: this.getTranslation('2.submenu2'), route: '/hol-segitunk' },
          { text: this.getTranslation('2.submenu3'), route: '/projektjeink' },
        ],
      },
      {
        text: this.getTranslation('3.menu'),
        submenu: [
          { text: this.getTranslation('3.submenu1'), route: '/onkentesseg' },
          {
            text: this.getTranslation('3.submenu2'),
            route: '/projektjeink/akitogogon',
            ignoreInMenuHighlight: true,
          },
          {
            text: this.getTranslation('3.submenu3'),
            route: '/gyermektamogatas',
          },
          {
            text: this.getTranslation('3.submenu4'),
            route: '/graduate-a-girl',
          },
          {
            text: this.getTranslation('3.submenu5'),
            route: '/oktatasi-tamogatas',
          },
          { text: this.getTranslation('3.submenu6'), route: '/adomanyozas' },
          { text: this.getTranslation('3.submenu7'), route: '/esemenyek' },
        ],
      },
      {
        text: this.getTranslation('4.menu'),
        submenu: [
          { text: this.getTranslation('4.submenu1'), route: '/media' },
          { text: this.getTranslation('4.submenu2'), route: '/vlog' },
          { text: this.getTranslation('4.submenu3'), route: '/blog' },
        ],
      },
      { text: this.getTranslation('5.menu'), route: '/tamogatok' },
      { text: this.getTranslation('6.menu'), route: '/kapcsolat' },
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
  --moyo-font-dark-fade: rgba(111, 106, 102, 0.3);
  --moyo-font-light: #ccc0c0;
  --moyo-font-light-fade: #ccc0c04d;

  --moyo-light: #f9f1e6;
  --moyo-highlight: #e95d00;

  --moyo-yellow: #ffc55f;
  --moyo-orange: #e7ad47;
  --moyo-orange-fade: #e7ac4733;
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

@media (max-width: 1023.99px) {
  .desktop {
    display: none;
  }
}

@media (min-width: 1024px) {
  .mobile {
    display: none;
  }
}

p {
  margin-top: 1rem;
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

.pic-grid {
  display: grid;
  grid-template: auto / 1fr;
  gap: 15px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    grid-template: auto / 1fr 1fr;

    .pic.span {
      grid-column: span 2;
    }
  }
}

.pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.pic.float {
  img {
    float: right;
    max-width: 600px;
    margin: 10px;
    margin-top: 0;
  }
}

.pic.float.left img {
  float: left;
}

a,
.link {
  color: var(--moyo-font-deep-dark);
  transition: color 300ms ease;
  cursor: pointer;
  text-decoration: underline;
}

a:hover,
.link:hover {
  color: var(--moyo-highlight);
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

.topic-selector {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: row;
  gap: 30px;

  .topic-card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;
    text-align: center;

    .title {
      text-align: center;
      margin-bottom: 0;
    }

    .pic {
      height: 300px;
    }

    .text {
      font-style: italic;
    }

    &:hover .link {
      color: var(--moyo-highlight);
    }
  }
}

.b-pagination {
  .page-item {
    .page-link {
      color: var(--moyo-font-dark);
      background-color: var(--moyo-light);
      border-color: var(--moyo-font-light-fade);

      &:focus {
        box-shadow: none;
      }

      &:hover {
        background-color: var(--moyo-orange-fade);
      }
    }

    &.active .page-link {
      background-color: var(--moyo-orange);
      border-color: var(--moyo-font-dark-fade);
    }
  }
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
      "submenu2": "Akitogogon",
      "submenu3": "Gyermektámogatás",
      "submenu4": "Graduate a Girl!",
      "submenu5": "Oktatás támogatás Kenyában",
      "submenu6": "Adományozás",
      "submenu7": "Események"
    },
    "4": {
      "menu": "Megjelenések",
      "submenu1": "Média",
      "submenu2": "Vlog",
      "submenu3": "Blog"
    },
    "5": {
      "menu": "Támogatók"
    },
    "6": {
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
      "submenu3": "Our projects",
      "submenu4": "Akitogogon"
    },
    "3": {
      "menu": "How you can help",
      "submenu1": "Volunteering",
      "submenu2": "Akitogogon",
      "submenu3": "Child support",
      "submenu4": "Graduate a Girl!",
      "submenu5": "Education support in Kenya",
      "submenu6": "Donation",
      "submenu7": "Events"
    },
    "4": {
      "menu": "Appearances",
      "submenu1": "Media",
      "submenu2": "Vlog",
      "submenu3": "Blog"
    },
    "5": {
      "menu": "Supporters"
    },
    "6": {
      "menu": "Contact"
    }
  }
}
</i18n>
