<template>
  <div class="fill-height">
    <div v-if="developing" class="developing both-center fill-height">
      <h2 class="grey--text title">
        <v-icon>hourglass_empty</v-icon> 开发中...
      </h2>
    </div>
    <div v-else class="container pa-0">
      <!-- <Header :showBack="false" title="成都市xxx小学"></Header> -->
      <div class="nav-wrapper white pa-0">
        <v-layout>
          <v-flex>
            <v-tabs fixed-tabs slider-color="primary">
              <v-tab> 推荐 </v-tab>
              <v-tab> 学校 </v-tab>
              <v-tab> 班级 </v-tab>
              <v-tab> 关注 </v-tab>
            </v-tabs>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex shrink class="pr-2">
            <v-layout :align-center="true" fill-height>
              <v-flex class="px-2">
                <v-icon>notifications_none</v-icon>
              </v-flex>
              <v-flex class="px-2">
                <v-icon>add_circle_outline</v-icon>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </div>
      <v-carousel class="banners" height="160" hide-controls interval="5000">
        <v-carousel-item
          v-for="(item, i) in images"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>

      <!-- actions -->
      <div class="text-xs-center">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on }">
            <v-btn class="action" fab color="accent" v-on="on">
              <v-icon color="white">add</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title
              class="teacher-assistant title grey lighten-2 pa-3"
              primary-title
            >
              老师助手
            </v-card-title>
            <v-card-text>
              <v-layout row wrap>
                <v-flex class="px-4">
                  <v-btn large block color="success" @click="goToCreateArticle"
                    >写文章</v-btn
                  >
                </v-flex>
                <v-flex class="px-4">
                  <v-btn
                    large
                    block
                    color="primary"
                    @click="goToConvertArticleGuide"
                    >转载</v-btn
                  >
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>

      <div class="sub-nav py-2">
        <v-layout row wrap justify-center>
          <v-flex xs9>
            <v-tabs fixed-tabs slider-color="primary">
              <v-tab>
                校园头条
              </v-tab>
              <v-tab>
                学校概况
              </v-tab>
              <v-tab>
                校园之星
              </v-tab>
            </v-tabs>
          </v-flex>
        </v-layout>
      </div>

      <div class="article-list mb-4">
        <v-layout row wrap>
          <v-flex
            v-for="article in articles"
            :key="article.id"
            xs12
            sm6
            md4
            class=""
          >
            <Article class="article pt-2" :article="article"></Article>
          </v-flex>
        </v-layout>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getRandomInt } from '@/utils/math.util'
import Article from '../components/Article.component.vue'
import Header from '../components/Header.component.vue'
import { articles } from '../services/article.service'
import { dutyService } from '../services/duty.service'
import { get } from 'vuex-pathify'
import { developing } from '../store/global.paths'
import { school, authModulePath } from '@/store/auth/auth.paths'
import { SchoolInfo } from '../models/school.model'

export default Vue.extend({
  beforeRouteEnter(to, from, next) {
    next(vm => {
      ;(vm as any).changeTitle()
    })
  },
  data: function() {
    return {
      images: [
        { src: `https://picsum.photos/id/${getRandomInt(1000)}/1920/1080` },
        { src: `https://picsum.photos/id/${getRandomInt(1000)}/1920/1080` },
        { src: `https://picsum.photos/id/${getRandomInt(1000)}/1920/1080` }
      ],
      articles: articles,
      dialog: false
    }
  },
  computed: {
    ...get({
      developing
    }),
    ...get(authModulePath, { school })
  },
  name: 'home',
  components: { Article },
  created() {
    this.changeTitle()
    dutyService.baseUrl
    console.log('TCL: created -> dutyService.baseUrl', dutyService.baseUrl)
  },
  methods: {
    goToCreateArticle() {
      this.$router.push({
        name: 'create-article'
      })
    },
    goToConvertArticleGuide() {
      this.$router.push({
        name: 'convert-article-guide'
      })
    },
    changeTitle() {
      const that: any = this
      document.title = (that.school as SchoolInfo).name
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  padding: 0px;
}
.nav-wrapper {
  padding: 0px;
  background-color: white;
}
.v-tabs__div {
  min-width: unset;
}

.action {
  z-index: 2000;
  position: fixed;
  bottom: 80px;
  right: 20px;
}

.v-carousel__controls {
  background: transparent !important;
}
</style>
