<script setup>
const props = defineProps({
  title: String,
  description: String,
  link: String
})
</script>

<template>
  <article class="card portfolio-card">
    <h4 class="card-title">{{ props.title }}</h4>
    <p class="card-desc">{{ props.description }}</p>
    <a class="card-link" :href="props.link" target="_blank" rel="noopener">View</a>
  </article>
</template>
