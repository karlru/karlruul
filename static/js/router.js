import { Navbar } from './components/navbar-component.js'
import { Index } from './components/index-component.js'
import { Blog } from './components/blog-component.js'
import { Auth } from './components/auth-component.js'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        body: Index,
        navbar: Navbar,
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
