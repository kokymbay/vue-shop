import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalWindowStore = defineStore('modalWindow', () => {
  const isModalWindow = ref(false)

  function openModalWindow() {
    isModalWindow.value = true
  }
  function closeModalWindow() {
    isModalWindow.value = false
  }

  return { isModalWindow, openModalWindow, closeModalWindow }
})
