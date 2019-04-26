Vue.component('app-header', {
    name: 'AppHeader',
    template: `
        <header class="header">
            <p>{{ propmessage }} {{ datamessage }}</p>
        </header>
    `,
    props: [
        'propmessage'
    ],
	data() {
		return { 
            datamessage: 'header!' 
        }
	},
    created() {
        addStyle(header_styles)
    }
});

const header_styles = `
    header.header {
        width: 800px;
        margin: 14px auto;
        font-size: 18px;
        font-weight: bold;
    }
`