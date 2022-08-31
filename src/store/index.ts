import { createPinia, defineStore } from 'pinia'

export const useStore = defineStore('store',{
    state: () => { 
        return {
            count: 0,
            scroll: 0
        }
    },
    getters: {
        getCount: (state) => {
            return state.count
        },
        getScroll: (state) => {
            return state.scroll
        }
    },
    actions: {
        setCount(count:number){
            this.count = count
        },
        setScroll(scroll:number){
            this.scroll = scroll
        }
    }
})

export const store = createPinia()