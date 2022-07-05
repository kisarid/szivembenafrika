<template>
  <div class="content">
    <heading>
      <div slot="main">{{ $t('main.title') }}</div>
      <div slot="description">{{ $t('main.text') }}</div>
    </heading>
    <container>
      <section>
        <div class="donation-info">
          <div class="title">{{ $t('1.title') }}</div>
          <p>{{ $t('1.p1') }}</p>
          <p>{{ $t('1.p2') }}</p>
          <p>{{ $t('1.p3') }}</p>
          <p>{{ $t('1.p4') }}</p>
          <p>{{ $t('1.p5') }}</p>
        </div>
      </section>
      <section>
        <div class="sub-heading">{{ $t('2.title') }}</div>
        <p>{{ $t('2.p1') }}</p>
        <p>{{ $t('2.p2.1') }}<b>{{ $t('2.p2.2') }}</b></p>
        <div class="text-and-pic">
          <div class="text">
            <div class="sub-heading">{{ $t('3.title') }}</div>
            <p>{{ $t('3.p1') }}</p>
            <div class="sub-heading">{{ $t('4.title') }}</div>
            <p>{{ $t('4.p1') }}</p>
            <p>{{ $t('4.p2') }}</p>
            <p>{{ $t('4.p3') }}</p>
            <ul>
              <li>{{ $t('4.p4.li1') }}</li>
              <li>{{ $t('4.p4.li2') }}</li>
              <li>{{ $t('4.p4.li3') }}</li>
              <li>{{ $t('4.p4.li4') }}</li>
              <li>{{ $t('4.p4.li5') }}</li>
              <li>{{ $t('4.p4.li6') }}</li>
              <li>{{ $t('4.p4.li7') }}</li>
              <li>{{ $t('4.p4.li8') }}</li>
            </ul>
          </div>
          <div class="pic">
            <img src="@/assets/images/donations/atadas2.jpg" alt="">
          </div>
        </div>
        <div class="sub-heading">{{ $t('5.title') }}</div>
        <p>{{ $t('5.p1') }}</p>
      </section>
    </container>
  </div>
</template>

<style lang="scss">

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

<i18n>
{
    "hu": {
        "main": {
            "title": "Adományozás",
            "text": "Pénzadomány, szolgáltatás adomány, tárgyi adomány"
        },
        "1": {
            "title": "Adományodat az alábbi helyre tudod elküldeni:",
            "p1": "Szívemben Sz.A.E.",
            "p2": "Magnet Bank HUF: 16200223-10126679-00000000",
            "p3": "Közlemény: az általad támogatni kívánt program neve és az email címed, hogy megköszönhessük az adományodat",
            "p4": "IBAN: HU40 1620 0223 1012 6679 0000 0000",
            "p5": "SWIFT: HBWEHUHB"
        },
        "2": {
            "title": "Miért fontos a szervezetünknek a rendszeres, havi adományozás?",
            "p1": "Minden adomány számít és sokat jelent, és nagyon hálásak vagyunk a legkisebb segítségért is. Az egyszeri adományozás egy remek kezdet, de azok a problémák, amelyekkel a nők, lányok és a gyermekek szembe kell, hogy nézzenek Manafwában – a szegénység, az erőszak, az oktatáshoz való korlátozott hozzáférés, az egészségügyi ellátás hiánya – hosszú távú problémák, amelyek hosszú távú megoldást igényelnek. A rendszeres adományok azt biztosítják számunkra, hogy dolgozni tudjunk és segíteni, mindaddig, amíg erre szükség van, akkor is, ha ez több és hosszabb időt vesz igénybe.",
            "p2": {
                "1": "A havi rendszerességű támogatás lehetővé teszi számunkra, hogy bele merjünk vágni hosszabb távú, nagy ívű projektekbe is, hogy belefektessünk a nők és gyermekek és közösségeik életébe. Ez azt jelenti, hogy valódi és fenntartható változást tudunk hozni az életükbe. ",
                "2": "Kérünk, segíts életeket változtatni!"
            }
        },
        "3": {
            "title": "Programok támogatása",
            "p1": "Projektjeink folyamatos, eredményes működtetését segítheted a célzott adományozással. Ilyenkor kérünk, hogy az utalás közleményébe írd be annak a projektnek a nevét, amelyiket támogatni szeretnéd."
        },
        "4": {
            "title": "Tárgyi adomány és szolgáltatás",
            "p1": "Számunkra a szeretett manafwai közösségünk boldogsága és boldogulása a legfontosabb, azonban ahhoz, hogy a projektjeink megvalósítása során a maximumot nyújtsuk és valódi, hatékony segítséget tudjunk biztosítani, egy stabil háttércsapattal is rendelkeznünk kell.",
            "p2": "Válassz az alábbi listából, támogasd a szervezet stabil működését és ezáltal járulj hozzá te is, hogy a lehető legtöbbet tudjuk segíteni Manafwában.",
            "p3": "Ha minket segítesz, őket segíted!",
            "p4": {
                "li1": "Grafikus szolgáltatás",
                "li2": "Videó készítés",
                "li3": "Terem bérlés (a rendezvényeinkhez)",
                "li4": "Stúdió fotózás (a kampányainkhoz)",
                "li5": "Laptop",
                "li6": "Projektor",
                "li7": "Fényképezőgép (a helyi csapatunk számára)",
                "li8": "Okostelefonok (a helyi segítőink számára)"
            }
        },
        "5": {
            "title": "Vállalati adományozás",
            "p1": "Vállalati rendezvények, családi napok, csapatépítők alkalmából interaktív előadás megtartását vállaljuk országszerte. Ezen kívül, örömmel fogadjuk vállalatok tárgyi- és pénzbeli felajánlásait a futó programjaink támogatására."
        }
    },
    "en": {
        "main": {
            "title": "Donations",
            "text": "Donation, donation of service, material donation"
        },
        "1": {
            "title": "You can send your donation to the following address.",
            "p1": "Szívemben Sz.A.E.",
            "p2": "Magnet Bank HUF: 16200223-10126679-00000000",
            "p3": "message box: write here the name of the program you wish to support and your e-mail adress, so we can thank you for your donation",
            "p4": "IBAN: HU40 1620 0223 1012 6679 0000 0000",
            "p5": "SWIFT: HBWEHUHB"
        },
        "2": {
            "title": "Why is the monthly donation important for the organization?",
            "p1": "Every donation counts, and we are appreciative even for the smallest help. One time donation is a great start, but the problems that women, girls and kids have to face in Manafwa such as poverty, violence, the limited access to education, and the lack of medical care are long-lasting problems that need long-lasting solutions. The periodical donations enable us to keep on working and providing help as long as it is needed, even if it has to be for a longer period of time.",
            "p2": {
                "1": "Monthly donations allow us to launch major projects that last for longer period of time, to invest into the lives of women and kids and ito their comminuties. This means we can bring change into their lives. ",
                "2": "We ask you to help us change lives!"
            }
        },
        "3": {
            "title": "Supporting programs",
            "p1": "By directed donations you can support the operation of our continuos projects. Doing so please write the name of the project which you wish to support into the message box of the money transfer"
        },
        "4": {
            "title": "Donation of service and material donations",
            "p1": "The most important thing for us is the well being of our beloved community in Manafwa. To provide our very best throughout our projects, and offer real and effective help we need a stable helping team in the background.",
            "p2": "Choose from the list below to support the steady operation of the organization, and by doing so do your bit to allow us to help the most in Manafwa.",
            "p3": "If you help us, you help them!",
            "p4": {
                "li1": "Graphical design",
                "li2": "Video making",
                "li3": "booking rooms (for events)",
                "li4": "Studio photos (for campaigns)",
                "li5": "Laptops",
                "li6": "Projectors",
                "li7": "Cameras (for the local team)",
                "li8": "Smartphones (for the local helpers)"
            }
        },
        "5": {
            "title": "Organizational donations",
            "p1": "We offer to perform interactive courses throughout the country on organizational events, family days and on team-building events. Moreover we accept and appreciate all material and financial support of any organizations willing to aid our running projects."
        }
    }
}
</i18n>