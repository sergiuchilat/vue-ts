const routes = (lang: string) => {
  return [
    {
      path: `/${lang}/error/e404`,
      component: () =>
        import(/* webpackChunkName: "ErrorPages" */ `../../views/errors/${lang}/E404.vue`)
    },
    { path: `*`, redirect: `/${lang}/error/e404` }
  ];
};

export default routes;
