<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { gsap } from 'gsap'

const props = defineProps<{
  images: string[]
}>()

const currentIndex = ref(0)
const slideContainer = ref<HTMLElement | null>(null)
const progressBar = ref<HTMLElement | null>(null)
const duration = 2000

const pagination = computed(() => {
  return `${String(currentIndex.value + 1).padStart(2, '0')}/${String(props.images.length).padStart(2, '0')}`
})

const animateSlides = () => {
  gsap.to(slideContainer.value, {
    x: `-${currentIndex.value * 100}%`,
    duration: 1,
    ease: 'power1.inOut',
    onComplete: () => {
      resetProgressBar()
      updateIndicators()
      animatePagination()
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

const animatePagination = () => {
  gsap.fromTo(
    '.pagination',
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 0.5, ease: 'power1.out' }
  )
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
  animateSlides()
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
  animateSlides()
}

onMounted(() => {
  if (slideContainer.value) {
    slideContainer.value.style.width = `${props.images.length * 100}%`
  }
  resetProgressBar()
  updateIndicators()
  animatePagination()
  setTimeout(animateSlides, duration)
})
</script>

<template>
  <div class="relative w-full h-[50vh] flex overflow-hidden">
    <!-- Pagination -->
    <div class="absolute top-2 left-1/2 transform -translate-x-1/2 z-40 text-white pagination text-lg">
      {{ pagination }}
    </div>

    <!-- Slide Container -->
    <div ref="slideContainer" class="flex h-full relative">
      <div v-for="(image, index) in images" :key="index" class="flex flex-col items-center justify-center" style="flex: 0 0 100%">
        <img :src="image" alt="Image" class="object-cover rounded-lg absolute h-full w-full" />
      </div>
    </div>

    <!-- Manual Controls (Left/Right Buttons) -->
    <button @click="prevSlide" class="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 bg-white/50 hover:bg-white text-black p-2 rounded-full">
      ‹
    </button>
    <button @click="nextSlide" class="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 bg-white/50 hover:bg-white text-black p-2 rounded-full">
      ›
    </button>

    <!-- Progress Bar -->
    <div ref="progressBar" class="absolute z-40 bottom-0 left-0 h-2 bg-white" />

    <!-- Indicators -->
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
.pagination {
  transition: opacity 0.5s, transform 0.5s;
}
</style>
