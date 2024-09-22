<template>
<footer class="flex w-full">
  <div class="w-full  mx-auto p-4 md:py-8 md:px-10">
    <div class="sm:flex sm:items-center sm:justify-between">
      <router-link 
        to="/" 
        class="flex items-center  sm:mb-0 space-x-3 rtl:space-x-reverse md:text-5xl"
      >
        Tokyo city
      </router-link>
      <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
        <li>
          <router-link  to="/" class="hover:underline me-4 md:me-6">About</router-link>
        </li>
        <li>
          <router-link  to="/" class="hover:underline me-4 md:me-6">Privacy Policy</router-link>
        </li>
        <li>
          <router-link  to="/" class="hover:underline me-4 md:me-6">Licensing</router-link>
        </li>
        <li>
          <router-link  to="/" class="hover:underline">Contact</router-link>
        </li>
      </ul>
    </div>
    <hr class="my-6 border-gray-300 sm:mx-auto lg:my-8" />
    <span class="block text-sm text-gray-700 sm:text-center">
      © 2023 
      <router-link  to="/" class="hover:underline">
        Tokyo city
      </router-link>
      All Rights Reserved.
    </span>
  </div>
</footer>
</template>