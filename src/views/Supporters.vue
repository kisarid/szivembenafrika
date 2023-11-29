<template>
  <div class="content">
    <heading>
      <div slot="main">{{ $t('main') }}</div>
    </heading>
    <container>
      <section>
        <div class="icons">
          <div class="icon" v-for="(supporter, index) in supporters" :key="index">
            <a :href="supporter.link" target="blank" rel="noreferrer noopener">
              <img :src="supporter.logo" alt="" />
            </a>
          </div>
        </div>
      </section>
    </container>
  </div>
</template>

<style lang="scss" scoped>
.icons {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .icon {
    height: 100px;
    padding: 10px 20px;

    img {
      height: 100%;
      max-width: 100%;
      object-fit: contain;
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'

@Component({
  name: 'Supporters',
  components: { container, heading },
})
export default class Supporters extends Vue {
  supporters = [
    { link: 'https://hungaryhelps.gov.hu/', logo: require('@/assets/icons/logo-hunhelps.png') },
    { link: 'https://emilla.me/', logo: require('@/assets/icons/logo-emilla.png') },
    { link: 'https://poloneked.hu/', logo: require('@/assets/icons/logo-poloneked.png') },
    { link: 'https://www.digitalpress.hu/', logo: require('@/assets/icons/logo-digitalpress.png') },
    { link: 'https://hooplasewing.com/', logo: require('@/assets/icons/logo-hoopla.jpg') },
    { link: 'https://www.purelifefoundation.eu/', logo: require('@/assets/icons/logo-purelife.jpg') },
    { link: 'https://www.facebook.com/dorinkastudiohungary/', logo: require('@/assets/icons/logo-dorinka.png') },
    { link: 'https://zsolya.com/', logo: require('@/assets/icons/logo-zsolya.png') },
    { link: 'https://wanderergraphic.com/', logo: require('@/assets/icons/logo_wanderergraphic.png') },
    { link: 'https://www.czikkcakkdesign.com/', logo: require('@/assets/icons/logo_panni.png') },
    { link: 'https://www.szelencecafe.hu/', logo: require('@/assets/icons/logo_szelence.png') },
    { link: 'https://zugmuhely.com/', logo: require('@/assets/icons/logo-zug.png') },
    { link: 'https://harrerchocolat.com/', logo: require('@/assets/icons/logo_harrer.png') },
    { link: 'https://chococard.hu/', logo: require('@/assets/icons/logo_beantobear.jpg') },
  ]
}
</script>

<i18n>
{
  "hu": {
    "main": "Támogatók"
  },
  "en": {
    "main": "Supporters"
  }
}
</i18n>