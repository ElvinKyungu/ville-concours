<script setup lang="ts">
import { ref, onUnmounted, onMounted } from "vue"
// import { useDark } from "@vueuse/core"
import gsap from "gsap"
import IconBars from "@/components/icons/IconBars.vue"
import IconClose from "@/components/icons/IconClose.vue"
import IconInstagram from "@/components/icons/IconInstagram.vue"
import IconX from "@/components/icons/IconX.vue"
import IconArrowGrowUp from "@/components/icons/IconArrowGrowUp.vue"
import  IconSearch from "../icons/IconSearch.vue"
import PopupFull from '@/components/popups/PopupFull.vue'
import Input from "../Form/Input.vue"

const showPopup = ref(false)

const togglePopup = () => {
  showPopup.value = !showPopup.value
}


function open_menu() {
  const tl = gsap.timeline();
  tl.to(".container--menu", {
    "--clip": "110vw",
    duration: 2,
    ease: "power2.out",
  })
    .fromTo(
      ".menu__left > *",
      {
        x: -150,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        stagger: {
          from: "center",
          each: 0.05,
        },
      },
      "0",
    )
    .fromTo(
      ".menu__right",
      {
        x: -100,
        opacity: 0,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out",
      },
      "<0.5",
    );
  return tl
}
function close_menu() {
  const tl = gsap.timeline()
  tl.fromTo(
    [".menu__left > *", ".menu__right"],
    {
      x: 0,
      opacity: 1,
    },
    {
      x: -150,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
  ).to(
    ".container--menu",
    {
      "--clip": "0rem",
      duration: 1,
      ease: "power2.out",
    },
    "=-1",
  );
  return tl
}
const menuItems = [
  { name: 'Accueil', route: '/' },
  { name: 'A propos', route: '/about' },
  { name: 'FAQ', route: '/projects' },
  { name: 'Témoignages', route: '/testimonials' },
  { name: 'Endroits touristique', route: '/experiences' },
  { name: 'Contact', route: '/contact' }
]

const enter = (event: MouseEvent) => {
  const icon = (event.currentTarget as HTMLElement).querySelector('.icon')
  gsap.to(icon, { opacity: 1, x: 0, duration: 0.2, ease: 'power2.out' })
}

const leave = (event: MouseEvent) => {
  const icon = (event.currentTarget as HTMLElement).querySelector('.icon')
  gsap.to(icon, { opacity: 0, x: -20, duration: 0.2, ease: 'power2.in' })
}
const showButton = ref(false)

const checkScroll = () => {
  const scrollPosition = window.scrollY || window.pageYOffset
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight

  if (scrollPosition > documentHeight * 0.4 - windowHeight) {
    if (!showButton.value) {
      showButton.value = true
      gsap.fromTo('.sidebar__menu-trigger', { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.5 })
    }
  } else {
    showButton.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <header>
    <nav
      class="
      "
    >
      <button
        v-if="showButton"
        class="sidebar__menu-trigger hidden w-20 h-20 fixed border text-gray-800 group bg-black/10 backdrop-blur-md md:flex flex-col gap-4 ul rounded-full top-1/2 -translate-y-1/2 left-10 lg:left-20 items-center justify-center animate-pulse"
        @click="open_menu"
      >
        <span
          class="absolute w-full h-full rounded-full bg-white/20 opacity-70 transition-opacity duration-1000 ease-in-out animate-pulse"
        ></span>
        <IconBars class="w-10 h-10 relative z-10 text-white" />
      </button>
      <ul class="fixed bg-black/50 text-white backdrop-blur-md items-center w-full flex justify-between py-6 px-5 space-x-5 z-50">
        <li class="cursor-pointer">
          <router-link to="/" class="text-3xl">Tokyo city</router-link>
        </li>
        <li class="cursor-pointer hidden md:flex">
          <ul class="flex gap-5">
            <li>Que faire à Tokyo</li>
            <li>Espace touristique</li>
            <li @click="togglePopup">
              <IconSearch class="text-white"/>
            </li>
            <li>
              <IconInstagram class="text-white"/>
            </li>
            <li>
              <IconX class="text-white"/>
            </li>
          </ul>
        </li>
        <li class="cursor-pointer md:hidden flex">
          <IconBars
            class="w-10 h-10 relative z-10"
          />
        </li>
      </ul>
    </nav>
    <div class="containers">
      <div
        class="container container--menu bg-black/50 text-white h-full backdrop-blur-md flex justify-between px-20 py-10"
      >
        <div class="menu__layout">
          <ul class="menu__left text-xl space-y-5">
            <li v-for="item in menuItems" :key="item.name" @mouseenter="enter" @mouseleave="leave" class="menu-item">
              <router-link :to="item.route" class="flex gap-4 items-center">
                {{ item.name }}
                <span ref="icons" class="icon"><IconArrowGrowUp /></span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="sidebar">
          <button class="sidebar__menu-trigger menu__right" @click="close_menu">
            <IconClose
              class="w-10 h-10"
            />
          </button>
        </div>
      </div>
    </div>
  </header>
  <PopupFull :isOpen="showPopup" @close="togglePopup">
    <Input/>
  </PopupFull>
</template>
<style scoped>
.container--menu,
.container--main {
  width: 100%;
  max-height: 100vh;
  height: 100%;
  display: flex;
  z-index: 99;
  position: fixed !important;
}

.container--menu {
  --clip: 0;
  clip-path: circle(var(--clip) at calc(7% + 1.5rem / 2) 50%);
  position: absolute;
}

.sidebar__menu-trigger {
  z-index: 99;
}
.menu-item {
  position: relative;
}

.icon {
  display: inline-block;
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.1s ease, transform 0.1s ease;
}
</style>