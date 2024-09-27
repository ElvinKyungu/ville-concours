// useTitleAnimation.ts
import { ref, type Ref, onMounted } from 'vue'
import gsap from 'gsap'

export function useParagraphAnimation(paragraphRef: Ref<HTMLElement | null>, delay = 0.7) {
  const isVisible = ref(false)

  onMounted(() => {
    if (paragraphRef.value) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible.value) {
            isVisible.value = true
            gsap.fromTo(paragraphRef.value,
              {
                y: 50,
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
                duration: 2,
                ease: "power4.out",
                delay,
              }
            )
          }
        })
      })

      observer.observe(paragraphRef.value)
    }
  })
}
