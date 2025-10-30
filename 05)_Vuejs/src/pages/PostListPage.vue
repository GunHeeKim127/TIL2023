<template>
  <v-container max-width="900" class="py-8">
    <div class="d-flex justify-space-between align-center mb-4">
      <h1 class="text-h5">게시글 목록</h1>
      <v-btn color="primary" prepend-icon="mdi-plus" @click="$router.push({ name: 'new' })">
        글쓰기
      </v-btn>
    </div>

    <PostList :posts="posts" @delete-post="deletePost" />
  </v-container>
</template>

<script setup>
import PostList from '../components/PostList.vue'
import { usePosts } from '../composables/usePosts'

// ⚠️ usePosts는 모듈 단일톤이라 페이지 간 공유됩니다.
const { posts, deletePost } = usePosts()
</script>
