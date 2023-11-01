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
      "title": "Education sponsorship programme in Kenya"
    },
    "1": {
      "title": "Supporting education in Mtwapa",
      "p1": "All the young people in this programme are from Mtwapa and the surrounding area (Kenya's coastal region, Mombasa region); they are all coming from those communities that our local partner organisation is already in contact with for many years. This is especially important, as this way we can make sure, that only those youngsters are included in this programme, who need this support the most.",
      "p2": "This region of Kenya is severely affected with human trafficking, sex tourism and sexual exploitation of the children, therefore, everyone in the programme are either a victim of any of the listed issues or are in an increased danger of exposure because of family or sociocultural, economical environment and situation.",
      "p3": "For security reasons, and because of the sensitivity of the issue, we will not give any information out of this aspect of their lives. Thank you for your understanding.",
      "p4": "As a sponsor, you can do a lot for the chosen child or teenager. Within this programme you can become a sponsor of a young person, for a monthly donation of 8500 HUF, that will provide them the tuition fee, daily meals in the school, books and health care, when needed.",
      "p5": {
        "1": "For any questions, please don't hesitate to contact us at ",
        "2": "."
      }
    },
    "2": {
      "title": "Sponsoring education in one of Kenya's largest slum",
      "p1": "Korogocho is one of Kenya's largest slum, that was founded on the border of Nairobi's biggest landfill. It doesn't have any infrastructure, tapped water or sewage system. The residents live in houses that they built themselves, using only what they found in the landfill. Its residents struggle to enter the job market, mainly because of lack of education or skills and in some cases, because they live a long distance from the workplace. The crime rate is high, even in broad daylight (theft, burglary, rape, prostitution, drug and weapon trade, etc.). The only way out of this for the young people living here is through education, however, without help, for many, the education is unavailable. Furthermore, many families instead of education, they need their children to work to increase the family's income.",
      "p2": "As a sponsor, you can do a lot for the chosen child or teenager. Within this programme we help the young people living in the slum of Nairobi. THe targeted group lives in extreme poverty, young kids and teenagers, who are exposed to the danger of human trafficking, sexwork and crime group activities. In this programme, you can become a sponsor of a young person, for a monthly donation of 7800 HUF, that will provide them the tuition fee, daily meals in the school, books and health care, when needed.",
      "p3": {
        "1": "For any questions, please don't hesitate to contact us at ",
        "2": "."
      }
    }
  }
}
</i18n>