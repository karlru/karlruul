const state = {

}

const getters = {

}

const actions = {
	getAllProjects(context) {
		axios.get('projects/getAll/')
			.then(function (response) {
				console.log(response.data.projects)
			})
			.catch(function (error) {
				console.log(error);
			})
	}
}

const mutations = {

}

export default {
	state,
	getters,
	actions,
	mutations
}