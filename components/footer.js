Vue.component('app-footer', {
    name: 'AppFooter',
    template: `
        <footer class="footer">eduardocamillo.com.br | 2019</footer>
    `,
    props: [
        'propmessage'
    ],
	data() {
		return { 
            datamessage: 'world' 
        }
	},
    created() {
        addStyle(footer_styles)
    }
});

const footer_styles = `
    footer.footer {
        width: 800px;
        margin: 14px auto;
        color: #999;
    }
`