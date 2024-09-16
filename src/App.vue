<script setup>
import { useModalWindowStore } from './components/store/useModalWindowStore.js'

import Header from './components/Header.vue'
import FilterList from './components/FilterList.vue'
import ItemsList from './components/ItemsList.vue'
import ModalWindow from './components/ModalWindow.vue'

const store = useModalWindowStore()
</script>

<template>
  <div class="mx-40 mt-7 px-10 py-5 rounded-xl bg-white">
    <Header />
    <FilterList />
    <ItemsList />
    <div v-if="store.isModalWindow">
      <ModalWindow />
    </div>
  </div>
</template>
