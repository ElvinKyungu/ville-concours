<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'
import type { ExperienceDetail } from '@/types/experiences.ts'
import SkillsContent from './SkillsContent.vue'
import gsap from 'gsap'

defineProps<{
  experiences: ExperienceDetail
}>()

const activeSkillType = ref<'softSkills' | 'hardSkills' | 'creativeSkills'>('softSkills')
const skillsContentRef = ref<HTMLElement | null>(null)

// Function to trigger animations
const triggerAnimations = () => {
  gsap.from('.stagger-element', {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.2,
    ease: 'power2.out',
  })
  gsap.from('.stagger-element2', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.4,
    ease: 'power2.out',
  })
  
  if (skillsContentRef.value) {
    gsap.fromTo(
      skillsContentRef.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'quad.inOut' }
    )
  }
}

// Function to switch skill type
const switchSkillType = (skillType: 'softSkills' | 'hardSkills' | 'creativeSkills') => {
  if (skillType !== activeSkillType.value) {
    activeSkillType.value = skillType
  }
}

// Watch for skill type changes and animate the skills content
watch(activeSkillType, async () => {
  await nextTick()
  triggerAnimations()
})

// Trigger animations on component mount
onMounted(() => {
  triggerAnimations()
})
</script>


<template>
  <div ref="rightPanel" class="">
    <div class="flex justify-between stagger-element">
      <img src="@/assets/slider-2.jpg" alt="">
    </div>
    <div class="relative">
      
      <div class="flex w-full stagger-element">
        <div class="w-1/2 flex items-end gap-3">
          
        </div>
        <div class="w-1/2 flex justify-end items-end gap-4 -mt-20">
          <div class="rounded-full h-20 z-50 w-2 bg-yellow-200 stagger-element"></div>
          <div class="rounded-full h-14 z-50 w-2 bg-yellow-100 stagger-element"></div>
          <div class="rounded-full h-28 z-50 w-2 bg-yellow-300 stagger-element"></div>
          <div class="rounded-full h-40 z-50 w-2 bg-green-400 stagger-element"></div>
          <div class="rounded-full h-28 z-50 w-2 bg-white stagger-element"></div>
          <div class="rounded-full h-32 z-50 w-2 bg-yellow-500 stagger-element"></div>
          <div class="rounded-full h-24 z-50 w-2 bg-green-200 stagger-element"></div>
        </div>
      </div>
    </div>
    <h1 class="mt-7 text-2xl stagger-element2">What I learned from this work</h1>
    <div class="flex justify-start gap-5 mt-5 stagger-element2">
      <button
        class="py-2 px-5 rounded-full stagger-element2"
        :class="activeSkillType === 'softSkills' ? 'bg-white text-black' : 'bg-black/10 '"
        @click="switchSkillType('softSkills')"
      >
        Soft Skills
      </button>
      <button
        class="py-2 px-5 rounded-full stagger-element2"
        :class="activeSkillType === 'hardSkills' ? 'bg-white text-black' : 'bg-black/10 text-black'"
        @click="switchSkillType('hardSkills')"
      >
        Hard Skills
      </button>
      <button
        class="py-2 px-5 rounded-full stagger-element2"
        :class="activeSkillType === 'creativeSkills' ? 'bg-white text-black' : 'bg-black/10'"
        @click="switchSkillType('creativeSkills')"
      >
        Creative Skills
      </button>
    </div>
    <div ref="skillsContentRef" class="mt-8">
      <SkillsContent :skills="experiences[activeSkillType]" />
    </div>
  </div>
</template>

<style scoped>
button {
  transition: background-color 0.3s, color 0.3s;
}
</style>
