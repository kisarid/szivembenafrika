<template>
  <div class="content">
    <heading>
      <div slot="main">{{ $t('main.title') }}</div>
    </heading>
    <container>
      <section>
        <div class="sub-heading">{{ $t('1.title') }}</div>
        <div class="pic float">
          <img src="@/assets/images/eductation-program-kenya/EducationProgramKenya_2.jpg" alt="" />
        </div>
        <p>{{ $t('1.p1') }}</p>
        <p>{{ $t('1.p2') }}</p>
        <p>{{ $t('1.p3') }}</p>
        <p>{{ $t('1.p4') }}</p>
        <p>{{ $t('1.p5.1') }} <a
            href="mailto:gyermektamogatas@szivembenafrika.org">gyermektamogatas@szivembenafrika.org</a> {{ $t('1.p5.2') }}
        </p>
      </section>
      <section style="margin-top: 40px;">
        <div class="sub-heading">{{ $t('2.title') }}</div>
        <p>{{ $t('2.p1') }}</p>
        <p>{{ $t('2.p2') }}</p>
        <p>{{ $t('2.p3.1') }} <a
            href="mailto:gyermektamogatas@szivembenafrika.org">gyermektamogatas@szivembenafrika.org</a> {{ $t('2.p3.2') }}
        </p>
        <div class="pic-grid">
          <div class="pic">
            <img src="@/assets/images/eductation-program-kenya/EducationProgramKenya_1.jpg" alt="" />
          </div>
          <div class="pic">
            <img src="@/assets/images/eductation-program-kenya/EducationProgramKenya_3.jpg" alt="" />
          </div>
        </div>
      </section>
    </container>
  </div>
</template>

<style lang="scss" scoped>
section .pic.float img {
  margin: 0;
  margin-bottom: 10px;
}

@media (min-width: 1024px) {
  section .pic.float img {
    margin: 10px;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'

@Component({
  name: 'EducationProgramKenya',
  components: { container, heading },
})
export default class EducationProgramKenya extends Vue {

}
</script>

<i18n>
{
  "hu": {
    "main": {
      "title": "Oktatás támogatási program Kenyában"
    },
    "1": {
      "title": "Oktatás támogatás Mtwapaban",
      "p1": "A programban szereplő összes fiatal Mtwapából és a környékéről került a programba (Kenya óceánparti régiója, Mombasa térsége), azokból a közösségekből, amelyekkel a helyi partnerszervezetünk már évek óta kapcsolatban van. Ez azért nagyon fontos, mert így biztos, hogy a leginkább rászorulók kerülnek a programba.",
      "p2": "Kenyának ez a régiója súlyosan érintett az emberkereskedelem, a szexturizmus és a gyermekek szexuális célú kizsákmányolásával, így a programban szereplő összes fiatal vagy érintettje - korábbi áldozata - valamelyik felsorolt problémának vagy pedig családi vagy szociokultúrális, gazdaság közege és helyzete  miatt fokozottan kitett a veszélynek. ",
      "p3": "Biztonsági okokból és a téma érzékenysége miatt az életünknek erről az aspektusáról nem adunk ki információt. Köszönjük a megértéseteket!",
      "p4": "Támogatóként rengeteget tehetsz a kiválasztott fiatalért. Ebben a programban havi 8500 forintos adományoddal támogatójává válhatsz egy fiatalnak, amely biztosítja számára a tandíjat, napi étkezést az iskolában ahová jár, a tanszereit és szükség esetén orvosi ellátást.",
      "p5": {
        "1": "Kérdés esetén fordulj bizalommal hozzánk a",
        "2": "email címen."
      }
    },
    "2": {
      "title": "Oktatás támogatás Kenya egyik legnagyobb nyomornegyedében",
      "p1": "Korogocho Kenya egyik legnagyobb nyomornegyede, Nairobi legnagyobb szeméttelepe határán alakult ki. Nem rendelkezik kiépített infrastruktúrával, vezetékes vízzel vagy szennyvízhálózattal. A lakosok saját maguk építette házakban laknak melyet, a szeméttelepen talált vagy újrahasznosított anyagokból építettek. Lakói nehezen tudnak belépni a munkaerőpiacra, aminek a fő okai között említhető az iskolázottságbeli hiányosságok, munkaerőpiaci készségek hiánya, vagy akár a munkahelyektől való távolság. A bűnözés mértéke magas, még a nappali órák során is(lopás, betöréses rablás, nemi erőszak, prostitúció, kábítószer és fegyverkereskedelem stb.). Az itt élő fiatalok egyetlen kitörési lehetősége az oktatásban való részvétel, azonban ez segítség nélkül a legtöbbek számára hozzáférhetetlen. Továbbá sok család az oktatás helyett a bevételek növelése céljából az iskola helyett munkára fogja a gyerekeket.",
      "p2": "Támogatóként rengeteget tehetsz a kiválasztott fiatalért. Ebben a programban Nairobi nyomornegyedében lévő iskolásoknak segítünk. A támogatott célcsoport extrém mélyszegényben élő, emberkereskedelem, szexmunka és bűnszervezetek veszélyének kitett gyerekek és kamaszkorú fiatalok. Ebben a programban havi 7800 forintos adományoddal támogatójává válhatsz egy fiatalnak, amely biztosítja számára a tandíjat, napi étkezést az iskolában ahová jár, a tanszereit és szükség esetén orvosi ellátást.",
      "p3": {
        "1": "Kérdés esetén fordulj bizalommal hozzánk a",
        "2": "email címen."
      }
    }
  },
  "en": {
    "main": {
      "title": "Oktatás támogatási program Kenyában"
    },
    "1": {
      "title": "Oktatás támogatás Mtwapaban",
      "p1": "A programban szereplő összes fiatal Mtwapából és a környékéről került a programba (Kenya óceánparti régiója, Mombasa térsége), azokból a közösségekből, amelyekkel a helyi partnerszervezetünk már évek óta kapcsolatban van. Ez azért nagyon fontos, mert így biztos, hogy a leginkább rászorulók kerülnek a programba.",
      "p2": "Kenyának ez a régiója súlyosan érintett az emberkereskedelem, a szexturizmus és a gyermekek szexuális célú kizsákmányolásával, így a programban szereplő összes fiatal vagy érintettje - korábbi áldozata - valamelyik felsorolt problémának vagy pedig családi vagy szociokultúrális, gazdaság közege és helyzete  miatt fokozottan kitett a veszélynek. ",
      "p3": "Biztonsági okokból és a téma érzékenysége miatt az életünknek erről az aspektusáról nem adunk ki információt. Köszönjük a megértéseteket!",
      "p4": "Támogatóként rengeteget tehetsz a kiválasztott fiatalért. Ebben a programban havi 8500 forintos adományoddal támogatójává válhatsz egy fiatalnak, amely biztosítja számára a tandíjat, napi étkezést az iskolában ahová jár, a tanszereit és szükség esetén orvosi ellátást.",
      "p5": {
        "1": "Kérdés esetén fordulj bizalommal hozzánk a",
        "2": "email címen."
      }
    },
    "2": {
      "title": "Oktatás támogatás Kenya egyik legnagyobb nyomornegyedében",
      "p1": "Korogocho Kenya egyik legnagyobb nyomornegyede, Nairobi legnagyobb szeméttelepe határán alakult ki. Nem rendelkezik kiépített infrastruktúrával, vezetékes vízzel vagy szennyvízhálózattal. A lakosok saját maguk építette házakban laknak melyet, a szeméttelepen talált vagy újrahasznosított anyagokból építettek. Lakói nehezen tudnak belépni a munkaerőpiacra, aminek a fő okai között említhető az iskolázottságbeli hiányosságok, munkaerőpiaci készségek hiánya, vagy akár a munkahelyektől való távolság. A bűnözés mértéke magas, még a nappali órák során is(lopás, betöréses rablás, nemi erőszak, prostitúció, kábítószer és fegyverkereskedelem stb.). Az itt élő fiatalok egyetlen kitörési lehetősége az oktatásban való részvétel, azonban ez segítség nélkül a legtöbbek számára hozzáférhetetlen. Továbbá sok család az oktatás helyett a bevételek növelése céljából az iskola helyett munkára fogja a gyerekeket.",
      "p2": "Támogatóként rengeteget tehetsz a kiválasztott fiatalért. Ebben a programban Nairobi nyomornegyedében lévő iskolásoknak segítünk. A támogatott célcsoport extrém mélyszegényben élő, emberkereskedelem, szexmunka és bűnszervezetek veszélyének kitett gyerekek és kamaszkorú fiatalok. Ebben a programban havi 7800 forintos adományoddal támogatójává válhatsz egy fiatalnak, amely biztosítja számára a tandíjat, napi étkezést az iskolában ahová jár, a tanszereit és szükség esetén orvosi ellátást.",
      "p3": {
        "1": "Kérdés esetén fordulj bizalommal hozzánk a",
        "2": "email címen."
      }
    }
  }
}
</i18n>