<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {gsap} from 'gsap'
import slider1 from "@/assets/slider-1.jpg"
import slider2 from "@/assets/slider-2.jpg"
import slider3 from "@/assets/slider-3.jpg"
import IconArrowGrowUp from '@/components/icons/IconArrowGrowUp.vue'
import IconHeart from '@/components/icons/IconHeart.vue'
import IconRight from './icons/IconRight.vue'

const cardInfos = [
  {
    componentName: "Tokyo Island Air",
    componentImage: slider1,
  },
  {
    componentName: "Okunitama-jinja Shrine Chestnut",
    componentImage: slider2,
  },
  {
    componentName: "Rue Kappabashi des ustensiles",
    componentImage: slider3,
  }
]

const hearts = Array.from({ length: 10 }, (_, i) => i + 1)
const heartRefs = ref<HTMLDivElement[]>([])

onMounted(() => {
  // Conversion de NodeList en tableau
  heartRefs.value = Array.from(document.querySelectorAll('.heart-animation')) as HTMLDivElement[]
});

const animateHearts = () => {
  heartRefs.value.forEach((heart, index) => {
    const tl = gsap.timeline({
      delay: index * 0.1, // Décalage entre les cœurs
    })

    tl.fromTo(
      heart,
      { opacity: 0, y: 0, x: 0, scale: 0.5, transformOrigin: 'center' },
      {
        opacity: 1,
        y: gsap.utils.random(50, 100), 
        x: gsap.utils.random(10, 50),
        scale: 1,
        duration: 1.5,
        ease: 'power2.out',
      }
    ).to(heart, {
      opacity: 0,
      scale: 0.5,
      duration: 0.5,
      ease: 'power2.in',
    })
  })
}

const stickyImageRef = ref<HTMLImageElement | null>(null)
const previousCardIndex = ref<number | null>(null)
const blockRef = ref<HTMLDivElement | null>(null);


const handleCardClick = (event: Event, cardIndex: number) => {
  const stickyImageElement = stickyImageRef.value;
  const blockElement = blockRef.value;

  if (stickyImageElement && blockElement) {
    const direction = (previousCardIndex.value !== null && cardIndex < previousCardIndex.value)
      ? 'bottom-to-top'
      : 'top-to-bottom';

    const tl = gsap.timeline({
      onStart: () => {
        stickyImageElement.src = cardInfos[cardIndex].componentImage;
      }
    })

    tl.to(blockElement, {
      opacity: 0,
      y: direction === 'top-to-bottom' ? '50%' : '-50%',
      duration: 0.25,
      ease: 'power2.in',
    })

    tl.fromTo(blockElement, 
      { opacity: 0, y: direction === 'top-to-bottom' ? '-50%' : '50%' },
      { opacity: 1, y: '0%', duration: 0.35, ease: 'power2.out' }
    )

    previousCardIndex.value = cardIndex
  }
}

</script>
<template>
  <section class="grid grid-cols-12 gap-7 relative py-10 md:py-20 px-5 md:px-20">
    <div
      class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.gray.300)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div class="col-span-12 md:col-span-6 relative z-30">
      <div class="flex flex-col justify-between w-full h-full">
        <h1 class="text-5xl">We bring bring the the future future home. home. </h1>
        <div class="grid grid-cols-12 md:flex justify-between gap-2 md:gap-5 items-center">
          <p class="w-full col-span-8">
            Lorem ipsum dolor sit amet consectetur adipisicing 
          </p>
          <div class="h-[1px] col-span-4 bg-black w-full"></div>
        </div>
      </div>
    </div>
    <div class="col-span-12 lg:col-span-6 relative z-30">
      <div class="grid grid-cols-12 gap-5">
        <div class="col-span-2 hidden md:block"></div>
        <div class="col-span-6 md:col-span-5 bg-black text-white p-5 h-32 rounded-md">
          <div class="flex justify-between w-full">
            <span>C'est ton premier voyage</span>
            <IconRight class="text-white"/>
          </div>
        </div>
        <div class="col-span-6 md:col-span-5 bg-blue-500 p-5 h-32 rounded-md">
          <div class="flex justify-between w-full">
            <span>Let's go</span>
            <IconRight/>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-12 bg-gray-100 mt-5 p-5 rounded-lg md:p-7">
        <div class="text-lg uppercase col-span-2">Project</div>
        <div class="col-span-12 md:col-span-10">
          <section class="flex justify-center flex-col items-center w-full relative z-0">
            <div class="grid grid-cols-12 gap-5 relative w-full h-full">
              <div class="sticky col-span-12 md:col-span-6 overflow-hidden h-72 w-full">
                <div ref="blockRef" class="h-full w-full relative">
                  <div class="absolute right-5 top-5 flex justify-between w-full">
                    <div class="z-50 flex right-3 absolute top-0">
                      <button @click="animateHearts" class="rounded-full bg-black/20 p-2">
                        <IconHeart class="heart-icon text-white"/>
                      </button>
                      <div
                        v-for="index in hearts"
                        :key="index"
                        class="heart-animation"
                        ref="hearts"
                      >
                        <IconHeart class="heart-icon"/>
                      </div>
                    </div>
                    <button class="preview-button text-white z-40 absolute flex gap-2 left-10 bg-black/20 backdrop-blur-sm top-1 rounded-full border border-white px-5 py-1">
                      <span class="text-sm">Preview</span>
                      <IconArrowGrowUp class="w-4 h-4 text-white" />
                    </button>
                  </div>
                  <img
                    ref="stickyImageRef"
                    :src="cardInfos[0].componentImage" 
                    alt="" 
                    class="absolute object-cover h-72 w-full cursor-pointer rounded-2xl"
                  >
                </div>
              </div>
              <div class="col-span-12 md:col-span-6">
                <div 
                  v-for="(card, index) in cardInfos" :key="index" 
                  class="relative cursor-pointer" 
                  @click="(event) => handleCardClick(event, index)"
                >
                  <div
                    class="py-4flex flex-col w-full bottom-16 text-black details gap-1"
                  >
                    <div class="components-result">
                      <div class="flex items-center gap-3">
                        <IconCode />
                        <span class="">{{ card.componentName }}</span>
                      </div>
                      <div class="flex items-center gap-3 ">
                        <span class="components-link">see </span>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
<style>

.heart-icon {
  width: 1.5rem;
  height: 1.5rem;
  fill: white;
}

.heart-animation {
  position: absolute;
  top: 0;
  opacity: 0; 
  right: 2rem;
}
</style>