<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Header from '@/components/base/Header.vue'
import Footer from '@/components/base/Footer.vue'
import ImageBanner from '@/components/ImageBanner.vue'
import image1 from '@/assets/tokyo-1.avif'
import image2 from '@/assets/tokyo-2.avif'
import CardHome from '@/components/CardHome.vue'
import { gsap } from 'gsap'

const rows = ref<HTMLElement[]>([])

const tagRows = [
  [
    { text: 'Strategy', styleClass: '' },
    { text: 'Strategy', styleClass: '-stroke' },
    { text: 'Strategy', styleClass: '' },
    { text: 'Strategy', styleClass: '-stroke' },
    { text: 'Strategy', styleClass: '' }
  ],
]

let lastScrollTop = 0

onMounted(() => {
  rows.value.forEach((row, i) => {
    const rowWidth = row.getBoundingClientRect().width;
    const rowItemWidth = row.children[0].getBoundingClientRect().width;
    const initialOffset = ((2 * rowItemWidth) / rowWidth) * 100 * -1;

    gsap.set(row, { xPercent: `${initialOffset}` });

    const duration = 5 * (i + 1)

    const tl = gsap.timeline({ repeat: -1 })
    tl.to(row, { xPercent: 0, ease: 'none', duration })

    
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        tl.reverse() 
      } else {
        tl.play()
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
    })
  })
})

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
  <section class="flex flex-col w-full px-5 md:px-20 py-10 md:py-20 lg:py-28">
    <p>Something</p>
    <h1 class="text-heading-1 text-black">Title text</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-4 md:gap-y-10 mt-10">
      <div class="p-7 bg-gray hover:bg-black transition rounded-lg group duration-700 cursor-pointer">
        <div class="flex gap-5">
          <div class="w-14 h-14 rounded-lg bg-white relative group-hover:bg-black/10 transition-colors duration-700">
            <img src="@/assets/tokyo-1.avif" alt="" class="img-card-home">
          </div>
          <div>
            <h4 class="text-2xl group-hover:text-white font-medium transition duration-700">Same text</h4>
            <p class="group-hover:text-white transition duration-700">Same paragraphs</p>
          </div>
        </div>
      </div>
      <div class="p-7 bg-gray hover:bg-black transition rounded-lg group duration-700 cursor-pointer">
        <div class="flex gap-5">
          <div class="w-14 h-14 rounded-lg bg-white relative group-hover:bg-black/10 transition-colors duration-700">
            <img src="@/assets/tokyo-1.avif" alt="" class="img-card-home">
          </div>
          <div>
            <h4 class="text-2xl group-hover:text-white font-medium transition duration-700">Same text</h4>
            <p class="group-hover:text-white transition duration-700">Same paragraphs</p>
          </div>
        </div>
      </div>
      <div class="p-7 bg-gray hover:bg-black transition rounded-lg group duration-700 cursor-pointer">
        <div class="flex gap-5">
          <div class="w-14 h-14 rounded-lg bg-white relative group-hover:bg-black/10 transition-colors duration-700">
            <img src="@/assets/tokyo-1.avif" alt="" class="img-card-home">
          </div>
          <div>
            <h4 class="text-2xl group-hover:text-white font-medium transition duration-700">Same text</h4>
            <p class="group-hover:text-white transition duration-700">Same paragraphs</p>
          </div>
        </div>
      </div>
      <div class="p-7 bg-gray hover:bg-black transition rounded-lg group duration-700 cursor-pointer">
        <div class="flex gap-5">
          <div class="w-14 h-14 rounded-lg bg-white relative group-hover:bg-black/10 transition-colors duration-700">
            <img src="@/assets/tokyo-1.avif" alt="" class="img-card-home">
          </div>
          <div>
            <h4 class="text-2xl group-hover:text-white font-medium transition duration-700">Same text</h4>
            <p class="group-hover:text-white transition duration-700">Same paragraphs</p>
          </div>
        </div>
      </div>
      <div class="p-7 bg-gray hover:bg-black transition rounded-lg group duration-700 cursor-pointer">
        <div class="flex gap-5">
          <div class="w-14 h-14 rounded-lg bg-white relative group-hover:bg-black/10 transition-colors duration-700">
            <img src="@/assets/tokyo-1.avif" alt="" class="img-card-home">
          </div>
          <div>
            <h4 class="text-2xl group-hover:text-white font-medium transition duration-700">Same text</h4>
            <p class="group-hover:text-white transition duration-700">Same paragraphs</p>
          </div>
        </div>
      </div>
      <div class="p-7 bg-gray hover:bg-black transition rounded-lg group duration-700 cursor-pointer">
        <div class="flex gap-5">
          <div class="w-14 h-14 rounded-lg bg-white relative group-hover:bg-black/10 transition-colors duration-700">
            <img src="@/assets/tokyo-1.avif" alt="" class="img-card-home">
          </div>
          <div>
            <h4 class="text-2xl group-hover:text-white font-medium transition duration-700">Same text</h4>
            <p class="group-hover:text-white transition duration-700">Same paragraphs</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="px-5 md:px-20 lg:gap-10 gap-5 grid bg-black py-5 md:py-10 grid-cols-12 min-h-96 mt-10 w-full">
    <div class="col-span-12 md:col-span-7 mb-5">
      <div class="text-white flex justify-between text-xs">
        <p>04/10</p>
        <p>Best places</p>
      </div>
      <h1 class="text-heading-1 mt-20">Découvrir la belle ville du monde</h1>
      <p class="text-lg md:text-xl text-white mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nesciunt, sed aut aliquam rem natus amet quis aspernatur deserunt possimus tempora! Vel laborum quia quam eius asperiores magnam nam repellendus?
      </p>
      <button class="bg-white py-3 px-5 rounded-md mt-5">En savoir plus</button>
    </div>
    <div class="col-span-12 md:col-span-5 flex flex-col w-full h-full relative">
      <div class="text-white flex justify-between text-sm">
        <p class="text-xs">04/10</p>
        <p>Best places</p>
      </div>
      <img src="@/assets/tokyo-2.avif" alt="" class="rounded-lg my-20 h-full w-full">
    </div>
  </section>

  <CardHome/>
  <section class="text-scroll-container">
    <div class="text-scroll-content">
      <div class="text-scroll-items bg-black text-white" role="marquee">
        <div v-for="(row, index) in tagRows" :key="index" class="text-scroll-row" ref="rows">
          <div v-for="(item, idx) in row" :key="idx" :class="item.styleClass" class="text-scroll-item">
            <span>{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
</template>
<style>
.bg-gray{
  background: hsl(0, 0%, 96%);
}
.img-card-home{
  @apply rounded-lg object-cover h-full w-full absolute;
}
.text-scroll-container {
  position: relative;
}

.text-scroll-content {
  padding: 200px 0;
}

.text-scroll-items {
  margin: -58px 0;
  overflow: hidden;
  cursor: default;

}

.text-scroll-row {
  display: flex;
  position: relative;
  text-align: center;
  white-space: nowrap;
}

.text-scroll-item {
  position: relative;
  line-height: 100%;
  font-size: 5.75vw;
  flex: 0 0 33%;
  padding: 58px 0;
  text-transform: uppercase;
  font-weight: 500;
}

.text-scroll-item.-stroke {
  color: transparent;
  text-shadow: none;
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.5);
}

.text-scroll-item span {
  position: relative;
  display: inline-block;
  z-index: 1;
}
</style>