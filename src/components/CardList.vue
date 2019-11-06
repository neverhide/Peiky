<template>
    <section class="component">
       <h1>Mis Productos</h1>
       <Card 
         v-for="(producto, index) in productos" 
         v-bind:producto="producto" 
         v-bind:key="index"
       />
    </section>
</template>
<script>
import Card from "@/components/Card"
//import { mapState, mapActions } from 'vuex'

export default {
    name: 'CardList',
    props: ['productos'],
    components: {
        Card
    }
    /* computed:{
      ...mapState(['productos'])
    },
    methods:{
      //...mapActions(['obtenerProductos'])
    },
    mounted: function () {
    this.obtenerProductos()
    } */
}
</script>
