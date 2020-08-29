<template>
  <v-card class="mx-auto" max-width="600" elevation="24" shaped>
    <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img> -->

    <v-card-title class="pt-10 pb-10 font-weight-bold">{{data.word}}</v-card-title>

    <v-card-subtitle>{{data.phonetic}}</v-card-subtitle>
    <v-divider class="mx-4"></v-divider>
    <v-expand-transition>
      <div v-show="card.show">
        <v-divider></v-divider>

        <div v-for="(item, key) in data.word_mean" :key="key">
          <v-card-text class="font-weight-bold">
            <v-alert border="left" color="#f7f7f7" dense>
              {{item.mean}}
              <!-- <v-chip class="ma-2" color="primary" outlined dense>N</v-chip> -->
            </v-alert>
            <ul v-if="item.examples">
              <li v-for="(ex, i) in item.examples" :key="i">
                <p>{{ex.content}}</p>
                <p>{{ex.trans}}</p>
                <p>{{ex.mean}}</p>
              </li>
            </ul>
          </v-card-text>
        </div>
      </div>
    </v-expand-transition>
    <!-- <v-card-title>Thông tin</v-card-title> -->

    <v-card-actions>
      <v-btn icon color="blue-grey lighten-1">
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>
      <v-btn icon color="green">
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="card.show = !card.show ">
        <v-icon>{{ card.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
export default {
  props: {
    card: {
      type: Object,
    },
    data: {
      type: Object,
    },
  }
};
</script>