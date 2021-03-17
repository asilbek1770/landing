<template>
  <v-app>
    <Header/>
    <v-navigation-drawer absolute right style="z-index: 1000" v-model="getDrawer">
        <p v-for="i of items" :key="i.id" class="text-center my-5 links" @click="clicked(i)">{{ i.title }}</p>
    </v-navigation-drawer>
    <div class="text-center">
      <nuxt/>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {id: 1, title: 'About Us', isActive: false, goTo: '#about'},
        {id: 2, title: 'Services', isActive: false, goTo: '#services'},
        {id: 3, title: 'Portfolio', isActive: false, goTo: '#portfolio'},
        {id: 4, title: 'Contact', isActive: false, goTo: '#contact'},
      ],
    }
  },
  computed: {
    getDrawer() {
      return this.$store.getters.getDrawer
    }
  },
  methods: {
    clicked(item) {
      this.$vuetify.goTo(item.goTo)
      this.$store.dispatch('changeDrawer')
    },
  },

}
</script>

<style scoped>
.links:hover {
  background-color: darkslategray;
  color: white;
  cursor: pointer;
}
</style>
