<script setup lang="ts">
import img1 from '@/assets/trigger-1.avif'
import img2 from '@/assets/trigger-2.avif'
import img3 from '@/assets/trigger-3.avif'
import img4 from '@/assets/trigger-4.avif'
import img5 from '@/assets/trigger-5.avif'
import img6 from '@/assets/trigger-6.avif'
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

// Tableau des cartes
const cards = [
  {
    title: "Shibuya Crossing",
    description: "The iconic intersection of Tokyo’s energy.",
    image: img1,
  },
  {
    title: "Tokyo Skytree",
    description: "Stunning views from the city's tallest tower.",
    image: img2,
  },
  {
    title: "Senso-ji Temple",
    description: "Tokyo's oldest temple with timeless charm.",
    image: img3,
  },
  {
    title: "Meiji Shrine",
    description: "A peaceful escape in the heart of Tokyo.",
    image: img4,
  },
  {
    title: "Akihabara",
    description: "The ultimate hub for tech and anime lovers.",
    image: img5,
  },
  {
    title: "Tsukiji Market",
    description: "Fresh seafood and a taste of Tokyo’s cuisine.",
    image: img6,
  }
]

const cardsRef = ref<HTMLElement[]>([])
const titleRef = ref<HTMLElement | null>(null)
  onMounted(() => {
  const title = titleRef.value;
  const words = title?.innerText.split(' ') || [];
  title!.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');

  const wordElements = title?.querySelectorAll('.word');

  if (wordElements && wordElements.length > 0) {
    gsap.fromTo(
      wordElements,
      { y: '100%', clipPath: 'inset(0 0 100% 0)' },
      {
        y: '0%',
        clipPath: 'inset(0 0 0% 0)',
        duration: 1,
        ease: 'power4.out',
        stagger: 0.2,
      }
    );
  }

  gsap.fromTo(
    cardsRef.value,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power4.out',
      stagger: 0.2,
    }
  )
})
</script>

<template>
  <section class="flex flex-col w-full px-5 md:px-20 relative ">
    <div
      class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.gray.300)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <p class="relative z-10 ">Welcome</p>
    <h1 ref="titleRef" class="text-heading-1 relative z-10 text-black card-title">Discover the Top 6 Must-See Spots in Tokyo</h1> 
    <div class="grid grid-cols-1 relative z-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-8 mt-10">
      <div 
        v-for="(card, index) in cards" 
        :key="index" 
        class="p-7 bg-gray hover:bg-black/10 transition rounded-lg group duration-700 cursor-pointer"
      >
        <div ref="cardsRef" class="flex gap-5">
          <div class="md:w-14 h-14 w-20 rounded-lg bg-white relative group-hover:bg-black/10 transition-colors duration-700">
            <img :src="card.image" alt="" class="img-card-home">
          </div>
          <div>
            <h4 class="text-lg md:text-xl ">{{ card.title }}</h4>
            <p class="text-sm md:text-base card-description">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card-title, .card-description {
  overflow: hidden;
  display: inline-block;
}

.word {
  display: inline-block;
  overflow: hidden;
}
</style>
