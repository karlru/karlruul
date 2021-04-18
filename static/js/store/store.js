import index from './modules/index.js'
import blog from './modules/blog.js'
import projects from './modules/projects.js'
import auth from './modules/auth.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		index,
		blog,
		projects,
		auth,
	}
})

export { store }
