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
import EducationProgramKenya from '@/views/how-you-help/EducationProgramKenya.vue'
import SupportChildren from '@/views/how-you-help/SupportChildren.vue'
import Volunteering from '@/views/how-you-help/Volunteering.vue'
import Events from '@/views/how-you-help/Events.vue'
import Supporters from '@/views/Supporters.vue'
import Statement from '@/views/Statement.vue'
import Media from '@/views/Media.vue'
import Blog from '@/views/Blog.vue'
import Vlog from '@/views/Vlog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/rolunk',
    name: 'rolunk',
    component: About,
  },
  {
    path: '/eves-beszamolok',
    name: 'eves-beszamolok',
    component: Statement,
  },
  {
    path: '/alapelvek',
    name: 'alapelvek',
    component: Principles,
  },
  {
    path: '/projektjeink',
    name: 'projektjeink',
    component: Projects,
  },
  {
    path: '/projektjeink/:projectId',
    name: 'projektjeink-reszletes',
    component: Projects,
  },
  {
    path: '/hol-segitunk',
    name: 'hol-segitunk',
    component: WhereWeHelp,
  },
  {
    path: '/adomanyozas',
    name: 'adomanyozas',
    component: Donations,
  },
  {
    path: '/esemenyek',
    name: 'esemenyek',
    component: Events,
  },
  {
    path: '/esemenyek/ubuntu',
    name: 'esemenyekUbuntu',
    component: Events,
  },
  {
    path: '/graduate-a-girl',
    name: 'graduate-a-girl',
    component: GraduateAGirl,
  },
  {
    path: '/oktatasi-tamogatas',
    name: 'oktatasi-tamogatas',
    component: EducationProgramKenya,
  },
  {
    path: '/gyermektamogatas',
    name: 'gyermektamogatas',
    component: SupportChildren,
  },
  {
    path: '/onkentesseg',
    name: 'onkentesseg',
    component: Volunteering,
  },
  {
    path: '/media',
    name: 'media',
    component: Media,
  },
  {
    path: '/vlog',
    name: 'vlog',
    component: Vlog,
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
  },
  {
    path: '/blog/:article',
    name: 'blog-article',
    component: Blog,
  },
  {
    path: '/tamogatok',
    name: 'tamogatok',
    component: Supporters,
  },
  {
    path: '/kapcsolat',
    name: 'kapcsolat',
    component: Contact,
  },
  {
    path: '*',
    redirect: { name: 'home' },
  },
]

const router = new VueRouter({
  routes,
})

export default router
