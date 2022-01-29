import {RouteRecordRaw} from 'vue-router';
import {createRouter, createWebHistory} from '@ionic/vue-router';
import Tabs from '@/Tabs.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'home',
      },
      {
        path: 'home',
        component: () => import('@/pages/HomePage.vue'),
      },
      {
        path: 'about',
        component: () => import('@/pages/AboutPage.vue'),
      },
      {
        path: 'setting',
        component: () => import('@/pages/SettingPage.vue'),
      },
      {
        path: 'detail',
        component: () => import('@/pages/DetailPage.vue'),
      }
    ],
  },
];

// https://vitejs.dev/guide/env-and-mode.html
const router = createRouter({
  // https://vitejs.dev/guide/env-and-mode.html
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;