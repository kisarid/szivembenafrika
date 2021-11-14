<template>
  <div class="content">
    <heading>
      <div slot="main">{{ $t('main') }}</div>
    </heading>
    <container>
      <section>
        <div class="sub-heading">{{ $t('title1') }}</div>
        <p>{{ $t('p1') }}</p>
        <div class="pic">
          <img src="@/assets/images/about.jpg" alt="" />
        </div>
      </section>
      <section>
        <div class="sub-heading">{{ $t('title2') }}</div>
        <Team />
      </section>
    </container>
  </div>
</template>

<style lang="scss" scoped>
.pic {
  max-width: 900px;
  margin: 0 auto;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'
import Team from '@/components/Team.vue'

@Component({
  name: 'About',
  components: { container, heading, Team },
})
export default class About extends Vue {}
</script>

<i18n>
{
    "hu": {
        "main": "Csapatunk",
        "title1": "Küldetésünk",
        "p1": "Hiszünk benne, hogy mindenki egyenlő és mindenkinek egyenlő esélyek kellene, hogy járjanak. Hogy egyszerűen nem kerülhet valaki rossz helyzetbe amiatt, hogy hová született.   A szegénység felszámolásáért, a társadalmi igazságosságért és a nemek közti egyenlőtlenség megszűntetéséért dolgozunk és azért, hogy minden gyermeknek és nőnek legyen meg a lehetősége egy olyan jövő megteremtésére, amilyet szeretne. Hiszünk abban, hogy a munkánkkal tehetünk egy igazságosan és fenntarthatóan működő világért, amelyben, minden ember élvezheti a jogát a méltóságteljes, nélkülözéstől és elnyomástól mentes élethez.",
        "title2": "Csapattagok"
    },
    "en": {
        "main": "Our team",
        "title1": "Our mission",
        "p1": "We believe that every people are equal, and everyone should have the same chances in life. That someone can not end up in a bad situation just based on where they were born to live. We are working with the aims of ending poverty, reaching social justice and gender equality and for every child and woman to have a chance to build the future they want to have. We believe that through our work we are able to reach a world of justice and sustainability, where everyone is able to enjoy their rights to a dignified life without oppression and deprivation.",
        "title2": "Team members"
    }
}
</i18n>