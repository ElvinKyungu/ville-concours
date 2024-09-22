<script setup lang="ts">
import Header from '@/components/base/Header.vue'
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import image1 from '@/assets/tokyo-1.avif'
import image2 from '@/assets/tokyo-2.avif'
import image3 from '@/assets/tokyo-1.avif'

const images = ref([image1, image2, image3])
const currentIndex = ref(0)
const slideContainer = ref<HTMLElement | null>(null)

const animateSlides = () => {
  gsap.to(slideContainer.value, {
    x: `-${currentIndex.value * 100}%`,
    duration: 1,
    ease: 'power1.inOut',
    onComplete: () => {
      currentIndex.value = (currentIndex.value + 1) % images.value.length
      setTimeout(animateSlides, 1000) 
    }
  })
}

onMounted(() => {
  slideContainer.value.style.width = `${images.value.length * 100}%`
  setTimeout(animateSlides, 1000) 
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
        style="flex:  0 0 100%"
      />
    </div>
  </main>
</template>

<style scoped>
.flex {
  display: flex;
}
</style>
