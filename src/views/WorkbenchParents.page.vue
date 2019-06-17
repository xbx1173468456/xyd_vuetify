<template>
  <div class="container pa-0">
    workbench parents works!
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { get } from 'vuex-pathify'
import { authModulePath, user } from '../store/auth/auth.paths'

export default Vue.extend({
  computed: {
    ...get(authModulePath, {
      user
    })
  },
  components: {},
  created() {},
  data: function() {
    return {}
  },
  methods: {}
})
</script>

<style lang="scss" scoped></style>
