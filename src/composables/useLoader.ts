import { ref } from 'vue';

const isLoading = ref(false)

export function useLoader() {
  return {
    isLoading,
    showLoader: () => (isLoading.value = true),
    hideLoader: () => (isLoading.value = false),
  }
}
