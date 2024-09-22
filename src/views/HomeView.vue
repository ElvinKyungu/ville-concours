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

const duration = 2000 // Durée totale pour chaque image

const animateSlides = () => {
  gsap.to(slideContainer.value, {
    x: `-${currentIndex.value * 100}%`,
    duration: 1,
    ease: 'power1.inOut',
    onComplete: () => {
      currentIndex.value = (currentIndex.value + 1) % images.value.length
      resetProgressBar()
      updateIndicators()
      setTimeout(animateSlides, duration) 
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

const updateIndicators = () => {
  const indicators = document.querySelectorAll('.indicator')
  indicators.forEach((indicator, index) => {
    gsap.to(indicator, {
      backgroundColor: index === currentIndex.value ? 'white' : 'transparent',
      duration: 0.1
    })
  })
}

onMounted(() => {
  if (slideContainer.value) {
    slideContainer.value.style.width = `${images.value.length * 100}%`
  }
  resetProgressBar()
  updateIndicators()
  setTimeout(animateSlides, duration) 
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
    <div ref="progressBar" class="absolute bottom-0 left-0 h-2 bg-red-500" />
    <div class="absolute bottom-4 left-0 right-0 flex justify-center">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="indicator w-4 h-4 rounded-full border border-white mx-1 transition-all duration-300"
        :style="{ backgroundColor: index === currentIndex ? 'white' : 'transparent' }"
      />
    </div>
  </main>
</template>

<style scoped>
.flex {
  display: flex;
}
.indicator {
  transition: background-color 0.5s;
}
</style>
