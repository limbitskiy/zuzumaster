import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import(/* webpackChunkName: "main-view" */ "@/views/Main")
  },
  {
    path: "/product/:id/:slug",
    name: "Product",
    props: route => ({ id: parseInt(route.params.id) }),
    component: () => import(/* webpackChunkName: "product-view" */ "@/views/Product")
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: 'Order-view' */ "@/views/Order")
  },
  {
    path: '/thank-you',
    name: 'ThankYou',
    component: () => import(/* webpackChunkName: 'Order-view' */ "@/views/ThankYou")
  },
  {
    path: '/options',
    name: 'Options',
    component: () => import(/* webpackChunkName: 'Options-view' */ "@/views/Options")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
});

export default router;
