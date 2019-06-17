<template>
  <v-app>
    <v-content>
      <router-view></router-view>
      <AppTabs v-if="showTabs" :role="roleRoute" class="tabs"></AppTabs>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import AppTabs from './components/Tabs.compoent.vue'
import Url from 'url-parse'
import { dutyService } from './services/duty.service'
import { httpConfigService } from './services/http-config.service'
import { userService } from './services/user.service'
import { BindingStatus } from './models/user.model'
import { BASE_URL, YANG_BASE_URL, GUO_BASE_URL } from './configs/config'
import { get } from 'vuex-pathify'
import {
  authModulePath,
  showTabs,
  user,
  roleRoute
} from './store/auth/auth.paths'
import {
  loadUserInfoAction,
  loadSchoolInfoAction,
  loadUserInfoSuccessAction,
  loadUserInfoFailAction
} from './store/auth/auth.actions'
import store from './store/store'

export default Vue.extend({
  name: 'App',
  components: {
    AppTabs
  },
  data() {
    return {}
  },
  created() {
    this.resolveInitUrl()
    this.logBaseStatus()

    // open when build
    this.checkBinding()
    // open when build
    this.loadUserInfo()
    // open when build
    this.loadSchoolInfo()
  },
  computed: {
    ...get(authModulePath, {
      showTabs,
      roleRoute
    })
  },
  methods: {
    resolveInitUrl() {
      // parse current url
      const currentUrl = window.location.href
      const url = new Url(currentUrl, true)
      console.log('TCL: resolveInitUrl -> url', url)

      // get query params
      const s = url.query['s']
      console.log('TCL: resolveInitUrl -> s', s)
      const xyd = url.query['xyd']

      // set global headers
      httpConfigService.setHeaders({
        xyd,
        s
      })

      // open when build
      this.$router.push({ name: 'home' })
    },
    checkBinding() {
      userService.getUserInfo().then(res => {
        const userInfo = res.data.content

        if (userInfo) {
          this.$store.dispatch(
            authModulePath + loadUserInfoSuccessAction,
            userInfo
          )
        } else {
          this.$store.dispatch(authModulePath + loadUserInfoFailAction)
        }

        if (userInfo.roleVoList.length > 0) {
          // show tabs if binded
          ;(store as any).set(authModulePath + showTabs, true)

          this.$router.push({
            name: 'home'
          })
        } else {
          this.$router.push({
            name: 'binding'
          })
        }
      })
    },
    loadUserInfo() {
      this.$store
        .dispatch(authModulePath + loadUserInfoAction)
        .then(() => {})
        .catch(error => {})
    },
    loadSchoolInfo() {
      this.$store
        .dispatch(authModulePath + loadSchoolInfoAction)
        .then(() => {})
        .catch(error => {})
    },
    logBaseStatus() {
      console.log('TCL: logBaseStatus -> BASE_URL', BASE_URL)
      console.log('TCL: logBaseStatus -> YANG_BASE_URL', YANG_BASE_URL)
      console.log('TCL: logBaseStatus -> GUO_BASE_URL', GUO_BASE_URL)
    }
  }
})
</script>

<style lang="scss" scoped>
.tabs {
  width: 100%;
  position: fixed;
  bottom: 0px;
  z-index: 999;
}
</style>
