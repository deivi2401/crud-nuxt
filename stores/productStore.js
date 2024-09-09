import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
  }),
  getters: {
    productCategories: (state) => {
      const categories = {};
      state.products.forEach((product) => {
        if (categories[product.category]) {
          categories[product.category]++;
        } else {
          categories[product.category] = 1;
        }
      });
      return categories;
    },
  },
  actions: {
    addProduct(product) {
      this.products.push(product);
    },
    setProducts(products) {
      this.products = products;
    },
  },
});
