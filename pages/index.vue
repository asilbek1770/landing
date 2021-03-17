<template>
  <v-main class="main">
    <Slider id="slider"/>
    <AboutUs id="about"/>
    <Services id="services"/>
    <Portfolio id="portfolio"/>
    <Contact id="contact"/>
    <hr class="mt-5"/>
    <FindUs />
    <Footer/>
  </v-main>
</template>

<script>

export default {
  components: {}
}
</script>

<style scoped>
@media (max-width: 1024px) {
  .main{
    padding: 50px!important;
  }
}
.main{

}
</style>
