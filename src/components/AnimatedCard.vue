<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import IconArrowGrowUp from './icons/IconArrowGrowUp.vue'
import imag1 from '@/assets/slider-1.jpg'
import imag2 from '@/assets/slider-2.jpg'
import imag3 from '@/assets/slider-3.jpg'
import imag4 from '@/assets/trigger-1.avif'
import imag5 from '@/assets/trigger-2.avif'

onMounted(() => {
  const images = document.querySelectorAll('.animate-img');
  const tl = gsap.timeline({ repeat: -1, repeatDelay: .1 });

  tl.fromTo(images,
    {
      scale: 0,
      opacity: 0 
    },
    {
      scale: 1,
      opacity: 1,
      duration: 2,
      ease:"elastic.out(0.4,0.4)",
      stagger: {
        each: 0.2,
      }
    }
  )
})
</script>

<template>
  <section class="grid relative z-40 grid-cols-12 px-5 md:px-20 py-10 md:py-20 lg:py-40">
    <div class="col-span-12 md:col-span-6">
      <h2 class="text-6xl">
        Welcome to Tokyo, the most vibrant city in the world Tokyo sets the pace for the future of urban living
      </h2>
      <p class="mt-12   ">
        Welcome to Tokyo, the most vibrant city in the world
        Tokyo sets the pace for the future of urban living—through the lens of culture, cutting-edge technology, and endless exploration
      </p>
      <button class="bg-black inline-flex gap-2 text-white py-4 px-5 mt-12 rounded-lg">
        How to travel in Tokyo
        <IconArrowGrowUp/>
      </button>
    </div>
    <div class="col-span-12 md:col-span-6">
      <div class="flex flex-wrap gap-4 -space-x-24 justify-center w-[31rem] mx-auto">
        <img
          :src="imag1" 
          alt=""
          class="animate-img image-animate rotate-12"
        >
        <img
          :src="imag2"
          alt=""
          class="animate-img image-animate -rotate-12"
        >
        <img
          :src="imag3"
          alt=""
          class="animate-img image-animate rotate-6"
        >
        <img
          :src="imag4"
          alt=""
          class="animate-img image-animate -rotate-12"
        >
        <img
          :src="imag5"
          alt=""
          class="animate-img image-animate object-cover"
        >
      </div>
    </div>
  </section>
</template>

<style>
</style>