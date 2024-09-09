<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add a new product
      </h2>
      <form @submit.prevent="handleSubmit">
        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div class="sm:col-span-2">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Product Name</label
            >
            <input
              v-model="newTask"
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type product name"
              required=""
            />
          </div>
          <div class="w-full">
            <label
              for="brand"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Brand</label
            >
            <input
              type="text"
              v-model="newBrand"
              id="brand"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Product brand"
              required=""
            />
          </div>
          <div class="w-full">
            <label
              for="price"

              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Price</label
            >
            <input
              type="number"
              v-model="newPrice"
              id="price"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="$2999"
              required=""
            />
          </div>
          <div>
            <label
              for="category"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Category</label
            >
            <select
              id="category"
              v-model="newCategory"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option selected="">Select category</option>
              <option value="TV">TV/Monitors</option>
              <option value="PC">PC</option>
              <option value="GA">Gaming/Console</option>
              <option value="PH">Phones</option>
            </select>
          </div>
          <div>
            <label
              for="item-weight"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Item Weight (kg)</label
            >
            <input
              type="number"
              name="item-weight"
              id="item-weight"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="12"
              required=""
            />
          </div>
        </div>
        <div class="py-4 sm:col-span-2">
          <label
            for="description"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Description</label
          >
        </div>
        <div v-for="task in formStore.productos">
          <h3>{{ task.name }}</h3>
          <p>{{ task.category }}</p>
        </div>
        <button
          ref="buttonRef"
          @click="togglePopup"
          class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Add product
        </button>
        <popup :reference-element="buttonRef" :is-visible="isPopupVisible" />
        <button
          @click="onResetClick"
          class="inline-flex items-center px-5 py-2.5 mt-4 mx-2 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Resetear Elementos
        </button>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { useFormStore } from '../stores/TestStore'
import { ref } from 'vue'
import popup from './popup.vue'


export default {
  components: { popup},
  setup() {
    const formStore = useFormStore()
    const newTask = ref('')
    const newBrand = ref('')
    const newPrice = ref('')
    const newCategory = ref('')
    const buttonRef = ref<HTMLElement | null>(null);
    const isPopupVisible = ref(false);

    const togglePopup = () => {
      isPopupVisible.value = !isPopupVisible.value;
      }
    const handleSubmit = () => {
      if (newTask.value.length > 0) {
        formStore.addTask({
          name: newTask.value,
          brand: newBrand.value,
          price: newPrice.value,
          category: newCategory.value,
          itemWeight: 22
        })
        newTask.value = ''
        newBrand.value = ''
        newPrice.value = ''
        newCategory.value = ''
      }
    }
    const onResetClick = () => {
      formStore.$reset()
    }
    return { handleSubmit, newTask, formStore, togglePopup, onResetClick, newBrand, newPrice, newCategory, buttonRef, isPopupVisible }
  },
}
</script>

<style></style>
