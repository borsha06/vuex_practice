<template>
  <div  >
    <h1>Section True</h1>
    <div v-for="info in information">
      <p v-if=" info.section === true">
        Roll: {{info.roll}}  Name: {{info.name}}  Section: {{info.section}}
      </p>
    </div>
    <h1>Section False</h1>
    <div v-for="info in information">
      <p v-if="info.section === false" >
      Roll: {{info.roll}}  Name: {{info.name}}  Section: {{info.section}}
    </p>

  </div>
  </div>
</template>
<script>

  export default{


    methods: {

    },

    computed: {
      information(){
        return this.$store.getters.information;
      }
    }
  }
</script>
<style>

</style>
