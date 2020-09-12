<template>
  <div>
    <v-card class="mx-auto card" max-width="600" elevation="24" shaped>
      <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img> -->
      <div class="tag-list">
        <v-chip class="ma-1" :color="tag_color" text-color="white">
          <v-avatar left class="darken-4" :class="tag_color">{{data.level}}</v-avatar>
          N{{data.level}}
        </v-chip>
        <v-chip class="ma-2" color="deep-orange" text-color="white">Từ vựng</v-chip>
      </div>
      <v-card-title class="pt-10 pb-5 font-weight-bold definition">{{data.word}}</v-card-title>
      <v-card-subtitle>{{data.phonetic}}</v-card-subtitle>
      <v-divider class="mx-4"></v-divider>
      <v-expand-transition>
        <div v-show="show_detail">
          <v-divider></v-divider>

          <div v-for="(item, key) in data.word_mean" :key="key">
            <v-card-text class="font-weight-bold mean-card">
              <v-alert border="left" color="#f7f7f7" dense>
                {{item.mean}}
                <!-- <v-chip class="ma-2" color="primary" outlined dense>N</v-chip> -->
              </v-alert>
              <ul v-if="item.examples">
                <li v-for="(ex, i) in item.examples" :key="i">
                  <p class="example">{{ex.content}}</p>
                  <!-- <p>{{ex.trans}}</p> -->
                  <p class="example_mean">{{ex.mean}}</p>
                </li>
              </ul>
            </v-card-text>
          </div>
        </div>
      </v-expand-transition>
      <!-- <v-card-title>Thông tin</v-card-title> -->

      <v-card-actions>
        <div class="anim-icon anim-icon-md bookmark">
          <input type="checkbox" id="bookmark" @click="saveBookmark()" />
          <label for="bookmark"></label>
        </div>
        <!-- <div class="share">
          <span>Share</span>
          <nav>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-google"></i>
            </a>
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
          </nav>
        </div> -->

        <v-spacer></v-spacer>

        <v-btn icon @click="show_detail = !show_detail ">
          <v-icon v-if="show_detail" v-text="'$chevron_up'" size="small"></v-icon>
          <v-icon v-else v-text="'$chevron_down'" size="small"></v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>


<script>
export default {
  props: {
    card_show: {
      type: Boolean,
      required: true,
    },
    data: {
      type: Object,
    },
    tag_color: {
      type: String,
    },
  },
  data: function () {
    return {
      show_detail: this.card_show,
    };
  },
  methods: {
    saveBookmark() {
      this.$emit('saveBookmark', 0)
    },
  },
};
</script>