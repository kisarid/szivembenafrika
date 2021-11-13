<template>
  <div class="content">
    <heading>
      <div slot="main">Média</div>
      <div slot="description">VLOG</div>
    </heading>
    <container>
      <section>
        <div class="sub-heading">Szívemben Született Afrika x Czikkcakk ugandai misszió</div>
        <p>Zsófi és Czikkcakk Panni egy hónapra Ugandába utaztak és ebben a vlog sorozatban mutatják meg nektek, hogyan telnek a missziós mindennapjaik Manafwában.</p>
        <div class="vlog-heading">1. rész</div>
        <div class="embed-container">
          <iframe
            src="https://www.youtube-nocookie.com/embed/-9CmuP4lB88"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="vlog-heading">2. rész</div>
        <div class="embed-container">
          <iframe
            src="https://www.youtube-nocookie.com/embed/2kppsBe8vss"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="vlog-heading">3. rész</div>
        <div class="embed-container">
          <iframe
            src="https://www.youtube-nocookie.com/embed/k-QZu2GQafU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="vlog-heading">4. rész</div>
        <div class="embed-container">
          <iframe
            src="https://www.youtube-nocookie.com/embed/jeaF2EjEPmQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="vlog-heading">5. rész</div>
        <div class="embed-container">
          <iframe
            src="https://www.youtube-nocookie.com/embed/ucEJRKE8cHQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </container>
  </div>
</template>

<style lang="css" scoped>
  .vlog-heading {
    font-weight: bold;
    margin-block: 8px;
  }

  .embed-container {
    position: relative;
    margin-bottom: 24px;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
  }

  .embed-container iframe,
  .embed-container object,
  .embed-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'

@Component({
  name: 'Media',
  components: { container, heading },
})
export default class Media extends Vue {}
</script>