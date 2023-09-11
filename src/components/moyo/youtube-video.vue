<template>
  <div class="embed-container">
    <iframe :src="url" title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  </div>
</template>

<style lang="scss" scoped>
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
import { Component, Prop, Vue } from 'vue-property-decorator'
import container from '@/components/moyo/container.vue'

@Component({
  name: 'heading',
  components: { container }
})
export default class YoutubeVideo extends Vue {
  @Prop() url: string
}
</script>
