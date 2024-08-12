<template>
  <div id="menu-item" :class="{ selected: selected }" @click="handleClick">
    <router-link v-if="route" :to="route" class="text"
      ><div class="text">{{ text }}</div>
    </router-link>
    <div v-if="!route" class="text">{{ text }}</div>
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
import { MenuItem as MenuItemI } from '@/interfaces/menu-item'

@Component({
  components: { SubmenuItem, chevron },
})
export default class MenuItem extends Vue {
  @Prop() submenu: MenuItemI[]
  @Prop() route: string
  @Prop() text: string
  selected = false
  open = false
  @Watch('$route', { immediate: true, deep: true })
  onUrlChange(newVal: any) {
    const submenuSelected = (this.submenu || []).some(
      (sm) => !sm.ignoreInMenuHighlight && newVal.path.includes(sm.route)
    )
    const menuSelected = newVal.path.includes(this.route)
    this.setSelected(submenuSelected || menuSelected)
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
    if (this.submenu) {
      event.preventDefault()
      this.setOpen(!this.open)
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
    text-decoration: none;
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
