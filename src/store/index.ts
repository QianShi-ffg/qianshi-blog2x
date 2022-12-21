import { createPinia, defineStore } from 'pinia'

export const useStore = defineStore('store',{
    state: () => { 
        return {
            count: 0,
            scroll: 0,
            myLoading: false,
            switchChecked: true
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
        },
        setMyLoading(myLoading:boolean){
            if (myLoading) {
                this.myLoading = myLoading
            }else {
                const timeout = setTimeout(() => {
                    this.myLoading = myLoading
                    clearTimeout(timeout)
                },1000)
            }
           
        },
        setSwitchChecked(switchChecked:boolean){
            this.switchChecked = switchChecked
        },
    }
})

export const store = createPinia()