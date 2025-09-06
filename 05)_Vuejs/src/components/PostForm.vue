<!-- src/components/PostForm.vue -->
<template>
  <form class="form" @submit.prevent="$emit('submit')">
    <input
      :value="title"
      @input="$emit('update:title', $event.target.value)"
      placeholder="제목"
    />
    <textarea
      :value="content"
      @input="$emit('update:content', $event.target.value)"
      placeholder="내용"
    ></textarea>

    <div class="errors" v-if="hasErrors">
      <p v-for="(msg, key) in errors" :key="key">{{ msg }}</p>
    </div>

    <button type="submit">등록</button>
  </form>
</template>

<script setup>
import { computed } from 'vue'
import '../assets/styles/form.css'

const props = defineProps({
  title: { type: String, default: '' },
  content: { type: String, default: '' },
  errors: { type: Object, default: () => ({}) }
})

defineEmits(['update:title', 'update:content', 'submit'])

const { title, content, errors } = props
const hasErrors = computed(() => Object.keys(errors || {}).length > 0)
</script>
