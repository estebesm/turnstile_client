import { createRouter, createWebHashHistory } from "vue-router";
import { useUserStore } from "@/stores/user";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      redirect: "/dashboard",
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/pages/Dashboard.vue"),
      // meta: {
      //   middleware: "auth",
      // },
    },
    // {
    //   path: "/stream/:id?",
    //   name: "stream",
    //   component: () => import("@/pages/Stream.vue"),
    //   meta: {
    //     middleware: "auth",
    //   },
    // },
    // Test
    // {
    //   path: "/login",
    //   name: "login",
    //   component: () => import("@/pages/Login.vue"),
    //   meta: {
    //     middleware: "guest",
    //   },
    // },
    // {
    //   path: "/logout",
    //   name: "logout",
    //   component: {
    //     beforeRouteEnter(to, from, next) {
    //       const { logout } = useUserStore();

    //       const destination = {
    //         path: from.path || "/",
    //         query: from.query,
    //         params: from.params,
    //       };

    //       logout();

    //       next(destination);
    //     },
    //   },
    // },
  ],
});

router.beforeEach(async (to, from, next) => {
  //   const { access_token } = useUserStore();

  //   let isAuthenticated = access_token;
  //   let middleware = to.meta.middleware;

  //   if (middleware === "auth" && !isAuthenticated) {
  //     return next({ name: "login" });
  //   }

  next();
});

export default router;
