<script setup lang="ts">
import { ref } from 'vue'
import { usePopupAnimation } from '@/composables/usePopupAnimation'
import IconClose from '@/components/icons/IconClose.vue'

defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const popupContent = ref<HTMLElement | null>(null)

const closePopup = () => {
  emit('close')
}

const { beforeEnter, enter, leave } = usePopupAnimation()
</script>

<template>
  <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <div v-if="isOpen" class="popup-backdrop cursor-pointer backdrop-blur-md" @click="closePopup">
      <div ref="popupContent" class="popup-content rounded-xl p-7 cursor-default" @click.stop>
        <button @click="closePopup" class="close-btn">
          <IconClose class="w-9 h-9 text-white" />
        </button>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.popup-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  width: 80%;
  height: 95%;
  background: black;
  position: relative;
  border-radius: 8px;
  overflow: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
}

/* Transitions for fade effect */
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.5s ease;
}

.popup-enter, .popup-leave-to /* .popup-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>