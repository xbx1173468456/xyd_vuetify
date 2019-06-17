<template>
  <div class="container pa-0">
    <Header :showBack="false" title="数据中心"></Header>
    <v-layout row wrap class="header pa-3 primary white--text">
      <v-flex>
        <v-btn color="white" class="banner-btn elevation-0">
          <v-icon color="white">person</v-icon>
        </v-btn>
        <div class="pt-1">人</div>
      </v-flex>
      <v-flex>
        <v-btn color="white" class="banner-btn elevation-0">
          <v-icon color="white">monetization_on</v-icon>
        </v-btn>
        <div class="pt-1">财</div>
      </v-flex>
      <v-flex>
        <v-btn color="white" class="banner-btn elevation-0">
          <v-icon color="white">category</v-icon>
        </v-btn>
        <div class="pt-1">物</div>
      </v-flex>
    </v-layout>
    <div class="nav-wrapper white pa-0">
      <v-layout>
        <v-flex>
          <v-tabs fixed-tabs slider-color="primary">
            <v-tab> 今日 </v-tab>
            <v-tab> 值周 </v-tab>
            <v-tab> 教学 </v-tab>
          </v-tabs>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex shrink class="pr-2">
          <v-layout :align-center="true" fill-height>
            <v-flex class="px-2">
              <v-icon>add_circle_outline</v-icon>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/Header.component.vue'

export default Vue.extend({
  name: 'workbench',
  components: { Header }
})
</script>

<style lang="scss" scoped>
.v-tabs__div {
  min-width: unset;
}

.header {
  text-align: center;
}

.banner-btn {
  background-color: rgba(255, 255, 255, 0.4) !important;
  width: 48px !important;
  height: 48px !important;
  padding: 0px !important;
  margin: 0px !important;
  min-width: unset !important;
}
</style>
