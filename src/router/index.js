import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '@/views/NotFound.vue'
import BasicLayout from '@/layouts/BasicLayout.vue'


Vue.use(VueRouter)

const categoryRouter = [
  {
    path: "",
    name: "CategoryList",
    component: Home,
    meta: {
      title: "分類列表",
      breadcrumb: [
        {
          name: "分類列表",
          routeName: "CategoryList"
        }
      ]
    }
  },
  {
    path: "/:categoryId",
    name: "ArticleList",
    component: Home,
    meta: {
      title: "文章列表",
      breadcrumb: [
        {
          name: "分類列表",
          routeName: "CategoryList"
        },
        {
          name: "文章列表",
          routeName: "ArticleList"
        }
      ]
    },
    props: ({ params = {} }) => ({
      categoryId: params.categoryId
    })
  },
  {
    path: "/:categoryId/:articleId",
    name: "Article",
    component: Home,
    meta: {
      title: "文章",
      breadcrumb: [
        {
          name: "分類列表",
          routeName: "CategoryList"
        },
        {
          name: "文章列表",
          routeName: "ArticleList"
        },
        {
          name: "文章",
          routeName: "Article"
        }
      ]
    },
    props: ({ params = {} }) => ({
      categoryId: params.categoryId,
      articleId: params.articleId
    })
  }
]

const blogRouter = [
  {
    path: "",
    name: "HomeRoot",
    component: Home,
    mete: {
      title: "首頁",
      breadcrumb: [
        {
          name: "首頁",
          routeName: "HomeRoot"
        }
      ]
    }
  },
  {
    path: "me",
    name: "Me",
    component: () => import('../views/About.vue'),
    meta: {
      title: "關於我",
      breadcrumb: [
        {
          name: "關於我",
          routeName: "Me"
        }
      ]
    }
  },
  {
    path: "category",
    name: "Category",
    children: categoryRouter
  }

]

const routes = [
  {
    path: '/',
    name: 'Home',
    component: BasicLayout,
    children: blogRouter
  },
  // {
  //   path: '/me',
  //   name: 'Me',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
