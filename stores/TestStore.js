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
  getters: {},
  persist: true,
});
