import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import About from "@/views/About.vue"
import Testimonials from "@/views/TestimonialsView.vue"
import Places from "@/views/PlacesTouristique.vue"
import Contact from "@/views/Contact.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/testimonials",
      name: "testimonials",
      component: Testimonials,
    },
    {
      path: "/Places-touristiques",
      name: "Places-touristiques",
      component: Places,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
  ],
});

export default router;