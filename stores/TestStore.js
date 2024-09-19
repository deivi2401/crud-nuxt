import { defineStore } from "pinia";

export const useFormStore = defineStore("formStore", {
  state: () => ({
    productos: [
      {
        name: "Pulsefire haste",
        brand: "HyperX",
        price: 20,
        category: "GA",
        itemWeight: 1,
      },
      {
        name: "Msi Laptop",
        brand: "MSI",
        price: 1300,
        category: "PC",
        itemWeight: 10,
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
