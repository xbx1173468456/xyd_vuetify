<template>
  <v-layout row>
    <v-flex shrink class="pa-2">
      <v-avatar size="48">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="alt" />
      </v-avatar>
    </v-flex>
    <v-flex class="">
      <div class="subheading pa-2">张三</div>
      <div class="pa-2 grey--text">{{ comment.content }}</div>
      <v-divider></v-divider>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    comment: {
      type: Object
    }
  },
  data: function() {
    return {}
  },
  created() {}
})
</script>

<style lang="scss" scoped></style>
