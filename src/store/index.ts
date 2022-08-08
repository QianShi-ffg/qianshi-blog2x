import { defineStore } from 'pinia'

export const useStore = defineStore('store',{
    state: () => { 
        return {
            count: 0
        }
    },
    getters: {
        getCount: (state) => {
            return state.count
        }
    },
    actions: {
        setCount(count:number){
            this.count = count
        }
    }
})