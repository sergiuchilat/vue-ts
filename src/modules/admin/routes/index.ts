const routes = (lang: string) => {
  return [
    {
      path: `/${lang}/admin`,
      component: () => import(/* webpackChunkName: "admin" */ "../views/Index.vue"),
      meta: {
        widgets: {
          sidebar: true
        }
      }
    },
    {
      path: `/${lang}/admin/attributes`,
      component: () => import(/* webpackChunkName: "admin" */ "../views/Attributes.vue"),
      meta: {
        widgets: {
          sidebar: true
        }
      }
    }
  ];
};

export default routes;
