<template>
  <div class="flex-grow-0">
    <div v-if="isLoading">
      <AtomSpinner :animation-duration="1500" :size="60" color="#ff1d5e" class="mx-40"/>
    </div>
    <ApexCharts v-if="!isLoading" class="mx-4 max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" type="bar" :options="chartOptions" :series="series" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useProductStore } from '@/stores/productStore';
import ApexCharts from 'vue3-apexcharts';
import {AtomSpinner} from 'epic-spinners'

const productStore = useProductStore();

const categories = computed(() => Object.keys(productStore.productCategories));
const seriesData = computed(() => Object.values(productStore.productCategories));
const isLoading = ref(true)

const onChartLoad = () => {
  setTimeout(() => {
    isLoading.value = false
  }, 2000);
}
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
onMounted(() => {
    onChartLoad()
  })
</script>

<style scoped>
</style>
