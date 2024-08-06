<template>
  <div class="content">
    <heading>
      <div slot="main" v-if="!selectedCardId">{{ $t('main.title') }}</div>
      <div slot="main-small" v-if="selectedCard">{{ selectedCard.title }}</div>
      <div
        slot="description"
        v-if="selectedCardId"
        @click="selectedCardId = ''"
        class="link"
      >
        <router-link :to="'/projektjeink'">← {{ $t('back') }}</router-link>
      </div>
    </heading>
    <container>
      <div v-if="!selectedCardId" style="margin-bottom: 10px">
        {{ $t('main.text') }}
      </div>
      <div
        v-if="!selectedCardId"
        style="margin-bottom: 30px; font-style: italic"
      >
        {{ $t('main.desc') }}
      </div>
      <section class="topic-selector" v-if="!selectedCardId">
        <router-link
          v-for="(card, index) in cards"
          :key="index"
          :to="`/projektjeink/${card.id}`"
        >
          <div class="topic-card">
            <div class="title sub-heading" v-html="card.title"></div>
            <div class="pic">
              <img
                :src="require(`@/assets/images/projects/${card.cover}`)"
                alt=""
                :style="card.imgStyle"
              />
            </div>
            <div class="text" v-html="card.shortDesc"></div>
            <div class="link" style="margin-top: auto; text-align: right">
              {{ $t('read-more') }} →
            </div>
          </div>
        </router-link>
      </section>

      <section v-if="selectedCardId === 'noi-program'">
        <p>{{ $t('womenprogram.p1') }}</p>
        <p>{{ $t('womenprogram.p2') }}</p>
        <p>{{ $t('womenprogram.p3') }}</p>
        <p>{{ $t('womenprogram.p4') }}</p>
        <p>{{ $t('womenprogram.p5') }}</p>
        <div class="pic-grid">
          <div class="pic">
            <img src="@/assets/images/projects/noi-program-1.jpg" alt="" />
          </div>
          <div class="pic">
            <img src="@/assets/images/projects/noi-program-2.jpg" alt="" />
          </div>
          <div class="pic">
            <img src="@/assets/images/projects/noi-program-3.jpg" alt="" />
          </div>
          <div class="pic">
            <img src="@/assets/images/projects/noi-program-4.jpg" alt="" />
          </div>
        </div>
      </section>
      <section v-if="selectedCardId === '84-nap'">
        <div class="text-and-pic three-two">
          <div class="text">
            <p>{{ $t('84days.p1') }}</p>
            <p>{{ $t('84days.p2') }}</p>
          </div>
          <div class="pic" style="display: flex; justify-content: center">
            <img
              src="@/assets/images/projects/84-nap-logo.png"
              alt=""
              style="max-width: 300px"
            />
          </div>
        </div>
        <p>{{ $t('84days.p3') }}</p>
        <p>{{ $t('84days.p4') }}</p>
        <div class="text-and-pic">
          <div class="text">
            <div class="sub-heading">{{ $t('84days-a.title') }}</div>
            <ul>
              <li>{{ $t('84days-a.p1.li1') }}</li>
              <li>{{ $t('84days-a.p1.li2') }}</li>
              <li>{{ $t('84days-a.p1.li3') }}</li>
              <li>{{ $t('84days-a.p1.li4') }}</li>
            </ul>
            <div class="sub-heading">{{ $t('84days-b.title') }}</div>
            <p>{{ $t('84days-b.p1') }}</p>
            <p>{{ $t('84days-b.p2') }}</p>
            <p>{{ $t('84days-b.p3') }}</p>
            <p>{{ $t('84days-b.p4') }}</p>
            <p>{{ $t('84days-b.p5') }}</p>
            <p>{{ $t('84days-b.p6') }}</p>
          </div>
          <div class="pic">
            <img src="@/assets/images/projects/84-nap-1.jpg" alt="" />
          </div>
        </div>
        <p>{{ $t('84days-b.p7') }}</p>
        <p>{{ $t('84days-b.p8') }}</p>
        <div class="sub-heading">{{ $t('84days-c.title') }}</div>
        <p>{{ $t('84days-c.p1') }}</p>
        <p>{{ $t('84days-c.p2') }}</p>
        <p>{{ $t('84days-c.p3') }}</p>
        <div class="sub-heading">{{ $t('84days-d.title') }}</div>
        <p>{{ $t('84days-d.p1') }}</p>
        <p>{{ $t('84days-d.p2') }}</p>
      </section>
      <section v-if="selectedCardId === 'gyermektamogatas'">
        <p>{{ $t('supportchildren.p1') }}</p>
        <div class="pic-grid">
          <div class="pic">
            <img
              src="@/assets/images/projects/gyermektamogatas-projekt-1.jpg"
              alt=""
            />
          </div>
          <div class="pic">
            <img
              src="@/assets/images/projects/gyermektamogatas-projekt-2.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section v-if="selectedCardId === 'shine'">
        <p>{{ $t('shine.p1') }}</p>
        <p>{{ $t('shine.p2') }}</p>
        <p>{{ $t('shine.p3') }}</p>
        <p>{{ $t('shine.p4') }}</p>
        <div class="pic-grid">
          <div class="pic">
            <img src="@/assets/images/projects/iskolafejlesztes-1.jpg" alt="" />
          </div>
          <div class="pic">
            <img src="@/assets/images/projects/iskolafejlesztes-2.jpg" alt="" />
          </div>
        </div>
      </section>
      <section v-if="selectedCardId === 'graduate-a-girl'">
        <div class="text-and-pic">
          <div class="text">
            <p>{{ $t('graduateagirl.p1') }}</p>
            <p>{{ $t('graduateagirl.p2') }}</p>
          </div>
          <div class="pic">
            <img
              src="@/assets/images/projects/graduate-a-girl-projekt-1.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section v-if="selectedCardId === 'mtwapa'">
        <div class="text-and-pic">
          <div class="text">
            <p>{{ $t('mtwapa.p1') }}</p>
            <p>{{ $t('mtwapa.p2') }}</p>
            <p>
              {{ $t('mtwapa.p3.1')
              }}<a href="mailto:gyermektamogatas@szivembenafrika.org"
                >gyermektamogatas@szivembenafrika.org</a
              >{{ $t('mtwapa.p3.2') }}
            </p>
            <p>{{ $t('mtwapa.p4') }}</p>
          </div>
          <div class="pic">
            <img src="@/assets/images/projects/mtwapa.jpg" alt="" />
          </div>
        </div>
      </section>
      <section v-if="selectedCardId === 'eu-program'">
        <p>{{ $t('euprogram.p1') }}</p>
        <p>{{ $t('euprogram.p2') }}</p>
        <ul style="margin-bottom: 25px">
          <li>{{ $t('euprogram.p3.li1') }}</li>
          <li>{{ $t('euprogram.p3.li2') }}</li>
          <li>{{ $t('euprogram.p3.li3') }}</li>
          <li>{{ $t('euprogram.p3.li4') }}</li>
          <li>{{ $t('euprogram.p3.li5') }}</li>
          <li>{{ $t('euprogram.p3.li6') }}</li>
          <li>{{ $t('euprogram.p3.li7') }}</li>
          <li>{{ $t('euprogram.p3.li8') }}</li>
          <li>{{ $t('euprogram.p3.li9') }}</li>
          <li>{{ $t('euprogram.p3.li10') }}</li>
        </ul>
        <div class="pic-grid">
          <div class="pic">
            <img src="@/assets/images/projects/eu-1.jpg" alt="" />
          </div>
          <div class="pic">
            <img src="@/assets/images/projects/eu-2.jpg" alt="" />
          </div>
          <div class="pic">
            <img src="@/assets/images/projects/eu-3.jpg" alt="" />
          </div>
          <div class="pic">
            <img src="@/assets/images/projects/eu-4.jpg" alt="" />
          </div>
        </div>
      </section>
      <section v-if="selectedCardId === 'akitogogon'">
        <p class="sub-heading" v-html="$t('akitogogon.title2')"></p>
        <p v-html="$t('akitogogon.p1')"></p>
        <p v-html="$t('akitogogon.p2')"></p>
        <p v-html="$t('akitogogon.p3')"></p>
        <p v-html="$t('akitogogon.p4')"></p>
        <p v-html="$t('akitogogon.p5')"></p>
        <ul style="margin-bottom: 25px">
          <li v-html="$t('akitogogon.p6.li1')"></li>
          <li v-html="$t('akitogogon.p6.li2')"></li>
          <li v-html="$t('akitogogon.p6.li3')"></li>
        </ul>
        <p v-html="$t('akitogogon.p7')"></p>
        <p v-html="$t('akitogogon.p8')"></p>
        <p v-html="$t('akitogogon.p9')"></p>
        <ul style="margin-bottom: 25px">
          <li v-html="$t('akitogogon.p10.li1')"></li>
          <li v-html="$t('akitogogon.p10.li2')"></li>
          <li v-html="$t('akitogogon.p10.li3')"></li>
          <li v-html="$t('akitogogon.p10.li4')"></li>
        </ul>
        <p v-html="$t('akitogogon.p11')"></p>
        <p v-html="$t('akitogogon.p12')" style="margin-top: 40px"></p>
        <div class="pic-grid">
          <div class="pic">
            <img src="@/assets/images/projects/akitogogon-1.jpg" alt="" />
          </div>
          <div class="pic">
            <img src="@/assets/images/projects/akitogogon-2.jpg" alt="" />
          </div>
          <div class="pic span">
            <img src="@/assets/images/projects/akitogogon-3.jpg" alt="" />
          </div>
        </div>
        <div
          class="pic-grid"
          style="width: 200px; margin: auto; padding-top: 40px"
        >
          <div class="pic">
            <img src="@/assets/icons/logo.png" alt="" />
          </div>
          <div class="pic">
            <img src="@/assets/images/projects/logo-shanita.png" alt="" />
          </div>
        </div>
      </section>
    </container>
  </div>
</template>

<style lang="scss" scoped>
.text-and-pic {
  margin-bottom: 30px;
}

@media (min-width: 768px) {
  .topic-selector {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'
import { ThemeSelectorCard } from '@/interfaces/theme-selector'

@Component({
  name: 'Projects',
  components: { container, heading },
})
export default class Projects extends Vue {
  cid: string = ''

  get selectedCard(): ThemeSelectorCard {
    return this.cards.find((c) => c.id === this.selectedCardId)!
  }

  get selectedCardId() {
    return this.cid
  }

  set selectedCardId(v) {
    this.cid = v
    window.scrollTo(0, 0)
  }

  get cards(): ThemeSelectorCard[] {
    return [
      {
        id: 'noi-program',
        title: this.$i18n.t('womenprogram.title') as string,
        cover: 'noi-program-3.jpg',
        imgStyle: { 'object-position': '30%' },
        shortDesc: this.$i18n.t('womenprogram.shortDesc') as string,
      },
      {
        id: '84-nap',
        title: this.$i18n.t('84days.title') as string,
        cover: '84-nap-logo.png',
        shortDesc: this.$i18n.t('84days.shortDesc') as string,
      },
      {
        id: 'gyermektamogatas',
        title: this.$i18n.t('supportchildren.title') as string,
        cover: 'gyermektamogatas-projekt-2.jpg',
        imgStyle: { 'object-position': '60%' },
        shortDesc: this.$i18n.t('supportchildren.shortDesc') as string,
      },
      {
        id: 'shine',
        title: this.$i18n.t('shine.title') as string,
        cover: 'iskolafejlesztes-1.jpg',
        shortDesc: this.$i18n.t('shine.shortDesc') as string,
      },
      {
        id: 'graduate-a-girl',
        title: this.$i18n.t('graduateagirl.title') as string,
        cover: 'graduate-a-girl-projekt-1.jpg',
        shortDesc: this.$i18n.t('graduateagirl.shortDesc') as string,
      },
      {
        id: 'mtwapa',
        title: this.$i18n.t('mtwapa.title') as string,
        cover: 'mtwapa.jpg',
        shortDesc: this.$i18n.t('mtwapa.shortDesc') as string,
      },
      {
        id: 'eu-program',
        title: this.$i18n.t('euprogram.title') as string,
        cover: 'eu-2.jpg',
        imgStyle: { 'object-position': 'top' },
        shortDesc: this.$i18n.t('euprogram.shortDesc') as string,
      },
      {
        id: 'akitogogon',
        title: this.$i18n.t('akitogogon.title') as string,
        cover: 'akitogogon-1.jpg',
        imgStyle: { 'object-position': 'top' },
        shortDesc: this.$i18n.t('akitogogon.shortDesc') as string,
      },
    ]
  }

  created() {
    if (this.$route.params.projectId) {
      this.selectedCardId = this.$route.params.projectId
    }

    this.$watch(
      () => this.$route.params.projectId,
      (projectId) => {
        this.selectedCardId = projectId
      }
    )
  }
}
</script>

<i18n>
{
  "hu": {
    "read-more": "Tovább",
    "back": "Vissza",
    "main": {
      "title": "Projektjeink",
      "text": "Mi a Szívemben Született Afrika Egyesületnél sokan vagyunk és különbözőek, de mindannyian ugyanazért a célért dolgozunk: hogy embereknek ne csak hosszabb, de minőségi, méltóságteljes életük lehessen. Hiszünk abban, hogy a hatékony segítségnyújtás elengedhetetlen alappillére a megismerés, így minden programunkat a terepen begyűjtött szakmai tapasztalatokra építve dolgozzuk ki.",
      "desc": "Bővebb információkért kattints a képekre!"
    },
    "womenprogram": {
      "title": "Női program",
      "shortDesc": "A nők helyzete az egész világon teremt megoldandó problémákat, viszont Afrikában igazán súlyos a helyzetük. Hiszünk abban, hogy minden közösségben kulcs szerepe van a nőknek, így ha az ő helyzetüket javítjuk, a közösség egészének a helyzete javulni fog.",
      "p1": "Programjaink fő fókuszában a nők helyzetének javítása, az ő megsegítésük áll. A nők helyzete az egész világon teremt megoldandó problémákat, viszont Afrikában igazán súlyos a helyzetük. Az afrikai nők vállát nagyon sok teher nyomja, de kevés a lehetőségük, viszont nagyon nagy a potenciál bennük.",
      "p2": "Hiszünk abban, hogy mindent meg kell tenni azért, hogy a nemek közti egyenlőtlenségek csökkenjenek, és végleg megszűnjenek. Hiszünk abban, hogy minden közösségben kulcs szerepe van a nőknek, így ha az ő helyzetüket javítjuk, a közösség egészének a helyzete javulni fog. Manafwában a felnőtt korú nők többsége vagy egyáltalán nem is járt iskolába, vagy nagyon fiatalon abba kellett hagynia. Nőkkel foglalkozó programunknak van egy elméleti és gyakorlati része is.",
      "p3": "Elméleti: higiéniai oktatás, tudatos családtervezés, természetes fogamzásgátlás, gazdasági alapismeretek.",
      "p4": "Gyakorlati: olyan dolgokat tanulnak, amelyek egyrészt a házkörüli mindennapjaikat segítik, másrészt pénzkereseti lehetőséget biztosít számukra. Például: bel- és külpiacon egyaránt értékesíthető kézműves termékek elkészítése, szakképzés (első sorban szabás-varrás), egyéb szolgáltatások (pl.fodrászat).",
      "p5": "Női programjainkkal további célunk, hogy a gyerekek kapjanak egy példát, lássák, hogy a szülőnek is érték a tanulás, leckét ír, képzi magát, otthon is gyakorol. Nő a nők közösségen belüli megbecsültsége és nő az önbizalmuk, a saját magukba vetett hitük."
    },
    "84days": {
      "title": "84 nap projekt",
      "shortDesc": "A szub-szaharai Afrikában élő kamaszlányok és nők átlagosan évi 84 napra esnek ki a munkából és az iskolából a menstruációs szegénység miatt, ami aztán további súlyos problémákhoz vezet.",
      "p1": "Képzeld el milyen lenne, ha egy évben 84 napra kiesnél az iskolából vagy a munkádból. Képzeld el, mennyi tudásból, lehetőségből és élményből maradnál akkor ki? A szub-szaharai Afrikában élő kamaszlányoknak és nőknek, nem kell ezen gondolkodniuk. Nem kell kényszeríteniük magukat arra, hogy el tudják ezt képzelni, hiszen ez a valóságuk. Igen, bizony, jól olvastad! Abban a térségben átlagosan ennyi napot kell az iskolából és a munkahelyről távol maradniuk a nőknek a menstruációs szegénység, a tabuk és tévhitekből eredő „period shaming” miatt.",
      "p2": "A projekt programjai alapvetően olyan témákkal foglalkoznak, amelyekkel már korábban is dolgoztunk vagy elkezdtünk dolgozni, mint – a teljesség igénye nélkül - a menstruációs szegénység, a „period shaming”, a családonbelüli és szexuális erőszak, a gyermekházasság és leányanyas lányok és az oktatás helyzete.",
      "p3": "Felmerülhet bennetek a kérdés, hogy miért választottuk ezt a főleg a menstruációs szegénységre reflektáló 84 nap elnevezést egy ilyen szerteágazó programnak?! A válasz egyszerű: hiszünk abban, hogy a fentiekben felsorolt problémák nagyon sok esetben közös tőről fakadnak, és nem tudunk az egyik területen segíteni úgy, hogy egy másikat figyelmen kívül hagyunk. A munkánk egyik legfontosabb alapelve mindig is az volt, hogy összetett problémára, összetett megoldást kell kínálni.",
      "p4": "Hiszünk abban, hogy tabukat le kell dönteni, a stigmatizálást fel kell számolni és meg kell teremtenünk azt a békés, biztonságos és bátorító  közeget, ahol ezek a fantasztikus, okos és bátor lányok és nők nem élnek többé félelemben, nem élnek többé kiszolgáltatottan, nem járnakleszegett fejjel, hanem megérzik és elhiszik a bennük rejlő képességet és végtelen lehetőséget arra, hogy a hozzájuk méltó életet élhessék."
    },
    "84days-a": {
      "title": "Menstruációs szegénység felszámolása",
      "p1": {
        "li1": "Testtudat",
        "li2": "Termékenységtudat",
        "li3": "Mosható intimbetét készítés",
        "li4": "Tabuk ledöntése: férfiak oktatása is"
      }
    },
    "84days-b": {
      "title": "Nők és lánygyermekek elleni erőszak",
      "p1": "A nők és lánygyermekek elleni erőszak bármilyen formája megsértése és semmibevétele az alapvető emberi jogoknak, és ez a probléma világszerte minden harmadik nőt érint.",
      "p2": "Nők milliói szenvednek el valamilyen erőszakot az életük során, ideértve a fizikai vagy mentális bántalmazást, szexuális erőszakot, szexuális kizsákmányolást, gyermekházasságot vagy akár a leányanyaságot is.",
      "p3": "Az áldozatok túlélőinek különböző mentális és fizikai sérülésekkel kell tovább élniük, mint például a poszt traumás stressz szindróma, a depresszió, a töréssel és vérzéssel járó sérülések, a HIV és más nemi úton terjedő betegségek vagy a nem kívánt terhesség.",
      "p4": "Hosszabbtávon az erőszak és az ettől való félelem ahhoz vezethet, hogy a lányok kiesnek az oktatásból, hogy nem választhatják meg, kihez menjenek férjhez és nem tudják kibontakoztatni a bennük rejlő tehetséget és lehetőséget.",
      "p5": "Ezért is döntöttünk úgy, hogy felvesszük a harcot a nők ellenei erőszakkal. Nem csak reagálni szeretnénk a problémára és segíteni az áldozatoknak, hanem nagy hangsúlyt fektetünk azokra a programjainkra, amelyek a prevenciót segítik.",
      "p6": "A nők elleni erőszak sajnos egy globális jelenség, de azok a nők és lányok, akik szegénységben élnek még nagyobb veszélynek vannak kitéve.",
      "p7": "A bántalmazás a lányok, nők mindennapjainak az elfogadott része. Célunk egy olyan védőháló létrehozása, amely védelmet és segítséget nyújt számukra már az áldozattá válás előtt.",
      "p8": "Szemlélet formálással és oktatással pedig szeretnénk, ha a fent említett problémák nem csak visszaszorulnának, de meg is szűnnének a közösségen belül."
    },
    "84days-c": {
      "title": "Gyermekházasság és leányanyaság felszámolása",
      "p1": "Azok a lányok, akik gyermekként házasságra kényszerülnek sokkal nagyobb eséllyel válnak családon belüli erőszak áldoza azok akik felnőttként, szabad választással házasodnak.",
      "p2": "A gyermekházasság ellopja a gyerekkorukat, a tanulási lehetőségüket, az egészségüket és a szabadságukat és a legtöbb esetben egész hátralévő életükre erőszak áldozatává teszi őket. A házasságot pedig rövid időn belül az követi, hogy leányanyává kell válniuk. Ezek a lányok egyszerűen még sem fizikailag, sem érzelmileg nem állnak készen a szexuális életre, a várandósságra és a szülésre.",
      "p3": "Szeretnénk, ha a közösségben ahol dolgozunk, a gyermekházasság tradíciója véget érne, ezért edukáljuk a közösség tagjait, rangidős döntéshozóit, a szülőket és magukat a fiatal lányokat és fiúkat is a gyermekházasság negatív hatásairól. Bíztatjuk a lányokat arra, hogy találjanak rá a hangjukra és merjenek nem-et mondani."
    },
    "84days-d": {
      "title": "Emberkereskedelem elleni küzdelem",
      "p1": "Figyelemfelhívó, úgynevezett “community awareness” programokat szervezünk és tartunk Ugandában és Kenyában, amelyek keretében gyerekeket és fiatalokat tanítunk a gyermekjogokról, emberi jogokról, biztonságos kapcsolatokról, női csoportokat és felnőtt közösségeket az emberi jogokról, a biztonságos migrációról és az emberkereskedelem természetéről és veszélyeiről. Emellett szakmai partnereinkkel együttműködve dolgozunk az áldozatul esett - többnyire - nők feltérképezésén, mentésén, rehabilitálásán(egészségügyi és mentális értelemben is) és reintegrálásán.",
      "p2": "A jövőben szeretnénk védett házakat kialakítani Manafwában (Uganda) és Karamojában (Uganda) is."
    },
    "supportchildren": {
      "title": "Gyermektámogatási program",
      "shortDesc": "Hiszünk abban, hogy minden gyermeknek jár a boldog, biztonságos gyerekkor, az oktatás és az esély egy jó életre. Ugandában sajnos nem ingyenes az oktatás és mivel a családok nagy része a szegénységi küszöb alatt él, az, hogy iskolába járjon, egy gyerek luxusnak számít.",
      "p1": "Hiszünk abban, hogy minden gyermeknek jár a boldog, biztonságos gyerekkor, az oktatás és az esély egy jó életre. Ugandában sajnos nem ingyenes az oktatás és mivel a családok nagy része a szegénységi küszöb alatt él, az, hogy iskolába járjon, egy gyerek luxusnak számít. Gyermektámogatási programunk keretében havi 6000Ft-os adományért a támogató jelképes örökbefogadó szülővé válhat. Ez az az összeg, amely fedezi egy gyerkőc oktatását, tanszereit, étkezését és szükség esetén az orvosi ellátását. Mi pedig rendszeres időközönként hírt adunk a gyerkőc fejlődéséről, tanulmányi eredményeiről, fontosabb életeseményeiről, valamint küldünk róla fotókat, videókat."
    },
    "shine": {
      "title": "„Shine” Iskolafejlesztési program",
      "shortDesc": "Manafwában 2020. februárjában kezdtük el felépíteni egyesületünk iskoláját - a Shine Nursery and Primary School-t - ahol a vidéki környezetben egyedülállóan jó színvonalon tanulhatnak a falubeli gyerekek. Jelenleg 1 bölcsödei és 3 óvodás csoport, valamint 5 általános iskolai osztály.",
      "p1": "Manafwában 2020.februárjára felépült egyesületünk iskolája - Shine Nursery and Primary School - ahol a vidéki környezetben egyedülállóan jó színvonalon tanulhatnak a falubeli gyerekek. Jelenleg 3 óvodai csoport és két általános iskolai osztály van. Az iskola építése folyamatosan zajlik, a jövőben megépítésre kerülnek tovább tantermek, illetve nagy vágyunk, hogy játszótér, konyhakert és könyvtár is kialakításra kerülhessen.",
      "p2": "Nagyon fontosnak tartjuk, hogy a gyerekek kezdettől minőségi alapfokú oktatásban részesülhessenek.",
      "p3": "Jelenleg kidolgozás alatt áll egy sporttehetség gondozó programunk az iskola diákja körében, hiszen a sportnak megtartó ereje van és az időben felfedezett és gondozott tehetség kitörést jelenthet a nehéz sorsból.",
      "p4": "Nagyon sokat érdeklődnek Magyarországról és mi fontosnak tartjuk, hogy öregbítsük országunk hírnevét, úgyhogy ezek a gyermekek tudják, hogy hogy néz ki a Balaton, mi az a puli és ettek már Pilóta kekszet."
    },
    "graduateagirl": {
      "title": "Graduate a Girl - oktatástámogatási program",
      "shortDesc": "A lányok oktatása az egyik legerősebb és leghatékonyabb fegyver, amit bevethetünk a globális szegénység felszámolására. A program azzal a céllal indul útjára, hogy megakadályozzuk, hogy ezeknek a lányoknak az élete és sorsa megpecsételődjön pusztán az által, hogy hová születtek.",
      "p1": "A lányok oktatása az egyik legerősebb és leghatékonyabb fegyver, amit bevethetünk a globális szegénység felszámolására. Manafwában jelenleg a lányok többsége maximum az általános iskola 5.- 6. osztályáig jut el. 13 -14 évesen kell feleséggé válniuk és nem sokkal idősebbek akkor sem, amikor első gyermekükkel várandósak lesznek. A program azzal a céllal indul útjára, hogy megakadályozzuk, hogy ezeknek a lányoknak az élete és sorsa megpecsételődjön pusztán az által, hogy hová születtek, hogy segítsük őket abban, hogy eljuthassanak a középiskolai érettségiig. Havi 7800Ft-os adománnyal segítheti a támogató egy kamasz lány oktatását. Ez az összeg fedezi az oktatását és szükség esetén az orvosi ellátását.",
      "p2": "A programról bővebben a „Graduate a Girl” menüpont alatt olvashatsz."
    },
    "mtwapa": {
      "title": "Oktatás támogatás Mtwapaban",
      "shortDesc": "A programban szereplő minden fiatal az emberkereskedelem és/vagy szexturizmus áldozata vagy ezek veszélyének fokozottan kitett. A program célja, hogy iskolába járhassanak és tanulhassanak.",
      "p1": "A programban szereplő összes fiatal Mtwapából és a környékéről került a programba. Ez a régió súlyosan érintett az emberkereskedelem, a szexturizmus és a gyermekek szexuális célú kizsákmányolásával, így a programban szereplő összes fiatal vagy érintettje - korábbi áldozata - valamelyik felsorolt problémának vagy pedig családi vagy szociokultúrális, gazdaság közege és helyzete  miatt fokozottan kitett a veszélynek.",
      "p2": "Támogatóként rengeteget tehetsz a kiválasztott fiatalért. Ebben a programban havi 8500 forintos adományoddal támogatójává válhatsz egy fiatalnak, amely biztosítja számára a tandíjat, napi étkezést az iskolában ahová jár, a tanszereit és szükség esetén orvosi ellátást.",
      "p3": {
        "1": "Kérdés esetén fordulj bizalommal hozzánk a ",
        "2": " email címen."
      },
      "p4": "A programról bővebben az „Oktatás támogatás Kenyában” menüpont alatt olvashatsz."
    },
    "euprogram": {
      "title": "Egészségügyi program",
      "shortDesc": "Hiszünk abban, hogy minden embernek jár, hogy a lehető legegészségesebb életet élje, és amikor megbetegszik, megkapja a számára szükséges segítséget. Rendszeres orvosi misszióink alkalmával a gyógyítás mellett nagy hangsúlyt fektetünk az oktatásra, betegedukációra és megelőzés különböző formáira is.",
      "p1": "Hiszünk abban, hogy minden embernek jár, hogy a lehető legegészségesebb életet élje, és amikor megbetegszik, megkapja a számára szükséges segítséget. Rendszeres orvosi misszióink alkalmával a gyógyítás mellett nagy hangsúlyt fektetünk az oktatásra, betegedukációra és megelőzés különböző formáira, illetve helyi egészségügyi dolgozók képzésére is, hogy akkor se késsen a segítség, ha mi nem vagyunk ott.",
      "p2": "Egészségügyi programunk legfőbb elemei:",
      "p3": {
        "li1": "Szükséges és hiányzó vakcináció beadása, pótlása",
        "li2": "Általános egészségügyi szűrések megszervezése a falubeliek számára",
        "li3": "Alapvető csecsemő- és várandósgondozás oktatása",
        "li4": "Szemészeti szűrővizsgálatok megszervezése",
        "li5": "Rendszeres, széleskörű féreghajtás",
        "li6": "Csecsemők és gyermekek növekedésének, fejlődésének folyamatos követése, szükség esetén orvosi segítség nyújtása",
        "li7": "HIV/AIDS szűrés, edukáció és a szükséges kezelés megszervezése",
        "li8": "Általános nőgyógyászati és HPV szűrőprogram felállítása",
        "li9": "Malária és más trópusi fertőzések szűrése, kezelése és az ezzel kapcsolatos edukáció",
        "li10": "Közhigiénés viszonyok javítása, infekció és járványkontroll technikák tanítása, bevezetése"
      }
    },
    "akitogogon": {
      "title": "Akitogogon",
      "title2": "Kiszolgáltatottból megállíthatatlan",
      "shortDesc": "Kiszolgáltatottból megállíthatatlan<br><br>A Szívemben Született Afrika és a Shanita szervezete közös programot indít Karamojában.",
      "p1": "<b>Karamoja:</b> Karamojában és a szomszédos kenyai és szudáni területeken találták az emberiség legősibb nyomaira utaló csontvázakat és használati tárgyakat, szóval bátran kijelenthetjük, hogy az emberiség bölcsőjének nevezett afrikai kontinensnek is arról a részéről van szó, ahonnan az emberiség fejlődése elindult. Ez az ősiség ott van a régió minden egyes szegletében, a különleges talajban, a sokat látott hegyekben, a levegő semmihez sem hasonlítható illatában, az emberek rezilienciájában és lenyűgözően sokszínű kultúrájában.",
      "p2": "A térségben jelenlévő sok évtizedes konfliktus miatt a régió teljesen elzárttá vált az ország többi részétől és számos stigma került rá, amely igen csak megnehezíti az itt élő emberek életét. Uganda legszegényebb régiója, bizonyos szempontból azonban mégis a leggazdagabb, hiszen minden más területhez képest a legjobban itt őrzik az emberek a törzsi hagyományaikat, hitrendszerüket és ezek a mai napig meghatározzák a mindennapi szokásaikat, működésüket és társadalmi berendezkedésüket.",
      "p3": "Karamoja Uganda északkeleti részén található, az ország egyik leggyönyörűbb, ugyanakkor legszegényebb régiója. Az oktatási lehetőségek még afrikai viszonylatban is  rendkívül korlátozottak, gyakorlatilag csodaszámba megy a minőségi oktatás és az is, ha valaki számára ez hozzáférhető. A helyi közösségek főként pásztorkodással és földműveléssel foglalkoznak, amelyet egyre nagyobb mértékben nehezít meg a szélsőséges időjárás, melynek legszembetűnőbb tünete az extrém vízhiány. Az olyan törzsi szokások, mint például a korai (gyermek-) kényszerházasság, leányanyaság és a női nemiszerv csonkítás, bár hivatalosan törvénybe ütköző, a gyakorlatban sajnos még mindig jelen vannak és a mindennapi élet részét képezik, ami tovább nehezíti a lányok életét és ellehetetleníti jövőjüket.",
      "p4": "<b>Hogyan tudsz segíteni? Ismét nagyot mertünk álmodni és ezúttal a célunk 60 lánynak otthont, biztonságot, méltóságot, oktatást és esélyt adni Karamoja területén, a 2025 februárjában kezdődő tanévtől, ehhez keresünk támogatókat.</b>",
      "p5": "A támogatás kétféleképpen is lehetséges: ",
      "p6": {
        "li1": "Havonta <b>20.000 Ft</b> egy lány teljes életét megváltoztatja: ez az összeg fedezi egy lány teljes lakhatását, oktatását, étkezését, és ellátását",
        "li2": "Szeretnénk minden érdeklődőnek lehetőséget biztosítani, ezért alternatív konstrukcióban is lehetséges a lányok támogatása, ami havi <b>10.000 Ft</b> támogatást jelent. Ebben az esetben az adományozókat “párba” állítjuk és közösen fognak támogatni egy lányt.",
        "li3": "A támogatóknak gyermektámogatási programjainkhoz hasonlóan évi 2 alkalommal tudunk friss híreket és fotókat szolgáltatni."
      },
      "p7": "<b>Projektünk:</b> A Szívemben Született Afrika és a Shanita szervezete közös programot indít Karamojában. A Shanita már évek óta sikeresen működtet a térségben hasonló, a gyermekek oktatására és biztonságának megteremtésére irányuló programot, amelyet most a szervezetünk több évnyi, a lányok és nők helyzetének javítása, az őket ért struktúláis hiányosságokból, törzsi berögződésekből eredő hátrányok csökkentése területén szerzett tapasztalataival egyesítettünk. Összefogásunk célja, hogy még több lányt tudjunk egy, a még eddiginél is magasabb szinten támogatni. Közös értékrendünk és szakmai alapelveink mentén építettük fel a programot, melynek kritikus eleme a valós helyi szükségletekre és igényekre való reflektálás, valamint a helyi közösségek kulturális és törzsi szokásainak tiszteletben tartása, a helyiekkel és az ő hosszútávú, fenntartható támogatásuk érdekében történő együttműködés. ",
      "p8": "<b>A két szervezet hátteréről:</b> Zsófi a Szívemben Született Afrika alapítójaként, Lior pedig a Shanita első embereként egymástól függetlenül, különböző utat bejárva, de végül Ugandában találtak rá második otthonukra és hivatásukra. Bár egyesületeink is egymástól függetlenül, a világ két távoli pontjáról üzemeltetve működnek, rengeteg közös vonásra tudunk építeni az együttműködésünk során. Mind a Szívemben Született Afrika, mind a Shanita alapvető meggyőződése, hogy az emberi jóság és összefogás csodákra képes, ez hajt minket előre abban, hogy gyermekeknek, fiataloknak és felnőtt nőknek nyújtsunk fenntartható támogatást Ugandában, amely számukra sok esetben élet-halál kérdése. Munkánk során fontos szakmai alap megfontolás, hogy helyi emberek bevonásával és alkalmazásával dolgozzunk, alapos terepmunkát követően indítsuk el programjainkat, hogy tevékenységünk minden eleme azt szolgálhassa, hogy valós szükségletekre válaszoljunk. ",
      "p9": "<b>A projekt részletei:</b>",
      "p10": {
        "li1": "<b>Miben más ez a projekt?</b> Célunk, hogy a 2025 februárjában induló tanévben 60 lány jövőjét tudjuk megalapozni egy általunk felújított és berendezett karamojai iskolában. Bár a lányok egy iskola területén fognak élni, az oktatás csak egy eleme a programunknak: a projektbe bekerülő lányokat olyan környezetből emelünk ki, ahol nem csupán a szegénység, hanem erőszakos és törvénytelen törzsi szokások áldozataivá válnának, így az oktatás mellett lakhatást, étkezéseket, foglalkozásokat és mentálhigiénés segítséget is nyújtunk a program keretein belül.",
        "li2": "<b>A lányok hátteréről:</b> A projekt területén élő törzseknél a mai napig elterjedt szokás, hogy a lányok anyagi megfontolásból, már 8-12 éves korukban menyasszonyokká válnak, a vőlegény pedig egy idősebb férfi, jellemzően több feleséggel. Az első menstruációjuktól kezdve a fiatal lányokat alkalmasnak ítélik a feleség szerepre és újdonsült férjük magukkal is viszi őket. A karamojai lányokat sajnos nem ez az egy veszély fenyegeti, hiszen szintén aktív törzsi szokás a női nemiszerv csonkítás, de a térségre kimagasló mértékben jellemző a gyermekmunka és a gyermekprostitúció is.",
        "li3": "<b>Hosszútávú, szakmai alapokon nyugvó megoldások:</b> Ebben a projektben is kiemelten fontos számunkra a holisztikus megközelítés, hiszen abban hiszünk, hogy összetett problémákra, összetett megoldással kell reagálni. Fontos, hogy a lányokat a családjuk beleegyezésével vesszük fel a programba, amihez fontos, hogy értsék és megértsék, mit jelent az oktatás, megmutassuk annak előnyeit, ezért egy, a helyiek közül választott szociális munkással érzékenyítő és edukációs programot is tartunk. A siker egy fontos tényezője, hogy a családok rövid távon kieső jövedelmét helyettesítsük, így a közösségeknek fenntartható, hosszútávú lehetőségeket kínálunk, hogy ne kelljen lányaik kiházasításából élniük: megtanítjuk őket kézműves termékek előállítására és értékesítésére, amelyekből fenntarthatják magukat.",
        "li4": "<b>Teljes körű ellátás:</b> A kimentett lányoknak biztonságos szállást, oktatást, iskolán kívüli foglalkozásokat, étkezést, orvosi ellátást mentálhigiénés foglalkozást is biztosítunk. De a program valójában ennél sokkal többet ad számukra: biztonságot, gyermekkort, lehetőségeket, esélyt egy jobb életre, sőt sok esetben konkrétan a túlélésre. "
      },
      "p11": "<b>A sikerhez Rád is szükségünk van:</b> Támogasd projektünket havonta 10.000 vagy 20.000 Ft-tal, hogy együtt adhassunk jövőt és stabil alapokat Karamoja lányainak! Ha szeretnél támogatóvá válni, vagy kérdésed van,  fordulj hozzánk bizalommal a <a href=\"mailto:gyermektamogatas@szivembenafrika.org\">gyermektamogatas@szivembenafrika.org</a> e-mail címen.",
      "p12": "<i>A képeket a Shanita készítette.</i>"
    }
  },
  "en": {
    "read-more": "Read more",
    "back": "Back",
    "main": {
      "title": "Our Projects",
      "text": "At the Africa Born in My Heart Association, we are many and diverse, but we all work for the same purpose: to ensure that people not only have a longer but also a  good-quality, dignified life. We believe that effective assistance is based on the foundation of understanding, so we develop all our programs based on the professional experiences gathered in the field.",
      "desc": "Click on the photos for more information!"
    },
    "womenprogram": {
      "title": "Women's Programme",
      "shortDesc": "The situation of women creates problems to be solved worldwide, but their situation is particularly dire in Africa. We believe that women play a crucial role in every community, so by improving their situation, the overall community's situation will also improve. In our program, we carry out theoretical and practical educational and vocational training projects.",
      "p1": "The main focus of our women's project is to help women and to better their circumstances. The women's situation creates issues in the whole world, that must be resolved, however, in Africa, their situation is serious. There are a lot of pressure on the African women's shoulders, but they are lack of opportunities, however, they have a huge potential.",
      "p2": "We believe, that we have to do everything to lower the gender gap and to even make this gap completely disappear. We believe, that in every communities, the women hold a key role, therefore, if we improve the women's  situation, the whole community's circumstances will improve too. In Manafwa the majority of the women have either never went to school or had to drop out at a very young age. Our women's project has a theoretical and a practical element.",
      "p3": "Theoretical: hygiene education, family planning, natural birth control methods, basic economic knowledge.",
      "p4": "Practical: they will learn new skills, that will help their everyday house chores, as well as provide them some income too. For example, creating kraft products that can be sold on a domestic and an international market, professional training (mainly sewing), other services (e.g. hair dressing, etc.).",
      "p5": "Our other goal with the programme is to set a role model to the children, so they can see that education is indeed valuable, for the parent too, they complete their homework, learn and practice at home too. The respect for women will increase within the community and the women's self esteem and self belief will grow too."
    },
    "84days": {
      "title": "84 Days Project",
      "shortDesc": "In sub-Saharan Africa, adolescent girls and women miss an average of 84 days of work and school each year due to menstrual poverty, which then leads to further serious issues. In this program, our projects focus on the following themes: eradicating menstrual poverty, ending violence against women and girls, eliminating teenage motherhood, and fighting against human trafficking.",
      "p1": "Just imagine, what it be like if you have dropped out of school or work for 84 days in a year. Just imagine, how much knowledge, opportunities and experiences you would miss out of? The teenage girls and women in sub-saharan Africa don't need to try and think about this. They don't need to try to think hard to imagine it, as this is their reality. Yes, you have read it correctly! In this region, in average this is how much they have to stay out of school and work because of period poverty and because of period shaming that are based on tabus and misconceptions.",
      "p2": "The programmes in this project are working on subjects, that we have worked on before or we have started working on, such as period poverty, period shaming, domestic and sexual violence, child marriage, girls who have become mothers as a child themselves and also education.",
      "p3": "Have you ever wondered, why we have chosen the name '84 days', that reflects on period poverty, for such a complex project?! The answer is simple: we believe, that the above listed issues are coming from the same root, and we cannot help with one area without helping with another. One of the most important principles of our work is, that for a complex issue we have to come up with a complex solution.",
      "p4": "We believe, that we have to break down the tabus, liquidate the stigmatisation and create a peaceful, safe and encouraging environment, where these fantastic, smart and brave girls and women won't have to live in fear anymore and feel vulnerable and won't have to walk with their head down; instead they feel and believe their inner ability and endless potential to live a worthy life."
    },
    "84days-a": {
      "title": "Ending period poverty",
      "p1": {
        "li1": "body awareness",
        "li2": "fertility awareness",
        "li3": "the production of washable period pads",
        "li4": "breaking down taboos: educating men"
      }
    },
    "84days-b": {
      "title": "Violence against women and girls",
      "p1": "Any form of violence against women and girls is a crime against basic human rights, and this issue affects every third woman in the whole world.",
      "p2": "Millions of women suffer from some form of violence in their lifetime, including physical and oral abusement, sexual violence, sexual exploitation, child marriage and becoming a mother as a child. ",
      "p3": "The victims will have to live with different mental and physical damage, e.g. post traumatic stress syndrome, depression, different injuries, including broken bones and bleeding, HIV and other sexually transmitted diseases and unwanted pregnancy.",
      "p4": "In the long term, the violence and even just the fear from it, could lead to the girls dropping out of education, they are not allowed to choose who to marry and unable to unfold their talent and their own possibilities.",
      "p5": "This is why we have decided, to fight against the violence against women. We don't just want to react to this issue and help the victims, instead, we put the emphasis on those projects that help prevent it.",
      "p6": "Violence against women, unfortunately, is a global issue, and those women and girls living in poverty are exposed to it even more.",
      "p7": "The abuse is just part of the girls' and women's lives. Our goal is to create a safety net, that offers protection and help even before becoming a victim.",
      "p8": "With changing the point of view and with education, we would like if the above listed issues not just decreased in appearance, but disappeared completely from the community."
    },
    "84days-c": {
      "title": "Ending child marriage and becoming mothers at a very young age",
      "p1": "Those girls, who are forced to marry as a child, are more likely to become a victim of domestic violence than those women, who had the choice to marry as an adult.",
      "p2": "The child marriage robs the girls from their childhood, education, health and freedom, and in most cases, they become a victim of some form of violence in the rest of their lives. In a short space of time, the marriage is followed by becoming a mother. These girls are not ready to become sexually active, pregnant and giving birth neither physically nor emotionally.",
      "p3": "We would like if the tradition of child marriage would end in the community where we work in, this is why we educate the members of the community, the senior decision makers, the parents and the young girls and boys themselves about the negative effects of child marriage. We encourage the girls to find their own voice and be able to say no."
    },
    "84days-d": {
      "title": "Fight against human trafficking",
      "p1": "We organise and hold so called community awareness initiatives in Uganda and in Kenya, where we teach children and teenagers about children and human rights, safe relationships, women groups and adult communities about human rights, the safe migration and the nature of human trafficking and its dangers. We also work with our professional partners on finding the victims - mainly women -, rescuing, rehabilitating (health and mental) and reintegrating them back into the community.",
      "p2": "In the future, we would like to create safe houses in Manafwa (Uganda) and Karamoja (Uganda) as well."
    },
    "supportchildren": {
      "title": "Child Support Programme",
      "shortDesc": "We believe that every child is entitled to a happy, safe childhood, education, and a chance for a good life. Unfortunately, education is not free in Uganda, and since most families live below the poverty line, sending a child to school is considered a luxury. In the program, symbolic adoptive parents support the education of a child of their choice with their monthly donation of 6,000 forints.",
      "p1": "We believe that every child deserves a happy, safe childhood, an education and the chance of a good life. Unfortunately, education in Uganda is not free and, with a large proportion of families living below the poverty line, sending a child to school is a luxury. For a monthly donation of 6000 Ft (16€), our child sponsorship programme allows the sponsor to become a symbolic adoptive parent. This amount covers a child's education, school supplies, meals and medical care if needed. We will periodically report on the child's progress, academic achievements, important life events and send photos and videos."
    },
    "shine": {
      "title": "“Shine” School Development Programme",
      "shortDesc": "In Manafwa, in February 2020, we began building our association's school, the Shine Nursery and Primary School, where local children can receive education of exceptionally high quality in a rural setting. Currently, there are 1 nursery and 3 kindergarten groups, as well as 5 primary school classes.",
      "p1": "In Manafwa, our association's school - Shine Nursery and Primary School - was built in February 2020, providing a uniquely high standard of education in a rural setting for children of the village. There are currently 3 nursery groups and two primary school classes. The construction of the school is still ongoing, with further classrooms to be built in the future, and we are really keen to have a playground, kitchen garden and a library.",
      "p2": "It is very important to us that children receive a quality primary education from the very beginning.",
      "p3": "We are currently developing a sports talent management programme among the school's students, as sport has a retaining power and talent discovered and nurtured in time can be a break out of a difficult fate.",
      "p4": "The students are very interested in Hungary and we think it's important to enhance the reputation of our country, so these children know what Lake Balaton looks like, what a puli is and have eaten Pilóta biscuits."
    },
    "graduateagirl": {
      "title": "Graduate a Girl - Education Support Programme",
      "shortDesc": "Educating girls is one of the most potent and effective weapons we can use to combat global poverty. The program aims to prevent the lives and destinies of these girls from being determined solely by where they were born. Sponsors who participate in the program support the education of adolescent girl with their monthly donation of 7,800 forints, helping them reach at least a high school diploma.",
      "p1": "Educating girls is one of the most powerful and effective weapons we can use to eradicate global poverty. Currently, the majority of girls in Manafwa reach up to grade 5-6 of primary school. They have to become wives by the age of 13-14 and are not much older when they become pregnant with their first child. The programme is being launched with the aim of preventing these girls' lives and destinies from being sealed simply by where they were born, to help them get to secondary school graduation. With a donation of 7800 Ft (20€) per month, a supporter can help support the education of a teenage girl. This amount will cover her education and medical care if needed.",
      "p2": "For more information about the programme, please visit the \"Graduate a Girl\" section in the menu."
    },
    "mtwapa": {
      "title": "Education Support in Mtwapa\n&nbsp;",
      "shortDesc": "Every young person in the program is a victim of human trafficking and/or is at high risk of sex tourism. The goal of the program is to ensure they can attend school and receive an education. Supporters who participate in the program support the education of a young person with their monthly donation of 8,500 forints, helping them reach at least a high school diploma.",
      "p1": "All the young people in the programme are from Mtwapa and the surrounding area. This region is severely affected by human trafficking, sex tourism and child sexual exploitation, and all the young people in the programme are either affected - former victims - of one of these problems or are at increased risk due to their family or socio-cultural, economic environment and situation.",
      "p2": "As a sponsor, you can do a lot for the young person you have chosen. In this programme, you can become a sponsor of a young person with a monthly donation of 8,500 HUF (22€), which will cover tuition fees, daily meals at the school they attend, school supplies and medical care if needed.",
      "p3": {
        "1": "If you have any questions, please contact us at ",
        "2": "."
      },
      "p4": "For more information about the programme, please visit the \"Education Support in Kenya\" section in the menu."
    },
    "euprogram": {
      "title": "Healthcare Programme",
      "shortDesc": "We believe that every individual deserves to live the healthiest life possible and that when they fall ill, they should receive the necessary assistance. During our regular medical missions, we emphasize not only treatment but also education, patient education, various forms of prevention, and the training of local healthcare workers to ensure that help is never delayed even when we are not present.",
      "p1": "We believe that every person deserves to live as healthy a life as possible, and when they fall ill, they get the help they need. In addition to providing treatment, we place a strong emphasis on education, patient education and various forms of prevention during our regular medical missions, as well as training local health workers so that help is not delayed even when we are not there.",
      "p2": "The main elements of our healthcare programme are:",
      "p3": {
        "li1": "Provision of necessary and missing vaccinations",
        "li2": "Organising general health check-ups for villagers",
        "li3": "Basic infant and maternity care education",
        "li4": "Organising eye screening",
        "li5": "Regular, extensive worming",
        "li6": "Monitoring the growth and development of infants and children, providing medical assistance where necessary",
        "li7": "Provision of HIV/AIDS screening, education and necessary treatment",
        "li8": "Setting up a general gynaecological and HPV screening programme",
        "li9": "Screening, treatment and education for malaria and other tropical infections",
        "li10": "Improving public hygiene, teaching and introducing infection and epidemic control techniques"
      }
    },
    "akitogogon": {
      "title": "Akitogogon",
      "title2": "Vulnerable to Unstoppable",
      "shortDesc": "Vulnerable to Unstoppable<br><br>We are launching a joint program in Karamoja with Shanita.",
      "p1": "<b>Karamoja:</b> The most ancient traces and evidences of human were found in Karamoja and its neighbouring regions in Sudan and Kenya. These skeletons and remainders of everyday tools suggest that Karamoja is in fact the specific place where our history began even in Africa, which is traditionally known as the ‘cradle’ of humanity.This ancient heritage is there in all nooks and crannies of Karamoja; in its extraordinary soil, its giant yet wise mountains, the scent of the air that compares to nothing, the resilience of the people and their magnificently colorful culture.",
      "p2": "However due to decades of conflicts Karamoja became stigmatized and separated from the rest of Uganda making life here significantly more challenging. Even though Karamoja is the poorest region of Uganda financially, in comparison to the rest of the country due to its people protecting their customs and religion still influencing everyday life as well as the way the society operates, Karamoja has a sense of richness after all.",
      "p3": "Karamoja is located in northeastern Uganda, a picturesque yet impoverished region known for its rich cultural heritage and traditional lifestyle. Educational opportunities are extremely limited, quality education is almost non-existent and the chances of anyone having access to it are very scarce. Local communities mainly engage in pastoralism and agriculture, increasingly jeopardized by extreme weather conditions, the most visible symptom being water scarcity. Tribal customs, such as early and forced (child) marriage, extremely early motherhood and female genital mutilation, although officially illegal, unfortunately, still persist in practice, further complicating the lives of girls and rendering their futures impossible.",
      "p4": "<b>How can you help? Again we are dreaming big and this time our goal is to give home, shelter, dignity, education and a chance for a normal life for 60 girls in school in the Karamoja region from the school year starting in February 2025 - we are seeking supporters for this.</b>",
      "p5": "There are two ways to support: ",
      "p6": {
        "li1": "<b>20.000 HUF per month</b> covers changing the whole life for one girl: this amount of monthly donation covers the housing, education, food and all cost of living",
        "li2": "As we would like to make helping accessible to everyone, we have come up with an alternative construction as a secondary option: it is also possible to donate <b>10.000 HUF per month.</b> In this case we are ‘pairing up’ these donations and as a result, two people will conjointly support a girl",
        "li3": "Similarily to our other child support programs we can provide updates and photos about the girls two times a year."
      },
      "p7": "<b>Our Project:</b> We are launching a joint program in Karamoja with Shanita. Shanita has been successfully running similar programs in this area for years, and now we have teamed up to support even more girls utilizing our vast experience in supporting girls and women coming with a poor background of infrastructure, being subject to unsafe tribal customs and lack of opportunity for a normal life. We built the program based on our shared values and professional principles with the aim to help even more girls with even higher quality than before. We have built this program based on our common values and approach with Shanita, with the critical element of making sure we’re responding to real local needs and demands, as well as respecting the local communities' cultural and tribal customs, and collaborating with locals for their long-term, sustainable support. Thanks to Hungary Helps, we received resources for renovation, new beds, and the construction of a water block, for which we are also grateful.",
      "p8": "<b>Background of the two organizations:</b> Zsófi, as the founder of Africa Born in my Heart, and Lior, as the leader of Shanita, found their second home in Uganda independently, following different journeys. Although our associations operate independently from different parts of the world, we can build on many common traits in our collaboration. Both of us firmly believe that human kindness and cooperation can work wonders, driving us to provide sustainable support to children, young people, and adult women in Uganda, often a matter of life and death for them. For us, an important professional principle is to involve and employ local people, launching our programs after thorough fieldwork, ensuring that every element of our activities respond to real needs.",
      "p9": "<b>Project Details:</b>",
      "p10": {
        "li1": "<b>What makes this project different?</b> Our goal is to lay the foundation for the future of 60 girls in a renovated and furnished school in Karamoja for the school year starting in February 2025. While the girls will live on a school campus, education is only one element of our program: we are enrolling girls from environments where they would otherwise not only be victims of poverty but also of violent and illegal tribal customs. In addition to education, we provide housing, meals, activities, and mental health support within the program.",
        "li2": "<b>About the girls' background:</b> In the tribes living in the project area, it is still a common practice for girls to become brides as early as 8-12 years old for financial reasons, with the groom typically being an older man, often with multiple wives. As soon as the young girls are deemed suitable, their new husbands take them away. Unfortunately, this is not the only danger the girls of Karamoja face, as female genital mutilation is also an active tribal custom and unfortunately child marriage and child prostitution are also present.",
        "li3": "<b>Long-term, professional solutions:</b> It is important that we enroll the girls in the program with their families' consent, for which it is essential to explain what education means and demonstrate its benefits. Therefore, we conduct awareness and educational programs with a local social worker. A key factor for success is replacing the short-term lost income of the families. Thus, we offer sustainable, long-term opportunities to the communities, so they do not have to live off marrying off their daughters: we teach them to produce and sell handicraft products, from which they can sustain themselves.",
        "li4": "<b>Comprehensive care:</b> The rescued girls are provided with accommodation, education, extracurricular activities, meals, and mental health support. Apart from the materialistic benefits this program offers the girls much more: safety, childhood, opportunities, a chance for a better life or in a lot of cases to live at all."
      },
      "p11": "<b>We need you for success:</b> Support our project with 10.000 or 20.000 HUF per month to give a future and stable foundation to the girls of Karamoja together! If you would like to support a girl or you have any questions, please feel free to reach out to us at <a href=\"mailto:gyermektamogatas@szivembenafrika.org\">gyermektamogatas@szivembenafrika.org</a>.",
      "p12": "<i>Photo credits: Shanita</i>"
    }
  }
}
</i18n>
