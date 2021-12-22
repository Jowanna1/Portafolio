<template>
  <div class="home">
    
    <Inicio msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Inicio from "../views/Inicio.vue"

export default {
  name: 'Home',
  components: {
    Inicio,
  }
}
</script>
