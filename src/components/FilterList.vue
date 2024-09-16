<script setup>
import { useFilterStore } from './store/useFilterStore.js'

const { onChangeSelect, onChangeBrend } = useFilterStore()
</script>

<template>
  <div class="mt-7 flex place-items-center text-lg bg-white">
    <div>
      <span class="font-bold"> Сортировать: </span>
      <select @change="onChangeSelect($event.target.value)" class="border rounded-md px-2">
        <option>Поумолчанию</option>
        <option value="-price">Убыванию</option>
        <option value="price">Возрастанию</option>
        <option value="title">Алфавиту</option>
      </select>
    </div>
    <div class="ml-10">
      <span class="font-bold">Бренд: </span>
      <select
        @change="onChangeBrend($event.target.value)"
        name=""
        id=""
        class="ml-2 border rounded-md px-2"
      >
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
        <option value="Xiaomi">Xiaomi</option>
        <option value="Google">Google</option>
        <option value="Nothing">Nothing</option>
      </select>
    </div>
    <div class="ml-10">
      <span class="font-bold">что-то:</span>
      <select name="" id="" class="ml-2 border rounded-md px-2">
        <option value="">s</option>
        <option value="">a</option>
        <option value="">d</option>
      </select>
    </div>
  </div>
</template>
