<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const section = sectionRef.value

  if (section) {
    const elements = section.children

    gsap.fromTo(elements[0], 
      { x: -300, opacity: 0 }, 
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        ease: 'power4.out',
        scrollTrigger: {
          trigger: section,
          start: "top bottom", 
          scrub: 1, 
          toggleActions: "play none none reverse",
        },
      }
    )

    gsap.fromTo(elements[1], 
      { x: 300, opacity: 0 }, 
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        ease: 'power4.out',
        scrollTrigger: {
          trigger: section,
          start: "top bottom",  
          scrub: 1, 
          toggleActions: "play none none reverse",
        }
      }
    )
  }
})
</script>

<template>
  <section ref="sectionRef" class="px-5 md:px-20 lg:gap-20 gap-5 grid bg-black py-5 md:py-10 grid-cols-12 min-h-96 mt-40 w-full overflow-hidden">
    <div class="col-span-12 md:col-span-7 mb-5">
      <div class="text-white flex justify-between text-xs">
        <p>Discover Tokyo</p>
        <p>Ideal place for sightseeing</p>
      </div>
      <h1 class="text-heading-1 mt-20">Discover the world's most beautiful city</h1>
      <p class="text-lg md:text-xl text-white my-10">
        Tokyo is a city that never stops surprising you, constantly unveiling new layers of its vibrant culture and lifestyle. Every season brings a fresh wave of events, from the breathtaking cherry blossom festivals that paint the city in soft pink hues during spring to the dazzling summer fireworks displays that light up the night sky. Each neighborhood buzzes with its own unique celebrations, whether it’s local food festivals or traditional ceremonies, inviting both locals and visitors to partake in the joy.
      </p>
      <button class="bg-white py-3 px-5 rounded-md mt-5">Discover more</button>
    </div>
    <div class="col-span-12 md:col-span-5 flex flex-col w-full h-full relative">
      <div class="text-white flex justify-between text-sm">
        <p class="text-xs">04/10</p>
        <p>Best places</p>
      </div>
      <img src="@/assets/tokyo-2.avif" alt="" class="rounded-lg my-20 h-full w-full object-cover"> <!-- Ajout de object-cover pour l'image -->
    </div>
  </section>
</template>

<style scoped>
</style>
