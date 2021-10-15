<template>
  <div class="heading">
    <container>
      <div class="main">
        <slot name="main"></slot>
      </div>
      <div class="description">
        <slot name="description"></slot>
      </div>
    </container>
  </div>
</template>

<style lang="scss" scoped>
.heading {
  padding: 15px 0;
  background-color: var(--moyo-light);
  margin-bottom: 20px;

  .main {
    margin-bottom: 8px;
    padding: 15px 0;
    color: var(--moyo-font-deep-dark);
    font-size: 30px;
    font-weight: bold;
    border-bottom: 1px solid var(--moyo-font-deep-dark);
  }

  .description {
    color: var(--moyo-font-dark);
    font-size: 18px;
  }

  @media (min-width: 768px) {
    .main {
      font-size: 45px;
    }

    .description {
      font-size: 22px;
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import container from '@/components/moyo/container.vue'

@Component({
  name: 'heading',
  components: { container }
})
export default class Heading extends Vue {}
</script>
