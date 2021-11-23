import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'fa',
        values: {
            cancel: 'fas fa-ban',
            menu: 'fas fa-bars',
            bookmark: 'fas fa-bookmark',
            close: 'fas fa-times',
            setting: 'fas fa-cog',
            user: 'fas fa-user',
            chevron_up: 'fas fa-chevron-up',
            chevron_down: 'fas fa-chevron-down',
            remove: 'fas fa-trash',
            expand: 'fas fa-angle-down',
            home: 'fas fa-home'
        },
    },
}

export default new Vuetify(opts)