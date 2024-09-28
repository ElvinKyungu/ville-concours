<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'
import type { ExperienceDetail } from '@/types/experiences'
import HistoryContent from './HistoryContent.vue'
import gsap from 'gsap'

defineProps<{
  experiences: ExperienceDetail
}>()

const activeHistoryType = ref<'articles' | 'personnages'>('articles')
const historyContentRef = ref<HTMLElement | null>(null)

// Trigger GSAP Animations
const triggerAnimations = () => {
  gsap.from('.stagger-element', {
    opacity: 0,
    y: 20,
    duration: 0.3,
    stagger: 0.1,
    ease: 'power2.out',
  })
  gsap.from('.stagger-element2', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
  })

  if (historyContentRef.value) {
    gsap.fromTo(
      historyContentRef.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'quad.inOut' }
    )
  }
}

const switchSkillType = (skillType: 'articles' | 'personnages') => {
  if (skillType !== activeHistoryType.value) {
    activeHistoryType.value = skillType
  }
}

watch(activeHistoryType, async () => {
  await nextTick()
  triggerAnimations()
})

onMounted(() => {
  triggerAnimations()
})
</script>

<template>
  <div ref="rightPanel" class="">
    <div class="flex justify-between stagger-element my-5 lg:-mt-10">
      <img :src="experiences.image" alt="" class="rounded-lg h-96 w-full object-cover cursor-pointer">
    </div>
    <div class="relative">
      <div class="grid grid-cols-12 stagger-element">
        <div class="col-span-12 md:col-span-6">
        </div>
        <div class="col-span-12 md:col-span-6 relative">
          <div class="flex justify-end items-end gap-4 absolute -bottom-5 right-10">
            <div class="bg-yellow-500 stagger-element h-20 z-50 w-2 rounded-full"></div>
            <div class="bg-white stagger-element h-40 z-50 w-2 rounded-full"></div>
            <div class="bg-yellow-300 stagger-element h-56 z-50 w-2 rounded-full"></div>
            <div class="bg-green-600 stagger-element h-10 z-50 w-2 rounded-full"></div>
            <div class="bg-white stagger-element h-32 z-50 w-2 rounded-full"></div>
            <div class="bg-indigo-500 stagger-element h-20 z-50 w-2 rounded-full"></div>
            <div class="bg-red-500 stagger-element h-40 z-50 w-2 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="mt-7 text-2xl stagger-element2">
      {{ experiences.title }}
    </h1>
    <p class="mt-5 stagger-element2 mb-10">{{ experiences.description}}</p>
    <div class="flex justify-start flex-wrap gap-5 mt-5 stagger-element2">
      <button
        class="py-2 px-5 rounded-full stagger-element2"
        :class="activeHistoryType === 'articles' ? 'bg-black text-white' : 'border'"
        @click="switchSkillType('articles')"
      >
        Articles Similaires
      </button>
      <button
        class="py-2 px-5 rounded-full stagger-element2"
        :class="activeHistoryType === 'personnages' ? 'bg-black text-white' : 'border'"
        @click="switchSkillType('personnages')"
      >
        Personnages Attachés
      </button>
    </div>
    <div ref="historyContentRef" class="mt-8">
      <HistoryContent :historyContent="experiences[activeHistoryType]" />
    </div>
  </div>
</template>

<style scoped>
button {
  transition: background-color 0.3s, color 0.3s;
}
</style>
