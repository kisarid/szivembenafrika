<template>
  <div class="content">
    <heading>
      <div slot="main">Rólunk</div>
    </heading>
    <container>
      <section>
        <div class="sub-heading">Küldetésünk</div>
        <p>
          Hiszünk benne, hogy mindenki egyenlő és mindenkinek egyenlő esélyek
          kellene, hogy járjanak. Hogy egyszerűen nem kerülhet valaki rossz
          helyzetbe amiatt, hogy hová született.   A szegénység felszámolásáért, a
          társadalmi igazságosságért és a nemek közti egyenlőtlenség
          megszűntetéséért dolgozunk és azért, hogy minden gyermeknek és nőnek
          legyen meg a lehetősége egy olyan jövő megteremtésére, amilyet szeretne.
          Hiszünk abban, hogy a munkánkkal tehetünk egy igazságosan és
          fenntarthatóan működő világért, amelyben, minden ember élvezheti a jogát
          a méltóságteljes, nélkülözéstől és elnyomástól mentes élethez.
        </p>
        <div class="pic">
          <img src="@/assets/images/about.jpg" alt="" />
        </div>
      </section>
      <section>
        <div class="sub-heading">Csapatunk</div>
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
