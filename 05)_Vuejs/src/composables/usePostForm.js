import { reactive, toRefs } from 'vue'

export function usePostForm() {
  const state = reactive({
    title: '',
    content: '',
    errors: {}
  })

  function validate() {
    state.errors = {}
    if (!state.title.trim()) state.errors.title = '제목을 입력하세요.'
    if (!state.content.trim()) state.errors.content = '내용을 입력하세요.'
    return Object.keys(state.errors).length === 0
  }

  function reset() {
    state.title = ''
    state.content = ''
    state.errors = {}
  }

  // App.vue 에서 바로 바인딩하기 쉽게 원시값 반환
  return {
    get title() { return state.title },
    set title(v) { state.title = v },
    get content() { return state.content },
    set content(v) { state.content = v },
    get errors() { return state.errors },
    validate,
    reset
  }
}
