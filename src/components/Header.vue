<script setup>
import { useFilterStore } from './store/useFilterStore'

const { onChangeSearchInput } = useFilterStore()
</script>

<template>
  <header class="flex justify-between place-items-center">
    <div>
      <h1 class="text-xl font-bold">SHOP</h1>
    </div>
    <div>
      <input
        @input="onChangeSearchInput($event.target.value)"
        type="text"
        placeholder="search"
        class="px-4 py-1 bg-yellow-50 rounded-lg border-none"
      />
    </div>
    <div class="flex gap-5">
      <div>
        <span class="text-base"> 40 000 tg </span>
      </div>
      <div>
        <button class="text-base">basketIcon</button>
      </div>
    </div>
  </header>
</template>
