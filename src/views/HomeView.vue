<script setup lang="ts">
import Header from '@/components/base/Header.vue'
import Footer from '@/components/base/Footer.vue'
import ImageBanner from '@/components/ImageBanner.vue'
import image1 from '@/assets/tokyo-1.avif'
import image3 from '@/assets/market.avif'
import image4 from '@/assets/culture-modernity.avif'
import TextScroll from '@/components/TextScroll.vue'
import WalletCardHome from '@/components/WalletCardHome.vue'
import SectionHighlight from '@/components/SectionHighlight.vue'
import HomeCardSlider from '@/components/HomeCardSlider.vue'
import PlacesCardClickable from '@/components/PlacesCardClickable.vue'
import ScrollTriggerSection from '@/components/ScrollTriggerSection.vue'
import FAQ from '@/components/FAQ.vue'
import MiniCardHome from '@/components/MiniCardHome.vue'
import AnimatedCard from '@/components/AnimatedCard.vue'
import { useTitleAnimation } from '@/composables/useTitleAnimation'
import { useParagraphAnimation } from '@/composables/useParagraphAnimation'
import { ref } from 'vue'

const titleRef1 = ref<HTMLElement | null>(null)
const titleRef2 = ref<HTMLElement | null>(null)
const titleRef3= ref<HTMLElement | null>(null)
const titleRef4 = ref<HTMLElement | null>(null)
const paragraphRef = ref<HTMLElement | null>(null)
const imageRef4 = ref<HTMLElement | null>(null)

useParagraphAnimation(paragraphRef, 0.5)
useTitleAnimation(titleRef1, 0.5)
useTitleAnimation(imageRef4, .5)
useTitleAnimation(titleRef2, 0.5)
useTitleAnimation(titleRef3, 0.5)
useTitleAnimation(titleRef4, .5)
const imagesList = [image1,image3,image4,]
</script>

<template>
  <Header/>
  <AnimatedCard/>
  <MiniCardHome/>
  <SectionHighlight/>
  <main class="relative py-10">
    <div
      class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.gray.300)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <section class="grid  relative z-40 grid-cols-12 px-5 md:px-20 py-10 md:py-20 lg:py-28">
      <div class="col-span-12 md:col-span-6">
        <h2 ref="titleRef1" class="text-5xl">The city of tokyo is also</h2>
      </div>
      <div class="col-span-12 md:col-span-6">
        <p ref="paragraphRef" class="text-lg md:text-xl">
          Tokyo is a city where politeness and respect prevail. Tradition and modernity coexist harmoniously, creating a dynamic and inspiring environment.
        </p>
      </div>
    </section>
    <HomeCardSlider/>
  </main>
  <section class="px-5 relative md:px-20 py-10 md:pt-20 lg:pt-20">
    <div
      class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.gray.300)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div class="grid grid-cols-12 gap-4 relative z-10">
      <div class="col-span-12 md:col-span-3 my-5 mt-2">
        <p class="h-[1px] bg-black"></p>
        <p class="text-sm">W'are Tokyo</p>
      </div>
      <h1 ref="titleRef2" class="col-span-12 md:col-span-9 text-3xl md:text-4xl lg:text-5xl">
        Welcome to Tokyo, the most vibrant city in the world
      </h1>
    </div>
    <h1 ref="titleRef3" class="text-3xl relative z-10  md:text-5xl lg:text-5xl">
      Tokyo sets the pace for the future of urban living—through the lens of culture, cutting-edge technology, and endless exploration.
    </h1>
  </section>
  <WalletCardHome/>
  <section class="grid grid-cols-12 md:gap-20 relative py-10 md:py-20 px-5 md:px-20">
    <div ref="imageRef4" class="col-span-12 lg:col-span-6 relative z-30">
      <ImageBanner :images="imagesList" />
    </div>
    <div
      class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.gray.300)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div class="col-span-12 md:col-span-6 relative z-30">
      <div class="flex flex-col w-full h-full">
        <h1 ref="titleRef4" class="text-3xl md:text-3xl lg:text-5xl">
          Experience the Essence of Tokyo
        </h1>
        <p class="mt-4 text-lg md:text-xl">
          Dive into Tokyo's rich culture, savor its culinary delights, and explore luxurious hotels that redefine hospitality. Discover a city where tradition meets innovation at every corner.
        </p>
      </div>
    </div>
  </section>
  <PlacesCardClickable/>
  <ScrollTriggerSection/>
  <TextScroll/>
  <FAQ/>
  <Footer/>
</template>
<style>
.bg-gray{
  background: hsl(0, 0%, 96%);
}
.img-card-home{
  @apply rounded-lg object-cover h-full w-full absolute;
}

</style>