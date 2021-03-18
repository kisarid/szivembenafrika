<template>
  <div class="content">
    <heading>
      <div slot="main">Önkéntesség</div>
    </heading>
    <container>
      <section>
        <div class="sub-heading">Önkéntességgel kapcsolatos alapelveink</div>
        <div class="pic float desktop">
          <img src="@/assets/images/volunteering/atadas.jpg" alt="" />
        </div>
        <p>
          Mi, a Szívemben Született Afrikánál hiszünk abban, hogy az önkéntes
          szerepvállalás izgalmas, tartalmas, sokszínű és lélekemelő. Hiszünk
          abban, hogy minden önkéntes megtalálhatja nálunk a maga számára a
          változatos, gyakran kihívásokban gazdag, a segítségnyújtáson túl az
          egyéni fejlődést elősegítő feladatokat. Hiszünk abban, hogy az
          eredményes segítségnyújtás egyik alappillére a sokszínű, összetartó
          csapat, így tárt karokkal várjuk kortól, nemtől, élethelyzettől
          függetlenül minden olyan érdeklődő jelentkezését, aki szívesen
          csatlakozna be a munkánkba. Hiszünk a társadalmi felelősségvállalás
          fontosságában, így arra törekszünk, hogy szervezett keretek között
          minden önkéntesünknek lehetőséget biztosítunk ennek a
          megtapasztalására.
        </p>
        <div class="pic mobile">
          <img src="@/assets/images/volunteering/atadas.jpg" alt="" />
        </div>
        <p>
          Tudjuk, hogy akár itthon is, de az afrikai önkéntes munkák alkalmával
          pedig különösen van esély arra, hogy az önkénteseink lelkileg
          megterhelőbb történetekkel, helyzetekkel is találkoznak. Ezért
          folyamatos, jól átgondolt és tapasztalati tudáson alapuló
          képzéseinkkel igyekszünk a lehető leginkább felkészíteni minden
          csapattagot az adott feladat elvégzésére, majd amennyiben szükséges
          szupervíziós lehetőséget is biztosítunk. Hiszünk abban, hogy
          eredményesek csak valódi csapatban lehetünk és hogy bármilyen
          feladatot sokkal élvezetesebb jó társaságban végezni, így folyamatosan
          tartunk csapatépítő programokat, hogy a csoportból csapattá váljanak
          önkénteseink is és lehetőségük nyíljon minél jobban megismerni a
          szervezet tagjait is.
        </p>
        <p>
          A szervezetünk vallás és politikamentesen működik és ezeket az
          alapelveket az önkéntes munka során is tiszteletben tartjuk.
        </p>
        <div class="sub-heading">Az önkéntessé válás menete</div>
        <p>
          Ahhoz, hogy a Szívemben Született Afrika önkéntese lehess, a következő
          lépések megtétele szükséges:
        </p>
        <ul>
          <li>
            Küldd el nekünk önéletrajzodat és egy motivációs levelet az
            <a href="mailto:onkentes@szivembenafrika.org"
              >onkentes@szivembenafrika.org</a
            >
            email címre
          </li>
          <li>
            Ezt követően egy személyes találkozásra hívunk majd, hogy
            megismerkedhessünk veled
          </li>
          <li>
            Ezzel bekerülsz az önkéntes csapatunkba és folyamatosan értesítünk
            majd azokról az eseményekről és feladatokról, amikbe be lehet
            kapcsolódni.
          </li>
          <li>
            Nagyjából 4 havonta tartunk csapatépítéssel egybekötött képzéseket.
            Egy ilyenen a jelentkezésedet követően egy éven belül részt kell
            venned. Az afrikai önkéntesség csak a képzésen való részvételt
            követően történhet meg. ( A képzés nem évül el, ha egy adott évben
            részt veszel az érvényes lesz egy akár több évvel későbbi
            kiutazáshoz is.)
          </li>
          <li>
            Az afrikai önkéntesség előfeltétele minden esetben minimum 1 év
            aktív hazai önkéntesség. Erre azért van szükség, hogy te is
            kellőképpen megismerhesd a szervezetünket, filozófiánkat és mi is
            alaposan megismerhessünk téged és láthassuk, hogy hogyan vagy jelen
            a különböző helyzetekben. Így mindenki a legfelkészültebben tud
            belekezdeni egy misszióba.
          </li>
        </ul>
        <p>
          Fontos, hogy tudd, az, ha jelentkezel és bekerülsz az önkéntes
          csapatunkba, nem jelenti automatikusan azt, hogy egyből a soron
          következő kiutazással lehetőséged lesz Ugandába menni. Egy misszió
          megszervezésénél nagyon sok szempontot figyelembe kell vennünk az
          adott misszió kitűzött céljától kezdve, a csapatösszeállításon át az
          olyan operatív és logisztikai kérdésekig, mint az Ugandán belüli
          utazás, férőhelyek a szálláson stb.
        </p>

        <div class="sub-heading">A „tökéletes” önkéntes</div>
        <p>
          Tudjuk, hogy senki sem tökéletes, de mindenki tökéletes valamilyen
          feladatra, csak meg kell találni a leginkább hozzáillőt. A Szívemben
          Született Afrika önkéntese:
        </p>
        <ul>
          <li>
            megérti és támogatja az egyesületünk filozófiáját, értékeit és
            céljait
          </li>
          <li>elfogadja és betartja egyesületünk Önkéntes Kódexét</li>
          <li>rugalmas és felelősségteljes</li>
          <li>nyitott és elfogadó embertársai iránt</li>
          <li>proaktív és érdeklődő</li>
          <li>
            folyamatos önreflexiónak köszönhetően fel tudja mérni és jelzi, ha
            szakmai segítségre vagy az esetleges lelki nehézségek átbeszélésére
            van szüksége
          </li>
          <li>
            megérti, hogy önkéntesként gyakorlatilag a szervezet nagykövete is,
            hiszen feladatai elvégzése közben minket képvisel. Mindig ezt észben
            tartva cselekszik.
          </li>
        </ul>
      </section>
    </container>
  </div>
</template>

<style lang="scss" scoped>
.float {
  img {
    float: right;
    max-width: 600px;
    margin: 10px;
    margin-top: 0;
  }
}

.desktop {
  display: none;
}

@media (min-width: 1024px) {
  .desktop {
    display: block;
  }

  .mobile {
    display: none;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'

@Component({
  name: 'Volunteering',
  components: { container, heading },
})
export default class Volunteering extends Vue {}
</script>