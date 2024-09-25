<script setup lang="ts">
import IconArrowGrowUp from '@/components/icons/IconArrowGrowUp.vue'

</script>
<template>
  <section class="px-5 md:px-20 lg:gap-10 gap-5 grid py-5 md:py-10 grid-cols-12 mt-10 w-full min-h-[50rem]">
    <div class="bg-black md:h-full h-[30rem] relative rounded-lg col-span-12 md:col-span-6 p-5 md:p-10">
      <div
        class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.gray.700)_1px,transparent_1px)] [background-size:16px_16px]"
      ></div>
      <div class="relative z-20 text-white h-full">
        <div class="text-xs uppercase flex justify-between">
          <p>Why Tokyo</p>
          <p>All places</p>
        </div>
        <div class="w-full md:max-w-[30rem] my-auto mt-28 mx-auto">
          <h1 class="text-2xl md:text-3xl lg:text-5xl ">Besoin de rejoindre la plus belle ville du monde Tokyo</h1>
          <p class="mt-2 md:mt-10">
            Join a Fortune 50 home improvement retailer that is building the technology that will transform the ways we live, shop, and work.
          </p>
        </div>
        <div 
          class="
            md:bottom-5 cursor-pointer rounded-lg bottom-0
            justify-end items-end w-[95%] md:w-1/2 mx-auto
            bg-white text-black absolute p-5 md:p-5 right-[2.5%]
          "
        >
          <div class="flex justify-between">
            <span class="text-sm md:text-sm">Let's talk about your travel</span>
            <IconArrowGrowUp class=" "/>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-100 md:h-full h-[30rem] relative rounded-lg col-span-12 md:col-span-6 p-5 md:p-10">
      <div
        class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.gray.300)_1px,transparent_1px)] [background-size:16px_16px]"
      ></div>
      <div class="relative z-20  h-full">
        <div class="text-xs uppercase flex justify-between">
          <p>Why Tokyo</p>
          <p>All places</p>
        </div>
        <div class="w-full md:max-w-[30rem] my-auto mt-28 mx-auto">
          <h1 class="text-2xl md:text-3xl lg:text-5xl -mt-10 md:mt-0 ">Besoin de rejoindre la plus belle ville du monde Tokyo</h1>
          <p class="mt-5 md:mt-10">
            Join a Fortune 50 home improvement retailer that is building the technology that will transform the ways we live, shop, and work.
          </p>
        </div>
        <div 
          class="
            md:bottom-5 cursor-pointer rounded-lg bottom-0
            justify-end items-end w-[95%] md:w-1/2 mx-auto
            bg-white text-black absolute p-5 md:p-5 right-[2.5%]
          "
        >
          <div class="flex justify-between">
            <span class="text-sm md:text-sm">Let's talk about your travel</span>
            <IconArrowGrowUp class=" "/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>