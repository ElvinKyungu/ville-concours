<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'
import type { ExperienceDetail } from '@/types/experiences'
import SkillsContent from './SkillsContent.vue'
import gsap from 'gsap'

defineProps<{
  experiences: ExperienceDetail
}>()

const activeHistoryType = ref<'articles' | 'personnages' >('articles')
const historyContentRef = ref<HTMLElement | null>(null)

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
    <div class="flex justify-between stagger-element -mt-10">
      <img src="@/assets/slider-2.jpg" alt="">
    </div>
    <div class="relative">
      <div class="grid grid-cols-12 stagger-element">
        <div class="col-span-12 md:col-span-6">
        </div>
        <div class="col-span-12 md:col-span-6 relative">
          <div class="flex justify-end items-end gap-4 absolute -top-36 right-10">
            <div class="rounded-full h-20 z-50 w-2 bg-yellow-500 stagger-element"></div>
            <div class="rounded-full h-14 z-50 w-2 bg-white stagger-element"></div>
            <div class="rounded-full h-28 z-50 w-2 bg-yellow-300 stagger-element"></div>
            <div class="rounded-full h-40 z-50 w-2 bg-green-600 stagger-element"></div>
            <div class="rounded-full h-28 z-50 w-2 bg-white stagger-element"></div>
            <div class="rounded-full h-32 z-50 w-2 bg-yellow-500 stagger-element"></div>
            <div class="rounded-full h-24 z-50 w-2 bg-red-500 stagger-element"></div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="mt-7 text-2xl stagger-element2">
      {{ experiences.title }}
    </h1>
    <div class="flex justify-start flex-wrap gap-5 mt-5 stagger-element2">
      <button
        class="py-2 px-5 rounded-full stagger-element2"
        :class="activeHistoryType === 'articles' ? 'bg-white text-black' : 'bg-black/10 '"
        @click="switchSkillType('articles')"
      >
        articles similaires
      </button>
      <button
        class="py-2 px-5 rounded-full stagger-element2"
        :class="activeHistoryType === 'personnages' ? 'bg-white text-black' : 'bg-black/10 text-black'"
        @click="switchSkillType('personnages')"
      >
        Personnage attachés
      </button>
    </div>
    <div ref="historyContentRef" class="mt-8">
      <SkillsContent :skills="experiences[activeHistoryType]" />
    </div>
  </div>
</template>

<style scoped>
button {
  transition: background-color 0.3s, color 0.3s;
}
</style>
