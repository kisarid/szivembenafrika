<template>
  <div id="language-selector" :class="theme">
    <div class="icon">
      <langIcon></langIcon>
    </div>
    <div
      class="lang"
      v-on:click="setLocale('hu')"
      v-bind:class="{ selected: this.$i18n.locale === 'hu' }"
    >
      hu
    </div>
    <div class="divider"></div>
    <div
      class="lang"
      v-on:click="setLocale('en')"
      v-bind:class="{ selected: this.$i18n.locale === 'en' }"
    >
      en
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import langIcon from '@/assets/icons/language.svg'

@Component({
  name: 'LanguageSelector',
  components: { langIcon }
})
export default class LanguageSelector extends Vue {
  @Prop() theme: 'light' | 'dark'
  setLocale(newLocale: 'hu' | 'en') {
    this.$i18n.locale = newLocale
  }
}
</script>

<style lang="scss" scoped>
#language-selector {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 4px;
  width: fit-content;
  padding: 8px;
  cursor: normal;

  &.light {
    .icon svg {
      fill: var(--moyo-font-light);
    }

    .divider {
      background-color: var(--moyo-font-light);
    }

    .lang {
      color: var(--moyo-font-light);

      &.selected {
        color: var(--moyo-yellow);
        background-color: transparent;
      }
    }
  }

  .icon {
    height: 18px;

    svg {
      fill: var(--moyo-font-dark);
    }
  }

  .divider {
    display: flex;
    align-items: center;
    width: 1px;
    height: 18px;
    background-color: var(--moyo-font-dark);
    opacity: 0.5;
  }

  .lang {
    padding: 2px;
    color: var(--moyo-font-dark);
    border-radius: 5px;
    font-size: 14px;
    text-transform: uppercase;
    cursor: pointer;

    &.selected {
      background-color: var(--moyo-yellow);
    }
  }
}
</style>
