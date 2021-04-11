import { css } from 'https://unpkg.com/goober@2.0.36/dist/goober.modern.js'

const styles = css `
	#nav-phone {
		background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
		position: fixed;
		bottom: 0;
		width: 100%;
	}

	#nav-buttons {
		text-align: center;
		margin-top: 20%;
	}

	#nav-buttons img {
		margin-left: 3%;
		margin-right: 3%;
	}

	#nav-home img {
		width: 8vh;
	}

	#nav-blog img, #nav-projects img {
		width: 6vh;
	}
`

const NavbarTemplate = `
	<div id="nav" class=${styles}>
		<div id="nav-phone" class="phone">
			<div id="nav-buttons">
				<router-link id="nav-blog" to="/blog">
					<img src="static/img/icons/blog.png">
				</router-link>
				<router-link id="nav-home" to="/">
					<img src="static/img/icons/home.png">
				</router-link>
				<router-link id="nav-projects" to="/projects">
					<img src="static/img/icons/projects.png">
				</router-link>
			</div>
		</div>

		<div id="nav-desktop" class="desktop">

		</div>
	</div>
`

const Navbar = {
	delimiters: ['[[', ']]'],
	computed: {

	},
	template: NavbarTemplate,
	created: function() {
	
	},
}

export { Navbar }