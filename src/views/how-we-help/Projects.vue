<template>
  <div class="content">
    <heading>
      <div slot="main" v-if="!selectedCardId">{{ $t('main.title') }}</div>
      <div slot="main-small" v-if="selectedCard">{{ selectedCard.title }}</div>
      <div slot="description" v-if="selectedCardId" @click="selectedCardId = ''" class="link">← Vissza</div>
    </heading>
    <container>
      <div v-if="!selectedCardId" style="margin-bottom: 10px;">{{ $t('main.text') }}</div>
      <div v-if="!selectedCardId" style="margin-bottom: 30px; font-style: italic;">{{ $t('main.desc')
      }}</div>
      <section class="topic-selector" v-if="!selectedCardId">
        <div class="topic-card" v-for="(card, index) in cards" :key="index" @click="selectedCardId = card.id">
          <div class="title sub-heading">{{ card.title }}</div>
          <div class="pic">
            <img :src="require(`@/assets/images/projects/${card.cover}`)" alt="" :style="card.imgStyle" />
          </div>
          <div class="text">{{ card.shortDesc }}</div>
          <div class="link" style="margin-top: auto; text-align: right;">Tovább →</div>
        </div>
      </section>

      <section v-if="selectedCardId === 'womenprogram'">
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
      <section v-if="selectedCardId === '84days'">
        <div class="text-and-pic three-two">
          <div class="text">
            <p>{{ $t('84days.p1') }}</p>
            <p>{{ $t('84days.p2') }}</p>
          </div>
          <div class="pic" style="display: flex; justify-content: center">
            <img src="@/assets/images/projects/84-nap-logo.png" alt="" style="max-width: 300px" />
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
      <section v-if="selectedCardId === 'supportchildren'">
        <p>{{ $t('supportchildren.p1') }}</p>
        <div class="pic-grid">
          <div class="pic">
            <img src="@/assets/images/projects/gyermektamogatas-projekt-1.jpg" alt="" />
          </div>
          <div class="pic">
            <img src="@/assets/images/projects/gyermektamogatas-projekt-2.jpg" alt="" />
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
      <section v-if="selectedCardId === 'graduateagirl'">
        <div class="text-and-pic">
          <div class="text">
            <p>{{ $t('graduateagirl.p1') }}</p>
            <p>{{ $t('graduateagirl.p2') }}</p>
          </div>
          <div class="pic">
            <img src="@/assets/images/projects/graduate-a-girl-projekt-1.jpg" alt="" />
          </div>
        </div>
      </section>
      <section v-if="selectedCardId === 'mtwapa'">
        <div class="text-and-pic">
          <div class="text">
            <p>{{ $t('mtwapa.p1') }}</p>
            <p>{{ $t('mtwapa.p2') }}</p>
            <p>{{ $t('mtwapa.p3.1') }}<a
                href="mailto:gyermektamogatas@szivembenafrika.org">gyermektamogatas@szivembenafrika.org</a>{{
                  $t('mtwapa.p3.2') }}</p>
                  <p>{{ $t('mtwapa.p4') }}</p>
          </div>
          <div class="pic">
            <img src="@/assets/images/projects/mtwapa.jpg" alt="" />
          </div>
        </div>
      </section>
      <section v-if="selectedCardId === 'euprogram'">
        <p>{{ $t('euprogram.p1') }}</p>
        <p>{{ $t('euprogram.p2') }}</p>
        <ul style="margin-bottom: 25px;">
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
    return this.cards.find(c => c.id === this.selectedCardId)!
  }

  get selectedCardId() {
    return this.cid
  }

  set selectedCardId(v) {
    this.cid = v
    window.scrollTo(0, 0)
  }

  cards: ThemeSelectorCard[] = [
    {
      id: 'womenprogram',
      title: 'Női program',
      cover: 'noi-program-3.jpg',
      imgStyle: { 'object-position': '30%' },
      shortDesc: 'A nők helyzete az egész világon teremt megoldandó problémákat, viszont Afrikában igazán súlyos a helyzetük. Hiszünk abban, hogy minden közösségben kulcs szerepe van a nőknek, így ha az ő helyzetüket javítjuk, a közösség egészének a helyzete javulni fog.'
    },
    {
      id: '84days',
      title: '84 nap projekt',
      cover: '84-nap-logo.png',
      shortDesc: 'A szub-szaharai Afrikában élő kamaszlányok és nők átlagosan évi 84 napra esnek ki a munkából és az iskolából a menstruációs szegénység miatt, ami aztán további súlyos problémákhoz vezet.'
    },
    {
      id: 'supportchildren',
      title: 'Gyermektámogatási program',
      cover: 'gyermektamogatas-projekt-2.jpg',
      imgStyle: { 'object-position': '60%' },
      shortDesc: 'Hiszünk abban, hogy minden gyermeknek jár a boldog, biztonságos gyerekkor, az oktatás és az esély egy jó életre. Ugandában sajnos nem ingyenes az oktatás és mivel a családok nagy része a szegénységi küszöb alatt él, az, hogy iskolába járjon, egy gyerek luxusnak számít.'
    },
    {
      id: 'shine',
      title: '„Shine” Iskolafejlesztési program',
      cover: 'iskolafejlesztes-1.jpg',
      shortDesc: 'Manafwában 2020. februárjában kezdtük el felépíteni egyesületünk iskoláját –  a Shine Nursery and Primary School-t - ahol a vidéki környezetben egyedülállóan jó színvonalon tanulhatnak a falubeli gyerekek. Jelenleg 1 bölcsödei és 3 óvodás csoport, valamint 5 általános iskolai osztály.'
    },
    {
      id: 'graduateagirl',
      title: 'Graduate a Girl - oktatástámogatási program',
      cover: 'graduate-a-girl-projekt-1.jpg',
      shortDesc: 'A lányok oktatása az egyik legerősebb és leghatékonyabb fegyver, amit bevethetünk a globális szegénység felszámolására. A program azzal a céllal indul útjára, hogy megakadályozzuk, hogy ezeknek a lányoknak az élete és sorsa megpecsételődjön pusztán az által, hogy hová születtek.'
    },
    {
      id: 'mtwapa',
      title: 'Oktatástámogatás Mtwapaban',
      cover: 'mtwapa.jpg',
      shortDesc: 'A programban szereplő minden fiatal az emberkereskedelem és/vagy szexturizmus áldozata vagy ezek veszélyének fokozottan kitett. A program célja, hogy iskolába járhassanak és tanulhassanak.'
    },
    {
      id: 'euprogram',
      title: 'Egészségügyi program',
      cover: 'eu-2.jpg',
      imgStyle: { 'object-position': 'top' },
      shortDesc: 'Hiszünk abban, hogy minden embernek jár, hogy a lehető legegészségesebb életet élje, és amikor megbetegszik, megkapja a számára szükséges segítséget. Rendszeres orvosi misszióink alkalmával a gyógyítás mellett nagy hangsúlyt fektetünk az oktatásra, betegedukációra és megelőzés különböző formáira is.'
    },
  ]
}
</script>

<i18n>
{
    "hu": {
        "main": {
            "title": "Projektjeink",
            "text": "Mi a Szívemben Született Afrika Egyesületnél sokan vagyunk és különbözőek, de mindannyian ugyanazért a célért dolgozunk: hogy embereknek ne csak hosszabb, de minőségi, méltóságteljes életük lehessen. Hiszünk abban, hogy a hatékony segítségnyújtás elengedhetetlen alappillére a megismerés, így minden programunkat a terepen begyűjtött szakmai tapasztalatokra építve dolgozzuk ki.",
            "desc": "Bővebb információkért kattints a képekre!"
        },
        "womenprogram": {
            "title": "Női program",
            "p1": "Programjaink fő fókuszában a nők helyzetének javítása, az ő megsegítésük áll. A nők helyzete az egész világon teremt megoldandó problémákat, viszont Afrikában igazán súlyos a helyzetük. Az afrikai nők vállát nagyon sok teher nyomja, de kevés a lehetőségük, viszont nagyon nagy a potenciál bennük.",
            "p2": "Hiszünk abban, hogy mindent meg kell tenni azért, hogy a nemek közti egyenlőtlenségek csökkenjenek, és végleg megszűnjenek. Hiszünk abban, hogy minden közösségben kulcs szerepe van a nőknek, így ha az ő helyzetüket javítjuk, a közösség egészének a helyzete javulni fog. Manafwában a felnőtt korú nők többsége vagy egyáltalán nem is járt iskolába, vagy nagyon fiatalon abba kellett hagynia. Nőkkel foglalkozó programunknak van egy elméleti és gyakorlati része is.",
            "p3": "Elméleti: higiéniai oktatás, tudatos családtervezés, természetes fogamzásgátlás, gazdasági alapismeretek.",
            "p4": "Gyakorlati: olyan dolgokat tanulnak, amelyek egyrészt a házkörüli mindennapjaikat segítik, másrészt pénzkereseti lehetőséget biztosít számukra. Például: bel- és külpiacon egyaránt értékesíthető kézműves termékek elkészítése, szakképzés (első sorban szabás-varrás), egyéb szolgáltatások (pl.fodrászat).",
            "p5": "Női programjainkkal további célunk, hogy a gyerekek kapjanak egy példát, lássák, hogy a szülőnek is érték a tanulás, leckét ír, képzi magát, otthon is gyakorol. Nő a nők közösségen belüli megbecsültsége és nő az önbizalmuk, a saját magukba vetett hitük."
        },
        "84days": {
            "title": "84 nap projekt",
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
            "p1": "Hiszünk abban, hogy minden gyermeknek jár a boldog, biztonságos gyerekkor, az oktatás és az esély egy jó életre. Ugandában sajnos nem ingyenes az oktatás és mivel a családok nagy része a szegénységi küszöb alatt él, az, hogy iskolába járjon, egy gyerek luxusnak számít. Gyermektámogatási programunk keretében havi 6000Ft-os adományért a támogató jelképes örökbefogadó szülővé válhat. Ez az az összeg, amely fedezi egy gyerkőc oktatását, tanszereit, étkezését és szükség esetén az orvosi ellátását. Mi pedig rendszeres időközönként hírt adunk a gyerkőc fejlődéséről, tanulmányi eredményeiről, fontosabb életeseményeiről, valamint küldünk róla fotókat, videókat."
        },
        "shine": {
            "title": "„Shine” Iskolafejlesztési program",
            "p1": "Manafwában 2020.februárjára felépült egyesületünk iskolája – Shine Nursery and Primary School - ahol a vidéki környezetben egyedülállóan jó színvonalon tanulhatnak a falubeli gyerekek. Jelenleg 3 óvodai csoport és két általános iskolai osztály van. Az iskola építése folyamatosan zajlik, a jövőben megépítésre kerülnek tovább tantermek, illetve nagy vágyunk, hogy játszótér, konyhakert és könyvtár is kialakításra kerülhessen.",
            "p2": "Nagyon fontosnak tartjuk, hogy a gyerekek kezdettől minőségi alapfokú oktatásban részesülhessenek.",
            "p3": "Jelenleg kidolgozás alatt áll egy sporttehetség gondozó programunk az iskola diákja körében, hiszen a sportnak megtartó ereje van és az időben felfedezett és gondozott tehetség kitörést jelenthet a nehéz sorsból.",
            "p4": "Nagyon sokat érdeklődnek Magyarországról és mi fontosnak tartjuk, hogy öregbítsük országunk hírnevét, úgyhogy ezek a gyermekek tudják, hogy hogy néz ki a Balaton, mi az a puli és ettek már Pilóta kekszet."
        },
        "graduateagirl": {
            "title": "Graduate a Girl - oktatástámogatási program",
            "p1": "A lányok oktatása az egyik legerősebb és leghatékonyabb fegyver, amit bevethetünk a globális szegénység felszámolására. Manafwában jelenleg a lányok többsége maximum az általános iskola 5.- 6. osztályáig jut el. 13 -14 évesen kell feleséggé válniuk és nem sokkal idősebbek akkor sem, amikor első gyermekükkel várandósak lesznek. A program azzal a céllal indul útjára, hogy megakadályozzuk, hogy ezeknek a lányoknak az élete és sorsa megpecsételődjön pusztán az által, hogy hová születtek, hogy segítsük őket abban, hogy eljuthassanak a középiskolai érettségiig. Havi 7800Ft-os adománnyal segítheti a támogató egy kamasz lány oktatását. Ez az összeg fedezi az oktatását és szükség esetén az orvosi ellátását.",
            "p2": "A programról bővebben a „Graduate a Girl” menüpont alatt olvashatsz."
        },
        "mtwapa": {
            "title": "Oktatás támogatás Mtwapaban",
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
        }
    },
    "en": {
      "main": {
            "title": "Projektjeink",
            "text": "Mi a Szívemben Született Afrika Egyesületnél sokan vagyunk és különbözőek, de mindannyian ugyanazért a célért dolgozunk: hogy embereknek ne csak hosszabb, de minőségi, méltóságteljes életük lehessen. Hiszünk abban, hogy a hatékony segítségnyújtás elengedhetetlen alappillére a megismerés, így minden programunkat a terepen begyűjtött szakmai tapasztalatokra építve dolgozzuk ki.",
            "desc": "Bővebb információkért kattints a képekre!"
        },
        "womenprogram": {
            "title": "Női program",
            "p1": "Programjaink fő fókuszában a nők helyzetének javítása, az ő megsegítésük áll. A nők helyzete az egész világon teremt megoldandó problémákat, viszont Afrikában igazán súlyos a helyzetük. Az afrikai nők vállát nagyon sok teher nyomja, de kevés a lehetőségük, viszont nagyon nagy a potenciál bennük.",
            "p2": "Hiszünk abban, hogy mindent meg kell tenni azért, hogy a nemek közti egyenlőtlenségek csökkenjenek, és végleg megszűnjenek. Hiszünk abban, hogy minden közösségben kulcs szerepe van a nőknek, így ha az ő helyzetüket javítjuk, a közösség egészének a helyzete javulni fog. Manafwában a felnőtt korú nők többsége vagy egyáltalán nem is járt iskolába, vagy nagyon fiatalon abba kellett hagynia. Nőkkel foglalkozó programunknak van egy elméleti és gyakorlati része is.",
            "p3": "Elméleti: higiéniai oktatás, tudatos családtervezés, természetes fogamzásgátlás, gazdasági alapismeretek.",
            "p4": "Gyakorlati: olyan dolgokat tanulnak, amelyek egyrészt a házkörüli mindennapjaikat segítik, másrészt pénzkereseti lehetőséget biztosít számukra. Például: bel- és külpiacon egyaránt értékesíthető kézműves termékek elkészítése, szakképzés (első sorban szabás-varrás), egyéb szolgáltatások (pl.fodrászat).",
            "p5": "Női programjainkkal további célunk, hogy a gyerekek kapjanak egy példát, lássák, hogy a szülőnek is érték a tanulás, leckét ír, képzi magát, otthon is gyakorol. Nő a nők közösségen belüli megbecsültsége és nő az önbizalmuk, a saját magukba vetett hitük."
        },
        "84days": {
            "title": "84 nap projekt",
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
            "p1": "Figyelemfelhívó, úgynevezett “community awerness” programokat szervezünk és tartunk Ugandában és Kenyában, amelyek keretében gyerekeket és fiatalokat tanítunk a gyermekjogokról, emberi jogokról, biztonságos kapcsolatokról, női csoportokat és felnőtt közösségeket az emberi jogokról, a biztonságos migrációról és az emberkereskedelem természetéről és veszélyeiről. Emellett szakmai partnereinkkel együttműködve dolgozunk az áldozatul esett - többnyire - nők feltérképezésén, mentésén, rehabilitálásán(egészségügyi és mentális értelemben is) és reintegrálásán.",
            "p2": "A jövőben szeretnénk védett házakat kialakítani Manafwában (Uganda) és Karamojában (Uganda) is."
        },
        "supportchildren": {
            "title": "Gyermektámogatási program",
            "p1": "Hiszünk abban, hogy minden gyermeknek jár a boldog, biztonságos gyerekkor, az oktatás és az esély egy jó életre. Ugandában sajnos nem ingyenes az oktatás és mivel a családok nagy része a szegénységi küszöb alatt él, az, hogy iskolába járjon, egy gyerek luxusnak számít. Gyermektámogatási programunk keretében havi 6000Ft-os adományért a támogató jelképes örökbefogadó szülővé válhat. Ez az az összeg, amely fedezi egy gyerkőc oktatását, tanszereit, étkezését és szükség esetén az orvosi ellátását. Mi pedig rendszeres időközönként hírt adunk a gyerkőc fejlődéséről, tanulmányi eredményeiről, fontosabb életeseményeiről, valamint küldünk róla fotókat, videókat."
        },
        "shine": {
            "title": "„Shine” Iskolafejlesztési program",
            "p1": "Manafwában 2020.februárjára felépült egyesületünk iskolája – Shine Nursery and Primary School - ahol a vidéki környezetben egyedülállóan jó színvonalon tanulhatnak a falubeli gyerekek. Jelenleg 3 óvodai csoport és két általános iskolai osztály van. Az iskola építése folyamatosan zajlik, a jövőben megépítésre kerülnek tovább tantermek, illetve nagy vágyunk, hogy játszótér, konyhakert és könyvtár is kialakításra kerülhessen.",
            "p2": "Nagyon fontosnak tartjuk, hogy a gyerekek kezdettől minőségi alapfokú oktatásban részesülhessenek.",
            "p3": "Jelenleg kidolgozás alatt áll egy sporttehetség gondozó programunk az iskola diákja körében, hiszen a sportnak megtartó ereje van és az időben felfedezett és gondozott tehetség kitörést jelenthet a nehéz sorsból.",
            "p4": "Nagyon sokat érdeklődnek Magyarországról és mi fontosnak tartjuk, hogy öregbítsük országunk hírnevét, úgyhogy ezek a gyermekek tudják, hogy hogy néz ki a Balaton, mi az a puli és ettek már Pilóta kekszet."
        },
        "graduateagirl": {
            "title": "Graduate a Girl - oktatástámogatási program",
            "p1": "A lányok oktatása az egyik legerősebb és leghatékonyabb fegyver, amit bevethetünk a globális szegénység felszámolására. Manafwában jelenleg a lányok többsége maximum az általános iskola 5.- 6. osztályáig jut el. 13 -14 évesen kell feleséggé válniuk és nem sokkal idősebbek akkor sem, amikor első gyermekükkel várandósak lesznek. A program azzal a céllal indul útjára, hogy megakadályozzuk, hogy ezeknek a lányoknak az élete és sorsa megpecsételődjön pusztán az által, hogy hová születtek, hogy segítsük őket abban, hogy eljuthassanak a középiskolai érettségiig. Havi 7800Ft-os adománnyal segítheti a támogató egy kamasz lány oktatását. Ez az összeg fedezi az oktatását és szükség esetén az orvosi ellátását.",
            "p2": "A programról bővebben a „Graduate a Girl” menüpont alatt olvashatsz."
        },
        "mtwapa": {
            "title": "Oktatás támogatás Mtwapaban",
            "p1": "A programban szereplő összes fiatal Mtwapából és a környékéről került a programba. Ez a régió súlyosan érintett az emberkereskedelem, a szexturizmus és a gyermekek szexuális célú kizsákmányolásával, így a programban szereplő összes fiatal vagy érintettje - korábbi áldozata - valamelyik felsorolt problémának vagy pedig családi vagy szociokultúrális, gazdaság közege és helyzete  miatt fokozottan kitett a veszélynek.",
            "p2": "Támogatóként rengeteget tehetsz a kiválasztott fiatalért. Ebben a programban havi 8500 forintos adományoddal támogatójává válhatsz egy fiatalnak, amely biztosítja számára a tandíjat, napi étkezést az iskolában ahová jár, a tanszereit és szükség esetén orvosi ellátást.",
            "p3": {
              "1": "Kérdés esetén fordulj bizalommal hozzánk a ",
              "2": " email címen."
            }
        },
        "euprogram": {
            "title": "Egészségügyi program",
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
        }
    }
}
</i18n>