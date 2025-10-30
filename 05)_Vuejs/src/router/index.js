import { createRouter, createWebHistory } from 'vue-router'
import PostListPage from '../pages/PostListPage.vue'
import PostCreatePage from '../pages/OsotCreatePage.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'list', component: PostListPage },
    { path: '/new', name: 'new', component: PostCreatePage },
  ],
})
