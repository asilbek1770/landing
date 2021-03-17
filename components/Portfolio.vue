<template>
  <div class="py-5">
    <!--portfolio text-->
    <v-row>
      <v-col cols="12" md="12" sm="12" class="my-5 text-center">
        <h2>Portfolio</h2>
      </v-col>
    </v-row>
    <!--portfolio image-->

    <v-row>
      <v-col md="8" offset-md="2">
        <v-row>
          <v-col
            v-for="(item,i) in items"
            :key="i"
            class="d-flex child-flex"
            cols="12"
            :sm="item.col"
          >
            <v-img
              :src="item.img"
              @click="clickImage(item)"
              aspect-ratio="1"
              class="grey lighten-2 image"
              width="200"
              height="200"
            >
              <div class="imgText">
                <p>Project Name</p>
                <span style="font-weight: bold"> -{{ item.text }}-</span>
              </div>
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!--    modal -->
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="400"
      >
        <v-card>
          <v-img :src="src">
            <v-btn style="position: absolute; right: 0" icon>
              <v-icon color="white" @click="dialog = false">mdi-close</v-icon>
            </v-btn>
          </v-img>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data: () => ({
    items: [
      {img: 'https://picsum.photos/500/300?image', text: 'text1', col: 4},
      {img: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGljdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80', text: 'text2', col: 8},
      {img: 'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg', text: 'text3', col: 4},
      {img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg', text: 'text4', col: 4},
      {img: 'https://picsum.photos/500/300?image', text: 'text5', col: 4},
    ],
    dialog: false,
    src: '',
    text: ''
  }),
  methods: {
    clickImage(item) {
      this.dialog = true
      this.src = item.img
    }
  }
}
</script>

<style scoped>
.image {
  cursor: pointer;
  transition: all 2s ease-in-out;
}

.imgText {
  display: none;
  font-size: 10px;
  transition: all 2s ease-in-out;
}

.image:hover .imgText {
  display: block;
  font-size: 25px;
  padding-top: 50px;
  font-weight: bold;
  width: 100%;
  height: 100%;
  background-color: lavender;
  opacity: 0.7;
}
</style>
