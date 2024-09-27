<script setup lang="ts">
import Header from '@/components/base/Header.vue'
import Footer from '@/components/base/Footer.vue'
import TextScroll from '@/components/TextScroll.vue'
import FAQ from '@/components/FAQ.vue'
import { useTitleAnimation } from '@/composables/useTitleAnimation'
import { useParagraphAnimation } from '@/composables/useParagraphAnimation'
import { ref, onMounted } from 'vue'

const titleRef1 = ref<HTMLElement | null>(null)
const titleRef2 = ref<HTMLElement | null>(null)
const titleRef3= ref<HTMLElement | null>(null)
const titleRef4 = ref<HTMLElement | null>(null)
const paragraphRef = ref<HTMLElement | null>(null)
const imageRef4 = ref<HTMLElement | null>(null)

useParagraphAnimation(paragraphRef, 0.5)
useTitleAnimation(titleRef1, 0.5)
useTitleAnimation(imageRef4, 1)
useTitleAnimation(titleRef2, 0.5)
useTitleAnimation(titleRef3, 0.5)
useTitleAnimation(titleRef4, 1.5)
</script>

<template>
  <Header/>
  
  <section class="px-5 relative md:px-20 py-10 md:pt-20 lg:pt-40">
    <div
      class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.gray.300)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div class="grid grid-cols-12 gap-4 relative z-10">
      <div class="col-span-12 md:col-span-3 my-5 mt-2">
        <p class="h-[1px] bg-black"></p>
        <p class="text-sm">Get in Touch to Explore Tokyo</p>
      </div>
      <h1 ref="titleRef2" class="col-span-12 md:col-span-9 text-3xl md:text-4xl lg:text-4xl">
        Have questions or need tips for your Tokyo adventure? 
      </h1>
    </div>
    <h1 ref="titleRef3" class="text-3xl relative z-10  md:text-5xl lg:text-4xl">
      Our team is here to help you discover the ultimate Japanese experience. 
      Feel free to reach out for personalized recommendations or information on local attractions!"
    </h1>
  </section>
  <section class="grid grid-cols-12 gap-5 overflow-hidden px-5 relative md:px-20">
    <div
      class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.gray.300)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div class="py-8 lg:py-16 px-4 col-span-12 md:col-span-6 relative z-10">
      <form class="space-y-8">
        <div>
          <label 
            for="email" 
            class="block mb-2 text-sm font-medium"
          >
            Your email
          </label>
          <input 
            type="email"
            id="email"
            class="border-black border-b outline-none block w-full p-2.5 " 
            placeholder="name@example.com" 
            required
          >
        </div>
        <div>
          <label 
            for="subject" 
            class="block mb-2 text-sm font-medium"
          >
            Subject
          </label>
          <input 
            type="text" 
            id="subject" 
            class="block p-3 w-full text-sm outline-none border-black border-b " 
            placeholder="Tell us how we can help you" 
            required
          >
        </div>
        <div class="sm:col-span-2">
          <label 
            for="message" 
            class="block mb-2 text-sm font-medium "
          >
            Your message
          </label>
          <textarea  
            placeholder="Your message here..." 
            id="message" 
            class="block p-2.5 w-full outline-none border-black border-b" 
            name="5" 
            rows="10"
            max-height="5"
          ></textarea>
          
        </div>
        <button 
          ref="buttonRef"
          class="bg-black inline-flex gap-2 text-white py-4 px-5 mt-12 rounded-lg">
          Send message
          <IconArrowGrowUp/>
        </button>
      </form>
    </div>
    <div class="map-container col-span-12 md:col-span-6 rounded-lg relative z-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414292.15212368975!2d139.49105235206464!3d35.6828396606649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bdfca053b01%3A0x836c9d3e60c6e8b1!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sfr!4v1695664465878!5m2!1sen!2sfr"
        width="100%"
        height="100%"
        style="border:0;"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    </div>
  </section>
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