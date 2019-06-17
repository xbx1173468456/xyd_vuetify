<template>
  <v-layout fill-height column wrap class="pa-3">
    <v-flex shrink>
      <Header :showBack="true" title="转载文章" @back="onBack"></Header>
    </v-flex>
    <v-flex>
      <v-form>
        <v-text-field
          v-model="articleUrl"
          label="文章地址"
          required
        ></v-text-field>
      </v-form>
    </v-flex>
    <v-flex shrink>
      <div class="btn-wrapper">
        <v-btn block color="primary" @click="onClick">下一步</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/Header.component.vue'
export default Vue.extend({
  data: function() {
    return {
      articleUrl:
        'https://www.oschina.net/news/106799/the-struggles-of-an-open-source-maintainer'
    }
  },
  components: {
    Header
  },
  methods: {
    onBack() {
      this.$router.push({
        name: 'home'
      })
    },
    onClick() {
      this.$router.push({
        name: 'convert-article',
        params: {
          articleUrl: this.articleUrl
        }
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.btn-wrapper {
  text-align: center;
  padding-bottom: 56px;
}
</style>
