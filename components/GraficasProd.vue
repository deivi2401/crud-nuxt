<template>
  <div>
    <div v-if="isLoading">
      <AtomSpinner :animation-duration="1500" :size="60" color="#ff1d5e" />
    </div>
    <ClientOnly >
      <ApexCharts v-if="!isLoading" class="ml-20 max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" type="bar" :options="chartOptions" :series="series" />
    </ClientOnly>
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
