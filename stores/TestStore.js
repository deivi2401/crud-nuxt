import { defineStore } from "pinia";

export const useFormStore = defineStore("formStore", {
  state: () => ({
    productos: [
      {
        name: "ddd",
        brand: "sdadasd",
        price: 222,
        category: "asdasda",
        itemWeight: 222,
      },
      {
        name: "sewasda",
        brand: "sdadasd",
        price: 222,
        category: "asdasda",
        itemWeight: 222,
      },
    ],
  }),
  actions: {
    addTask(task) {
      this.productos.push(task);
    }
  },
  getters: {
    productCategories: (state) => {
      const categories = {};
      state.productos.forEach((product) => {
        if (categories[product.category]) {
          categories[product.category]++;
        } else {
          categories[product.category] = 1;
        }
      });
      return categories;
    }
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
