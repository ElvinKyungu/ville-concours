<script setup lang="ts">
import { defineProps, computed } from 'vue'
import IconHeart from '@/components/icons/IconHeart.vue'
import IconStars from '@/components/icons/IconStars.vue'

const props = defineProps<{
  image: string
  title: string
  rating: string
  price: number | string
}>()

const formattedPrice = computed(() => {
  return typeof props.price === 'number' ? `$${props.price}` : props.price;
})
</script>

<template>
  <figure class="p-2 relative overflow-hidden group">
    <div class="relative overflow-hidden w-full h-64 rounded-lg">
      <img 
        :src="image" 
        class="transition-transform duration-500 transform group-hover:scale-140 rounded-lg w-full h-full object-cover cursor-pointer" 
        :alt="title"
      >
    </div>
    <figcaption class="top-5 right-5 absolute">
      <IconHeart/>
    </figcaption>
    <figcaption class="outside">
      <div class="flex justify-between px-2 mt-5">
        <h3 class="text-lg">{{ title }}</h3>
        <div class="flex items-center">
          <IconStars class="text-yellow-500"/>
          <span>{{ rating }}</span>
        </div>
      </div>
    </figcaption>
    <p class="px-2 text-sm text-gray-500">{{ formattedPrice }}</p>
  </figure>
</template>

<style scoped>
svg {
  cursor: pointer;
  stroke: white;
  stroke-width: 2;
}

figure {
  position: relative;
}

img {
  transition: transform 0.4s ease-in-out;
  transform-origin: center;
  border-radius: .5rem;
}

figure:hover img {
  transform: scale(1.2);
  border-radius: .5rem;
}
</style>
