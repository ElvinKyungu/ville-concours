<script setup lang="ts">
import type { ArticleDetail } from '@/types/experiences'
import IconArrowGrowUp from '../icons/IconArrowGrowUp.vue'

defineProps<{
  historyContent: ArticleDetail[]
}>()
</script>

<template>
  <div v-for="(history, index) in historyContent" :key="index" class="mt-5">
    <div class="flex gap-4">
      <img :src="history.img" class="w-28 h-20" alt="">
      <div>
        <h3 class="">{{ history.title }}</h3>
        <h3 class="text-sm">{{ history.description }}</h3>
        <div class="flex justify-end w-full">
          <button class="flex py-2 px-5 bg-black/10 mt-5 rounded-full">Read more</button>
        </div>
      </div>
    </div>
  </div>
</template>
