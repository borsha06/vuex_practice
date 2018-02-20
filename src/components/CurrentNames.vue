<template>
  <div id="" class="container">

    <div v-for="info in showList_true(information)">


      <p >
        Roll: {{info.roll}}  Name: {{info.name}}  Section: {{info.section}}
      </p>

    </div>


    <div v-for="info in showList_false(information)">

      <p >
        Roll: {{info.roll}}-Name: {{info.name}}-Section: {{info.section}}
      </p>

    </div>

  </div>
</template>
<script>
  export default{
    methods: {
        showList_true: function (information) {
          return information.filter(function (info) {
                if(info.section===true)
                    return info.section;
          })


        },
      showList_false: function (information) {
        return information.filter(function (info) {
          if(info.section===false)
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
