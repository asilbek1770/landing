<template>
  <div class="py-5">
    <v-row>
      <v-col md="8" offset-md="2">
        <v-row>
          <v-col cols="12" md="3" sm="3" class="text-left" v-for="(item,i) of findUsData" :key="i">
            <h3 class="my-4">{{ item.title }}</h3>
            <p class="my-2" v-for="(t,n) of item.texts" :key="n" style="opacity: 0.6;font-size: 15px">
            {{ t }}
          </p>
          </v-col>
<!--          <v-col cols="12" md="3" sm="3" class="text-left">-->
<!--            <h3>Social</h3>-->
<!--          </v-col>-->
<!--          <v-col cols="12" md="3" sm="3" class="text-left">-->
<!--            <h3>Call Us</h3>-->
<!--          </v-col>-->
<!--          <v-col cols="12" md="3" sm="3" class="text-left">-->
<!--            <h3>Our Email</h3>-->
<!--          </v-col>-->
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "FindUs",
  data:() => ({
    findUsData:[
      {title: 'Address',texts:[' The Company Name Inc. 1234 Street Road,City Name,  IN 567 890.']},
      {title: 'Social',texts:['Facebook','Twitter','Google Plus','Pinterest','LinkedIn']},
      {title: 'Call Us',texts:['+ 123-456-789-890','+ 123-456-789-456']},
      {title: 'Our Email',texts:[' compagny@gmail.com','support@domainename.com']},
    ]
  })
}
</script>

<style scoped>

</style>
