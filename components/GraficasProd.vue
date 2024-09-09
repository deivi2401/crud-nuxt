<template>
  <h1 class="text-center my-4 font-bold text-xl antialiased">Productos por Categoria</h1>
  <div class="grid gap-4">
    
    <ApexCharts class="mx-4 max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" type="bar" :options="chartOptions" :series="series" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useProductStore } from '@/stores/productStore';
import ApexCharts from 'vue3-apexcharts';

const productStore = useProductStore();

const categories = computed(() => Object.keys(productStore.productCategories));
const seriesData = computed(() => Object.values(productStore.productCategories));

const chartOptions = ref({
  chart: {
    id: 'product-bar-chart',
  },
  xaxis: {
    categories: categories.value,
  },
});

const series = ref([
  {
    name: 'Cantidad de Productos',
    data: seriesData.value,
  },
]);
</script>

<style scoped>
</style>
