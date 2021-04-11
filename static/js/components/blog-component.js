import { css } from 'https://unpkg.com/goober@2.0.36/dist/goober.modern.js'

const styles = css `
	#blog-title {
		text-align: center;
		padding-top: 5%;
	}

	#blog-posts {
		padding: 5%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.blog-post {
		margin: 2%;
		margin-bottom: 4%;
		padding: 10%;
		background-size: cover;
		width: 90%;
		height: 20vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow: hidden;
		-ms-overflow-style: none;
	}

	.blog-post::-webkit-scrollbar {
		display: none;
	}

	.blog-post-primary {
		text-align: center;
		font-size: 4vw;
		color: var(--bg-color);
	}

	.blog-post-secondary {
		text-align: center;
		color: var(--bg-color);
		display: none;
	}

	.blog-post:hover .blog-post-primary {
		display: none;
	}

	.blog-post:hover .blog-post-secondary {
		display: block;
	}

	@media only screen and (min-aspect-ratio: 11/10) {
		.blog-post {
			width: 25%;
			height: 15vh;
		}

		.blog-post-primary {
			font-size: 2vw;
		}
	}
`

const BlogTemplate = `
	<div class=${styles}>
		<h2 id="blog-title">blog</h2>

		<div id="blog-posts" v-if="posts">
			<router-link class="blog-post" v-for="post in posts" to="#" v-bind:style="{ 
				backgroundImage: 'linear-gradient(0deg, #00000088 30%, #ffffff44 100%), url(/' + [[ post.background_image ]] + ')' 
			}">
				<div class="blog-post-primary">
					<h3>[[ post.title ]]</h3>
					<br>
					<h5>[[ post.date_added | formatDate ]]</h5>
				</div>
				<div class="blog-post-secondary">
					<p>[[ post.content | truncatechars(200) | striptags ]]</p>
				</div>
			</router-link>
		</div>
	</div>
`

const Blog = {
	delimiters: ['[[', ']]'],
	template: BlogTemplate,
	computed: {
		posts: function() {
			return this.$store.state.blog.posts
		}
	},
	created: function() {
		this.$store.dispatch('getAllPosts')
	},
}

export { Blog }
