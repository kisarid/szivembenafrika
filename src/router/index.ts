import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import About from '@/views/About.vue'
import Principles from '@/views/how-we-help/Principles.vue'
import Projects from '@/views/how-we-help/Projects.vue'
import WhereWeHelp from '@/views/how-we-help/WhereWeHelp.vue'
import Donations from '@/views/how-you-help/Donations.vue'
import GraduateAGirl from '@/views/how-you-help/GraduateAGirl.vue'
import SupportChildren from '@/views/how-you-help/SupportChildren.vue'
import Volunteering from '@/views/how-you-help/Volunteering.vue'
import Supporters from '@/views/Supporters.vue'
import Statement from '@/views/Statement.vue'
import Media from '@/views/Media.vue'
import AfrikaDay from '@/views/AfrikaDay.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/rolunk',
    name: 'rolunk',
    component: About
  },
  {
    path: '/eves-beszamolok',
    name: 'eves-beszamolok',
    component: Statement
  },
  {
    path: '/alapelvek',
    name: 'alapelvek',
    component: Principles
  },
  {
    path: '/projektjeink',
    name: 'projektjeink',
    component: Projects
  },
  {
    path: '/hol-segitunk',
    name: 'hol-segitunk',
    component: WhereWeHelp
  },
  {
    path: '/adomanyozas',
    name: 'adomanyozas',
    component: Donations
  },
  {
    path: '/graduate-a-girl',
    name: 'graduate-a-girl',
    component: GraduateAGirl
  },
  {
    path: '/gyermektamogatas',
    name: 'gyermektamogatas',
    component: SupportChildren
  },
  {
    path: '/onkentesseg',
    name: 'onkentesseg',
    component: Volunteering
  },
  {
    path: '/media',
    name: 'media',
    component: Media
  },
  {
    path: '/tamogatok',
    name: 'tamogatok',
    component: Supporters
  },
  {
    path: '/kapcsolat',
    name: 'kapcsolat',
    component: Contact
  },
  {
    path: '/nemzetkozi-afrika-nap',
    name: 'nemzetkozi-afrika-nap',
    component: AfrikaDay
  },
  {
    path: '/nemzetkozi-afrika-nap/:programok',
    name: 'nemzetkozi-afrika-nap-programok',
    component: AfrikaDay,
    props: { programok: true }
  },
  {
    path: '*',
    redirect: { name: 'home' }
  }
]

const router = new VueRouter({
  routes
})

export default router
