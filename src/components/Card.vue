<template>
<router-link :to="{name:'detalle', params:{id:producto.id}}">
  <figure>
    <img :src="path + producto.poster_path" :alt="producto.title"/>
    <figcaption>
      <h3 class="title">Nombre: {{producto.title}}</h3>
    </figcaption>
  </figure>
  </router-link>
</template>

<script>
import { base_path_poster } from '@/utils/api'

export default {
    name:'Card',
    props: ['producto'],
    data(){
      return{
        path: base_path_poster
      }
    }
}
</script>