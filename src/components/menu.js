const appmenu = {
    name: 'AppMenu',
    template: `
        <nav class="menu">
            <router-link to="/home">Home</router-link>
            <router-link to="/works">Router</router-link>
            <a href="https://github.com/educkf/simple-vue-sfc" target="_blank">Github</a>
        </nav>
    `,
    props: [],
	data() {
        return {}
    },
    created() {
        addStyle(menu_styles)
    }
};

const menu_styles = `
    nav.menu {
        max-width: 800px;
        margin: 14px auto;
        padding: 14px;
        border: 1px solid #eee;
        border-left: none;
        border-right: none;
    }

    nav.menu a {
        padding: 7px 7px 7px 0;
        margin-right: 14px;
        text-decoration: none;
        color: ${maincolor}
    }

    nav.menu a.router-link-active {
        color: ${subcolor};
        font-weight: bold;
    }
`