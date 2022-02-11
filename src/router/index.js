import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// Не знаю зачем в этом задании нужен роутинг, но в требованиях к тестовому было)

const routes = [
  {
    path: "/",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/todos",
    name: "Todos",
    component: () =>
      import(/* webpackChunkName: "todos" */ "../views/TodoPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
