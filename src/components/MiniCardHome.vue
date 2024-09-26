<script setup lang="ts">
import img1 from '@/assets/trigger-1.avif'
import img2 from '@/assets/trigger-2.avif'
import img3 from '@/assets/trigger-3.avif'
import img4 from '@/assets/trigger-4.avif'
import img5 from '@/assets/trigger-5.avif'
import img6 from '@/assets/trigger-6.avif'
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
</script>

<template>
  <section class="flex flex-col w-full px-5 md:px-20 py-10 md:py-20 lg:py-28">
    <p>Welcome</p>
    <h1 class="text-heading-1 text-black">Discover the Top 6 Must-See Spots in Tokyo</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-4 md:gap-y-10 mt-10">
      <div 
        v-for="(card, index) in cards" 
        :key="index" 
        class="p-7 bg-gray hover:bg-black/10 transition rounded-lg group duration-700 cursor-pointer"
      >
        <div class="flex gap-5">
          <div class="w-14 h-14 rounded-lg bg-white relative group-hover:bg-black/10 transition-colors duration-700">
            <img :src="card.image" alt="" class="img-card-home">
          </div>
          <div>
            <h4 class="text-xl ">{{ card.title }}</h4>
            <p class="">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
