<template>
  <div class="content">
    <heading>
      <div slot="main">{{ $t('main') }}</div>
    </heading>
    <container>
      <section>
        <div class="sub-heading">{{ $t('1.title') }}</div>
        <div class="pic float desktop">
          <img src="@/assets/images/volunteering/atadas.jpg" alt="" />
        </div>
        <p>{{ $t('1.p1') }}</p>
        <div class="pic mobile">
          <img src="@/assets/images/volunteering/atadas.jpg" alt="" />
        </div>
        <p>{{ $t('1.p2') }}</p>
        <p>{{ $t('1.p3') }}</p>
        <div class="sub-heading">{{ $t('2.title') }}</div>
        <p>{{ $t('2.p1') }}</p>
        <ul>
          <li>
            {{ $t('2.p2.li1.1') }}<a href="/files/Infopack_Onkentesseg_SzivembenAfrika.pdf">Infopackünket</a>{{ $t('2.p2.li1.2') }}
          </li>
          <li>
            {{ $t('2.p2.li2.1') }}<a href="https://forms.gle/kaTAhGQpjYXyTt4EA">Jelentkezési formot</a>{{ $t('2.p2.li2.2') }}
          </li>
          <li>{{ $t('2.p2.li3') }}</li>
          <li>{{ $t('2.p2.li4') }}</li>
          <li>{{ $t('2.p2.li5') }}</li>
          <li>{{ $t('2.p2.li6') }}</li>
        </ul>
        <p>{{ $t('2.p3') }}</p>
        <div class="sub-heading">{{ $t('3.title') }}</div>
        <p>{{ $t('3.p1') }}</p>
        <ul>
          <li>{{ $t('3.li1') }}</li>
          <li>{{ $t('3.li2') }}</li>
          <li>{{ $t('3.li3') }}</li>
          <li>{{ $t('3.li4') }}</li>
          <li>{{ $t('3.li5') }}</li>
          <li>{{ $t('3.li6') }}</li>
        </ul>
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
  name: 'Volunteering',
  components: { container, heading },
})
export default class Volunteering extends Vue {}
</script>

<i18n>
{
    "hu": {
        "main": "Önkéntesség",
        "1": {
            "title": "Önkéntességgel kapcsolatos alapelveink",
            "p1": "Mi, a Szívemben Született Afrikánál hiszünk abban, hogy az önkéntes szerepvállalás izgalmas, tartalmas, sokszínű és lélekemelő. Hiszünk abban, hogy minden önkéntes megtalálhatja nálunk a maga számára a változatos, gyakran kihívásokban gazdag, a segítségnyújtáson túl az egyéni fejlődést elősegítő feladatokat. Hiszünk abban, hogy az eredményes segítségnyújtás egyik alappillére a sokszínű, összetartó csapat, így tárt karokkal várjuk kortól, nemtől, élethelyzettől függetlenül minden olyan érdeklődő jelentkezését, aki szívesen csatlakozna be a munkánkba. Hiszünk a társadalmi felelősségvállalás fontosságában, így arra törekszünk, hogy szervezett keretek között minden önkéntesünknek lehetőséget biztosítunk ennek a megtapasztalására.",
            "p2": "Tudjuk, hogy akár itthon is, de az afrikai önkéntes munkák alkalmával pedig különösen van esély arra, hogy az önkénteseink lelkileg megterhelőbb történetekkel, helyzetekkel is találkoznak. Ezért folyamatos, jól átgondolt és tapasztalati tudáson alapuló képzéseinkkel igyekszünk a lehető leginkább felkészíteni minden csapattagot az adott feladat elvégzésére, majd amennyiben szükséges szupervíziós lehetőséget is biztosítunk. Hiszünk abban, hogy eredményesek csak valódi csapatban lehetünk és hogy bármilyen feladatot sokkal élvezetesebb jó társaságban végezni, így folyamatosan tartunk csapatépítő programokat, hogy a csoportból csapattá váljanak önkénteseink is és lehetőségük nyíljon minél jobban megismerni a szervezet tagjait is.",
            "p3": "A szervezetünk vallás és politikamentesen működik és ezeket az alapelveket az önkéntes munka során is tiszteletben tartjuk."
        },
        "2": {
            "title": "Az önkéntessé válás menete",
            "p1": "Ahhoz, hogy a Szívemben Született Afrika önkéntese lehess, a következő lépések megtétele szükséges:",
            "p2": {
              "li1": {
                "1": "Olvasd el ",
                "2": ", mely Önkénteseinknek készült és minden fontos információt tartalmaz, amire első körben szükséged lehet."
              },
              "li2": {
                "1": "Amennyiben egyetértesz az Infopackben leírtakkal, kérjük töltsd ki a ",
                "2": ". Erre azért van szükség, hogy jobban megismerhessünk, átlássuk milyen céllal és motivációval érkeztél szervezetünkhöz, milyen tevékenységgel foglalkoznál szívesen. A kérdőív kitöltése több időt vesz igénybe, mert motivációs kérdések is szerepelnek benne, így ezt kérjük vedd figyelembe, mielőtt belevágsz."
              },
              "li3": "Ezt követően egy személyes találkozásra hívunk majd, hogy megismerkedhessünk veled.",
              "li4": "Ezzel bekerülsz az önkéntes csapatunkba és folyamatosan értesítünk majd azokról az eseményekről és feladatokról, amikbe be lehet kapcsolódni.",
              "li5": "Évente kétszer tartunk egy csapatépítéssel egybekötött képzést. Egy ilyenen a jelentkezésedet követően egy éven belül részt kell venned. Az afrikai önkéntesség csak a képzésen való részvételt követően történhet meg. (A képzés nem évül el, ha egy adott évben részt veszel az érvényes lesz egy akár több évvel későbbi kiutazáshoz is.)",
              "li6": "Az afrikai önkéntesség előfeltétele minden esetben minimum 1 év aktív hazai önkéntesség. Erre azért van szükség, hogy te is kellőképpen megismerhesd a szervezetünket, filozófiánkat és mi is alaposan megismerhessünk téged és láthassuk, hogy hogyan vagy jelen a különböző helyzetekben. Így mindenki a legfelkészültebben tud belekezdeni egy misszióba."
            },
            "p3": "Fontos, hogy tudd, az, ha jelentkezel és bekerülsz az önkéntes csapatunkba, nem jelenti automatikusan azt, hogy egyből a soron következő kiutazással lehetőséged lesz Afrikába menni. Egy misszió megszervezésénél nagyon sok szempontot figyelembe kell vennünk az adott misszió kitűzött céljától kezdve, a csapatösszeállításon át az olyan operatív és logisztikai kérdésekig, mint az országon, településen belüli utazás, férőhelyek a szálláson stb."
        },
        "3": {
            "title": "A „tökéletes” önkéntes",
            "p1": "Tudjuk, hogy senki sem tökéletes, de mindenki tökéletes valamilyen feladatra, csak meg kell találni a leginkább hozzáillőt. A Szívemben Született Afrika önkéntese:",
            "li1": "Megérti és támogatja az egyesületünk filozófiáját, értékeit és céljait",
            "li2": "Rugalmas és felelősségteljes",
            "li3": "Nyitott és elfogadó embertársai iránt",
            "li4": "Proaktív és érdeklődő",
            "li5": "Folyamatos önreflexiónak köszönhetően fel tudja mérni és jelzi, ha szakmai segítségre vagy az esetleges lelki nehézségek átbeszélésére van szüksége",
            "li6": "Megérti, hogy önkéntesként gyakorlatilag a szervezet nagykövete is, hiszen feladatai elvégzése közben minket képvisel. Mindig ezt észben tartva cselekszik."
        }
    },
    "en": {
        "main": "Volunteering",
        "1": {
            "title": "Principles of volunteering",
            "p1": "We at Africa born in my heart believe that the role of a volunteer is exciting, rich, diverse, and uplifting. We believe that every volunteer is able to find wide variety of - often challenging - tasks at our organization, that is not limited to aid work but also serve self-improvement purposes. We believe that one of the main pillars of successful aid work is the diverse yet united group, so we warmly welcome every applicants irrespectively from age profile, gender or life situation, who wants to join our work. We believe in the importance of social responsibility, and our amibition is to provide the possibility of this experience in an organized environment to each of our volutneers.",
            "p2": "We are aware that while performing volunteer work there is a high chance of getting involved in life situations that are challenging the mental health of the volunteer. Therefore we provide continuos courses - based on on-field knowledge - to prepare each member of the group to the highest level possible, for carrying out the assigned task, and if needed we offer a possibility of supervision. We believe that we can only be successful as a united group, and that each of our tasks are more joyful if we act as a united community, therefore we arrange team-building events in succession, to forge a team out of a group of volunteers , and also to offer a chance to get ot know the menbers of the organization better.",
            "p3": "Our organization operates free from religion and politics and we respect and follow these principles throught volunteer work as well."
        },
        "2": {
            "title": "How to become a volunteer",
            "p1": "To volunteer for Africa born in my heart you need to do the following steps:",
            "p2": {
                "li1": {
                    "1": "Send us your CV and a motivational letter to ",
                    "2": "."
                },
                "li2": "Then we invite you to a personal meeting to get to know you better.",
                "li3": "After that you will be admitted into our volunteer group and we will inform you of those events and tasks that you can join to.",
                "li4": "We arrange team-building events tied together with courses every 4 months. It is manadatory for you to attend one of these within 1 year after you joining the group. Volunteering in Africa is only available after attending one of these events. (the course doesnt not lose its validation with a year passing, so if you took part in a course, it will be valid for a journey even in later years.)",
                "li5": "To volunteer in Africa you have to spend 1 active year as volunteer in Hungary. It is mandatory, to allow you to get to know the organization and understand our philosophy to a needed level. It is also needed so we get to know you and see how you act in various situations. It allows everyone the be fully prepared to start a mission"
            },
            "p3": "It is important to understand that even if you apply and get in to the volunteer group, that does not guarantee an automatical chance of travelling to Uganda for the next mission. There are lots of factor to take into account when planning mission, starting from the aim of the mission through the selection of the team, to operational and logistical matters such as commuting in Uganda and the possibilities in accomodation."
        },
        "3": {
            "title": "The „perfect” volunteer",
            "p1": "We understand that no one is perfect, however there is a perfect task for everyone, it just has to be found. The voltuneer of Africa born in my heart:",
            "li1": "Understands our associations’ philosophy and supports our values and goals",
            "li2": "Accepts and follows the Volunteer Codex of our association.",
            "li3": "Flexible and responsible",
            "li4": "Open and welcoming to other human beings",
            "li5": "Proactive and inquiring",
            "li6": "As a result of self-reflective behaviour is able to realize and commincate the need of professional help or the need of discussion in case of experiencing issues that are challenging to the volunteer’s mental health.",
            "li7": "Undestands that as a volunteer the person acts as an ambassador of the organization,as the volunteer represents us while working. The volunteers acts are always inline with this concept."
        }
    }
}
</i18n>