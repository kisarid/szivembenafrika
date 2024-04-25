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
            <img src="@/assets/images/home/hero-3-mobile.jpg" alt="" />
          </picture>
        </swiper-slide>
        <swiper-slide>
          <picture>
            <source
              media="(min-width: 768px)"
              srcset="@/assets/images/home/hero-4.jpg"
            />
            <img src="@/assets/images/home/hero-4-mobile.jpg" alt="" />
          </picture>
        </swiper-slide>
        <swiper-slide>
          <picture>
            <source
              media="(min-width: 768px)"
              srcset="@/assets/images/home/hero-5.jpg"
            />
            <img src="@/assets/images/home/hero-5-mobile.jpg" alt="" />
          </picture>
        </swiper-slide>
      </swiper>
    </div>
    <container>
      <div class="welcome-message">
        <div class="sub-heading">{{ $t('title') }}</div>
        <p>{{ $t('p1') }}</p>
        <p>{{ $t('p2') }}</p>
        <p>{{ $t('p3') }}</p>
        <p>{{ $t('p4') }}</p>
        <p>{{ $t('p5') }}</p>
        <p>{{ $t('p6') }}</p>
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

<i18n>
{
    "hu": {
        "title": "Kedves Érdeklődő!",
        "p1": "Sok szeretettel üdvözöllek a Szívemben Született Afrika Egyesület oldalán, örülünk, hogy ránk találtál.",
        "p2": "Szilágyi - Könczöl Zsófi vagyok, a Szívemben Született Afrika megálmodója és alapítója. 14 éves koromban eldöntöttem, hogy ha törik, ha szakad, én bizony Afrikával fogok foglalkozni, majd 10 év várakozás és készülés után 2017-ben jártam első alkalommal a kontinensen, akkor az utam Uganda keleti részére, egy Manafwa nevű faluba vezetett, amelyre azóta már a második otthonomként tekintek. Azért mentem oda, hogy segítsek, hogy adjak és nem is gondoltam, hogy ezek az utak és ezek az emberek az én életemet is gyökeresen megváltoztatják majd.",
        "p3": "Azóta a szervezet földrajzilag és tevékenységét tekintve is bővül és növekszik, 2022 óta megkezdtük a munkát Uganda legszegényebb, néhány évvel ezelőttig teljesen elzárt, jelenleg is aktív törzsi konfliktusokkal terhelt régiójában, Karamojában. Illetve Kenyában a főváros Nairobi nyomornegyedeiben és a szélesebb körben is ismert Mombassa és környékén.",
        "p4": "Minden egyes afrikai utam alkalmával újabb és újabb dolgokat tanulok az életről és magamról. Megtanultam, hogy merhetek nagyot álmodni és megtanultam, hogy mindenkinek megvan az a hely a világban, ahol igazán nagy szükség van rá. Megtanultam, hogy „Afrikának” nem arra van szüksége, hogy mindent figyelmen kívül hagyva odamenjünk és „megjavítsunk” dolgokat, ”megmentsünk” embereket, arra van szükség, hogy alázatosak legyünk, megismerjünk, megértsünk és szeressünk. Mert segíteni csak így lehet és csak így érdemes. Megtanultam, hogy nem menthetem meg az egész világot, de segíthetek abban, hogy ezeknek távolinak tűnő tájak lakóinak jobb, emberhez méltóbb élete lehessen.",
        "p5": "Nagyon büszke vagyok a csapatomra, akik az ügy köré szerveződtek és mára már együtt dolgozunk ezért a célért. Sokan vagyunk és sokfélék, de mindannyian hiszünk abban, hogy Afrika a lehetőségek kontinense, Uganda és Kenya pedig csodálatos országok, tele csodálatos emberekkel, akikkel, és akikért öröm és megtiszteltetés dolgozni.",
        "p6": "Arra bíztatlak, hogy nézz szét az oldalunkon, ismerd meg a tevékenységeinket, és ha megszólítva érzed magad valamely programunk által, keress meg minket. Kérdezz, beszélgessünk, jelentkezz hozzánk önkéntesnek vagy pedig adományoddal támogasd a munkánkat. Mi már tudjuk: az összefogás csodákra képes!"
    },
    "en": {
        "title": "Dear Inquirer!",
        "p1": "I warmly welcome you to the website of Szívemben Született Afrika – “Africa Born in My Heart”. We are delighted to have you here!",
        "p2": "My name is Zsófi Szilágyi-Könczöl, the dreamer and founder of the „Africa Born in My Heart”. At the age of 14, I decided that come what may, I would be involved with Africa. After ten years of anticipation and preparation, I managed to visit the continent for the first time in 2017. My journey led me to a village called Manafwa in the eastern part of Uganda, which I now consider as my second home. I went there to help, to give and I never imagined that these journeys and these people would profoundly change my life.",
        "p3": "Since then, the organization has expanded geographically and in its activities. Since 2022, we have been working in the poorest region of Uganda, Karamoja, which was completely isolated until a few years ago and it is still captivated by active tribal conflicts. Additionally, we work in the slums of Nairobi, the capital of Kenya, and in the wider known areas of Mombasa and its surroundings.",
        "p4": "During each of my journeys to Africa, I learn new things about life and myself. I have learned to dare to dream big and that everyone has a place in the world where they are truly needed. I have learned that Africa doesn't need us to go and \"fix\" things, to \"save\" people without consciousness toward its people, but it needs us to be humble, to understand and to love them. Because that's the only way to help and it's the only way it's worth it. I have learned that I cannot save the whole world, but I can contribute to improving the quality and dignity of life for these people in these seemingly distant lands.",
        "p5": "I am very proud of my team of those participating and working with me toward this goal, on this journey. We are many and diverse, but we all believe that Africa is the „continent of opportunities”, and Uganda and Kenya are wonderful countries full of amazing people, with whom and for whom it is a joy and an honor to work.",
        "p6": "I encourage you to take a look around our website, get to know our activities. Shoud you feel called by any of our programs, please contact us. Let's ask questions, let's talk, join us as a volunteer or support our work with your donations. We already know: cooperation makes wonders!"
    }
}
</i18n>
