<template>
    <carousel :autoplay="true" :nav="true" :items=1>
      <template slot="prev"><span class="prev">prev</span></template>
        <img v-for="imagen of imagenes" :key="imagen" :src="path + imagen">
      <template slot="next"><span class="next">next</span></template>
    </carousel>
</template>

<script>
import { base_path_poster } from '@/utils/api'
import carousel from 'vue-owl-carousel'

export default {
    name: 'CarouselImg',
    props: ['id'],
    components: { carousel },
    data(){
        return{
            path: base_path_poster,
            imagenes: [
                "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
                "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
                "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg"
            ]
        }
    },
    methods: {
        getImages : async function(){
        const response = await fetch('../utils/images.json');
        if (response.ok) { // if HTTP-status is 200-299
            const data = await response.text()
            console.log(data);
            return this.images = data
        } else {
            alert("HTTP-Error: " + response.status);
        }
        } 
    },
    mounted: function(){
        this.getImages();
        
    }
}
</script>