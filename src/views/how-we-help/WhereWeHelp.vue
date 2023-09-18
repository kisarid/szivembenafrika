<template>
  <div class="content">
    <heading>
      <div slot="main" v-if="!selectedCardId">{{ $t('main.title') }}</div>
      <div slot="main-small" v-if="selectedCard">{{ selectedCard.title }}</div>
      <div slot="description" v-if="selectedCardId" @click="selectedCardId = ''" class="link">← Vissza</div>
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
          <div class="link" style="margin-top: auto; text-align: right;">Tovább →</div>
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

  cards: ThemeSelectorCard[] = [
    {
      id: 'manafwa',
      title: 'Manafwa, Uganda',
      shortDesc: this.$i18n.t('manafwa.shortDesc') as string,
      cover: 'manafwa1'
    },
    {
      id: 'karamoja',
      title: 'Karamoja, Uganda',
      shortDesc: this.$i18n.t('karamoja.shortDesc') as string,
      cover: 'karamoja2',
    },
    {
      id: 'nairobi',
      title: 'Nairobi nyomornegyedei',
      shortDesc: this.$i18n.t('nairobi.shortDesc') as string,
      cover: 'nairobi1'
    },
    {
      id: 'mombasa',
      title: 'Mombasa és környéke',
      shortDesc: this.$i18n.t('mombasa.shortDesc') as string,
      cover: 'mombasa1'
    },
  ]
}
</script>

<i18n>
{
    "hu": {
        "main": {
          "title": "Hol segítünk?",
          "desc": "Bővebb információkért kattints a képekre!"
        },
        "manafwa": {
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
          "shortDesc": "Az észak-nyugat Ugandában található Karamoja régió hét nagyobb területi egységre bontható fel és hozzávetőleg 1,3 milli ember lakja. Uganda legszegényebb régiója, melynek látogatása néhány évvel ezelőttig komoly veszélyt jelentett. Emellett azonban Uganda rejtett gyöngyszeme is, ahol még megtalálható a valódi érintetlen afrikai táj és a hagyományaikat még őrző és aktívan gyakorló törzsek.",
          "p1": "Az észak-nyugat Ugandában található Karamoja régió hét nagyobb területi egységre bontható fel Kaabong, Kotido, Abim, Moroto, Napak, Amudat és Nakapiripirit. A régiót hozzávetőleg 1,3 millió ember lakja, melynek nagy százaléka mélyszegénységben él. Alapvető problémát jelent a régióban az élelmezés bizonytalansága, illetve a természeti erőforrásokra való nagymértékű támaszkodás. A természeti hatásoknak való túlzott kitettség egyértelműen bemutatja a klímaváltozás hatásait, valamint e változások azonnali mindennapi életet befolyásoló negatív következményeit. Példaként említhetők a rendszeresen előforduló hosszabb szárazságok, majd gyors áradások, melyek negatív hatással vannak a talaj termékenységére. Azonban nem csak külső tényezők nehezítik az itt élők megélhetését, jelen vannak társadalmi és politikai problémák is. ",
          "p2": "A Karamojában élő emberek számára az állattenyésztés és a földművelés biztosítja a fő megélhetési formát. A régión belül egymástól elkülöníthető zónák határozhatók meg az éves csapadék mennyiség függvényében, mely nagymértékben meghatározza az adott területen előállítható javakat. A termesztett növények vízellátását csak az esőzések biztosítják, így azokon a területeket, ahol az esőzés éves mértéke alacsonyabb a hangsúly a nomád állattenyésztés felé tolódik.",
          "p3": "Az állatok birtoklása a társadalmon belül státuszt biztosít, mivel birtoklásuk önmagában jelentheti a gazdagságot, ebből adódóan az állattartáshoz köthető az egyik kiemelt konfliktus, az ún. cattle raids vagy livestock raids, vagyis állatok fegyveres kényszerrel történő eltulajdonítása. A probléma méretét mutatja, hogy az állami erőszakszervezet rendszeres beavatkozásra kényszerül a területen a béke biztosítása érdekében. ",
          "p4": "Az biztonsági szempontokból instabil környezet tovább nehezíti a megélhetést, így bizonyos problémák orvoslása közben új problémák keletkeznek, melyek nem szűnnek meg az eredeti probléma elhárulásával. Ezen problémák összessége vezet az általános szegénységhez, melyek fő kiváltó okai az éveken átívelő gyenge termés, a vízhiány, az elmaradott földművelési technikák, valamint a konfliktusokból adódó létbizonytalanság.",
          "p5": "Az elmúlt években a térségben kialakult helyzet nagyon sokat javult, azonban az itt élő embereket sok hátrány éri a régióról alkotott negatív előítéletek és korábbi tapasztalatok miatt. Fontos kihangsúlyozni, hogy Karamoja sokkal több, mint a fentiekben leírt nehézségek és kihívások. Karamoja ugyanis Uganda rejtett gyöngyszeme is, ahol még megtalálható a valódi érintetlen afrikai táj és a hagyományaikat még őrző és aktívan gyakorló törzsek, valamint az ország egyik legnagyobb nemzeti parkja is itt található."
        },
        "nairobi": {
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
          "shortDesc": "Mombasa és környéke világszerte ismert és kedvelt turista desztináció. Nagyjából az év egészében kellemes az idő, a szuahéli emberek kedvessége, a konyhájukra jellemző finom ízek és a csodás tengerpart sokakat hívogat. A napfény és kéklő víz azonban gyakran sötét dolgokat rejt. A helyiek többsége a turizmusból él és luxus szállodák ide vagy oda, mégis nagyon szegények. Valamint pont a turizmussal összefüggésben nagyon magas a térségben az emberkereskedelemmel és szexturizmussal kapcsolatos bűncselekmények és problémák előfordulás.",
          "p1": "Mombasa a történelem során, kiemelt elhelyezkedése miatt sok birodalom érdekszférájába tartozott, és még szélesebb körben folytatott kereskedelmet. A város birtoklásáért sok hadjárat folyt egészen az 1840-es évekig, amikor a Zanzibári szultán uralma alá került majd a Brit Birodalom része lett 1895-ben. A város építészete és etnikai összetétele is tükrözi a sokféle kulturális behatást. A Brit Birodalom részeként pedig az olcsó munkaerő felhasználása érdekében, az Ugandai Vasútvonal építése során különböző etnikumú csoportokat telepítettek a városba.",
          "p2": "A város északi partszakaszán az város egy gazdagabb negyedének a szomszédságában található Mombasa egyik legsűrűbben lakott területe Kongowea. Itt jellemzően a városba munkalehetőség reményében beköltöző lakosok élnek, akik a környező gazdagabb negyedekben vállalnak alkalmi munkákat. Ebben a negyedben is – az elhelyezkedésétől függetlenül - jelen vannak a nyomornegyedekből ismert problémák a bűnözés magas aránya, a köztisztaság alacsony mértéke, és az alapszükségletek kielégítésének nehézsége.",
          "p3": "A térségben kiemelten fontos számunkra Mtwapa, amit sajnálatos módon emberkereskedelmi és szexturisztikai központként is lehetne hívni, a város teljes gazdasága és infrastruktúrája erre épült rá és itt található a székhelye a partnerszervezetünknek, akikkel közösen a fent említett témák visszaszorításán, az áldozattá válás megelőzésén valamint az áldozatok rehabilitációján és reintegrációján dolgozunk."
        }
    },
    "en": {
      "main": {
          "title": "Hol segítünk?",
          "desc": "Bővebb információkért kattints a képekre!"
        },
        "manafwa": {
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
          "shortDesc": "Az észak-nyugat Ugandában található Karamoja régió hét nagyobb területi egységre bontható fel és hozzávetőleg 1,3 milli ember lakja. Uganda legszegényebb régiója, melynek látogatása néhány évvel ezelőttig komoly veszélyt jelentett. Emellett azonban Uganda rejtett gyöngyszeme is, ahol még megtalálható a valódi érintetlen afrikai táj és a hagyományaikat még őrző és aktívan gyakorló törzsek.",
          "p1": "Az észak-nyugat Ugandában található Karamoja régió hét nagyobb területi egységre bontható fel Kaabong, Kotido, Abim, Moroto, Napak, Amudat és Nakapiripirit. A régiót hozzávetőleg 1,3 millió ember lakja, melynek nagy százaléka mélyszegénységben él. Alapvető problémát jelent a régióban az élelmezés bizonytalansága, illetve a természeti erőforrásokra való nagymértékű támaszkodás. A természeti hatásoknak való túlzott kitettség egyértelműen bemutatja a klímaváltozás hatásait, valamint e változások azonnali mindennapi életet befolyásoló negatív következményeit. Példaként említhetők a rendszeresen előforduló hosszabb szárazságok, majd gyors áradások, melyek negatív hatással vannak a talaj termékenységére. Azonban nem csak külső tényezők nehezítik az itt élők megélhetését, jelen vannak társadalmi és politikai problémák is. ",
          "p2": "A Karamojában élő emberek számára az állattenyésztés és a földművelés biztosítja a fő megélhetési formát. A régión belül egymástól elkülöníthető zónák határozhatók meg az éves csapadék mennyiség függvényében, mely nagymértékben meghatározza az adott területen előállítható javakat. A termesztett növények vízellátását csak az esőzések biztosítják, így azokon a területeket, ahol az esőzés éves mértéke alacsonyabb a hangsúly a nomád állattenyésztés felé tolódik.",
          "p3": "Az állatok birtoklása a társadalmon belül státuszt biztosít, mivel birtoklásuk önmagában jelentheti a gazdagságot, ebből adódóan az állattartáshoz köthető az egyik kiemelt konfliktus, az ún. cattle raids vagy livestock raids, vagyis állatok fegyveres kényszerrel történő eltulajdonítása. A probléma méretét mutatja, hogy az állami erőszakszervezet rendszeres beavatkozásra kényszerül a területen a béke biztosítása érdekében. ",
          "p4": "Az biztonsági szempontokból instabil környezet tovább nehezíti a megélhetést, így bizonyos problémák orvoslása közben új problémák keletkeznek, melyek nem szűnnek meg az eredeti probléma elhárulásával. Ezen problémák összessége vezet az általános szegénységhez, melyek fő kiváltó okai az éveken átívelő gyenge termés, a vízhiány, az elmaradott földművelési technikák, valamint a konfliktusokból adódó létbizonytalanság.",
          "p5": "Az elmúlt években a térségben kialakult helyzet nagyon sokat javult, azonban az itt élő embereket sok hátrány éri a régióról alkotott negatív előítéletek és korábbi tapasztalatok miatt. Fontos kihangsúlyozni, hogy Karamoja sokkal több, mint a fentiekben leírt nehézségek és kihívások. Karamoja ugyanis Uganda rejtett gyöngyszeme is, ahol még megtalálható a valódi érintetlen afrikai táj és a hagyományaikat még őrző és aktívan gyakorló törzsek, valamint az ország egyik legnagyobb nemzeti parkja is itt található."
        },
        "nairobi": {
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
          "shortDesc": "Mombasa és környéke világszerte ismert és kedvelt turista desztináció. Nagyjából az év egészében kellemes az idő, a szuahéli emberek kedvessége, a konyhájukra jellemző finom ízek és a csodás tengerpart sokakat hívogat. A napfény és kéklő víz azonban gyakran sötét dolgokat rejt. A helyiek többsége a turizmusból él és luxus szállodák ide vagy oda, mégis nagyon szegények. Valamint pont a turizmussal összefüggésben nagyon magas a térségben az emberkereskedelemmel és szexturizmussal kapcsolatos bűncselekmények és problémák előfordulás.",
          "p1": "Mombasa a történelem során, kiemelt elhelyezkedése miatt sok birodalom érdekszférájába tartozott, és még szélesebb körben folytatott kereskedelmet. A város birtoklásáért sok hadjárat folyt egészen az 1840-es évekig, amikor a Zanzibári szultán uralma alá került majd a Brit Birodalom része lett 1895-ben. A város építészete és etnikai összetétele is tükrözi a sokféle kulturális behatást. A Brit Birodalom részeként pedig az olcsó munkaerő felhasználása érdekében, az Ugandai Vasútvonal építése során különböző etnikumú csoportokat telepítettek a városba.",
          "p2": "A város északi partszakaszán az város egy gazdagabb negyedének a szomszédságában található Mombasa egyik legsűrűbben lakott területe Kongowea. Itt jellemzően a városba munkalehetőség reményében beköltöző lakosok élnek, akik a környező gazdagabb negyedekben vállalnak alkalmi munkákat. Ebben a negyedben is – az elhelyezkedésétől függetlenül - jelen vannak a nyomornegyedekből ismert problémák a bűnözés magas aránya, a köztisztaság alacsony mértéke, és az alapszükségletek kielégítésének nehézsége.",
          "p3": "A térségben kiemelten fontos számunkra Mtwapa, amit sajnálatos módon emberkereskedelmi és szexturisztikai központként is lehetne hívni, a város teljes gazdasága és infrastruktúrája erre épült rá és itt található a székhelye a partnerszervezetünknek, akikkel közösen a fent említett témák visszaszorításán, az áldozattá válás megelőzésén valamint az áldozatok rehabilitációján és reintegrációján dolgozunk."
        }
    }
}
</i18n>




