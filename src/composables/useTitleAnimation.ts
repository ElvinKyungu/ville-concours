// useTitleAnimation.ts
import { ref, type Ref, onMounted } from 'vue'
import gsap from 'gsap'

export function useTitleAnimation(titleRef: Ref<HTMLElement | null>, delay = 0.5) {
  const isVisible = ref(false)

  onMounted(() => {
    if (titleRef.value) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible.value) {
            isVisible.value = true
            gsap.fromTo(titleRef.value,
              {
                y: 50,
                opacity: 0,
                clipPath: "inset(100% 0% 0% 0%)",
              },
              {
                y: 0,
                opacity: 1,
                clipPath: "inset(0% 0% 0% 0%)", 
                duration: 1.5,
                ease: "power4.out",
                delay,
              }
            )
          }
        })
      })

      observer.observe(titleRef.value)
    }
  })
}
