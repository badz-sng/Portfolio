<script setup>
import { ref, onUnmounted, onMounted } from 'vue'

const props = defineProps({
  certificates: {
    type: Array,
    required: true
  }
})

const current = ref(0)
let timer = null

function start() {
  if (timer) return
  if (!props.certificates || props.certificates.length <= 1) return
  timer = setInterval(() => {
    current.value = (current.value + 1) % props.certificates.length
  }, 2000)
}

function stop() {
  clearInterval(timer)
  timer = null
}

onMounted(() => {
  start()
})

onUnmounted(stop)
</script> 

<template>
  <div
    class="certificate-carousel"
    @mouseenter="stop"
    @mouseleave="start"
  >
    <div
      class="carousel-track"
      :style="{ transform: `translateX(-${current * 100}%)` }"
    >
      <div
        v-for="(cert, i) in certificates"
        :key="i"
        class="carousel-slide"
        tabindex="0"
        :aria-label="cert.title"
      >
        <img :src="cert.image" :alt="cert.title" />
        <div class="cert-title" aria-hidden="true">{{ cert.title }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-slide {
  position: relative;
}
.cert-title {
  position: absolute;
  left: 50%;
  bottom: 1rem;
  transform: translate(-50%, 10px);
  background: rgba(0,0,0,0.6);
  color: #fff;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.95rem;
  opacity: 0;
  transition: opacity 0.18s ease, transform 0.18s ease;
  pointer-events: none;
}
.carousel-slide:hover .cert-title,
.carousel-slide:focus .cert-title,
.carousel-slide:focus-within .cert-title {
  opacity: 1;
  transform: translate(-50%, 0);
}
</style>
