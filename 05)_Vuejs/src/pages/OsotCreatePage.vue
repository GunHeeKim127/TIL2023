<template>
  <v-container max-width="900" class="py-8">
    <div class="d-flex align-center mb-4">
      <v-btn variant="text" prepend-icon="mdi-arrow-left" @click="$router.back()">뒤로</v-btn>
      <h1 class="text-h6 ml-4">글쓰기</h1>
    </div>

    <PostForm
      :title="title"
      :content="content"
      :errors="errors"
      @update:title="v => (title = v)"
      @update:content="v => (content = v)"
      @submit="handleSubmit"
    />
  </v-container>
</template>

<script setup>
import PostForm from '../components/PostForm.vue'
import { usePosts } from '../composables/usePosts'
import { usePostForm } from '../composables/usePostForm'
import { useRouter } from 'vue-router'

const router = useRouter()
const { addPost } = usePosts()
let { title, content, errors, validate, reset } = usePostForm()

function handleSubmit() {
  if (!validate()) return
  addPost({ title, content })  // 상태 추가 (공유됨)
  reset()
  router.push({ name: 'list' }) // 목록으로 이동
}
</script>
