import { css } from 'https://unpkg.com/goober@2.0.36/dist/goober.modern.js'

const styles = css `

`

const $TEMPLATE_NAMETemplate = `
	<div class=${styles}>
		<p>$TEMPLATE_NAME</p>
	</div>
`

const $TEMPLATE_NAME = {
	delimiters: ['[[', ']]'],
	computed: {

	},
	template: $TEMPLATE_NAMETemplate,
	created: function() {

	},
}

export { $TEMPLATE_NAME }