<template>
  <div id="create">
    <ThemeToggleButton />
    <v-speed-dial v-model="fab" bottom right class="mb-5">
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn fab dark small color="green" @click="test()" v-bind="attrs" v-on="on">
            <v-icon>mdi-wrench</v-icon>
          </v-btn>
        </template>
        <span>Cài đặt</span>
      </v-tooltip>
            
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn fab dark small color="indigo" v-bind="attrs" v-on="on">
            <v-icon>mdi-bookmark</v-icon>
          </v-btn>
        </template>
        <span>Bookmark</span>
      </v-tooltip>

      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn fab dark small color="red" v-bind="attrs" v-on="on">
            <v-icon>mdi-account</v-icon>
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
    test() {
      this.$router.push("setting");
    }
  },
};
</script>