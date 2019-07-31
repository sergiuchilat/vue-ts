const routes = (lang: string) => {
  return [
    {
      path: `/${lang}/admin`,
      component: () => import(/* webpackChunkName: "admin" */ "../views/Index.vue")
    },
    {
      path: `/${lang}/admin/attributes`,
      component: () => import(/* webpackChunkName: "admin" */ "../views/Attributes.vue")
    },

  ];
};

export default routes;
