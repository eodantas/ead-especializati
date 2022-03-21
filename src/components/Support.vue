<script setup>
import { useSupportsStore } from '@/stores/supports'
import { computed, reactive, ref } from 'vue'
import SupportModal from '@/components/SupportModal.vue'
const store = useSupportsStore()
const supports = computed(() => store.supports)
const showSupports = ref('0')
const modal = reactive({
  showModal: false,
  supportReply: ''
})
const openModal = (supportId) => {
  modal.showModal = true
  modal.supportReply = supportId
}
</script>

<template>
  <div class="content">
    <div v-for="support in supports.data" :key="support.id" class="card">
      <div class="commentContent main">
        <span class="avatar">
          <img
            src="/src/assets/images/avatars/user01.svg"
            alt="{{ support.user.name }}"
          />
        </span>
        <div class="comment">
          <div class="balloon">
            <span class="fas fa-sort-down"></span>
            <span class="owner"
              >{{ support.user.name }} - {{ support.dt_updated }}</span
            >
            <span class="text">
              {{ support.description }}
            </span>
          </div>
        </div>
        <button class="btn primary">
          <span @click="showSupports = '0'" v-if="showSupports !== '0'"
            >Ocultar respostas</span
          >
          <span @click="showSupports = support.id" v-else
            >Exibir respostas (total: {{ support.replies?.length ? support.replies.length : 0 }})</span
          >
        </button>
      </div>
      <div v-if="showSupports === support.id" class="answersContent">
        <div
          v-for="reply in support.replies"
          :key="reply.id"
          :class="[
            'commentContent',
            { rightContent: support.user.id !== reply.user?.id }
          ]"
        >
          <span v-if="support.user.id === reply.user?.id" class="avatar">
            <img src="/src/assets/images/avatars/user03.svg" alt="" />
          </span>
          <div class="comment">
            <div class="balloon">
              <span class="fas fa-sort-down"></span>
              <span class="owner"
                >{{ reply.user?.name }} - {{ reply.date }}</span
              >
              <span class="text">
                {{ reply.description }}
              </span>
            </div>
          </div>
          <span v-if="support.user.id !== reply.user?.id" class="avatar">
            <img src="/src/assets/images/avatars/user03.svg" alt="" />
          </span>
        </div>
        <span class="answer">
          <button @click="openModal(support.id)" class="btn primary">
            Responder
          </button>
        </span>
      </div>
    </div>
    <SupportModal
      @close-modal="modal.showModal = false"
      :show-modal="modal.showModal"
      :support-reply="modal.supportReply"
    />
  </div>
</template>
