<template>
  <div id="list-id">
    <h2 class="text-h6 mb-3">게시글 목록</h2>

    <v-data-table
      :headers="headers"
      :items="posts"
      item-key="id"
      density="comfortable"
      class="elevation-1"
      :no-data-text="'게시글이 없습니다.'"
    >
      <template #item.actions="{ item }">
        <v-btn
          size="small"
          color="error"
          variant="tonal"
          @click="$emit('delete-post', item.id)"
          prepend-icon="mdi-delete"
        >
          삭제
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  posts: { type: Array, default: () => [] }
})
defineEmits(['delete-post'])

const headers = ref([
  { title: 'ID', key: 'id', width: 120 },
  { title: '제목', key: 'title', sortable: true },
  { title: '내용', key: 'content', sortable: false },
  { title: '액션', key: 'actions', sortable: false, width: 120 },
])
</script>
