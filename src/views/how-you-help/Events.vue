<template>
  <div class="content">
    <heading>
      <div slot="main">Események</div>
    </heading>
    <container>
      <p>Jelenleg nem várható esemény.</p>
      <p>Új események bejelentéséig látogass el <a href="https://www.facebook.com/szivembenszuletettafrika">Facebook oldalunkra</a>!</p>
    </container>
  </div>
</template>

<style lang="scss" scoped>
.quote {
  text-align: center;
  font-style: italic;

  span {
    font-size: 90%;
  }
}

@media (max-width: 1023.9px) {
  .text-and-pic .pic {
    grid-row: 1;
  }
}

@media (min-width: 1024px) {
  .text-and-pic {
    grid-template-columns: 1fr auto;
    place-items: center;

    &.reverse {
      grid-template-columns: auto 1fr;
    }

    .text {
      line-height: 34px;
    }

    .pic {
      width: 350px;
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'

@Component({
  name: 'Events',
  components: { container, heading },
})
export default class Events extends Vue { }
</script>
