import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useFilterStore = defineStore('filter', () => {
  const filters = reactive({
    sortBy: 'title',
    sortBrend: '',
    searchQuery: ''
  })

  // sort by price,title
  const onChangeSelect = (value) => {
    filters.sortBy = value
  }

  // filters by brend
  const onChangeBrend = (value) => {
    filters.sortBrend = value
  }

  //search query
  const onChangeSearchInput = (value) => {
    filters.searchQuery = value
  }

  return { onChangeSelect, onChangeBrend, onChangeSearchInput, filters }
})
