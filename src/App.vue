<template>
  <div id="app">
    <cardcomponent/>
    <footinfo/>
  </div>
</template>

<script>


import cardcomponent from './components/CardsComponent.vue'
import footinfo from './components/Footer.vue'

export default {
  components: { cardcomponent, footinfo },
  name: 'App',
  
}
</script>

<style>

</style>
