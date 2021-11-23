<template>
  <v-main>
    <v-container fluid class="mt-5 setting-container">
      <v-row align="center" justify="center" elevation="24">
        <v-col cols="6">
          <v-card>
            <v-card-title>
              <v-text-field
                v-model="search"
                label="Tìm Kiếm"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="bookmark"
              :expanded.sync="expanded"
              :single-expand="singleExpand"
              hide-default-header
              item-key="nihongo"
              show-expand
              class="elevation-1"
              :search="search"
            >
              <template
                v-slot:[`item.data-table-expand`]="{ expand, isExpanded }"
              >
                <v-icon
                  small
                  @click="expand(!isExpanded)"
                  v-text="'$expand'"
                ></v-icon>
              </template>
              <template v-slot:expanded-item="{ headers, item }">
                <td :colspan="headers.length" v-if="item.type == 0">
                  <div v-for="(mean, index) in item.word_mean" :key="index">
                    <strong>{{ mean.mean }}</strong>
                    <br />
                    <i v-if="mean.examples">{{ mean.examples[0].content }}</i>
                    <br />
                    <i v-if="mean.examples">{{ mean.examples[0].mean }}</i>
                  </div>
                </td>
                <td :colspan="headers.length" v-if="item.type == 1">
                  <div v-for="(mean, index) in item.detail" :key="index">
                    <strong>{{ mean.explain }}</strong>
                    <br />
                    <i v-if="mean.examples">{{ mean.examples[0].content }}</i>
                    <br />
                    <i v-if="mean.examples">{{ mean.examples[0].mean }}</i>
                  </div>
                </td>
                <td :colspan="headers.length" v-if="item.type == 2">
                  <div>
                    <ul>
                      <li>
                        Onyomi:
                        <v-chip
                          v-for="(value, key) in item.on_2"
                          :key="key"
                          class="ma-1"
                          color="primary"
                          text-color="white"
                          dense
                          >{{ value }}</v-chip
                        >
                      </li>
                      <li>
                        Kunyomi
                        <v-chip
                          v-for="(value, key) in item.kun"
                          :key="key"
                          class="ma-1"
                          color="green"
                          text-color="white"
                          dense
                          >{{ value }}</v-chip
                        >
                      </li>
                    </ul>
                  </div>
                </td>
              </template>
              <template v-slot:[`item.type_text`]="{ item }">
                <v-chip :color="getColor(item.type_text)" dark>
                  {{ item.type_text }}
                </v-chip>
              </template>
              <template v-slot:[`item.actions`]="{ item }">
                <v-icon
                  v-text="'$remove'"
                  small
                  class="mr-2"
                  @click="removeBookmark(item)"
                >
                </v-icon>
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
      bookmark: [],
      search: "",
      expanded: [],
      singleExpand: false,
      headers: [
        { text: "nihongo", value: "nihongo" },
        { text: "type_text", value: "type_text" },
        { text: "mean", value: "mean" },
        { text: "Actions", value: "actions", sortable: false },
        { text: "", value: "data-table-expand" },
      ],
    };
  },
  created() {
    //format bookmark data
    let bookmark = JSON.parse(localStorage.getItem("bookmark"));
    if (bookmark) {
      bookmark.reverse();
      bookmark.forEach((element) => {
        switch (element.type) {
          case 0:
            element.nihongo = element.word;
            element.mean = element.word_mean[0].mean;
            element.type_text = "Từ vựng";
            break;
          case 1:
            element.nihongo = element.struct;
            element.mean = element.struct_vi;
            element.type_text = "Ngữ pháp";
            break;
          case 2:
            element.nihongo = element.kanji;
            element.type_text = "Kanji";
            element.on_2 = element.on.split(" ")
            if(element.kun && !Array.isArray(element.kun)) {
              element.kun_2 = element.kun.replaceAll('-', '')
              element.kun_2 = element.kun_2.split(" ")
            } else if(element.kun) {
              element.kun_2 = element.kun
            }
            break;
        }
        this.bookmark.push(element);
      });
    }
  },
  methods: {
    getColor(type) {
      if (type == "Từ vựng") return "red";
      else if (type == "Ngữ pháp") return "orange";
      else return "green";
    },
    removeBookmark(item) {
      this.bookmark = this.bookmark.filter(function (element) {
        return element != item;
      });
      localStorage.setItem("bookmark", JSON.stringify(this.bookmark.reverse()));
    },
  },
};
</script>
