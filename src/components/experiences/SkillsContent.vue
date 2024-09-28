<script setup lang="ts">
import type { SkillDetail } from '@/types/experiences'
import IconArrowGrowUp from '../icons/IconArrowGrowUp.vue'
defineProps<({
  skills: SkillDetail[]
})>()
</script>
<template>
  <div v-for="(skill, index) in skills" :key="index" class="mt-5">
    <h3 class="italic">{{ skill.title }} </h3>
    <p class="text-gray-400">
      {{ skill.description }}
    </p>
    <div class="flex justify-between items-center">
      <p class="flex gap-2 items-center">
        <IconArrowGrowUp class="text-green-400"/>{{ skill.title }}
      </p>
      <div class="flex items-center gap-2">
        <IconFlag :class="{'text-yellow-600': !skill.isHigh, 'text-red-600': skill.isHigh}"/>
        <span>{{ skill.isHigh ? 'High' : 'Middle' }}</span>
      </div>
      <div>
        <img :src="skill.image" 
        alt="" 
        class="w-8 h-8 object-cover rounded-full">
      </div>
    </div>
  </div>
</template>