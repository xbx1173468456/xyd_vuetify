<template>
  <div class="container pa-0">
    <v-layout
      v-if="showLoading"
      class="loading-wrapper"
      fill-height
      justify-center
      align-center
      row
      wrap
    >
      <v-flex shrink>
        <v-progress-circular indeterminate color="accent"></v-progress-circular>
      </v-flex>
    </v-layout>

    <v-card class="mb-2">
      <v-layout column wrap>
        <!-- header -->
        <v-flex class="class-selector">
          <v-layout row wrap class="primary lighten-3 pa-2">
            <v-flex xs6>
              <div class="class-selection-box primary lighten-4 pa-2">
                <v-autocomplete
                  class="pa-0"
                  v-model="grade"
                  :items="gradeItems"
                  color="primary"
                  item-text="label"
                  item-value="value"
                  hide-no-data
                  hide-selected
                  placeholder="选择年级"
                  hide-details
                ></v-autocomplete>
              </div>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex shrink class="pr-2">
              <v-layout :align-center="true" fill-height wrap="false">
                <v-flex class="">
                  <v-btn depressed color="transparent" fab>
                    <v-icon>search</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex>
                  <v-btn depressed color="transparent" fab>
                    <v-icon>add_circle_outline</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card>

    <!-- report -->
    <v-card class="pa-3">
      <v-layout column>
        <v-flex>
          <v-tabs-items v-model="model">
            <v-tab-item value="tab-1">
              <v-card flat>
                <h3>
                  值周排行榜
                </h3>
                <v-card-title class="pa-1">
                  <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="搜索"
                    single-line
                    hide-details
                  ></v-text-field>
                </v-card-title>
                <v-data-table
                  :headers="headers"
                  :items="filteredTopItems"
                  class="elevation-0"
                  hide-actions
                  no-data-text="暂无数据..."
                  no-results-text="没有匹配的数据..."
                  :search="search"
                >
                  <template v-slot:items="props">
                    <td class="text-xs-right">
                      <!-- yellow--text text--accent-4 -->
                      <font-awesome-icon
                        :class="medalClass(props.item.ranking)"
                        v-if="showMedal(props.item.ranking)"
                        icon="medal"
                      />
                      {{ formatRanking(props.item.ranking) }}
                    </td>
                    <td class="text-xs-right">
                      {{ props.item.classFullName }}
                    </td>
                    <td class="text-xs-right">{{ props.item.amountScore }}</td>
                    <td class="text-xs-right">
                      <v-rating
                        class="py-1"
                        color="accent"
                        background-color="grey darken-1"
                        dense
                        readonly
                        size="10"
                        v-model="props.item.starLevel"
                      ></v-rating>
                    </td>
                  </template>
                </v-data-table>
                <div class="text-xs-center">
                  <v-btn
                    v-if="showAllTopBtn"
                    outline
                    color="primary"
                    @click="viewAllTop"
                  >
                    查看全部
                  </v-btn>
                </div>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-flex>
      </v-layout>
    </v-card>

    <!-- bottom hint -->
    <v-layout row wrap class="bottom-hint pa-2">
      <v-flex class="grey--text text-xs-center">
        ~~~ 到底了 ~~~
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/Header.component.vue'
import echarts, { EChartsResponsiveOption, EChartOption } from 'echarts'
import { dutyService } from '../services/duty.service'
import { TopItem } from '../models/duty-top.model'

import moment from 'moment'
import { userService } from '../services/user.service'
moment.locale('zh-CN')

let now = moment().format('M月D日，A，h点m分')
console.log('TCL: now', now)

const TOP_NUM = 10

export default Vue.extend({
  components: {},
  created() {
    this.loadTop()
  },
  data: function() {
    return {
      grade: '全部年级',
      gradeItems: [
        {
          label: '全部年级',
          value: '全部年级'
        },
        {
          label: '一年级',
          value: '一年级'
        },
        {
          label: '二年级',
          value: '二年级'
        },
        {
          label: '三年级',
          value: '三年级'
        },
        {
          label: '四年级',
          value: '四年级'
        },
        {
          label: '五年级',
          value: '五年级'
        },
        {
          label: '六年级',
          value: '六年级'
        }
      ],
      rating: 4,
      model: 'tab-1',
      headers: [
        {
          text: '名次',
          align: 'right',
          sortable: true,
          value: 'ranking'
        },
        {
          text: '班级',
          align: 'right',
          sortable: false,
          value: 'classFullName'
        },
        { text: '得分', align: 'right', sortable: true, value: 'amountScore' },
        { text: '星级', align: 'right', sortable: true, value: 'starLevel' }
      ],
      topItems: [] as TopItem[],
      allTopItems: [] as TopItem[],
      showAllTopBtn: true,
      showLoading: false,
      search: ''
    }
  },
  computed: {
    filteredTopItems() {
      const that: any = this

      if (that.grade === '全部年级') {
        return that.addRanking(that.topItems)
      }

      return that.addRanking(that.topItems).filter(e => e.grade === that.grade)
    }
  },
  methods: {
    onBack() {
      this.$router.push({
        name: 'home'
      })
    },
    loadTop() {
      this.showLoading = true
      dutyService
        .getDutyTop(userService.schoolInfo.schoolId, 0, 1000)
        .then(res => {
          this.allTopItems = res.data.content
          this.topItems = this.allTopItems.slice(0, 10)
          this.showLoading = false
        })
        .finally(() => {
          this.showLoading = false
        })
    },
    viewAllTop() {
      this.topItems = this.allTopItems
      this.showAllTopBtn = false
    },
    addRanking(topItems: TopItem[]) {
      let items: {
        ranking: number
        classFullName: string
        amountScore: number
        starLevel: number
      }[] = []

      for (let index = 0; index < topItems.length; index++) {
        items.push({
          ...topItems[index],
          ranking: index + 1
        })
      }

      return items
    },
    showMedal(index: number) {
      return index === 1 || index === 2 || index === 3
    },
    medalClass(index: number) {
      let medalClass: string = ''

      switch (index) {
        case 1:
          medalClass = 'gold'
          break
        case 2:
          medalClass = 'sliver'
          break
        case 3:
          medalClass = 'copper'
          break
        default:
          break
      }

      return medalClass
    },
    formatRanking(ranking: number) {
      let title: string | number = ''

      switch (ranking) {
        case 1:
          title = '冠军'
          break
        case 2:
          title = '季军'
          break
        case 3:
          title = '亚军'
          break
        default:
          title = ranking
          break
      }

      return title
    }
  }
})
</script>

<style lang="scss" scoped>
.class-selection-box {
  border-radius: 2px;
}
.growing-tree {
  position: relative;
  height: 300px;
}

.data {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100px;
  height: 36px;
}

.tree {
  font-size: 13rem;
}

.legend {
  position: absolute;
  right: 20px;
  bottom: 20px;
}

.fruit-icon {
  font-size: 2.1rem;
  color: #ffc107;
}

#chart {
  height: 300px;
  width: 100%;
}

.bottom-hint {
  margin-bottom: 56px !important;
}

.loading-wrapper {
  position: absolute;
  z-index: 1000;
  width: 100%;
}

.gold {
  color: #ffc400;
}

.sliver {
  color: #b0bec5;
}

.copper {
  color: #f0ae98;
}
</style>
