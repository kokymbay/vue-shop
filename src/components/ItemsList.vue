<script setup>
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'
import Item from './Item.vue'
import { useFilterStore } from './store/useFilterStore.js'

const items = ref([])
const { filters } = useFilterStore()

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }
    if (filters.sortBrend) {
      params.brend = filters.sortBrend
    }

    const { data } = await axios('https://92ca1f2d187e060c.mokky.dev/items', { params })
    items.value = data
  } catch (err) {
    console.log(err)
  }
}
onMounted(fetchItems)
watch(fetchItems)
</script>

<template>
  <div class="text-lg mt-5 flex flex-wrap gap-5 place-content-center" v-auto-animate>
    <Item
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :price="item.price"
      :image="item.img"
      :isOpen="item.isOpen"
    />
  </div>
</template>
