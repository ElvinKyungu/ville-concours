<template>
  <span class="loader"></span>
</template>
<style>
.loader {
  width: 48px;
  height: 48px;
  background: #fff;
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) scale(0.2);
    border-radius: 10%;
  }
  
  100% {
    transform: rotate(360deg) scale(0.2);
    border-radius: 10%;
  }
}
  
</style>