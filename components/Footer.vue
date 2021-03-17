<template>
<div>
  <v-footer class="py-5">
   <v-row>
     <v-col md="8" offset-md="2">
       <v-row>
         <v-col cols="12" md="6" sm="6" class="text-left">
           {{ new Date().getFullYear() }} © <strong>NEW</strong>All Rights Reserved.
         </v-col>
         <v-col cols="12" md="6" sm="6" class="text-right">
           Made With <v-icon color="red">mdi-heart</v-icon> In My Home Sweet Home.
         </v-col>
       </v-row>
     </v-col>
   </v-row>
  </v-footer>
</div>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>

</style>
