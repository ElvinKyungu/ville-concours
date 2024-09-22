// composables/usePopupAnimation.ts
import { gsap } from 'gsap'

export const usePopupAnimation = () => {
  const beforeEnter = (el: Element) => {
    gsap.set(el, { y: '100%', opacity: 0 })
  }

  const enter = (el: Element, done: () => void) => {
    gsap.to(el, {
      y: '0%',
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: done
    })
  }

  const leave = (el: Element, done: () => void) => {
    gsap.to(el, {
      y: '100%',
      opacity: 0,
      duration: 0.5,
      ease: 'power2.in',
      onComplete: done
    })
  }

  return { beforeEnter, enter, leave }
}