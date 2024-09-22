<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { gsap } from 'gsap'
import IconSearch from '../icons/IconSearch.vue'

const keywords = ref([
  'un lieu', 
  'une sortie', 
  'une demanche', 
  'une actualité', 
  'un événement'
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
    input.value.placeholder = `De quelle recherche souhaitez-vous effectuer ? ${keywords.value[currentKeywordIndex.value]}`
  }
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  inputValue.value = target.value

  // Arrêter l'animation si l'utilisateur commence à saisir du texte
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
  // Initial placeholder display
  input.value = document.querySelector('.keyword-input') as HTMLInputElement
  startAnimation()

  // Nettoyage de l'intervalle lors de la destruction du composant
  onBeforeUnmount(() => {
    if (animationInterval) clearInterval(animationInterval)
  })
})

watch(inputValue, (newValue) => {
  if (!newValue && !isAnimating.value) {
    // Redémarrer l'animation lorsque l'utilisateur efface tout
    isAnimating.value = true
    startAnimation()
  }
})
</script>

<template>
  <div class="mx-auto flex max-w-6xl py-5 px-5 bg-white/20">
    <input 
      type="text" 
      class="keyword-input outline-none text-white text-2xl w-full bg-transparent" 
      @input="handleInput" 
      ref="keywordInput" 
    />
    <IconSearch class="w-10 h-10 text-white cursor-pointer" />
  </div>
</template>

<style scoped>
.keyword-input {
  position: relative;
  overflow: hidden;
  height: 2rem;
}
</style>
