<template>
  <div class="gallery">
    <div class="item" v-for="(item, index) of items" :key="item.name">
      <card
        :imageName="item.image"
        :title="item.name"
        :objectPosition="item.objectPosition"
        :sign="item.isSupported ? 'Támogatva' : ''"
        v-on:show-modal="showModal(index)"
      >
        <div slot="short-bio">
          <div class="short-bio">
            <p v-for="text in item.shortBio" :key="text">{{ text }}</p>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  display: grid;
  grid-template: auto / 1fr;
  --card-padding: 0 20px 20px;
  --card-image-height: 350px;

  .short-bio p {
    margin: 0 0 4px 0;
    font-size: 90%;
  }

  @media (min-width: 768px) {
    grid-template: auto / 1fr 1fr 1fr;
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import card from '@/components/moyo/card.vue'
import modal from '@/components/moyo/modal.vue'
import { Bio, ChildBio } from '@/interfaces/bio'

@Component({
  name: 'Gallery',
  components: { modal, card },
})
export default class Gallery extends Vue {
  @Prop() items: Bio[] | ChildBio[]

  showModal(index: number) {
    const isMobile = window.innerWidth < 768
    this.$modal.show(
      modal,
      { bio: this.items[index], index },
      {
        width: isMobile ? '90%' : '500px',
        height: 'auto',
      }
    )
  }
}
</script>

