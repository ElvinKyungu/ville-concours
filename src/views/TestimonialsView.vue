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
      <div class="relative py-10">
        <div
          class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.gray.300)_1px,transparent_1px)] [background-size:16px_16px]"
        ></div>
        <section class="grid  relative gap-5 z-40 grid-cols-12 px-5 md:px-20 py-10 md:py-20 lg:py-28">
          <div class="col-span-12 md:col-span-6">
            <h2 ref="titleRef1" class="text-5xl">Discover Tokyo Through Their Eyes</h2>
            <p ref="paragraphRef" class="text-lg md:text-xl mt-10">
              Travelers from all around the world have explored the wonders of Tokyo and fallen in love with its vibrant charm. Read their authentic stories, filled with awe, cultural discoveries, and unforgettable experiences. Let their journeys inspire you as you plan your own adventure in Japan’s captivating capital.  
            </p>
          </div>
          <div class="col-span-12 md:col-span-6">
            <img src="@/assets/slider-2.jpg" alt="" class="rounded-lg">
          </div>
        </section>
        <div class="pt-5 px-5 md:px-20">
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
      
      
    </div>
  </main>
  <Footer />
</template>
