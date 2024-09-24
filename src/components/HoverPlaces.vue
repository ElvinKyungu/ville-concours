<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

// Définir des refs distincts pour chaque ul
const listContainer1 = ref<HTMLElement | null>(null);
const listContainer2 = ref<HTMLElement | null>(null);
const listContainer3 = ref<HTMLElement | null>(null);

onMounted(() => {
  if (listContainer1.value) {
    gsap.from(listContainer1.value?.children, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.2,
      ease: "power2.out"
    })
  }
  
  if (listContainer2.value) {
    gsap.from(listContainer2.value?.children, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.2,
      ease: "power2.out" 
    })
  }
  if (listContainer3.value) {
    gsap.from(listContainer3.value?.children, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.2,
      ease: "power2.out" 
    })
  }
})
</script>

<template>
  <div class="py-10 max-w-7xl mx-auto flex justify-between">
    <ul ref="listContainer1" class="space-y-5 flex flex-col w-full">
      <li class="flex gap-3 cursor-pointer">
        <div class="app-result text-white">
          <img
            src="https://plus.unsplash.com/premium_photo-1665203522501-ef4a87b8522b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            class="w-16 rounded-xl object-cover h-16 shrink-0"
          />
          <div class="w-full flex flex-col items-start">
            <p class="font-bold ">Titre de la place</p>
            <p class="opacity-90">Description de la place</p>
          </div>
        </div>
      </li>
      <li class="flex gap-3 cursor-pointer">
        <div class="app-result text-white">
          <img
            src="https://plus.unsplash.com/premium_photo-1723983556753-1eef0b499e15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            class="w-16 rounded-xl object-cover h-16 shrink-0"
          />
          <div class="w-full flex flex-col items-start">
            <p class="font-bold ">Titre de la place</p>
            <p class="opacity-90">Description de la place</p>
          </div>
        </div>
      </li>
    </ul>
    <ul ref="listContainer2" class="space-y-5 flex flex-col w-full">
      <li class="flex gap-3 cursor-pointer">
        <div class="app-result text-white">
          <img
            src="https://images.unsplash.com/photo-1587320856202-189c3b4ebf89?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            class="w-16 rounded-xl object-cover h-16 shrink-0"
          />
          <div class="w-full flex flex-col items-start">
            <p class="font-bold ">Titre de la place</p>
            <p class="opacity-90">Description de la place</p>
          </div>
        </div>
      </li>
      <li class="flex gap-3 cursor-pointer">
        <div class="app-result text-white">
          <img
            src="https://images.unsplash.com/photo-1701344189187-bc473b00ba4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            class="w-16 rounded-xl object-cover h-16 shrink-0"
          />
          <div class="w-full flex flex-col items-start">
            <p class="font-bold ">Titre de la place</p>
            <p class="opacity-90">Description de la place</p>
          </div>
        </div>
      </li>
    </ul>
    <ul ref="listContainer3" class="space-y-5 flex flex-col w-full">
      <li class="flex gap-3 cursor-pointer">
        <div class="app-result text-white">
          <img
            src="https://images.unsplash.com/photo-1576863545712-758b8b245994?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            class="w-16 rounded-xl object-cover h-16 shrink-0"
          />
          <div class="w-full flex flex-col items-start">
            <p class="font-bold ">Titre de la place</p>
            <p class="opacity-90">Description de la place</p>
          </div>
        </div>
      </li>
      <li class="flex gap-3 cursor-pointer">
        <div class="app-result text-white">
          <img
            src="https://images.unsplash.com/photo-1547448526-5e9d57fa28f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            class="w-16 rounded-xl object-cover h-16 shrink-0"
          />
          <div class="w-full flex flex-col items-start">
            <p class="font-bold ">Titre de la place</p>
            <p class="opacity-90">Description de la place</p>
          </div>
        </div>
      </li>
    </ul> 
  </div>
</template>