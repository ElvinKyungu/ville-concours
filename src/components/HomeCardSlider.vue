<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import IconRight from './icons/IconRight.vue'
import IconLeft from './icons/IconLeft.vue'
import img1 from "@/assets/shrines.avif"
import img2 from "@/assets/hotel3.avif"
import img3 from "@/assets/shopping3.avif"

gsap.registerPlugin(ScrollTrigger)

const images = [img1, img2, img3]

const leftImage = ref(images[images.length - 1])
const centerImage = ref(images[0])
const rightImage = ref(images[1])
const currentIndex = ref(0)

onMounted(() => {
  resetImageOpacity()
  setupScrollTriggerAnimations()
})

const slideRight = () => {
  fadeOutSequence('right', () => {
    currentIndex.value = (currentIndex.value + 1) % images.length
    updateImages()
    fadeInSequence('right')
  })
}

const slideLeft = () => {
  fadeOutSequence('left', () => {
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
    updateImages()
    fadeInSequence('left')
  })
}

const fadeOutSequence = (direction: string, callback: () => void) => {
  const tl = gsap.timeline({ onComplete: callback })

  if (direction === 'right') {
    tl.to(".left-image", { opacity: 0, duration: 0.2 })
      .to(".center-image", { opacity: 0, duration: 0.2 })
      .to(".right-image", { opacity: 0, duration: 0.2 })
  } else {
    tl.to(".right-image", { opacity: 0, duration: 0.2 })
      .to(".center-image", { opacity: 0, duration: 0.2 })
      .to(".left-image", { opacity: 0, duration: 0.2 })
  }
}

const fadeInSequence = (direction: string) => {
  const tl = gsap.timeline()

  if (direction === 'right') {
    tl.to(".left-image", { opacity: 1, duration: 0.2 })
      .to(".center-image", { opacity: 1, duration: 0.2 })
      .to(".right-image", { opacity: 1, duration: 0.2 })
  } else {
    tl.to(".right-image", { opacity: 1, duration: 0.2 })
      .to(".center-image", { opacity: 1, duration: 0.2 })
      .to(".left-image", { opacity: 1, duration: 0.2 })
  }
}

const updateImages = () => {
  leftImage.value = images[(currentIndex.value - 1 + images.length) % images.length]
  centerImage.value = images[currentIndex.value]
  rightImage.value = images[(currentIndex.value + 1) % images.length]
}

const resetImageOpacity = () => {
  gsap.set(".left-image, .center-image, .right-image", { opacity: 1 })
}

const setupScrollTriggerAnimations = () => {
  gsap.fromTo(".left-image", 
    { x: -300, opacity: 0 },
    { 
      x: 0, 
      opacity: 1, 
      duration: 1, 
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".left-image",
        start: "top bottom",
        end: "top center",
        scrub: 1,
      }
    }
  )

  gsap.fromTo(".center-image", 
    { y: 300, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 1, 
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".center-image",
        start: "top bottom",
        end: "top center",
        scrub: 1,
      }
    }
  )

  gsap.fromTo(".right-image", 
    { x: 300, opacity: 0 },
    { 
      x: 0, 
      opacity: 1, 
      duration: 1, 
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".right-image",
        start: "top bottom",
        end: "top center",
        scrub: 1,
      }
    }
  )
}
</script>


<template>
  <section class="grid grid-cols-12 gap-4 relative mb-5 items-center">

    <div class="col-span-3 md:col-span-2 text-center">
      
    </div>

    <div class="col-span-6 md:col-span-8 flex justify-center gap-4 mt-4">
      <p class="px-3 md:px-5 bg-black rounded-full py-1 cursor-pointer" @click="slideLeft">
        <IconLeft class="text-white"/>
      </p>
      <p class="px-3 md:px-5 bg-black rounded-full py-1 cursor-pointer" @click="slideRight">
        <IconRight class="text-white"/>
      </p>
    </div>

    <div class="col-span-3 md:col-span-2 text-center">
    </div>
  </section>

  <section class="grid grid-cols-12 gap-4 relative">
    <div class="col-span-3 md:col-span-3 overflow-hidden h-48 sm:h-64 md:h-72">
      <div class="relative flex justify-center items-center h-full w-full">
        <img class="left-image w-full h-full object-cover absolute" :src="leftImage" alt="Left Image">
      </div>
    </div>

    <div class="col-span-6 md:col-span-6 overflow-hidden h-60 sm:h-80 md:h-96">
      <div class="relative flex justify-center items-center h-full w-full">
        <img class="center-image w-full h-full object-cover absolute" :src="centerImage" alt="Center Image">
      </div>
    </div>

    <div class="col-span-3 md:col-span-3 overflow-hidden h-48 sm:h-64 md:h-72">
      <div class="relative flex justify-center items-center h-full w-full">
        <img class="right-image w-full h-full object-cover absolute" :src="rightImage" alt="Right Image">
      </div>
    </div>
  </section>
</template>

<style scoped>
  .left-image, .center-image, .right-image {
    transition: opacity 0.5s ease;
  }
</style>
