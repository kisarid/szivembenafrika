<template>
  <div id="submenu-item">
    <router-link
      class="item"
      v-for="(item, index) in items"
      :key="index"
      :to="item.route"
      >{{ item.text }}</router-link
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { MenuItem } from '@/interfaces/menu-item'

@Component
export default class SubmenuItem extends Vue {
  @Prop() items: MenuItem[]
}
</script>

<style lang="scss" scoped>
#submenu-item {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #53504c40;

  .item {
    text-decoration: none;
    color: var(--moyo-font-dark);
    padding: 10px 15px;
    white-space: nowrap;

    &:hover {
      background-color: var(--moyo-light);
    }
  }
}
</style>
