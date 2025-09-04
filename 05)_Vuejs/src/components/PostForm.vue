<template>
  <form @submit.prevent="submitForm">
    <input v-model="title" placeholder="제목" />
    <textarea v-model="content" placeholder="내용"></textarea>
    <button>등록</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import '../assets/styles/form.css'   // 폼 스타일만 따로 불러오기

const emit = defineEmits(['add-post'])

const title = ref('')
const content = ref('')

function submitForm() {
  if (!title.value || !content.value) return
  emit('add-post', { title: title.value, content: content.value })
  title.value = ''
  content.value = ''
}
</script>
