<template>
  <v-main>
    <v-container fluid class="mt-5 setting-container">
      <v-row align="center card" justify="center" elevation="24">
        <v-col cols="4">
          <v-card class="mx-auto pa-4" max-width="444" elevation="24">
            <v-card-title class="setting-title">Cài đặt</v-card-title>
            <v-form ref="form" lazy-validation>
              <v-col cols="12" class="setting-label">
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
                solo
              ></v-select>
              <v-col cols="12" class="setting-label">
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
                solo
              ></v-select>

              <v-btn color="success" @click="saveOption()">Lưu</v-btn>
              <v-btn color="warning" text @click="cancelOption()">Hủy</v-btn>
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
<style scoped>
.setting-container .setting-label {
  padding-left: 0px !important;
}
.setting-container .setting-label header {
  font-size: 16px;
  font-weight: bold;
}
.setting-container .setting-title {
  font-size: 18px;
  font-weight: bold;
  color: #e53935 !important;
  padding-left: 0px !important;
}
</style>