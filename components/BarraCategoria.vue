<template>
  <div>
    <div v-if="isLoading">
      <AtomSpinner :animation-duration="1500" :size="60" color="#ff1d5e" class="mx-40"/>
    </div>
    <ClientOnly >
      <ApexCharts v-if="!isLoading" class="max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" type="bar" :options="chartOptions" :series="series" />
    </ClientOnly>
     </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useFormStore } from '@/stores/TestStore';
import ApexCharts from 'vue3-apexcharts';
import {AtomSpinner} from 'epic-spinners'

const formStore = useFormStore();

const categories = computed(() => Object.keys(formStore.productCategories));
const seriesData = computed(() => Object.values(formStore.productCategories));
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