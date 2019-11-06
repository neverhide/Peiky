<template>
    <section>
      <h1>Vista de detalle</h1>
      <Detalle/>
    </section>
</template>
<script>
import Detalle from "@/components/Detalle.vue"


export default {
  props: ['producto'],
  components:{
    Detalle
  }
}
</script>