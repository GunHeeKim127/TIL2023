<template>
  <v-form @submit.prevent="$emit('submit')" class="mb-4">
    <v-text-field
      :model-value="title"
      @update:model-value="$emit('update:title', $event)"
      label="제목"
      variant="outlined"
      density="comfortable"
      :error="Boolean(errors.title)"
      :error-messages="errors.title"
      class="mb-4"
      clearable
    />

    <v-textarea
      :model-value="content"
      @update:model-value="$emit('update:content', $event)"
      label="내용"
      variant="outlined"
      auto-grow
      rows="3"
      :error="Boolean(errors.content)"
      :error-messages="errors.content"
      class="mb-4"
      clearable
    />

    <div class="d-flex justify-end">
      <v-btn type="submit" color="primary" prepend-icon="mdi-plus">
        등록
      </v-btn>
    </div>
  </v-form>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  content: { type: String, default: '' },
  errors: { type: Object, default: () => ({}) }
})

defineEmits(['update:title', 'update:content', 'submit'])
</script>
