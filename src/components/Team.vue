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

  getLongBio(name: string): string[] {
    return Object.values(this.$i18n.t(`${name}.longBio`) as any)
  }

  get teamMembers(): Bio[] {
    return [
      {
        name: 'Könczöl Zsófi',
        image: 'team/Zsofi.jpg',
        shortBio: this.$i18n.t('kzsofi.shortBio') as string,
        longBio: this.getLongBio('kzsofi'),
        objectPosition: 'auto',
      },
      {
        name: 'Szilágyi Balázs',
        image: 'team/Balazs.jpg',
        shortBio: this.$i18n.t('szbalazs.shortBio') as string,
        longBio: this.getLongBio('szbalazs'),
        objectPosition: '50% 70%',
      },
      {
        name: 'Pocsai Erzsa',
        image: 'team/Erzsa.jpg',
        shortBio: this.$i18n.t('perzsa.shortBio') as string,
        longBio: this.getLongBio('perzsa'),
        objectPosition: '50% 20%',
      },
      {
        name: 'dr. Farkas Ferenc Balázs',
        image: 'team/FFBalazs.jpg',
        shortBio: this.$i18n.t('ffbalazs.shortBio') as string,
        longBio: this.getLongBio('ffbalazs'),
        objectPosition: 'auto',
      },
      {
        name: 'Király Péter',
        image: 'team/Peti.jpg',
        shortBio: this.$i18n.t('kpeter.shortBio') as string,
        longBio: this.getLongBio('kpeter'),
        objectPosition: '50% 25%',
      },
      {
        name: 'Kiss Anna',
        image: 'team/Anna.jpg',
        shortBio: this.$i18n.t('kanna.shortBio') as string,
        longBio: this.getLongBio('kanna'),
        objectPosition: '50% 40%',
      },
      {
        name: 'Tóth Klaudia',
        image: 'team/Klaudia.jpg',
        shortBio: this.$i18n.t('tklaudia.shortBio') as string,
        longBio: this.getLongBio('tklaudia'),
        objectPosition: '50% 30%',
      },
      {
        name: 'Tóth Liliána',
        image: 'team/Liliana.jpg',
        shortBio: this.$i18n.t('tliliana.shortBio') as string,
        longBio: this.getLongBio('tliliana'),
        objectPosition: 'auto',
      },
      {
        name: 'dr. Végh Marcell',
        image: 'team/Marci.jpg',
        shortBio: this.$i18n.t('vmarci.shortBio') as string,
        longBio: this.getLongBio('vmarci'),
        objectPosition: '50% 45%',
      }
    ]
  }
}
</script>

<i18n>
{
    "hu": {
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
        }
    },
    "en": {
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
        }
    }
}
</i18n>