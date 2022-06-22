<template>
  <div class="content">
    <heading>
      <div slot="main">{{ $t('main') }}</div>
    </heading>
    <container>
      <section>
        <div class="sub-heading">{{ $t('1.title') }}</div>
          <div class="pic">
            <img src="@/assets/images/events/szabadegyetem_2022.jpg" alt="" />
          </div>
      </section>
    </container>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'

@Component({
  name: 'Events',
  components: { container, heading },
})
export default class Events extends Vue {}
</script>

<i18n>
{
    "hu": {
        "main": "Események",
        "1": {
          "title": "Afrika Nyári Szabadegyetem 2022"
        }
    },
    "en": {
        "main": "Events",
        "1": {
          "title": "Afrika Nyári Szabadegyetem 2022"
        }
    }
}
</i18n>