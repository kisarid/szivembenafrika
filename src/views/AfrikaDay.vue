<template>
  <div class="content">
    <container>
      <div class="pic">
        <img :src="require('@/assets/images/afrika_nap_plakat.jpg')" alt=""/>
      </div>
      <p v-for="(paragraph, index) in text" :key="index" v-html="paragraph"></p>
    </container>
  </div>
</template>

<style lang="scss" scoped>
  .pic {
    margin-top: 30px;
  }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'
import AfrikaDayInfo from '../afrika-day'

@Component({
  name: 'AfrikaDay',
  components: { container, heading },
  data: () => AfrikaDayInfo,
})
export default class AfrikaDay extends Vue {}
</script>
