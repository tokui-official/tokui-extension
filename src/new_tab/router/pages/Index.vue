<template>
  <v-app id="sandbox">
    <Navigation />
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Content from "./components/Content";


export default {
  data: () => ({}),
  components: {
    Navigation,
    Footer,
    Content
  },
};
</script>
