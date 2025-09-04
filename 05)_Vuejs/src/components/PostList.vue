<template>
  <div>
    <h2>게시글 목록</h2>
    <ul>
      <PostItem
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @delete-post="$emit('delete-post', $event)"
      />
    </ul>
    <p v-if="!posts.length">게시글이 없습니다.</p>
  </div>
</template>

<script setup>
import PostItem from './PostItem.vue'
import '../assets/styles/list.css'   // 목록 스타일 불러오기

defineProps({
  posts: {
    type: Array,
    default: () => []
  }
})  

defineEmits(['delete-post'])
</script>
