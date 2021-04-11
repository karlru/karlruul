import { 
	router 
} from './router.js'

import { 
	store 
} from './store/store.js'

import "./filters.js"

const app = new Vue({
	router,
	store,
}).$mount('#app');
