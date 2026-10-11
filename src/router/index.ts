import { createRouter, createWebHistory } from 'vue-router'
import { siteConfig } from '../config/site'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomePage.vue'),
      meta: { title: `${siteConfig.name} — 专业开发与运维工具` },
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../pages/ProductsPage.vue'),
      meta: { title: `产品 — ${siteConfig.name}` },
    },
    {
      path: '/products/niuma',
      name: 'product-niuma',
      component: () => import('../pages/ProductNiumaPage.vue'),
      meta: { title: `ensis-ops — ${siteConfig.name}` },
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('../pages/DownloadPage.vue'),
      meta: { title: `下载 — ${siteConfig.name}` },
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../pages/FaqPage.vue'),
      meta: { title: `常见问题 — ${siteConfig.name}` },
    },
    {
      path: '/help',
      redirect: '/faq',
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('../pages/FeedbackPage.vue'),
      meta: { title: `问题反馈 — ${siteConfig.name}` },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutPage.vue'),
      meta: { title: `关于 — ${siteConfig.name}` },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const title = typeof to.meta.title === 'string' ? to.meta.title : siteConfig.name
  document.title = title
})
