<template>
  <div class="content">
    <heading>
      <div slot="main">{{ $t('main.title') }}</div>
      <div slot="description">{{ $t('main.text') }}</div>
    </heading>
    <container>
      <section>
        <div class="sub-heading center">{{ $t('1.title') }}</div>
        <p>{{ $t('1.p1') }}</p>
        <p>{{ $t('1.p2') }}</p>
        <p>{{ $t('1.p3') }}</p>
        <p>{{ $t('1.p4') }}</p>
        <p>{{ $t('1.p5') }}</p>
        <div class="pic-grid">
          <div class="pic">
            <img src="@/assets/images/projects/noi-program-1.jpg" alt="" />
          </div>
          <div class="pic">
            <img src="@/assets/images/projects/noi-program-2.jpg" alt="" />
          </div>
          <div class="pic">
            <img src="@/assets/images/projects/noi-program-3.jpg" alt="" />
          </div>
          <div class="pic">
            <img src="@/assets/images/projects/noi-program-4.jpg" alt="" />
          </div>
        </div>
        <div class="sub-heading center">{{ $t('2.title') }}</div>
        <div class="text-and-pic three-two">
          <div class="text">
            <p>{{ $t('2.p1') }}</p>
            <p>{{ $t('2.p2') }}</p>
          </div>
          <div class="pic" style="display: flex; justify-content: center">
            <img
              src="@/assets/images/projects/84-nap-logo.png"
              alt=""
              style="max-width: 300px"
            />
          </div>
        </div>
        <p>{{ $t('2.p3') }}</p>
        <p>{{ $t('2.p4') }}</p>
        <div class="text-and-pic">
          <div class="text">
            <div class="sub-heading">{{ $t('3.title') }}</div>
            <ul>
              <li>{{ $t('3.p1.li1') }}</li>
              <li>{{ $t('3.p1.li2') }}</li>
              <li>{{ $t('3.p1.li3') }}</li>
              <li>{{ $t('3.p1.li4') }}</li>
            </ul>
            <div class="sub-heading">{{ $t('4.title') }}</div>
            <p>{{ $t('4.p1') }}</p>
            <p>{{ $t('4.p2') }}</p>
            <p>{{ $t('4.p3') }}</p>
            <p>{{ $t('4.p4') }}</p>
            <p>{{ $t('4.p5') }}</p>
            <p>{{ $t('4.p6') }}</p>
          </div>
          <div class="pic">
            <img src="@/assets/images/projects/84-nap-1.jpg" alt="" />
          </div>
        </div>
        <p>{{ $t('4.p7') }}</p>
        <p>{{ $t('4.p8') }}</p>
        <div class="sub-heading">{{ $t('5.title') }}</div>
        <p>{{ $t('5.p1') }}</p>
        <p>{{ $t('5.p2') }}</p>
        <p>{{ $t('5.p3') }}</p>
        <div class="sub-heading center">{{ $t('6.title') }}</div>
        <p>{{ $t('6.p1') }}</p>
        <p>{{ $t('6.p2') }}</p>
        <div class="pic-grid">
          <div class="pic">
            <img
              src="@/assets/images/projects/gyermektamogatas-projekt-1.jpg"
              alt=""
            />
          </div>
          <div class="pic">
            <img
              src="@/assets/images/projects/gyermektamogatas-projekt-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="sub-heading center">{{ $t('7.title') }}</div>
        <p>{{ $t('7.p1') }}</p>
        <p>{{ $t('7.p2') }}</p>
        <p>{{ $t('7.p3') }}</p>
        <p>{{ $t('7.p4') }}</p>
        <div class="pic-grid">
          <div class="pic">
            <img src="@/assets/images/projects/iskolafejlesztes-1.jpg" alt="" />
          </div>
          <div class="pic">
            <img src="@/assets/images/projects/iskolafejlesztes-2.jpg" alt="" />
          </div>
        </div>
        <div class="sub-heading center">{{ $t('8.title') }}</div>
        <div class="text-and-pic">
          <div class="text">
            <p>{{ $t('8.p1') }}</p>
            <p>{{ $t('8.p2') }}</p>
          </div>
          <div class="pic">
            <img
              src="@/assets/images/projects/graduate-a-girl-projekt-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="sub-heading center">{{ $t('9.title') }}</div>
        <p>{{ $t('9.p1') }}</p>
        <p>{{ $t('9.p2') }}</p>
        <ul style="margin-bottom: 25px;">
          <li>{{ $t('9.p3.li1') }}</li>
          <li>{{ $t('9.p3.li2') }}</li>
          <li>{{ $t('9.p3.li3') }}</li>
          <li>{{ $t('9.p3.li4') }}</li>
          <li>{{ $t('9.p3.li5') }}</li>
          <li>{{ $t('9.p3.li6') }}</li>
          <li>{{ $t('9.p3.li7') }}</li>
          <li>{{ $t('9.p3.li8') }}</li>
          <li>{{ $t('9.p3.li9') }}</li>
          <li>{{ $t('9.p3.li10') }}</li>
        </ul>
        <div class="pic-grid">
          <div class="pic">
            <img src="@/assets/images/projects/eu-1.jpg" alt="" />
          </div>
          <div class="pic">
            <img src="@/assets/images/projects/eu-2.jpg" alt="" />
          </div>
          <div class="pic">
            <img src="@/assets/images/projects/eu-3.jpg" alt="" />
          </div>
          <div class="pic">
            <img src="@/assets/images/projects/eu-4.jpg" alt="" />
          </div>
        </div>
      </section>
    </container>
  </div>
</template>

<style lang="scss" scoped>
.pic-grid {
  display: grid;
  grid-template: auto / 1fr;
  gap: 15px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    grid-template: auto / 1fr 1fr;
  }
}

.text-and-pic {
  margin-bottom: 30px;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'

@Component({
  name: 'Projects',
  components: { container, heading },
})
export default class Projects extends Vue {}
</script>

<i18n>
{
    "hu": {
        "main": {
            "title": "Projektjeink",
            "text": "Mi a Szívemben Született Afrika Egyesületnél sokan vagyunk és különbözőek, de mindannyian ugyanazért a célért dolgozunk: hogy embereknek ne csak hosszabb, de minőségi, méltóságteljes életük lehessen. Hiszünk abban, hogy a hatékony segítségnyújtás elengedhetetlen alappillére a megismerés, így minden programunkat a terepen begyűjtött szakmai tapasztalatokra építve dolgozzuk ki."
        },
        "1": {
            "title": "Női program",
            "p1": "Programjaink fő fókuszában a nők helyzetének javítása, az ő megsegítésük áll. A nők helyzete az egész világon teremt megoldandó problémákat, viszont Afrikában igazán súlyos a helyzetük. Az afrikai nők vállát nagyon sok teher nyomja, de kevés a lehetőségük, viszont nagyon nagy a potenciál bennük.",
            "p2": "Hiszünk abban, hogy mindent meg kell tenni azért, hogy a nemek közti egyenlőtlenségek csökkenjenek, és végleg megszűnjenek. Hiszünk abban, hogy minden közösségben kulcs szerepe van a nőknek, így ha az ő helyzetüket javítjuk, a közösség egészének a helyzete javulni fog. Manafwában a felnőtt korú nők többsége vagy egyáltalán nem is járt iskolába, vagy nagyon fiatalon abba kellett hagynia. Nőkkel foglalkozó programunknak van egy elméleti és gyakorlati része is.",
            "p3": "Elméleti: higiéniai oktatás, tudatos családtervezés, természetes fogamzásgátlás, gazdasági alapismeretek.",
            "p4": "Gyakorlati: olyan dolgokat tanulnak, amelyek egyrészt a házkörüli mindennapjaikat segítik, másrészt pénzkereseti lehetőséget biztosít számukra. Például: bel- és külpiacon egyaránt értékesíthető kézműves termékek elkészítése, szakképzés (első sorban szabás-varrás), egyéb szolgáltatások (pl.fodrászat).",
            "p5": "Női programjainkkal további célunk, hogy a gyerekek kapjanak egy példát, lássák, hogy a szülőnek is érték a tanulás, leckét ír, képzi magát, otthon is gyakorol. Nő a nők közösségen belüli megbecsültsége és nő az önbizalmuk, a saját magukba vetett hitük."
        },
        "2": {
            "title": "84 nap projekt",
            "p1": "Képzeld el milyen lenne, ha egy évben 84 napra kiesnél az iskolából vagy a munkádból. Képzeld el, mennyi tudásból, lehetőségből és élményből maradnál akkor ki? A szub-szaharai Afrikában élő kamaszlányoknak és nőknek, nem kell ezen gondolkodniuk. Nem kell kényszeríteniük magukat arra, hogy el tudják ezt képzelni, hiszen ez a valóságuk. Igen, bizony, jól olvastad! Abban a térségben átlagosan ennyi napot kell az iskolából és a munkahelyről távol maradniuk a nőknek a menstruációs szegénység, a tabuk és tévhitekből eredő „period shaming” miatt.",
            "p2": "A projekt programjai alapvetően olyan témákkal foglalkoznak, amelyekkel már korábban is dolgoztunk vagy elkezdtünk dolgozni, mint – a teljesség igénye nélkül - a menstruációs szegénység, a „period shaming”, a családonbelüli és szexuális erőszak, a gyermekházasság és leányanyas lányok és az oktatás helyzete.",
            "p3": "Felmerülhet bennetek a kérdés, hogy miért választottuk ezt a főleg a menstruációs szegénységre reflektáló 84 nap elnevezést egy ilyen szerteágazó programnak?! A válasz egyszerű: hiszünk abban, hogy a fentiekben felsorolt problémák nagyon sok esetben közös tőről fakadnak, és nem tudunk az egyik területen segíteni úgy, hogy egy másikat figyelmen kívül hagyunk. A munkánk egyik legfontosabb alapelve mindig is az volt, hogy összetett problémára, összetett megoldást kell kínálni.",
            "p4": "Hiszünk abban, hogy tabukat le kell dönteni, a stigmatizálást fel kell számolni és meg kell teremtenünk azt a békés, biztonságos és bátorító  közeget, ahol ezek a fantasztikus, okos és bátor lányok és nők nem élnek többé félelemben, nem élnek többé kiszolgáltatottan, nem járnakleszegett fejjel, hanem megérzik és elhiszik a bennük rejlő képességet és végtelen lehetőséget arra, hogy a hozzájuk méltó életet élhessék."
        },
        "3": {
            "title": "Menstruációs szegénység felszámolása",
            "p1": {
                "li1": "Testtudat",
                "li2": "Termékenységtudat",
                "li3": "Mosható intimbetét készítés",
                "li4": "Tabuk ledöntése: férfiak oktatása is"
            }
        },
        "4": {
            "title": "Nők és lánygyermekek elleni erőszak",
            "p1": "A nők és lánygyermekek elleni erőszak bármilyen formája megsértése és semmibevétele az alapvető emberi jogoknak, és ez a probléma világszerte minden harmadik nőt érint.",
            "p2": "Nők milliói szenvednek el valamilyen erőszakot az életük során, ideértve a fizikai vagy mentális bántalmazást, szexuális erőszakot, szexuális kizsákmányolást, gyermekházasságot vagy akár a leányanyaságot is.",
            "p3": "Az áldozatok túlélőinek különböző mentális és fizikai sérülésekkel kell tovább élniük, mint például a poszt traumás stressz szindróma, a depresszió, a töréssel és vérzéssel járó sérülések, a HIV és más nemi úton terjedő betegségek vagy a nem kívánt terhesség.",
            "p4": "Hosszabbtávon az erőszak és az ettől való félelem ahhoz vezethet, hogy a lányok kiesnek az oktatásból, hogy nem választhatják meg, kihez menjenek férjhez és nem tudják kibontakoztatni a bennük rejlő tehetséget és lehetőséget.",
            "p5": "Ezért is döntöttünk úgy, hogy felvesszük a harcot a nők ellenei erőszakkal. Nem csak reagálni szeretnénk a problémára és segíteni az áldozatoknak, hanem nagy hangsúlyt fektetünk azokra a programjainkra, amelyek a prevenciót segítik.",
            "p6": "A nők elleni erőszak sajnos egy globális jelenség, de azok a nők és lányok, akik szegénységben élnek még nagyobb veszélynek vannak kitéve.",
            "p7": "A bántalmazás a lányok, nők mindennapjainak az elfogadott része. Célunk egy olyan védőháló létrehozása, amely védelmet és segítséget nyújt számukra már az áldozattá válás előtt.",
            "p8": "Szemlélet formálással és oktatással pedig szeretnénk, ha a fent említett problémák nem csak visszaszorulnának, de meg is szűnnének a közösségen belül."
        },
        "5": {
            "title": "Gyermekházasság és leányanyaság felszámolása",
            "p1": "Azok a lányok, akik gyermekként házasságra kényszerülnek sokkal nagyobb eséllyel válnak családon belüli erőszak áldoza azok akik felnőttként, szabad választással házasodnak.",
            "p2": "A gyermekházasság ellopja a gyerekkorukat, a tanulási lehetőségüket, az egészségüket és a szabadságukat és a legtöbb esetben egész hátralévő életükre erőszak áldozatává teszi őket. A házasságot pedig rövid időn belül az követi, hogy leányanyává kell válniuk. Ezek a lányok egyszerűen még sem fizikailag, sem érzelmileg nem állnak készen a szexuális életre, a várandósságra és a szülésre.",
            "p3": "Szeretnénk, ha a közösségben ahol dolgozunk, a gyermekházasság tradíciója véget érne, ezért edukáljuk a közösség tagjait, rangidős döntéshozóit, a szülőket és magukat a fiatal lányokat és fiúkat is a gyermekházasság negatív hatásairól. Bíztatjuk a lányokat arra, hogy találjanak rá a hangjukra és merjenek nem-et mondani."
        },
        "6": {
            "title": "Gyermektámogatási program",
            "p1": "Hiszünk abban, hogy minden gyermeknek jár a boldog, biztonságos gyerekkor, az oktatás és az esély egy jó életre. Ugandában sajnos nem ingyenes az oktatás és mivel a családok nagy része a szegénységi küszöb alatt él, az, hogy iskolába járjon, egy gyerek luxusnak számít. Gyermektámogatási programunk keretében havi 5000Ft-os adományért a támogató jelképes örökbefogadó szülővé válhat. Ez az az összeg, amely fedezi egy gyerkőc oktatását, tanszereit, étkezését és szükség esetén az orvosi ellátását. Mi pedig rendszeres időközönként hírt adunk a gyerkőc fejlődéséről, tanulmányi eredményeiről, fontosabb életeseményeiről, valamint küldünk róla fotókat, videókat.",
            "p2": "A jelképes örökbefogadó szülőkre váró gyermekek fotóit és történeteit a „Gyermektámogatás” menüpont alatt találod."
        },
        "7": {
            "title": "„Shine” Iskolafejlesztési program",
            "p1": "Manafwában 2020.februárjára felépült egyesületünk iskolája – Shine Nursery and Primary School - ahol a vidéki környezetben egyedülállóan jó színvonalon tanulhatnak a falubeli gyerekek. Jelenleg 3 óvodai csoport és két általános iskolai osztály van. Az iskola építése folyamatosan zajlik, a jövőben megépítésre kerülnek tovább tantermek, illetve nagy vágyunk, hogy játszótér, konyhakert és könyvtár is kialakításra kerülhessen.",
            "p2": "Nagyon fontosnak tartjuk, hogy a gyerekek kezdettől minőségi alapfokú oktatásban részesülhessenek.",
            "p3": "Jelenleg kidolgozás alatt áll egy sporttehetség gondozó programunk az iskola diákja körében, hiszen a sportnak megtartó ereje van és az időben felfedezett és gondozott tehetség kitörést jelenthet a nehéz sorsból.",
            "p4": "Nagyon sokat érdeklődnek Magyarországról és mi fontosnak tartjuk, hogy öregbítsük országunk hírnevét, úgyhogy ezek a gyermekek tudják, hogy hogy néz ki a Balaton, mi az a puli és ettek már Pilóta kekszet."
        },
        "8": {
            "title": "Graduate a Girl - oktatástámogatási program",
            "p1": "A lányok oktatása az egyik legerősebb és leghatékonyabb fegyver, amit bevethetünk a globális szegénység felszámolására. Manafwában jelenleg a lányok többsége maximum az általános iskola 5.- 6. osztályáig jut el. 13 -14 évesen kell feleséggé válniuk és nem sokkal idősebbek akkor sem, amikor első gyermekükkel várandósak lesznek. A program azzal a céllal indul útjára, hogy megakadályozzuk, hogy ezeknek a lányoknak az élete és sorsa megpecsételődjön pusztán az által, hogy hová születtek, hogy segítsük őket abban, hogy eljuthassanak a középiskolai érettségiig. Havi 6500Ft-os adománnyal segítheti a támogató egy kamasz lány oktatását. Ez az összeg fedezi az oktatását és szükség esetén az orvosi ellátását.",
            "p2": "A programról bővebben a „Graduate a Girl” menüpont alatt olvashatsz, és itt találod a támogatóra váró lányoknak a fotóját és történetét."
        },
        "9": {
            "title": "Egészségügyi program",
            "p1": "Hiszünk abban, hogy minden embernek jár, hogy a lehető legegészségesebb életet élje, és amikor megbetegszik, megkapja a számára szükséges segítséget. Rendszeres orvosi misszióink alkalmával a gyógyítás mellett nagy hangsúlyt fektetünk az oktatásra, betegedukációra és megelőzés különböző formáira, illetve helyi egészségügyi dolgozók képzésére is, hogy akkor se késsen a segítség, ha mi nem vagyunk ott.",
            "p2": "Egészségügyi programunk legfőbb elemei:",
            "p3": {
                "li1": "Szükséges és hiányzó vakcináció beadása, pótlása",
                "li2": "Általános egészségügyi szűrések megszervezése a falubeliek számára",
                "li3": "Alapvető csecsemő- és várandósgondozás oktatása",
                "li4": "Szemészeti szűrővizsgálatok megszervezése",
                "li5": "Rendszeres, széleskörű féreghajtás",
                "li6": "Csecsemők és gyermekek növekedésének, fejlődésének folyamatos követése, szükség esetén orvosi segítség nyújtása",
                "li7": "HIV/AIDS szűrés, edukáció és a szükséges kezelés megszervezése",
                "li8": "Általános nőgyógyászati és HPV szűrőprogram felállítása",
                "li9": "Malária és más trópusi fertőzések szűrése, kezelése és az ezzel kapcsolatos edukáció",
                "li10": "Közhigiénés viszonyok javítása, infekció és járványkontroll technikák tanítása, bevezetése"
            }
        }
    },
    "en": {
        "main": {
            "title": "Our projects",
            "text": "We, at the Szívemben Született Afrika organisation, are all different, however we all work towards the same goal: to enable people to have a graceful, quality life, not just to live longer. We believe, the base of giving help is knowledge, therefore we develop our projects using the knowledge and experiences we have gathered on the field."
        },
        "1": {
            "title": "Women’s programme",
            "p1": "The focus of these projects is on improving the circumstances of women, and helping them. The issues that affect women are worldwide, however it’s particularly bad in Africa. The African women are under lots of pressure, but don’t have many opportunities, even though they all have lot of potentials.",
            "p2": "We believe we should do everything in our power to close the gap in gender inequalities, and even make it disappear altogether. We believe, in every communities women are key figures, therefore if their circumstances improved, the whole community’s would improve too. In Manafwa, either most of the adult women have never gone to school, or they had to stop going to school very young. Our women’s project have a theoretical and a practical part.",
            "p3": "Theoretical: hygienic studies, family planning, natural birth controls, basic economics.",
            "p4": "Practical: firstly, they learn about things that will make their everyday chores easier, secondly, they learn skills that enable them to earn money. For example: creating craft works that they can sell locally as well as to abroad, vocational training (mainly tailoring) and other services (e.g. hairdressing).",
            "p5": "Our other goal with the women’s project is that the children to have a role model, to see, that studying is important for the parent too, making their homework, educating themselves, and practising at home. The respect towards women within the community will grow, and therefore their self-esteem and their faith in themselves will grow too."
        },
        "2": {
            "title": "84 days project",
            "p1": "Imagine what it’d be like to be missing out of school or work for 84 days every year. Imagine how much knowledge, opportunities and experiences you would miss out on. Teenage girls and women living in sub-saharan Africa don’t have to have a think on this. They don’t have to try and imagine this, because this is their reality. Yes, you read it right. In this region, this is how much in average teenage girls and women have to skip school and work due to menstrual poverty, taboos and period shaming, that are all originating from heterodoxies.",
            "p2": "All programmes in the project are working on topics that we have already worked on before, or started working on, such as period poverty, period shaming, sexual abusement within the family, child marriage, young girls becoming mothers and girls in education.",
            "p3": "You might ask the question, why did we choose the name 84 days, that refers to period poverty, to this very complex project? The answer is simple: we believe, that all the issues listed above, have the same origin, and we can’t help solving one issue and ignore another. One of our principle is, that for a complex issue we need to find a complex solution.",
            "p4": "We believe, that the taboos need to be broken down, we need to stop the stigmatisation and we need to create a peaceful, safe and encouraging environment, where these fantastic, smart and brave girls and women don’t have to live in fear anymore, don’t have to be vulnerable, don’t have to walk head down, instead, they feel and believe their inner skills and endless possibilities to live a life they deserve."
        },
        "3": {
            "title": "Ending period poverty",
            "p1": {
                "li1": "Body awareness",
                "li2": "Fertility awareness",
                "li3": "Washable sanitary pad production",
                "li4": "Breaking down taboos: educating the men too"
            }
        },
        "4": {
            "title": "Violence against women and girls",
            "p1": "Any form of violence against women and girls is a breach and disregard of the basic human rights, and this issue affects 1 in 3 women all across the globe.",
            "p2": "Millions of women will suffer from a form of violence in their life, including physical and mental abuse, sexual abuse, sexual exploitation, child marriage or even becoming mother at a very young age.",
            "p3": "The survivors will have to live with mental and physical damage, such as PTSD, depression, injuries such as broken bones, HIV and other sexually transmitted diseases or unwanted pregnancy.",
            "p4": "The violence and the fear it comes with, in the long term will result in the girls dropping out of school, they won’t have control over who they marry to and they will not be able to use their skills and talent to get ahead in life.",
            "p5": "For this reason, we have decided to fight against all form of violence against women. We don’t just want to respond to this problem and help the victims, but also want to put some emphasis on our projects that help prevent these violence.",
            "p6": "Violence against women and girls is unfortunately a global issue, however those women and girls living in poverty are affected even more.",
            "p7": "The abusement is a part of these girls’ and women’s everyday life. Our aim is to create a safety net, that provides protection and help for them, even before them becoming a victim.",
            "p8": "By changing the mentality and educating the people, we would like these issues to not just occurring less and less, but make them stop happening altogether."
        },
        "5": {
            "title": "Eliminating child marriages and early motherhood",
            "p1": "Those girls who have been forced into marriages at a young age are more likely to become a victim of violence, than those adult women who are married from their own decision.",
            "p2": "Child marriage will rob the girls from their childhood, their access to education, their health and their freedom, and in most cases, they will become the victims of violence for the rest of their life. The marriage will be followed by motherhood at a young age. These girls are not ready neither physically nor emotionally to become sexually active, for pregnancy and for giving birth.",
            "p3": "We would like if the tradition of child marriage stopped in the community we work with, and this is why we are educating the members of this community, the elders, the parents and the girls themselves as well as the boys about the negative impacts of child marriage. We encourage the girls to find their voice and to be brave to say no."
        },
        "6": {
            "title": "Child sponsorship programme",
            "p1": "We believe in that all children should have a happy and safe childhood, and all should have access to education and have a chance for a better life. Unfortunately, the education is not free in Uganda and because most of the families live in poverty, it’s a luxury to send the children to school. As a part of this project, the sponsor can become symbolically the adoptive parent of a child, for a monthly 5000 HUF donation. This donation will cover the child’s education, books, meals and their healthcare as and when it’s necessary. In return, we will send regular updates about the child’s development, grades, important life events and we will also send photos and videos of them.",
            "p2": "You can find the kids, who are still waiting for sponsors, in the “Sponsor a child” section of the website."
        },
        "7": {
            "title": "“Shine” school development project",
            "p1": " In Manafwa in February 2020, our school has been built – Shine Nursery and Primary School -, where the village’s children receive an outstanding education, one of the best in the whole of the countryside. At the moment there are 3 nursery groups and 2 primary school classes. The building work is continuously going, there will be more classrooms built, and our dream is to build a playground as well as a kitchen garden and a library too.",
            "p2": "We think it’s very important that the children receive good quality education right from the start.",
            "p3": "At the moment we are developing our sport talent nurturing programme for our school’s children, as sport brings people together and finding children who are talented can mean their break out from poverty.",
            "p4": "Lot of the kids are very interested in Hungary, and we think it’s important to keep our home country’s good reputation, so all these kids know what the lake Balaton looks like, what is the Puli and they have all eaten ‘Pilota’ biscuit."
        },
        "8": {
            "title": "Graduate a Girl – education sponsorship programme",
            "p1": "The girls’ education is one of the most powerful weapon we can use to put a stop to global poverty. The majority of girls in Manafwa only finishes Year 9 - at the most - in school. They have to get married when they are only 13-14 year of age, and not much older when they become pregnant with their first child. We started this programme with the aim to stop the burden of where they were born to, will decide the faith of their future, and to help them get to their A-levels. You can help the girls with a monthly 6500 HUF sponsorship. This amount will cover their education and health care as and when it’s needed.",
            "p2": "You can read more about the programme under the “Graduate a Girl” section on the website, and you can also find the photos and background information of the girls who are still waiting for a sponsor."
        },
        "9": {
            "title": "Healthcare project",
            "p1": "We believe, that all human being has the right to have the healthiest life possible, and to have access to medical help as and when necessary. During our regular medical missions, other than providing medical help for the residents, we put emphasis on the health education and prevention, as well as training local medical professionals, so that medical help will be available even when we are not there.",
            "p2": "Main elements of our health care project:",
            "p3": {
                "li1": "Administering vital and missing vaccinations",
                "li2": "Organising health checks for the local residents",
                "li3": "Basic pregnancy and newborn support training",
                "li4": "Organising eye care examinations",
                "li5": "Regular deworming",
                "li6": "Continuous development check of children and newborns, and medical support if necessary",
                "li7": "HIV/AIDS testing, education and organising the necessary medical support",
                "li8": "Basic gynaecological examinations and HPV testing",
                "li9": "Testing for malaria and other tropical diseases, providing treatment and education about these diseases",
                "li10": "Improving hygiene and education on infection and pandemic control measures, and the set up of these control measures"
            }
        }
    }
}
</i18n>