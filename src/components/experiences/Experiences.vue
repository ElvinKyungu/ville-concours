<script setup lang="ts">
import { ref } from "vue"
import { gsap } from "gsap"
import type { PropType } from "vue"

defineProps({
  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },

  technologies: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  isLast: {
    type: Boolean,
    default: false,
  },
  isActive: { 
    type: Boolean,
    default: false,
  },
});

const animateIn = (defaultText: any, hoverText: any) => {
  gsap
    .timeline()
    .to(defaultText, {
      y: "-100%",
      opacity: 0,
      duration: 0.2,
      ease: "power2.inOut",
    })
    .to(
      hoverText,
      {
        y: "0%",
        opacity: 1,
        duration: 0.2,
        ease: "power2.inOut",
      },
      0,
    );
};

const animateOut = (defaultText: any, hoverText: any) => {
  gsap
    .timeline()
    .to(defaultText, {
      y: "0%",
      opacity: 1,
      duration: 0.2,
      ease: "power2.inOut",
    })
    .to(
      hoverText,
      {
        y: "100%",
        opacity: 0,
        duration: 0.2,
        ease: "power2.inOut",
      },
      0,
    );
};
</script>

<template>
  <div
    :class="{'bg-black/10': isActive}"
    class="flex flex-wrap -m-2 cursor-pointer hover:bg-black/10 transition rounded-lg
    "
  >
    <div class="w-auto p-2">
      <div class="flex flex-col items-center justify-between h-full">
        <div class="block pb-4">
          <div
            class="flex items-center justify-center w-10 h-10 border border-neutral-300 rounded-full"
          >
            <slot name="icon">
              <span class="text-lg font-semibold">{{ date }}</span>
            </slot>
          </div>
        </div>
        <div v-if="!isLast" class="w-px h-full border border-dashed border-gray-500"></div>
      </div>
    </div>
    <div class="flex-1 p-2">
      <h3 class="font-heading mb-0.5 text-lg font-light">
        <span class="font-extralight text-base">{{ date }}</span> <br />
        {{ title }}
      </h3>
      <ul v-if="technologies.length" class="flex mb-7 items-center flex-wrap gap-2 mt-3">
        <li
          v-for="tech in technologies"
          :key="tech"
          class="relative overflow-hidden tag flex items-center text-sm font-light"
          @mouseenter="
            animateIn($refs[`defaultText_${tech}`], $refs[`hoverText_${tech}`])
          "
          @mouseleave="
            animateOut($refs[`defaultText_${tech}`], $refs[`hoverText_${tech}`])
          "
        >
          <span :ref="`defaultText_${tech}`" class="block w-full">
            {{ tech }}
          </span>
          <span
            :ref="`hoverText_${tech}`"
            class="block w-full h-full absolute top-2 opacity-0"
          >
            {{ tech }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.tag {
  @apply py-2 px-5 bg-black/10 rounded-full cursor-pointer;
}
</style>
