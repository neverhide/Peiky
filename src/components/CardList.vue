<template>
    <section class="component">
       <h1>Mis Productos</h1>
       <Card 
         v-for="(producto, index) in productos.results" 
         v-bind:producto="producto" 
         v-bind:key="index"
       />
    </section>
</template>
<script>
import Card from "@/components/Card"


export default {
    name: 'CardList',
    props: ['productos'],
    components: {
        Card
    }
}
</script>
