<template>
  <div id="team">
    <swiper class="swiper" :options="swiperOptions" ref="swiperRef">
      <swiper-slide v-for="(member, index) in teamMembers" :key="index"
        ><card
          :imageName="member.image"
          :title="member.name"
          :objectPosition="member.objectPosition"
          v-on:show-modal="showModal(index)"
          ><div slot="short-bio">{{ member.shortBio }}</div></card
        ></swiper-slide
      >
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="modals"></div>
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

  showModal(index: number) {
    const swiperRef = (this.$refs.swiperRef as any).$swiper
    const isMobile = window.innerWidth < 768
    swiperRef.autoplay.stop()
    this.$modal.show(
      modal,
      { bio: this.teamMembers[index], index },
      {
        width: isMobile ? '90%' : '700px',
        height: 'auto',
      }
    )
  }

  teamMembers: Bio[] = [
    {
      name: 'Könczöl Zsófi',
      image: 'team/Zsofi.jpg',
      shortBio: 'Elnök',
      longBio: [
        'Könczöl Zsófi vagyok, a Szívemben Született Afrika megálmodója.',
        'Az ELTE-n végeztem politológia szakon – itt az afrikai gyermekkatonaság társadalmi és biztonságpolitikai aspektusaival foglalkoztam - majd a Corvinus nemzetközi tanulmányok szakán, diplomácia szakirányon folytattam tanulmányaimat, ahol pedig a „nők szerepe a segélyhatékonyságban” témában végeztem egy ugandai esettanulmánnyal kiegészült kutatást.',
        'Gyerekkorom óta fontos szerepet tölt be az életemben az adományozás és az önkénteskedés. Szakmai érdeklődésem fő fókusza a társadalmi felelősségvállalás, humanitárius segítségnyújtás, a fejlesztéspolitika, biztonságpolitika és a civil szféra, a civil felelősségvállalás. Kiemelten foglalkoztatnak továbbá az emberi jogok, a nők és gyermekek jogai, az ő helyzetüknek a javítási lehetőségei. Mély meggyőződésem, hogy a mai globalizált világban, amikor minden mindennel összefügg, az emberek nem hagyhatják figyelmen kívül azt sem, ami az országhatáron és a kontinensen túl történik.',
        'Most már lassan 15 éve történt, hogy az iskolában hallottam egy előadást, amely sorsdöntő volt számomra. Eldöntöttem, hogy ha törik, ha szakad, én Afrikával fogok foglalkozni. 4 évvel ezelőtt jártam először Afrikában, akkor egy hónapot töltöttem ott. Az az egy hónap után, a szívem egy része örökre ott maradt. Attól a perctől fogva, hogy kiléptem a repülőből elfogott egy végtelenül megnyugtató otthonosság érzés, beleszerettem az országba, a tájba, az emberekbe. Úgy éreztem, hogy Uganda egy gyönyörű hely, tele (átvitt értelemben is) gyönyörű emberekkel. Az első manafwai reggeleim egyikén arra ébredtem, hogy egy kecske lógatja be a fejét az ablakon és rágcsálja a függönyt, a szobát betöltötte a vakító napfény, kintről pedig a gyerekek játékos nevetése és – a számomra érthetetlen nyelven történő –beszélgetése szűrődött be. Ahogy kiléptem ott álltak körülöttem koszosan, a kis szakadt ruháikban és mégis a legszebbeknek láttam őket. Fiatal koruk ellenére a tekintetük tele volt mélységgel és valami olyan bölcsességgel, amit nem, vagy csak ritkán láttam azelőtt. Úgy éreztem, hogy ez a boldogság maga és tudtam, hogy megérkeztem, nekem itt feladatom és küldetésem van. Az ott lét alatt aztán megismertem a helyieket, meghívtak az otthonaikba, bepillantást nyerhettem a mindennapjaikba, megláttam, hogy milyen kihívásaik és lehetőségeik vannak. Eldöntöttem, hogy segíteni szeretnék, hogy vissza fogok menni. Így is lett, azóta már több alkalommal voltam ott és most már mikor megyek, úgy érzem, hogy „itthonról megyek haza”.',
        'Nagy örömömre szolgál, hogy egy ilyen fantasztikus csapat állt össze és ezekkel a nem mindennapi gondolkodású és tettre kész emberekkel megalapítottuk a Szívemben Született Afrika Egyesületet, bízva abban, hogy a helyiekkel együtt nagy változásokat hozhatunk az életükbe.',
      ],
      objectPosition: 'auto'
    },
    {
      name: 'Szilágyi Balázs',
      image: 'team/Balazs.jpg',
      shortBio: 'Gazdasági ügyekért felelős alelnök',
      longBio: [
        'Szilágyi Balázs vagyok, az Egyesület alelnöke.',
        'A Kodolányi János Főiskolán végeztem közgazdászként. Gyerekkoromban, 2001-ben jártam először az afrikai kontinensen, és már az első lélegzetvétel magával ragadott. Teltek-múltak az évek, és közgazdász diplomám megszerzése után nem sokkal, újra összekötött Afrikával az élet, de ekkor már szakmai alapokon. Ebben az évben kezdtem külkereskedőként dolgozni egy magyar informatikai vállalatnál. Számomra ezért 2014 jelentette az áttörést, amikor hivatásszerűen kezdtem foglalkozni az ottani kihívásokkal.',
        'Nem utolsó sorban, ennek a munkának kapcsán jutottam el életemben először a szub-szaharai térségbe, ahol megláttam Afrika "igazi" arcát. Érdeklődésem töretlen, az elmúlt 6 évben számos afrikai országban megfordultam, és elszántan foglalkozom a kontinensben rejlő lehetőségekkel. Az idei évben újabb mérföldkőhöz érkezett az életem; elhatároztam, hogy tapasztalataimat felhasználva, a Szívemben Született Afrika Egyesület égisze alatt, a szervezet céljaiért fogok dolgozni. Hiszem, hogy összefogással és új megközelítéssel, komoly segítséget, fenntartható fejlesztéseket tudunk nyújtani azokon a területeken, ahol jelen vagyunk.',
      ],
      objectPosition: '50% 70%'
    },
    {
      name: 'Pocsai Erzsa',
      image: 'team/Erzsa.jpg',
      shortBio: 'Adminisztrációért és kommunikációért felelős elnökségi tag',
      longBio: [
        'Pocsai Erzsa vagyok, az Egyesület elnökségi tagja.',
        'Debreceni Egyetemen és az ELTE Társadalomtudományi Karán folytattam az egyetemi tanulmányaimat, jelenleg közigazgatásban dolgozok.',
        'A Szívemben Született Afrika kezdeményezést volt szerencsém a kezdetektől megismerni, ezért különösen hálás vagyok, hogy tagja lehetek az Egyesületnek és aktívan is bekapcsolódhatok a munkába.',
        'Meggyőződésem, hogy az oktatás az, ami valódi hatalmat ad az emberek kezébe, ezért különösen közel érzem magamhoz a Szervezet valamennyi tudásátadást célzó kezdeményezését és tevékenységét.',
      ],
      objectPosition: '50% 20%'
    },
    {
      name: 'Farkas Ferenc Balázs',
      image: 'team/FFBalazs.jpg',
      shortBio: 'Egészségügyi projektekért felelős elnökségi tag',
      longBio: [
        'Farkas Ferenc Balázs vagyok, az Egyesület elnökségi tagja, az egyetem végéhez közelítő medikus. Gimnáziumi éveim alatt kezdtem önkénteskedni, majd 2016-ban elhatároztam, hogy ott szeretnék segíteni ahol a legnagyobb szükség van rá; Afrikában.',
        'A manafwai misszóban 2019 márciusában jártam először és azonnal magával ragadott a fekete kontinens varázsa. Választott hivatásomban fontosnak tartom az alázatot, valamint a helyzethez alkalmazkodó, innovatív, bizonyítékokon alapuló megközelítést. Különösen érdekel a fertőző betegségek gyógyítása valamint a népegészségügy afrikai problémái, kérdései.',
      ],
      objectPosition: 'auto'
    },
    {
      name: 'Király Péter',
      image: 'team/Peti.jpg',
      shortBio: 'Tudományos tevékenységért felelős elnökségi tag',
      longBio: [
        'Király Péter vagyok, az Egyesület elnökségi tagja, politológus, nemzetközi kapcsolatok és gazdaságdiplomáciai szakértő. Egyetemi éveim alatt, valamint párizsi és prágai szakmai gyakorlatom alatt foglalkoztam az afrikai térség biztonságpolitikai kérdéseivel, illetve az afrikai kontinens és Magyarország kapcsolataival. Jelenleg a magyar közigazgatásban dolgozom nemzetközi területen.',
        '2017/19-ben lehetőségem volt részt venni a Lakitelki Népfőiskola Afrika kollégiumán, az itt megismert emberek csak megerősítették bennem a szándékot, hogy komolyabban foglalkozzak a magyar-afrikai kapcsolatok kihívásaival és lehetőségeivel.',
      ],
      objectPosition: '50% 25%'
    },
    {
      name: 'Kiss Anna',
      image: 'team/Anna.jpg',
      shortBio: 'Egyesületi tag',
      longBio: [
        'Kiss Anna vagyok a Magyar Tudományos Akadémia, Könyvtár és Információs Központ Tudománypolitikai és Tudománymetriai Osztályának kutatójaként dolgozom. Végzettségem táplálkozástudományi szakember, a Szent István Egyetem Élelmiszertudományi Karán doktorjelölt, disszertációmnak témája az elhízás és az elhízás különböző formáiból származó társadalmi terhek meghatározása.',
        'Többször jártam Ugandában, a Kyambogo Egyetemen tanítottam táplálkozástudományt egy agrár szakképzés keretén belül. Afrikai munkámnak kiemelt fókusza a nők és gyermekek táplálkozásának optimalizációja, valamint a helyes perinatális táplálkozással kapcsolatos ismeretek növelése a nők körében.',
      ],
      objectPosition: '50% 40%'
    },
    {
      name: 'Tóth Klaudia',
      image: 'team/Klaudia.jpg',
      shortBio: 'Egyesületi tag',
      longBio: [
        'Tóth Klaudia vagyok, 26 éves és jelenleg a Nemzeti Közszolgálati Egyetemen folytatom tanulmányaimat.',
        'Az Afrika iránti érdeklődésem már kis koromban megmutatkozott, hiszen a balatonedericsi Afrika Múzeum szorgos látogatója voltam. Később, az alapszakos képzésem alatt több olyan kutatásban és publikációírásban is részt vettem, amelyek Afrika biztonságpolitikai helyzetével foglalkoztak. Kiemelt érdeklődéssel kísérem a Nagy Zöld Fal kezdeményezést, a Száhel-övezet kapcsán a klímaváltozás és a migrációs trendek kapcsolódási pontjait, valamint a régió dzsihadista szervezeteinek tevékenységét.',
      ],
      objectPosition: '50% 30%'
    },
    {
      name: 'Tóth Liliána',
      image: 'team/Liliana.jpg',
      shortBio: 'Egyesületi tag',
      longBio: [
        'Tóth Liliána vagyok, 26 éves. A Budapesti Corvinus Egyetemen, nemzetközi tanulmányok szakon végeztem. A fő kutatási területem a nem politikai tevékenységet folytató civil szervezetek működése, illetve lehetőségeik, mozgásterük és korlátjaik a programjaik, célkitűzéseik megvalósítását illetően a 21. században. Kiemelten fontos terület számomra a gyermekek, nők, sérülékeny társadalmi csoportok, kisebbségek védelme és helyzetük javítása a közéletben (pl. társadalmi párbeszéd, oktatás, ismeretterjesztés, érzékenyítő programok révén) és a mindennapokban.',
        'Az elmúlt években lehetőségem volt megismerkedni az európaitól sok tekintetben különböző kultúrákkal. Éltem 6 hónapot Vietnámban 2018-ban, illetve 2019 őszén részt vettem Zambiában egy jogi-antropológiai kutatásban is, amelyben a dél-afrikai ország társadalmi és politikai berendezkedését vizsgáltuk, illetve film-hang-és képanyagokban dokumentáltuk a törzsekben élő lakosság életének, kultúráinak egyéb forrásokban nehezen felkutatható, hiányosan rögzített mozzanatait. Ez az afrikai terepkutatási élmény rendkívül meghatározó volt az Afrikáról való gondolkodásomban, és megerősítette bennem a tenni akarás, jobbítás vágyát.',
        '2020 tavaszig Törörországban éltem, ahol egy, az Európa-Mediterrán Térség közötti kultúrális kapcsolatok fejlesztésével foglalkozó civil szervezetnél dolgoztam.',
      ],
      objectPosition: 'auto'
    },
    {
      name: 'dr. Végh Marcell',
      image: 'team/Marci.jpg',
      shortBio: 'Egyesületi tag',
      longBio: [
        'Végh Marcell vagyok, jogász. Jelenleg egy budapesti ügyvédi irodában dolgozom, mint ügyvédjelölt. Afrika gyerekkorom óta folyamatosan foglalkoztat. Jelenleg az egyesület jogi hátterét támogatom és bízom benne, hogy a közeljövőben az egyesület humanitárius tevékenységében is részt veszek majd Ugandában.'
      ],
      objectPosition: '50% 45%'
    },
    {
      name: 'Smiri Nagy Barbara',
      image: 'team/Darbi.jpg',
      shortBio: 'Egyesületi tag',
      longBio: [
        'Smiri Nagy Barbara vagyok, divat és stílustervezőként végeztem a Modell Divat Iskolában. Itt szereztem ruha és textilipari ismereteimet. Legfőbb szakterületem a szabás és a varrástechnológiák, a szervezetben a tanulmányaim tudását szeretném továbbadni és felhasználni, mert hiszek benne, hogy a tudás megosztása hasznos mankó az emberek megsegítésében.',
        'A kreatív látásmód fejleszthető, és bárhol szükségünk lehet rá az életünk folyamán, ezért ezt a szemléletet is szeretném továbbadni. Fontosnak tartom a nyitottságot, ami megannyi ablakot nyit az inspirációkra, amiből pedig alkotó ötletek százai születhetnek.'
      ],
      objectPosition: 'auto'
    },
  ]
}
</script>
