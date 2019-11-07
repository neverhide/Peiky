<template>
  <div class="home">
    <CardList v-bind:productos="productos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CardList from '@/components/CardList.vue'
import { products } from '@/utils/api'
//import { getData } from '@/utils/fetchData'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    CardList
  },
   computed:{
      ...mapState(['productos'])
    },
    methods:{
      ...mapActions(['getData'])
    },
    mounted: function () {
      this.getData(products)
    } 
  /* data() {
    return {
      productos: []
    }
  },
  methods: {
    getListProducts(){
      return getData(products).then((result) => {
      this.productos = result.results
    })
    } 
  },
  mounted: function(){
    this.getListProducts();
    
  } */
}
</script>
