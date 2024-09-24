<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
const props = defineProps<{
  images: { 
    src: string, 
    title: string, 
    description: string 
  }[]
}>()

const currentIndex = ref(0)
const slideContainer = ref<HTMLElement | null>(null)
const progressBar = ref<HTMLElement | null>(null)
const duration = 2000

const animateSlides = () => {
  gsap.to(slideContainer.value, {
    x: `-${currentIndex.value * 100}%`,
    duration: 1,
    ease: 'power1.inOut',
    onComplete: () => {
      currentIndex.value = (currentIndex.value + 1) % props.images.length
      resetProgressBar()
      updateIndicators()
      animateText()
      setTimeout(animateSlides, duration)
    }
  })
}

const resetProgressBar = () => {
  if (progressBar.value) {
    gsap.set(progressBar.value, { width: '0%' })
    gsap.to(progressBar.value, { width: '100%', duration: 1, ease: 'linear' })
  }
}

const updateIndicators = () => {
  const indicators = document.querySelectorAll('.indicator')
  indicators.forEach((indicator, index) => {
    gsap.to(indicator, { backgroundColor: index === currentIndex.value ? 'white' : 'transparent' })
  })
}

const animateText = () => {
  const title = props.images[currentIndex.value].title
  const description = props.images[currentIndex.value].description

  const titleElement = document.querySelector('.title')
  const descriptionElement = document.querySelector('.description')
  const buttonElement = document.querySelector('.action-button')

  if (titleElement && descriptionElement && buttonElement) {
    gsap.fromTo(titleElement, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power1.out' })
    gsap.fromTo(descriptionElement, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power1.out', delay: 0.2 })
    gsap.fromTo(buttonElement, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power1.out', delay: 0.4 })
  }
}

onMounted(() => {
  if (slideContainer.value) {
    slideContainer.value.style.width = `${props.images.length * 100}%`
  }
  resetProgressBar()
  updateIndicators()
  animateText() 
  setTimeout(animateSlides, duration)
})
</script>

<template>
  <div class="relative w-full h-[100vh] flex overflow-hidden">
    <div ref="slideContainer" class="flex h-full relative">
      <div v-for="(image, index) in images" :key="index" class="flex flex-col items-center justify-center" style="flex: 0 0 100%">
        <img :src="image.src" alt="Image" class="object-cover absolute h-full w-full" />
      </div>
    </div>
    <div class="absolute space-y-9 w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 text-center">
      <h2 class="title text-white text-2xl md:text-4xl lg:text-7xl font-semibold mt-4">
        {{ images[currentIndex].title }}
      </h2>
      <p class="description text-white text-xl md:text-xl lg:text-2xl text-center">
        {{ images[currentIndex].description }}
      </p>
      <button class="action-button px-4 py-3 border border-white hover:border-red-500 hover:bg-red-500 transition text-white rounded">
        En savoir plus
      </button>
    </div>
    <div class="absolute w-full h-full bg-black/50 z-10"></div>
    <div ref="progressBar" class="absolute z-40 bottom-0 left-0 h-2 bg-white" />
    <div class="absolute bottom-4 left-0 right-0 flex justify-center z-40">
      <div v-for="(image, index) in images" :key="index" class="indicator w-4 h-4 rounded-full border border-white mx-1 transition-all duration-300" :style="{ backgroundColor: index === currentIndex ? 'white' : 'transparent' }" />
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}
.indicator {
  transition: background-color 0.5s;
}
</style>