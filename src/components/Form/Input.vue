<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { gsap } from 'gsap'
import IconSearch from '../icons/IconSearch.vue'

const basePlaceholder = 'Cherchez-vous '
const keywords = ref([
  'un lieu ?', 
  'une sortie ?', 
  'une demanche ?', 
  'une actualité ?', 
  'un événement ?'
])
const currentKeywordIndex = ref(0)
const inputValue = ref('')
const isAnimating = ref(true)
let animationInterval: ReturnType<typeof setInterval> | null = null

const input = ref<HTMLInputElement | null>(null)

const animatePlaceholder = () => {
  if (!isAnimating.value || !input.value) return

  gsap.fromTo(input.value, { y: 0, opacity: 0 }, {
    y: -30,
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      currentKeywordIndex.value = (currentKeywordIndex.value + 1) % keywords.value.length
      updatePlaceholder()

      gsap.fromTo(input.value, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
    }
  })
}

const updatePlaceholder = () => {
  if (input.value) {
    input.value.placeholder = `${basePlaceholder} ${keywords.value[currentKeywordIndex.value]}`
  }
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  inputValue.value = target.value

  if (inputValue.value) {
    isAnimating.value = false
    if (animationInterval) clearInterval(animationInterval)
  } else {
    isAnimating.value = true
    startAnimation()
  }
}

const startAnimation = () => {
  updatePlaceholder()
  animationInterval = setInterval(animatePlaceholder, 2000)
}

onMounted(() => {
  input.value = document.querySelector('.keyword-input') as HTMLInputElement
  startAnimation()

  onBeforeUnmount(() => {
    if (animationInterval) clearInterval(animationInterval)
  })
})

watch(inputValue, (newValue) => {
  if (!newValue && !isAnimating.value) {
    isAnimating.value = true
    startAnimation()
  }
})
</script>

<template>
  <div class="mx-auto flex max-w-6xl py-5 px-5 rounded-full border border-gray-500">
    <input 
      type="text" 
      class="keyword-input placeholder:text-gray-500 outline-none text-2xl w-full bg-transparent" 
      @input="handleInput" 
      ref="keywordInput" 
    />
    <IconSearch class="w-10 h-10 text-gray-500 cursor-pointer" />
  </div>
</template>

<style scoped>
.keyword-input {
  position: relative;
  overflow: hidden;
  height: 2rem;
}
</style>
