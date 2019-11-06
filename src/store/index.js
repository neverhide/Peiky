import Vue from 'vue'
import Vuex from 'vuex'
import {apiKey} from '@/utils/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos:[]
  },
  mutations: {
    /* listarProductos(state, AProductos){
      //state.prueba = {...state,AProductos}
      state.productos = AProductos
    } */
  },
  actions: {
    /* obtenerProductos : async function({commit}){
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
    if (response.ok) { // if HTTP-status is 200-299
        const data = await response.json()
        console.log(data.results);
        commit('listarProductos', data.results)
      } else {
        alert("HTTP-Error: " + response.status);
      }
    } */
  },
  modules: {
  }
})
