<template>
  <div>
    <div class="sub-heading">{{ $t('title1') }}</div>
    <div id="team">
      <swiper class="swiper" :options="swiperOptions" ref="swiperRef">
        <swiper-slide v-for="member in teamMembers" :key="member.id"
          ><card
            :imageName="member.imageSmall || member.image"
            :title="member.name"
            :objectPosition="member.objectPosition"
            v-on:show-modal="showModal(member.id)"
            ><div slot="short-bio">{{ member.shortBio }}</div></card
          ></swiper-slide
        >
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div class="sub-heading">{{ $t('title2') }}</div>
    <div id="team">
      <swiper class="swiper" :options="swiperOptions" ref="swiperRef">
        <swiper-slide v-for="member in volunteers" :key="member.id"
          ><card
            :imageName="member.imageSmall || member.image"
            :title="member.name"
            :objectPosition="member.objectPosition"
            v-on:show-modal="showModal(member.id)"
            ><div slot="short-bio">{{ member.shortBio }}</div></card
          ></swiper-slide
        >
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss">
.swiper {
  --swiper-navigation-color: var(--moyo-font-dark);
  width: 100%;

  .swiper-container {
    padding: 25px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    outline: none;
  }

  .swiper-button-prev {
    left: 0;
  }

  .swiper-button-next {
    right: 0;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'

import card from '@/components/moyo/card.vue'
import modal from '@/components/moyo/modal.vue'
import { Bio } from '@/interfaces/bio'

@Component({
  name: 'Team',
  components: { card, Swiper, SwiperSlide, modal },
})
export default class Team extends Vue {
  swiperOptions = {
    autoplay: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerGroup: 1,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
      1280: {
        slidesPerGroup: 2,
        slidesPerView: 3,
      },
    },
  }

  showModal(id: string) {
    const swiperRef = (this.$refs.swiperRef as any).$swiper
    const isMobile = window.innerWidth < 768
    swiperRef.autoplay.stop()
    this.$modal.show(
      modal,
      {
        bio: [...this.teamMembers, ...this.volunteers].find((m) => m.id === id),
        id,
      },
      {
        width: isMobile ? '90%' : '700px',
        height: 'auto',
      }
    )
  }

  getLongBio(name: string): string[] {
    return Object.values(this.$i18n.t(`${name}.longBio`) as any)
  }

  get teamMembers(): Bio[] {
    return [
      {
        id: 'kzsofi',
        name: 'Könczöl Zsófi',
        image: 'team/Zsofi.jpg',
        shortBio: this.$i18n.t('kzsofi.shortBio') as string,
        longBio: this.getLongBio('kzsofi'),
        objectPosition: 'auto',
      },
      {
        id: 'szbalazs',
        name: 'Szilágyi Balázs',
        image: 'team/Balazs.jpg',
        shortBio: this.$i18n.t('szbalazs.shortBio') as string,
        longBio: this.getLongBio('szbalazs'),
        objectPosition: '50% 70%',
      },
      {
        id: 'perzsa',
        name: 'Pocsai Erzsa',
        image: 'team/Erzsa.jpg',
        shortBio: this.$i18n.t('perzsa.shortBio') as string,
        longBio: this.getLongBio('perzsa'),
        objectPosition: '50% 20%',
      },
      {
        id: 'ffbalazs',
        name: 'dr. Farkas Ferenc Balázs',
        image: 'team/FFBalazs.jpg',
        shortBio: this.$i18n.t('ffbalazs.shortBio') as string,
        longBio: this.getLongBio('ffbalazs'),
        objectPosition: 'auto',
      },
      {
        id: 'vmarci',
        name: 'dr. Végh Marcell',
        image: 'team/Marci.jpg',
        shortBio: this.$i18n.t('vmarci.shortBio') as string,
        longBio: this.getLongBio('vmarci'),
        objectPosition: '50% 45%',
      },
      {
        id: 'kpeter',
        name: 'Király Péter',
        image: 'team/Peti.jpg',
        shortBio: this.$i18n.t('kpeter.shortBio') as string,
        longBio: this.getLongBio('kpeter'),
        objectPosition: '50% 25%',
      },
      {
        id: 'kanna',
        name: 'Dr. Kiss Anna',
        image: 'team/Anna.jpg',
        shortBio: this.$i18n.t('kanna.shortBio') as string,
        longBio: this.getLongBio('kanna'),
        objectPosition: '50% 40%',
      },
      {
        id: 'tklaudia',
        name: 'Tóth Klaudia',
        image: 'team/Klaudia.jpg',
        shortBio: this.$i18n.t('tklaudia.shortBio') as string,
        longBio: this.getLongBio('tklaudia'),
        objectPosition: '50% 30%',
      },
      {
        id: 'tliliana',
        name: 'Tóth Liliána',
        image: 'team/Liliana.jpg',
        shortBio: this.$i18n.t('tliliana.shortBio') as string,
        longBio: this.getLongBio('tliliana'),
        objectPosition: 'auto',
      },
      {
        id: 'mpanna',
        name: 'Makó Panna',
        image: 'team/Panna.jpg',
        imageSmall: 'team/Panna_s.jpg',
        shortBio: this.$i18n.t('mpanna.shortBio') as string,
        longBio: this.getLongBio('mpanna'),
        objectPosition: 'center bottom',
      },
      {
        id: 'njuli',
        name: 'Németh Júlia',
        image: 'team/Juli.jpg',
        shortBio: this.$i18n.t('njuli.shortBio') as string,
        longBio: this.getLongBio('njuli'),
        objectPosition: '50% 40%',
      },
    ]
  }

  get volunteers(): Bio[] {
    return [
      // {
      //   id: 'ibarbi',
      //   name: 'Illyés Györfi Barbi',
      //   image: 'team/illyes_barbi.jpg',
      //   shortBio: '',
      //   longBio: this.getLongBio('ibarbi'),
      //   objectPosition: 'center 25%',
      // },
      // {
      //   id: 'kdori',
      //   name: 'Kozári Dóra Tímea',
      //   image: 'team/kozari_dori.jpg',
      //   shortBio: '',
      //   longBio: this.getLongBio('kdori'),
      //   objectPosition: 'center 14%',
      // },
      // {
      //   id: 'btunde',
      //   name: 'Balogh Tünde',
      //   image: 'team/balogh_tunde.jpg',
      //   shortBio: '',
      //   longBio: this.getLongBio('btunde'),
      //   objectPosition: 'center 30%',
      // },
      // {
      //   id: 'sdani',
      //   name: 'Steigler Dániel',
      //   image: 'team/steigler_dani.jpg',
      //   shortBio: '',
      //   longBio: this.getLongBio('sdani'),
      //   objectPosition: 'center 25%',
      // },
      // {
      //   id: 'magi',
      //   name: 'Dr. Musicz Ágnes',
      //   image: 'team/musicz_agi.jpg',
      //   shortBio: '',
      //   longBio: this.getLongBio('magi'),
      //   objectPosition: 'center center',
      // },
      // {
      //   id: 'zcsenge',
      //   name: 'Záhoczky Csenge',
      //   image: 'team/zahoczky_csenge.jpg',
      //   shortBio: '',
      //   longBio: this.getLongBio('zcsenge'),
      //   objectPosition: 'center 30%',
      // },
      // {
      //   id: 'vjuli',
      //   name: 'Vető Julianna',
      //   image: 'team/veto_juli.jpg',
      //   shortBio: '',
      //   longBio: this.getLongBio('vjuli'),
      //   objectPosition: 'center 30%',
      // },
      // {
      //   id: 'dklaudia',
      //   name: 'Dankai Klaudia',
      //   image: 'team/dankai_klaudia.jpg',
      //   shortBio: '',
      //   longBio: this.getLongBio('dklaudia'),
      //   objectPosition: 'center top',
      // },
      // {
      //   id: 'pbadel',
      //   name: 'Pribelszki-Balatincz Adél',
      //   image: 'team/pbadel.jpg',
      //   shortBio: '',
      //   longBio: this.getLongBio('pbadel'),
      //   objectPosition: 'center 55%',
      // },
      // {
      //   id: 'knori',
      //   name: 'Kárász Nóra',
      //   image: 'team/karasz_nori.jpg',
      //   shortBio: '',
      //   longBio: this.getLongBio('knori'),
      //   objectPosition: 'center center',
      // },
      // {
      //   id: 'bdora',
      //   name: 'Barabás Dóra',
      //   image: 'team/barabas_dora.jpg',
      //   shortBio: '',
      //   longBio: this.getLongBio('bdora'),
      //   objectPosition: 'center center',
      // },
      {
        id: 'ttlilla',
        name: 'Tóth-Tatai Lilla',
        image: 'team/ttlilla.jpg',
        shortBio: '',
        longBio: this.getLongBio('ttlilla'),
        objectPosition: 'center 30%',
      },
      {
        id: 'zzoe',
        name: 'Zahorák Zoe',
        image: 'team/zzoe.jpg',
        shortBio: '',
        longBio: this.getLongBio('zzoe'),
        objectPosition: 'center 25%',
      },
      {
        id: 'pagyongyi',
        name: 'dr. Pap Anna Gyöngyi',
        image: 'team/pagyongyi.jpg',
        shortBio: '',
        longBio: this.getLongBio('pagyongyi'),
        objectPosition: 'center 45%',
      },
      {
        id: 'cpanni',
        name: 'Czikkely Panni',
        image: 'team/cpanni.jpg',
        shortBio: '',
        longBio: this.getLongBio('cpanni'),
        objectPosition: 'center 25%',
      },
      {
        id: 'ldorina',
        name: 'László Dorina',
        image: 'team/ldorina.jpg',
        shortBio: '',
        longBio: this.getLongBio('ldorina'),
        objectPosition: 'center center',
      },
    ]
  }
}
</script>

<i18n>
{
  "hu": {
    "title1": "Csapattagok",
    "title2": "Önkénteseink",
    "kzsofi": {
      "shortBio": "Elnök",
      "longBio": {
        "1": "Könczöl Zsófi vagyok, a Szívemben Született Afrika megálmodója.",
        "2": "Az ELTE-n végeztem politológia szakon – itt az afrikai gyermekkatonaság társadalmi és biztonságpolitikai aspektusaival foglalkoztam - majd a Corvinus nemzetközi tanulmányok szakán, diplomácia szakirányon folytattam tanulmányaimat, ahol pedig a „nők szerepe a segélyhatékonyságban” témában végeztem egy ugandai esettanulmánnyal kiegészült kutatást.",
        "3": "Gyerekkorom óta fontos szerepet tölt be az életemben az adományozás és az önkénteskedés. Szakmai érdeklődésem fő fókusza a társadalmi felelősségvállalás, humanitárius segítségnyújtás, a fejlesztéspolitika, biztonságpolitika és a civil szféra, a civil felelősségvállalás. Kiemelten foglalkoztatnak továbbá az emberi jogok, a nők és gyermekek jogai, az ő helyzetüknek a javítási lehetőségei. Mély meggyőződésem, hogy a mai globalizált világban, amikor minden mindennel összefügg, az emberek nem hagyhatják figyelmen kívül azt sem, ami az országhatáron és a kontinensen túl történik.",
        "4": "Most már lassan 15 éve történt, hogy az iskolában hallottam egy előadást, amely sorsdöntő volt számomra. Eldöntöttem, hogy ha törik, ha szakad, én Afrikával fogok foglalkozni. 4 évvel ezelőtt jártam először Afrikában, akkor egy hónapot töltöttem ott. Az az egy hónap után, a szívem egy része örökre ott maradt. Attól a perctől fogva, hogy kiléptem a repülőből elfogott egy végtelenül megnyugtató otthonosság érzés, beleszerettem az országba, a tájba, az emberekbe. Úgy éreztem, hogy Uganda egy gyönyörű hely, tele (átvitt értelemben is) gyönyörű emberekkel. Az első manafwai reggeleim egyikén arra ébredtem, hogy egy kecske lógatja be a fejét az ablakon és rágcsálja a függönyt, a szobát betöltötte a vakító napfény, kintről pedig a gyerekek játékos nevetése és – a számomra érthetetlen nyelven történő –beszélgetése szűrődött be. Ahogy kiléptem ott álltak körülöttem koszosan, a kis szakadt ruháikban és mégis a legszebbeknek láttam őket. Fiatal koruk ellenére a tekintetük tele volt mélységgel és valami olyan bölcsességgel, amit nem, vagy csak ritkán láttam azelőtt. Úgy éreztem, hogy ez a boldogság maga és tudtam, hogy megérkeztem, nekem itt feladatom és küldetésem van. Az ott lét alatt aztán megismertem a helyieket, meghívtak az otthonaikba, bepillantást nyerhettem a mindennapjaikba, megláttam, hogy milyen kihívásaik és lehetőségeik vannak. Eldöntöttem, hogy segíteni szeretnék, hogy vissza fogok menni. Így is lett, azóta már több alkalommal voltam ott és most már mikor megyek, úgy érzem, hogy „itthonról megyek haza”.",
        "5": "Nagy örömömre szolgál, hogy egy ilyen fantasztikus csapat állt össze és ezekkel a nem mindennapi gondolkodású és tettre kész emberekkel megalapítottuk a Szívemben Született Afrika Egyesületet, bízva abban, hogy a helyiekkel együtt nagy változásokat hozhatunk az életükbe."
      }
    },
    "szbalazs": {
      "shortBio": "Gazdasági ügyekért felelős alelnök",
      "longBio": {
        "1": "Szilágyi Balázs vagyok, az Egyesület alelnöke.",
        "2": "A Kodolányi János Főiskolán végeztem közgazdászként. Gyerekkoromban, 2001-ben jártam először az afrikai kontinensen, és már az első lélegzetvétel magával ragadott. Teltek-múltak az évek, és közgazdász diplomám megszerzése után nem sokkal, újra összekötött Afrikával az élet, de ekkor már szakmai alapokon. Ebben az évben kezdtem külkereskedőként dolgozni egy magyar informatikai vállalatnál. Számomra ezért 2014 jelentette az áttörést, amikor hivatásszerűen kezdtem foglalkozni az ottani kihívásokkal.",
        "3": "Nem utolsó sorban, ennek a munkának kapcsán jutottam el életemben először a szub-szaharai térségbe, ahol megláttam Afrika \"igazi\" arcát. Érdeklődésem töretlen, az elmúlt 6 évben számos afrikai országban megfordultam, és elszántan foglalkozom a kontinensben rejlő lehetőségekkel. Az idei évben újabb mérföldkőhöz érkezett az életem; elhatároztam, hogy tapasztalataimat felhasználva, a Szívemben Született Afrika Egyesület égisze alatt, a szervezet céljaiért fogok dolgozni. Hiszem, hogy összefogással és új megközelítéssel, komoly segítséget, fenntartható fejlesztéseket tudunk nyújtani azokon a területeken, ahol jelen vagyunk."
      }
    },
    "perzsa": {
      "shortBio": "Adminisztrációért és kommunikációért felelős elnökségi tag",
      "longBio": {
        "1": "Pocsai Erzsa vagyok, az Egyesület elnökségi tagja.",
        "2": "Debreceni Egyetemen és az ELTE Társadalomtudományi Karán folytattam az egyetemi tanulmányaimat, jelenleg közigazgatásban dolgozok.",
        "3": "A Szívemben Született Afrika kezdeményezést volt szerencsém a kezdetektől megismerni, ezért különösen hálás vagyok, hogy tagja lehetek az Egyesületnek és aktívan is bekapcsolódhatok a munkába.",
        "4": "Meggyőződésem, hogy az oktatás az, ami valódi hatalmat ad az emberek kezébe, ezért különösen közel érzem magamhoz a Szervezet valamennyi tudásátadást célzó kezdeményezését és tevékenységét."
      }
    },
    "ffbalazs": {
      "shortBio": "Egészségügyi projektekért felelős elnökségi tag",
      "longBio": {
        "1": "Farkas Ferenc Balázs vagyok, az Egyesület elnökségi tagja, az egyetem végéhez közelítő medikus. Gimnáziumi éveim alatt kezdtem önkénteskedni, majd 2016-ban elhatároztam, hogy ott szeretnék segíteni ahol a legnagyobb szükség van rá; Afrikában.",
        "2": "A manafwai misszóban 2019 márciusában jártam először és azonnal magával ragadott a fekete kontinens varázsa. Választott hivatásomban fontosnak tartom az alázatot, valamint a helyzethez alkalmazkodó, innovatív, bizonyítékokon alapuló megközelítést. Különösen érdekel a fertőző betegségek gyógyítása valamint a népegészségügy afrikai problémái, kérdései."
      }
    },
    "vmarci": {
      "shortBio": "Elnökségi tag",
      "longBio": {
        "1": "Végh Marcell vagyok, jogász. Jelenleg egy budapesti ügyvédi irodában dolgozom, mint ügyvédjelölt. Afrika gyerekkorom óta folyamatosan foglalkoztat. Jelenleg az egyesület jogi hátterét támogatom és bízom benne, hogy a közeljövőben az egyesület humanitárius tevékenységében is részt veszek majd Ugandában."
      }
    },
    "kpeter": {
      "shortBio": "Egyesületi tag",
      "longBio": {
        "1": "Király Péter vagyok, az Egyesület tagja, politológus, nemzetközi kapcsolatok és gazdaságdiplomáciai szakértő. Egyetemi éveim alatt, valamint párizsi és prágai szakmai gyakorlatom alatt foglalkoztam az afrikai térség biztonságpolitikai kérdéseivel, illetve az afrikai kontinens és Magyarország kapcsolataival. Jelenleg a magyar közigazgatásban dolgozom nemzetközi területen.",
        "2": "2017/19-ben lehetőségem volt részt venni a Lakitelki Népfőiskola Afrika kollégiumán, az itt megismert emberek csak megerősítették bennem a szándékot, hogy komolyabban foglalkozzak a magyar-afrikai kapcsolatok kihívásaival és lehetőségeivel."
      }
    },
    "kanna": {
      "shortBio": "Egyesületi tag",
      "longBio": {
        "1": "Kiss Anna vagyok a Magyar Tudományos Akadémia, Könyvtár és Információs Központ Tudománypolitikai és Tudománymetriai Osztályának kutatójaként dolgozom. Végzettségem táplálkozástudományi szakember, a Szent István Egyetem Élelmiszertudományi Karán doktorjelölt, disszertációmnak témája az elhízás és az elhízás különböző formáiból származó társadalmi terhek meghatározása.",
        "2": "Többször jártam Ugandában, a Kyambogo Egyetemen tanítottam táplálkozástudományt egy agrár szakképzés keretén belül. Afrikai munkámnak kiemelt fókusza a nők és gyermekek táplálkozásának optimalizációja, valamint a helyes perinatális táplálkozással kapcsolatos ismeretek növelése a nők körében."
      }
    },
    "tklaudia": {
      "shortBio": "Egyesületi tag",
      "longBio": {
        "1": "Tóth Klaudia vagyok, 26 éves és jelenleg a Nemzeti Közszolgálati Egyetemen folytatom tanulmányaimat.",
        "2": "Az Afrika iránti érdeklődésem már kis koromban megmutatkozott, hiszen a balatonedericsi Afrika Múzeum szorgos látogatója voltam. Később, az alapszakos képzésem alatt több olyan kutatásban és publikációírásban is részt vettem, amelyek Afrika biztonságpolitikai helyzetével foglalkoztak. Kiemelt érdeklődéssel kísérem a Nagy Zöld Fal kezdeményezést, a Száhel-övezet kapcsán a klímaváltozás és a migrációs trendek kapcsolódási pontjait, valamint a régió dzsihadista szervezeteinek tevékenységét."
      }
    },
    "tliliana": {
      "shortBio": "Egyesületi tag",
      "longBio": {
        "1": "Tóth Liliána vagyok, 26 éves. A Budapesti Corvinus Egyetemen, nemzetközi tanulmányok szakon végeztem. A fő kutatási területem a nem politikai tevékenységet folytató civil szervezetek működése, illetve lehetőségeik, mozgásterük és korlátjaik a programjaik, célkitűzéseik megvalósítását illetően a 21. században. Kiemelten fontos terület számomra a gyermekek, nők, sérülékeny társadalmi csoportok, kisebbségek védelme és helyzetük javítása a közéletben (pl. társadalmi párbeszéd, oktatás, ismeretterjesztés, érzékenyítő programok révén) és a mindennapokban.",
        "2": "Az elmúlt években lehetőségem volt megismerkedni az európaitól sok tekintetben különböző kultúrákkal. Éltem 6 hónapot Vietnámban 2018-ban, illetve 2019 őszén részt vettem Zambiában egy jogi-antropológiai kutatásban is, amelyben a dél-afrikai ország társadalmi és politikai berendezkedését vizsgáltuk, illetve film-hang-és képanyagokban dokumentáltuk a törzsekben élő lakosság életének, kultúráinak egyéb forrásokban nehezen felkutatható, hiányosan rögzített mozzanatait. Ez az afrikai terepkutatási élmény rendkívül meghatározó volt az Afrikáról való gondolkodásomban, és megerősítette bennem a tenni akarás, jobbítás vágyát.",
        "3": "2020 tavaszig Törörországban éltem, ahol egy, az Európa-Mediterrán Térség közötti kultúrális kapcsolatok fejlesztésével foglalkozó civil szervezetnél dolgoztam."
      }
    },
    "mpanna": {
      "shortBio": "Egyesületi tag",
      "longBio": {
        "1": "Makó Panna vagyok, grafikus, webfejlesztő, vállalkozó és világvándor.",
        "2": "Önkéntesként csatlakoztam a Szívemben Született Afrika csapatához: szerelem volt első látásra. Sok helyre sodródtam már, megannyi közösséggel foglalkoztam. Minden munkám során, amivel eddig és jelenleg is foglalkozom elsőrendűnek tartom a közösséget, akik munkám közben körbevesznek; az értékrendet, amivel működnek; valamint a célt, amit kitűznek maguk elé.",
        "3": "Afrika kultúrája és közösségének megismerése vonz már a kezdetektől, továbbá kiemelten foglalkoztat a nők szerepe különböző társadalmakban. Vallom, hogy az embereknek kapcsolódniuk kell egymáshoz, kultúráknak találkoznia kell egymással, és hiszem, hogy fenntartható fejlődés csak úgy érhető el, ha támogatjuk egymást a különböző tudások átadásában - ez az az irány, amivel úgy érzem csatlakozni tudok a szervezet értékeihez és tevékenységeihez."
      }
    },
    "njuli": {
      "shortBio": "Egyesületi tag",
      "longBio": {
        "1": "Németh Júlia vagyok, az Egyesület pártolói tagja és a gyermektámogatási valamint a Graduate a Girl programok koordinátora. 2022 elején csatlakoztam a Szívemben Született Afrikához, de az Egyesület munkáját már azelőtt is figyelemmel kísértem.",
        "2": "A Corvinus Egyetemen végeztem nemzetközi tanulmányok szakon, majd a Bécsi Egyetem politológia mesterszakán szereztem diplomát. Jelenleg a felsőoktatásban dolgozom.",
        "3": "Afrikával az egyetemi éveim alatt kezdtem el foglalkozni, tanulmányaim befejezése után pedig Ghánában tölthettem hat hónapot egy német fejlesztési szervezet gyakornokaként. Bár szakmai pályám egyelőre másképp alakult, tudom, hogy Afrika valamilyen formában mindig szerepet fog játszani az életemben."
      }
    },
    "ibarbi": {
      "shortBio": "Önkéntes",
      "longBio": {
        "1": "Illyés Györfi Barbi vagyok, lassan 3 éve a szervezet követője, 1 éve pedig aktív önkéntese. Érdekelnek a kultúrák, a köztük lévő hasonlóságok/különbségek és az emberek. Utóbbira válaszként pszichológiát tanulok, előbbi kíváncsiságot etetve pedig lehetőségeimhez mérten utazok, felfedezek. Na meg olvasok. Bár még sosem jártam Afrikában, valamilyen okból kifolyólag gyerekkorom óta szerelmese vagyok. A kultúra, a minták, az emberek önfeledtsége, a ritmus, amely felér egy szívdobogással… minden vonz. Bízom benne, hogy amíg reggelente szemeim kinyílnak, addig tehetek is valamit az emberiségért, egy szebb jövőjért. Szabad lélek vagyok, amit néha sajnos elfelejtek, de mindig gyorsan visszatalálok magamhoz. Az álmaim nagyok, ambícióim sose hagytak cserben, s ha egyszer kijutok Afrikába, lehet haza sem jövök többé. Magunkba nézni, nyitni mások felé, kíváncsinak lenni és önkénteskedni menő!"
      }
    },
    "kdori": {
      "shortBio": "Önkéntes",
      "longBio": {
        "1": "Az a típusú ember vagyok, aki minden reggel újabb lehetőséget lát a napban és minden este hálával a szívében hajtja álomra a fejét. A szerencse lányának gondolom magam, emellett nagyon tudatosan élem az életem. Megtalálom azokat a dolgokat, amikben ki tudok teljesedni, és azokat az embereket, közösségeket, akik inspirálnak. Az életem egy ilyen csodadarabkája a Szívemben Született Afrika Egyesület is.",
        "2": "Számomra fontos, hogy olyan önkéntes tevékenységet végezzek, ahol találkoznak az adó és a fogadó fél szükségletei, ezáltal az \"adok-kapok\" kapcsolat kölcsönössé válik. Imádok utazni, nyitott szemmel járni, vonzanak a különböző kultúrák, Afrika világa különösen. A gyermekekkel való foglalkozás pedig a mindennapjaim része, ez éltet igazán. És mikor olyan gyermekeknek adhatok magamból, akiknek igazán szüksége van rá, az felülmúlhatatlan öröm számomra. Nem csupán az egyesület küldetésével és projektjeivel, de működésükkel, elveikkel is teljes mértékben tudok azonosulni. Hiszen valójában nem egy szervezetet választottam, ahova csatlakozni szerettem volna, hanem azokat az embereket, akik azt éltetik. 2022. októberében csatlakoztam az önkéntes csapathoz, de már most úgy érzem, hogy sokkal többet kaptam általuk, mint, amit adhatok."
      }
    },
    "btunde": {
      "shortBio": "Önkéntes",
      "longBio": {
        "1": "Balogh Tünde vagyok, a hétköznapokban könyvelő, de inkább a sokszor mosolygó önkéntes, aki hiszi, hogy ha igazán szeretnénk valamit elérni az életünkben, azt megteremtjük.",
        "2": "2022. szeptemberében csatlakoztam a Szívemben Született Afrika Egyesülethez. ",
        "3": "Az önkéntesség körülbelül 7 éve mindennapjaim része, úgy érzem minden egyes ilyen esemény, tevékenység többé tesz az életemben, és előrevisz álmaim megvalósításában. ",
        "4": "Egy idézet melyet próbálok követni:",
        "5": "\"Önmagunk megtalálásának legjobb módja, ha elveszünk mások szolgálatában\" /Gandhi/",
        "6": "Gyerekként arról ábrándoztam, hogy egyszer Afrikában leszek önkéntes, az élet más irányba sodort, de úgy érzem sosem késő teljesíteni a vágyainkat. ",
        "7": "Az évek alatt több nonprofit szervezettel volt kapcsolatom, ezért tudatosan kerestem egy olyan közösséget, ahol családias a környezet, emberi kapcsolatok alakulnak ki, és fizikailag is láthatom, ahogy megvalósulnak a támogatások. ",
        "8": "Már az első találkozásoknál éreztem, hogy a legjobbat választottam, és amikor eljön, az ideje biztosan afrikai misszióban veszek részt."
      }
    },
    "sdani": {
      "shortBio": "Önkéntes",
      "longBio": {
        "1": "Steigler Dániel vagyok, és 6 hónapja lehetek tagja ennek a csodás közösségnek.",
        "2": "Több éves külföldi életem során megtapasztaltam, hogy mennyire szép az emberek sokszínűsége, vallástól, bőrszíntől, nemtől és társadalmi rétegtől függetlenül, ezért is szerettem volna itthon egy hasonlóan nyitott szervezetnek a része lenni.",
        "3": "Mindig is szerettem volna Önkéntesként támogatni egy magasztosabb cél ügyét, de mindeddig ez háttérbe szorult.",
        "4": "Afrika a maga pezsgő színes életérzésével, csodálatos állat és növényvilágával, kultúrájával már kisgyerekként lenyűgözött.",
        "5": "Ebből is adódott, hogy a tenni akarást és az életérzést összekomponálva kötöttem ki a Szívemben Született Afrika közösségénél.",
        "6": "Hiszem, hogy ezzel a csapattal mind felkészültségünk mind motiváltságunk miatt, ha egy kicsivel is, de jobbá tehetjük a világot."
      }
    },
    "magi": {
      "shortBio": "Önkéntes",
      "longBio": {
        "1": "Életünk igazán nagy dolgainak van egy olyan dimenziója, ami szavakkal csak körbeírható. Az érzések, illatok, gondolatok élménnyé összesűrűsödve adják azokat a mérföldköveket, melyek több év, évtized után is meghatározóak, egy- egy pillanatba összesűrűsödve később is visszahívhatja egy személy, dallam, szó, bármi.",
        "2": "A novemberi ugandai missziós úttól sok ilyen pillanatot várok. Annyira nagy biztonságérzetet ad a rendszeres afrikai missziós akadémiai nap, ahol havonta találkozhatunk egymással, közvetetten átélhetjük korábbi missziók történetét, az önismereti feladatok nekem nagyon megerősítőek.",
        "3": "Miért pont Afrika? Mert egzotikus, távoli, ahol nagy a szükség, ahol talán könnyebben elfeledkezhet önmagáról az ember. Ahol materialista mérce szerint szegénység van, mégis megtapasztalható az ott élő emberek derűje, hálája az apró, mindennapi dolgokért. ",
        "4": "Gyermekorvosként, nőként nagyon érdekel, hogy a szülést, anyaságot, gyermeknevelést hogyan élik meg az ugandai nők. Hogy a sok különbözőség, távolság mellett mi az, ami közös bennünk.",
        "5": "Miért önkéntesség? Azért, mert “ Nagyobb boldogság adni, mint kapni”. (Apostolok Cselekedetei 20:35)"
      }
    },
    "zcsenge": {
      "shortBio": "Önkéntes",
      "longBio": {
        "1": "Valamit tenni kell… Valamit muszáj – gondolta a hatéves énem, és összegyűjtötte az összes zsebpénzét, hogy az Ökumenikus Segélyszervezeten keresztül eljuttassa az árvíz károsultjainak.",
        "2": "Záhoczky Csenge vagyok, külpolitikai és nemzetközi biztonság- és védelempolitikai szakértő, a gyerekek csodálója, örök idealista.",
        "3": "A környezetem mindig is egyfajta „gyereksuttogónak” tartott, már nagyobbacska koromtól kezdve tapadtak rám a gyerekek. Sokáig mindenki azt hitte, egyszer majd óvónő leszek. A mindig is bennem motoszkáló segíteni akarás, az emberek iránti elhivatottság azonban úgy érzem, jobban ki tud teljesedni a humanitárius segítségnyújtásban, egy gyermek- és nőjogokkal foglalkozó életútban.",
        "4": "Zsófival még évekkel ezelőtt, egy másik szervezet önkénteseiként ismertük meg egymást. Amikor megtudtam, hogy megalapította a Szívemben Született Afrika Egyesületet, kétség sem férhetett hozzá, hogy az ő csapatának tagja szeretnék lenni. Úgy érzem ugyanis, hogy Zsófi és az én szívemben ugyanaz lakozik: ugyanaz a szeretet az emberek iránt, ugyanaz a belső késztetés, hogy mások életét, ha csak egy hajszálnyival is, de jobbá, könnyebbé, szebbé, békésebbé tegyük. ",
        "5": "Hiszen ahogy a Talmud mondja: aki egy embert megment, az egész világot menti meg."
      }
    },
    "vjuli": {
      "shortBio": "Önkéntes",
      "longBio": {
        "1": "Vető Julianna vagyok, és két és fél éve önkénteskedek a Szívemben Született Afrika csapatánál. Ezalatt a rövid idő alatt, nagyon sok élményben részesültem, és rengeteg fantasztikus embert ismertem meg.",
        "2": "Gyerekkori álmom volt, hogy egyszer afrikai gyerekekkel foglalkozzak, de sosem gondoltam, hogy erre tényleg van lehetőségem. A Covid alatt találkoztam a szervezettel, amikor jelképes örökbefogadó szülőket kerestek. Akkor már nem volt kérdés, hogy csatlakozzak a csapathoz, és örökbefogadják egy gyermeket. Nagyon szerencsés vagyok, mert egy év önkénteskedés után sikerült kijutnom a Szervezettel Manafwába és megismerkedni az örökbefogadott kislánnyommal, és a közösség valamennyi tagjával. Ez egy életre szóló élmény volt számomra, és azóta is mindig emlékeztet arra, hogy ne adjuk fel az álmainkat.",
        "3": "A családommal, egy kis vegetáriánus éttermet üzemeltetünk Buda szívében, a Szelence Cafét. Az étterem a gyerekkori lakásunkból lett átalakítva, és mi továbbra is a házban élünk. Nagyon fontos számomra a barátságos, otthonos környezet és a család összetartása. Ezért is szívügyem a jövőben minél több manafwai családot segíteni, hogy minél kevesebb családnak kelljen szétszakadni.",
        "4": "A szervezetnek köszönhetően rengeteg fantasztikus embert ismerhettem meg, amikből mára szoros barátságok, baráti társaságok alakultak ki. És ennél fantasztikusabb dolog nincs számomra, mint amikor egy közös cél érdekében, különböző emberek össze tudnak kapcsolódni."
      }
    },
    "dklaudia": {
      "shortBio": "Önkéntes",
      "longBio": {
        "1": "Azzal, hogy valaki önkéntessé válik, megvan a remény arra, hogy jobbá, szebbé tegyük a világot! <3",
        "2": "Több mint egy éve kezdtem el keresni egy olyan szervezetet, akik Afrikában élő gyerekeknek segítenek. Mindig is érdekelt Afrika, emiatt a terveim között szerepelt, hogy egyszer az életben mindenképpen szeretnék oda eljutni és segíteni az ott élő gyerekeknek amiben tudok. Februárban csatlakoztam ehhez a csodálatos csapathoz, ahol már az első alkalommal éreztem, hogy nagyon jó helyre csöppentem. Jó érezni, hogy mennyire fontos a szervezetnek, hogy folyamatosan foglalkoznak azzal, hogy felkészítsenek minket egy lehetséges misszióra, emellett pedig oda figyelnek arra is, hogy tényleg egy nagyon jó közösség részévé váljunk. ",
        "3": "Biztosan felmerült benned is a kérdés, hogy miért pont a Szívemben Született Afrika csapatához jelentkezz önkéntesnek?",
        "4": "A válasz egyszerű: Ha szeretnél egy szuper csapat részévé válni, ahol szívvel-lélekkel minden nap azon dolgozunk, hogy segítsünk a gyerekeknek egy szebb jövőt elérni, akkor ne habozz, itt a helyed! 😊"
      }
    },
    "pbadel": {
      "shortBio": "Önkéntes",
      "longBio": {
        "1": "Pribelszki-Balatincz Adél vagyok, lassan másfél éve önkénteskedem a szervezetnél. Jelenlegi feladatom, hogy elkészítsem, a támogatási programokban résztvevő gyerekek adatlapjait. Gimnazista korom óta szerettem volna önkénteskedni. Egyetem alatt találtam rá a szervezetre Instagrammon és azonnal csatlakoztam.",
        "2": "Formatervezőként, fontos számomra, hogy minél több embert és helyzetet megismerjek. Szeretném a munkámmal támogatni másokat és könnyebbé tenni az életüket.",
        "3": "A legboldogabb pillanat számomra, önkénteskedésem során, az volt, amikor megláttam, hogy az első általam készített adatlapokon szereplő gyerekek támogatóra találtak. Nagyon jó érzés volt látni, a munkám eredményét."
      }
    },
    "knori": {
      "shortBio": "Önkéntes",
      "longBio": {
        "1": "Mosoly, energia, gyermekek, hit, egészségügy… csupán néhány szó, ez mégis mind én lennék. ",
        "2": "Hivatalosabb bemutatkozásként: Kárász Nóra vagyok, orvos, táncos, világjáró, illetve 2021 őszétől a Szívemben Született Afrika Egyesület önkéntese.",
        "3": "Mindig is az az ember voltam, aki képtelen megülni egy helyben, valamit állandóan tennem kell, hogy hasznosnak érezzem magam. Életem egyik legfőbb mottója, hogy a nap minden percét használjam ki, és soha ne vesztegessem el az időmet… Hasonló gondolatok kavarogtak bennem akkor is, amikor az egyetemi élet mókuskerekében rám tört a segíteni akarás vágya. Ekkor kezdtem el igazán Afrika iránt érdeklődni és találtam rá a Szívemben Született Afrika Egyesületre. A szervezet mentalitása, hozzáállása, a „nem segélyezünk, hanem fejlesztünk” elv azonnal meggyőzött, és tudtam, hogy itt mindig elmúlik az az érzés, hogy netán nem vagyok hasznos ember.",
        "4": "Habár az anatómián tanultakat meghazudtolom, de szerintem egy embernek nem kettő, hanem ha akarja, többszáz, többezer karja is van, amelyeket az arra rászoruló emberek felé nyújthat. Hiszek abban, hogy habár a ruhaméretem nem ezt sugallja, a karjaim mégis elég hosszúak ahhoz, hogy képesek legyenek kontinenseken átnyúlni és egészen Afrikáig elérni. Szeretném, hogy ezek között a karok között mindenki biztonságban és szeretetben érezze magát.",
        "5": "Nagyon szeretek a kis összetartó csapatunk tagja lenni, hiszen közösen sokkal nagyobb boldogság a sikerek elérése és megélése. Köszönöm az önkénteseknek, hogy állandóan motiválnak és bízom benne, hogy energikus, vidám és mindig mosolygós énem viszonozza mindezt."
      }
    },
    "bdora": {
      "shortBio": "Önkéntes",
      "longBio": {
        "1": "Barabás Dóra vagyok, egy éve önkénteskedem a Szívemben Született Afrikánál. Régóta érdekel Afrika, melynek sokszínűségét lenyűgözőnek találom. Emellett, amikor a humanitárius fejlesztésről először hallottam a tanulmányaim során, elhatároztam, hogy erről szeretnék többet megtudni. Mivel a szervezet Ugandában számos, szakmailag megalapozott projektet vitt már véghez sikerrel, az önkéntességre való felhívásukat olvasva nem volt kétséges, hogy csatlakozom.",
        "2": "Az önkéntesként eltöltött egy évben bepillantást nyertem a Szívemben Született Afrika Egyesület működésébe, sok részletet megtudhattam a projektek hátteréről. Aktívan bekapcsolódhattam olyan feladatokba, mint az Afrika Nap lebonyolítása vagy középiskolás diákok oktatása a klímaváltozás Afrikára gyakorolt hatásairól, melyekből én is sokat tanultam. Nagyon jó érzés számomra, hogy tevékenységemmel segíthetek a szervezetnek céljai elérésében. Emellett egy fantasztikus közösség részévé válhattam, amelynek tagjait összeköti a közös érdeklődés és a tenni akarás vágya. Mindenkit arra bíztatok, hogy csatlakozzon. :)"
      }
    },
    "ttlilla": {
      "shortBio": "Önkéntes",
      "longBio": {
        "1": "Bár eredeti végzettségem szerint fordító és tolmács vagyok, végül az élet úgy hozta, hogy nem ez lett a végleges szakmám. Önkéntesként viszont nagyon szívesen vállalok fordítási feladatokat az Egyesület részére már jó pár éve.",
        "2": "Amióta csokoládéval foglalkozom, még fontosabbá vált számomra, hogy a kakaótermelő országokban tapasztalt szegénység és a gyermekmunka felszámolásához aktívan hozzájáruljak nemcsak anyagilag, hanem edukációval is. Munkám során igyekszem az afrikai kakaótermesztés valódi helyzetét és az itteni inspiráló példákat is bemutatni.",
        "3": "Az Egyesület rendezvényein többször is részt vettem már előadóként és kiállítóként is az utóbbi években."
      }
    },
    "zzoe": {
      "shortBio": "Önkéntes",
      "longBio": {
        "1": "Zahorák Zoe vagyok politológus, és kulturális antropológia mesterszakos hallgató. Fő érdeklődési köreim a: szociális problémák, emberi jogok, közösségszervezés, kultúra és művészet. 2022 márciusában csatlakoztam a szervezethez mint önkéntes. ",
        "2": "A Szívemben Született Afrika munkája számomra olyan példamutató és valódi változásokat eredményező tevékenységek és projektek sorozata melynek megtisztelő, hogy aktív tagja lehetek.",
        "3": "Rendkívül izgalmas és fontos számomra, hogy ötleteimmel előre segíthetem a szervezet munkáját, és közben pedig részleteiben tanulhatok Ugandáról és Kenyáról. Célom, hogy hosszútávon vehessek részt ebben a munkában amely az ugandai és kenyai emberek életét teszi jobbá és generációs változásokat eredményez. "
      }
    },
    "pagyongyi": {
      "shortBio": "Önkéntes",
      "longBio": {
        "1": "Panka vagyok, okleveles politológus, jogász, mentőápoló, a Szívemben Született Afrika Egyesület önkéntese. Meggyőződésem, hogy még a legapróbb önzetlen segítő tett is gyógyítja a társadalmat és a lelkünket, ezért az önkéntesség hosszú évek óta fontos része az életemnek. Évekig dolgoztam leszakadó régiókban, szegregált területeken és igyekeztem szebbé tenni az ott élő emberek napjait. ",
        "2": "2023 januárjában született meg bennem az az elhatározás, hogy a hazai önkénteskedés mellett becsatlakozom egy olyan szervezet munkájába is, amely Magyarország határain kívül végzi tevékenységét. ",
        "3": "Kisgyermek korom óta szerelmese vagyok az afrikai kontinensnek, a vadregényes tájaknak és a forróságnak. Ennek köszönhető, hogy rátaláltam Zsófira, akinek utazásait, majd Egyesülete fejlődését éveken át csillogó szemekkel követtem a közösségi média felületein. A szervezet hitvallását olvasva és projektjeit látva, nem volt kérdés, hogy én is részese szeretnék lenni annak a csodának, amelyet ez az akkor még maroknyi közösség tesz.",
        "4": "A szervezethez csatlakozva amellett, hogy a hírlevél szerkesztésben az egyik legtesthezállóbb feladat talált meg magának, rengeteg fantasztikus embert ismerhettem meg, amiért nagyon hálás vagyok."
      }
    },
    "cpanni": {
      "shortBio": "Önkéntes",
      "longBio": {
        "1": "Czikkely Panni vagyok, illusztrátor és grafikus.",
        "2": "Fontosnak tartom a rajzaimon keresztül kommunikálni az érzelmekről, a nehéz pillanatokról, a nőiségről és az összefogás erejeről.",
        "3": "Ennek kapcsán kerültem közel a szevezethez is még 2021-ben: a 84 nap projekt logóját tervezhettem meg, illetve a kampány egyik nagykövete is lehettem. Nem sokkal ezután fogadtam örökbe jelképesen Phionah-t, aki akkor 5 éves volt. Még ebben az évben kiutazhattam Zsófival Manafwába, ahol a Hungary Helps által építtetett Shine iskolát festhettem ki a grafikáimmal, hogy méltó, vidám és inspiráló környezetet biztosíthasson a gyermekeknek és a tanároknak egyaránt. A Cakkompakkom márkánk keretein belül a nőknek különböző környezettudatos termékek varrását tanítottam meg, ezzel fejlesztve az eddigi tudásukat és a termékpalettát, emellett finommotorikát fejlesztő foglalkozásokat tartottam a kicsiknek.",
        "4": "Azóta is rendszerint készítek önkéntes alapon kreatívokat missziókhoz, kampányokhoz, felhívásokhoz, illetve szívesen viszem a szervezet hírét, hogy a lehető legtöbb és legjobb emberhez jusson el az üzenetünk és a szívügyünk.",
        "5": "Minden megmozdulásnál, amelyben részt vehetek nekem körbeér a világ, és az öleléslánc egyik szeme lehetek, ami egyben tartja ezt az egész zavarodott, bizonytalan, de mégis színes és szeretettel teli gombócot. "
      }
    },
    "ldorina": {
      "shortBio": "Önkéntes",
      "longBio": {
        "1": "László Dorina vagyok, rendező-operatőr-vágó-fotós, a Dorinka Studio és egy csodás kislány anyukája.",
        "2": "A videókészítés és a fotózás világa 2012-ben, 16 éves koromban szippantott be amikor elkészíthettem életem első videoklipjét és ez a mánia azóta is tart. ",
        "3": "Számos magyarországi előadónak készíthettem videoklipet különböző műfajokban. Többek között együtt dolgozhattam Zórával, a Kollár Klemencz Kamarazenekarral, Szirtes Edina Mókussal, a Belmondo zenekarral, a Cotton Club Singerssel, a Hajdu Klára Quartettel, Hrutka Róberttel és Grecsó Krisztiánnal, Szekeres Adriennel, a Stereo Swinggel. A klipek rendezésén, forgatásán és vágásán túl számos alkalommal kaptam lehetőséget arra, hogy különböző rendezvényeket örökítsek meg. Ezek közé tartoztak esküvők, céges rendezvények, valamint koncertek, interjúsorozatok, fesztiválok és kulturális események. ",
        "4": "Az egyesülethez eleinte mint vágó csatlakoztam - a 2021-es őszi misszió alatt az önkéntesek elvételeket küldtek nekem a mindennapi kalandjaikról, amiket én itthon vlogokká formáltam. Ezt a jó szokást megtartottuk és azóta már a számát sem tudom, hogy hány missziónak lehettem az elmesélője ezáltal. ",
        "5": "2023-ban Zsófi megkeresett a lehetőséggel, hogy ezúttal mi lenne, hogyha nem csak itthon vágnék, hanem csatlakoznék a csapathoz az őszi misszió során. Kamerámmal igyekeztem minden pillanatot megörökíteni, legyen az fotó vagy videó, és Isten áldja a laptopok feltalálóját, mert így akár a kisbuszban, a földúton zötykölődve is tudtam képeket retusálni, hogy az otthoniak mindig naprakészek legyenek a csapat kalandjairól. A misszió sikeres volt, nekem pedig megváltozott az életem.",
        "6": "Nagyon büszke vagyok, hogy ennek a csodás közösségnek a tagja vagyok és nagyon remélem, hogy lehetek még a missziók krónikása itthon és a csodás ugandai terepen egyaránt. "
      }
    }
  },
  "en": {
    "title1": "Team Members",
    "title2": "Our Volunteers",
    "kzsofi": {
      "shortBio": "President",
      "longBio": {
        "1": "I am Zsófi Könczöl, the creator of Africa Born in My Heart.",
        "2": "I graduated in Political Science at ELTE - where I studied the social and security policy aspects of child soldiers in Africa - and then continued my studies in International Studies, Diplomacy specialization at University Corvinus, where I conducted a case study on the role of women in aid effectiveness in Uganda.",
        "3": "Donating and volunteering has been an important part of my life since childhood. The main focus of my professional interests is social responsibility, humanitarian aid, development policy, security policy and the civil sector, civic engagement. I also have a special interest in human rights, women's and children's rights and how to improve their situation. It is my firm belief that in today's globalised world, where everything is interconnected, people cannot ignore what is happening beyond national borders and across continents.",
        "4": "It is now almost 15 years since I heard a lecture at school that was a turning point for me. I decided that, come hell or high water, I was going to study Africa. The first time I visited Africa was 4 years ago, when I spent a month there. After that one month, a part of my heart stayed there forever. From the moment I stepped off the plane, I had an infinitely comforting feeling of home, of falling in love with the country, the landscape, the people. I felt that Uganda is a beautiful place, full of (metaphorically speaking) beautiful people. On one of my first mornings in Manafwa, I woke up to a goat hanging its head from the window and nibbling on the curtains, the room filled with bright sunlight and the sound of children laughing and talking playfully outside in a language I couldn't understand. As I stepped out, they stood around me, dirty in their little torn clothes, and yet I saw them at their most beautiful. Despite their young age, their eyes were full of depth and a wisdom I had not, or rarely, seen before. I felt that this was happiness itself and I knew that I had arrived, that I had a task and a mission here. During my time there, I got to know the people, I was invited into their homes, I got a glimpse into their daily lives, I saw the challenges and opportunities they had. I decided that I wanted to help, that I would go back. I did, I've been there several times since and now when I go, I feel like I'm \"going home from home\".",
        "5": "I'm delighted that such a fantastic team has come together and with these unconventional minds and willingness to do things, we have formed the Africa Born in My Heart Association, confident that together with the local people we can make a big difference to their lives."
      }
    },
    "szbalazs": {
      "shortBio": "Vice President for Economic Affairs",
      "longBio": {
        "1": "I am Balázs Szilágyi, Vice President of the Association.",
        "2": "I graduated from the Kodolányi János College as an economist. I visited the African continent for the first time as a child in 2001 and was captivated from the first breath. Years went by and shortly after graduating in economics, I was reconnected with Africa, but this time on a professional basis. That year I started working as a foreign trader for a Hungarian IT company. For me, the breakthrough came in 2014, when I started to deal with the challenges there professionally.",
        "3": "Last but not least, it was through this work that I first visited sub-Saharan Africa, where I saw the \"real\" face of Africa. My interest is undiminished, I have spent the last 6 years in many African countries and I am determined to explore the continent's potential. This year, I have reached another milestone in my life; I have decided to use my experience to work towards the goals of the organisation, under the auspices of the Africa Born in My Heart Association. I believe that by joining forces and adopting a new approach, we can provide serious help and sustainable development in the areas where we are present."
      }
    },
    "perzsa": {
      "shortBio": "Board member, administration and communications",
      "longBio": {
        "1": "I am Erzsa Pocsai, member of the Association's Board.",
        "2": "I studied at the University of Debrecen and at the Faculty of Social Sciences of ELTE, currently I work in public administration.",
        "3": "I have had the privilege of getting to know the Africa Born in My Heart initiative from the very beginning, and I am particularly grateful to be a member of the Association and to be actively involved in its work.",
        "4": "I am convinced that education is what puts real power in the hands of the people, and I feel particularly close to all the initiatives and activities of the Organisation aimed at knowledge transfer."
      }
    },
    "ffbalazs": {
      "shortBio": "Board member, medical projects",
      "longBio": {
        "1": "I am Ferenc Balázs Farkas, member of the Association's Board, a medical doctor coming to the end of my studies. I started volunteering during my high school years and in 2016 I decided to help where it is needed the most; in Africa.",
        "2": "I visited Manafwa Mission for the first time in March 2019 and was immediately captivated by the magic of the black continent. In my chosen vocation, I value humility and an innovative, evidence-based approach that is adaptable to the situation. I am particularly interested in the treatment of infectious diseases and public health problems and issues in Africa."
      }
    },
    "vmarci": {
      "shortBio": "Board member",
      "longBio": {
        "1": "I am Marcell Végh, lawyer. I am currently working as a trainee lawyer in a law firm in Budapest. Africa has been a constant preoccupation of mine since childhood. Currently I am supporting the legal background of the association and I am looking forward to being involved in the humanitarian activities of the association in Uganda in the near future."
      }
    },
    "kpeter": {
      "shortBio": "Association member",
      "longBio": {
        "1": "I am Péter Király, member of the Association, political scientist, international relations and economic diplomacy expert. During my university years and my internships in Paris and Prague, I dealt with security policy issues in the African region and relations between the African continent and Hungary. I am currently working in the Hungarian administration in the international field.",
        "2": "In 2017/19, I had the opportunity to participate in the Africa College of the Lakitelk People's College, and the people I met there only strengthened my will to deal more seriously with the challenges and opportunities of Hungarian-African relations."
      }
    },
    "kanna": {
      "shortBio": "Association member",
      "longBio": {
        "1": "I am Anna Kiss and I work as a researcher in the Department of Science Policy and Science Metrics at the Hungarian Academy of Sciences, Library and Information Centre. I am a nutrition scientist, a PhD candidate at the Faculty of Food Science of Szent István University, and my dissertation is on obesity and the definition of the social burden of obesity in different forms.",
        "2": "I have been to Uganda several times, teaching Nutrition Science at Kyambogo University in the context of an agricultural degree course. My work in Africa has a particular focus on optimising nutrition for women and children and increasing knowledge of good perinatal nutrition among women."
      }
    },
    "tklaudia": {
      "shortBio": "Association member",
      "longBio": {
        "1": "I am Klaudia Tóth, 26 years old and I am currently studying at the National University of Public Service.",
        "2": "My interest in Africa was already evident at an early age, as I was a diligent visitor to the Africa Museum in Balatonederics. Later on, during my undergraduate studies, I was involved in several research and publication projects dealing with the security situation in Africa. I have been following with particular interest the Great Green Wall initiative, the interlinkages between climate change and migration trends in the Sahel region, and the activities of jihadist organisations in the region."
      }
    },
    "tliliana": {
      "shortBio": "Association member",
      "longBio": {
        "1": "I am Liliána Tóth, 26 years old. I graduated from Corvinus University of Budapest, majoring in International Studies. My main field of research is the functioning of non-political NGOs, their opportunities, scope and constraints in implementing their programmes and objectives in the 21st century. A particular area of interest for me is the protection of children, women, vulnerable groups and minorities and the improvement of their situation in public life (e.g. through social dialogue, education, awareness-raising, sensitisation programmes) and in everyday life.",
        "2": "In recent years I have had the opportunity to get to know cultures that are in many respects different from European ones. I spent 6 months in Vietnam in 2018, and in the autumn of 2019 I took part in a legal-anthropological research in Zambia, where we investigated the social and political system of the South African country, and documented in film, audio and visual material aspects of the life and cultures of the tribal population that are difficult to find in other sources. This experience of fieldwork in Africa has been extremely influential in my thinking about Africa, and has strengthened my desire to do something, to improve it.",
        "3": "Until the spring of 2020, I lived in Turkey, where I worked for an NGO working on the development of cultural relations between Europe and the Mediterranean."
      }
    },
    "mpanna": {
      "shortBio": "Association member",
      "longBio": {
        "1": "I joined the Africa Born in My Heart team as a volunteer: it was love at first sight. I've drifted to many places, engaged with many communities. In all the work that I have done and continue to do, I have always put first the community that surrounds me in my work; the values that they operate by; and the purpose that they set for themselves.",
        "2": "I have been drawn to the culture of Africa and its communities from the very beginning, and I am particularly interested in the role of women in different societies. I believe that people need to connect, cultures need to meet, and I believe that sustainable development can only be achieved by supporting each other in the transfer of different knowledge - this is the direction in which I feel I can join the values and activities of the organisation."
      }
    },
    "njuli": {
      "shortBio": "Association member",
      "longBio": {
        "1": "I'm Júlia Németh, a member of the Association's Patrons and coordinator of the Child Support and Graduate a Girl programmes.I joined Africa Born in My Heart in early 2022, but I have been following the work of the Association since before that.",
        "2": "I graduated from Corvinus University with a degree in International Studies and a Master's degree in Political Science from the University of Vienna. I am currently working in higher education.",
        "3": "I started working on Africa during my university years and after my studies I spent six months in Ghana as an intern for a German development organisation. Although my professional career has taken a different path for the time being, I know that Africa will always play a role in my life in some form."
      }
    },
    "ibarbi": {
      "shortBio": "",
      "longBio": {
        "1": "I'm Barbi Illyés Györfi, I've been a follower of the organisation for 3 years and an active volunteer for 1 year. I am interested in cultures, their similarities/differences and people. In response to the latter, I study psychology, and feeding the curiosity of the former, I travel and explore as much as I can. And I read. Although I have never been to Africa, for some reason I have been a lover since childhood. The culture, the patterns, the exuberance of the people, the rhythm that can make your heart beat... everything attracts me. I trust that as long as my eyes open in the morning, I can do something for humanity, for a better future. I am a free spirit, which I sometimes forget, but I always find my way back quickly. My dreams are big, my ambitions have never let me down, and once I get to Africa, I may never come home again. Looking within ourselves, opening up to others, being curious and volunteering is cool!"
      }
    },
    "kdori": {
      "shortBio": "",
      "longBio": {
        "1": "I'm the type of person who sees new opportunities for the day every morning and goes to sleep every night with gratitude in my heart. I think of myself as “a daughter of luck”, and I live my life very consciously. I find the things I can fulfill myself in and the people and communities that inspire me. One of those gems in my life is the Africa Born in My Heart Association.",
        "2": "For me, it is important to do volunteer work where the needs of the giver and the receiver meet, making the give-and-take relationship reciprocal. I love to travel, to keep my eyes open and I am attracted by different cultures, especially the world of Africa. And working with children is part of my everyday life, it really makes me feel alive. And when I am able to give of myself to children who really need it, it is an unsurpassed joy for me. I can fully identify not only with the mission and projects of the association, but also with the way it works and its principles. In fact, I didn't choose an organisation to join, but the people who make it come alive. I joined the volunteer team in October 2022, but I already feel that I have received much more from them than I have to give."
      }
    },
    "btunde": {
      "shortBio": "",
      "longBio": {
        "1": "I'm Tünde Balogh, an accountant in everyday life, but more of a volunteer with a smile on her face, who believes that if we really want to achieve something in life, we can make it happen.",
        "2": "In September 2022, I joined the Africa Born in My Heart Association.",
        "3": "Volunteering has been a part of my everyday life for about 7 years, I feel every one of these events and activities makes me feel more fulfilled in my life and moves me forward in achieving my dreams.",
        "4": "A quote I try to follow:",
        "5": "\"The best way to find oneself is to lose oneself in the service of others\" /Gandhi/",
        "6": "As a child I dreamed of volunteering in Africa one day, life took me in a different direction but I feel it's never too late to fulfill our dreams.",
        "7": "Over the years, I have been involved with several non-profit organizations, so I consciously sought out a community where I could have a family environment, develop human connections and physically see the grants being implemented.",
        "8": "From the first meetings, I felt I had chosen the best one, and when the time comes, I will definitely be involved in missions in Africa."
      }
    },
    "sdani": {
      "shortBio": "",
      "longBio": {
        "1": "I am Daniel Steigler and I have been a member of this wonderful community for 6 months.",
        "2": "During my years of living abroad, I have experienced the beauty of diversity of people, regardless of religion, colour, gender and social class, which is why I wanted to be part of a similarly open organisation at home.",
        "3": "I've always wanted to volunteer for a greater cause, but so far it has taken a back seat.",
        "3": "Africa, with its vibrant colourful sense of life, its wonderful flora and fauna and its culture, fascinated me as a child.",
        "4": "This is how I ended up with the Africa Born in My Heart community, a combination of a desire to do something and a sense of life.",
        "5": "I believe that with this team, we can make the world a better place, if only a little, because of our skills and motivation."
      }
    },
    "magi": {
      "shortBio": "",
      "longBio": {
        "1": "The really big things in our lives have a dimension that can only be described in words. Feelings, smells, thoughts, condensed into experiences, provide the milestones that are still defining after many years, decades, and can be recalled later by a person, a melody, a word, anything, even if condensed into a moment.",
        "2": "I expect many such moments from the mission trip to Uganda in November. There is such a sense of security in the regular African mission academy day, where we can meet each other every month, relive the stories of previous missions indirectly, the self-awareness exercises are very empowering for me.",
        "3": "Why Africa? Because it is exotic, remote, where there is a great need, where it is perhaps easier to forget oneself. Where there is poverty by materialistic standards, yet you can experience the serenity and gratitude of the people who live there for the small, everyday things.",
        "4": "As a paediatrician, as a woman, I am very interested in how Ugandan women experience childbirth, motherhood and child-rearing. What we have in common, despite all the differences and distances.",
        "5": "Why volunteering? Because \"It is more blessed to give than to receive\" (Acts of Apostles 20:35)."
      }
    },
    "zcsenge": {
      "shortBio": "",
      "longBio": {
        "1": "Something has to be done... Something has to be done - my six-year-old self thought, and collected all her pocket money to deliver it to the flood victims through the Ecumenical Relief Organisation.",
        "2": "I'm Csenge Záhoczky, an expert in foreign policy and international security and defence, an admirer of children and an eternal idealist.",
        "3": "I've always been considered a \"child whisperer\" by my peers, who have been clinging to me since I was a baby. For a long time, everyone thought I would be a kindergarten teacher. However, I feel that the desire to help and the dedication to people that I have always had can be better fulfilled in humanitarian aid, in a life of work for children and women's rights.",
        "4": "Zsófi and I met years ago as volunteers for another organisation. When I found out that she had founded the Africa Born in My Heart Association, there was no doubt in my mind that I wanted to be part of her team. Because I feel that Zsófi and I share the same heart: the same love for people, the same inner urge to make the lives of others better, easier, more beautiful, more peaceful, even if only by a hair's breadth.",
        "5": "Because, as the Talmud says: whoever saves one person saves the whole world."
      }
    },
    "vjuli": {
      "shortBio": "",
      "longBio": {
        "1": "I am Julianna Vető and I have been volunteering with the Africa Born in My Heart team for two and a half years. In this short time, I have had a lot of experiences and met a lot of fantastic people.",
        "2": "It was a childhood dream of mine to work with African children, but I never thought that I would really have the opportunity to do so. During Covid, I met the organisation when they were looking for token adoptive parents. At the time, there was no question of me joining the team and adopting a child. I was very lucky because after a year of volunteering, I managed to get out to Manafwa with the organisation and meet my adopted baby girl and all the members of the community. It was an experience of a lifetime for me and since then it has been a constant reminder to never give up on our dreams.",
        "3": "With my family, I run a small vegetarian restaurant in the heart of Buda, the Szelence Café. The restaurant was converted from our childhood home and we still live in the house. It is very important to me to have a friendly, homely environment and to keep the family together. That's why it's a matter of my heart to help as many Manafwa families as possible in the future, so that as few families as possible have to be torn apart.",
        "4": "Thanks to the organisation, I have met so many fantastic people who have now become close friends and friendships. And there is nothing more fantastic for me than when different people can come together for a common goal."
      }
    },
    "dklaudia": {
      "shortBio": "",
      "longBio": {
        "1": "By becoming a volunteer, we have the hope to make the world a better, more beautiful place! <3",
        "2": "More than a year ago I started looking for an organization that helps children in Africa. I've always been interested in Africa, so one of my plans was to definitely go there at some point in my life and help the children there in any way I could. I joined this amazing team in February and from the first time I felt I had found a great place. It's good to feel how important it is to the organization that they are constantly working to prepare us for a possible mission, and also that they are looking to make sure we are part of a really good community.",
        "3": "You must have wondered why you chose to volunteer with the Africa Born in My Heart team?",
        "4": "The answer is simple: If you want to be part of a super team where we work with our hearts and souls every day to help children achieve a better future, then don't hesitate, this is the place for you! 😊"
      }
    },
    "pbadel": {
      "shortBio": "",
      "longBio": {
        "1": "My name is Adél Pribelszki-Balatincz, I have been volunteering with the organisation for almost a year and a half. My current task is to prepare the data sheets of the children participating in the support programmes. I have wanted to volunteer since I was in high school. I found the organisation on Instagram during university and joined immediately.",
        "2": "As a designer, it's important for me to get to know as many people and situations as possible. I want to use my work to support others and make their lives easier.",
        "3": "The happiest moment for me, during my volunteering, was when I saw that the children on the first data sheets I created had found a sponsor. It was a great feeling to see the results of my work."
      }
    },
    "knori": {
      "shortBio": "",
      "longBio": {
        "1": "Smile, energy, children, faith, healthcare... just a few words, but that would be me.",
        "2": "I'm Nóra Kárász, doctor, dancer, globetrotter and, from autumn 2021, volunteer at the Africa Born in My Heart Association.",
        "3": "I have always been the kind of person who can't sit still, I have to do something all the time to feel useful. One of the main mottos of my life is to make the most of every minute of the day and never waste my time... Similar thoughts were also stirring in my mind when the desire to help came over me in the merry-go-round of university life. It was then that I became really interested in Africa and found the Africa Born in My Heart Association. I was immediately convinced by the mentality and attitude of the organisation, the principle of \"we don't help, we develop\", and I knew that here I would always get rid of the feeling that I was not a useful person.",
        "4": "Although I disbelieve what I learned in anatomy, I believe that a person has not two, but hundreds or thousands of arms that he can extend to people in need. I believe that, although my dress size does not suggest it, my arms are long enough to reach across continents and all the way to Africa. I want everyone to feel safe and loved between these arms.",
        "5": "I really like being part of our small, close-knit team, as it is much happier to achieve and experience success together. I thank the volunteers for their constant motivation and trust that my energetic, cheerful and always smiling self will reciprocate."
      }
    },
    "bdora": {
      "shortBio": "",
      "longBio": {
        "1": "My name is Dóra Barabás, I have been volunteering with Africa Born in My Heart for a year. I have been interested in Africa for a long time and find its diversity fascinating. Besides, when I first heard about humanitarian development during my studies, I decided I wanted to learn more about it. As the organisation had already successfully implemented a number of professionally sound projects in Uganda, there was no doubt in my mind that I would join after reading their call for volunteers.",
        "2": "During my one year as a volunteer, I gained an insight into the workings of the Africa Born in My Heart Association and learned a lot of details about the background of the projects. I have been actively involved in activities such as running Africa Day and educating secondary school students about the impact of climate change on Africa, from which I have learned a lot. It is a great feeling for me to be able to help the organisation achieve its goals. I have also been able to be part of a fantastic community of people united by a common interest and desire to do something. I encourage everyone to join :)"
      }
    },
    "ttlilla": {
      "shortBio": "Volunteer",
      "longBio": {
        "1": "Although I graduated as a translator and interpreter, my career path took a different turn and I have started to work in the chocolate industry instead. As a volunteer though, I am happy to support the work of the Association by providing them with translations to use on their website or in their printed materials.",
        "2": "Since I have started to work with chocolate, it has become more important for me to play an active role in eradicating extreme poverty and child labor in cacao growing countries not only financially but also through education and awareness raising. So, I am focusing on sharing my knowledge about the current situation within the African cacao growing regions and highlighting some of the inspiring examples, too.",
        "3": "I have been giving talks and participating as an exhibitor at many of the Association's cultural events in the last few years."
      }
    },
    "zzoe": {
      "shortBio": "Volunteer",
      "longBio": {
        "1": "My name is Zoe Zahorák and I am a political scientist and a Master's student in Cultural Anthropology. My main interests are social issues, human rights, community organizing, culture and arts. I joined this organisation as a volunteer in March 2022. ",
        "2": "The work of Africa Born in My Heart for me is a series of exemplary activities and projects that bring about real change, and I am honoured to be an active member of this organisation.",
        "3": "It is very exciting and important for me to be able to contribute my ideas to the work of the organisation and learn about Uganda and Kenya in detail. My goal is to be a long-term participant in this work that makes a difference in the lives of Ugandans and Kenyans and brings about generational change."
      }
    },
    "pagyongyi": {
      "shortBio": "Volunteer",
      "longBio": {
        "1": "My name is Panka, I am a political scientist, lawyer, paramedic, and a volunteer of Africa Born in My Heart. I am convinced that the smallest selfless act of assistance heals society and our souls, which is why volunteering has been an important part of my life for many years. For years, I have worked in marginalized regions, segregated areas, striving to make the days of the people living there better. ",
        "2": "In January 2023, I made the decision to join an organization’s work beyond the borders of Hungary.",
        "3": "Since childhood, I have been in love with Africa, its wild landscapes, and the hot weather. Thanks to this, I found Zsófi, whose travels and then the development of her Association I followed with sparkling eyes on social media for years. Reading the organization’s profession and seeing its projects, there was no question that I wanted to be a part of the wonder that this small community does.",
        "4": "Joining the organization, besides finding one of the most suitable tasks for myself in newsletter editing, I also got to know a lot of fantastic people, for which I am very thankful."
      }
    },
    "cpanni": {
      "shortBio": "Volunteer",
      "longBio": {
        "1": "I am Panni Czikkely, illustrator and graphic designer.",
        "2": "Themes I find important and represent in my art include: tough times, femininity, the power of unity and communication of one's feelings.",
        "3": "These led me close to the organisation back in 2021: I was chosen to design the logo of project '84 days' and I got to be one of the ambassadors of the project as well. Shortly after that I adopted Phionah who was 5 years old at the time. In that same year I made the journey with Zsófi to Manafwa, where I got to decorate Shine Primary and Nursery School built by Hungary Helps with my own drawings and designs to provide a joyful and inspiring atmosphere for both students and teachers. Through our brand 'Cakkompakkom' I set out to theach women how to craft several eco-friendly textile-wares thus advancing their current knowledge and skills and I also held several workshops for children centered around the development of motor-skills.",
        "4": "To this day I frequently design creatives for missions and campaigns on a voluntary basis while also spreading word about the organisation so that it's message may reach those who would listen.",
        "5": "Every movement I am able to be part of connects the whole world as I see it and I am one of the links in the chain of happiness that keeps this distraught and unsure but also colourful and full-of-love dumpling in one piece."
      }
    },
    "ldorina": {
      "shortBio": "Volunteer",
      "longBio": {
        "1": "László Dorina vagyok, rendező-operatőr-vágó-fotós, a Dorinka Studio és egy csodás kislány anyukája.",
        "2": "A videókészítés és a fotózás világa 2012-ben, 16 éves koromban szippantott be amikor elkészíthettem életem első videoklipjét és ez a mánia azóta is tart. ",
        "3": "Számos magyarországi előadónak készíthettem videoklipet különböző műfajokban. Többek között együtt dolgozhattam Zórával, a Kollár Klemencz Kamarazenekarral, Szirtes Edina Mókussal, a Belmondo zenekarral, a Cotton Club Singerssel, a Hajdu Klára Quartettel, Hrutka Róberttel és Grecsó Krisztiánnal, Szekeres Adriennel, a Stereo Swinggel. A klipek rendezésén, forgatásán és vágásán túl számos alkalommal kaptam lehetőséget arra, hogy különböző rendezvényeket örökítsek meg. Ezek közé tartoztak esküvők, céges rendezvények, valamint koncertek, interjúsorozatok, fesztiválok és kulturális események. ",
        "4": "Az egyesülethez eleinte mint vágó csatlakoztam - a 2021-es őszi misszió alatt az Volunteerek elvételeket küldtek nekem a mindennapi kalandjaikról, amiket én itthon vlogokká formáltam. Ezt a jó szokást megtartottuk és azóta már a számát sem tudom, hogy hány missziónak lehettem az elmesélője ezáltal. ",
        "5": "2023-ban Zsófi megkeresett a lehetőséggel, hogy ezúttal mi lenne, hogyha nem csak itthon vágnék, hanem csatlakoznék a csapathoz az őszi misszió során. Kamerámmal igyekeztem minden pillanatot megörökíteni, legyen az fotó vagy videó, és Isten áldja a laptopok feltalálóját, mert így akár a kisbuszban, a földúton zötykölődve is tudtam képeket retusálni, hogy az otthoniak mindig naprakészek legyenek a csapat kalandjairól. A misszió sikeres volt, nekem pedig megváltozott az életem.",
        "6": "Nagyon büszke vagyok, hogy ennek a csodás közösségnek a tagja vagyok és nagyon remélem, hogy lehetek még a missziók krónikása itthon és a csodás ugandai terepen egyaránt. "
      }
    }
  }
}
</i18n>
