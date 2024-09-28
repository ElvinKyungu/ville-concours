<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Experience from "@/components/experiences/Experiences.vue"
import Header from "@/components/base/Header.vue"
import Footer from '@/components/base/Footer.vue'
import experiences from '@/data/experiences.json'
import ExperiencesDetails from '@/components/experiences/ExperienceDetail.vue'
import gsap from 'gsap'
import { 
  significantEvents,
  modernGrowth,
  HistoricalOrigins,
  capitalTransition
} from '@/data/experiencesDetails'
import type { ExperienceDetail } from '@/types/experiences'
import IconHeart from '@/components/icons/IconHeart.vue'
import IconStars from '@/components/icons/IconStars.vue'
import { useTitleAnimation } from '@/composables/useTitleAnimation'
import { useParagraphAnimation } from '@/composables/useParagraphAnimation'

const titleRef1 = ref<HTMLElement | null>(null)
const titleRef2 = ref<HTMLElement | null>(null)
const titleRef3= ref<HTMLElement | null>(null)
const titleRef4 = ref<HTMLElement | null>(null)
const imageRef4 = ref<HTMLElement | null>(null)
const paragraphRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)
const cardHistory = ref<HTMLElement | null>(null)
const cultureRefTitle = ref<HTMLElement | null>(null)
const cultureCardsRef = ref<HTMLElement | null>(null)
const economicTitleRef = ref<HTMLElement | null>(null)
const economicParagraphRef = ref<HTMLElement | null>(null)
const economicCardImgRef = ref<HTMLElement | null>(null)

useTitleAnimation(titleRef1, 0.5)
useTitleAnimation(imageRef4, 1)
useTitleAnimation(titleRef2, 0.5)
useTitleAnimation(titleRef3, 0.5)
useTitleAnimation(titleRef4, 1)
useTitleAnimation(cardsRef, .5)
useTitleAnimation(cardHistory, .5)
useParagraphAnimation(paragraphRef, .5)
useTitleAnimation(cultureRefTitle, .3)
useParagraphAnimation(cultureCardsRef, .4)
useParagraphAnimation(economicTitleRef, .3)
useParagraphAnimation(economicParagraphRef, .4)
useParagraphAnimation(economicCardImgRef, .2)

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
          <figure>
            <img src="https://a0.muscache.com/im/pictures/60c04cb1-2ddc-403a-a48a-781b5f84872f.jpg" class="mb-2 rounded-lg h-64 object-cover cursor-pointer" alt="">
            <figcaption class="inside">
              <IconHeart/>
            </figcaption>
            <figcaption class="outside">
              <div class="flex justify-between font-semibold">
                <h3 class="">Vathonas, Grèce</h3>
                <div class="flex">
                  <IconStars/>
                  <span>4,99</span>
                </div>
              </div>
              <p class="text-desc">Particulier</p>
              <p class="text-desc">4-10 Nov.</p>
              <p class="flex gap-3">
                <span class="font-medium">222$</span> 
                <span class="font-normal">par nuit</span>
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>


<style>
.img-culture{
  @apply rounded-lg w-full h-full overflow-hidden object-cover transition-transform duration-300 ease-in-out transform hover:scale-110
}
.container-img-culture{
  @apply relative h-64 w-full overflow-hidden rounded-lg
}

figure {
  position: relative;
  padding: 5px;
}

figure img {
  width: 100%;
}

figcaption.inside {
  position: absolute;
  top: 20px;
  right: 20px;
}

figcaption.inside h2 {
  color: white;
}

span {
  display: block;
}

.text-desc {
  font-size: 14px !important;
  line-height: 22px !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  color: rgb(72, 72, 72) !important;
  font-weight: normal !important;
  margin-top: 0px !important;
}

.text-color {
  color: rgb(255, 180, 0) !important;
  font-size: 12px !important;
}
svg{
  cursor: pointer;
  stroke: white;
  stroke-width: 2;
}
</style>