import { Navbar } from './components/navbar-component.js'
import { Index } from './components/index-component.js'
import { Blog } from './components/blog-component.js'
import { Auth } from './components/auth-component.js'

const router = new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        body: Index,
      },
    },
    {
      path: '/blog',
      name: 'blog',
      components: {
        body: Blog,
        navbar: Navbar,
      },
    },
    {
      path: '/auth',
      name: 'auth',
      components: {
        body: Auth,
        navbar: Navbar,
      },
    },
  ]
})

export { router }
