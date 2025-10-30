<!-- <template>
  <v-app>
    <v-main>
      <v-container class="py-8" max-width="800">
        <h1 class="text-h5 text-center mb-6">간단 게시판 (Vuetify)</h1>

        <PostForm
          :title="title"
          :content="content"
          :errors="errors"
          @update:title="v => (title = v)"
          @update:content="v => (content = v)"
          @submit="handleSubmit"
        />

        <v-divider class="my-6" />

        <PostList :posts="posts" @delete-post="deletePost" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'
import { usePosts } from './composables/usePosts'
import { usePostForm } from './composables/usePostForm'

const { posts, addPost, deletePost } = usePosts()
let { title, content, errors, validate, reset } = usePostForm()

function handleSubmit() {
  if (!validate()) return
  addPost({ title, content })
  reset()
}
</script> -->
<!-- src/App.vue -->
<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
// 비움: 라우터 뷰만 렌더
</script>
