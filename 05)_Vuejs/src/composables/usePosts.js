import { ref } from 'vue'

export function usePosts() {
  const posts = ref([])

  function addPost(post) {
    posts.value.push({ id: Date.now(), ...post })
  }

  function deletePost(id) {
    posts.value = posts.value.filter(p => p.id !== id)
  }

  return { posts, addPost, deletePost }
}
