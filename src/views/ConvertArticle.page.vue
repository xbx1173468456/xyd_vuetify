<template>
  <div class="container pa-0">
    <Header :showBack="true" title="编辑文章" @back="onBack"></Header>
    <v-layout row wrap class="pa-2">
      <v-flex>
        <v-layout row v-for="(tag, index) in tags" :key="index">
          <v-flex class="add-or-remove">
            <v-btn
              fab
              outline
              small
              :color="hasTag(tag) ? 'grey' : 'primary'"
              @click="toggleAddOrRemove(tag)"
            >
              <v-icon>{{ hasTag(tag) ? 'add' : 'remove' }}</v-icon>
            </v-btn>
          </v-flex>
          <v-flex class="editor">
            <div
              class="content"
              :class="{
                blur: hasTag(tag)
              }"
              v-html="tag.outerHTML"
            ></div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/Header.component.vue'
import Quill from 'quill'
import { articleSourceCode } from '../services/article.service'
import { parseHtml } from '../utils/parse-html.util'

export default Vue.extend({
  props: {
    articleUrl: {
      type: String
    }
  },
  data: function() {
    return {
      editor: {} as Quill,
      articleHtml: '',
      tags: [] as HTMLElement[],
      tempTags: [] as HTMLElement[]
    }
  },
  components: {
    Header
  },
  computed: {},
  methods: {
    onBack() {
      this.$router.push({
        name: 'home'
      })
    },
    toggleAddOrRemove(tag) {
      if (this.hasTag(tag)) {
        // remove tag
        let index = this.tempTags.findIndex(e => e === tag)

        if (index > -1) {
          this.tempTags.splice(index, 1)
        }
      } else {
        // add tag
        this.tempTags.push(tag)
      }
      console.log('TCL: toggleAddOrRemove -> this.tempTags', this.tempTags)
    },
    hasTag(tag) {
      return this.tempTags.includes(tag)
    }
  },
  created() {
    this.articleUrl
    console.log('TCL: created -> this.articleUrl', this.articleUrl)
    this.articleHtml = articleSourceCode

    this.tags = parseHtml(this.articleHtml)
  }
})
</script>

<style lang="scss" scoped>
.add-or-remove .v-btn {
  width: 32px;
  height: 32px;
}

.content /deep/ * {
  line-height: 210% !important;
  word-spacing: 120%;
  letter-spacing: 0.15rem;
}

.content /deep/ img {
  width: 100%;
}

.blur {
  filter: blur(5px);
  opacity: 0.3;
}
</style>
