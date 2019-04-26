Vue.component('component-name', {
    name: 'component-name',
    template: `
        <div></div>
    `,
    filters: {},
    props: {},
    data: function() {
        return {};
    },
    computed: {},
    watch: {},
    created() {
        addStyle(componentStyle)
    },
    mounted() {},
    methods: {}
});

const componentStyle = ``