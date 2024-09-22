<script setup lang="ts">
import Header from '@/components/base/Header.vue'
import ImageBanner from '@/components/ImageBanner.vue'
import image1 from '@/assets/tokyo-1.avif'
import image2 from '@/assets/tokyo-2.avif'

const imageList = [image1, image2]
</script>
<template>
  <Header />
  <ImageBanner :images="imageList" />
</template>