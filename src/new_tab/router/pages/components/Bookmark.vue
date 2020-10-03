<template>
  <v-main>
    <v-container fluid class="mt-5 setting-container">
      <v-row align="center" justify="center" elevation="24">
        <v-col cols="6">
          <v-card>
            <v-card-title>
              <v-text-field
                v-model="search"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="desserts"
              hide-default-header
              item-key="name"
              show-expand
              class="elevation-1"
              :search="search"
            >
              <template v-slot:expanded-item="{ headers, item }">
                <td :colspan="headers.length">More info about {{ item.name }}</td>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      expanded: [],
      singleExpand: false,
      headers: [
        { text: "nihongo", value: "nihongo" },
        { text: "mean", value: "mean" },

      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159
        },
        
      ],
    };
  },
  created() {
    //format bookmark data
    let bookmark = JSON.parse(localStorage.getItem('bookmark'))
    bookmark.forEach(element => {
      console.log(element)
    });
  }
};
</script>
