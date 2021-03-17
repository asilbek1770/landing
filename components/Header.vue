<template>
  <div class="">
    <v-app-bar app fixed class="navbar" clipped-right >
      <v-spacer></v-spacer>
      <h2 @click="$vuetify.goTo('#slider')">New</h2>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon class="barIcon" @click="clickBarIcon"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <div class="links">
        <span
          class="mx-2"
          :class="link.isActive ? 'linkClass' : ''"
          v-for="link of links" :key="link.id"
          @click="borderBottom(link); $vuetify.goTo(link.goTo)"
        >
          {{ link.title }}
        </span>
      </div>
      <v-spacer></v-spacer>
      <div>
        <span><v-icon>mdi-facebook</v-icon></span>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    links: [
      {id: 1, title: 'About Us', isActive: false,goTo: '#about'},
      {id: 2, title: 'Services', isActive: false,goTo: '#services'},
      {id: 3, title: 'Portfolio', isActive: false,goTo: '#portfolio'},
      {id: 4, title: 'Contact', isActive: false,goTo: '#contact'},
    ]
  }),
  methods: {
    borderBottom(link) {
      link.isActive = true
      this.links.forEach(l => {
        if (l.id !== link.id) {
          l.isActive = false
        }
      })
    },
    clickBarIcon(){
      this.$store.dispatch('changeDrawer')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: white !important;
  box-shadow: none!important;
  border-bottom: 1px solid lavender;
  color: black;
}

.links {
  cursor: pointer;
}
.barIcon{
  display: none;
}
@media (max-width: 1024px) {
  .links{
    display: none;
  }
  .barIcon{
    display: block;
  }
}
.linkClass {
  border-bottom: 2px solid black !important;
}
</style>
