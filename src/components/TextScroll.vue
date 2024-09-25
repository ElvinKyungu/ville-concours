<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const rows = ref<HTMLElement[]>([])

const tagRows = [
  [
    { text: 'Strategy', styleClass: '' },
    { text: 'Strategy', styleClass: '-stroke' },
    { text: 'Strategy', styleClass: '' },
    { text: 'Strategy', styleClass: '-stroke' },
    { text: 'Strategy', styleClass: '' }
  ],
]

let lastScrollTop = 0

onMounted(() => {
  rows.value.forEach((row, i) => {
    const rowWidth = row.getBoundingClientRect().width;
    const rowItemWidth = row.children[0].getBoundingClientRect().width;
    const initialOffset = ((2 * rowItemWidth) / rowWidth) * 100 * -1;

    gsap.set(row, { xPercent: `${initialOffset}` });

    const duration = 5 * (i + 1)

    const tl = gsap.timeline({ repeat: -1 })
    tl.to(row, { xPercent: 0, ease: 'none', duration })
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        tl.reverse() 
      } else {
        tl.play()
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
    })
  })
})
</script>
<template>
  <section class="text-scroll-container">
    <div class="text-scroll-content">
      <div class="text-scroll-items bg-gray-100 text-black" role="marquee">
        <div v-for="(row, index) in tagRows" :key="index" class="text-scroll-row" ref="rows">
          <div v-for="(item, idx) in row" :key="idx" :class="item.styleClass" class="text-scroll-item">
            <span>{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>

.text-scroll-container {
  position: relative;
}

.text-scroll-content {
  padding: 200px 0;
}

.text-scroll-items {
  margin: -58px 0;
  overflow: hidden;
  cursor: default;

}

.text-scroll-row {
  display: flex;
  position: relative;
  text-align: center;
  white-space: nowrap;
}

.text-scroll-item {
  position: relative;
  line-height: 100%;
  font-size: 5.75vw;
  flex: 0 0 33%;
  padding: 58px 0;
  text-transform: uppercase;
  font-weight: 500;
}

.text-scroll-item.-stroke {
  color: transparent;
  text-shadow: none;
  -webkit-text-stroke: 2px rgba(0, 0, 0, 0.5);
}

.text-scroll-item span {
  position: relative;
  display: inline-block;
  z-index: 1;
}
</style>