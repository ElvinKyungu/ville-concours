<script setup lang="ts">
import Header from '@/components/base/Header.vue'
import Footer from '@/components/base/Footer.vue'
import ImageBanner from '@/components/ImageBanner.vue'
import image1 from '@/assets/tokyo-1.avif'
import image2 from '@/assets/tokyo-2.avif'
import CardHome from '@/components/CardHome.vue'
const imagesList = [
  { 
    src: image1, 
    title: 'Senso-ji Temple', 
    description: 'Découvrez le temple Senso-ji, le plus ancien de Tokyo, qui attire des millions de visiteurs chaque année.' 
  },
  { 
    src: image2, 
    title: 'Shibuya Crossing', 
    description: 'Vivez l\'expérience du célèbre carrefour de Shibuya, symbole de la ville, où des milliers de personnes traversent à chaque feu.' 
  },
]
</script>

<template>
  <Header/>
  <ImageBanner :images="imagesList" />
  <section class="px-5 md:px-20 lg:gap-10 gap-5 grid bg-red-700 p-5 md:p-7 grid-cols-12 min-h-96 mt-10 w-full">
    <div class="col-span-12 md:col-span-7 mb-5">
      <h1 class="text-3xl md:text-4xl lg:text-6xl text-white font-medium">Découvrir la belle ville du monde</h1>
      <p class="text-lg md:text-xl text-white mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nesciunt, sed aut aliquam rem natus amet quis aspernatur deserunt possimus tempora! Vel laborum quia quam eius asperiores magnam nam repellendus?
      </p>
      <button class="bg-white py-3 px-5 rounded-md mt-5">En savoir plus</button>
    </div>
    <div class="col-span-12 md:col-span-5 flex w-full h-full relative">
      <img src="@/assets/tokyo-2.avif" alt="" class="rounded-lg h-full w-full">
    </div>
  </section>
  <CardHome/>
  <Footer/>
</template>
