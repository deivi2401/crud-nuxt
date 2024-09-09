<template>
    <div ref="popperRef" class="popup-content" v-show="isVisible">
    Mandaste los datos
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { createPopper } from '@popperjs/core';

const props = defineProps({
  referenceElement: {
    type: Object,
    required: true,
  },
  isVisible: {
    type: Boolean,
    default: false,
  },
});

const popperRef = ref<HTMLElement | null>(null);
let popperInstance: ReturnType<typeof createPopper> | null = null;

onMounted(() => {
  if (typeof window !== 'undefined' && popperRef.value && props.referenceElement instanceof HTMLElement) {
    popperInstance = createPopper(props.referenceElement, popperRef.value, {
      placement: 'bottom',
    });
  }
});

onUnmounted(() => {
  if (popperInstance) {
    popperInstance.destroy();
    popperInstance = null;
  }
});

watch(() => props.isVisible, (newValue) => {
  if (popperInstance && popperRef.value) {
    popperInstance.update();
  }
});
</script>

<style scoped>
.popup-content {
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
</style>