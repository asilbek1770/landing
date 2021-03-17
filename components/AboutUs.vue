<template>
  <div class="py-5">
    <!--     about us-->

    <v-row>
      <v-col cols="12" md="12" sm="12" class="mt-5 text-center">
        <h2>About Us</h2>
      </v-col>
    </v-row>

    <!--    text-->

    <v-row>
      <v-col md="8" offset-md="2" class="text-center">
        <p class="my-10">
          <span class="font-weight-bold">NEW AGENCY</span> is a visual and interactive communication agency specialized
          in internet industry,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit ut et voluptates repudiandae sint et molestiae non recusandae.
        </p>
      </v-col>
    </v-row>

    <!--    portfolio button-->

    <v-row>
      <v-col md="6" offset-md="3" class="text-center">
        <v-btn color="white" class="border-none" elevation="0" style="border: 1px solid black!important"
               @click="$vuetify.goTo('#portfolio')">
          <v-icon dense small>mdi-file</v-icon>
          our portfolio
        </v-btn>
      </v-col>
    </v-row>
    <hr class="my-10"/>

    <!--    our team text -->

    <v-row>
      <v-col cols="6" offset-md="3"><p class="font-weight-bold text-center">Our Team</p></v-col>
    </v-row>

    <!--    our team image-->

    <v-row>
      <v-col md="8" offset-md="2">
        <v-row>
          <v-col v-for="item of teams" :key="item.id">
            <v-card
              class="mx-auto"
              max-width="300"
              outlined
              style="border: none"
            >
              <v-img
                class="white--text align-end"
                height="200"
                :src="item.img"
              >
              </v-img>
              <div class="text-center mt-4">
                <h3>{{ item.name }}</h3>
                <span>{{ item.profession }}</span>

                <div >
                  <span style="border-bottom: 1px solid grey; border-top: 1px solid grey" class="py-2">
                    <v-icon style="font-size: 20px!important;" class="my-2 mx-2">mdi-facebook</v-icon>
                    <v-icon style="font-size: 20px!important;" class="my-2 mx-2">mdi-google</v-icon>
                    <v-icon style="font-size: 20px!important;" class="my-2 mx-2">mdi-twitter</v-icon>
                  </span>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <hr class="my-10"/>
    <!--    our skills text -->
    <v-row>
      <v-col cols="6" offset-md="3"><p class="font-weight-bold text-center">Our Skills</p></v-col>
    </v-row>
    <!--  our skills -->
    <v-row>
      <v-col md="8" offset-md="2">
        <v-row>
          <v-col cols="12" md="6" sm="6" class="text-left">
            <p>YOU HAVE A PROJECT IN YOUR MIND ?</p>
            <p class="font-weight-bold">OR SIMPLY YOU WANT TO SAY HELLO ?</p>
            <span style="font-size: 15px;opacity: 0.8;">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</span>
            <div class="my-2">
              <v-btn color="white" class="border-none" elevation="0" style="border: 1px solid black!important"
                     @click="$vuetify.goTo('#contact')">
                <v-icon dense small>mdi-message</v-icon>
                contact
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="6" sm="6" class="text-left">
            <div v-for="item of professions" :key="item.id" class="pb-4">
              <span class="font-weight-bold">{{ item.title }}<strong class="mx-5">{{
                  Math.ceil(item.rate)
                }}%</strong></span>
              <v-progress-linear
                :value="item.rate"
                color="black"
                height="2"
              >
              </v-progress-linear>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!--    image -->

    <v-card
      :ripple="false"
      class="portrait"
      img="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      height="500"
    >
      <v-row>
        <v-col md="6" offset-md="3">
          <v-carousel cycle hide-delimiters>
            <v-carousel-item
              v-for="(i) in data"
              :key="i"
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div class="display-3">
                  Slide {{ i }}
                </div>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "AboutUs",
  data: () => ({
    teams: [
      {id: 1, name: 'Carl Doe', profession: 'founder', img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'},
      {id: 2, name: 'John Doe', profession: 'designer', img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'},
      {id: 3, name: 'Jenny Doe', profession: 'developer', img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'},
      {id: 4, name: 'Doe', profession: 'project manager', img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'},
      {id: 5, name: 'Carl Doe', profession: 'smm', img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'}
    ],
    professions: [
      {id: 1, title: 'Web Design', rate: 10},
      {id: 2, title: 'Internet Marketing', rate: 50},
      {id: 3, title: 'Graphic Design', rate: 80},
      {id: 4, title: 'Javascript', rate: 40},
      {id: 5, title: 'HTML & CSS', rate: 20},
      {id: 6, title: 'SEO', rate: 90},
    ],
    data: [
      'text 1',
      'text 2',
      'text 3'
    ],
    power: 10
  })
}
</script>

<style scoped>
.links {
  cursor: pointer;
}
</style>
