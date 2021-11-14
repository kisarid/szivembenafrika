<template>
  <div class="content">
    <heading>
      <div slot="main">{{ $t('main') }}</div>
    </heading>
    <container>
      <section>
        <div class="text-and-pic">
          <div class="text">
            <p>{{ $t('p1') }}</p>
            <p>{{ $t('p2') }}</p>
            <p>{{ $t('p3') }}</p>
          </div>
          <div class="pic">
            <img src="@/assets/images/where-we-help/manafwa1.jpg" alt="" />
          </div>
        </div>
        <p>{{ $t('p4') }}</p>
        <div class="text-and-pic">
          <div class="pic">
            <img src="@/assets/images/where-we-help/manafwa9.jpg" alt="" />
          </div>
          <div class="text">
            <p>{{ $t('p5') }}</p>
            <p>{{ $t('p6') }}</p>
            <p>{{ $t('p7') }}</p>
            <p>{{ $t('p8') }}</p>
          </div>
        </div>
      </section>
    </container>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'

@Component({
  name: 'WhereWeHelp',
  components: { container, heading },
})
export default class WhereWeHelp extends Vue {}
</script>

<i18n>
{
    "hu": {
        "main": "Hol segítünk?",
        "p1": "Manafwa körzet Uganda keleti régiójában található, központja Manafwa. Keleti és déli oldalon Kenyával határos, nyugati oldalon Mbalé körzet, az északi oldalon pedig Bududa körzet a szomszédja, A keleti régió legnagyobb városa Mbalé nagyjából 30 kilométerre helyezkedik el a körzet központjától, Manafwától. A körzet 87%-a vidéki terület és csak a fennmaradó 13%-ot tartják városként számon.",
        "p2": "Manafwa körzet lakossága nagyjából 158 000 fő. Az itt élő emberek társadalmi helyzete Uganda egészét vizsgálva középosztálynak mondható. Az emberek itt is a szegénységi küszöb alatt élnek, de megvan a potenciál, hogy kis segítséggel, viszonylag könnyen fejlődjenek. Az agrárkultúra fejlesztése lehetne az egyik legnagyobb segítség, mert sok jó termés van, és itt tényleg megérkezik az eső évi kétszer.",
        "p3": "Még a mi házunkban, ahol élünk sincs vezetékes víz, a kannákban összegyűjtött esővízben fürdünk és áramunk is csak akkor van, amikor a napelemek feltöltődnek, ez esős időszakban csak napi néhány órát jelent. Az ételünket az udvaron, a földön, faszénen főzik és a kamránk például egyben tyúkólként is funkcionál. Mégis azzal, hogy van mit ennünk, van hol laknunk és tudunk venni tiszta vizet, amelyet biztonsággal fogyaszthattunk szerencsésebbek vagyunk, mint a falu lakói.",
        "p4": "Vidék lévén az emberek többségének nincs állandó munkája, gyakorlatilag egyfajta cserekereskedelmet folytatnak egymással. A falu lakói nagy részének a bevétele informális munkákból származik, mint például ásásból, chapati árulásból, ha van bármilyen olyan termésük a ház körül, ami értékesíthető, akkor annak az eladásából. A falu nagyon közel fekszik a kenyai határhoz és ennek az egyik velejárója, hogy nagyon sokan átmennek Kenyába egy jobb élet reményében. Vannak családok, ahol a szülők gyerekeiket hátrahagyva indulnak útnak, de olyan is van, ahol a gyereket adják el mosogatólánynak, vagy takarítónak a szomszédos országba. Amikor elkezdtük ott a programot a nők többsége a házkörüli teendőkkel foglalkozott, nekik egyáltalán nem volt saját bevételük.",
        "p5": "A körülöttünk lévő sárból döngölt házakban semmilyen áram nincs, a berendezési tárgy nagyjából egy rozoga fekvő alkalmatosság a férfinak, és egy földre leterített rongy a nőknek és a gyermekeknek. A házak egy légterűek, egy kis szobányi hely van, ami egyszerre a hálószoba és a konyha is. Higiéniai szempontból komoly problémát jelent, hogy a faluban nem állnak rendelkezésre mosdók. Toalettként szárított bab levelekkel elkerített területeket használnak, fürdeni pedig lavórban összegyűjtött esővízben fürdenek, de vannak családok ahol ez a heti rendszerességnél is ritkábban történik meg. Ezekben a házakban akár sokgyermekes családok, vagy több generáció is együtt él.",
        "p6": "A falubeli emberek többsége nem jut napi szinten élelmiszerhez, átlagosan heti három - négy napon tudnak enni, akkor is csak napi egyszer.",
        "p7": "Nagyon sok a félárva és árva gyermek a faluban, róluk egyébként a közösség lakói együttesen gondoskodnak. Mindig másik háznál kapnak enni például.",
        "p8": "Az ezen a területen élők a bantu népcsoporton belül a bagisu törzshöz tartoznak, Manafwában pedig a törzsön belül három különböző klán él. A klán rendszernek fontos szerepe van számukra, mivel a törzsön belüli házasságot nagyon preferálják és szorgalmazzák, de klánon belül nem házasodnak, még akkor sem, ha tényleges vérrokonság nem áll fenn."
    },
    "en": {
        "main": "Where do we help?",
        "p1": "Manafwa county is located in Uganda’s Eastern region, its centre is Manafwa. The county is bordered with Kenya from East and South, on the West is Mbale county and on the North is Bududa county. The Eastern region’s biggest town is Mbale is about 30km away from the county’s centre, Manafwa. 87% of the county is countryside and the rest of 13% is built up town areas.",
        "p2": "Manafwa county’s population is about 158.000. The social status of people living in the area, looking at the whole of Uganda, is middle class. People live in property here, however they do have the potential to improve their circumstances with some help and guidance. Improving the agriculture could be the biggest help, because there are lot of different type of good crop that can be grown here and also the rain does arrive twice a year.",
        "p3": "Even in the house we stayed at, there is no tap water, we had to bath in rain water, collected in jerry cans, and we only had electricity when the solar panels were fully charged, this in the rainy season provides only few hours of electricity. Our food was cooked outside in the yard, on charcoal on the ground, and our storage room was also being used to house the hens. Despite of the circumstances, the fact that we had food to eat, a place to live in and we were able to buy clean water that we could safely drink, we were luckier than anyone in the village.",
        "p4": "Due to it being on the countryside, the majority of the people here don’t have full time jobs, they are basically bartering with each other for food and other products. Most people in the village earn their income from casual jobs, such as digging, selling chapatis, and if they have any crops growing around the house they can sell, then they have some income from that as well. The village is located very close to the Kenyan boarder, which attracts lot of people to go over in the hope of a better life. There are families, where the parents are leaving their children behind to go over the boarder, or even where the parents sell their children as a kitchen porter or cleaner in the neighbouring country. When we started our project in Manafwa, most of the women have only been doing the house work, and didn’t have any income at all.",
        "p5": "In the houses, that are made of mud, there is no electricity, the furniture consist of an old, wonky bed for the man, and a rug on the floor for the women and the children. The houses only consist of one room, which serves as the bedroom as well as the kitchen. There are no bathrooms, that poses hygienic issues. They have an area fenced off with dried bean leaves, that they use as a loo, and they take baths in a basin, using the rainwater that it collected due course, but there are families where this only happens less than once a week. Large families and even multiple generations are living together in these houses.",
        "p6": "Most of the people in the village don’t have access to food every day, in average they eat 3-4 day a week, and only once a day on these days.",
        "p7": "There are lot of orphan and half-orphan children in the village who the community helps looking, for example, these children get food from different house each day.",
        "p8": "People living in this area belong to the Bagisu tribe within the Bantu ethnic group; in Manafwa within the tribe they also have 3 different clans. The clan system is very important for them, as they prefer marrying to someone from the same tribe, but they won’t marry anyone from the same clan, even if the couple are not relatives."
    }
}
</i18n>