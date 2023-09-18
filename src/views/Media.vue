<template>
  <div class="content">
    <heading>
      <div slot="main">Média</div>
      <div slot="description">Külső Médiamegjelenések</div>
    </heading>
    <container>
      <p v-for="(link, index) of mediaAppearances" :key="index">
        <span>{{ link.desc }} | </span><a :href="link.url">{{ link.name }}</a>
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
    { name: 'wmn.hu', desc: 'A nők nem a bűnüktől tisztulnak a menstruációval - mosható betét varrását tanítják magyarok Afrikában', url: 'https://wmn.hu/ugy/58214-a-nok-nem-a-bunuktol-tisztulnak-a-menstruacioval--moshato-betet-varrasat-tanitjak-magyarok-afrikaban?fbclid=IwAR3Sr4qmt2EPG9zm76QAR9zVSAtsvdlpiWo_4fPY2XQH2ko1liNC9GY50c4' },
    { name: 'Európai Bizottság Magyarországi Képviselete', desc: 'Vállat vonsz vagy vállalod? - önkéntesség, humanitárius segítségnyújtás', url: 'https://www.youtube.com/watch?v=-9TUOjQgMZU&t=1s&ab_channel=Eur%C3%B3paiBizotts%C3%A1gMagyarorsz%C3%A1giK%C3%A9pviselete' },
    { name: 'SárgaBögre Podcast', desc: 'Beszélgetés a Szívemben Született Afrika nőhavi kampányáról', url: 'https://player.fm/series/sargabogre-podcast/ep-0408-szivemben-szuletett-afrika' },
    { name: 'REFRESHER', desc: 'Mit keres egy keszthelyi lány az afrikai dzsungelben?', url: 'https://refresher.hu/1118-Mit-keres-egy-keszthelyi-lany-az-afrikai-dzsungelben-Interju-a-Szivemben-szuletett-Afrika-misszio-elnokevel' },
    { name: 'Éva Magazin', desc: 'Azoknak a hangja vagyok, akik nem tudnak megszólalni', url: 'https://www.evamagazin.hu/tarsadalom/azoknak-a-hangja-vagyok-akik-nem-tudnak-megszolalni' },
    { name: 'Szakmák között', desc: 'Így lett az álmom a hivatásom', url: 'https://www.youtube.com/watch?v=BDIq-Pvvk6g&t=578s&ab_channel=TouatiKaren' },
    { name: 'Afrika Sztorik Talks', desc: 'Czikkcakk Panni mesél önkéntességről és az afrikai élményeiről', url: 'https://www.youtube.com/watch?v=qyaWB4fi1_w&ab_channel=AfrikaSztorik' },
    { name: 'Afrika Sztorik Talks', desc: 'Itthonról haza - Afrika, mint a második otthonom', url: 'https://www.youtube.com/watch?v=Ia6qVXQCOzM&ab_channel=AfrikaSztorik' },
    { name: 'Női Váltó',  desc: 'Czikkcakk Panni mesél a szervezetről, ugandai látogatásáról', url: 'https://noivalto.hu/az-en-tortenetem/afrika-onkentes-czikkely-panni/' },
    { name: 'index.hu', desc: 'Mini orvosi laboratóriumot állított fel egy magyar csapat Afrikában', url: 'https://index.hu/kulfold/2021/06/04/orvosi-misszio-afrika-uganda-segitsegnyujtas/' },
    { name: 'Vászonzsákoslány Podcast', desc: 'Őszintén a menstruációs szegénységről', url: 'https://www.youtube.com/watch?v=i3V0p1zOuVY&t=1047s&ab_channel=V%C3%A1szonzs%C3%A1kosl%C3%A1ny' },
    { name: 'femina.hu', desc: 'Afrikában ha egy párnak nem születik gyermeke az a nő szégyene', url: 'https://femina.hu/gyerek/afrikai-nok-szules-hagyomanyok/' },
    { name: 'Szabad Föld', desc: 'Lelkében Afrikával indult útnak', url: 'https://szabadfold.hu/orszag-vilag/lelkeben-afrikaval-indult-utnak-283126/' },
    { name: 'Afrika Sztorik Talks', desc: 'Lehet, hogy nem Afrikában születtem, de Afrika megszületett bennem', url: 'https://www.youtube.com/watch?v=MzpaRY2GFtc&t=715s&ab_channel=AfrikaSztorik' },
    { name: 'femina.hu', desc: 'Gyermekházasságok áldozatai Afrikában', url: 'https://femina.hu/kapcsolat/gyermekhazassagok-aldozatai-afrikaban/' },
    { name: 'femina.hu', desc: 'Irene és Joshua története', url: 'https://femina.hu/gyerek/irene-orokbefogadas-afrika/' },
    { name: 'Ridikül', desc: 'Magyar segítők külföldön', url: 'https://www.youtube.com/watch?v=LMP2fBxS3HQ&t=47s&ab_channel=MagyarAfrikaT%C3%A1rsas%C3%A1gAHU' },
    { name: 'vous.hu', desc: '3 érdekesség Ugandáról', url: 'https://vous.hu/20180612-uganda-szivemben-szuletett-afrika-blog/' },
    { name: 'Szimpatika Magazin', desc: 'Fekete öves önkéntes', url: 'https://szimpatika.hu/cikkek/7674/fekete-oves-onkentes' },
    { name: 'Hoopla Sewing', desc: 'Összefogás a menstruációs szegénység felszámolásáért', url: 'https://hooplasewing.com/blogs/news/adomanyozz-hoopla-moshato-betetet' },
    { name: 'Emilla Pads', desc: '84 nap projekt, menstruációs szegénység', url: 'https://emilla.me/szivemben' },
  ]
}
</script>
