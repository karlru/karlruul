import { css } from 'https://unpkg.com/goober@2.0.36/dist/goober.modern.js'

const styles = css `
	#nav-phone {
		background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
		position: fixed;
		bottom: 0;
		width: 100%;
	}

	#nav-phone .nav-buttons {
		text-align: center;
		margin-top: 20%;
	}

	#nav-phone .nav-buttons img {
		margin-left: 3%;
		margin-right: 3%;
	}

	#nav-home img {
		width: 8vh;
	}

	#nav-blog img, #nav-projects img {
		width: 6vh;
	}

	#nav-desktop {
		width: 100%;
	}

	#nav-desktop .nav-buttons {
		text-align: end;
		margin-top: 3%;
	}

	#nav-desktop .nav-buttons a {
		margin-left: 2%;
		margin-right: 2%;
	}
`

const NavbarTemplate = `
	<div id="nav" class=${styles}>
		<div id="nav-phone" class="phone">
			<div class="nav-buttons">
				<router-link class="nav-phone-link" id="nav-blog" to="/blog">
					<img src="static/img/icons/blog.png">
				</router-link>
				<router-link class="nav-phone-link" id="nav-home" to="/">
					<img src="static/img/icons/home.png">
				</router-link>
				<router-link class="nav-phone-link" id="nav-projects" to="/projects">
					<img src="static/img/icons/projects.png">
				</router-link>
			</div>
		</div>

		<div id="nav-desktop" class="desktop">
			<div class="nav-buttons">
				<router-link to="/blog" class="nav-desktop-link">blog</router-link>
				<router-link to="/projects" class="nav-desktop-link">projects</router-link>
			</div>
		</div>
	</div>
`

const Navbar = {
	delimiters: ['[[', ']]'],
	template: NavbarTemplate,
}

export { Navbar }