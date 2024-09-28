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
import IconCheck from '@/components/icons/IconCheck.vue'
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
// State to store the selected experience details
const selectedExperience = ref(significantEvents)
const activeExperienceTitle = ref(experiences[0].title) 

function getExperienceDetails(title: string): ExperienceDetail {
  switch (title) {
    case 'Historical Origins':
      return HistoricalOrigins
    case 'Significant Events':
      return significantEvents
    case 'Modern Growth':
      return modernGrowth
    case 'Tokyo Becomes the Capital':
      return capitalTransition
    default:
      return significantEvents
  }
}

const cards = [
  {
    title: "Spring",
    description: "Cherry blossoms bloom, inviting hanami picnics and vibrant celebrations.",
  },
  {
    title: "Summer",
    description: "Hot and lively, filled with festivals, fireworks, and outdoor events."
  },
  {
    title: "Autumn",
    description: "Foliage turns red and gold, celebrated with harvest festivals and scenic walks.",
  },
  {
    title: "Winter",
    description: " Mild and festive, featuring stunning light displays and New Year traditions.",
  },
  
]

// Function to handle the animation sequence
function selectExperience(experienceDetail:ExperienceDetail) {
  gsap.to('.experience-details', {
    opacity: 0,
    duration: 0.5,
    ease: 'power2.inOut',
    onComplete() {
      // Change the content after fade out
      selectedExperience.value = experienceDetail
      activeExperienceTitle.value = experienceDetail.title

      gsap.to('.experience-details', {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
      })
    }
  })
}

onMounted(() => {
  // Initial fade-in animation when the component is mounted
  gsap.fromTo('.experience-details', {
    opacity: 0
  }, {
    opacity: 1,
    duration: 0.5,
    ease: 'power2.inOut'
  })
})
</script>

<template>
  <Header class="header w-full h-full" />
  <main class="w-full relative px-5 md:px-20 py-10 md:py-20 lg:py-28">
    <div
      class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.gray.200)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div class="relative w-full flex flex-col">
      <h2 ref="titleRef1" class="text-2xl md:text-5xl relative z-10 my-10">About Tokyo</h2>
      <div class="grid relative lg:space-x-20 z-40 grid-cols-12">
        <div ref="cardsRef" class="col-span-12 md:col-span-6">
          <img src="@/assets/Flag_of_Tokyo.png" alt="Tokyo Skyline" class="w-full rounded-lg">
        </div>
        <div class="col-span-12 md:col-span-6">
          <h2 ref="titleRef2" class="text-3xl md:text-4xl text-wrap">All you need to know about Tokyo</h2>
          <p ref="paragraphRef" class="text-lg md:text-lg mt-10 text-wrap">
            Tokyo, a metropolis where tradition and modernity meet in harmony, attracts travelers from all over the world with its unparalleled energy. From the glittering neon lights of Shibuya to the tranquil gardens of the Imperial Palace, every corner of this Japanese capital is full of surprises. Stroll through the narrow streets of old Tokyo, sample the culinary delights of the lively izakayas, and let yourself be seduced by the warm welcome of the locals. Discover Tokyo through the fascinating tales of the explorers who were dazzled by its magic, and let their stories guide you on this memorable adventure. Prepare yourself for the unique experience of a city that never sleeps, while offering moments of tranquility and contemplation.
          </p>
        </div>
      </div>
    </div> 
    <section ref="cardHistory" class="py-4 flex justify-center w-full relative z-0 mt-20">
      <main class="px-5 w-full relative">
        <h1 class="my-10 text-5xl">History</h1>
        <div class="relative pb-7 rounded-xl">
          <div class="grid grid-cols-12 md:space-x-10 lg:space-x-20">
            <div class=" col-span-12 md:col-span-6">
              <Experience
                v-for="(experience, index) in experiences"
                :key="index"
                :date="experience.date"
                :title="experience.title"
                :description="experience.description"
                :isLast="experience.isLast"
                @click="selectExperience(getExperienceDetails(experience.title))"
              >
                <template #icon>
                  <IconCheck />
                </template>
              </Experience>
            </div>
            <div class="col-span-12 md:col-span-6 rounded-lg py-5 -mt-10 relative">
              <ExperiencesDetails 
                :experiences="selectedExperience" 
                class="experience-details"
              />
            </div>
          </div>
        </div>
      </main>
    </section>
    <div class="relative">
      <h2 ref="cultureRefTitle" class="text-3xl md:text-5xl relative z-10 my-10 ">Culture in Tokyo</h2>
      <div ref="cultureCardsRef" class="grid relative md:gap-10 z-40 grid-cols-12">
        <div class="col-span-12 md:col-span-3 relative cursor-pointer">
          <div class="container-img-culture">
            <img src="@/assets/culture-modernity.avif" alt="Tradition and Modernity in Tokyo" class="img-culture">
          </div>
          <div class="p-5 relative z-20 flex flex-col w-full">
            <h1 class="text-xl">Tradition and Modernity</h1>
            <p class="text-sm">
              Experience how Tokyo blends ancient temples like Senso-ji with ultramodern districts such as Shibuya and Akihabara.
            </p>
          </div>
        </div>
        <div class="col-span-12 md:col-span-3 relative cursor-pointer">
          <div class="container-img-culture">
            <img src="@/assets/tokyo-cuisine.avif" alt="Tokyo Cuisine" class="img-culture">
          </div>
          <div class="p-5 relative z-20 flex flex-col w-full">
            <h1 class="text-xl">Cuisine</h1>
            <p class="text-sm">
              Discover the flavors of Japanese cuisine, from sushi to ramen, and the lively izakayas of Tokyo.
            </p>
          </div>
        </div>
        <div class="col-span-12 md:col-span-3 relative cursor-pointer">
          <div class="container-img-culture">
            <img src="@/assets/festival-tokyo.avif" alt="Festivals in Tokyo" class="img-culture">
          </div>
          <div class="p-5 relative z-20 flex flex-col w-full">
            <h1 class="text-xl">Festivals</h1>
            <p class="text-sm">
              Take part in Tokyo's seasonal festivals, such as the Sanja Matsuri and the famous cherry blossom festivals.
            </p>
          </div>
        </div>
        <div class="col-span-12 md:col-span-3 relative cursor-pointer">
          <div class="container-img-culture">
            <img src="@/assets/art-spectacle.avif" alt="Arts and Entertainment in Tokyo" class="img-culture">
          </div>
          <div class="p-5 relative z-20 flex flex-col w-full">
            <h1 class="text-xl">Arts and Entertainment</h1>
            <p class="text-sm">
              Discover kabuki theater, J-Pop concerts, and the iconic manga and anime scene in Tokyo.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="relative z-10 pt-32 w-full">
      <div class="grid relative md:gap-10 z-40 grid-cols-12">
        <div class="col-span-12 md:col-span-6">
          <h2 ref="economicTitleRef" class="text-3xl md:text-5xl relative z-10">Tokyo economy and innovation</h2>
          <p ref="economicParagraphRef" class="text-lg md:text-lg mt-10">
            Tokyo, the capital of Japan, is a major global economic hub. It stands out for its dynamic financial, technology, and commercial sectors. With an innovative startup ecosystem and an efficient transport network, Tokyo attracts multinational companies and millions of tourists, solidifying its status as an essential metropolis.
          </p>
        </div>
        <div ref="economicCardImgRef" class="col-span-12 md:col-span-6">
          <img src="@/assets/economy-tokyo.avif" alt="Tokyo Skyline" class="rounded-lg max-h-[30rem] w-full object-cover">
        </div>
      </div>
    </div>
    <div class="relative z-10 pt-32 w-full">
      <div class="grid relative md:gap-10 z-40 grid-cols-12">
        <div class="col-span-12 md:col-span-6">
          <img src="@/assets/people-tokyo.avif" alt="Tokyo Skyline" class="rounded-lg max-h-[30rem] w-full object-cover">
        </div>
        <div class="col-span-12 md:col-span-6">
          <h2 ref="" class="text-3xl md:text-5xl relative z-10">The Diversity of Tokyo: A Vibrant Mosaic of Cultures and Ages</h2>
          <p ref="paragraphRef" class="text-lg md:text-lg mt-10">
            Tokyo is a vibrant metropolis characterized by its rich diversity. The population includes a mix of ages, from young professionals to seniors, and residents from various cultural backgrounds. This multicultural environment fosters a unique atmosphere, blending traditions and influences from around the world, making Tokyo a truly cosmopolitan city.
          </p>
        </div>
      </div>
    </div>
    <section class="flex flex-col w-full relative pt-20">
      <p class="relative z-10">Welcome</p>
      <h1 ref="titleRef" class="text-heading-1 relative z-10 text-black card-title">
        Tokyo Through the Seasons: A Year of Color and Culture
      </h1> 
      <div class="grid grid-cols-1 relative z-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-3 md:gap-y-8 mt-10">
        <div 
          v-for="(card, index) in cards" 
          :key="index" 
          class="p-7 bg-gray hover:bg-black/10 transition rounded-lg group duration-700 cursor-pointer"
        >
          <div ref="cardsRef" class="flex gap-5">
            <div>
              <h4 class="text-lg md:text-xl ">{{ card.title }}</h4>
              <p class="text-sm md:text-base card-description">{{ card.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
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
</style>