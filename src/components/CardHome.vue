<script setup lang="ts">
import image2 from '@/assets/tokyo-2.avif'
import IconStars from './icons/IconStars.vue'
import IconHeart from './icons/IconHeart.vue'
</script>
<template>
  <section class="py-10 md:py-28 px-5 md:px-20">
    <div class="mx-auto">
      <h1 class="text-heading-1 text-black mb-10 ">Vivez vos belles vacances à Tokyo</h1>
      <div class="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 gap-4">
        <div class="col-span-1">
          <figure>
            <img 
              src="https://images.unsplash.com/photo-1701344189187-bc473b00ba4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              class="mb-2 rounded-lg h-64 object-cover cursor-pointer" 
              alt=""
            >
            <figcaption class="inside">
              <IconHeart />
            </figcaption>
            <figcaption class="outside">
              <div class="flex justify-between font-semibold">
                <h3 class="">Vathonas, Grèce</h3>
                <div class="flex items-center gap-3">
                  <IconStars />
                  <span>4,99</span>
                </div>
              </div>
              <p class="text-desc">Particulier</p>
              <p class="text-desc">4-10 Nov.</p>
              <p class="flex gap-3 justify-between">
                <p class="flex gap-3">
                  <span class="font-medium">222$</span> 
                  <span class="font-normal">par nuit</span>
                </p>
                <router-link to="" class="border-b pb-1 border-black">Voir de prêt</router-link>
              </p>
            </figcaption>
          </figure>
        </div>
        <div class="col-span-1">
          <figure>
            <img 
              src="https://plus.unsplash.com/premium_photo-1723983556753-1eef0b499e15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              class="mb-2 rounded-lg h-64 object-cover cursor-pointer" 
              alt=""
            >
            <figcaption class="inside">
              <IconHeart />
            </figcaption>
            <figcaption class="outside">
              <div class="flex justify-between font-semibold">
                <h3 class="">Vathonas, Grèce</h3>
                <div class="flex">
                  <IconStars />
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
        <div class="col-span-1">
          <figure>
            <img 
              src="https://images.unsplash.com/photo-1587320856202-189c3b4ebf89?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              class="mb-2 rounded-lg h-64 object-cover cursor-pointer" 
              alt=""
            >
            <figcaption class="inside">
              <IconHeart />
            </figcaption>
            <figcaption class="outside">
              <div class="flex justify-between font-semibold">
                <h3 class="">Vathonas, Grèce</h3>
                <div class="flex">
                  <IconStars />
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
        <div class="col-span-1">
          <figure>
            <img src="https://plus.unsplash.com/premium_photo-1665203522501-ef4a87b8522b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="mb-2 rounded-lg h-64 object-cover cursor-pointer" alt="">
            <figcaption class="inside">
              <IconHeart />
            </figcaption>
            <figcaption class="outside">
              <div class="flex justify-between font-semibold">
                <h3 class="">Vathonas, Grèce</h3>
                <div class="flex">
                  <IconStars />
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
  </section>
</template>

<style scoped>

body {
  font-family: 'Roboto', sans-serif;
}

h2 {
  font-weight: 800 !important;
  margin-bottom: 0px !important;
  font-size: 25px !important;
  line-height: 30px !important;
  letter-spacing: normal !important;
  padding-top: 2px !important;
  padding-bottom: 2px !important;
  color: rgb(72, 72, 72) !important;
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

.text-desc {
  font-size: 14px !important;
  line-height: 22px !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  color: rgb(72, 72, 72) !important;
  font-weight: normal !important;
  margin-top: 0px !important;
}

svg{
  cursor: pointer;
  stroke: white;
  stroke-width: 2;
}
</style>