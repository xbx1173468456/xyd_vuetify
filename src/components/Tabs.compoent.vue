<template>
  <v-bottom-nav :active.sync="bottomNav" :value="true" absolute color="white">
    <v-btn color="primary" flat value="home" to="/">
      <span>首页</span>
      <v-icon>home</v-icon>
    </v-btn>

    <!-- teacher tab -->
    <v-btn
      v-if="role === teacher && !isTourist"
      color="primary"
      flat
      value="workbench"
      :to="`/workbench/${role}`"
    >
      <span>老师助手</span>
      <v-icon>assignment_turned_in</v-icon>
    </v-btn>

    <!-- school-run tab -->
    <v-btn
      v-if="role === schoolRun && !isTourist"
      color="primary"
      flat
      value="workbench"
      :to="`/workbench/${role}`"
    >
      <span>校办助手</span>
      <v-icon>assessment</v-icon>
    </v-btn>

    <!-- parents tab -->
    <v-btn
      v-if="role === parents && !isTourist"
      color="primary"
      flat
      value="workbench"
      :to="`/workbench/${role}`"
    >
      <span>{{ studentName }}</span>
      <v-icon>face</v-icon>
    </v-btn>

    <v-btn color="primary" flat value="explore" to="/explore">
      <span>发现</span>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn color="primary" flat value="my" :to="myRoute">
      <span>{{ isTourist ? '游客' : '账号' }}</span>
      <v-icon>account_circle</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { Role } from '../configs/config'
import { get } from 'vuex-pathify'
import { authModulePath, user, isTourist } from '../store/auth/auth.paths'
import { UserInfo } from '../models/user.model'

export default Vue.extend({
  props: {
    role: {
      type: String
    }
  },
  data: function() {
    return {
      bottomNav: 'home',
      teacher: Role.Teacher,
      schoolRun: Role.SchoolRun,
      parents: Role.Parents
    }
  },
  computed: {
    ...get(authModulePath, {
      user,
      isTourist
    }),
    studentName() {
      const that: any = this
      const user: UserInfo = that.user
      const student = user.studentVoList && user.studentVoList[0]
      return student.name
    },
    myRoute() {
      const that: any = this
      return that.isTourist ? '/account/tourist' : '/account/my'
    }
  },
  name: 'AppTabs'
})
</script>

<style lang="scss" scoped></style>
