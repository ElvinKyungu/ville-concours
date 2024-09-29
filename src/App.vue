<script setup lang="ts">
import { onBeforeRouteUpdate, RouterView, useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import gsap from 'gsap';
import { useLoader } from './composables/useLoader';

const router = useRouter();
const { isLoading, showLoader, hideLoader } = useLoader();

watch(router.currentRoute, (to, from) => {
  showLoader();
  setTimeout(() => {
    gsap.to('.loader', {
      opacity: 0,
      duration: .9,
      onComplete: () => {
        hideLoader();
        gsap.set('.loader', { opacity: 1 }); 
      },
    });
  }, 1000);
});
</script>

<template>
  <div class="font-poppins">
    <div v-if="isLoading" class="fixed w-full flex justify-center items-center h-screen bg-white z-50">
      <div class="loader bg-red-600 w-20 h-20 rounded-full"></div>
    </div>
    <RouterView v-else />
  </div>
</template>

<style scoped>
.loader {
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
