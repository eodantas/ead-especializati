import { ref } from 'vue'
export function useToggleTypePassword() {
  const typePassword = ref('password')
  const toggleTypePassword = () =>
    (typePassword.value =
      typePassword.value === 'password' ? 'text' : 'password')

  return { typePassword, toggleTypePassword }
}
