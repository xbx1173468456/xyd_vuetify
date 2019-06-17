import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/Home.page.vue'
import { authGuard } from './auth.guard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
      // beforeEnter: authGuard
    },
    {
      path: '/workbench',
      name: 'workbench',
      beforeEnter: authGuard,
      children: [
        {
          path: 'teacher',
          name: 'teacher',
          beforeEnter: authGuard,
          component: () =>
            import(
              /* webpackChunkName: "workbench-teacher" */ '../views/WorkbenchTeacher.page.vue'
            )
        },
        {
          path: 'school-run',
          name: 'school-run',
          beforeEnter: authGuard,
          component: () =>
            import(
              /* webpackChunkName: "workbench-school-run" */ '../views/WorkbenchSchoolRun.page.vue'
            )
        },
        {
          path: 'parents',
          name: 'parents',
          beforeEnter: authGuard,
          component: () =>
            import(
              /* webpackChunkName: "workbench-parents" */ '../views/WorkbenchParents.page.vue'
            )
        }
      ],
      component: () =>
        import(
          /* webpackChunkName: "workbench" */ '../views/Workbench.page.vue'
        )
    },
    {
      path: '/explore',
      name: 'explore',
      beforeEnter: authGuard,
      component: () =>
        import(/* webpackChunkName: "explore" */ '../views/Explore.page.vue')
    },
    {
      path: '/account',
      beforeEnter: authGuard,
      children: [
        {
          path: 'my',
          name: 'my',
          beforeEnter: authGuard,
          component: () =>
            import(/* webpackChunkName: "my" */ '../views/My.page.vue')
        },
        {
          path: 'tourist',
          name: 'tourist',
          beforeEnter: authGuard,
          component: () =>
            import(
              /* webpackChunkName: "tourist" */ '../views/Tourist.page.vue'
            )
        }
      ],
      component: () =>
        import(/* webpackChunkName: "account" */ '../views/Account.page.vue')
    },
    {
      path: '/article/:id',
      name: 'article-detail',
      beforeEnter: authGuard,
      component: () =>
        import(
          /* webpackChunkName: "article-detail" */ '../views/ArticleDetail.page.vue'
        ),
      props: true
    },
    {
      path: '/create-article',
      name: 'create-article',
      component: () =>
        import(
          /* webpackChunkName: "create-article" */ '../views/CreateArticle.page.vue'
        ),
      props: true
    },
    {
      path: '/convert-article-guide',
      name: 'convert-article-guide',
      beforeEnter: authGuard,
      component: () =>
        import(
          /* webpackChunkName: "convert-article-guide" */ '../views/ConvertArticleGuide.page.vue'
        ),
      props: true
    },
    {
      path: '/convert-article',
      name: 'convert-article',
      beforeEnter: authGuard,
      component: () =>
        import(
          /* webpackChunkName: "convert-article" */ '../views/ConvertArticle.page.vue'
        ),
      props: true
    },
    {
      path: '/binding',
      name: 'binding',
      component: () =>
        import(/* webpackChunkName: "binding" */ '../views/Binding.page.vue'),
      props: true
    },
    {
      path: '/user-settings',
      name: 'user-settings',
      beforeEnter: authGuard,
      component: () =>
        import(
          /* webpackChunkName: "user-settings" */ '../views/UserSettings.page.vue'
        ),
      props: true
    }
  ]
})
