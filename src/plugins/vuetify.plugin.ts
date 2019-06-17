import Vue from 'vue'
import Vuetify, { colors, VSnackbar, VIcon } from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: colors.cyan,
    accent: colors.amber
  },
  components: {
    VSnackbar,
    VIcon
  }
})
