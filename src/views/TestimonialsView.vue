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
    userText: "Exploring Tsukiji was a food lover's dream. The freshest sushi and seafood I've ever had, and the market atmosphere was bustling!",
    userName: "Alex Dubro",
    userTitle: "From England"
  },
  {
    userImage: userProfile,
    userText: "Odaiba had a futuristic feel with its waterfront, giant Gundam statue and high-tech shopping malls. The sunset view from the Rainbow Bridge was magical.",
    userName: "Sarah Assina",
    userTitle: "From Canada"
  },
  {
    userImage: userProfile,
    userText: "Ueno Park was a peaceful escape from the hustle and bustle of the city. The cherry blossoms were beautiful, and visiting the zoo was a fun way to spend the day.",
    userName: "Diego delafuente",
    userTitle: "From Spain"
  },
  {
    userImage: userProfile,
    userText: "The view from Tokyo Skytree was breathtaking. Watching the city lights at night from this height is an unforgettable experience. A must-see!",
    userName: "Emman Levi",
    userTitle: "From Australia"
  },
  {
    userImage: userProfile,
    userText: "The atmosphere at Senso-ji Temple was surreal. The vibrant red doors, incense and stunning architecture really made me feel connected to Japan's rich history.",
    userName: "Marc JC",
    userTitle: "From USA"
  },
  {
    userImage: userProfile,
    userText: "Shibuya Crossing was incredible! The sheer number of people, the lights and the energy are something you have to experience in person. It's like stepping into a movie scene!",
    userName: "Laura Bent",
    userTitle: "From France"
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
            <h2 ref="titleRef1" class="text-3xl md:text-4xl ">Discover Tokyo Through Their Eyes</h2>
            <p ref="paragraphRef" class="text-lg md:text-xl mt-10">
              Travelers from all around the world have explored the wonders of Tokyo and fallen in love with its vibrant charm. Read their authentic stories, filled with awe, cultural discoveries, and unforgettable experiences. Let their journeys inspire you as you plan your own adventure in Japan’s captivating capital.  
            </p>
          </div>
          <div class="col-span-12 md:col-span-6">
            <img src="@/assets/slider-2.jpg" alt="" class="rounded-lg">
          </div>
        </section>
        <div class="pt-5 px-5 md:px-20 relative z-10">
          <h2 class="text-3xl md:text-4xl  mb-10">Testimonials</h2>
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
