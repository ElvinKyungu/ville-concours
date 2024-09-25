<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted, ref, nextTick } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const container = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

onMounted(async () => {
  await nextTick()

  if (container.value) {
    ctx = gsap.context((self) => {
      const images = self.selector?.('.image') as HTMLElement[] | undefined
      const amount = images?.length ? images.length - 1 : 0

      if (images && amount > 0) {
        gsap.to(images, {
          xPercent: -100 * amount,
          ease: 'none',
          scrollTrigger: {
            trigger: container.value, 
            start: 'top top', 
            end: '+=3500',
            scrub: 1,
            markers: false,
            pin: true,
            snap: 1 / amount
          }
        })
      }
    }, container.value)
  }
})

onUnmounted(() => {
  if (ctx) {
    ctx.revert() // Annule les effets de GSAP lors du démontage du composant
  }
})

const slides = [
  { id: 'one', color: 'bg-black' },
  { id: 'two', color: 'bg-orange-700' },
  { id: 'three', color: 'bg-emerald-700' },
  { id: 'four', color: 'bg-indigo-700' },
  { id: 'five', color: 'bg-pink-700' },
  { id: 'six', color: 'bg-teal-700' }
]
</script>

<template>
  <div class="overflow-hidden">
    <div class="h-screen w-[600%] flex overflow-hidden" ref="container">
      <div
        v-for="slide in slides"
        :key="slide.id"
        class="w-full h-full gap-5 relative text-white py-10 md:py-20 lg:py-32 grid grid-cols-12 px-5 md:px-10 lg:px-28 image"
        :class="slide.color"
      >
        <div class="col-span-3 relative w-full">
          <div class="flex w-full gap-3 justify-center items-center">
            <p class=" ">01</p>
            <p class="h-[1px] bg-white w-full"></p>
            <p class="">06</p>
          </div>
        </div>
        <div class="col-span-8 relative">
          <img 
            src="https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt=""
            class="absolute w-full h-[42rem] object-cover rounded-lg"
          >
        </div>
        <div class="col-span-1"></div>
        <div class="absolute bottom-1/4 left-[21%] ">
          <div class="-space-y-10">
            <h1 class="text-[6rem] font-medium">Welcome to tokyo</h1>
            <h1 class="text-[6rem] font-medium text-strok">Live the beauty</h1>
          </div>
          <p class="text-lg md:text-xl lg:text-2xl top-5">Vivez des moment uniques</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.text-strok {
  color: transparent;
  text-shadow: none;
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.9);
}
</style>