<template>
  <v-main>
    <v-container fluid class="mt-2">
      <v-row align="center" justify="center">
        <v-col cols="5">
          <WordCard
            v-if="type == 0"
            :card_show="user_option.card_show"
            :data="random_data"
            :tag_color="randomColor"
            :bookmark_flag="bookmark_flg"
            @saveBookmark="saveBookmark"
          />
          <GrammarCard
            v-if="type == 1"
            :card_show="user_option.card_show"
            :data="random_data"
            :tag_color="randomColor"
            :bookmark_flag="bookmark_flg"
            @saveBookmark="saveBookmark"
          />
          <KanjiCard
            v-if="type == 2"
            :card_show="user_option.card_show"
            :data="random_data"
            :tag_color="randomColor"
            :bookmark_flag="bookmark_flg"
            @saveBookmark="saveBookmark"
            @removeBookmark="removeBookmark"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import GrammarCard from "./Card/Grammar";
import KanjiCard from "./Card/Kanji";
import WordCard from "./Card/Word";

export default {
  data: () => ({
    user_option: {},
    random_data: {},
    type: 0,
    bookmark_flg: false,
    colorList: [
      "red",
      "pink",
      "purple",
      "deep-purple",
      "indigo",
      "blue",
      "light-blue",
      "cyan",
      "teal",
      "green",
      "light-green",
      "lime",
      "amber",
      "orange",
    ],
    randomColor: "red",
  }),
  components: {
    WordCard,
    GrammarCard,
    KanjiCard,
  },
  async created() {
    //GET user option and set user option
    let option = localStorage.getItem("user_option");
    if (!option) {
      this.user_option = {
        kanji_level: "3,4",
        kanji_quantity: "100",
        grammar_level: "3,4",
        grammar_quantity: "100",
        word_level: "3,4",
        word_quantity: "100",
        card_show: true,
        bookmark_show: false,
      };
      localStorage.setItem("user_option", JSON.stringify(this.user_option));
      // this.$store.dispatch("setUserOption", this.user_option);
    } else {
      this.user_option = JSON.parse(option);
    }
    //check exist data random list
    let local_random_list = localStorage.getItem("random_list");
    if (!local_random_list) {
      //get list random
      await this.$axios
        .get("", {
          params: this.user_option,
        })
        .then((response) => {
          //push data to vuex and local storage
          // this.$store.dispatch("setRandomList", response.data);
          //push to local storage
          const random_list = JSON.stringify(response.data);

          localStorage.setItem("random_list", random_list);
          this.random_data = this.getRandomData(random_list);
        });
    } else {
      if (this.countRandomList()) {
        // user_option = this.$store.getters.user_option;
        await this.$axios
          .get("", {
            params: this.user_option,
          })
          .then((response) => {
            // this.$store.dispatch("setRandomList", response.data);
            //push to local storage
            const random_list = JSON.stringify(response.data);
            localStorage.setItem("random_list", random_list);
            this.random_data = this.getRandomData(random_list);
          });
      } else {
        // this.$store.dispatch("setRandomList", JSON.parse(local_random_list));
        this.random_data = this.getRandomData(local_random_list);
      }
    }
    let randomValue = Math.floor(Math.random() * this.colorList.length);
    this.randomColor = this.colorList[randomValue];
  },
  methods: {
    countRandomList() {
      let random_list = JSON.parse(localStorage.getItem("random_list"));
      let word_count = random_list.word_datas.length;
      let kanji_count = random_list.kanji_datas.length;
      let grammar_count = random_list.grammar_datas.length;
      if (word_count + kanji_count + grammar_count < 20) {
        return true;
      } else return false;
    },
    getRandomData(data) {
      /**
      type = 0: word
      type = 1: grammar
      type = 2: kanji
        */
      let bookmark = JSON.parse(localStorage.getItem("bookmark"));
      data = JSON.parse(data);
      let ratio_arr = [];
      if (data.word_datas.length > 0) {
        ratio_arr.push(0, 0, 0, 0);
      }
      if (data.grammar_datas.length > 0) {
        ratio_arr.push(1);
      }
      if (data.kanji_datas.length > 0) {
        ratio_arr.push(2, 2);
      }
      if (this.user_option.bookmark_show && bookmark) {
        ratio_arr.push(3, 3, 3, 3);
      }
      this.type = ratio_arr[Math.floor(Math.random() * ratio_arr.length)];
      let return_data = {};
      if (data.word_datas.length > 0 && this.type == 0) {
        return_data = data.word_datas[0];
        data.word_datas.shift();
      }
      if (data.grammar_datas.length > 0 && this.type == 1) {
        return_data = data.grammar_datas[0];
        data.grammar_datas.shift();
      }
      if (data.kanji_datas.length > 0 && this.type == 2) {
        return_data = data.kanji_datas[0];
        data.kanji_datas.shift();
      }
      if (this.type == 3) {
        this.bookmark_flg = true;
        return_data = bookmark[Math.floor(Math.random() * bookmark.length)];
        switch (return_data.type) {
          case 0: {
            this.type = 0;
            break;
          }
          case 1: {
            this.type = 1;
            break;
          }
          case 2: {
            this.type = 2;
            break;
          }
        }
      }
      data = JSON.stringify(data);
      localStorage.setItem("random_list", data);

      return return_data;
    },
    saveBookmark(value) {
      let bookmark = localStorage.getItem("bookmark");
      this.random_data.type = value;
      let temp = [];
      if (bookmark) {
        temp = JSON.parse(bookmark);
        temp.push(this.random_data);
        // chrome.storage.sync.get(["value"], function (result) {
        // });
      } else {
        temp.push(this.random_data);
      }
      // chrome.storage.sync.set({'value': 1}, function () {
      //   console.log("Value currently is");
      // });
      localStorage.setItem("bookmark", JSON.stringify(temp));
    },
    removeBookmark(value) {
      let bookmark = localStorage.getItem("bookmark");
      var temp = JSON.parse(bookmark).filter(function (el) {
        return el.id != value.id;
      });
      localStorage.setItem("bookmark", JSON.stringify(temp));
    },
  },
};
</script>

<style>
#create .v-speed-dial {
  position: fixed;
}
</style>