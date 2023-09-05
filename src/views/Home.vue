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
        "p1": "Welcome to the website of Szívemben Született Afrika – “Africa Born in my Heart”. We are so happy to see you here!",
        "p2": "I am Zsófi Könczöl, dreamer and founder of project “Africa Born in my Heart”. At 14 years old, I decided to have a career revolving around Africa, then, following a 10-year long wait and preparation, I managed to travel to the continent in 2017. My first trip there took me to Eastern Uganda, specifically to a village called Manafwa, which has since become my “second home”. I have travelled there to help, to give, and I did not expect for a second for these trips and these people to change my whole life in return as well.",
        "p3": "With each and every trip to Uganda, I am always learning new things about life and about myself. I have learned to dare to dream big, and that every person has a place somewhere in the world there they are truly needed. I have learned that “Africa” does not need for us to just go there and “repair” things, “save” people without consciousness toward its people, but to be humble, to get to know them, to understand and to love. Because this is the only real way to help. I have learned I can not save the whole world, but I can take part in helping a seemingly far-away village and its people to have a better, more human way to live.",
        "p4": "I am ever so proud of my team, of those participating and working with me toward this goal, on this journey. There are many of us and all different, but we are united in believing Africa to be the “continent of possibilities”, and Uganda to be – as they say – “the pearl of Africa”. A beautiful country, full of beautiful people, and it is a true honour and pure joy to work with and for them.",
        "p5": "I hereby invite you to have a look around our website, get to know our work and practises! Should you feel touched and drawn by any of our programmes, we would be happy to receive your inquiry! Feel free to ask us questions, let’s have a discussion, and apply to us as a volunteer or support our work with a donation. We already know: cooperation makes wonders!",
        "p6": " "
    }
}
</i18n>
