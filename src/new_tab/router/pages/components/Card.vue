<template>
  <v-container fluid class="mt-2">
    <v-row align="center" justify="center">
      <v-col cols="4">
        <v-card class="mx-auto" max-width="444" elevation="24" shaped>
          <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img> -->

          <v-card-title class="pt-10 pb-10 font-weight-bold">配電所</v-card-title>

          <v-card-subtitle>はいでんしょ</v-card-subtitle>
          <v-divider class="mx-4"></v-divider>
          <v-expand-transition>
            <div v-show="card.show">
              <v-divider></v-divider>

              <v-card-text class="font-weight-bold">trạm phân phối điện</v-card-text>
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
        <div class="mt-8">
          <v-chip class="ma-2" color="primary" label outlined>N1</v-chip>
          <v-chip class="ma-2" color="primary" label outlined>Từ vựng</v-chip>
        </div>
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