var homeview = {
    name: 'HomeView',
    template: `
        <main class="container">
            <h3 class="title">Create .js file</h3>
            <appcode>
                /components/component.js
            </appcode>

            
            <h3 class="title">Use as a Single File Component</h3>
            <appcode :pre="true" filename="component.js">
Vue.component('component-name', {
    name: 'component-name',
    template: \`
        &lt;div class="classname"&gt;&lt;/div&gt;
    \`,
    filters: { },
    props: { },
    data: function() {
        return { };
    },
    computed: { },
    watch: { },
    created() {
        addStyle(componentStyle)
    },
    mounted() { },
    methods: { }
});

const componentStyle = \`
    .classname {
        font-size: 16px;
    }
\`</appcode>

            <h3 class="title">Add to index.html</h3>
            <appcode>
                &lt;script src="/components/component.js"&gt;&lt;/script&gt;
            </appcode>

            <h3 class="title">Add CSS variables on helpers.js and use on SFC</h3>
            <appcode :pre="true" filename="helpers.js">
    const maincolor = '#151515';
    const subcolor = '#42b983';</appcode>
            <appcode :pre="true" filename="component.js">
const componentStyle = \`
    .classname {
        font-size: 16px;
        color: \$\{maincolor\}
    }
\`</appcode>

            <h3 class="title">Create routes, more components, more stuff</h3>
            <p>Go check the <a href="https://github.com/educkf/simple-vue-sfc" class="link" target="_blank">Github repo</a>, it is easier to understand there.</p>

            <h3 class="title">...one question... god, why??</h3>
            <p>Because yes :)</p>
            <p>Just a <a class="link" href="https://reactpodcast.com/42">Dumb sh*t</a> project by @educkf</p>
        </main>
    `,
    components: {
        appcode
    },
    created() {
        addStyle(home_styles)
    }
}

const home_styles = `
    h3.title {
        margin-top: 42px;
    }

    main.container {
        padding-bottom: 21px;
    }
`