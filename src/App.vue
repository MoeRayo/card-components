<template>
  <div id="app">
    <cardcomponent/>
    <footinfo/>
  </div>
</template>

<script>

import footinfo from './components/Footer.vue'

import cardcomponent from './components/CardsComponent.vue'

export default {
  components: { cardcomponent, footinfo },
  name: 'App',
  
}
</script>

<style>

</style>
