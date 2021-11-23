<template>
  <v-app id="sandbox">
    <router-view></router-view>
    <SubMenu />
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import SubMenu from "./components/SubMenu";

export default {
  data: () => ({}),
  components: {
    Footer,
    SubMenu
  },
};
</script>
