<template>
  <div id="get-todo" class="container">
    <input class="form-control"
           :value="newName"
           @change="getName"
           placeholder="Add ...">
    <button class="btn btn-primary" @click="addName">Add Name</button>
  </div>
</template>
<script>
  export default{
    methods: {
      getName(e){
        this.$store.dispatch('getName', e.target.value)
      },
      addName(){
        this.$store.dispatch('addName')
        this.$store.dispatch('clearName')
      }
    },
    computed: {
      newName(){
        return this.$store.getters.newNames
      }
    }
  }
</script>
