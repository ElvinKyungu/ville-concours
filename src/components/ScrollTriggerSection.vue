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
  { id: 'one', color: 'bg-teal-700' },
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
        class="w-full h-full text-[60px] text-white flex justify-center items-center image"
        :class="slide.color"
      >
        {{ slide.id }}
      </div>
    </div>
    <div class="w-screen h-screen bg-violet-200"></div>
  </div>
</template>
