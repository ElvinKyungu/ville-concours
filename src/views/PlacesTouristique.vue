<script setup lang="ts">
import { ref } from 'vue'
import Header from "@/components/base/Header.vue"
import Footer from '@/components/base/Footer.vue'
import TouristCard from '@/components/TouristCard.vue'

// majorTourist
import imgshrine from '@/assets/shrines.avif'
import imgParanomic from '@/assets/panoramic.avif'
import imgPark from '@/assets/parks.avif'
import imgGreen from '@/assets/space-green.avif'
// Hotels
import imgHotel1 from '@/assets/luxur-hotel.avif'
import imgHotel2 from '@/assets/luxur-hotel2.avif'
import imgHotel3 from '@/assets/hotel3.avif'
import imgHotel4 from '@/assets/experience-culture.avif'
// Cuisine
import imgCuisine1 from '@/assets/cuisine1.avif'
import imgCuisine2 from '@/assets/cuisine2.avif'
import imgCuisine3 from '@/assets/street-food.avif'
import imgCuisine4 from '@/assets/coffe.avif'
// Shopping
import imgShopping1 from '@/assets/shopping1.avif'
import imgShopping2 from '@/assets/shopping2.avif'
import imgShopping3 from '@/assets/shopping3.avif'
import imgShopping5 from '@/assets/nightligh2.avif'
import { useTitleAnimation } from '@/composables/useTitleAnimation'
import { useParagraphAnimation } from '@/composables/useParagraphAnimation'

const titleRef1 = ref<HTMLElement | null>(null)
const titleRef2 = ref<HTMLElement | null>(null)
const titleRef3= ref<HTMLElement | null>(null)
const titleRef4 = ref<HTMLElement | null>(null)
const cards1Ref1 = ref<HTMLElement | null>(null)
const cards1Ref2 = ref<HTMLElement | null>(null)
const cards1Ref3 = ref<HTMLElement | null>(null)
const cards1Ref4 = ref<HTMLElement | null>(null)


useTitleAnimation(titleRef1, 0.2)
useTitleAnimation(titleRef2, 0.2)
useTitleAnimation(titleRef3, 0.2)
useTitleAnimation(titleRef4, .3)
useParagraphAnimation(cards1Ref1, .5)
useParagraphAnimation(cards1Ref2, .5)
useParagraphAnimation(cards1Ref3, .5)
useParagraphAnimation(cards1Ref4, .5)

const majorTourist = [
  {
    img: imgParanomic,
    title: "Panoramic Viewpoint",
    price: 49,
    notation: '4.7'
  },
  {
    img: imgshrine,
    title: "Temples and Shrines",
    price: 99,
    notation: '4.7'
  },
  {
    img: imgPark,
    title: "Parks spaces",
    price: 20,
    notation: '4.5'
  },
  {
    img: imgGreen,
    title: "Green space",
    price: 0,
    notation: 'Free'
  }
]

const hotelsAccommodations = [
  {
    img: imgHotel1,
    title: "Park Hyatt Tokyo",
    price: 150,
    notation: '4.8'
  },
  {
    img: imgHotel2,
    title: "Mandarin Oriental Tokyo",
    price: 200,
    notation: '4.9'
  },
  {
    img: imgHotel3,
    title: "Capsule Hotels and Unique Accommodations",
    price: 50,
    notation: '4.6'
  },
  {
    img: imgHotel4,
    title: "Ryokans and Traditional Experiences",
    price: 80,
    notation: '4.7'
  }
]

const restaurants = [
  {
    img: imgCuisine1,
    title: "Tokyo Cuisine Palace",
    price: 30,
    notation: '4.7'
  },
  {
    img: imgCuisine2,
    title: "Traditional Cuisine",
    price: 45,
    notation: '4.8'
  },
  {
    img: imgCuisine3,
    title: "Street Food Experience",
    price: 15,
    notation: '4.5'
  },
  {
    img: imgCuisine4,
    title: "Coffee and Relaxation",
    price: 10,
    notation: '4.6'
  }
]

const shopping = [
  {
    img: imgShopping1,
    title: "Luxury Shopping District",
    price: 'Varies',
    notation: '4.9'
  },
  {
    img: imgShopping2,
    title: "Electronics Market",
    price: 'Varies',
    notation: '4.7'
  },
  {
    img: imgShopping3,
    title: "Traditional Souvenirs",
    price: 'Varies',
    notation: '4.6'
  },
  {
    img: imgShopping5,
    title: "Night Market",
    price: 'Varies',
    notation: '4.8'
  }
]
</script>

<template>
  <Header class="header w-full h-full" />
  <main class="w-full relative px-5 md:px-20 py-10 md:py-20 lg:py-28">
    <div
      class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.gray.200)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div class="relative">
      <h2 ref="titleRef1" class="pt-10 text-3xl md:text-4xl relative z-10 my-10">
        Major Tourist Attractions
      </h2>
      <div ref="cards1Ref1" class="grid relative md:gap-10 z-40 grid-cols-12">
        <div 
          v-for="(attraction, index) in majorTourist" 
          :key="index" 
          class="col-span-12 md:col-span-4 lg:col-span-3"
        >
          <TouristCard 
            :image="attraction.img"
            :title="attraction.title"
            :rating="attraction.notation"
            :price="attraction.price"
          />
        </div>
      </div>
    </div>
    <div class="relative">
      <h2 ref="titleRef2" class="text-3xl md:text-4xl relative z-10 my-10">
        Hotels and Accommodations
      </h2>
      <div ref="cards1Ref2" class="grid relative md:gap-10 z-40 grid-cols-12">
        <div 
          v-for="(attraction, index) in hotelsAccommodations" 
          :key="index" 
          class="col-span-12 md:col-span-4 lg:col-span-3"
        >
          <TouristCard 
            :image="attraction.img"
            :title="attraction.title"
            :rating="attraction.notation"
            :price="attraction.price"
          />
        </div>
      </div>
    </div>
    <div class="relative">
      <h2 ref="titleRef3" class="text-3xl md:text-4xl relative z-10 my-10">
        Restaurants and Culinary Experiences
      </h2>
      <div ref="cards1Ref3" class="grid relative md:gap-10 z-40 grid-cols-12">
        <div 
          v-for="(attraction, index) in restaurants" 
          :key="index" 
          class="col-span-12 md:col-span-4 lg:col-span-3"
        >
          <TouristCard 
            :image="attraction.img"
            :title="attraction.title"
            :rating="attraction.notation"
            :price="attraction.price"
          />
        </div>
      </div>
    </div>
    <div class="relative">
      <h2 ref="titleRef4" class="text-3xl md:text-4xl relative z-10 my-10">
        Shopping and Entertainment
      </h2>
      <div ref="cards1Ref4" class="grid relative md:gap-10 z-40 grid-cols-12">
        <div 
          v-for="(attraction, index) in shopping" 
          :key="index" 
          class="col-span-12 md:col-span-4 lg:col-span-3"
        >
          <TouristCard 
            :image="attraction.img"
            :title="attraction.title"
            :rating="attraction.notation"
            :price="attraction.price"
          />
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
<style scoped>

</style>