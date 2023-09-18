<template>
  <div class="heading">
    <container>
      <div class="main-wrapper">
        <div class="main" v-if="$slots.main">
          <slot name="main"></slot>
        </div>
        <div class="main-small" v-if="$slots['main-small']">
          <slot name="main-small"></slot>
        </div>
      </div>
      <div class="description" v-if="$slots.description">
        <slot name="description"></slot>
      </div>
    </container>
  </div>
</template>

<style lang="scss">
.heading {
  position: sticky;
  top: 70px;
  background-color: var(--moyo-light);
  margin-bottom: 20px;
  line-height: normal;
  z-index: 1;

  .main-wrapper {
    padding: 15px 0 5px;
    font-weight: bold;
    color: var(--moyo-font-deep-dark);
    border-bottom: 1px solid var(--moyo-font-deep-dark);

    .main {
      font-size: 30px;
    }

    .main-small {
      font-size: 18px;
    }
  }

  .description {
    margin-top: 8px;
    color: var(--moyo-font-dark);
    font-size: 18px;

    .link {
      width: fit-content;
      margin-left: auto;
      padding-bottom: 5px;
      text-align: right;
      font-size: 14px;
    }
  }

  @media (min-width: 768px) {
    top: 80px;

    .main-wrapper {
      .main {
        font-size: 45px;
      }

      .main-small {
        font-size: 30px;
      }
    }

    .description {
      font-size: 22px;

      .link {
        font-size: 16px;
      }
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
export default class Heading extends Vue { }
</script>
