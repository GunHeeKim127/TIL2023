<template>
  <div class="board">
    <h1>간단 게시판</h1>

    <!-- 글 작성 컴포넌트 -->
    <PostForm @add-post="addPost" />

    <hr />

    <!-- 글 목록 컴포넌트 -->
    <PostList :posts="posts" @delete-post="deletePost" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'

const posts = ref([])

function addPost(post) {
  posts.value.push({ id: Date.now(), ...post })
}

function deletePost(id) {
  posts.value = posts.value.filter(p => p.id !== id)
}
</script>
