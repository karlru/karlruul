import { css } from 'https://unpkg.com/goober@2.0.36/dist/goober.modern.js'

const styles = css `
	#index {
		height: 100%;
	}

	#k1, #k2, #k3, #r1, #r2, #l1 {
		stroke-dasharray: 500;
	    stroke-dashoffset: 500;
	}

	#k1, #k2, #k3, #l1 {
		stroke-width: 23px;
	}

	#k1 {
	    animation: karl .2s linear forwards;
	}

	#k2 {
	    animation: karl .2s linear forwards .25s;
	}

	#k3 {
	    animation: karl .3s linear forwards .4s;
	}

	#a1 {
	    stroke-width: 15px;
	    stroke-dasharray: 1000;
	    stroke-dashoffset: 1000;
	    animation: karl .6s linear forwards .6s;
	}

	#r1 {
	    stroke-width: 21px;
	    animation: karl .25s linear forwards 1.15s;
	}

	#r2 {
	    stroke-width: 20px;
	    animation: karl .2s linear forwards 1.3s;
	}

	#l1 {
	    animation: karl .3s linear forwards 1.45s;
	}

	#logo {
	    height: 30%;
	    margin-left: 10%;
	    margin-right: 10%;
	}

	#karl {
	    height: 75%;
	    width: 100%;
	    position: relative;
	    top: 25%;
	}

	#index-navigation {
	    font-size: 3vh;
	    height: 70%;
	}

	#index-navigation-links {
		height: 60%;
		position: relative;
		top: 20%;
		bottom: 20%;
		display: flex;
	    flex-direction: column;
	    justify-content: center;
	    text-align: center;
	}

	.index-href {
	    opacity: 0;
	    margin: 6%;
	}

	.index-href span {
	    background: linear-gradient(currentColor, currentColor) bottom / 0 .1em no-repeat;
	    transition: .3s background-size;
	}

	#index-blog-nav span, #index-projects-nav span {
	    padding-bottom: 0.4%;
	}

	.index-href span:hover {
	    background-size: 100% .1em;
	}

	#index-blog-nav {
	    animation: fadein 1.5s ease forwards;
	}

	#index-projects-nav {
	    animation: fadein 1.5s ease forwards .15s;
	}

	#index-about-nav {
	    animation: fadein 1.5s ease forwards .25s;
	}

	#about {
	    height: 100%;
	    overflow: hidden;
	}

	#about-img {
		text-align: center;
		height: 30%;
	    overflow: hidden;
	   	position: relative;
	    top: 20%;
	}

	#about-img img {
	    border-radius: 50%;
	    max-height: 100%;
	    max-width: 100%;
	}

	#about-text {
		text-align: center;
		position: relative;
		top: 30%;
	    font-size: 2vh;
	}

	#about-text h1 {
	    font-size: 5vh;
	}

	@media only screen and (min-aspect-ratio: 11/10) {
		#logo {
		    height: 40%;
		}

		#index-navigation {
		    height: 60%;
		}

		.index-href {
		    margin: 3%;
		}

		#about-img {
	        width: 45%;
	        float: left;
	        text-align: right;
	        margin-right: 5%;
	        top: 30%;
	    }
	    #about-text {
	        width: 45%;
	        float: left;
	        text-align: left;
	        margin-left: 5%;
	        top: 40%;
	    }
	}
`

const IndexTemplate = `
	<div class=${styles}>
		<div id="index">
			 <div id="logo">
	            <svg id="karl" data-name="Layer 1" viewBox="0 0 500 500">
	                <defs>
	                    <clipPath id="clip-path" transform="translate(-239.93 -15.51)">
	                        <path id="l"
	                            d="M675.11,45.51q4.84,0,6.06,4.85,0,24.54-1.21,73.92,2.42,169.66,2.42,287.21,0,38.48,3.94,45.14,3.93,7,14.84,6.67l5.76-.61q6.36,0.61,4.54,9.39-4.54,6.06-14.54,6.06a48.75,48.75,0,0,1-10.6-1.21q-18.18-2.73-18.48-65.44v-1.21q0-105.43-2.42-289.63,1.21-47.26,1.21-67.86Q668.44,45.51,675.11,45.51Z"
	                            fill="none" />
	                    </clipPath>
	                    <clipPath id="clip-path-2" transform="translate(-239.93 -15.51)">
	                        <path id="r"
	                            d="M547,252.73q6.06,0,6.06,7.27v23h1.21q15.15-21.81,46-23,23,3.94,23,15.75,0,7.27-7.27,7.27-9.09-7.27-15.75-8.48-13.33,1.21-21.81,7.27-23,14.24-23,35.14a100.66,100.66,0,0,0-1.51,18.78q0.3,77,.3,130.27v4.85q0,7.27-7.27,7.27-7.27-1.21-7.27-8.48Q538.47,323,538.47,261.22,538.47,252.74,547,252.73Z"
	                            fill="none" />
	                    </clipPath>
	                    <clipPath id="clip-path-3" transform="translate(-239.93 -15.51)">
	                        <path id="a"
	                            d="M463,266.37h7.27q4.84,0.91,6.67,6.06,0.3,7.27,3,26.36L480.3,336l-0.61,29.39q0,22.42.3,45.14l0.91,17.57q1.21,13.94,1.67,21.36t1.06,14.69v3.63q0,3.34-5.15,5.76-6.36-.6-7.57-7.27-1.21-9.69-2.12-19.69-0.61,10.61-18.78,22.72a64.74,64.74,0,0,1-19.39,4.85q-10.3-.91-16.66-6.06a55.25,55.25,0,0,1-16.06-19.09,142.91,142.91,0,0,1-8.18-37l-1.21-17.27V378.77q0.91-14.24,7-38.78,17.27-61.19,45.75-73l7.88-3A50.49,50.49,0,0,1,463,266.37ZM404.26,411.18q3,35.45,19.09,45.44l7,3a42.42,42.42,0,0,0,10.3-1.82q7.88-2.73,15.75-13.63l4.24-7.88a30.39,30.39,0,0,0,3.33-12.12v-9.09l1.21-47.26q0.3-44.53.3-61.5l-0.91-13.94-0.61-10.3L450,281.21q-22.42,6.06-35.45,49.38-7.27,16.36-10.91,48.17Q403.65,394.52,404.26,411.18Z"
	                            fill="none" />
	                    </clipPath>
	                    <clipPath id="clip-path-4" transform="translate(-239.93 -15.51)">
	                        <path id="k"
	                            d="M270.35,44.6q6.06,0,6.06,7.27V97.62q0,51.51,1.21,84.83V317a135.4,135.4,0,0,0,10-12.72q9.69-10.6,18.18-21.81a167.3,167.3,0,0,0,17.27-21.21l6.06-3.33q6.06,2.12,6.06,9.39a139.53,139.53,0,0,1-20.6,29.08q-10.3,13.34-15.75,19.84A96.84,96.84,0,0,0,291,326.66q9.69,22.12,26.66,77.56,7.57,17.58,13.63,36.05a304.73,304.73,0,0,1,13,30.29q0,6.06-7.27,6.06-7.88,0-12.12-17Q314,437.24,309.43,421.79q-1.82-4.24-11.21-30.9Q291,367,280.35,341.2l-3.94,6.06,1.82,119.06q0,12.12-8.48,12.12-3.94,0-6.06-7V460.26l-1.82-160.57,1.21-116Q261.87,154,261.87,100V54.3Q261.87,44.6,270.35,44.6Z"
	                            fill="none" />
	                    </clipPath>
	                </defs>
	                <g id="l_mask">
	                    <g clip-path="url(#clip-path)">
	                        <path id="l1"
	                            d="M674.11,15.69L677.17,444s0.65,19.51,7.12,22.82,11,4.49,15.58,3.57S730,462.72,730,462.72"
	                            transform="translate(-239.93 -15.51)" fill="none" stroke="#000" stroke-miterlimit="10" />
	                    </g>
	                </g>
	                <g id="r_mask">
	                    <g clip-path="url(#clip-path-2)">
	                        <path id="r2"
	                            d="M548,316.14a89.8,89.8,0,0,1,5.6-12.38c1.6-2.8,2.7-11.61,4.39-15.19,2.34-4.94,6.22-6.61,9.46-9.34,10.21-8.62,8.52-11.32,27.67-11.32s23.87,8.4,27.51,11.53a62.71,62.71,0,0,1,7.81,8.9"
	                            transform="translate(-239.93 -15.51)" fill="none" stroke="#000" stroke-miterlimit="10" />
	                        <line id="r1" x1="302.86" y1="217.66" x2="305.41" y2="489.99" fill="none" stroke="#000"
	                            stroke-miterlimit="10" />
	                    </g>
	                </g>
	                <g id="a_mask">
	                    <g clip-path="url(#clip-path-3)">
	                        <path id="a1"
	                            d="M500,281l-13.3-1c-0.1,1-7.41-1-18.8-4.11-8.77-2.4-16.76-1.47-19.68-1.71-23.24-1.88-30.49,25.71-34.52,35.59s-11.78,29.41-14.43,53.1-2.75,63.64,4.39,79.26,9,19.34,22.93,23.84,29.73-7.09,35-15.46,10.2-34,10.2-34l1.28-55-1.36-88.73L473.93,441l6,41.51"
	                            transform="translate(-239.93 -15.51)" fill="none" stroke="#000" stroke-miterlimit="10" />
	                    </g>
	                </g>
	                <g id="k_mask">
	                    <g clip-path="url(#clip-path-4)">
	                        <line id="k2" x1="100.95" y1="237.22" x2="31.24" y2="318.14" stroke="#000"
	                            stroke-miterlimit="10" />
	                        <line id="k3" x1="42.72" y1="304.81" x2="104.35" y2="476.09" stroke="#000"
	                            stroke-miterlimit="10" />
	                        <line id="k1" x1="25" y1="15.54" x2="28.49" y2="482.07" stroke="#000" stroke-miterlimit="10" />
	                    </g>
	                </g>
	            </svg>
	        </div>

	        <div id="index-navigation">
	        	<div id="index-navigation-links">
		        	<router-link class="index-href" id="index-blog-nav" to="/blog"><span>blog</span></router-link>
		        	<router-link class="index-href" id="index-projects-nav" to="/projects"><span>projects</span></router-link>
		        	<span v-on:click="scrollToBottom" class="index-href" id="index-about-nav"><span>about</span></span>
		        </div>
	        </div>
	    </div>

	    <div id="about">
	        <div id="about-img">
	            <img src="/static/img/karlruul.jpg">
	        </div>
	        <div id="about-text">
	            <h1>Karl Ruul</h1>
	            <p>sample text</p>
	        </div>
	    </div>
	</div>
`

const Index = {
	delimiters: ['[[', ']]'],
    template: IndexTemplate,
    methods: {
		scrollToBottom: function() {
			 window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
		}
	},
}

export { Index }
