<template>
  <div class="content">
    <container>
      <div class="pic">
        <img :src="require('@/assets/images/afrika_nap_plakat.jpg')" alt=""/>
      </div>
      <p v-html="text.intro"></p>
      <a href="javascript:" v-on:click="scrollToPrograms()">Részletes programterv itt!</a>
      <p v-for="(paragraph, index) in [...text.desc, ...text.sponsor]" :key="index" v-html="paragraph"></p>
      <div class="pic" id="programok">
        <img :src="require('@/assets/images/afrika_nap_program-01.jpg')" alt=""/>
        <img :src="require('@/assets/images/afrika_nap_program-02.jpg')" alt=""/>
      </div>
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
  props: ['programok'],
})
export default class AfrikaDay extends Vue {
  mounted() {
    this.$modal.hideAll()
    if (this.$props.programok) {
      this.scrollToPrograms()
    }
  }

  scrollToPrograms() {
    setTimeout(() => {
      const pTop = document.getElementById('programok')?.getBoundingClientRect().top || 0
      const offset = document.getElementById('header')?.getBoundingClientRect().height || 0
      const body = document.body
      const docEl = document.documentElement
      const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
      const clientTop = docEl.clientTop || body.clientTop || 0
      const top  = Math.round(pTop + scrollTop - clientTop - offset)
      window.scrollTo(0, top)
    }, 200);
  }
}
</script>
