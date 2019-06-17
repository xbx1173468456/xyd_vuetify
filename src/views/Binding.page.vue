<template>
  <div>
    <v-card color="primary" class="mb-2">
      <v-layout column wrap class="pa-3">
        <v-flex class="text-xs-center">
          <v-avatar size="64">
            <img :src="schoolLogo" alt="alt" />
          </v-avatar>
        </v-flex>
        <v-flex class="text-xs-center pa-2">
          <h2 class="title white--text">{{ schoolName }}</h2>
        </v-flex>
      </v-layout>
    </v-card>

    <div class="card-wrapper pa-2">
      <v-card class="px-3 pb-3 pt-2">
        <v-tabs v-model="tabs" fixed-tabs color="transparent">
          <v-tabs-slider color="primary"></v-tabs-slider>
          <v-tab
            href="#parents"
            class="title"
            @click=";(tab = 1), (userType = 1), (validated = false)"
          >
            家长
          </v-tab>

          <v-tab
            href="#teacher"
            class="title"
            @click=";(tab = 2), (userType = 3), (validated = false)"
          >
            老师
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tabs" class="white py-2">
          <!-- parents input -->
          <v-tab-item value="parents" v-if="showTab1Input">
            <v-text-field
              clearable
              label="姓名"
              persistent-hint
              :error-messages="validated ? errors.collect('name') : []"
              v-model="name"
              v-validate="'required'"
              name="name"
              data-vv-as="名字"
            ></v-text-field>
            <v-text-field
              clearable
              label="身份证号码"
              persistent-hint
              :error-messages="validated ? errors.collect('idCard') : []"
              v-model="idCard"
              v-validate="{
                required: true,
                length: 18,
                regex: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
              }"
              name="idCard"
              data-vv-as="身份证号"
            ></v-text-field>
            <div>
              <v-layout row wrap>
                <v-flex class="relation-label">
                  与学生的关系
                </v-flex>
                <v-flex>
                  <v-autocomplete
                    v-model="relation"
                    :items="relations"
                    item-text="text"
                    item-value="value"
                    persistent-hint
                    placeholder="请选择"
                    v-validate="'required'"
                    name="relation"
                    data-vv-as="与学生的关系"
                    :error-messages="
                      validated && relation === 0 ? ['请选择与学生的关系'] : []
                    "
                  >
                    <template v-slot:append-outer>
                      <v-slide-x-reverse-transition mode="out-in">
                      </v-slide-x-reverse-transition>
                    </template>
                  </v-autocomplete>
                </v-flex>
              </v-layout>
            </div>
          </v-tab-item>

          <!-- teacher input -->
          <v-tab-item value="teacher" v-if="showTab2Input">
            <v-text-field
              clearable
              label="姓名"
              :error-messages="validated ? errors.collect('name2') : []"
              v-model="name2"
              v-validate="'required'"
              name="name2"
              data-vv-as="名字"
              persistent-hint
            ></v-text-field>
            <v-text-field
              clearable
              label="身份证号码"
              persistent-hint
              :error-messages="validated ? errors.collect('idCard2') : []"
              v-model="idCard2"
              v-validate="{
                required: true,
                length: 18,
                regex: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
              }"
              name="idCard2"
              data-vv-as="身份证号"
            ></v-text-field>
          </v-tab-item>
        </v-tabs-items>
        <v-card-actions>
          <v-layout row wrap>
            <v-flex class="px-2">
              <v-btn block large flat @click="giveUpBinding">游客访问</v-btn>
            </v-flex>
            <v-flex class="px-2">
              <v-btn block color="accent" large @click="submit">立即认证</v-btn>
            </v-flex>
          </v-layout>
        </v-card-actions>
      </v-card>

      <!-- slogan -->
      <div class="text-xs-center subheading pa-4 grey--text">
        <p class="mb-1">校园岛</p>
        <p>好习惯 好未来</p>
      </div>
    </div>

    <v-snackbar v-model="showSnackbar" :color="color" :timeout="3000">
      {{ message }}
      <v-btn dark flat @click="showSnackbar = false">
        关闭
      </v-btn>
    </v-snackbar>

    <div
      v-if="showLoading"
      class="loading-wrapper fill-height fill-width both-center"
    >
      <v-progress-circular
        :size="50"
        color="accent"
        indeterminate
      ></v-progress-circular>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { userService } from '../services/user.service'
import {
  authModulePath,
  showTabs,
  isTourist,
  school
} from '../store/auth/auth.paths'
import { loadUserInfoAction } from '../store/auth/auth.actions'
import { get } from 'vuex-pathify'
import store from '../store/store'

export default Vue.extend({
  data: function() {
    return {
      tab: 2,
      name: '',
      idCard: '',
      relation: 0,
      userType: 3,
      name2: '',
      idCard2: '',
      showSnackbar: false,
      message: '出现未知错误，请稍后再试',
      validated: false,
      color: 'success',
      showLoading: false,
      tabs: 'teacher',
      model: null,
      showTab1Input: true,
      showTab2Input: true,
      relations: [
        {
          value: 1,
          text: '爸爸'
        },
        {
          value: 2,
          text: '妈妈'
        },
        {
          value: 3,
          text: '爷爷'
        },
        {
          value: 4,
          text: '奶奶'
        },
        {
          value: 5,
          text: '外公'
        },
        {
          value: 6,
          text: '外婆'
        }
      ]
    }
  },
  computed: {
    ...get(authModulePath, {
      school
    }),
    schoolName() {
      const that: any = this
      return that.school && that.school.name
    },
    schoolLogo() {
      const that: any = this
      const logos = that.school && that.school.logo
      return logos ? logos[0] : ''
    }
  },
  created() {
    this.$validator.localize('zh_CN')
  },
  methods: {
    giveUpBinding() {
      this.$router.push({
        name: 'home'
      })

      const store: any = this.$store
      store.set(authModulePath + isTourist, true)
      store.set(authModulePath + showTabs, true)

      this.$router.push({ name: 'home' })
    },
    submit() {
      // parents 1
      // teacher 3

      // destory other tabs that include form inputs which interfere validations
      if (this.tab === 1) {
        this.showTab2Input = false
      }

      if (this.tab === 2) {
        this.showTab1Input = false
      }

      setTimeout(() => {
        this.$validator.validate().then(valid => {
          console.log('TCL: submit -> valid', valid)
          this.validated = true

          let data: any = {}

          if (this.tab === 1) {
            data = {
              idcard: this.idCard,
              name: this.name,
              parentType: this.relation,
              userType: this.userType
            }
          }

          if (this.tab === 2) {
            data = {
              idcard: this.idCard2,
              name: this.name2,
              userType: this.userType
            }
          }

          console.log('TCL: submit -> data', data)

          // when parents
          if (
            valid &&
            this.tab === 1 &&
            (this.relation >= 1 && this.relation <= 6)
          ) {
            console.log('toBind()')
            // open when build
            this.toBind(data)
          }

          // when teacher
          if (valid && this.tab === 2) {
            console.log('toBind()')
            // open when build
            this.toBind(data)
          }

          this.ensureAllTabsShow()
        })
      }, 50)
    },
    ensureAllTabsShow() {
      this.showTab1Input = true
      this.showTab2Input = true
    },
    toBind(data) {
      this.showLoading = true

      userService
        .bind(data)
        .then(res => {
          if (res.data.content) {
            console.log('绑定成功！跳转到首页')

            this.showSuccessMessage('绑定成功！')
            this.reloadUserInfo()
            ;(store as any).set(authModulePath + showTabs, true)
          } else {
            console.log('绑定失败', res.data.errorMsg)

            this.showFailMessage(`绑定失败！${res.data.errorMsg}`)

            this.showLoading = false
          }
        })
        .catch(() => {
          this.showLoading = false
          this.showFailMessage('出现未知错误，请稍后重试！')
        })
    },
    reloadUserInfo() {
      this.$store
        .dispatch(authModulePath + loadUserInfoAction)
        .then(() => {
          this.showLoading = false

          this.$router.push({
            name: 'home'
          })
        })
        .catch(error => {})
    },
    showSuccessMessage(message: string) {
      this.showSnackbar = true
      this.color = 'success'
      this.message = message
    },
    showFailMessage(message: string) {
      this.showSnackbar = true
      this.color = 'red'
      this.message = message
    },
    resetInputState() {
      console.log('resetInputState')
      this.relation = 0
    }
  }
})
</script>

<style scoped>
.relation-label {
  font-size: 16px;
  line-height: 68px;
}
.error-message {
  color: red;
}
select {
  border-radius: 4px;
  padding-left: 16px;
  padding-right: 16px;
}

.error-messages {
  list-style: none;
}

.loading-wrapper {
  position: absolute;
  top: 0px;
}
</style>
