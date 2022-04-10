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

import Header, { MenuItemI } from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'
import modal from '@/components/moyo/modal.vue'
import { Bio } from './interfaces/bio'

@Component({
  name: 'App',
  components: { Header, Footer, container, heading, modal },
})
export default class App extends Vue {
  @Watch('$route', { immediate: true, deep: true })
  onUrlChange() {
    window.scrollTo(0, 0)
  }

  // Afrika nap 2022.05.25-ig
  mounted() {
    const isMobile = window.innerWidth < 768
    const flyerInfo: Bio = {
      name: 'NEMZETKÖZI AFRIKA NAP - 2022.05.25.',
      image: 'afrika_nap_plakat.jpg',
      shortBio: '',
      longBio: [
        '1963 óta ünnepeljük május 25-én világszerte az Afrika napot. Ennek apropójából egy egész napos eseményre hívjuk az afrikai kultúra iránt érdeklődőket. A program saját szervezés útján valósul meg, partnerünkkel, a Márai Sándor Művelődési Ház támogatásával. ',
        '<b>Milyen programokkal készülünk az esemény során?</b>',
        'A délelőtt folyamán szakmai előadások és programok várják azokat, akik mélyebben szeretnének belemerülni a témába. Ezen szekció alkalmával meghívott szakemberek tartanak előadásokat, melyeket rövid kerekasztal beszélgetések követnek. ',
        'A délután folyamán több mint tíz Afrikával foglalkozó magyar civil szervezet várja a látogatókat standokkal, ahol lehetőség lesz ismerkedésre, beszélgetésre, afrikai kézzel készített munkák vásárlására, ugandai kávé és csoki kóstolásra. A szervezők és kiállítók sorai között többen, többször is jártak kint Afrika különböző területein, továbbá a legtöbben jelképes örökbefogadó szülők is, mely témákról szívesen mesélnek egy ugandai kávé mellett. ',
        'A délutáni programot bátran ajánljuk gyerkőcökkel érkezőknek is, számukra gyereksarkot biztosítunk, ahol kipróbálhatják azokat a játékokat, melyek az afrikai gyermekek életét teszik színesebbé.',
        'Az egész esemény alatt egy rendhagyó művészeti kiállítás lesz elérhető a helyszínen, mely munkák kifejezetten erre az alkalomra készülnek és kizárólag itt lesznek megtekinthetőek, megvásárolhatóak.',
        '<b>Mi a célja ennek a rendezvénynek?</b>',
        'A rendezvény missziója, hogy minél több Afrika iránt érdeklődő számára biztosítsunk egy olyan lehetőséget, ahol kapcsolódhatnak, betekintést kaphatnak az afrikai értékekbe, kultúrába, hangulatba. Valós történetek, megannyi izgalmas misszió és szívből jövő kapcsolódások Afrikával. Ezek várják a látogatókat május 25-én a Márai Sándor Művelődési Házban.',
        '<b>A rendezvényre a belépés ingyenes!</b>',
        'Részletes programterv hamarosan elérhető lesz honlapunkon!',
        'További információért és kérdésekkel kapcsolatban a <a href="mailto:szivembenszuletettafrika@szivembenafrika.org">szivembenszuletettafrika@szivembenafrika.org</a> címen érhettek el minket.',
        'Néhány szó a rendezvény legnagyobb támogatójáról, a Márai Sándor Művelődési Házról, akik a helyszínt biztosítják, hogy a téma színvonalához méltó helyen tarthassuk meg a programot, valamint, hogy minél több érdeklődőnek lehetőséget adjuk az esemény látogatására:',
        'A felújított Budai Polgári Casino impozáns Krisztina téri épülete ad otthont a Budavári Művelődési Ház utódintézményének, a Máraikultnak. Míg az intézmény célja, hogy folytassa a bemrockpart hagyományos, ’70-es években gyökerező tradicionális programjainak szervezését, mégis, a kerület kulturális életének egyik motorjaként a „megújítva megőrizni” mottóját követve egyszerre igyekszik értékteremtő, innovatív, ugyanakkor a kerületi hagyományokat ápoló kulturális tevékenységet megvalósítani: értékeinkből, hagyományainkból építkezve, gyökereinkből táplálkozva megújulni.',
        'A tervezett programszerkezet a legszélesebb korosztály és érdeklődési kör igényeit kívánja kielégíteni a kisgyermekek számára szervezett szórakoztató színházi programokon, valamint készségfejlesztő foglalkozásokon át az esti könnyű- és komolyzenei koncerteken keresztül a nyugdíjasok kisközösségei számára létrehozott hagyományápoló, ismeretterjesztő, városvédő vagy irodalmi tematikájú találkozóinak létrehozásáig.',
        'Az intézmény munkatársai elsődleges feladatuknak tartják, hogy a programok érdekesek, színvonalasak és tartalmasak legyenek, amelyek között minden korosztályú és érdeklődésű látogató megtalálja a neki leginkább tetszőt.',
      ],
      objectPosition: ''
    }
    this.$modal.show(
      modal,
      { bio: flyerInfo, imageAutoHeight: true, lightCloseButton: true },
      {
        width: isMobile ? '90%' : '700px',
        height: 'auto',
      }
    )
  }

  getTranslation(path: string): string {
    return this.$i18n.t(path) as string
  }

  get menuItems(): MenuItemI[] {
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
          {
            text: this.getTranslation('3.submenu2'),
            route: 'gyermektamogatas',
          },
          { text: this.getTranslation('3.submenu3'), route: 'graduate-a-girl' },
          { text: this.getTranslation('3.submenu4'), route: 'adomanyozas' },
        ],
      },
      { text: this.getTranslation('4.menu'), route: 'media' },
      { text: this.getTranslation('5.menu'), route: 'tamogatok' },
      { text: this.getTranslation('6.menu'), route: 'kapcsolat' },
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

.pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

a {
  color: var(--moyo-font-deep-dark);
}

svg {
  height: 100%;

  * {
    transition: fill 0.4s ease, stroke 0.4s ease;
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
      "submenu4": "Adományozás"
    },
    "4": {
      "menu": "Média"
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
      "submenu3": "Our projects"
    },
    "3": {
      "menu": "How you can help",
      "submenu1": "Volunteering",
      "submenu2": "Child support",
      "submenu3": "Graduate a Girl!",
      "submenu4": "Donation"
    },
    "4": {
      "menu": "Media"
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