import { defineStore } from 'pinia'

interface FormData{
  productName: string;
  brand: string;
  price: number | null;
  category: string;
  itemWeight: number | null;
}

export const useMyTestStoreStore = defineStore({
  id: 'myTestStoreStore',
  state: (): FormData => ({ 
    productName: '',
    brand: '',
    price: null,
    category: '',
    itemWeight: null,
  }),
  actions: {
    setMessage(newMessage:string){
      this.mensaje = newMessage
    }
  },
  getters: {},
  persist: true,
})