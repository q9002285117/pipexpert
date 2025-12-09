import { createRouter, createWebHistory } from "vue-router";

// 引入頁面組件
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Product from "@/views/Product.vue";
import Service from "@/views/Service.vue";
import Contact from "@/views/Contact.vue";


const routes = [
  {
    path: "/",
    name: 'TITLE_INDEX',
    component: Home,
  },
  {
    path: "/product",
    name: 'TITLE_PRODUCT',
    component: Product,
  },
  // {
  //   path: "/service",
  //   name: "Service",
  //   component: Service,
  // },
  {
    path: "/about",
    name: 'TITLE_ABOUT',
    component: About,
  },
  {
    path: "/contact",
    name: 'TITLE_CONTACT',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 的 history 模式
  routes,
});

export default router;
