<template>
  <div class="board">
    <h1>간단 게시판</h1>
    <div id="big">
      <PostForm
        :title="title"
        :content="content"
        :errors="errors"
        @update:title="v => title = v"
        @update:content="v => content = v"
        @submit="handleSubmit"
      />

      <hr />

      <PostList :posts="posts" @delete-post="deletePost" />

    </div>
  </div>
</template>

<script setup>
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'
import { usePosts } from './composables/usePosts'
import { usePostForm } from './composables/usePostForm'

// 스타일(이 컴포넌트 전용 레이아웃)
import './assets/styles/board.css'

const { posts, addPost, deletePost } = usePosts()
let { title, content, errors, validate, reset } = usePostForm()

function handleSubmit() {
  if (!validate()) return
  addPost({ title, content })
  reset()
}
</script>
