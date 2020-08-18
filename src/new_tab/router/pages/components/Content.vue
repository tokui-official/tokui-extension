<template>
  <v-main>
    <Card />
    <SubMenu />
    <br />
  </v-main>
</template>

<script>
import Card from "./Card";
import SubMenu from "./SubMenu";

export default {
  components: {
    Card,
    SubMenu
  },
  
};
</script>


<style>
#create .v-speed-dial {
  position: fixed;
}
</style>