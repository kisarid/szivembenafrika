<template>
  <div class="content">
    <heading>
      <div slot="main">{{ $t('main') }}</div>
    </heading>
    <container>
      <section>
        <div class="sub-heading">A kettős könyvvitelt vezető egyéb szervezet egyszerűsített éves
          beszámolója és közhasznúsági melléklet</div>
        <a href="/files/szivembenafrika_beszamolo_2021.pdf">2021</a>
        <a href="/files/szivembenafrika_beszamolo_2020.pdf">2020</a>
      </section>
    </container>
  </div>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
}

a {
  margin-bottom: 10px;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'

@Component({
  name: 'About',
  components: { container, heading },
})
export default class Statement extends Vue {}
</script>

<i18n>
{
  "hu": {
    "main": "Éves beszámolók"
  },
  "en": {
    "main": "Annual reports"
  }
}
</i18n>