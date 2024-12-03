import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "@/views/Home.vue";
import LoginVue from "@/views/Login.vue";
import formVue from "@/views/form.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeVue,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginVue
    }, 
    {
      path: "/form",
      name: "Form",
      component: formVue
    }
  ],
});

export default router;
