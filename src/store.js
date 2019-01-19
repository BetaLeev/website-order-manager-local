import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        themeColor: '',
        searchType: "",
        searchDateBegin: '',
        searchDateEnd: ''
    },
    // mutations: {
    //     searchDate(searchData){

    //     }
    // },
    // actions: {

    // }
})