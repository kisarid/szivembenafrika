<template>
  <div class="content">
    <heading>
      <div slot="main">Alapelvek</div>
    </heading>
    <container>
      <section>
        <p>
          <b>Humanitárius fejlesztés és nem segély:</b> a munkánk egyik legfőbb
          rendezőelve az, hogy nem hiszünk abban, amikor valaki csak és
          kizárólag segélyezéssel szeretne megoldani egy problémát, mert az csak
          egy újabb kiszolgáltatottságot eredményez. Azt, hogy a megsegített
          függjön a segítőjétől. Mi fejleszteni szeretnénk és képessé tenni az
          embereket arra, hogy saját maguk változtassanak az életükön. Hiszünk
          benne, hogy hatalmas erő rejlik abban, amikor az ember megérzi, hogy
          vannak lehetőségei, hogy hozhat döntéseket az élete alakulásáról.
          Persze a mi projektjeinkben is felfedezhetőek segélyezési elemek is,
          hiszen van, hogy erre van szükség. Egy egyszerű példával élve: tudjuk,
          hogy feleslegesen szeretnénk tanítani bármit is, ha addigra mire
          megtanulnák az adott dolgot éhen halnának.
        </p>
        <div class="text-and-pic">
          <div class="text">
            <p>
              <b
                >Kontinenseken átívelő tisztelet és a kulturális sokszínűség
                szeretete:</b
              >
              minden programelemünknél maximálisan figyelembe vesszük és
              tiszteletben tartjuk a helyi tradíciókat és szokásokat. Mi soha
              nem azt mondjuk, hogy „csináld ezt…” vagy „ne csináld azt..”,
              hanem mindig csak rávilágítunk a lehetőségre, hogy lehet ezt
              máshogyan is. Abban hiszünk, hogy a segítség csak akkor lehet
              igazán sikeres és tartós, ha a megsegített emberek is magukénak
              érzik azt. Az a projekt, ami nem az ő igényeiken és
              szükségleteiket alapszik egyszerűen nem lehet sikeres.
            </p>
            <p>
              <b>Szakmaiság:</b> Hiszünk abban, hogy soha nem kutatásoknak és
              elméleteknek kell, hogy kijelöljék az irányt egy egy ilyen
              projekthez, hanem a közösség problémái és álmai. Ahogy haladunk
              előre meghallgattunk sok sok álmot, aztán van, aki rámutatott egy
              őt érintő problémára, aztán ahogy haladunk tovább, találkozunk
              valakivel, aki még messzebbre mutatott. Ezeknek a találkozásoknak
              és meghallgatott álmoknak és problémáknak a nyomán születnek meg a
              projektjeink. Mielőtt belevágunk valamelyiknek a megvalósításába,
              nagyon fontosnak tartjuk, hogy szakirodalmi és terepkutatás előzze
              azt meg.
            </p>
            <p>
              <b>Átláthatóság és teljes transzparencia:</b> egyrészt a helyiek
              felé, hiszen nagyon fontos nekünk, hogy mindig minden nyíltan
              legyen feléjük kommunikálva, tudják és értsék, hogy mi miért
              történik. Másrészt pedig a támogatóink felé és azok felé, akik
              érdeklődnek a munkánk iránt. Fontosnak tartjuk, hogy elérhetőek és
              érthetőek legyünk mindenki számára.
            </p>
            <p>
              <b>Fenntarthatóság:</b> az ENSZ által kitűzött fenntartható
              fejlődési célok értelmében, a környezetvédelmi szempontok szerint
              és a projektek fenntarthatósága szempontjából is.
            </p>
          </div>
          <div class="pic">
            <img src="@/assets/images/principles.jpg" alt="" />
          </div>
        </div>

        <p>
          <b>A helyben maradás segítése:</b> Ez az országon belül is fontos, sőt
          ott fontos csak igazán, hiszen sokan mennek a városokba a vidéki
          területekről, de a nagy városok nem csak nagy reményeket, de az esetek
          többségében nagy csalódást is jelentenek. Lehet, hogy valaki egy
          faluban szegény ugyan, de a szegénységnek van egy megtartó ereje, amíg
          a városban nyomor vár rá, ami szegregál.
        </p>
      </section>
    </container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'

@Component({
  name: 'Principles',
  components: { container, heading },
})
export default class Principles extends Vue {}
</script>