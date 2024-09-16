<script setup>
import { ref } from 'vue'
defineProps({
  title: String,
  price: Number,
  id: Number,
  image: String,
  isOpen: Boolean
})

const isAdded = ref(false)

const addToCard = () => {
  if (!isAdded.value) {
    isAdded.value = true
  } else {
    isAdded.value = false
  }
}
</script>

<template>
  <div
    class="flex flex-col border rounded-xl p-3 shadow-lg hover:-translate-y-1 hover:scale-100 duration-200"
  >
    <!-- image card  -->
    <div>
      <img :src="image" class="w-48 h-48" />
    </div>
    <div class="mt-1">
      <!-- title card  -->
      <h1 class="text-base">{{ title }}</h1>
    </div>

    <!-- price card  -->
    <div class="mt-auto">
      <h1 class="text-xl">{{ price }} Тг</h1>
    </div>

    <!-- action card  -->
    <div class="mt-5 text-base flex justify-center">
      <button
        @click="addToCard"
        v-if="!isAdded"
        class="border border-green-900 text-green-800 hover:text-green-600 transition-all duration-300 px-2 rounded-lg"
      >
        Добавить в корзину
      </button>
      <button @click="addToCard" v-else class="border text-red-800 border-red-800 px-2 rounded-lg">
        Удалить из корзины
      </button>
    </div>
  </div>
</template>
