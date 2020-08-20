<template>
  <div>
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="true"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      :permanent="primaryDrawer.type === 'permanent'"
      :temporary="primaryDrawer.type === 'temporary'"
      app
      overflow
    ></v-navigation-drawer>
    <v-app-bar app absolute :clipped-left="true">
      <!-- <v-app-bar-nav-icon
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      ></v-app-bar-nav-icon>-->
      <v-toolbar-title>Tokui</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-switch v-model="$vuetify.theme.dark" primary label="Dark"></v-switch>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      primaryDrawer: {
        model: false,
      },
    };
  },
};
</script>