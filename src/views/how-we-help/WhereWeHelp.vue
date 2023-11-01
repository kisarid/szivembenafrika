<template>
  <div class="content">
    <heading>
      <div slot="main" v-if="!selectedCardId">{{ $t('main.title') }}</div>
      <div slot="main-small" v-if="selectedCard">{{ selectedCard.title }}</div>
      <div slot="description" v-if="selectedCardId" @click="selectedCardId = ''" class="link">← {{ $t('back') }}</div>
    </heading>
    <container>
      <div v-if="!selectedCardId" style="margin-bottom: 30px; font-style: italic;">{{ $t('main.desc')
      }}</div>
      <section class="topic-selector" v-if="!selectedCardId">
        <div class="topic-card" v-for="(card, index) in cards" :key="index" @click="selectedCardId = card.id">
          <div class="title sub-heading">{{ card.title }}</div>
          <div class="pic">
            <img :src="require(`@/assets/images/where-we-help/${card.cover}.jpg`)" alt="" />
          </div>
          <div class="text">{{ card.shortDesc }}</div>
          <div class="link" style="margin-top: auto; text-align: right;">{{ $t('read-more') }} →</div>
        </div>
      </section>
      <section v-if="selectedCardId === 'manafwa'">
        <div class="text-and-pic">
          <div class="text">
            <p>{{ $t('manafwa.p1') }}</p>
            <p>{{ $t('manafwa.p2') }}</p>
            <p>{{ $t('manafwa.p3') }}</p>
          </div>
          <div class="pic">
            <img src="@/assets/images/where-we-help/manafwa1.jpg" alt="" />
          </div>
        </div>
        <p>{{ $t('manafwa.p4') }}</p>
        <div class="text-and-pic">
          <div class="pic">
            <img src="@/assets/images/where-we-help/manafwa9.jpg" alt="" />
          </div>
          <div class="text">
            <p>{{ $t('manafwa.p5') }}</p>
            <p>{{ $t('manafwa.p6') }}</p>
            <p>{{ $t('manafwa.p7') }}</p>
            <p>{{ $t('manafwa.p8') }}</p>
          </div>
        </div>
      </section>
      <section v-if="selectedCardId === 'karamoja'">
        <div class="text-and-pic">
          <div class="text">
            <p>{{ $t('karamoja.p1') }}</p>
            <p>{{ $t('karamoja.p2') }}</p>
            <p>{{ $t('karamoja.p3') }}</p>
          </div>
          <div class="pic">
            <img src="@/assets/images/where-we-help/karamoja4.jpg" alt="" />
          </div>
        </div>
        <p>{{ $t('karamoja.p4') }}</p>
        <p>{{ $t('karamoja.p5') }}</p>
        <div class="pic-grid">
          <div class="pic">
            <img src="@/assets/images/where-we-help/karamoja2.jpg" alt="" />
          </div>
          <div class="pic" style="grid-row: span 2;">
            <img src="@/assets/images/where-we-help/karamoja1.jpg" alt="" />
          </div>
          <div class="pic" style="">
            <img src="@/assets/images/where-we-help/karamoja3.jpg" alt="" />
          </div>
        </div>
      </section>
      <section v-if="selectedCardId === 'nairobi'">
        <div class="pic" style="">
          <img src="@/assets/images/where-we-help/nairobi1.jpg" alt="" />
        </div>
        <p>{{ $t('nairobi.p1') }}</p>
        <p>{{ $t('nairobi.p2') }}</p>
        <p>{{ $t('nairobi.p3') }}</p>
        <p>{{ $t('nairobi.p4') }}</p>
        <p>{{ $t('nairobi.p5') }}</p>
        <div class="pic" style="">
          <img src="@/assets/images/where-we-help/nairobi3.jpg" alt="" />
        </div>
        <p>{{ $t('nairobi.p6') }}</p>
        <p>{{ $t('nairobi.p7') }}</p>
        <p>{{ $t('nairobi.p8') }}</p>
        <p>{{ $t('nairobi.p9') }}</p>
        <div class="pic" style="">
          <img src="@/assets/images/where-we-help/nairobi4.jpg" alt="" />
        </div>
        <p>{{ $t('nairobi.p10') }}</p>
        <div class="pic" style="">
          <img src="@/assets/images/where-we-help/nairobi2.jpg" alt="" />
        </div>
      </section>
      <section v-if="selectedCardId === 'mombasa'">
        <div class="pic" style="">
          <img src="@/assets/images/where-we-help/mombasa1.jpg" alt="" />
        </div>
        <p>{{ $t('mombasa.p1') }}</p>
        <p>{{ $t('mombasa.p2') }}</p>
        <p>{{ $t('mombasa.p3') }}</p>
        <div class="pic" style="">
          <img src="@/assets/images/where-we-help/mombasa2.jpg" alt="" />
        </div>
      </section>
    </container>
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .topic-selector {
    grid-template: auto auto / 1fr 1fr;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'
import { ThemeSelectorCard } from '@/interfaces/theme-selector'

@Component({
  name: 'WhereWeHelp',
  components: { container, heading },
})
export default class WhereWeHelp extends Vue {
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

  get cards(): ThemeSelectorCard[] {
    return [
      {
        id: 'manafwa',
        title: this.$i18n.t('manafwa.title') as string,
        shortDesc: this.$i18n.t('manafwa.shortDesc') as string,
        cover: 'manafwa1'
      },
      {
        id: 'karamoja',
        title: this.$i18n.t('karamoja.title') as string,
        shortDesc: this.$i18n.t('karamoja.shortDesc') as string,
        cover: 'karamoja2',
      },
      {
        id: 'nairobi',
        title: this.$i18n.t('nairobi.title') as string,
        shortDesc: this.$i18n.t('nairobi.shortDesc') as string,
        cover: 'nairobi1'
      },
      {
        id: 'mombasa',
        title: this.$i18n.t('mombasa.title') as string,
        shortDesc: this.$i18n.t('mombasa.shortDesc') as string,
        cover: 'mombasa1'
      },
    ]
  }
}
</script>

<i18n>
{
  "hu": {
    "read-more": "Tovább",
    "back": "Vissza",
    "main": {
      "title": "Hol segítünk?",
      "desc": "Bővebb információkért kattints a képekre!"
    },
    "manafwa": {
      "title": "Manafwa, Uganda",
      "shortDesc": "Manafwa körzet Uganda keleti régiójában található, központja Manafwa. Keleti és déli oldalon Kenyával határos, nyugati oldalon Mbalé körzet, az északi oldalon pedig Bududa körzet a szomszédja. Az itt élő emberek társadalmi helyzete Uganda egészét vizsgálva középosztálynak mondható ennek ellenére a többség itt is a szegénységi küszöb alatt él. Az emberek legfőbb bevételi forrása a mezőgazdaságból származik.",
      "p1": "Manafwa körzet Uganda keleti régiójában található, központja Manafwa. Keleti és déli oldalon Kenyával határos, nyugati oldalon Mbalé körzet, az északi oldalon pedig Bududa körzet a szomszédja. A keleti régió legnagyobb városa Mbalé nagyjából 30 kilométerre helyezkedik el a körzet központjától, Manafwától. A körzet 87%-a vidéki terület és csak a fennmaradó 13%-ot tartják városként számon.",
      "p2": "Manafwa körzet lakossága nagyjából 158 000 fő. Az itt élő emberek társadalmi helyzete Uganda egészét vizsgálva középosztálynak mondható. Az emberek itt is a szegénységi küszöb alatt élnek, de megvan a potenciál, hogy kis segítséggel, viszonylag könnyen fejlődjenek. ",
      "p3": "Még abban a házban, ahol élünk sincs vezetékes víz, a kannákban összegyűjtött esővízben fürdünk és áramunk is csak akkor van, amikor a napelemek feltöltődnek, ez esős időszakban csak napi néhány órát jelent. Az ételünket az udvaron, a földön, faszénen főzik és a kamránk például egyben tyúkólként is funkcionál. Mégis azzal, hogy van mit ennünk, van hol laknunk és tudunk venni tiszta vizet, amelyet biztonsággal fogyaszthattunk szerencsésebbek vagyunk, mint a falu lakói.",
      "p4": "Vidék lévén az emberek többségének nincs állandó munkája, gyakorlatilag egyfajta cserekereskedelmet folytatnak egymással. A falu lakói nagy részének a bevétele informális munkákból származik, mint például ásásból, chapati árulásból, ha van bármilyen olyan termésük a ház körül, ami értékesíthető, akkor annak az eladásából. A falu nagyon közel fekszik a kenyai határhoz és ennek az egyik velejárója, hogy nagyon sokan átmennek Kenyába egy jobb élet reményében. Vannak családok, ahol a szülők gyerekeiket hátrahagyva indulnak útnak, de olyan is van, ahol a gyereket adják el mosogatólánynak, vagy takarítónak a szomszédos országba. Amikor elkezdtük nőkkel foglalkozó programjaink, a többségük csak és kizárólak a házkörüli teendőkkel foglalkozott, egyáltalán nem volt saját bevételük. ",
      "p5": "A körülöttünk lévő sárból döngölt házakban semmilyen áram nincs, a berendezési tárgy nagyjából egy rozoga fekvő alkalmatosság a férfinak, és egy földre leterített rongy a nőknek és a gyermekeknek. A házak egy légterűek, egy kis szobányi hely van, ami egyszerre a hálószoba, gyerekszoba és nappali. A konyha és „mosdó” általában a házon kívül található. Higiéniai szempontból komoly problémát jelent, hogy a faluban nem állnak rendelkezésre mosdók. Toalettként szárított bab levelekkel elkerített területeket használnak, fürdeni pedig lavórban összegyűjtött esővízben fürdenek, de vannak családok ahol ez a heti rendszerességnél is ritkábban történik meg. Ezekben a házakban akár sokgyermekes családok, vagy több generáció is együtt él.",
      "p6": "Amikor megkezdtük itt a munkát, a falubeli emberek többsége nem jutott napi szinten élelmiszerhez, átlagosan heti két – három, a szerencsésebbek esetleg négy napon tudtak enni, akkor is csak napi egyszer.",
      "p7": "Nagyon sok a félárva és árva gyermek a faluban, róluk egyébként a közösség lakói együttesen gondoskodnak. Mindig másik háznál kapnak enni például.",
      "p8": "Az ezen a területen élők a bantu népcsoporton belül a bagisu törzshöz tartoznak, Manafwában pedig a törzsön belül három különböző klán él. A klán rendszernek fontos szerepe van számukra, mivel a törzsön belüli házasságot nagyon preferálják és szorgalmazzák, de klánon belül nem házasodnak, még akkor sem, ha tényleges vérrokonság nem áll fenn."
    },
    "karamoja": {
      "title": "Karamoja, Uganda",
      "shortDesc": "Az észak-nyugat Ugandában található Karamoja régió hét nagyobb területi egységre bontható fel és hozzávetőleg 1,3 milli ember lakja. Uganda legszegényebb régiója, melynek látogatása néhány évvel ezelőttig komoly veszélyt jelentett. Emellett azonban Uganda rejtett gyöngyszeme is, ahol még megtalálható a valódi érintetlen afrikai táj és a hagyományaikat még őrző és aktívan gyakorló törzsek.",
      "p1": "Az észak-nyugat Ugandában található Karamoja régió hét nagyobb területi egységre bontható fel Kaabong, Kotido, Abim, Moroto, Napak, Amudat és Nakapiripirit. A régiót hozzávetőleg 1,3 millió ember lakja, melynek nagy százaléka mélyszegénységben él. Alapvető problémát jelent a régióban az élelmezés bizonytalansága, illetve a természeti erőforrásokra való nagymértékű támaszkodás. A természeti hatásoknak való túlzott kitettség egyértelműen bemutatja a klímaváltozás hatásait, valamint e változások azonnali mindennapi életet befolyásoló negatív következményeit. Példaként említhetők a rendszeresen előforduló hosszabb szárazságok, majd gyors áradások, melyek negatív hatással vannak a talaj termékenységére. Azonban nem csak külső tényezők nehezítik az itt élők megélhetését, jelen vannak társadalmi és politikai problémák is. ",
      "p2": "A Karamojában élő emberek számára az állattenyésztés és a földművelés biztosítja a fő megélhetési formát. A régión belül egymástól elkülöníthető zónák határozhatók meg az éves csapadék mennyiség függvényében, mely nagymértékben meghatározza az adott területen előállítható javakat. A termesztett növények vízellátását csak az esőzések biztosítják, így azokon a területeket, ahol az esőzés éves mértéke alacsonyabb a hangsúly a nomád állattenyésztés felé tolódik.",
      "p3": "Az állatok birtoklása a társadalmon belül státuszt biztosít, mivel birtoklásuk önmagában jelentheti a gazdagságot, ebből adódóan az állattartáshoz köthető az egyik kiemelt konfliktus, az ún. cattle raids vagy livestock raids, vagyis állatok fegyveres kényszerrel történő eltulajdonítása. A probléma méretét mutatja, hogy az állami erőszakszervezet rendszeres beavatkozásra kényszerül a területen a béke biztosítása érdekében. ",
      "p4": "Az biztonsági szempontokból instabil környezet tovább nehezíti a megélhetést, így bizonyos problémák orvoslása közben új problémák keletkeznek, melyek nem szűnnek meg az eredeti probléma elhárulásával. Ezen problémák összessége vezet az általános szegénységhez, melyek fő kiváltó okai az éveken átívelő gyenge termés, a vízhiány, az elmaradott földművelési technikák, valamint a konfliktusokból adódó létbizonytalanság.",
      "p5": "Az elmúlt években a térségben kialakult helyzet nagyon sokat javult, azonban az itt élő embereket sok hátrány éri a régióról alkotott negatív előítéletek és korábbi tapasztalatok miatt. Fontos kihangsúlyozni, hogy Karamoja sokkal több, mint a fentiekben leírt nehézségek és kihívások. Karamoja ugyanis Uganda rejtett gyöngyszeme is, ahol még megtalálható a valódi érintetlen afrikai táj és a hagyományaikat még őrző és aktívan gyakorló törzsek, valamint az ország egyik legnagyobb nemzeti parkja is itt található."
    },
    "nairobi": {
      "title": "Nairobi nyomornegyedei",
      "shortDesc": "Ezek a területek nem rendelkeznek kiépített infrastruktúrával, vezetékes vízzel vagy szennyvízhálózattal. A lakosok saját maguk építette házakban laknak melyet, a szeméttelepen talált vagy újrahasznosított anyagokból építettek. A nyomornegyed lakói nehezen tudnak belépni a munkaerőpiacra, aminek a fő okai között említhető az iskolázottságbeli hiányosságok, munkaerőpiaci készségek hiánya, vagy akár a munkahelyektől való távolság. A bűnözés mértéke magas, még a nappali órák során is. A nyomornegyedekben élő fiatalok kitörési lehetősége az oktatásban való részvétel, azonban ez sok család számára okoz anyagi nehézséget az egyéb szükségszerű kiadások mellett. Sok család az oktatás helyett a bevételek növelése céljából az iskola helyett munkára fogja a gyerekeket.",
      "p1": "Nairobi központjától észak-keletre található Korogocho, egy 1,5 négyzetkilométer kiterjedésú terület, melyen 150.000-200.000 ember él közvetlenül Nairobi legnagyobb szeméttelepének szomszédságában. Korogocho benépesedése az 1960-as évek során kezdődött meg a vidékről a városba betelepülő emberek által, jelenleg pedig Nairobi negyedik legnagyobb nyomornegyedének számít. ",
      "p2": "A terület nem rendelkezik kiépített infrastruktúrával, vezetékes vízzel vagy szennyvízhálózattal. A lakosok saját maguk építette házakban laknak melyet, a szeméttelepen talált vagy újrahasznosított anyagokból építettek, de az sem meglepő hogy nejlon szatyrokból van megépítve a lakhelyük fala. Ilyen anyagok közé tartoznak az olajos hordók vagy akár a sár, világításhoz pedig többnyire parafin lámpákat használnak. A vízszükségletüket vizet áruló standokról fedezik, melyeknél az árak a kínálat szűkössége esetén akár több mint a 200%-ot is emelkedhetnek, valamint a legtöbb akár adományként épített kút is a vízmaffia kezében van. Az infrastruktúrális hiányosságok és a nagy népsűrűség higiéniai és egészségügyi problémákat is okoznak, melyek kezelésének lehetősége sem kielégítő. Tavaly például kitört az elmúlt évtizedek egyik legnagyobb kolera járványa.",
      "p3": "A nyomornegyed lakói nehezen tudnak belépni a munkaerőpiacra, aminek a fő okai között említhető az iskolázottságbeli hiányosságok, munkaerőpiaci készségek hiánya, vagy akár a munkahelyektől való távolság, ebből kifolyólag a lakosok nagyrésze él a szeméttelepen talált dolgokkal való kereskedésből, vagy fordul a bűnözés felé.",
      "p4": "A bűnözés mértéke magas, még a nappali órák során is, a biztonságérzetet pedig tovább csökkenti az illegális tevékenységek jelenléte, mint az illegális tudatmódosító szerek készítése terjesztése, lopott értéktárgyakkal való üzletelés vagy a prostitúció. Jelentősek továbbá a felsorolt tevékenységek folytató bűnözői csoportok összetűzései.",
      "p5": "A nyomornegyedekben élő fiatalok kitörési lehetősége az oktatásban való részvétel, azonban ez sok család számára okoz anyagi nehézséget az egyéb szükségszerű kiadások mellett. Sok család az oktatás helyett a bevételek növelése céljából az iskola helyett munkára fogja a gyerekeket. Kenyában az általános iskolai oktazás ingyenes azonban Korogocho csak két közösségi iskolával rendelkezik, ahova nagyjából 4000 gyerek jár.",
      "p6": "Nairobi központjától nagyjából 6 kilométerre található a város és egyben Afrika legnagyobb nyomornegyede Kibera. A 2009-ben végzett hivatalos kenyai népszámlálás alapján lakosainak száma 170.000 főre tehető, azonban egyes értesülések ezt a számot 500.000 vagy akár 1 millió fő környékére teszik. Az eltérés attól függő, hogy hogyan határozzák meg a nyomornegyed határait.",
      "p7": "Nairobit az Ugandai Vasútvonal építésekor alapították 1899-ben, azzal a céllal, hogy lakóhelyet biztosítsanak a Brit Birodalmi tisztviselőknek, illetve az olcsó munkaerőt biztosító afrikai és ázsiai munkásoknak, akiket jellemzően alacsonyabb rendű vagy fizikai munkákra alkalmaztak. Az 1900-tól 1940-ig terjedő időszakban több a szegregációt elősegítő és fenntartó törvénykezés lépett hatályba, mely többek között meggátolta az afrikaiak szabad költözését a városban. Nairobit az ehhez hasonló intézkedések etnikai csoportok mentén szegregálták. Egy ilyen szegregátumként alakult ki Kibera is, mely kezdetben a britek szolgálatában álló afrikai katonák lakhelye volt. Az évek során a kormányzó szerv informálisan engedélyezte a település növekedését, mivel a gazdasági fejlődés fenntartásához szüksége volt az olcsó munkaerőre. Ezen felfogás mentén több nyomornegyed keletkezett.",
      "p8": "Kenya 1963-as függetlenedésével törvényi úton próbálták szabályozni a nyomornegyedek terjedését, bizonyos lakhatási formák betiltásával, mely azonban nem vezetett célra. A lakhatás drágulásával a nyomornegyedek továbbra is fennmaradtak, azon egyszerű okból kifolyólag, hogy az itt kiadásra kínált „lakások” relatív elérhető áron biztosítottak lakhatást.",
      "p9": "A kiberai lakosok nagyrésze nagyfokú szegénységben él, a lakosság nagyrésze munkanélküli, nehezen jut alapvető szükségletihez, élelemhez vagy akár vízhez. Magas a különböző betegségek fertőzések aránya a lakosság körében, amelyek kezelésére szolgáló orvosi ellátás is nehezen hozzáférhető. A nyomornegyed területe jelentősen szennyezett, az utcákat szemét, valamint a nyílt csatornarendszer miatt emberi ürülék borítja. ",
      "p10": "Mombasa a Kenya dél-keleti részén fekvő partmenti város, Kr.u. 900 körüli alapításával Kenya legrégebben alapított, jelenleg második legnagyobb városa. A város elhelyezkedése történelmileg fontos kereskedelmi csomóponttá, valamint jelentős turisztikai célponttá tette, és jelenleg is kiemelt gazdasági központja Kenyának. Jelentős a kávé, élelmiszer, kereskedelme és vegyipara, továbbá Kenya kiszolgálja a szomszédos országok Tanzánia és Uganda kereskedelmi igényeit is a városon keresztül."
    },
    "mombasa": {
      "title": "Mombasa és környéke",
      "shortDesc": "Mombasa és környéke világszerte ismert és kedvelt turista desztináció. Nagyjából az év egészében kellemes az idő, a szuahéli emberek kedvessége, a konyhájukra jellemző finom ízek és a csodás tengerpart sokakat hívogat. A napfény és kéklő víz azonban gyakran sötét dolgokat rejt. A helyiek többsége a turizmusból él és luxus szállodák ide vagy oda, mégis nagyon szegények. Valamint pont a turizmussal összefüggésben nagyon magas a térségben az emberkereskedelemmel és szexturizmussal kapcsolatos bűncselekmények és problémák előfordulás.",
      "p1": "Mombasa a történelem során, kiemelt elhelyezkedése miatt sok birodalom érdekszférájába tartozott, és még szélesebb körben folytatott kereskedelmet. A város birtoklásáért sok hadjárat folyt egészen az 1840-es évekig, amikor a Zanzibári szultán uralma alá került majd a Brit Birodalom része lett 1895-ben. A város építészete és etnikai összetétele is tükrözi a sokféle kulturális behatást. A Brit Birodalom részeként pedig az olcsó munkaerő felhasználása érdekében, az Ugandai Vasútvonal építése során különböző etnikumú csoportokat telepítettek a városba.",
      "p2": "A város északi partszakaszán az város egy gazdagabb negyedének a szomszédságában található Mombasa egyik legsűrűbben lakott területe Kongowea. Itt jellemzően a városba munkalehetőség reményében beköltöző lakosok élnek, akik a környező gazdagabb negyedekben vállalnak alkalmi munkákat. Ebben a negyedben is – az elhelyezkedésétől függetlenül - jelen vannak a nyomornegyedekből ismert problémák a bűnözés magas aránya, a köztisztaság alacsony mértéke, és az alapszükségletek kielégítésének nehézsége.",
      "p3": "A térségben kiemelten fontos számunkra Mtwapa, amit sajnálatos módon emberkereskedelmi és szexturisztikai központként is lehetne hívni, a város teljes gazdasága és infrastruktúrája erre épült rá és itt található a székhelye a partnerszervezetünknek, akikkel közösen a fent említett témák visszaszorításán, az áldozattá válás megelőzésén valamint az áldozatok rehabilitációján és reintegrációján dolgozunk."
    }
  },
  "en": {
    "read-more": "Read more",
    "back": "Back",
    "main": {
      "title": "Where Do We Help?",
      "desc": "Click on the photos for more information!"
    },
    "manafwa": {
      "title": "Manafwa, Uganda",
      "shortDesc": "Manafwa District is located in the Eastern Region of Uganda, with Manafwa as its centre. It borders Kenya to the East and South, Mbalé district to the West, and Bududa district to the North. Based on their social situation, the people living here can be considered as middle class when looking at Uganda as a whole. Despite this, the majority here live below the poverty line. The main source of income for the people comes from agriculture.",
      "p1": "Manafwa District is located in the Eastern Region of Uganda, with Manafwa as its centre. It borders Kenya to the East and South, Mbalé district to the West, and Bududa district to the North. Mbalé, the largest city in the eastern region, is approximately 30 kilometres from the centre of the district, Manafwa. 87% of the district is rural and only the remaining 13% is considered a city.",
      "p2": "The population of Manafwa district is roughly 158,000. Based on their social situation, the people living here can be considered as middle class when looking at Uganda as a whole. Here, too, people live below the poverty line, but they have the potential to develop relatively easily with a little support.",
      "p3": "Even in the house where we stay, we don't have running water, we bathe in the rainwater collected in cans and we only have electricity when the solar panels are charged, which is only a few hours a day during the rainy season. Our food is cooked in the yard on the ground, on charcoal, and our pantry, for example, also functions as a chicken coop. Still, by having something to eat, a place to live and being able to buy clean water that we can safely drink, we are luckier than the villagers.",
      "p4": "Being a rural area, most of the people do not have a permanent job. They practically engage in a kind of bartering with each other. Most of the villagers earn their income from informal jobs such as digging, selling chapati, if they have any produce around the house that can be sold, then from selling that. The village is very close to the Kenyan border, and one of the consequences of this is that many people cross over to Kenya in the hope of a better life. There are families where the parents leave their children behind and go on a journey, but there are also families where the child is sold as a dishwasher or cleaner to the neighbouring country. When we started our programs for women, most of them only and exclusively dealt with chores around the house, they had no income of their own at all.",
      "p5": "There is no electricity in the mud rammed houses around us, the furnishing is roughly a dilapidated reclining device for the man, and a rag spread on the ground for the women and children. The houses have one open space, there is one small room, which is the bedroom, children's room and living room at the same time. The kitchen and \"bathroom\" are usually located outside the house. From a hygienic point of view, the lack of toilets in the village is a serious problem. Areas fenced with dried bean leaves are used as toilets, and they bathe in rainwater collected in a basin, but there are families where this happens less than weekly. Families with many children or even several generations live together in these houses.",
      "p6": "When we started working here, most of the people in the village did not have access to food on a daily basis. On average, they could eat two or three times a week, the luckier ones maybe four times, but even then, only once during the day.",
      "p7": "There are many half-orphaned and orphaned children in the village, and the residents of the community take care of them together. They always get food at another house, for example.",
      "p8": "The people living in this area belong to the Bagisu tribe within the Bantu ethnic group, and in Manafwa there are three different clans within the tribe. The clan system plays an important role for them, as marriage within the tribe is highly preferred and encouraged, but they do not marry within the clan, even if there is no actual blood relation."
    },
    "karamoja": {
      "title": "Karamoja, Uganda",
      "shortDesc": "The Karamoja region in north-western Uganda can be divided into seven larger territorial units and is home to approximately 1.3 million people. It is the poorest region of Uganda, which, until a few years ago, was seriously dangerous to visit. However, it is also a hidden gem of Uganda, where you can still find the real untouched African landscape and the tribes that still preserve and actively practice their traditions.",
      "p1": "The Karamoja region in north-western Uganda can be divided into seven major territorial units: Kaabong, Kotido, Abim, Moroto, Napak, Amudat and Nakapiripirit. The region is inhabited by approximately 1.3 million people, a large percentage of whom live in extreme poverty. A fundamental problem in the region is food insecurity and high reliance on natural resources. The excessive exposure to natural influences clearly shows the effects of climate change, as well as the negative consequences of these changes affecting immediate everyday life. Examples include the regularly occurring longer droughts followed by rapid floods, which have a negative effect on soil fertility. However, it is not only external factors that make it difficult for the people living here, there are also social and political problems.",
      "p2": "For the people living in Karamoja, raising livestock and farming provide the main form of livelihood. Zones that can be separated from each other within the region can be defined depending on the amount of annual precipitation, which largely determines the goods that can be produced in the given area. The water supply for cultivated plants is provided only by rains, so in those areas where the annual amount of rain is lower, the emphasis is shifted towards nomadic livestock breeding.",
      "p3": "Owning animals provides status within society, since owning them can mean wealth in itself, and as a result, one of the prominent conflicts, the so-called cattle raids or livestock raids, i.e., the taking of animals by armed force. The size of the problem is shown by the fact that the state violence organization is forced to regularly intervene in the area to ensure peace.",
      "p4": "This environment of unstable security makes it harder to earn a living, so while certain problems are being remedied, new problems arise, which do not disappear when the original problem is eliminated. All these problems together lead to general poverty, mainly caused by poor harvests over the years, lack of water, outdated farming techniques, and insecurity resulting from conflicts.",
      "p5": "In recent years, the situation in the region has improved a lot, but the people living here suffer many disadvantages due to negative prejudices about the region and previous experiences. It is important to emphasize that Karamoja is much more than the difficulties and challenges described above. Karamoja is also Uganda's hidden gem, where you can still find the real untouched African landscape and the tribes that still preserve and actively practice their traditions, and one of the country's largest national parks is also located here."
    },
    "nairobi": {
      "title": "Slums of Nairobi",
      "shortDesc": "These areas have a lack of infrastructure, tap water and sewage networks. The residents live in self-built houses built from recycled materials or things found in the landfill. It is difficult for slum dwellers to enter the labour market, the main reasons of which are educational deficiencies, lack of labour market skills, or even distance from workplaces. Crime rates are high, even during daylight hours. Participating in education is one of the only breakthrough opportunities for young people living in slums, but this represents a great financial burden for many families in addition to other necessary expenses. Many families send their children to work instead of school to increase income.",
      "p1": "Korogocho, an area of 1.5 km2 to the north-east of the centre of Nairobi, is home to 150,000-200,000 people, and it is located right next to Nairobi's largest landfill site. Korogocho began to be populated during the 1960s by people moving from the countryside to the city and is currently the fourth largest slum in Nairobi.",
      "p2": "The area has no developed infrastructure, tap water or sewage network. The residents live in self-built houses built from recycled materials or things found in the landfill, but it is not unusual either when the walls of their homes are made of nylon bags. Such materials also include oil barrels or even mud, and paraffin lamps are mostly used for lighting. Their water needs are covered by stands selling water, where the prices can rise by more than 200% in case of scarcity of supply, and most of the wells, even those built as donations, are in the hands of the water mafia. Infrastructural deficiencies and high population density also cause hygiene and health problems, the possibility of their treatment is also unsatisfactory. Last year, for example, one of the largest cholera epidemics of recent decades broke out in the area.",
      "p3": "The residents of the slum find it difficult to enter the labour market, the main reasons of which include educational deficiencies, lack of labour market skills, or even distance from workplaces, so most of the residents make a living by trading things found in the landfill or turning to crime.",
      "p4": "The crime level is high, even during daylight hours, and the sense of security is further reduced by the presence of illegal activities such as the manufacture and distribution of illegal mind-altering drugs, dealing in stolen valuables or prostitution. Clashes between criminal groups engaged in the listed activities are also significant.",
      "p5": "Participating in education is one of the only breakthrough opportunities for young people living in slums, but this represents a great financial burden for many families in addition to other necessary expenses. Many families send their children to work instead of school in order to increase income. In Kenya, primary school education is free, but Korogocho has only two community schools attended by roughly 4,000 children.",
      "p6": "About 6 kilometres from the centre of Nairobi is the city’s and Africa's largest slum, Kibera. Based on the official Kenyan census conducted in 2009, the number of its inhabitants is around 170,000 people, however, some reports place this figure at around 500,000 or even 1 million people. The difference depends on how the boundaries of the slum are defined.",
      "p7": "Nairobi was founded during the construction of the Uganda Railway in 1899, with the aim of housing British Imperial officials and providing cheap labour for African and Asian labourers, who were typically employed in low-skilled or manual labour. In the period from 1900 to 1940, several laws promoting and maintaining segregation entered into force, which, among other things, prevented the free movement of Africans in the city. Nairobi was segregated along ethnic lines by measures like these. Kibera was also formed as such a segregate, which was initially the residence of African soldiers in the service of the British. Over the years, the governing body informally allowed the settlement to grow, as it needed cheap labour to sustain economic development. Following this, several slums began to form.",
      "p8": "With the independence of Kenya in 1963, attempts were made to regulate the spread of slums by law, by banning certain forms of housing, but this was not successful. As housing became more expensive, the slums continued to exist, for the simple reason that the \"apartments\" offered for rent here provided housing at a relatively affordable price.",
      "p9": "The majority of Kibera residents live in extreme poverty, most of the population is unemployed, and it is difficult to access basic needs, food or even water. The rate of infection of various diseases among the population is high, and medical care for treatment is also difficult to access. The area of the slum is significantly polluted, the streets are covered with rubbish and human excrement due to the open sewer system.",
      "p10": "Mombasa is a coastal city in the south-eastern part of Kenya, founded around 900 AD. It is the oldest and currently the second largest city in Kenya. The city's location has historically made it an important commercial hub as well as a major tourist destination, and it is still a key economic centre for Kenya. Coffee, food, trade, and the chemical industry are significant, and Kenya also serves the commercial needs of neighbouring countries Tanzania and Uganda through the city."
    },
    "mombasa": {
      "title": "Mombasa and its surroundings",
      "shortDesc": "Mombasa and its surroundings are a well-known and popular tourist destination worldwide. The weather is pleasant almost throughout the year, the kindness of the Swahili people, the delicious flavours characteristic of their cuisine and the wonderful beach invite many. However, sunlight and blue water often hide darker things. Most of the locals make their living from tourism, but despite the luxury hotels, they are very poor. Also, precisely in connection with tourism, the incidence of crimes and problems related to human trafficking and sex tourism in the region is very high.",
      "p1": "Throughout history, Mombasa has been in the sphere of interest of many empires due to its privileged location and has traded even more widely. There were many campaigns for the possession of the city until the 1840s, when it came under the rule of the Sultan of Zanzibar and became part of the British Empire in 1895. The city's architecture and ethnic composition also reflect the many cultural influences. As part of the British Empire, in order to use cheap labour, during the construction of the Uganda Railway, different ethnic groups were settled in the city.",
      "p2": "Kongowea is one of the most densely populated areas of Mombasa, located on the northern coast of the city, adjacent to a wealthier part of the city. This is typically home to residents who moved to the city in the hope of job opportunities, and who take on occasional jobs in the surrounding wealthier neighbourhoods. Regardless of its location, the problems known from slums are also present in this quarter, such as the high crime rate, the low level of public hygiene, and the difficulty of meeting basic needs.",
      "p3": "In this region, a particularly important city for us is Mtwapa, which unfortunately could also be called a centre for human trafficking and sex tourism. The entire economy and infrastructure of the city is based on these, and this is where our partner organization is headquartered, with whom we work together to suppress the above-mentioned issues, prevent victimization and help the rehabilitation and reintegration of victims."    }
  }
}
</i18n>




