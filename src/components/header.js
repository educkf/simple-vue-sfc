Vue.component('app-header', {
    name: 'AppHeader',
    template: `
        <header class="header">
            <h1 class="header-title">Plain-simple SFC for Vue.js</h1>
        </header>
    `,
    filters: {},
    props: {},
    data: function() {
        return {};
    },
    computed: {},
    watch: {},
    created() {
        addStyle(header_styles)
    },
    mounted() {},
    methods: {}
});

const header_styles = `
    header.header {
        max-width: 800px;
        margin: 35px auto 28px;
        font-size: 14px;
        font-weight: bold;
        color: ${subcolor};
    }

    h1.header-title {
        font-size: 28px;
    }
`