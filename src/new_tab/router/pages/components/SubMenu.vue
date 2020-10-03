<template>
  <div id="create">
    <ThemeToggleButton />
    <v-speed-dial v-model="fab" bottom right class="mb-5">
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab" v-text="'$close'"></v-icon>
          <v-icon v-else  v-text="'$menu'"></v-icon>
        </v-btn>
      </template>
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn fab dark small color="green" @click="setting()" v-bind="attrs" v-on="on">
            <v-icon v-text="'$setting'"></v-icon>
          </v-btn>
        </template>
        <span>Cài đặt</span>
      </v-tooltip>
            
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn fab dark small color="indigo" @click="bookmark()" v-bind="attrs" v-on="on">
            <v-icon v-text="'$bookmark'"></v-icon>
          </v-btn>
        </template>
        <span>Bookmark</span>
      </v-tooltip>

      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn fab dark small color="red" v-bind="attrs" v-on="on">
            <v-icon v-text="'$user'"></v-icon>
          </v-btn>
        </template>
        <span>Đăng nhập</span>
      </v-tooltip>
    </v-speed-dial>
  </div>
</template>

<script>
import ThemeToggleButton from "./ThemeToggleButton";
export default {
  components: {
    ThemeToggleButton
  },
  data: () => ({
    fab: false,
  }),
  methods: {
    setting() {
      this.$router.push("setting");
    },
    bookmark() {
      this.$router.push("bookmark")
    }
  },
};
</script>