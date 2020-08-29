<template>
  <v-container fluid class="mt-2">
    <v-row align="center" justify="center">
      <v-col cols="5">
        <WordCard v-if="type ==0" :card="card" :data="random_data" />
        <GrammarCard v-if="type ==1" :card="card" :data="random_data" />
        <KanjiCard v-if="type ==2" :card="card" :data="random_data" />

        <div class="mt-8">
          <v-chip class="ma-2" color="primary" label outlined>N{{random_data.level}}</v-chip>
          <v-chip class="ma-2" color="primary" label outlined v-if="type == 0">Từ vựng</v-chip>
          <v-chip class="ma-2" color="primary" label outlined v-if="type == 1">Ngữ pháp</v-chip>
          <v-chip class="ma-2" color="primary" label outlined v-if="type == 2">Kanji</v-chip>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GrammarCard from "./Card/Grammar";
import KanjiCard from "./Card/Kanji";
import WordCard from "./Card/Word";

export default {
  data: () => ({
    card: {
      show: false,
    },
    random_data: {},
    type: 0,
  }),
  components: {
    WordCard,
    GrammarCard,
    KanjiCard,
  },
  async created() {
    let user_option = {};
    //GET user option and set user option
    if (!localStorage.getItem("user_option")) {
      user_option = {
        kanji_level: "3,4",
        kanji_quantity: "100",
        grammar_level: "3,4",
        grammar_quantity: "200",
        word_level: "3,4",
        word_quantity: "700",
      };
      localStorage.setItem("user_option", JSON.stringify(user_option));
      this.$store.dispatch("setUserOption", user_option);
    } else {
      user_option = JSON.parse(localStorage.getItem("user_option"));
    }
    //check exist data random list
    let local_random_list = localStorage.getItem("random_list");
    if (!local_random_list) {
      //get list random
      await this.$axios
        .get("/get_random_list", {
          params: user_option,
        })
        .then((response) => {
          //push data to vuex and local storage
          this.$store.dispatch("setRandomList", response.data);
          //push to local storage
          const random_list = JSON.stringify(response.data);

          localStorage.setItem("random_list", random_list);
          this.random_data = this.getRandomData(random_list);
        });
    } else {
      if (this.countRandomList()) {
        user_option = this.$store.getters.user_option;
        await this.$axios
          .get("/get_random_list", {
            params: user_option,
          })
          .then((response) => {
            console.log(response);
            this.$store.dispatch("setRandomList", response.data);
            //push to local storage
            const random_list = JSON.stringify(response.data);
            localStorage.setItem("random_list", random_list);
            this.random_data = this.getRandomData(random_list);
          });
      } else {
        this.random_data = this.getRandomData(local_random_list);
      }
    }
  },
  methods: {
    countRandomList() {
      let random_list = JSON.parse(localStorage.getItem("random_list"));
      let word_count = random_list.word_datas.length;
      let kanji_count = random_list.kanji_datas.length;
      let grammar_count = random_list.grammar_datas.length;
      if (word_count + kanji_count + grammar_count < 500) {
        return true;
      } else return false;
    },
    getRandomData(data) {
      /**
      type = 0: word
      type = 1: grammar
      type = 2: kanji
        */
      data = JSON.parse(data);
      this.type = Math.floor(Math.random() * 3);
      let return_data = {};
      switch (this.type) {
        case 0: {
          //word
          return_data = data.word_datas[0];
          data.word_datas.shift();
          break;
        }
        case 1: {
          //grammar
          return_data = data.grammar_datas[0];
          data.grammar_datas.shift();
          break;
        }
        case 2: {
          //kanji
          return_data = data.kanji_datas[0];
          data.kanji_datas.shift();
          break;
        }
      }
      data = JSON.stringify(data);
      localStorage.setItem("random_list", data);

      return return_data;
    },
  },
};
</script>