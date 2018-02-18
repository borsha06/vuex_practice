<template>
  <div id="app" class="container">

    <GetNames></GetNames>
    <CurrentNames></CurrentNames>
  </div>
</template>

<script>
  import GetNames from './components/GetNames.vue'
  import CurrentNames from './components/CurrentNames.vue'

  export default {
    components: {
      GetNames,
      CurrentNames,

    }

  }
</script>
