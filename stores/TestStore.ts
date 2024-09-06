import { defineStore } from 'pinia'

interface FormData{
  productName: string;
  brand: string;
  price: number | null;
  category: string;
  itemWeight: number | null;
}



export const useFormStore  = defineStore('formStore',{
  state: (): FormData => ({ 
    productName: '',
    brand: '',
    price: null,
    category: '',
    itemWeight: null
  }),
  actions: {
    updateFormData(field: keyof FormData, value: string){
      this.[field] = value
    },
    resetFormData(){
      this.productName = ''
      this.brand = ''
      this.price = null
      this.category = ''
      this.itemWeight = null
    }
  },
  getters: {},
  persist: true,
})