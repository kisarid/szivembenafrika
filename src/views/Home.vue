<template>
  <div class="content">
    <div class="hero">
      <swiper class="swiper" :options="swiperOptions" ref="swiperRef">
        <swiper-slide>
          <picture>
            <source
              media="(min-width: 768px)"
              srcset="@/assets/images/home/hero-1.jpg"
            />
            <img src="@/assets/images/home/hero-1-mobile.jpg" alt="" />
          </picture>
        </swiper-slide>
        <swiper-slide>
          <picture>
            <source
              media="(min-width: 768px)"
              srcset="@/assets/images/home/hero-2.jpg"
            />
            <img src="@/assets/images/home/hero-2-mobile.jpg" alt="" />
          </picture>
        </swiper-slide>
        <swiper-slide>
          <picture>
            <source
              media="(min-width: 768px)"
              srcset="@/assets/images/home/hero-3.jpg"
            />
            <img src="@/assets/images/home/hero-3-mobile.jpg" alt=""/>
          </picture>
        </swiper-slide>
        <swiper-slide>
          <picture>
            <source
              media="(min-width: 768px)"
              srcset="@/assets/images/home/hero-4.jpg"
            />
            <img src="@/assets/images/home/hero-4-mobile.jpg" alt=""/>
          </picture>
        </swiper-slide>
        <swiper-slide>
          <picture>
            <source
              media="(min-width: 768px)"
              srcset="@/assets/images/home/hero-5.jpg"
            />
            <img src="@/assets/images/home/hero-5-mobile.jpg" alt=""/>
          </picture>
        </swiper-slide>
      </swiper>
    </div>
    <container>
      <div class="welcome-message">
        <div class="sub-heading">Kedves Érdeklődő!</div>
        <p>
          Sok szeretettel üdvözöllek a Szívemben Született Afrika Egyesület
          oldalán, örülünk, hogy ránk találtál.
        </p>
        <p>
          Könczöl Zsófi vagyok, a Szívemben Született Afrika megálmodója és
          alapítója. 14 éves koromban eldöntöttem, hogy ha törik, ha szakad, én
          bizony Afrikával fogok foglalkozni, majd 10 év várakozás és készülés
          után 2017-ben jártam első alkalommal a kontinensen, akkor az utam
          Uganda keleti részére, egy Manafwa nevű faluba vezetett, amelyre azóta
          más a második otthonomként tekintek. Azért mentem oda, hogy segítsek,
          hogy adjak és nem is gondoltam, hogy ezek az utak és ezek az emberek
          az én életemet is gyökeresen megváltoztatják majd.
        </p>
        <p>
          Minden egyes ugandai utam alkalmával újabb és újabb dolgokat tanulok
          az életről és magamról. Megtanultam, hogy merhetek nagyot álmodni és
          megtanultam, hogy mindenkinek megvan az a hely a világban, ahol igazán
          nagy szükség van rá. Megtanultam, hogy „Afrikának” nem arra van
          szüksége, hogy mindent figyelmen kívül hagyva odamenjünk és
          „megjavítsunk” dolgokat, ”megmentsünk” embereket, arra van szükség,
          hogy alázatosak legyünk, megismerjünk, megértsünk és szeressünk. Mert
          segíteni csak így lehet és csak így érdemes. Megtanultam, hogy
          menthetem meg az egész világot, de segíthetek abban, hogy egy
          távolinak tűnő falu lakóinak jobb, emberhez méltóbb élete lehessen.
        </p>
        <p>
          Nagyon büszke vagyok a csapatomra, akik az ügy köré szerveződtek és
          mára már együtt dolgozunk ezért a célért. Sokan vagyunk és sokfélék,
          de mindannyian hiszünk abban, hogy Afrika a lehetőségek kontinense,
          Uganda pedig – ahogy emlegetni szokták – valóban Afrika gyöngyszeme.
          Egy csodálatos ország, tele csodálatos emberekkel, akikkel, és akikért
          öröm és megtiszteltetés dolgozni.
        </p>
        <p>
          Arra bíztatlak, hogy nézz szét az oldalunkon, ismerd meg a
          tevékenységeinket, és ha megszólítva érzed magad valamely programunk
          által, keress meg minket. Kérdezz, beszélgessünk, jelentkezz hozzánk
          önkéntesnek vagy pedig adományoddal támogasd a munkánkat. Mi
          már tudjuk: az összefogás csodákra képes!
        </p>
        <div class="pic">
          <img src="@/assets/images/home/elnoki.jpg" alt="" />
        </div>
      </div>
    </container>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  margin-bottom: 30px;

  .swiper {
    img {
      width: 100%;
      height: 30vh;
      object-fit: cover;
      object-position: top;

      @media (min-width: 1280px) {
        height: calc(100vh - 200px);
      }

      @media (orientation: 'landscape') {
        height: calc(100vh - 200px);
      }
    }
  }
}

.welcome-message {
  margin-bottom: 30px;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'

@Component({
  name: 'Home',
  components: { container, heading, Swiper, SwiperSlide },
})
export default class Home extends Vue {
  swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    loop: true,
    slidesPerGroup: 1,
    slidesPerView: 1,
  }
}
</script>
