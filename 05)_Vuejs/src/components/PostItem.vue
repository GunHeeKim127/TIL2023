<template>
  <li class="item">
    <div class="content">
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
    </div>
    <button @click="$emit('delete-post', post.id)">삭제</button>
  </li>
</template>

<script setup>
import '../assets/styles/item.css'

defineProps({
  post: { type: Object, required: true }
})
defineEmits(['delete-post'])
</script>
