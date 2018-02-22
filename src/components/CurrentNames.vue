<template>
  <div  >

    <div v-for="info in showList_true(information)">


      <p >
        Roll: {{info.roll}}  Name: {{info.name}}  Section: {{info.section}}
      </p>

    </div>
    <div v-for="info in information">


    <p v-if="info.section==false" >
      Roll: {{info.roll}}  Name: {{info.name}}  Section: {{info.section}}
    </p>

  </div>
  </div>
</template>
<script>
/* import { mapActions } from 'vuex'; */
  export default{


    methods: {
      showList_true: function (information) {
        return information.filter(function (info) {
          if (info.section === true)
            return info.section;
        })


      },
    },


  /*methods:{
    ...mapActions([
                 'showList',
                  'false_list'
               ]),

  },
  */
    computed: {
      information(){
        return this.$store.getters.information;
      }
    }
  }
</script>
<style>

</style>
