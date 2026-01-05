<script setup>
const props = defineProps({
  title: String,
  description: String,
  link: String,
  image: String
})
</script>

<template>
  <article class="card portfolio-card">
    <img v-if="props.image" :src="props.image" alt="" class="card-image" />
    <div class="card-body">
      <h4 class="card-title">{{ props.title }}</h4>
      <p class="card-desc">{{ props.description }}</p>
      <a class="card-link" :href="props.link" target="_blank" rel="noopener">Visit Github Repository</a>
    </div>
  </article>
</template>"
