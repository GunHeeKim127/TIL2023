<template>
  <li>
    <h3>{{ post.title }}</h3>
    <p>{{ post.content }}</p>
    <button @click="$emit('delete-post', post.id)">삭제</button>
  </li>
</template>

<script setup>
import '../assets/styles/item.css'   // 아이템 스타일 불러오기

defineProps({
  post: {
    type: Object,
    required: true
  }
})

defineEmits(['delete-post'])
</script>
