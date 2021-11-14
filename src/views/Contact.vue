<template>
  <div class="content">
    <heading>
      <div slot="main">{{ $t('main') }}</div>
    </heading>
    <container>
      <section>
        <div>
          <b>Facebook: </b>
          <a
            href="https://www.facebook.com/szivembenszuletettafrika"
            target="_blank"
            rel="noopener noreferrer"
            >facebook.com/szivembenszuletettafrika</a
          >
        </div>
        <div>
          <b>Instagram: </b>
          <a
            href="https://www.instagram.com/szivembenszuletettafrika"
            target="_blank"
            rel="noopener noreferrer"
            >@szivembenszuletettafrika</a
          >
        </div>
        <div>
          <b>Email: </b
          ><a href="mailto:info@szivembenafrika.org"
            >info@szivembenafrika.org</a
          >
        </div>
        <div>
          <b>{{ $t('1') }}</b>1068, Budapest, Király utca 80. fszt. 11
        </div>
      </section>
    </container>
  </div>
</template>

<style lang="scss">
section > div {
  margin-bottom: 10px;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'

@Component({
  name: 'Contact',
  components: { container, heading },
})
export default class Contact extends Vue {}
</script>

<i18n>
{
  "hu": {
    "main": "Kapcsolat",
    "1": "Levelezési cím: "
  },
  "en": {
    "main": "Contact",
    "1": "Mailing address: "
  }
}
</i18n>