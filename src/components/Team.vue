<template>
  <div>
    <div class="sub-heading">{{ $t('title1') }}</div>
    <div id="team">
      <swiper class="swiper" :options="swiperOptions" ref="swiperRef">
        <swiper-slide v-for="(member, index) in teamMembers" :key="member.id"
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
        <swiper-slide v-for="(member, index) in volunteers" :key="member.id"
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
      { bio: [...this.teamMembers, ...this.volunteers].find(m => m.id === id), id },
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
      }
    ]
  }

  get volunteers(): Bio[] {
    return [
      {
        id: 'ibarbi',
        name: 'Illyés Györfi Barbi',
        image: 'team/illyes_barbi.jpg',
        shortBio: this.$i18n.t('ibarbi.shortBio') as string,
        longBio: this.getLongBio('ibarbi'),
        objectPosition: 'center 25%',
      },
      {
        id: 'kdori',
        name: 'Kozári Dóra Tímea',
        image: 'team/kozari_dori.jpg',
        shortBio: this.$i18n.t('kdori.shortBio') as string,
        longBio: this.getLongBio('kdori'),
        objectPosition: 'center 14%',
      },
      {
        id: 'btunde',
        name: 'Balogh Tünde',
        image: 'team/balogh_tunde.jpg',
        shortBio: this.$i18n.t('btunde.shortBio') as string,
        longBio: this.getLongBio('btunde'),
        objectPosition: 'center 30%',
      },
      {
        id: 'sdani',
        name: 'Steigler Dániel',
        image: 'team/steigler_dani.jpg',
        shortBio: this.$i18n.t('sdani.shortBio') as string,
        longBio: this.getLongBio('sdani'),
        objectPosition: 'center 25%',
      },
      {
        id: 'magi',
        name: 'Dr. Musicz Ágnes',
        image: 'team/musicz_agi.jpg',
        shortBio: this.$i18n.t('magi.shortBio') as string,
        longBio: this.getLongBio('magi'),
        objectPosition: 'center center',
      },
      {
        id: 'zcsenge',
        name: 'Záhoczky Csenge',
        image: 'team/zahoczky_csenge.jpg',
        shortBio: this.$i18n.t('zcsenge.shortBio') as string,
        longBio: this.getLongBio('zcsenge'),
        objectPosition: 'center 30%',
      },
      {
        id: 'vjuli',
        name: 'Vető Julianna',
        image: 'team/veto_juli.jpg',
        shortBio: this.$i18n.t('vjuli.shortBio') as string,
        longBio: this.getLongBio('vjuli'),
        objectPosition: 'center 30%',
      },
      {
        id: 'dklaudia',
        name: 'Dankai Klaudia',
        image: 'team/dankai_klaudia.jpg',
        shortBio: this.$i18n.t('dklaudia.shortBio') as string,
        longBio: this.getLongBio('dklaudia'),
        objectPosition: 'center top',
      },
      {
        id: 'pbadel',
        name: 'Pribelszki-Balatincz Adél',
        image: 'team/pbadel.jpg',
        shortBio: this.$i18n.t('pbadel.shortBio') as string,
        longBio: this.getLongBio('pbadel'),
        objectPosition: 'center 55%',
      },
      {
        id: 'knori',
        name: 'Kárász Nóra',
        image: 'team/karasz_nori.jpg',
        shortBio: this.$i18n.t('knori.shortBio') as string,
        longBio: this.getLongBio('knori'),
        objectPosition: 'center center',
      },
      {
        id: 'bdora',
        name: 'Barabás Dóra',
        image: 'team/barabas_dora.jpg',
        shortBio: this.$i18n.t('bdora.shortBio') as string,
        longBio: this.getLongBio('bdora'),
        objectPosition: 'center center',
      }
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
        }
    },
    "en": {
        "title1": "Team Members",
        "title2": "Our Volunteers",
        "kzsofi": {
            "shortBio": "President",
            "longBio": {
              "1": "I am Zsófi Könczöl, the dreamer and founder of Szívemben Született Afrika – “Africa Born in my Heart”.",
              "2": "I studied political science at the University of ELTE, where I researched the social and security aspects of child soldiery. Then I studied international studies at the University of Corvinus on the academic specialisation of diplomacy, where I researched womens’ role in aid efficiency with a case study in Uganda.",
              "3": "Donating and volunteer work have taken an important place in my life ever since childhood. The main focus of my professional interest is: social responsibility, humanitarian assistance, development politics, security politics and the civil sphere, civilian responsibility. I put a great emphasis, furthermore, on human rights, womens’ and children’s rights, the possibilities of improving their situation. It is my deep conviction, that in today's globalized world, when everything is linked to everything, one should not ignore events happening beyond the borders of their country and continent. ",
              "4": "It has almost been 15 years, since I first heard a lecture in school which proved to be crucial for my future. I decided that in my future career, I will deal with Africa by any means. I had been to Africa first 4 years ago, I spent there a month then. After that single month, a part of my heart was left there for eternity. When I first stepped out of the plane, I felt an infinitely comforting familiarity feeling, I fell in love with the country, into the landscape, the people. I felt like Uganda is a beautiful place, full of people who are beautiful in every sense. On my first morning in Manafwa, I woke up to see a goat hang his head through my window and chewing on the curtains, the room full of bright sunshine, children’s playful laughter ringing outside and – to me unintelligible – talking coming through the window. As I stepped out, there they stood dirtily, in their shabby clothes, and I thought they were the most beautiful ones after all. Despite their young age, their eyes were full of meaning and a sense of wisdom I have rarely encountered before. I felt like this is happiness itself, and I knew, instantly, that I have arrived. I have a job to do here, I have a mission here. During my time there I got to know the locals, got invited into their homes, I got to look into their everyday lives, their challenges, and their opportunities.I decided that I would like to help, that I will come back. And so I have: I have been there several times since then, and now, whenever I travel there, I’m feeling like “leaving home to go home”.",
              "5": "It is my truly great pleasure that such an amazing team have formed and that we have been able to found the project of “Africa Born in my Heart” with these unique and quick-to-act people. We are trusting to make big impact upon the life of the local people, working together with them toward this goal."
            }
        },
        "szbalazs": {
            "shortBio": "Vice President",
            "longBio": {
                "1": "I am Balázs Szilágyi, the association's vice president.",
                "2": "I graduated as an economist at the College of Kodolányi János Főiskola. The first time I have been to Africa was during my childhood, in 2001, and the very first breath I took there carried me with it. The years went by, and some time after the acquisition of my degree as an economist, I got linked to Africa once more, this time on a professional reason. That was when I started to work as a foreign trader for a Hungarian informatics company. 2014 meant the breakthrough to me therefore: when I started dealing with the challenges of the place in a professional way.",
                "3": "Last but not least, for the first time in my life I got to go to the Sub-Sahara thanks to this job. This was where I saw the “real” Africa for the first time. My interest is unbroken; during the last 6 years I have been to several African countries, and I deal with the opportunities residing in the continent resolutely. My life arrived at another milestone this year; I decided to work within the association of “Africa Born in my Heart”, to make use of my experience for the aims of the organisation. I believe that through champing and a new approach, we can provide serious, sustainable help in those areas where we are present."
            }
        },
        "perzsa": {
            "shortBio": "Board member, administration and communications",
            "longBio": {
                "1": "I am Erzsa Pocsai, board member of the association.",
                "2": "I pursued my university studies at the University of Debrecen and the Faculty of Social Studies at ELTE, and I am working in public administration currently.",
                "3": "I am fortunate to have been present from the birth of the association of “Africa Born in my Heart”. I am especially grateful for this, and for being able to actively participate in the organization’s work.",
                "4": "It is my conviction, that education gives real power to people, therefore I feel every initiation and activity of the organization that aims at passing on knowledge especially close to myself."
            }
        },
        "ffbalazs": {
            "shortBio": "Board member, medical projects",
            "longBio": {
                "1": "I am Ferenc Farkas Balázs, the association's board member and a medical student approaching the end of university. I started volunteer work during my high school years, then, in 2016, I decided to help where it is most needed: in Africa.",
                "2": "I have been on a mission to Manafwa for the first time in March 2019, and I was carried away by the magic of the “Black Continent” instantly. In my chosen profession I consider humility, innovative approach, and adapting to the evidence very important. I am particularly interested in the healing of infectious diseases and in the questions and problems of national health in Africa."
            }
        },
        "vmarci": {
            "shortBio": "Board member",
            "longBio": {
                "1": "I am dr. Marcell Végh, jurist. I am working in a Budapest lawyer's office currently, as an attorney-candidate. I have been preoccupied with Africa ever since my childhood. I am currently supporting the legal background of the association, and I trust that within the near future I will be able to participate in the humanitarian activity in Uganda as well."
            }
        },
        "kpeter": {
            "shortBio": "Association member",
            "longBio": {
                "1": "I am Péter Király, association member, political scientist, international relations and economic diplomacy expert. During my university years and my internships in Paris and Prague, I dealt with the questions of security policy of Africa and the relationships between Hungary and the African continent. Currently I am working in the Hungarian public administration, in an international area.",
                "2": "I had an opportunity to attend an African College at the school of Lakitelki Népfőiskola in 2017/19. The people I met here only reinforced my intention to deal with the challenges and opportunities of Hungarian-African connections more sincerely."
            }
        },
        "kanna": {
            "shortBio": "Association member",
            "longBio": {
                "1": "I am Anna Kiss, I’m working as a researcher at the Library and Information Centre of the Hungarian Academy of Sciences, Department of Science Policy and Scientometrics. My qualification is dietetics specialist, I am a PhD student at the University of Szent István. The focus of my dissertation is obesity and the definition of the social burdens originating from the different forms of it.",
                "2": "I have been to Uganda many times, I have taught dietetics within an agrarian training at the University of Kyambogo. The emphasized focus of my African work is the optimalization of nourishment of women and children, and the improvement of knowledge regarding the right perinatal nourishment."
            }
        },
        "tklaudia": {
            "shortBio": "Association member",
            "longBio": {
                "1": "I am Klaudia Tóth, 26, currently studying at the University of Public Service.",
                "2": "My interest towards Africa has been already showing back in my childhood when I was a regular visitor of the African Museum in Balatonederics. Later, during my BA studies, I participated in several researches and publications which focused on the security policies of Africa. I am following the Great Green Wall initiative, the connection points of climate change and migration trends in the Sahel region, and the activity of jihadist organizations with great interest."
            }
        },
        "tliliana": {
            "shortBio": "Association member",
            "longBio": {
                "1": "I am Liliána Tóth, 26. I studied International Relations at the University of Corvinus in Budapest. My main research area is the functioning of non-political civil organizations, and the possibilities and limits of reaching their aims in the 21st century. I put a great emphasis on the protection of children, women and vulnerable social groups and the improvement of their situation within the public sphere (e.g., social discussion, education etc.) and everyday life.",
                "2": "During the past few years, I had the opportunity to get to know cultures that differ from the European ones. I have lived in Vietnam for 6 months in 2018, and I participated in research focusing on law and anthropology in Zambia during the fall of 2019. During this research we investigated the country’s social and political arrangements, and we documented the local people’s everyday life, culture etc. via film, voice and photo which are rarely documented so far. This African ground research experience was exceptionally determining in my way of thinking about Africa and reinforced my desire to make an impact and improvement there. ",
                "3": "Until Spring 2020 I have lived in Turkey, where I worked for a civil organization in improving the relations between Europe and the Mediterranean Region."
            }
        },
        "mpanna": {
            "shortBio": "Association member",
            "longBio": {
              "1": "I am Panna Makó, graphic designer, web developer, entrepreneur, and traveller.",
              "2": "I joined „Africa Born in my Heart” as a volunteer: it was love at first sight. I have drifted to many places, met with so many communities. In all my work, which I have been doing up to do now and still, I consider the community, who surrounds me during my work, to be of the highest priority; the value system with which they operate; as well as the goal they set for themselves.",
              "3": "Getting to know the culture and community of Africa has attracted me from the beginning, and I am also particularly interested in the role of women in different societies. I believe that people should connect with each other, cultures should meet each other, and I believe that sustainable development can only be achieved if we support each other in the transfer of different knowledge - this is the direction in which I feel I can join the organization's values and activities."            }
        },
        "njuli": {
            "shortBio": "Association member",
            "longBio": {
              "1": "My name is Júlia Németh, associate member and coordinator of the Association’s child support and Graduate a Girl programmes. I joined „Africa Born in my Heart” in early 2022, however, I have been following the Association’s work from the very beginning.",
              "2": "I hold a BA degree in International Studies and an MA degree in Political Science which I obtained at Corvinus University Budapest and the University of Vienna, respectively. At the moment, I am working in the field of education management.",
              "3": "I developed an interest in Africa during my university studies. After graduation, I had the opportunity to spend six months in Ghana interning for a German development agency. Even though my professional path took me in another direction – at least for the time being – I know that Africa will always play a part in my life one way or another."
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
              "6": "Gyerekként arról ábrándoztam, hogy egyszer Afrikában leszek önkéntes, az élet más irányba sodort, de úgy érzem sosem késő teljesíteni a vágyainkat.",
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
              "5": "Miért önkéntesség? Azért, mert “ Nagyobb boldogság adni, mint kapni”. ( Apostolok Cselekedetei 20:35)"
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
        }
    }
}
</i18n>