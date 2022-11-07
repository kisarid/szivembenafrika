<template>
  <div class="content">
    <heading>
      <div slot="main">{{ $t('main') }}</div>
    </heading>
    <container>
      <section>
        <p>{{ $t('p1') }}</p>
        <div class="pic">
          <img
            src="@/assets/images/support-children/gyermektamogatas-1.jpg"
            alt=""
          />
        </div>
        <p>{{ $t('p2') }}</p>
        <p>{{ $t('p3.1') }}<a href="mailto:info@szivembenafrika.org">info@szivembenafrika.org</a>{{ $t('p3.2') }}</p>
        <div class="pic">
          <img
            src="@/assets/images/support-children/gyermektamogatas-2.jpg"
            alt=""
          />
        </div>
      </section>
    </container>
  </div>
</template>

<style lang="scss" scoped>
.pic {
  max-width: 700px;
  margin: 0 auto;
}

.children {
  margin-top: 30px;

  .sub-heading {
    font-size: 24px;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'
import Gallery from '@/components/Gallery.vue'
import { ChildBio } from '@/interfaces/bio'

@Component({
  name: 'SupportChildren',
  components: { container, heading, Gallery },
})
export default class SupportChildren extends Vue {
  children: ChildBio[] = [
    {
      name: 'Khainza Willian',
      image: 'support-children/children/Khainza-Willian.jpg',
      shortBio: [
        'Kor: 6',
        'Óvodai csoport: középső csoport',
        'Testvérek száma: 2',
      ],
      longBio: [
        'A családjában ő a legkisebb gyerek a két testvére mellett.',
        'Igazi kis csapatjátékos, aki csendes és visszahúzódó természete ellenére nagyon jól együtt tud működni a többi gyerekkel.',
        'A család szerény körülményei miatt a három gyerek taníttatása nagyon nagy terhet jelent a szülőknek, ahogy a mindennapi betevő előteremtése is.',
      ],
      objectPosition: '50% 0',
      isSupported: true
    },
    {
      name: 'Kitutu Marion',
      image: 'support-children/children/Kitutu-Marion.jpg',
      shortBio: ['Kor: 9', 'Óvodai csoport: nagycsoport', 'Testvérek száma: 7'],
      longBio: [
        'A népes családi lét ellenére apja nem csinál semmit. Nem dolgozik, nem tesz semmit az életkörülményeik jobbá tétele céljából.',
        'A testvérek és a férj is az anyára kénytelen támaszkodni – aki egy talpraesett, törtető nő. Sokszor elutazik pénzszerzés reményében, és amikor sikerrel jár, tud a gyerekeinek ennivalót adni.',
        'Az anya az utolsó reményük, azonban a remény lángja már halványabban ég a testvérek szemében is, hogy lehet még egyszer szebb életük. Ennek ellenére Marion jó képességekkel van megáldva, szeret olvasni, és ápolónő szeretne lenni.',
      ],
      objectPosition: '50% 0',
      isSupported: true
    },
    {
      name: 'Khatete Nathan',
      image: 'support-children/children/Khatete-Nathan.jpg',
      shortBio: [
        'Kor: 5',
        'Óvodai csoport: középső csoport',
        'Testvérek száma: 7',
      ],
      longBio: [
        'Sok rossz dolgot él meg a családjában, anyja meghalt.',
        'Apja alkalmi munkákból keres kevéske pénzt, ami a létfenntartáshoz sem elegendő önmagában, hogy ételt tudjon adni nyolc gyerekének.',
        'A családnak semmije sincs az üres kunyhóján kívül. Ingerszegény, szomorú sors az övék.',
        'Khatete szeret krétával rajzolni és játszani a többiekkel.',
      ],
      objectPosition: '50% 0',
      isSupported: true
    },
    {
      name: 'Maloba Morgan',
      image: 'support-children/children/Maloba-Morgan.jpg',
      shortBio: [
        'Kor: 5',
        'Óvodai csoport: középső csoport',
        'Testvérek száma: 1',
      ],
      longBio: [
        'Az apjának a negyedik felesége Morgan édesanyja.',
        'A nő fiatal volt és naív, amikor elhitte, hogy a férje gondoskodni fog róla és a születendő gyermekeiről.',
        'A férj elhanyagolja őket, mintha nem is akart volna családot alapítani vele. Idegenként él a két gyermek és a feleség a férj házában a többi feleséggel (és gyerekeikkel) egy fedél alatt. A másik három feleség mentálisan kikészíti őket, gyakran megverik a fiúkat is. Az anya próbálja védeni őket, de gyakorlatilag tehetetlen a három „szörnyeteggel” szemben.',
        'Az anya egyedül az oktatásban bízhat, amely megmentheti a gyerekeket a sanyarú sorstól, valamint őt is a kialakult helyzettől.',
        'Számára a reményt fiai, Tob és Morgran jelenti.',
      ],
      objectPosition: '50% 0',
      isSupported: true
    },
    {
      name: 'Wanganga Tob',
      image: 'support-children/children/Wanganga-Tob.jpg',
      shortBio: ['Kor: 4', 'Óvodai csoport: kis csoport', 'Testvérek száma: 1'],
      longBio: [
        'A nő fiatal volt és naív, amikor elhitte, hogy a férje gondoskodni fog róla és a születendő gyermekeiről.',
        'A férj elhanyagolja őket, mintha nem is akart volna családot alapítani vele. Idegenként él a két gyermek és a feleség a férj házában a többi feleséggel (és gyerekeikkel) egy fedél alatt. A másik három feleség mentálisan kikészíti őket, gyakran megverik a fiúkat is. Az anya próbálja védeni őket, de gyakorlatilag tehetetlen a három „szörnyeteggel” szemben.',
        'Az anya egyedül az oktatásban bízhat, amely megmentheti a gyerekeket a sanyarú sorstól, valamint őt is a kialakult helyzettől.',
        'Számára a reményt fiai, Tob és Morgran jelenti.',
      ],
      objectPosition: '50% 0',
      isSupported: true
    },
    {
      name: 'Khatete Nathan Lule',
      image: 'support-children/children/Nathan-Lule.jpg',
      shortBio: [
        'Kor: 8',
        'Óvodai csoport: középső csoport',
        'Testvérek száma: 2',
      ],
      longBio: [
        'A kisfiúnak az eddigi élete során már számos nehézséggel kellett megküzdenie, ennek ellenére nagyon kitartó és ambiciózus, szeretne dolgozni azon, hogy jobb körülmények között élhessen.',
        'A szülei elhagyták őt és a testvéreit, így a nagymamájuk vette magához őket, de ő maga is nagyon szegény.',
        'Mivel későn került az oviba, sokszor kinevették és többen tanácsolták neki, hogy hagyja ott az iskolát; szerencsére nem hallgatott rájuk...',
      ],
      objectPosition: '50% 0',
      isSupported: true
    },
    {
      name: 'Katete Nathan',
      image: 'support-children/children/Katete-Nathan.jpg',
      shortBio: ['Kor: 4', 'Óvodai csoport: kis csoport', 'Testvérek száma: 1'],
      longBio: [
        'Szülei fiatalon házasodtak össze, az anya még kiskorú volt, de az apa sem volt felkészülve a gyerekvállalásra…',
        'Fiuk bár nem tehet a sorsáról, mégis fizeti az árát annak, hogy a szülei felelőtlenek voltak. Mielőtt megszületett volna, mindkét szülője munkanélküli volt, habár a mai napig sem képesek biztosítani a családjuk megélhetését.',
        'Szerencsére anyukája is részt vesz egyesületünk női programjában, ezáltal lehetősége nyílt iskoláztatni kisebbik gyermekét, Nathan-t.',
        'A kisfiú szeret focizni, sőt, tehetséges is. Társait rendszerint kicselezi, a fiúk körében Ronaldonak becézik.',
      ],
      objectPosition: '50% 0',
      isSupported: true
    },
    {
      name: 'Natsambi Raymond',
      image: 'support-children/children/Natsambi-Raymond.jpg',
      shortBio: [
        'Kor: 6',
        'Óvodai csoport: középső csoport',
        'Testvérek száma: 3',
      ],
      longBio: [
        'A kisfiúról és testvéreiről az apai nagyapja gondoskodik, miután a szülei nem foglalkoznak velük. Az anya gyakran a fővárosban, Kampalában, vagy Kenyában dolgozik.',
        'Az apa nem igazán foglalkozik a gyerekekkel, mivel több felesége is van, akik szintén a faluban laknak, saját gyerekeikkel.',
        'Raymond napközben a nagyapjával és féltestvéreivel tölti az időt, de a szülők hiánya nehézzé teszi a mindennapokat.',
      ],
      objectPosition: '50% 0',
      isSupported: true
    },
    {
      name: 'Waneluba Isiah',
      image: 'support-children/children/Waneluba-Isiah.jpg',
      shortBio: [
        'Kor: 5',
        'Óvodai csoport: középső csoport',
        'Testvérek száma: 3',
      ],
      longBio: [
        'A nénikéjénél él, aki több ember gondját is viseli egyszerre. A testvérek közül ő a legnagyobb, ezért neki kell a legtöbbet besegítenie a háznál, főleg, hogy a nénikéjének egészségügyi gondjai vannak.',
        'Gyakran iskola helyett az állatokat legelteti, feji, hogy a tejet eladják a környéken, ezáltal biztosítva nénje – és eltartottai - számára némi ételt.',
        'Isiah ugyanakkor szeret iskolába járni, szeretne tanulni. Vágya, hogy a kis testvéreit segíteni tudja a későbbiekben.',
      ],
      objectPosition: '50% 0',
      isSupported: true
    },
  ]
}
</script>

<i18n>
{
    "hu": {
        "main": "Gyermektámogatás",
        "p1": "Hiszünk abban, hogy minden gyermeknek jár a boldog, biztonságos gyerekkor, az oktatás és az esély egy jó életre. Ugandában sajnos nem ingyenes az oktatás és mivel a családok nagy része a szegénységi küszöb alatt él, az, hogy iskolába járjon egy gyerek luxusnak számít. Gyermektámogatási programunk keretében havi 6000Ft-os adományért a támogató jelképes örökbefogadó szülővé válhat. Ez az az összeg, amely fedezi egy gyerkőc oktatását, tanszereit, étkezését és szükség esetén az orvosi ellátását. Mi pedig rendszeres időközönként hírt adunk a gyerkőc fejlődéséről, tanulmányi eredményeiről, fontosabb életeseményeiről, valamint küldünk róla fotókat, videókat.",
        "p2": "Csatlakozz hozzánk és segíts! Váltsuk valóra az álmaikat, változtassunk életeket! A havi támogatás összege 6000 forint, amely magában foglalja a kiválasztott gyermek tandíját, egyenruháját, tanszereit, étkezését és szükség esetén az orvosi ellátását.",
        "p3": {
            "1": "Kérdés esetén fordulj bizalommal hozzánk az ",
            "2": " email címen."
        }
    },
    "en": {
        "main": "Supporting a Child",
        "p1": "We believe that every child deserves a happy and safe childhood, education and a chance for a better life. In Uganda unfortunately the education is not free of tuition-fees, and as most of the families live under the threshold of poverty, the possibility for a child to attend school is a luxury. By our child-support program for a 6000 HUF donation/month you can symbolically adopt a child. This donation covers the kids’ education, school supplies, feeding and if needed medical attendance. We will periodically inform you of the kids’ growth, educational results, life events, and send photos and videos of the kid.",
        "p2": "Join us and help! Lets make their dreams come true, and changes their lives! The amount of monthly donation is 6000 HUF, which includes the chosen girls’ tuition-fees, school supplies, and medical attendance if needed.",
        "p3": {
            "1": "If you have any question do not hesitate to contact us at ",
            "2": "."
        }
    }
}
</i18n>