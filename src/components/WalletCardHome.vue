<script setup lang="ts">
import IconArrowGrowUp from '@/components/icons/IconArrowGrowUp.vue'

</script>
<template>
  <section class="px-5 md:px-20 lg:gap-10 gap-5 grid py-5 md:py-10 grid-cols-12 mt-10 w-full min-h-[50rem]">
    <div class="bg-black relative rounded-lg col-span-12 md:col-span-6 p-10">
      <div class="text-xs uppercase text-white flex justify-between">
        <p>Why Tokyo</p>
        <p>All places</p>
      </div>
      <div class="max-w-96 my-auto mt-28 mx-auto">
        <h1 class="text-white text-2xl md:text-3xl lg:text-5xl">Besoin de rejoindre la plus belle ville du monde Tokyo</h1>
      </div>
      <div 
        class="
          bottom-5 cursor-pointer rounded-lg  
          justify-end items-end w-[95%] md:w-1/2 mx-auto
          bg-white absolute p-8 md:p-4 right-[2.5%]
        "
      >
        <div class="flex justify-between">
          <span class=" ">Let's talk about your travel</span>
          <IconArrowGrowUp class=" "/>
        </div>
      </div>
    </div>
    <div class="bg-indigo-500 relative rounded-lg col-span-12 md:col-span-6 p-10">
      <div class="text-xs uppercase text-white flex justify-between">
        <p>Why Tokyo</p>
        <p>All places</p>
      </div>
      <div class="w-full md:max-w-96 my-auto mt-28 mx-auto">
        <h1 class="text-white text-2xl md:text-3xl lg:text-5xl ">Besoin de rejoindre la plus belle ville du monde Tokyo</h1>
      </div>
      <div 
        class="
          bottom-5 cursor-pointer rounded-lg  
          justify-end items-end w-[95%] md:w-1/2 mx-auto
          bg-white absolute p-8 md:p-4 right-[2.5%]
        "
      >
        <div class="flex justify-between">
          <span class=" ">Let's talk about your travel</span>
          <IconArrowGrowUp class=" "/>
        </div>
      </div>
    </div>
  </section>
</template>