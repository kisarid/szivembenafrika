<template>
  <div class="content">
    <heading>
      <div slot="main">Támogatók</div>
    </heading>
    <container>
      <section>
        <div class="icons">
          <div class="icon">
            <img src="@/assets/icons/logo-hunhelps.png" alt="" />
          </div>
          <div class="icon">
            <img src="@/assets/icons/logo-mol.png" alt="" />
          </div>
          <div class="icon">
            <img src="@/assets/icons/logo-emilla.png" alt="" />
          </div>
          <div class="icon">
            <img src="@/assets/icons/logo-prosharp.png" alt="" />
          </div>
          <div class="icon">
            <img src="@/assets/icons/logo-poloneked.png" alt="" />
          </div>
          <div class="icon">
            <img src="@/assets/icons/logo-digitalpress.png" alt="" />
          </div>
          <div class="icon">
            <img src="@/assets/icons/logo-hoopla.jpg" alt="" />
          </div>
          <div class="icon">
            <img src="@/assets/icons/logo-purelife.jpg" alt="" />
          </div>
        </div>
      </section>
    </container>
  </div>
</template>

<style lang="scss" scoped>
.icons {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .icon {
    height: 100px;
    padding: 10px 20px;

    img {
      height: 100%;
      max-width: 100%;
      object-fit: contain;
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'

@Component({
  name: 'Supporters',
  components: { container, heading },
})
export default class Supporters extends Vue {}
</script>