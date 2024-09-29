<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import IconArrowGrowUp from '@/components/icons/IconArrowGrowUp.vue'
import { useTitleAnimation } from '@/composables/useTitleAnimation'
import { useParagraphAnimation } from '@/composables/useParagraphAnimation'

const titleRef1 = ref<HTMLElement | null>(null)
const titleRef2 = ref<HTMLElement | null>(null)
const textRef1 = ref<HTMLElement | null>(null)
const textRef2 = ref<HTMLElement | null>(null)
const textRef3 = ref<HTMLElement | null>(null)
const textRef4 = ref<HTMLElement | null>(null)
const paragraphRef1 = ref<HTMLElement | null>(null)
const paragraphRef2 = ref<HTMLElement | null>(null)


useTitleAnimation(titleRef1, .3)
useTitleAnimation(titleRef2, .5)
useParagraphAnimation(paragraphRef1, .5)
useParagraphAnimation(paragraphRef2, .7)
useTitleAnimation(textRef1, 0.5)
useTitleAnimation(textRef2, .7)
useTitleAnimation(textRef3, .7)
useTitleAnimation(textRef4, .9)

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const sections = document.querySelectorAll('.animated-section')

  sections.forEach((section, index) => {
    gsap.fromTo(
      section,
      { x: index % 2 === 0 ? -450 : 450, }, 
      {
        x: 0,
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'top center',
          scrub: true, 
        },
      }
    )
  })
})
</script>

<template>
  <section class="px-5 md:px-20 lg:gap-20 gap-5 grid py-5 md:py-10 grid-cols-12 mt-10 w-full min-h-[50rem] overflow-hidden">
    <div class="animated-section bg-black md:h-full h-[30rem] relative rounded-lg col-span-12 md:col-span-6 p-5 md:p-10">
      <div class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.gray.700)_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div class="relative z-20 text-white h-full">
        <div class="text-xs uppercase flex justify-between">
          <p ref="textRef1">Why Tokyo</p>
          <p ref="textRef2">All places</p>
        </div>
        <div class="w-full md:max-w-[30rem] my-auto mt-28 mx-auto">
          <h1 ref="titleRef1" class="text-2xl md:text-3xl lg:text-5xl">Discover the Magic of Tokyo</h1>
          <p ref="paragraphRef1" class="mt-2 md:mt-10">
            Tokyo is a vibrant metropolis that blends tradition and modernity. Explore its iconic neighborhoods, serene gardens, and world-renowned cuisine.
          </p>
        </div>
        <div 
          class="md:bottom-5 cursor-pointer rounded-lg bottom-0 justify-end items-end w-[95%] md:w-1/2 mx-auto bg-white text-black absolute p-5 md:p-5 right-[2.5%]"
        >
          <div class="flex justify-between">
            <span class="text-sm md:text-sm">Plan Your Trip</span>
            <IconArrowGrowUp class=" "/>
          </div>
        </div>
      </div>
    </div>
    <div class="animated-section bg-gray-100 md:h-full h-[30rem] relative rounded-lg col-span-12 md:col-span-6 p-5 md:p-10">
      <div class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.gray.300)_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div class="relative z-20 h-full">
        <div class="text-xs uppercase flex justify-between">
          <p ref="textRef3">Why Tokyo</p>
          <p ref="textRef4">All places</p>
        </div>
        <div class="w-full md:max-w-[30rem] my-auto mt-28 mx-auto">
          <h1 ref="titleRef2" class="text-2xl md:text-3xl lg:text-5xl -mt-10 md:mt-0">A City of Endless Possibilities</h1>
          <p ref="paragraphRef2" class="mt-5 md:mt-10">
            Immerse yourself in Tokyo's unique culture, where hospitality and safety come together to offer an unforgettable experience. Explore its festivals, temples, and contemporary art.
          </p>
        </div>
        <div 
          class="md:bottom-5 cursor-pointer rounded-lg bottom-0 justify-end items-end w-[95%] md:w-1/2 mx-auto bg-white text-black absolute p-5 md:p-5 right-[2.5%]"
        >
          <div class="flex justify-between">
            <span class="text-sm md:text-sm">Plan Your Trip</span>
            <IconArrowGrowUp class=" "/>
          </div>
        </div>
      </div>
    </div>
</section>


</template>
