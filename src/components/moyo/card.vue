<template>
  <div class="card" v-on:click="$emit('show-modal')">
    <div class="image" v-bind:class="{ 'without-sign': !sign }">
      <img
        :src="require(`@/assets/images/${imageName}`)"
        v-bind:style="{ 'object-position': objectPosition }"
        alt=""
      />
      <div class="sign" :v-if="sign">{{ sign }}</div>
    </div>
    <div class="sub-heading">
      {{ title }}
    </div>
    <div class="text">
      <slot name="short-bio"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  margin: var(--card-margin, 0 40px 40px);
  cursor: pointer;

  .image {
    position: relative;

    img {
      width: 100%;
      height: var(--card-image-height, 200px);
      object-fit: cover;
    }

    .sign {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.7);
      border-top-left-radius: 5px;
    }

    &.without-sign .sign {
      display: none;
    }
  }

  .sub-heading {
    margin: 5px 0 10px 0;
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'card',
  props: ['imageName', 'title', 'objectPosition', 'sign'],
})
export default class Card extends Vue {}
</script>
