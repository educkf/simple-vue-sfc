const appcode = {
    name: 'appcode',
    template: `
        <div class="code">
            <div v-if="filename" class="filename">{{ filename }}</div>
            <pre v-if="pre" class="code-area">
                <slot></slot>
            </pre>
            <div v-else class="code-area">
                <slot></slot>
            </div>
        </div>
    `,
    props: {
        pre: Boolean,
        filename: String
    },
    filters: {},
    data: function() {
        return {};
    },
    computed: {},
    watch: {},
    created() {
        addStyle('codeStyles', codeStyles)
    },
    mounted() {},
    methods: {}
};

const codeStyles = `
    .code {
        background: #333;
        padding: 0;
        border-radius: 3px;
        color: ${subcolor};
        position: relative;
        margin-bottom: 14px;
        font-size: 16px;
        line-height: 28px;
    }

    div.code div {
        padding: 14px 28px;
    }

    div.code pre {
        padding: 0 28px;
    }

    .filename {
        position: absolute;
        top: 0;
        right: 0;
        padding: 7px 14px;
        background: #151515;
        border-bottom-left-radius: 7px;
        color: #ddd;
    }
`