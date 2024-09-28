<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import IconArrowGrowUp from './icons/IconArrowGrowUp.vue'
import imag1 from '@/assets/slider-1.jpg'
import imag2 from '@/assets/slider-2.jpg'
import imag3 from '@/assets/slider-3.jpg'
import imag4 from '@/assets/trigger-1.avif'
import imag5 from '@/assets/trigger-2.avif'

const buttonRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const paragraphRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const images = document.querySelectorAll('.animate-img')
  const tl = gsap.timeline({ repeat: 0, repeatDelay: 0.1 })

  tl.fromTo(images,
    {
      y: -200, 
      opacity: 0,
    },
    {
      y: 0, 
      opacity: 1,
      duration: 2,
      ease: "elastic.out(0.4, 0.4)", 
      stagger: {
        each: 0.2,
      }
    }
  );

  gsap.fromTo(titleRef.value, 
    {
      y: 50,
      opacity: 0,
      clipPath: "inset(100% 0% 0% 0%)",
    },
    {
      y: 0,
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)", 
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    }
  )

  gsap.fromTo(paragraphRef.value, 
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      delay: 1,
    }
  )
})

</script>

<template>
  <section class="grid relative z-40 grid-cols-12 px-5 md:px-20 py-36 md:py-20 lg:py-36">
    <div
      class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.gray.300)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div class="col-span-12 relative z-20 md:col-span-6 lg:py-10">
      <h2 ref="titleRef" class="text-3xl md:text-4xl lg:text-5xl">
        Welcome to Tokyo, the most vibrant city in the world Tokyo sets the pace for the future of urban living
      </h2>
      <p ref="paragraphRef" class="mt-12">
        Welcome to Tokyo, the most vibrant city in the world
        Tokyo sets the pace for the future of urban living—through the lens of culture, cutting-edge technology, and endless exploration
      </p>
      <button 
        ref="buttonRef"
        class="bg-black inline-flex gap-2 text-white py-4 px-5 mt-12 rounded-lg">
        How to travel in Tokyo
        <IconArrowGrowUp/>
      </button>
    </div>
    <div class="relative z-20 col-span-12 md:col-span-6 overflow-hidden mt-10 pt-5 pb-16">
      <div class="flex flex-wrap gap-4 -space-x-24 justify-center md:w-[32rem] h-full mx-auto">
        <img :src="imag1" alt="" class="animate-img image-animate rotate-12">
        <img :src="imag2" alt="" class="animate-img image-animate -rotate-12">
        <img :src="imag3" alt="" class="animate-img image-animate rotate-6">
        <img :src="imag4" alt="" class="animate-img image-animate -rotate-12">
        <img :src="imag5" alt="" class="animate-img image-animate object-cover">
      </div>
    </div>
  </section>
</template>

<style>
</style>
