<template>
  <div class="container" v-bind:class="{ wider: wider }">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;

    &.wider {
      max-width: none;
    }
  }
}

@media (min-width: 1280px) {
  .container.wider {
    max-width: 1280px;
  }
}

@media (min-width: 1600px) {
  .container.wider {
    max-width: 1600px;
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Container extends Vue {
  @Prop() wider: boolean
}
</script>
