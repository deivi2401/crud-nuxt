<template>
  <SidebarTest/>
  <div class="p-4 sm:ml-64 mt-28 grid grid-cols-2">
      <GraficasProd class="mx-4 justify-items-center"/>
      <BarraCategoria class=" mx-4"/>
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