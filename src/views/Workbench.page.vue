<template>
  <router-view></router-view>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: function() {
    return {}
  },
  created() {
    this.changeTitle()
  },
  methods: {
    changeTitle() {
      document.title = '工作台'
    }
  }
})
</script>

<style lang="scss" scoped></style>
