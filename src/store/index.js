import Vue from 'vue'
import Vuex from 'vuex'
import {apiKey} from '@/utils/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos:[],
    producto:{}
  },
  mutations: {
    getListProducts(state, data, endPoint){
        state.productos = data
        state.endPoint = endPoint
    }

  },
  actions: {
    getData : async function({commit}, endPoint){
      const response = await fetch(`https://api.themoviedb.org/3/${endPoint}/?api_key=${apiKey}`);
      console.log(endPoint)
    if (response.ok) { // if HTTP-status is 200-299
        const data = await response.json()
        console.log(data);
        commit('getListProducts', data)
      } else {
        alert("HTTP-Error: " + response.status);
      }
    } 
  },
  modules: {
  }
})
