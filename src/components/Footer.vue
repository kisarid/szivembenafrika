<template>
  <div id="footer">
    <container>
      <div class="content">
        <div class="title">Szívemben Született Afrika Egyesület</div>
        <div class="logos">
          <a
            href="https://www.facebook.com/szivembenszuletettafrika"
            target="_blank"
            rel="noopener noreferrer"
          >
            <fb></fb>
          </a>
          <a
            href="https://www.instagram.com/szivembenszuletettafrika"
            target="_blank"
            rel="noopener noreferrer"
          >
            <insta></insta>
          </a>
        </div>
      </div>
    </container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import container from '@/components/moyo/container.vue'
import fb from '@/assets/icons/facebook-logo.svg'
import insta from '@/assets/icons/instagram-logo.svg'

@Component({
  name: 'Footer',
  components: { container, fb, insta },
})
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
#footer {
  margin-top: auto;
  background-color: var(--moyo-grey);

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    color: var(--moyo-light);

    .title {
      margin-bottom: 20px;
    }

    .logos {
      a:not(:last-child) {
        margin-right: 40px;
      }

      svg {
        height: 40px;
        width: 40px;
      }
    }

    @media (min-width: 768px) {
      flex-direction: row;

      .title {
        margin: 0;
      }
    }
  }
}
</style>
