const componentname = {
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
        addStyle('componentStyle', componentStyle)
    },
    mounted() {},
    methods: {}
};

const componentStyle = ``