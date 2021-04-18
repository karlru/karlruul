import { css } from 'https://unpkg.com/goober@2.0.36/dist/goober.modern.js'

const styles = css `
	
`

const ProjectsTemplate = `
	<div class="${styles}">
		<p>Projects</p>
	</div>
`

const Projects = {
	delimiters: ['[[', ']]'],
	computed: {

	},
	template: ProjectsTemplate,
	created: function() {
		this.$store.dispatch('getAllProjects')
	},
}

export { Projects }