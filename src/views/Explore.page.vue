<template>
  <div class="fill-height">
    <div v-if="developing" class="developing both-center fill-height">
      <h2 class="grey--text title">
        <v-icon>hourglass_empty</v-icon> 开发中...
      </h2>
    </div>

    <div v-else class="container pa-0">
      <!-- <Header :showBack="false" title="发现"></Header> -->
      <v-list class="list">
        <v-list-tile class="elevation-1 mb-2 list-item">
          <v-list-tile-action>
            <v-icon color="primary">send</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>学友圈</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="elevation-1 mb-2 list-item">
          <v-list-tile-action>
            <v-icon color="primary">school</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>学长大学</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="elevation-1 mb-2 list-item">
          <v-list-tile-action>
            <v-icon color="primary">book</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>阅读王</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="elevation-1 mb-2 list-item">
          <v-list-tile-action>
            <v-icon color="primary">location_on</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <div v-on="on">
                    <span class="pr-2">校园岛</span>
                    <span>
                      <v-icon>arrow_drop_down</v-icon>
                    </span>
                  </div>
                </template>
                <v-list>
                  <v-list-tile>
                    <v-list-tile-title>校园岛</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-title>培训机构</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-title>儿童医院</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-title>亲子游玩</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/Header.component.vue'
import { get } from 'vuex-pathify'
import { developing } from '../store/global.paths'

export default Vue.extend({
  name: 'explore',
  computed: {
    ...get({
      developing
    })
  },
  components: {},
  created() {
    this.changeTitle()
  },
  methods: {
    changeTitle() {
      document.title = '发现'
    }
  }
})
</script>

<style lang="scss" scoped>
.list {
  background-color: transparent;
}

.list-item {
  background-color: white;
}
</style>
