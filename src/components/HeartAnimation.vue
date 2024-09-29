<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import IconHeart from '@/components/icons/IconHeart.vue'

const hearts = Array.from({ length: 10 }, (_, i) => i + 1)
const heartRefs = ref<HTMLDivElement[]>([])


const animateHearts = () => {
  heartRefs.value.forEach((heart, index) => {
    if (!heart) return; // Ajout d'une vérification de sécurité

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
onMounted(() => {
  heartRefs.value = hearts.map((_, index) => document.querySelector(`.heart-animation-${index + 1}`)) as HTMLDivElement[]
})
</script>
<template>
  <div class="z-50 flex right-3 absolute top-0">
    <button @click="animateHearts" class="rounded-full bg-black/20 p-2">
      <IconHeart class="heart-icon text-white"/>
    </button>
    <div
      v-for="index in hearts"
      :key="index"
      :class="`heart-animation heart-animation-${index}`"
    >
      <IconHeart class="heart-icon"/>
    </div>
  </div>
</template>