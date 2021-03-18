<template>
  <div class="content">
    <heading>
      <div slot="main">Graduate a Girl</div>
      <div slot="description">Ugandai oktatástámogatási program</div>
    </heading>
    <container>
      <section>
        <p>
          A lányok oktatása az egyik legerősebb és leghatékonyabb fegyver, amit
          bevethetünk a globális szegénység felszámolására. Amikor egy lány
          legalább a középiskola végéig az oktatásban maradhat, az életeket
          változtat. Nem csak az övét, hanem a jelenlegi és leendő családjáét,
          és az egész közösségét, amelyben él.
        </p>
        <div class="text-and-pic">
          <div class="text">
            <p>
              Kutatások bizonyítják, hogy azok a lányok, akik befejezték a
              középiskolát, tudatosabbak lesznek a családtervezésben, jobb az
              egészségi állapotuk, alacsonyabb a körükben a HIV fertőzöttek
              száma, alacsonyabb a munkanélküliség és magasabb bérrel járó
              munkákat végeznek. Az is kimutatható, hogy a tanult nők gyerekei
              sokkal magasabb számban és hosszabb ideig vesznek részt az
              oktatásban, mint az alacsony iskolai végzettséggel rendelkezőké,
              így ebből is látszik, hogy egy lány oktatásának több generáción
              átívelő hatása van.
            </p>
            <p>
              Manafwában jelenleg a lányok többsége maximum az általános iskola
              5.- 6. osztályáig jut el. 13 -14 évesen kell feleséggé válniuk és
              nem sokkal idősebbek akkor sem, amikor első gyermekükkel
              várandósak lesznek. A családok nagy szegénységben élnek és mivel
              az egyre magasabb osztályok egyre magasabb tandíjjal járnak,
              elérkezik a pont, amikor nem tudják tovább fizetni az iskolát a
              gyermeküknek, nem tudják tovább gondját viselni és nincs más
              lehetősége a túlélésre, csak az, hogy férjhez megy. A Graduate a
              Girl program azzal a céllal indul útjára, hogy megakadályozzuk,
              hogy ezeknek a lányoknak az élete és sorsa megpecsételődjön
              pusztán az által, hogy hová születtek, hogy segítsük őket abban,
              hogy eljuthassanak a középiskolai érettségiig. Hiszünk benne, hogy
              minden gyereknek joga van a minőségi oktatáshoz, valamint abban,
              hogy a lányoknak ugyanolyan esélyeket kell biztosítani, mint a
              hasonló korú fiúknak.
            </p>
            <p>
              Csatlakozz hozzánk és segíts! Váltsuk valóra az álmaikat,
              változtassunk életeket! A havi támogatás összege 6500 forint,
              amely magában foglalja a kiválasztott lány tandíját, tanszereit és
              szükség esetén az orvosi ellátását.
            </p>
            <p>
              Kérdés esetén fordulj bizalommal hozzánk az
              <a href="mailto:info@szivembenafrika.org"
                >info@szivembenafrika.org</a
              >
              email címen.
            </p>
          </div>
          <div class="pic">
            <img
              src="@/assets/images/graduate-a-girl/graduate-a-girl.jpg"
              alt=""
            />
          </div>
        </div>
        <p>
          Ha szívesen támogatnád havi 6500 forinttal egy lány oktatását, szintén
          írj a fenti email címre, küldd el a kiválasztott lány nevét, mi pedig
          küldünk neked minden további szükséges információt.
        </p>
      </section>
      <section>
        <div class="girls">
          <div class="sub-heading">Lányok</div>
          <Gallery :items="girls" />
        </div>
      </section>
    </container>
  </div>
</template>

<style lang="scss" scoped>
.girls {
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
import { Bio } from '@/interfaces/bio'

@Component({
  name: 'GraduateAGirl',
  components: { container, heading, Gallery },
})
export default class GraduateAGirl extends Vue {
  girls: Bio[] = [
    {
      name: 'Hasacha Moureen',
      image: 'graduate-a-girl/girls/Hasacha-Moureen.jpeg',
      shortBio: [
        'Kor: 12',
        'Iskola: Általános iskola 3. osztály',
        'Testvérek száma: 5',
      ],
      longBio: [
        'A családban lévő gyerekek anyjukkal élnek, miután apjuk egy balesetben életét vesztette. Anyjuk alkalmi munkákat tud vállalni, amely általában bérföldművelés. Ebből némi bevételt szerez a családnak, de sokat nélkülöznek, nem minden gyerek tud folyamatosan iskolába járni.',
      ],
      objectPosition: '50% 10%',
    },
    {
      name: 'Ariho Nicholas',
      image: 'graduate-a-girl/girls/Ariho-Nicholas.jpeg',
      shortBio: [
        'Kor: 13',
        'Iskola: Általános iskola 7. osztály',
        'Testvérek száma: 1',
      ],
      longBio: [
        'Eredetileg Uganda nyugati részéről származik az édesanya és két gyermeke, viszont a mindennapi bántalmazások miatt elmenekültek onnan. Úgy kerültek Manafwába, hogy férje elől – aki rendszeresen erőszakolta az anyát s verte gyermekeit, a lehető legtávolabb akart kerülni, ahol nem talál rá a családra.',
        'Az édesanya jelenleg az egyesület fenntartásában lévő iskola szakácsa, így szerény jövedelme mellett, egyedülálló anyaként próbálja eltartani magát és két gyerekét. Kislánya Miracle bent van gyermektámogatási programunkban, és már jelképes örökbefogadóra lelt.',
        'Ariho nagyon életvidám fiú, bár kicsit félénk, vélhetően a gyerekkori megpróbáltatások miatt. Szeretne tovább tanulni és középiskolába járni. Jelenleg ő az egyetlen fiú a Graduate a Girl programban.',
      ],
      objectPosition: '50% 20%',
    },
    {
      name: 'Nasike Judith',
      image: 'graduate-a-girl/girls/Nasike-Judith.jpeg',
      shortBio: [
        'Kor: 11',
        'Iskola: Általános iskola 4. osztály',
        'Testvérek száma: 4',
      ],
      longBio: [
        '11 éves, általános iskola negyedik osztályos. 4 testvére van, 3 lány és egy 7 éves kisfiú Sam, aki súlyos testi és szellemi fogyatékkal él.',
        'Szüleik gyakran veszekszenek a gyerekek előtt és van rá példa, hogy őket is megütik. Az apa nem akarja fizetni a lányok tandíját, azt mondja, ha az anya szeretné, hogy iskolába járjanak, teremtse elő számukra a szükséges összeget. Ez sajnos kivitelezhetetlen. Általában naponta egyszer tudnak csak enni, este, hogy ne feküdjenek le éhesen.',
        'Judith sokszor az anyukája helyett is dolgozik és helyt áll. Van, hogy iskola közben neki kell hazamennie a beteg testvérét felügyelni, ehhez ki kell hagynia órákat az iskolából. Az iskolája 2 órányira van otthonról, már 6 előtt elindul otthonról, hogy beérjen a kezdésre.',
        'Judith nagyon empatikus, előszeretettel segít másokon.',
      ],
      objectPosition: '50% 10%',
    },
  ]
}
</script>