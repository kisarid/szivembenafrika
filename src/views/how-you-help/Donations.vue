<template>
  <div class="content">
    <heading>
      <div slot="main">Adományozás</div>
      <div slot="description">
        Pénzadomány, szolgáltatás adomány, tárgyi adomány
      </div>
    </heading>
    <container>
      <section>
        <div class="donation-info">
          <div class="title">Adományodat az alábbi helyre tudod elküldeni:</div>
          <p>Szívemben Sz.A.E.</p>
          <p>Magnet Bank HUF: 16200223-10126679-00000000</p>
          <p>
            Közlemény: az általad támogatni kívánt program neve és az email
            címed, hogy megköszönhessük az adományodat
          </p>
          <p>IBAN: HU40 1620 0223 1012 6679 0000 0000</p>
          <p>SWIFT: HBWEHUHB</p>
        </div>
      </section>
      <section>
        <div class="sub-heading">
          Miért fontos a szervezetünknek a rendszeres, havi adományozás?
        </div>
        <p>
          Minden adomány számít és sokat jelent, és nagyon hálásak vagyunk a
          legkisebb segítségért is. Az egyszeri adományozás egy remek kezdet, de
          azok a problémák, amelyekkel a nők, lányok és a gyermekek szembe kell,
          hogy nézzenek Manafwában – a szegénység, az erőszak, az oktatáshoz
          való korlátozott hozzáférés, az egészségügyi ellátás hiánya – hosszú
          távú problémák, amelyek hosszú távú megoldást igényelnek. A rendszeres
          adományok azt biztosítják számunkra, hogy dolgozni tudjunk és
          segíteni, mindaddig, amíg erre szükség van, akkor is, ha ez több és
          hosszabb időt vesz igénybe.
        </p>
        <p>
          A havi rendszerességű támogatás lehetővé teszi számunkra, hogy bele
          merjünk vágni hosszabb távú, nagy ívű projektekbe is, hogy
          belefektessünk a nők és gyermekek és közösségeik életébe. Ez azt
          jelenti, hogy valódi és fenntartható változást tudunk hozni az
          életükbe. <b>Kérünk, segíts életeket változtatni!</b>
        </p>
        <div class="text-and-pic">
          <div class="text">
            <div class="sub-heading">Programok támogatása</div>
            <p>
              Projektjeink folyamatos, eredményes működtetését segítheted a
              célzott adományozással. Ilyenkor kérünk, hogy az utalás
              közleményébe írd be annak a projektnek a nevét, amelyiket
              támogatni szeretnéd.
            </p>
            <div class="sub-heading">Tárgyi adomány és szolgáltatás</div>
            <p>
              Számunkra a szeretett manafwai közösségünk boldogsága és
              boldogulása a legfontosabb, azonban ahhoz, hogy a projektjeink
              megvalósítása során a maximumot nyújtsuk és valódi, hatékony
              segítséget tudjunk biztosítani, egy stabil háttércsapattal is
              rendelkeznünk kell.
            </p>
            <p>
              Válassz az alábbi listából, támogasd a szervezet stabil működését
              és ezáltal járulj hozzá te is, hogy a lehető legtöbbet tudjuk
              segíteni Manafwában.
            </p>
            <p>Ha minket segítesz, őket segíted!</p>
            <ul>
              <li>Grafikus szolgáltatás</li>
              <li>Videó készítés</li>
              <li>Terem bérlés (a rendezvényeinkhez)</li>
              <li>Stúdió fotózás (a kampányainkhoz)</li>
              <li>Laptop</li>
              <li>Projektor</li>
              <li>Fényképezőgép (a helyi csapatunk számára)</li>
              <li>Okostelefonok (a helyi segítőink számára)</li>
            </ul>
          </div>
          <div class="pic">
            <img src="@/assets/images/donations/atadas2.jpg" alt="">
          </div>
        </div>
        <div class="sub-heading">Vállalati adományozás</div>
        <p>
          Vállalati rendezvények, családi napok, csapatépítők alkalmából
          interaktív előadás megtartását vállaljuk országszerte. Ezen kívül,
          örömmel fogadjuk vállalatok tárgyi- és pénzbeli felajánlásait a futó
          programjaink támogatására.
        </p>
      </section>
    </container>
  </div>
</template>

<style lang="scss">
.donation-info {
  width: fit-content;
  padding: 20px;
  border: 1px solid var(--moyo-font-light);
  border-radius: 5px;

  .title {
    margin-bottom: 15px;
    font-size: 110%;
  }

  p {
    margin: 0;
    margin-bottom: 5px;
    padding-left: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'

@Component({
  name: 'Donations',
  components: { container, heading },
})
export default class Donations extends Vue {}
</script>