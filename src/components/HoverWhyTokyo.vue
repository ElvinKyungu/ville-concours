<script setup lang="ts">
import gabrielAvatar from '@/assets/tokyo-2.avif'

</script>
<template>
  <div class="p-4 flex flex-col absolute w-full bottom-16">
    <div class="app-result">
      <img
        :src="gabrielAvatar"
        class="w-16 rounded-xl object-cover h-16 shrink-0"
      />
      <div class="w-full flex flex-col items-start">
        <p class="font-bold">Gabriel Delattre</p>
        <p class="opacity-90">Cofondateur @Capte</p>
      </div>
    </div>
    <div class="app-result">
      <img
        src="https://media.licdn.com/dms/image/D4D03AQFhQqpiuPDRew/profile-displayphoto-shrink_100_100/0/1690221737342?e=1727308800&v=beta&t=y-FktzOVxR8itq1zjbn_uVAO_ZW2QMKnZwV7Sgasui0"
        class="w-16 rounded-xl object-cover h-16 shrink-0"
      />
      <div class="w-full flex flex-col items-start">
        <p class="font-bold">Emmanuel Makabu</p>
        <p class="opacity-90">Cofondateur @KreativeTouch</p>
      </div>
    </div>
    <div class="app-result">
      <img
        src="https://media.licdn.com/dms/image/D4E03AQGyWzA0bK1waQ/profile-displayphoto-shrink_100_100/0/1704526840760?e=1727308800&v=beta&t=2M2V9qXoIBb8w35p8-xwFAuBqco-7GSgRkPwlZ0Q6WI"
        class="w-16 rounded-xl object-cover h-16 shrink-0"
      />
      <div class="w-full flex flex-col items-start">
        <p class="font-bold">Ana Forostovschi</p>
        <p class="opacity-80">Product manager @StrategicZone</p>
      </div>
    </div>
    <Button title="See all testimonials" link="/testimonials" />
    <hr />
  </div>
</template>