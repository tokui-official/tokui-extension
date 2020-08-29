<template>
  <v-card class="mx-auto" max-width="600" elevation="24" shaped>
    <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img> -->

    <v-card-title class="pt-10 pb-10 text-h3">{{data.kanji}}</v-card-title>

    <!-- <v-card-subtitle>はいでんしょ</v-card-subtitle> -->
    <v-divider class="mx-4"></v-divider>
    <v-expand-transition>
      <div v-show="card.show">
        <v-divider></v-divider>

        <v-card-text class="font-weight-bold">
          <!-- <v-alert border="left" color="#f7f7f7" dense>Hán việt</v-alert> -->
          <ul>
            <li>Hán việt: {{data.mean}}</li>
            <li>
              Onyomi:
              <v-chip
                v-for="item in data.on"
                :key="item"
                class="ma-2"
                color="primary"
                text-color="white"
                label
                dense
              >{{item}}</v-chip>
            </li>
            <li>
              Kunyomi:
              <v-chip
                v-for="item in data.kun"
                :key="item"
                class="ma-2"
                color="green"
                text-color="white"
                label
                dense
              >{{item}}</v-chip>
            </li>
          </ul>
        </v-card-text>
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
  },
  created() {
    this.data.kun = this.data.kun.split(" ");
    this.data.on = this.data.on.split(" ");
  },
};
</script>