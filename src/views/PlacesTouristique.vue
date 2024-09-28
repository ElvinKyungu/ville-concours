<script setup lang="ts">
import { ref } from 'vue'
import Header from "@/components/base/Header.vue"
import Footer from '@/components/base/Footer.vue'
import IconHeart from '@/components/icons/IconHeart.vue'
import IconStars from '@/components/icons/IconStars.vue'
import imgCuisine1 from '@/assets/tokyo-cuisine.avif'
import imgCuisine2 from '@/assets/cuisine1.avif'
import imgCuisine3 from '@/assets/cuisine1.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'
// import imgCuisine from '@/assets/tokyo-cuisine.avif'


</script>

<template>
  <Header class="header w-full h-full" />
  <main class="w-full relative px-5 md:px-20 py-10 md:py-20 lg:py-28">
    <div
      class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.gray.200)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div class="relative">
      <h2 ref="cultureRefTitle" class="text-3xl md:text-5xl relative z-10 my-10 ">Major Tourist Attractions</h2>
      <div  class="grid relative md:gap-10 z-40 grid-cols-12">
        <div class="col-span-3">
          <figure class="p-2 relative">
            <img 
              :src="imgCuisine3" 
              class="mb-2 rounded-lg h-64 object-cover cursor-pointer" 
              alt=""
            >
            <figcaption class="top-5 right-5 absolute">
              <IconHeart/>
            </figcaption>
            <figcaption class="outside">
              <div class="flex justify-between font-semibold">
                <h3 class="">Vathonas, Grèce</h3>
                <div class="flex">
                  <IconStars class="text-yellow-500"/>
                  <span>4,99</span>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>


<style scoped>
.img-culture{
  @apply rounded-lg w-full h-full overflow-hidden object-cover transition-transform duration-300 ease-in-out transform hover:scale-110
}
.container-img-culture{
  @apply relative h-64 w-full overflow-hidden rounded-lg
}

svg{
  cursor: pointer;
  stroke: white;
  stroke-width: 2;
}
</style>