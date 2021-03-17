<template>
  <v-row style="z-index: -1">
    <v-col cols="12" md="12" sm="12">
      <v-carousel  cycle hide-delimiters class="carusel">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          hide-delimiters
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3">
              {{ item.text }}
            </div>
          </v-row>

        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>

</template>

<script>
export default {
  name: "Slider",
  data: () => ({
    items: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        text: 'text in slider 1',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        text: 'text in slider 2',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        text: 'text in slider 3',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        text: 'text in slider 4',
      },
    ],
  })
}
</script>

<style scoped>
.textImg{
  text-align: center!important;
  margin-top: 100px;
}


@media (max-width: 1024px) {

}
</style>
