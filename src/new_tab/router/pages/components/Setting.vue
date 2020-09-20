<template>
  <v-main>
    <v-container fluid class="mt-5 setting-container">
      <v-row align="center" justify="center" elevation="24">
        <v-col cols="4">
          <v-card class="mx-auto pa-4" max-width="444" elevation="24">
            <v-card-title class="setting-title">Cài đặt</v-card-title>
            <v-form ref="form" lazy-validation>
              <v-row align="center">
                <v-col cols="12">
                  <label class="setting-label">Từ vựng</label>
                  <v-select
                    v-model="word_level"
                    :items="level"
                    item-text="text"
                    item-value="level"
                    attach
                    chips
                    multiple
                    deletable-chips
                    small-chips
                    solo
                  ></v-select>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col cols="12">
                  <label class="setting-label">Ngữ pháp</label>
                  <v-select
                    v-model="grammar_level"
                    :items="level"
                    item-text="text"
                    item-value="level"
                    attach
                    chips
                    multiple
                    deletable-chips
                    small-chips
                    solo
                  ></v-select>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col cols="12">
                  <label class="setting-label">Kanji</label>
                  <v-select
                    v-model="kanji_level"
                    :items="level"
                    item-text="text"
                    item-value="level"
                    attach
                    chips
                    multiple
                    deletable-chips
                    small-chips
                    solo
                  ></v-select>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col cols="12">
                  <v-switch v-model="detail_show" class="ma-2" label="Luôn hiển thị nghĩa" color="success" hide-details inset></v-switch>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col cols="12">
                  <v-switch v-model="bookmark_show" class="ma-2" label="Luôn hiển Bookmark"></v-switch>
                </v-col>
              </v-row>
              <v-btn color="success" @click="saveOption()" :loading="loading">Lưu</v-btn>
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
    level: [
      { text: "N1", level: "1" },
      { text: "N2", level: "2" },
      { text: "N3", level: "3" },
      { text: "N4", level: "4" },
      { text: "N5", level: "5" },
    ],
    word_level: [],
    grammar_level: [],
    kanji_level: [],
    detail_show: false,
    loading: false,
    bookmark_show: false
  }),
  created() {
    let option = localStorage.getItem("user_option");
    if (option) {
      option = JSON.parse(option);
      if (option.word_level) {
        this.word_level = option.word_level.split(",");
      }
      if (option.grammar_level) {
        this.grammar_level = option.grammar_level.split(",");
      }
      if (option.kanji_level) {
        this.kanji_level = option.kanji_level.split(",");
      }
      this.detail_show = option.card_show;
      this.bookmark_show = option.bookmark_show
    } else {
      this.word_level = ["3", "4"];
      this.grammar_level = ["3", "4"];
      this.kanji_level = ["3", "4"];
    }
  },
  methods: {
    async saveOption() {
      this.loading = true;

      let user_option = {};
      if (this.kanji_level.toString()) {
        user_option.kanji_level = this.kanji_level.toString();
        user_option.kanji_quantity = 100;
      }
      if (this.grammar_level.toString()) {
        user_option.grammar_level = this.grammar_level.toString();
        user_option.grammar_quantity = 100;
      }
      if (this.word_level.toString()) {
        user_option.word_level = this.word_level.toString();
        user_option.word_quantity = 100;
      }
      user_option.card_show = this.detail_show;
      user_option.bookmark_show = this.bookmark_show;

      localStorage.setItem("user_option", JSON.stringify(user_option));
      // this.$store.dispatch("setUserOption", user_option);
      //get list random
      await this.$axios
        .get("/get_random_list", {
          params: user_option,
        })
        .then((response) => {
          this.loading = false;
          //push data to vuex and local storage
          // this.$store.dispatch("setRandomList", response.data);
          //push to local storage
          const random_list = JSON.stringify(response.data);

          localStorage.setItem("random_list", random_list);
        });
      this.cancelOption();
    },
    cancelOption() {
      this.$router.push({ name: "index" });
    },
  },
};
</script>
<style scoped>
.setting-container .setting-label {
  padding-left: 0px !important;
  font-size: 16px !important;
  font-weight: bold !important;
  margin-bottom: 5px !important;
}

.setting-container .setting-title {
  font-size: 18px;
  font-weight: bold;
  color: #e53935 !important;
  padding-left: 0px !important;
}
.setting-container .col-12 {
  padding-top: 6px !important;
  padding-bottom: 6px !important;
}
</style>