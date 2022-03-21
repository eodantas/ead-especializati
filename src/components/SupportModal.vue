<script setup>
import { computed, ref } from 'vue'
import { useCoursesStore } from '@/stores/courses'
import { useSupportsStore } from '@/stores/supports'

const props = defineProps({
  showModal: {
    require: true,
    default: false,
    type: Boolean
  },
  supportReply: {
    require: true,
    type: String,
    default: ''
  }
})
const emit = defineEmits(['closeModal'])
const store = useCoursesStore()
const storeSupports = useSupportsStore()
const lesson = computed(() => store.lessonPlayer)
const description = ref('')
const loading = ref(false)

const sendForm = async () => {
  const params = {
    lesson: lesson.value.id,
    description: description.value,
    status: 'P',
    support: props.supportReply
  }

  // let actionName = 'createSupport'
  // if (props.supportReply != '') {
  //   actionName = 'createNewReplyToSupport'
  // }

  loading.value = true
  if (props.supportReply === '') {
    await storeSupports.storeSupport(params)
  } else {
    await storeSupports.newReplySupport(params)
  }

  loading.value = false
  description.value = ''
  emit('closeModal')
}
</script>

<template>
  <transition name="fade">
    <div v-if="props.showModal" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-title">
            <div class="modal-header">
              <h3 v-if="!props.supportReply">Nova dúvida</h3>
              <h3 v-else>Responder para o ticket {{ props.supportReply }}</h3>
              <i
                class="close fas fa-times"
                title="Cancelar"
                @click="$emit('closeModal')"
              ></i>
            </div>
            <div class="details">
              <span
                ><small
                  >Total de caracteres: {{ description.length }}</small
                ></span
              >
              <span
                ><small>(mínimo <b>4</b> e máximo <b>10k</b>)</small></span
              >
            </div>
          </div>
          <div class="modal-body">
            <form action="#" method="post" @submit.prevent="sendForm">
              <div class="groupForm">
                <textarea
                  name="description"
                  v-model="description"
                  placeholder="Descreva sua mensagem"
                  autofocus
                  @keydown.esc="$emit('closeModal')"
                ></textarea>
              </div>

              <button class="btn reverse" @click.prevent="$emit('closeModal')">
                <i class="fas fa-times"></i> Cancelar
              </button>
              <button
                v-if="description.length > 3"
                class="btn primary text-white animate__animated animate__bounceIn"
                :class="{ disabled: loading }"
                :disabled="loading"
                type="submit"
              >
                <i class="fas fa-check"></i>
                <span v-if="loading">Enviando...</span>
                <span v-else>Enviar</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
