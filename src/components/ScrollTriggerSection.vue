<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import imageTrigger1 from '@/assets/trigger-1.avif'
import imageTrigger2 from '@/assets/trigger-2.avif'
import imageTrigger3 from '@/assets/trigger-3.avif'
import imageTrigger4 from '@/assets/trigger-4.avif'
import imageTrigger5 from '@/assets/trigger-5.avif'
import imageTrigger6 from '@/assets/trigger-6.avif'

gsap.registerPlugin(ScrollTrigger)

const container = ref<HTMLElement | null>(null)
const currentSlideIndex = ref(1)
let ctx: gsap.Context | null = null

onMounted(async () => {
  await nextTick()

  if (container.value) {
    ctx = gsap.context((self) => {
      const images = self.selector ? self.selector('.image') as HTMLElement[] : undefined
      const amount = images?.length ? images.length : 0;

      if (images && amount > 0) {
        images.forEach((image, index) => {
          ScrollTrigger.create({
            trigger: image,
            start: 'top 80%',
            onEnter: () => {
              currentSlideIndex.value = index + 1;
            },
            onLeaveBack: () => {
              currentSlideIndex.value = index + 1;
            },
          })
        })

        gsap.to(images, {
          xPercent: -100 * (amount - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: container.value,
            start: 'top top',
            end: '+=3500',
            scrub: 1,
            markers: false,
            pin: true,
            snap: 1 / (amount - 1),
          },
        })
      }
    }, container.value)
  }
})

onUnmounted(() => {
  if (ctx) {
    ctx.revert()
  }
})

const slides = [
  { id: 'one', color: 'bg-black', image: imageTrigger1, title: 'Welcome to Tokyo', subtitle: 'Live the beauty' },
  { id: 'two', color: 'bg-orange-700', image: imageTrigger2, title: 'Explore the Night', subtitle: 'Discover hidden gems' },
  { id: 'three', color: 'bg-emerald-700', image: imageTrigger3, title: 'Nature Awaits', subtitle: 'Embrace the wild' },
  { id: 'four', color: 'bg-indigo-700', image: imageTrigger4, title: 'Journey Ahead', subtitle: 'Adventure calls' },
  { id: 'five', color: 'bg-pink-700', image: imageTrigger5, title: 'Taste the Culture', subtitle: 'Savor every bite' },
  { id: 'six', color: 'bg-teal-700', image: imageTrigger6, title: 'Art in Every Corner', subtitle: 'Get inspired' },
]
</script>

<template>
  <div class="overflow-hidden">
    <div class="h-screen w-[600%] flex overflow-hidden" ref="container">
      <div
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="w-full h-full gap-5 relative text-white py-10 md:py-20 lg:py-32 grid grid-cols-12 px-5 md:px-10 lg:px-28 image"
        :class="slide.color"
      >
        <div class="md:col-span-3 col-span-6 mt-10 md:mt-0 relative w-full">
          <div class="flex w-full gap-3 justify-center items-center">
            <p>{{ String(currentSlideIndex).padStart(2, '0') }}</p>
            <p class="h-[1px] bg-white w-full"></p>
            <p>{{ String(slides.length).padStart(2, '0') }}</p>
          </div>
        </div>
        <div class="col-span-12 md:col-span-8 relative">
          <img
            :src="slide.image" 
            :alt="slide.title"
            class="absolute w-full md:h-[30rem] h-[20rem] lg:h-[42rem] object-cover rounded-lg"
          >
        </div>
        <div class="col-span-1"></div>
        <div class="absolute bottom-[65%] left-[3%] lg:bottom-64 lg:left-[21%] ">
          <div class="md:-space-y-1 lg:-space-y-1">
            <h1 class="text-3xl md:text-6xl lg:text-[6rem] font-medium">{{ slide.title }}</h1>
            <h1 class="text-3xl md:text-6xl lg:text-[6rem] font-medium text-strok">{{ slide.subtitle }}</h1>
          </div>
          <p class="text-lg md:text-xl lg:text-2xl top-5">In Tokyo Dream and live</p>
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
