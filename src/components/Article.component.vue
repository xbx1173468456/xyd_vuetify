<template>
  <div class="article">
    <v-layout>
      <v-flex>
        <v-card>
          <v-card-actions class="header py-2 pl-3 pr-1">
            <v-card-title primary-title class="pa-0">
              <h3 class="subheading mb-0">2017级8班 李小龙的妈妈</h3>
            </v-card-title>
            <v-spacer></v-spacer>

            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn fab depressed v-on="on" color="transparent">
                  <v-icon color="grey">keyboard_arrow_down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-tile v-for="(item, index) in items" :key="index">
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-card-actions>
          <v-layout class="pa-3" row wrap @click="goToDetail">
            <v-flex xs8>
              <v-card-text class="pa-0 grey--text">
                <p>
                  {{ article.description }}
                </p>
              </v-card-text>
            </v-flex>
            <v-flex xs4 align-self-center class="py-2">
              <v-img src="https://picsum.photos/200" aspect-ratio="1"></v-img>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>

          <v-card-actions class="footer py-2 pl-3 pr-1">
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
            <v-spacer></v-spacer>
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn fab depressed v-on="on" color="transparent">
                  <v-icon color="grey">sms</v-icon>
                </v-btn>
              </template>
              <v-list class="pa-0 comment-menu">
                <v-list-tile>
                  <v-list-tile-title>
                    <v-btn depressed color="transparent">
                      <v-icon class="pr-1">favorite_border</v-icon> 赞
                    </v-btn>
                  </v-list-tile-title>
                  <v-list-tile-title>
                    <v-btn depressed color="transparent">
                      <v-icon class="pr-1">add_comment</v-icon> 评论
                    </v-btn>
                  </v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Article } from '../models/article.model'

export default Vue.extend({
  props: {
    article: {
      type: Object
    }
  },
  data: function() {
    return {
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
      items: [
        { title: '提醒全班浏览' },
        { title: '动态管理' },
        { title: '设为推荐' },
        { title: '设为置顶' }
      ]
    }
  },
  methods: {
    goToDetail() {
      this.$router.push({
        name: 'article-detail',
        params: {
          id: this.article.id
        }
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.header,
.footer {
  height: 56px;
}

.comment-menu .v-btn {
  height: unset;
  min-width: unset;
  margin: 0px;
}

.v-list__tile {
  height: unset !important;
}
</style>
