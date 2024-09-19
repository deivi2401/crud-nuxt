<template>
  <SidebarTest/>
  <div class="p-4 sm:ml-64 mt-28 grid grid-cols-2">
      <GraficasProd class="mx-4 justify-items-center"/>
      <BarraCategoria class=" mx-4"/>
  </div>
  <div class="ml-64 ">
    <select v-model="selectedProduct" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-30 p-2.5" name="" id="">
      <option v-for="task in formStore.productos" :key="task.name" :value="task.value">
        {{ task.name }}
      </option>
    </select>
    <input type="text" v-model="selectedProductPrice" class="my-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-30 p-2.5" />
    <p>Producto seleccionado: {{ selectedProduct }}</p>
    <p>Precio del producto: {{ selectedProductPrice }}</p>
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/productStore';
import BarraCategoria from '~/components/BarraCategoria.vue';
import { useFormStore } from '@/stores/TestStore';


const productStore = useProductStore()
const formStore = useFormStore()

const selectedProduct = ref('Pulsefire Haste')
const selectedProductPrice = ref(0)

watch(selectedProduct, (newProductName) => {
  const task = formStore.getProductByName(newProductName)
  if (task) {
    selectedProductPrice.value = task.price
  }
})

// Simula agregar productos al store
productStore.setProducts([
  { id: 1, name: 'Producto A', category: 'Categoría 1' },
  { id: 2, name: 'Producto B', category: 'Categoría 1' },
  { id: 3, name: 'Producto C', category: 'Categoría 2' },
  // Agrega más productos según sea necesario
]);




</script>

<style>

</style>