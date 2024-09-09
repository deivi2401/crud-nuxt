<template>
  <h1 class="text-center my-4 font-bold text-xl antialiased">Productos por Categoria</h1>
  <div class="gap-4">

    <ClientOnly >
      <GraficasProd/>
    </ClientOnly>

    <ClientOnly>
      <BarraCategoria/>
    </ClientOnly>

  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/productStore';
import BarraCategoria from '~/components/BarraCategoria.vue';

const productStore = useProductStore();
const FormStore = useFormStore()

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