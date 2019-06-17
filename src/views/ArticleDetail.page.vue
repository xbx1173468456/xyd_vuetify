<template>
  <div class="container pa-0">
    <v-card color="primary pa-2" class="">
      <v-layout class="" row wrap>
        <v-flex xs6 class="pr-1">
          <v-layout row wrap align-center justify-end fill-height>
            <v-flex shrink class="pr-2">
              <v-avatar
                class="avatar"
                :tile="false"
                :size="48"
                color="grey lighten-4"
              >
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="avatar"
                />
              </v-avatar>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs6 class="white--text text-xs-left">
          <div class="parents">
            2017年8班 李小龙的妈妈
          </div>
          <v-btn small class="follow" color="accent">
            <v-icon small>check</v-icon>
            <span class="pl-2">已关注</span>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card>

    <v-card class="pa-4 mb-2">
      <h3>{{ article.title }}</h3>
      <div class="meta-header text-xs-center pa-2">
        <span class="author mr-3">作者：xxx</span>
        <span class="date">2019/5/22</span>
      </div>
      <div class="content" v-html="article.context"></div>

      <div class="text-xs-center">
        <div>
          <v-btn fab="" depressed large color="transparent">
            <v-icon color="grey">thumb_up</v-icon>
          </v-btn>
        </div>
        <div>
          <v-avatar
            v-for="avatar in avatars"
            :tile="false"
            :size="24"
            color="grey lighten-4"
            :key="avatar.url"
            class="mr-1"
          >
            <img :src="avatar.url" alt="avatar" />
          </v-avatar>
          <div class="px-4">
            <v-btn color="transparent" class="mt-3 px-5">
              产看全部
            </v-btn>
          </div>
        </div>
      </div>
    </v-card>

    <v-card class="pa-4 mb-5">
      <div class="comment-list">
        <v-layout row wrap>
          <v-flex xs8>
            <v-tabs slider-color="primary" fixed-tabs>
              <v-tab> 评论(95) </v-tab>
              <v-tab> 谁来看过(630) </v-tab>
            </v-tabs>
          </v-flex>
        </v-layout>
        <Comment
          class="mb-2"
          v-for="comment in comments"
          :comment="comment"
          :key="comment.id"
        ></Comment>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { articles } from '../services/article.service'
import Header from '../components/Header.component.vue'
import Comment from '../components/Comment.component.vue'
import { comments } from '../services/comment.service'

export default Vue.extend({
  name: 'my',
  components: { Comment },
  props: {
    id: {
      type: Number
    }
  },
  data: function() {
    return {
      article: null,
      avatars: [
        { url: 'https://randomuser.me/api/portraits/men/32.jpg' },
        { url: 'https://randomuser.me/api/portraits/women/26.jpg' },
        { url: 'https://randomuser.me/api/portraits/women/68.jpg' },
        { url: 'https://randomuser.me/api/portraits/women/17.jpg' },
        {
          url:
            'https://pbs.twimg.com/profile_images/1111650888215494657/jNu7XFNX.jpg'
        }
      ],
      comments: comments
    }
  },
  created() {
    console.log('id', this.id)
    this.article = articles.filter(
      e => e.id === parseInt(this.id as any)
    )[0] as any
  },
  beforeRouteEnter(to, from, next) {
    next()
  },
  methods: {
    onBack() {
      this.$router.push({
        name: 'home'
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.content /deep/ * {
  line-height: 210% !important;
  word-spacing: 120%;
  letter-spacing: 0.15rem;
}
</style>
