<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
const props = defineProps<{
  images: string []
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

onMounted(() => {
  if (slideContainer.value) {
    slideContainer.value.style.width = `${props.images.length * 100}%`
  }
  resetProgressBar()
  updateIndicators()
  setTimeout(animateSlides, duration)
})
</script>

<template>
  <div class="relative w-full h-[50vh] flex overflow-hidden">
    <div ref="slideContainer" class="flex h-full relative">
      <div v-for="(image, index) in images" :key="index" class="flex flex-col items-center justify-center" style="flex: 0 0 100%">
        <img :src="image" alt="Image" class="object-cover rounded-lg absolute h-full w-full" />
      </div>
    </div>
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