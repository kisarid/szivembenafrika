<template>
  <div id="header">
    <container class="content" :wider="true">
      <div class="logo" @click="navigate('home')">
        <div class="icon">
          <img src="@/assets/icons/logo.png" alt="" />
        </div>
        <div class="text">Szívemben Született Afrika</div>
      </div>
      <div class="menu">
        <menuItem
          v-for="(menuItem, index) of menuItems"
          :key="index"
          :submenu="menuItem.submenu"
          :route="menuItem.route"
          class="menu-item"
        >
          <div slot="text">{{ menuItem.text }}</div>
        </menuItem>
      </div>
      <div class="menu-button" @click="setMenuOpen(true)">
        <menuButton></menuButton>
      </div>
      <transition name="fade">
        <div class="overlay" v-if="isMenuOpen"></div>
      </transition>
      <Slide
        class="menu-mobile"
        right
        noOverlay
        :closeOnNavigation="true"
        :burgerIcon="false"
        :isOpen="isMenuOpen"
        @closeMenu="setMenuOpen(false)"
      >
        <template v-for="menuItem of menuItems">
          <router-link
            class="menu-item-mobile"
            :key="menuItem.text"
            v-if="menuItem.route"
            :to="menuItem.route"
            >{{ menuItem.text }}</router-link
          >
          <div
            class="submenu-wrapper-mobile"
            :key="menuItem.text"
            v-if="!menuItem.route"
          >
            <div class="menu-item-mobile">{{ menuItem.text }}</div>
            <router-link
              class="submenu-item-mobile"
              v-for="submenuItem of menuItem.submenu"
              :key="submenuItem.text"
              :to="submenuItem.route"
            >
              {{ submenuItem.text }}
            </router-link>
          </div>
        </template>
      </Slide>
    </container>
  </div>
</template>

<style lang="scss" scoped>
#header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 100;

  .content {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      display: flex;
      align-items: center;
      padding: 10px;
      box-sizing: border-box;
      cursor: pointer;
      user-select: none;

      .icon {
        width: 50px;
        height: 50px;
        margin-right: 10px;

        img {
          height: 100%;
          width: 100%;
        }
      }

      .text {
        font-size: 14px;
        white-space: nowrap;
      }

      @media (min-width: 400px) {
        .text {
          font-size: 18px;
        }
      }

      @media (min-width: 768px) {
        margin: 0;

        .icon {
          width: 60px;
          height: 60px;
          margin-right: 20px;
        }

        .text {
          font-size: 24px;
        }
      }
    }

    .menu-button {
      display: flex;
      align-items: center;
      margin-left: auto;
      margin-right: 10px;
      cursor: pointer;
    }

    .menu {
      display: none;
    }

    .overlay {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      backdrop-filter: blur(3px) brightness(0.8);
    }

    .menu-mobile {
      white-space: nowrap;
      user-select: none;

      .bm-item-list > * {
        margin-bottom: 10px;
        padding: 0;
        color: inherit;
        text-decoration: none;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      a::after {
        content: '\203A';
        margin-left: 8px;
        font-size: 90%;
        vertical-align: top;
      }

      .menu-item-mobile {
        margin-bottom: 15px;
      }

      .submenu-wrapper-mobile {
        display: flex;
        flex-direction: column;

        .menu-item-mobile {
          margin-bottom: 10px;
        }

        .submenu-item-mobile {
          margin-bottom: 5px;
          padding-left: 30px;
          font-size: 90%;
        }
      }
    }
  }

  @media (min-width: 1180px) {
    .content .menu-button {
      display: none;
    }

    .content .menu {
      display: flex;
      align-items: center;
      margin-left: auto;

      .menu-item:not(:last-of-type) {
        margin-right: 8px;
      }
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Slide } from 'vue-burger-menu'

import container from '@/components/moyo/container.vue'
import menuItem from '@/components/moyo/menu-item.vue'
import menuButton from '@/assets/icons/menu-button.svg'

export interface MenuItemI {
  text: string
  route?: string
  submenu?: MenuItemI[]
}

@Component({
  name: 'Header',
  components: { container, menuItem, Slide, menuButton },
})
export default class Header extends Vue {
  menuItems: MenuItemI[] = [
    {
      text: 'Rólunk',
      submenu: [
        { text: 'Csapatunk', route: 'rolunk' },
        { text: 'Éves beszámolók', route: 'eves-beszamolok' },
      ],
    },
    {
      text: 'Így segítünk',
      submenu: [
        { text: 'Alapelvek', route: 'alapelvek' },
        { text: 'Hol segítünk?', route: 'hol-segitunk' },
        { text: 'Projektjeink', route: 'projektjeink' },
      ],
    },
    {
      text: 'Így segíthetsz',
      submenu: [
        { text: 'Önkéntesség', route: 'onkentesseg' },
        { text: 'Gyermektámogatás', route: 'gyermektamogatas' },
        { text: 'Graduate a Girl!', route: 'graduate-a-girl' },
        { text: 'Adományozás', route: 'adomanyozas' },
      ],
    },
    { text: 'Média', route: 'media' },
    { text: 'Támogatók', route: 'tamogatok' },
    { text: 'Kapcsolat', route: 'kapcsolat' },
  ]

  isMenuOpen = false

  setMenuOpen(val: boolean) {
    setTimeout(() => {
      this.isMenuOpen = val
    }, 0)
  }

  navigate(route: string) {
    this.$router.push({ name: route })
  }
}
</script>
