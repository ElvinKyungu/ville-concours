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
          start: "top 80%", 
          scrub: 1, 
          toggleActions: "play none none reverse",
          markers: true 
        }
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
          start: "top 80%",  
          scrub: 1, 
          toggleActions: "play none none reverse",
          markers: true 
        }
      }
    )
  }
})
</script>

<template>
  <section ref="sectionRef" class="px-5 md:px-20 lg:gap-10 gap-5 grid bg-black py-5 md:py-10 grid-cols-12 min-h-96 mt-96 w-full overflow-hidden"> <!-- Ajout de overflow-hidden ici -->
    <div class="col-span-12 md:col-span-7 mb-5">
      <div class="text-white flex justify-between text-xs">
        <p>04/10</p>
        <p>Best places</p>
      </div>
      <h1 class="text-heading-1 mt-20">Découvrir la belle ville du monde</h1>
      <p class="text-lg md:text-xl text-white mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nesciunt, sed aut aliquam rem natus amet quis aspernatur deserunt possimus tempora! Vel laborum quia quam eius asperiores magnam nam repellendus?
      </p>
      <button class="bg-white py-3 px-5 rounded-md mt-5">En savoir plus</button>
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
