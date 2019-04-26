Vue.component('app-menu', {
    name: 'AppMenu',
    template: `
        <nav class="menu">
            <ul>
                <li v-for="item in menu" :key="item.id">
                    <router-link :to="item.target">{{ item.name }}</router-link>
                </li>
            </ul>
        </nav>
    `,
    props: [
        'menu'
    ],
	data() {
        return {}
    },
    created() {
        addStyle(menu_styles)
    }
});

const menu_styles = `
    nav.menu {
        width: 800px;
        margin: 14px auto;
    }

    nav.menu ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    nav.menu ul li {
        padding: 7px 7px 7px 0;
    }
`