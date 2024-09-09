<template>
  <div>
    <ClientOnly >
      <GraficasProd/>
    </ClientOnly>

  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/productStore';

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