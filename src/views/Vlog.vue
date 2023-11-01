<template>
  <div class="content">
    <heading>
      <div slot="main">Vlog</div>
    </heading>
    <container>
      <section v-for="(gallery, gIndex) in galleries" :key="gIndex">
        <div class="sub-heading">{{ gallery.title }}</div>
        <p>{{ gallery.desc }}</p>
        <div class="video-gallery">
          <div v-for="(ep, eIndex) of gallery.eps.slice(0, 3)" :key="eIndex">
            <div class="vlog-heading">{{ eIndex + 1 }}. rész</div>
            <YoutubeVideo v-bind:url="ep" />
          </div>
        </div>
        <b-collapse v-bind:id="'gallery-' + gIndex">
          <div class="video-gallery">
            <div v-for="(ep, oIndex) of gallery.eps.slice(3)" :key="oIndex">
              <div class="vlog-heading">{{ oIndex + 4 }}. rész</div>
              <YoutubeVideo v-bind:url="ep" />
            </div>
          </div>
        </b-collapse>
        <div v-if="gallery.eps.length > 3" class="more-button link" v-b-toggle="'gallery-' + gIndex" variant="primary">
          <span class="when-open">Kevesebb Rész...</span>
          <span class="when-closed">További Részek...</span>
        </div>
      </section>
    </container>
  </div>
</template>

<style lang="scss" scoped>
section>div {
  margin-bottom: 0;
}

.vlog-heading {
  font-weight: bold;
  margin-block: 8px;
}

.more-button {
  text-align: right;
}

.collapsed>.when-open,
.not-collapsed>.when-closed {
  display: none;
}

@media (min-width: 768px) {
  .video-gallery {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'
import YoutubeVideo from '@/components/moyo/youtube-video.vue';

@Component({
  name: 'Vlog',
  components: { container, heading, YoutubeVideo },
})
export default class Vlog extends Vue {
  get galleries() {
    return [
      {
        title: this.$i18n.t('2023-spring.title') as string,
        desc: this.$i18n.t('2023-spring.desc') as string,
        eps: [
          'https://www.youtube-nocookie.com/embed/eiIDIQg1BmU',
        ]
      },
      {
        title: this.$i18n.t('2023-january.title') as string,
        desc: this.$i18n.t('2023-january.desc') as string,
        eps: [
          'https://www.youtube-nocookie.com/embed/4xD-M7rfHUw',
          'https://www.youtube-nocookie.com/embed/UPjEr1Z5H4k',
        ]
      },
      {
        title: this.$i18n.t('2022-fall.title') as string,
        desc: this.$i18n.t('2022-fall.desc') as string,
        eps: [
          'https://www.youtube-nocookie.com/embed/j3hXOyV-JWE',
          'https://www.youtube-nocookie.com/embed/VMrP_GksjXc',
          'https://www.youtube-nocookie.com/embed/4EF3cgYQYkc',
          'https://www.youtube-nocookie.com/embed/8PVEAFqv8dc',
        ]
      },
      {
        title: this.$i18n.t('2022-spring.title') as string,
        desc: this.$i18n.t('2022-spring.desc') as string,
        eps: [
          'https://www.youtube-nocookie.com/embed/0eSG6uV1YWM',
          'https://www.youtube-nocookie.com/embed/rQzr0upAi3E',
          'https://www.youtube-nocookie.com/embed/SKjz8qx0RH0',
          'https://www.youtube-nocookie.com/embed/l_9sHjbe3YM',
        ]
      },
      {
        title: this.$i18n.t('2021-fall.title') as string,
        desc: this.$i18n.t('2021-fall.desc') as string,
        eps: [
          'https://www.youtube-nocookie.com/embed/-9CmuP4lB88',
          'https://www.youtube-nocookie.com/embed/2kppsBe8vss',
          'https://www.youtube-nocookie.com/embed/k-QZu2GQafU',
          'https://www.youtube-nocookie.com/embed/jeaF2EjEPmQ',
          'https://www.youtube-nocookie.com/embed/ucEJRKE8cHQ',
          'https://www.youtube-nocookie.com/embed/PrHcf30Sfic',
          'https://www.youtube-nocookie.com/embed/p2LVw95V8Pc',
          'https://www.youtube-nocookie.com/embed/ooAEdnu6CKY',
        ]
      },
    ]
  }
}
</script>

<i18n>
{
  "hu": {
    "2021-fall": {
      "title": "2021. ősz, Uganda",
      "desc": "Zsófi és Czikkcakk Panni egy hónapra Ugandába utaztak és ebben a vlog sorozatban mutatják meg nektek, hogyan telnek a missziós mindennapjaik Manafwában."
    },
    "2022-spring": {
      "title": "2022. tavasz, Uganda",
      "desc": "Juli, Móni, Zoli és Zsófi Ugandába utaztak, ahol 3 hetet töltöttek Manafwában majd pedig felkerekedtek Uganda – ha nem a világ – egyik legszebb pontjára, a Murchinson Falls Nemzeti Parkba, sőt útközben még egy orrszarvú rezervátumot is meglátogattak."
    },
    "2022-fall": {
      "title": "2022. ősz, Uganda és Kenya",
      "desc": "Zsófi és Dr. Balázs hosszú útra pakoltak, ugyanis egy egy hónapig tartó misszióra utaztak Ugandába. Az eredeti úticél Manafwa volt, de aztán egy pár napos kitérőt tettek Karamojába is, ahol izgalmas új dolgok vették kezdetüket. Végül pedig Zsófi még egy hétre Kenyába is átutazott."
    },
    "2023-january": {
      "title": "2023. január, Kenya",
      "desc": "Zsófi, Balázs és Dr. Balázs januárban hosszas előkészítéseket követően útnak indultak az első önálló, nagyobb ívű kenyai missziónkra, amely során az idő első felében Mombassában és a tengerparti térségben voltak, majd pedig Nairobi nyomornegyedei felé vették az irányt."
    },
    "2023-spring": {
      "title": "2023. tavasz, Uganda",
      "desc": "És ismét adományok begyűjtve, csomagok készen, hiszen Panna, Juli és Zsófi Uganda felé vették az irányt, hogy a jelképes örökbefogadó szülők ajándékait és kedves üzeneteit továbbítsák az általuk támogatott gyerekeknek és összegyűjtsék az aktuális híreket a manafwai suli lurkóiról."
    }
  },
  "en": {
    "2021-fall": {
      "title": "Fall 2021, Uganda",
      "desc": "Zsófi and Czikkcakk Panni travelled to Uganda for a month and in this vlog series they will show you how their mission days are spent in Manafwa."
    },
    "2022-spring": {
      "title": "Spring 2022, Uganda",
      "desc": "Juli, Móni, Zoli and Zsófi travelled to Uganda, where they spent 3 weeks in Manafwa and then went to one of the most beautiful places in Uganda - if not the world - Murchinson Falls National Park, and even visited a rhino reserve on the way."
    },
    "2022-fall": {
      "title": "Fall 2022, Uganda and Kenya",
      "desc": "Zsófi and Dr. Balázs packed for a long trip, as they travelled to Uganda for a month-long mission. The original destination was Manafwa, but then they made a detour for a few days to Karamoja, where exciting new things began. Finally, Zsófi even travelled to Kenya for a week."
    },
    "2023-january": {
      "title": "January 2023, Kenya",
      "desc": "After long preparations, Zsófi, Balázs and Dr. Balázs set off on our first independent, larger mission in Kenya in January, during which they spent the first half of the time in Mombasa and the coastal area, and then headed for the slums of Nairobi."
    },
    "2023-spring": {
      "title": "Spring 2023, Uganda",
      "desc": "And once again, donations are collected and packages are ready, as Panna, Juli and Zsófi headed to Uganda to deliver the gifts and kind messages of the symbolic adoptive parents to the children they support and to get all the news about the pupils of the school in Manafwa."
    }
  }
}
</i18n>