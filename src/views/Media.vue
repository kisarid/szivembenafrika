<template>
  <div class="content">
    <heading>
      <div slot="main">Média</div>
      <div slot="description">Külső Médiamegjelenések</div>
    </heading>
    <container>
      <p v-for="(link, index) of mediaAppearances" :key="index">
        <a :href="link.url">{{ link.name }}</a>
      </p>
    </container>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'
import YoutubeVideo from '@/components/moyo/youtube-video.vue';

@Component({
  name: 'Media',
  components: { container, heading, YoutubeVideo },
})
export default class Media extends Vue {
  mediaAppearances = [
    { name: 'WMN', url: 'https://wmn.hu/ugy/58214-a-nok-nem-a-bunuktol-tisztulnak-a-menstruacioval--moshato-betet-varrasat-tanitjak-magyarok-afrikaban?fbclid=IwAR3Sr4qmt2EPG9zm76QAR9zVSAtsvdlpiWo_4fPY2XQH2ko1liNC9GY50c4' },
    { name: 'VIP', url: 'https://thevip.hu/2022/01/24/magyarok-kelet-afrikaban-hetente-ketszer-haromszor-ettek-de-boldogok-es-eletvidamak-voltak/' },
    { name: 'Vous', url: 'https://vous.hu/20180612-uganda-szivemben-szuletett-afrika-blog/' },
    { name: 'Női váltó',  url: 'https://noivalto.hu/az-en-tortenetem/afrika-onkentes-czikkely-panni/' },
    { name: 'Hoopla Sewing', url: 'https://hooplasewing.com/blogs/news/adomanyozz-hoopla-moshato-betetet' },
    { name: 'Szimpatika', url: 'https://szimpatika.hu/cikkek/7674/fekete-oves-onkentes' },
    { name: 'Femina', url: 'https://femina.hu/gyerek/irene-orokbefogadas-afrika/' },
    { name: 'Szabad Föld', url: 'https://szabadfold.hu/orszag-vilag/lelkeben-afrikaval-indult-utnak-283126/' },
    { name: 'Emilla', url: 'https://emilla.me/szivemben' },
  ]
}
</script>
