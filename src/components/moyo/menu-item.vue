<template>
  <div id="menu-item" :class="{ selected: selected }" @click="handleClick">
    <div class="text">
      <slot name="text"></slot>
    </div>
    <div class="icon" v-if="submenu">
      <chevron />
    </div>
    <transition name="fade">
      <SubmenuItem
        v-if="submenu"
        v-show="open"
        class="submenu"
        :items="submenu"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import chevron from '@/assets/icons/chevron.svg'
import SubmenuItem from './submenu-item.vue'
import { MenuItemI } from '../Header.vue'

@Component({
  components: { SubmenuItem, chevron },
})
export default class MenuItem extends Vue {
  @Prop() submenu: MenuItemI[]
  @Prop() route: string
  selected = false
  open = false
  @Watch('$route', { immediate: true, deep: true })
  onUrlChange(newVal: any) {
    this.setSelected(newVal.path.includes(this.route))
  }

  mounted() {
    window.addEventListener('click', (event) => {
      if (!this.$el.contains(event.target as Node)) {
        this.setOpen(false)
      }
    })
  }

  setSelected(val: boolean) {
    this.selected = val
  }

  setOpen(val: boolean) {
    this.open = val
  }

  handleClick(event: Event) {
    event.preventDefault()
    if (this.submenu) {
      this.setOpen(!this.open)
    } else if (this.$router.currentRoute.name !== this.route) {
      this.$router.push({ name: this.route })
    }
  }
}
</script>

<style lang="scss" scoped>
#menu-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px;
  color: var(--moyo-font-dark);
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.4s ease, color 0.4s ease;

  &.selected {
    background-color: var(--moyo-yellow);
  }

  &:hover:not(.selected),
  &.open:not(.selected) {
    --icon-color: var(--moyo-highlight);
    color: var(--moyo-highlight);
  }

  .text {
    font-size: 14px;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .icon {
    display: flex;
    align-items: center;
    margin-left: 5px;
    width: 14px;
  }

  .submenu {
    position: absolute;
    top: 100%;
  }
}
</style>
