<template>
  <v-main>
    <v-container fluid class="mt-2">
      <v-row align="center" justify="center" elevation="24">
        <v-col cols="4">
          <v-card class="mx-auto pa-4" max-width="444" elevation="24">
            <v-card-title>Cài đặt</v-card-title>
            <v-form ref="form" lazy-validation>
              <v-col cols="12">
                <header>Từ vựng</header>
              </v-col>
              <v-select
                v-model="word"
                :items="level"
                attach
                chips
                multiple
                deletable-chips
                small-chips
              ></v-select>
              <v-col cols="12">
                <header>Ngữ pháp</header>
              </v-col>
              <v-select
                v-model="grammar"
                :items="level"
                attach
                chips
                multiple
                deletable-chips
                small-chips
              ></v-select>

              <v-btn color="success" @click="saveOption()">Lưu</v-btn>
              <v-btn color="warning" @click="cancelOption()">Hủy</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>


<script>
export default {
  data: () => ({
    level: ["N5", "N4", "N3", "N2", "N1"],
    word: [],
    grammar: [],
  }),
  methods: {
    saveOption() {},
    cancelOption() {
      this.$router.push({ name: "index" });
    },
  },
};
</script>