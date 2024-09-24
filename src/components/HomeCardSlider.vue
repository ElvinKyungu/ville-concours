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
  gsap.set(".left-image", { x: "-100%", position: "absolute" })
  gsap.set(".center-image", { x: "0%", position: "absolute" })
  gsap.set(".right-image", { x: "100%", position: "absolute" })
})

const slideRight = () => {
  gsap.to(".center-image", { x: "-100%", duration: 0.5 }) 
  gsap.to(".right-image", { x: "0%", duration: 0.5 })
  gsap.to(".left-image", { x: "100%", duration: 0 })

  gsap.delayedCall(0.5, () => {
    currentIndex.value = (currentIndex.value + 1) % images.length
    updateImages()
    resetImagePositions()
  })
}

const slideLeft = () => {
  gsap.to(".center-image", { x: "100%", duration: 0.5 }) 
  gsap.to(".left-image", { x: "0%", duration: 0.5 })
  gsap.to(".right-image", { x: "-100%", duration: 0 })

  gsap.delayedCall(0.5, () => {
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
    updateImages()
    resetImagePositions()
  })
}

const updateImages = () => {
  leftImage.value = images[(currentIndex.value - 1 + images.length) % images.length]
  centerImage.value = images[currentIndex.value]
  rightImage.value = images[(currentIndex.value + 1) % images.length]
}

const resetImagePositions = () => {
  gsap.set(".left-image", { x: "-100%" })
  gsap.set(".center-image", { x: "0%" })
  gsap.set(".right-image", { x: "100%" })
}
</script>

<template>
  <section class="grid grid-cols-12 gap-4">
    <div class="col-span-3 relative overflow-hidden h-64">
      <div class="absolute inset-0 flex justify-center items-center">
        <img class="left-image w-full h-full object-cover" :src="leftImage" alt="Left Image">
      </div>
    </div>

    <div class="col-span-6 relative overflow-hidden h-64">
      <div class="absolute inset-0 flex justify-center items-center">
        <img class="center-image w-full h-full object-cover" :src="centerImage" alt="Center Image">
      </div>
    </div>

    <div class="col-span-3 relative overflow-hidden h-64">
      <div class="absolute inset-0 flex justify-center items-center">
        <img class="right-image w-full h-full object-cover" :src="rightImage" alt="Right Image">
      </div>
      <div class="flex justify-center gap-4 mt-4">
        <p class="px-5 bg-black rounded-full py-1 cursor-pointer" @click="slideLeft">
          <IconLeft class="text-white"/>
        </p>
        <p class="px-5 bg-black rounded-full py-1 cursor-pointer" @click="slideRight">
          <IconRight class="text-white"/>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.left-image, .center-image, .right-image {
  position: absolute;
}
</style>
