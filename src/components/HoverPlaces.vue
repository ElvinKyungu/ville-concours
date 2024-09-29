<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import imgshrine from '@/assets/shrines.avif'
import imgParanomic from '@/assets/panoramic.avif'
import imgHotel1 from '@/assets/luxur-hotel.avif'
import imgHotel3 from '@/assets/hotel3.avif'
import imgCuisine1 from '@/assets/cuisine1.avif'
import imgShopping5 from '@/assets/nightligh2.avif'

const listContainer1 = ref<HTMLElement | null>(null)
const listContainer2 = ref<HTMLElement | null>(null)
const listContainer3 = ref<HTMLElement | null>(null)

onMounted(() => {
  if (listContainer1.value) {
    gsap.from(listContainer1.value?.children, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.2,
      ease: "power2.out"
    })
  }
  
  if (listContainer2.value) {
    gsap.from(listContainer2.value?.children, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.2,
      ease: "power2.out" 
    })
  }
  if (listContainer3.value) {
    gsap.from(listContainer3.value?.children, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.2,
      ease: "power2.out" 
    })
  }
})
</script>

<template>
  <div class="py-10 max-w-7xl mx-auto flex justify-between">
    <ul ref="listContainer1" class="space-y-5 flex flex-col w-full">
      <li class="flex gap-3 cursor-pointer">
        <div class="app-result">
          <img
            :src="imgParanomic" 
            class="w-16 rounded-xl object-cover h-16 shrink-0"
          />
          <div class="w-full flex flex-col items-start">
            <p class="text-lg">Panoramic Viewpoint</p>
            <p class="opacity-90">Best place</p>
          </div>
        </div>
      </li>
      <li class="flex gap-3 cursor-pointer">
        <div class="app-result">
          <img
            :src="imgshrine"
            class="w-16 rounded-xl object-cover h-16 shrink-0"
          />
          <div class="w-full flex flex-col items-start">
            <p class="text-lg">Temples and Shrines</p>
            <p class="opacity-90">Best place to pray</p>
          </div>
        </div>
      </li>
    </ul>
    <ul ref="listContainer2" class="space-y-5 flex flex-col w-full">
      <li class="flex gap-3 cursor-pointer">
        <div class="app-result">
          <img
            :src="imgHotel3" 
            class="w-16 rounded-xl object-cover h-16 shrink-0"
          />
          <div class="w-full flex flex-col items-start">
            <p class="text-lg">Capsule Hotels</p>
            <p class="opacity-90">Unique Accommodations</p>
          </div>
        </div>
      </li>
      <li class="flex gap-3 cursor-pointer">
        <div class="app-result">
          <img
            :src="imgHotel1" 
            class="w-16 rounded-xl object-cover h-16 shrink-0"
          />
          <div class="w-full flex flex-col items-start">
            <p class="text-lg">Park Hyatt Tokyo</p>
            <p class="opacity-90">When you want to sleep</p>
          </div>
        </div>
      </li>
    </ul>
    <ul ref="listContainer3" class="space-y-5 flex flex-col w-full">
      <li class="flex gap-3 cursor-pointer">
        <div class="app-result ">
          <img
            :src="imgShopping5" 
            class="w-16 rounded-xl object-cover h-16 shrink-0"
          />
          <div class="w-full flex flex-col items-start">
            <p class="text-lg">Tokyo of night</p>
            <p class="opacity-90">Tokyo is also the night life</p>
          </div>
        </div>
      </li>
      <li class="flex gap-3 cursor-pointer">
        <div class="app-result ">
          <img
            :src="imgCuisine1" 
            class="w-16 rounded-xl object-cover h-16 shrink-0"
          />
          <div class="w-full flex flex-col items-start">
            <p class="text-lg">Tokyo Cuisine Palace</p>
            <p class="opacity-90">Best food</p>
          </div>
        </div>
      </li>
    </ul> 
  </div>
</template>