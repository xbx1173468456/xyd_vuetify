<template>
  <v-toolbar app height="48">
    <v-toolbar-title class="title text-uppercase">
      <v-btn v-if="showBack" depressed fab color="transparent" @click="onBack">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <span v-if="showTitle">{{ title }}</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String
    },
    showBack: {
      type: Boolean,
      default: false
    },
    showTitle: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onBack() {
      this.$emit('back')
    }
  }
})
</script>

<style></style>
