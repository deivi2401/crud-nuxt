<template>
  <h1 class="text-center my-4 font-bold text-xl antialiased">Productos por Categoria</h1>
  <div class="grid sm:grid-cols-12 gap-2 my-4">
      <GraficasProd class="mx-4 justify-items-center col-span-4"/>
      <BarraCategoria class=" mx-4 col-span-4"/>
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/productStore';
import BarraCategoria from '~/components/BarraCategoria.vue';

const productStore = useProductStore();

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