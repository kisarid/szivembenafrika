<template>
  <div id="app">
    <div class="header-holder"></div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'

@Component({
  name: 'App',
  components: { Header, Footer, container, heading },
})
export default class App extends Vue {
  @Watch('$route', { immediate: true, deep: true })
  onUrlChange() {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap');

html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  color: var(--moyo-font-dark);
  background-color: var(--moyo-light);
  -webkit-tap-highlight-color: transparent;

  // colors
  --moyo-font-deep-dark: #53504c;
  --moyo-font-dark: #6f6a66;
  --moyo-font-light: #ccc0c0;

  --moyo-light: #f9f1e6;
  --moyo-highlight: #e95d00;

  --moyo-yellow: #ffc55f;
  --moyo-orange: #e7ad47;
  --moyo-grey: #53504c;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header-holder {
  width: 100%;
  height: 70px;

  @media (min-width: 768px) {
    height: 80px;
  }
}

section {
  margin-bottom: 20px;
}

.sub-heading {
  margin: 0 0 20px 0;
  font-size: 20px;
  font-weight: bold;

  &.center {
    font-size: 24px;
    text-align: center;
  }
}

.text-and-pic {
  display: grid;
  grid-template: auto auto / 100%;
  gap: 20px;

  .text p:first-child {
    margin-top: 0;
  }

  @media (min-width: 1024px) {
    grid-template: auto / 1fr 1fr;

    &.two-three {
      grid-template: auto / 2fr 3fr;
    }

    &.three-two {
      grid-template: auto / 3fr 2fr;
    }
  }
}

.pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

a {
  color: var(--moyo-font-deep-dark);
}

svg {
  height: 100%;

  * {
    transition: fill 0.4s ease, stroke 0.4s ease;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.vm--modal {
  max-height: 90vh;
}

.swiper-container {
  z-index: auto !important;
}

.swiper-wrapper {
  z-index: auto !important;
}
</style>
