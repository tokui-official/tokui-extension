<template>
  <div id="create">
    <v-speed-dial v-model="fab" bottom right class="mb-5">
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-btn fab dark small color="green" @click="test()">
        <v-icon>mdi-wrench</v-icon>
      </v-btn>
      <v-btn fab dark small color="indigo">
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>
      <v-btn fab dark small color="red">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script>
export default {
  data: () => ({
    fab: false,
  }),
  methods: {
    test() {
      this.$router.push("setting");
    },
  },
};
</script>