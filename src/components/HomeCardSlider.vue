<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import IconRight from './icons/IconRight.vue'
import IconLeft from './icons/IconLeft.vue'
import img1 from "@/assets/tokyo-1.avif"
import img2 from "@/assets/tokyo-2.avif"
import img3 from "@/assets/user.png"

const images = [img1, img2, img3]

const leftImage = ref(images[images.length - 1])
const centerImage = ref(images[0])
const rightImage = ref(images[1])
const currentIndex = ref(0)

onMounted(() => {
  resetImageOpacity()
})

const slideRight = () => {
  fadeOutAll(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
    updateImages()
    fadeInAll()
  })
}

const slideLeft = () => {
  fadeOutAll(() => {
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
    updateImages()
    fadeInAll()
  })
}

const fadeOutAll = (callback: () => void) => {
  gsap.to(".left-image, .center-image, .right-image", { opacity: 0, duration: 0.2, onComplete: callback })
}

const fadeInAll = () => {
  gsap.to(".left-image, .center-image, .right-image", { opacity: 1, duration: 0.2 })
}

const updateImages = () => {
  leftImage.value = images[(currentIndex.value - 1 + images.length) % images.length]
  centerImage.value = images[currentIndex.value]
  rightImage.value = images[(currentIndex.value + 1) % images.length]
}

const resetImageOpacity = () => {
  gsap.set(".left-image, .center-image, .right-image", { opacity: 1 })
}
</script>

<template>
  <section class="grid grid-cols-12 gap-4 relative mb-5">
    <div class="col-span-3 overflow-hidden">
      <p class="text-center text-xs font-bold">01/02</p>
    </div>
    <div class="col-span-6 overflow-hidden ">
      <div class="flex justify-center gap-4 mt-4">
        <p class="px-5 bg-black rounded-full py-1 cursor-pointer" @click="slideLeft">
          <IconLeft class="text-white"/>
        </p>
        <p class="px-5 bg-black rounded-full py-1 cursor-pointer" @click="slideRight">
          <IconRight class="text-white"/>
        </p>
      </div>
    </div>
    <div class="col-span-3 overflow-hidden">
      <p class="text-center text-xs font-bold">03/03</p>
    </div>
  </section>
  <section class="grid grid-cols-12 gap-4 relative">
    <div class="col-span-3 overflow-hidden h-72">
      <div class="relative flex justify-center items-center h-full w-full">
        <img class="left-image w-full h-full object-cover absolute" :src="leftImage" alt="Left Image">
      </div>
    </div>

    <div class="col-span-6 overflow-hidden h-96">
      <div class="relative flex justify-center items-center h-full w-full">
        <img class="center-image w-full h-full object-cover absolute" :src="centerImage" alt="Center Image">
      </div>
    </div>

    <div class="col-span-3 overflow-hidden h-72">
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
