<template>
  <div class="modal-content">
    <div class="close-button" v-bind:class="{ 'light': lightCloseButton }" v-on:click="$emit('close')">
      <close></close>
    </div>
    <div class="image">
      <img
        :src="require(`@/assets/images/${bio.image}`)"
        v-bind:style="{ 'object-position': bio.objectPosition }"
        v-bind:class="{ 'fixed-height': !imageAutoHeight }"
        alt=""
      />
    </div>
    <div class="sub-heading">
      {{ bio.name }}
    </div>
    <div class="text">
      <p v-for="(paragraph, index) in bio.longBio" :key="index" v-html="paragraph"></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-content {
  display: flex;
  flex-direction: column;
  max-height: 90vh;

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .close-button.light * {
    fill: var(--moyo-light);
  }

  .image img {
    width: 100%;
    object-fit: cover;
    object-position: center top;

    &.fixed-height {
      height: 200px;

      @media (min-width: 768px) {
        height: 350px;
      }
    }
  }

  .sub-heading {
    padding: 20px;
    margin-bottom: 0;
  }

  .text {
    min-width: 0;
    padding: 20px;
    padding-top: 0;
    overflow-y: auto;

    p {
      margin-top: 0;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import { Bio } from '@/interfaces/bio'
import close from '@/assets/icons/close.svg'

@Component({
  name: 'modal',
  components: { close },
})
export default class ModalComponent extends Vue {
  @Prop() bio: Bio
  @Prop() index: number
  @Prop() imageAutoHeight: boolean
  @Prop() lightCloseButton: boolean
}
</script>
