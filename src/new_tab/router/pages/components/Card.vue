<template>
  <v-container fluid class="mt-2">
    <v-row align="center" justify="center">
      <v-col cols="4">
        <v-card class="mx-auto" max-width="444" elevation="24" shaped>
          <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img> -->

          <v-card-title class="pt-10 pb-10">配電所</v-card-title>

          <v-card-subtitle>はいでんしょ</v-card-subtitle>
          <v-divider class="mx-4"></v-divider>
          <!-- <v-card-title>Thông tin</v-card-title> -->
          <v-card-text>
            <!-- <v-chip-group
              active-class="deep-purple accent-4 white--text"
              column
            > -->
              <v-chip>N1</v-chip>
            <!-- </v-chip-group> -->
          </v-card-text>
          <v-card-actions>
            <v-btn text>Chia sẻ</v-btn>

            <v-btn color="purple" text>Bookmark</v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="card.show = !card.show ">
              <v-icon>{{ card.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="card.show">
              <v-divider></v-divider>

              <v-card-text>trạm phân phối điện</v-card-text>
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