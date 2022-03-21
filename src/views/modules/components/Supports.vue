<script setup>
import SupportModal from '@/components/SupportModal.vue'
import Support from '@/components/Support.vue'
import { useCoursesStore } from '@/stores/courses'
import { useSupportsStore } from '@/stores/supports'
import { computed, reactive, ref, watch } from 'vue'
const store = useCoursesStore()
const storeSupports = useSupportsStore()
const lesson = computed(() => store.lessonPlayer)
const loading = ref(false)
const supports = computed(() => storeSupports.supports.data)
const modal = reactive({
  showModal: false,
  supportReply: ''
})
const openModal = () => {
  modal.showModal = true
  modal.supportReply = ''
}
watch(
  () => store.lessonPlayer,
  async () => {
    loading.value = true
    await storeSupports.getSupportsByLesson(lesson.value.id)
    loading.value = false
  }
)
</script>

<template>
  <div v-if="lesson.id !== ''" class="comments">
    <div class="header">
      <span class="title"
        >Dúvidas (total: {{ supports.length }})
        <span v-if="loading">(Carregando...)</span></span
      >
      <button @click="openModal" class="btn primary">
        <i class="fas fa-plus"></i>
        Enviar nova dúvida
      </button>
    </div>
    <Support />
    <SupportModal
      @close-modal="modal.showModal = false"
      :show-modal="modal.showModal"
      :support-reply="modal.supportReply"
    />
  </div>
</template>
