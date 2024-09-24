<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import TestimonialCard from "@/components/TestimonialCard.vue"
import Header from "@/components/base/Header.vue"
import userProfile from '@/assets/user.png'
import Footer from "@/components/base/Footer.vue"
import { gsap } from 'gsap'

const testimonials = ref([
  {
    userImage: userProfile,
    userText: "Explorer Tsukiji était un rêve pour les amateurs de cuisine. Le sushi et les fruits de mer les plus frais que j’ai jamais mangés, et l’ambiance du marché était très animée !",
    userName: "Alex Dubro",
    userTitle: "Du Royaume-Uni"
  },
  {
    userImage: userProfile,
    userText: "Odaiba avait un côté futuriste avec son front de mer, sa statue géante de Gundam, et ses centres commerciaux high-tech. La vue du coucher de soleil sur le pont Rainbow était magique",
    userName: "Sarah Assina",
    userTitle: "Du Canada"
  },
  {
    userImage: userProfile,
    userText: "Le parc d'Ueno était une escapade paisible loin du tumulte de la ville. Les cerisiers en fleurs étaient magnifiques, et visiter le zoo a été une façon amusante de passer la journée.",
    userName: "Diego delafuente",
    userTitle: "De l'Espagne"
  },
  {
    userImage: userProfile,
    userText: "La vue depuis Tokyo Skytree était à couper le souffle. Regarder les lumières de la ville la nuit depuis cette hauteur est une expérience inoubliable. Un incontournable !",
    userName: "Emman Levi",
    userTitle: "D'Australie"
  },
  {
    userImage: userProfile,
    userText: "L’atmosphère au Temple Senso-ji était surréaliste. Les portes rouges vibrantes, l’encens et l’architecture époustouflante m’ont vraiment fait sentir connecté à l’histoire riche du Japon.",
    userName: "Marc JC",
    userTitle: "Des Etats-Unis"
  },
  {
    userImage: userProfile,
    userText: "Shibuya Crossing était incroyable ! Le nombre de personnes, les lumières et l’énergie sont quelque chose qu’il faut vivre en personne. C’est comme entrer dans une scène de film !",
    userName: "Laura Bent",
    userTitle: "De France"
  }
])

const animateText = () => {
  gsap.from(".animated-text", {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
  })
}

const animateCards = () => {
  gsap.from(".testimonial-card", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    stagger: 0.2,
  })
}

onMounted(() => {
  animateText();
  animateCards();
});
</script>

<template>
  <main class="min-h-screen">
    <div>
      <Header />
      <h1 class="pt-40 text-center text-heading-1 text-black px-5 md:px-20 animated-text">
        Ce que les voyageurs pensent de Tokyo
      </h1>
      <p class="mt-10 px-5 md:px-20 text-center mx-auto  text-xl animated-text">
        Tokyo, métropole où tradition et modernité s’entrelacent, fascine par ses néons éclatants et ses temples paisibles. Chaque coin de rue offre une expérience unique, que ce soit au croisement animé de Shibuya, en admirant la vue depuis Tokyo Skytree, ou en savourant les délices du marché de Tsukiji. Découvrez les impressions de ceux qui ont exploré cette ville vibrante.
      </p>
      <div class="pt-5 md:pt-10 lg:pt-10 px-5 md:px-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <TestimonialCard
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonial-card"
            :userImage="testimonial.userImage"
            :userText="testimonial.userText"
            :userName="testimonial.userName"
            :userTitle="testimonial.userTitle"
          />
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
