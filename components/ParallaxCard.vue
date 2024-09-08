<script>
import {useParallax} from '@vueuse/core'
const container = ref(null);
const { tilt, roll } = useParallax(container);

const SCALE_CONSTANT = -25;
</script>

<template>
  <div
    ref="container"
    class="border-green-400 h-48 w-64 rounded-md m-4"
  >
<p class="font-bold text-black">
    Hover me!
</p>
<p class="text-sm text-gray-800">
    Mira las esquinas mientras 
</p>
</div>
</template>
