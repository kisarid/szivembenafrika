<template>
  <div class="content">
    <heading>
      <div slot="main">{{ $t('main') }}</div>
    </heading>
    <container>
      <section>
        <p>
          <b>{{ $t('1.title') }}: </b>{{ $t('1.text') }}
        </p>
        <div class="text-and-pic">
          <div class="text">
            <p>
              <b>{{ $t('2.title') }}: </b>{{ $t('2.text') }}
            </p>
            <p>
              <b>{{ $t('3.title') }}: </b>{{ $t('3.text') }}
            </p>
            <p>
              <b>{{ $t('4.title') }}: </b>{{ $t('4.text') }}
            </p>
            <p>
              <b>{{ $t('5.title') }}: </b>{{ $t('5.text') }}
            </p>
            <p>
              <b>{{ $t('6.title') }}: </b>{{ $t('6.text') }}
            </p>
          </div>
          <div class="pic">
            <img src="@/assets/images/principles.jpg" alt="" />
          </div>
        </div>
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

<i18n>
{
  "hu": {
    "main": "Alapelvek",
    "1": {
      "title": "Humanitárius fejlesztés és nem segély",
      "text": "a munkánk egyik legfőbb rendezőelve az, hogy nem hiszünk abban, amikor valaki csak és kizárólag segélyezéssel szeretne megoldani egy problémát, mert az csak egy újabb kiszolgáltatottságot eredményez. Azt, hogy a megsegített függjön a segítőjétől. Mi fejleszteni szeretnénk és képessé tenni az embereket arra, hogy saját maguk változtassanak az életükön. Hiszünk benne, hogy hatalmas erő rejlik abban, amikor az ember megérzi, hogy vannak lehetőségei, hogy hozhat döntéseket az élete alakulásáról. Persze a mi projektjeinkben is felfedezhetőek segélyezési elemek is, hiszen van, hogy erre van szükség. Egy egyszerű példával élve: tudjuk, hogy feleslegesen szeretnénk tanítani bármit is, ha addigra mire megtanulnák az adott dolgot éhen halnának."
    },
    "2": {
      "title": "Kontinenseken átívelő tisztelet és a kulturális sokszínűség szeretete",
      "text": "minden programelemünknél maximálisan figyelembe vesszük és tiszteletben tartjuk a helyi tradíciókat és szokásokat. Mi soha nem azt mondjuk, hogy „csináld ezt…” vagy „ne csináld azt..”, hanem mindig csak rávilágítunk a lehetőségre, hogy lehet ezt máshogyan is. Abban hiszünk, hogy a segítség csak akkor lehet igazán sikeres és tartós, ha a megsegített emberek is magukénak érzik azt. Az a projekt, ami nem az ő igényeiken és szükségleteiket alapszik egyszerűen nem lehet sikeres."
    },
    "3": {
      "title": "Szakmaiság",
      "text": "Hiszünk abban, hogy soha nem kutatásoknak és elméleteknek kell, hogy kijelöljék az irányt egy egy ilyen projekthez, hanem a közösség problémái és álmai. Ahogy haladunk előre meghallgattunk sok sok álmot, aztán van, aki rámutatott egy őt érintő problémára, aztán ahogy haladunk tovább, találkozunk valakivel, aki még messzebbre mutatott. Ezeknek a találkozásoknak és meghallgatott álmoknak és problémáknak a nyomán születnek meg a projektjeink. Mielőtt belevágunk valamelyiknek a megvalósításába, nagyon fontosnak tartjuk, hogy szakirodalmi és terepkutatás előzze azt meg."
    },
    "4": {
      "title": "Átláthatóság és teljes transzparencia",
      "text": "egyrészt a helyiek felé, hiszen nagyon fontos nekünk, hogy mindig minden nyíltan legyen feléjük kommunikálva, tudják és értsék, hogy mi miért történik. Másrészt pedig a támogatóink felé és azok felé, akik érdeklődnek a munkánk iránt. Fontosnak tartjuk, hogy elérhetőek és érthetőek legyünk mindenki számára."
    },
    "5": {
      "title": "Fenntarthatóság",
      "text": "az ENSZ által kitűzött fenntartható fejlődési célok értelmében, a környezetvédelmi szempontok szerint és a projektek fenntarthatósága szempontjából is."
    },
    "6": {
      "title": "A helyben maradás segítése",
      "text": "Ez az országon belül is fontos, sőt ott fontos csak igazán, hiszen sokan mennek a városokba a vidéki területekről, de a nagy városok nem csak nagy reményeket, de az esetek többségében nagy csalódást is jelentenek. Lehet, hogy valaki egy faluban szegény ugyan, de a szegénységnek van egy megtartó ereje, amíg a városban nyomor vár rá, ami szegregál."
    }
  },
  "en": {
    "main": "Principles",
    "1": {
      "title": "Humanitarian development, not aid",
      "text": "One of the most important principles within our job, is to teach and empower people to change their circumstances for themselves.  This is a far better than simply providing financial aid alone, as this leads to greater vulnerability. We believe in the power of an individual realising they have options, and that they can make decisions about their lives. Of course, you can find aid elements in our projects as well, simply because it does happen, that this is what people need. The provision of Aid may be necessary when there isn’t time for the acquisition of new skills by individuals or communities, because starvation may occur before the required skills have been learnt and applied."
    },
    "2": {
      "title": "Respect that spanning across continent and the love of cultural variation",
      "text": "We take in to account a variety of elements in all our projects, and respect local traditions and customs. We never say, ‘do this’ or ‘don’t do that’, instead, we explore all of the options with which to do things. We believe that help can only be successful and long lasting, if the people we help are able to apply their newly acquired skills autonomously. A project which is not based on their needs, cannot be successful."
    },
    "3": {
      "title": "Professionalism",
      "text": "We believe the community’s problems and dreams should pinpoint a project’s directions, and not just researches and theories. As we progressed further and listened to the people’s dreams, there was always someone who had taken us even further. All of our projects have created by these meetings, dreams and issues we have listened to. However, before we realise any of these projects, we feel it’s important to conduct a research: theoretical as well as field research."
    },
    "4": {
      "title": "Transparency",
      "text": "We owe it first of all to the local community, as we find it very important to communicate everything to them openly, and for them to know and understand what is happening and why. Secondly, to our supporters and towards those who are interested in our work. We think it’s very important to be approachable and comprehensible to everyone."
    },
    "5": {
      "title": "Sustainability",
      "text": "Sustainability is important as per the UN’s sustainable development goals, for environmental reasons as well as it’s important for the maintainability of our projects."
    },
    "6": {
      "title": "Helping to stay local",
      "text": "This is also important within the country, especially on the countryside, because lot of people are moving to the cities from the rural areas, however the big cities promising not just big hopes, but, in most cases, containing big disappointments too. A person can be poor in a village, but the poorness has a preserving force, while in the city, there’s only the segregating poverty waiting for them."
    }
  }
}
</i18n>