<script setup lang="ts">
import type { ExperienceDetail } from '@/types/experiences'
import IconArrowGrowUp from '../icons/IconArrowGrowUp.vue'
defineProps<({
  skills: ExperienceDetail[]
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
    </div>
  </div>
</template>