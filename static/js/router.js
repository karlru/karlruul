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
      },
    },
    {
      path: '/blog',
      name: 'blog',
      components: {
        body: Blog,
      },
    },
    {
      path: '/auth',
      name: 'auth',
      components: {
        body: Auth,
      },
    },
  ]
})

export { router }
