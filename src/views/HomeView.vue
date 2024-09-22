<script setup lang="ts">
import Header from '@/components/base/Header.vue'
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import image1 from '@/assets/tokyo-1.avif'
import image2 from '@/assets/tokyo-2.avif'

const images = ref([image1, image2])
const currentIndex = ref(0)
const slideContainer = ref<HTMLElement | null>(null)
const progressBar = ref<HTMLElement | null>(null)

const duration = 2000 // Durée d'affichage de chaque image en ms

const animateSlides = () => {
  gsap.to(slideContainer.value, {
    x: `-${currentIndex.value * 100}%`,
    duration: 1,
    ease: 'power1.inOut',
    onComplete: () => {
      currentIndex.value = (currentIndex.value + 1) % images.value.length
      resetProgressBar()
      setTimeout(animateSlides, 2000) 
    }
  })
}

const resetProgressBar = () => {
  if (progressBar.value) {
    gsap.set(progressBar.value, { width: '0%' })
    gsap.to(progressBar.value, {
      width: '100%',
      duration: duration / 1000,
      ease: 'linear'
    })
  }
}

onMounted(() => {
  if (slideContainer.value) {
    slideContainer.value.style.width = `${images.value.length * 100}%`
  }
  resetProgressBar()
  setTimeout(animateSlides, 2000) 
})
</script>

<template>
  <Header />
  <main class="relative w-full h-[90vh] flex overflow-hidden">
    <div ref="slideContainer" class="flex h-full">
      
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        alt="Image"
        class="object-cover"
        style="flex: 0 0 100%"
      />
    </div>
    <div ref="progressBar" class="absolute bottom-0 left-0 h-1 bg-green-500" />
  </main>
</template>

<style scoped>
.flex {
  display: flex;
}
.progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5px; /* Hauteur de l'indicateur */
  background-color: green; /* Couleur de l'indicateur */
  transition: width 0.5s; /* Transition pour un remplissage fluide */
}
</style>
