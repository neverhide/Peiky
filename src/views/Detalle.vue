<template>
    <section>
      <h1>Vista de detalle</h1>
      <Detalle/>
      <Footer/>
    </section>
</template>
<script>
import Detalle from "@/components/Detalle"
import Footer from "@/components/Footer"

export default {
  props: ['producto'],
  components:{
    Detalle,
    Footer
  }
}
</script>