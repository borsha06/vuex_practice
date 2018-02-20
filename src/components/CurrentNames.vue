<template>
  <div id="" class="container">

    <ul >

      <li class="list-group-item" v-for="info in showList(information)" >
        Roll: {{info.roll}}-Name: {{info.name}}-Section: {{info.section}}

      </li>
    </ul>

  </div>
</template>
<script>
  export default{
    methods: {
        showList: function (information) {
          return information.filter(function (info) {
               return info.section;


          })


        }
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
