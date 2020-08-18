<template>
  <v-container fluid class="pt-16">
    <v-row align="center" justify="center">
      <v-col cols="4">
        <v-card class="mx-auto" max-width="444" elevation="24" shaped>
          <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img> -->

          <v-card-title class="pt-16 pb-16">Top western road trips</v-card-title>

          <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>

          <v-card-actions>
            <v-btn text>Share</v-btn>

            <v-btn color="purple" text>Bookmark</v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="card.show = !card.show ">
              <v-icon>{{ card.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="card.show">
              <v-divider></v-divider>

              <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    card: {
      show: false,
    },
  }),
};
</script>