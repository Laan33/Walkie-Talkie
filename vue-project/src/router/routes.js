
function loadPage (component) {
  // '@' is aliased to src/components
  return () => import(/* webpackChunkName: "[request]" */
  `@/views/${component}.vue`)}

  export default [
    { path: '/', component: loadPage('Home') },
    { path: '/blog', component: loadPage('Blog') },
    { path: '/about', component: loadPage('About') },
    { path: '/Register', component: loadPage('Register') },
    { path: '/RegLecture', component: loadPage('RegLecture') }

  ]