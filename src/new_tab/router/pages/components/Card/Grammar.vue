<template>
  <v-card class="mx-auto card" max-width="600" elevation="24" shaped>
    <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img> -->

    <div class="tag-list">
      <v-chip class="ma-1" :color="tag_color" text-color="white">
        <v-avatar left class="darken-4" :class="tag_color">{{data.level}}</v-avatar>
        N{{data.level}}
      </v-chip>
      <v-chip class="ma-2" color="blue-grey" text-color="white">Ngữ pháp</v-chip>
    </div>

    <v-card-title class="pt-10 pb-10 font-weight-bold">{{data.struct}}</v-card-title>

    <v-card-subtitle>{{data.struct_vi}}</v-card-subtitle>
    <v-divider class="mx-4"></v-divider>
    <v-expand-transition>
      <div v-show="show_detail">
        <v-divider></v-divider>
        <div v-for="(item, key) in data.detail" :key="key">
          <v-card-text class="font-weight-bold">
            <v-alert
              border="left"
              dense
              outlinedv
              v-if="item.synopsis !== ''"
              color="#f7f7f7"
            >{{item.synopsis}}</v-alert>
            <v-alert dense outlined class="grammar-explain">{{item.explain}}</v-alert>
            <ul v-if="item.examples">
              <li v-for="(ex,i) in item.examples" :key="i">
                <p>{{ex.content}}</p>
                <!-- <p>{{ex.trans}}</p> -->
                <p>{{ex.mean}}</p>
              </li>
            </ul>
          </v-card-text>
        </div>
      </div>
    </v-expand-transition>
    <!-- <v-card-title>Thông tin</v-card-title> -->

    <v-card-actions>
      <div class="anim-icon anim-icon-md bookmark">
        <input type="checkbox" id="bookmark" @click="saveBookmark()" v-model="bookmark_flg" />
        <label for="bookmark"></label>
      </div>

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
    data: {
      type: Object,
    },
    tag_color: {
      type: String,
    },
    bookmark_flg: {
      type: Boolean
    }
  },
  data: function () {
    return {
      show_detail: this.card_show,
    };
  },
  methods: {
    saveBookmark() {
      this.$emit('saveBookmark', 1)
    },
  },
};
</script>