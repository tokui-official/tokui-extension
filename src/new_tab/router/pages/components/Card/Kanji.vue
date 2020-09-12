<template>
  <v-card class="mx-auto card" max-width="600" elevation="24" shaped>
    <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img> -->
    <div class="tag-list">
      <v-chip class="ma-1" :color="tag_color" text-color="white">
        <v-avatar left class="darken-4" :class="tag_color">{{data.level}}</v-avatar>
        N{{data.level}}
      </v-chip>
      <v-chip class="ma-2" color="brown" text-color="white">Kanji</v-chip>
    </div>
    <v-card-title class="pt-10 pb-10 text-h3 definition">{{data.kanji}}</v-card-title>

    <!-- <v-card-subtitle>はいでんしょ</v-card-subtitle> -->
    <v-divider class="mx-4"></v-divider>
    <v-expand-transition>
      <div v-show="show_detail">
        <v-divider></v-divider>

        <v-card-text class="font-weight-bold">
          <!-- <v-alert border="left" color="#f7f7f7" dense>Hán việt</v-alert> -->
          <ul>
            <li>Hán việt: {{data.mean}}</li>
            <li>
              Onyomi:
              <v-chip
                v-for="(item, key) in data.on"
                :key="key"
                class="ma-1"
                color="primary"
                text-color="white"
                dense
              >{{item}}</v-chip>
            </li>
            <li>
              Kunyomi:
              <v-chip
                v-for="(item, key) in data.kun"
                :key="key"
                class="ma-1"
                color="green"
                text-color="white"
                dense
              >{{item}}</v-chip>
            </li>
          </ul>
        </v-card-text>
      </div>
    </v-expand-transition>
    <!-- <v-card-title>Thông tin</v-card-title> -->

    <v-card-actions>
      <div class="anim-icon anim-icon-md bookmark">
        <input type="checkbox" id="bookmark" v-model="bookmark_flg" @change="Bookmark()" />
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
      </div>-->

      <v-spacer></v-spacer>

      <v-btn icon @click="show_detail = !show_detail ">
        <v-icon v-if="show_detail" v-text="'$chevron_up'" size="small"></v-icon>
        <v-icon v-else v-text="'$chevron_down'" size="small"></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
export default {
  props: {
    card_show: {
      type: Boolean,
      required: true,
    },
    bookmark_flag: {
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
      bookmark_flg: false
    };
  },
  created() {
    if(this.data.kun && !Array.isArray(this.data.kun)) {
      this.data.kun = this.data.kun.replaceAll('-', '')
      this.data.kun = this.data.kun.split(" ")
    }
    this.bookmark_flg = this.bookmark_flag
  },
  methods: {
    Bookmark() {
      if(this.bookmark_flg) {
        this.$emit('saveBookmark', 2)
      } else {
        this.$emit('removeBookmark', this.data)
      }
    },
  },
};
</script>