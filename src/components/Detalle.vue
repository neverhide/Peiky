<template>
    <section>
        <h1>{{producto.title}}</h1>
        <h3>{{ $route.params.id }}</h3>
        <img :src="producto.poster_path" :alt="producto.title">
        <CarouselImg/>
        <article>
            <p>{{producto.overview}}</p>
        </article>
        
        
    </section>
</template>
<script>
//import { getData } from '@/utils/fetchData'
import CarouselImg from '@/components/CarouselImg'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Detalle',
    props: ['id'],
    components: {
        CarouselImg
    },
    computed:{
      ...mapState(['producto'])
    },
    methods:{
      ...mapActions(['getData'])
    },
    mounted: function () {
      this.getData(`movie/${this.$route.params.id}`)
    } 
    /* ,
    data() {
        return {
        producto: {}
        }
    },
    methods: {
        getProduct(){
            const id = this.$route.params.id;
            return getData(`movie/${this.$route.params.id}`).then((data) => {
                this.producto = data
            })
        }
    },
    mounted: function(){
        this.getProduct();
        
    } */
}
</script>