<template>
  <div class="content">
    <heading>
      <div slot="main">Hol segítünk?</div>
    </heading>
    <container>
      <section>
        <div class="text-and-pic">
          <div class="text">
            <p>
              Manafwa körzet Uganda keleti régiójában található, központja
              Manafwa. Keleti és déli oldalon Kenyával határos, nyugati oldalon
              Mbalé körzet, az északi oldalon pedig Bududa körzet a szomszédja,
              A keleti régió legnagyobb városa Mbalé nagyjából 30 kilométerre
              helyezkedik el a körzet központjától, Manafwától. A körzet 87%-a
              vidéki terület és csak a fennmaradó 13%-ot tartják városként
              számon.
            </p>
            <p>
              Manafwa körzet lakossága nagyjából 158 000 fő. Az itt élő emberek
              társadalmi helyzete Uganda egészét vizsgálva középosztálynak
              mondható. Az emberek itt is a szegénységi küszöb alatt élnek, de
              megvan a potenciál, hogy kis segítséggel, viszonylag könnyen
              fejlődjenek. Az agrárkultúra fejlesztése lehetne az egyik
              legnagyobb segítség, mert sok jó termés van, és itt tényleg
              megérkezik az eső évi kétszer.
            </p>
            <p>
              Még a mi házunkban, ahol élünk sincs vezetékes víz, a kannákban
              összegyűjtött esővízben fürdünk és áramunk is csak akkor van,
              amikor a napelemek feltöltődnek, ez esős időszakban csak napi
              néhány órát jelent. Az ételünket az udvaron, a földön, faszénen
              főzik és a kamránk például egyben tyúkólként is funkcionál. Mégis
              azzal, hogy van mit ennünk, van hol laknunk és tudunk venni tiszta
              vizet, amelyet biztonsággal fogyaszthattunk szerencsésebbek
              vagyunk, mint a falu lakói.
            </p>
          </div>
          <div class="pic">
            <img src="@/assets/images/where-we-help/manafwa1.jpg" alt="" />
          </div>
        </div>
        <p>
          Vidék lévén az emberek többségének nincs állandó munkája,
          gyakorlatilag egyfajta cserekereskedelmet folytatnak egymással. A falu
          lakói nagy részének a bevétele informális munkákból származik, mint
          például ásásból, chapati árulásból, ha van bármilyen olyan termésük a
          ház körül, ami értékesíthető, akkor annak az eladásából. A falu nagyon
          közel fekszik a kenyai határhoz és ennek az egyik velejárója, hogy
          nagyon sokan átmennek Kenyába egy jobb élet reményében. Vannak
          családok, ahol a szülők gyerekeiket hátrahagyva indulnak útnak, de
          olyan is van, ahol a gyereket adják el mosogatólánynak, vagy
          takarítónak a szomszédos országba. Amikor elkezdtük ott a programot a
          nők többsége a házkörüli teendőkkel foglalkozott, nekik egyáltalán nem
          volt saját bevételük.
        </p>
        <div class="text-and-pic">
          <div class="pic">
            <img src="@/assets/images/where-we-help/manafwa9.jpg" alt="" />
          </div>
          <div class="text">
            <p>
              A körülöttünk lévő sárból döngölt házakban semmilyen áram nincs, a
              berendezési tárgy nagyjából egy rozoga fekvő alkalmatosság a
              férfinak, és egy földre leterített rongy a nőknek és a
              gyermekeknek. A házak egy légterűek, egy kis szobányi hely van,
              ami egyszerre a hálószoba és a konyha is. Higiéniai szempontból
              komoly problémát jelent, hogy a faluban nem állnak rendelkezésre
              mosdók. Toalettként szárított bab levelekkel elkerített
              területeket használnak, fürdeni pedig lavórban összegyűjtött
              esővízben fürdenek, de vannak családok ahol ez a heti
              rendszerességnél is ritkábban történik meg. Ezekben a házakban
              akár sokgyermekes családok, vagy több generáció is együtt él.
            </p>
            <p>
              A falubeli emberek többsége nem jut napi szinten élelmiszerhez,
              átlagosan heti három - négy napon tudnak enni, akkor is csak napi
              egyszer.
            </p>
            <p>
              Nagyon sok a félárva és árva gyermek a faluban, róluk egyébként a
              közösség lakói együttesen gondoskodnak. Mindig másik háznál kapnak
              enni például.
            </p>
            <p>
              Az ezen a területen élők a bantu népcsoporton belül a bagisu
              törzshöz tartoznak, Manafwában pedig a törzsön belül három
              különböző klán él. A klán rendszernek fontos szerepe van számukra,
              mivel a törzsön belüli házasságot nagyon preferálják és
              szorgalmazzák, de klánon belül nem házasodnak, még akkor sem, ha
              tényleges vérrokonság nem áll fenn.
            </p>
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