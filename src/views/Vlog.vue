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
  galleries = [
    {
      title: '2023. tavasz, Uganda',
      desc: 'És ismét adományok begyűjtve, csomagok készen, hiszen Panna, Juli és Zsófi Uganda felé vették az irányt, hogy a jelképes örökbefogadó szülők ajándékait és kedves üzeneteit továbbítsák az általuk támogatott gyerekeknek és összegyűjtsék az aktuális híreket a manafwai suli lurkóiról.',
      eps: [
        'https://www.youtube-nocookie.com/embed/eiIDIQg1BmU',
      ]
    },
    {
      title: '2023. január, Kenya',
      desc: 'Zsófi, Balázs és Dr. Balázs januárban hosszas előkészítéseket követően útnak indultak az első önálló, nagyobb ívű kenyai missziónkra, amely során az idő első felében Mombassában és a tengerparti térségben voltak, majd pedig Nairobi nyomornegyedei felé vették az irányt.',
      eps: [
        'https://www.youtube-nocookie.com/embed/4xD-M7rfHUw',
        'https://www.youtube-nocookie.com/embed/UPjEr1Z5H4k',
      ]
    },
    {
      title: '2022. ősz, Uganda és Kenya',
      desc: 'Zsófi és Dr. Balázs hosszú útra pakoltak, ugyanis egy egy hónapig tartó misszióra utaztak Ugandába. Az eredeti úticél Manafwa volt, de aztán egy pár napos kitérőt tettek Karamojába is, ahol izgalmas új dolgok vették kezdetüket. Végül pedig Zsófi még egy hétre Kenyába is átutazott.',
      eps: [
        'https://www.youtube-nocookie.com/embed/j3hXOyV-JWE',
        'https://www.youtube-nocookie.com/embed/VMrP_GksjXc',
        'https://www.youtube-nocookie.com/embed/4EF3cgYQYkc',
        'https://www.youtube-nocookie.com/embed/8PVEAFqv8dc',
      ]
    },
    {
      title: '2022. tavasz, Uganda',
      desc: 'Juli, Móni, Zoli és Zsófi Ugandába utaztak, ahol 3 hetet töltöttek Manafwában majd pedig felkerekedtek Uganda – ha nem a világ – egyik legszebb pontjára, a Murchinson Falls Nemzeti Parkba, sőt útközben még egy orrszarvú rezervátumot is meglátogattak.',
      eps: [
        'https://www.youtube-nocookie.com/embed/0eSG6uV1YWM',
        'https://www.youtube-nocookie.com/embed/rQzr0upAi3E',
        'https://www.youtube-nocookie.com/embed/SKjz8qx0RH0',
        'https://www.youtube-nocookie.com/embed/l_9sHjbe3YM',
      ]
    },
    {
      title: '2021. ősz, Uganda',
      desc: 'Zsófi és Czikkcakk Panni egy hónapra Ugandába utaztak és ebben a vlog sorozatban mutatják meg nektek, hogyan telnek a missziós mindennapjaik Manafwában.',
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
</script>
