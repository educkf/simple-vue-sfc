var worksview = {
    name: 'worksView',
    template: `
    <main class="container less">
        <p class="toBold">See! Router works :)</p>
        <p>This component uses Less.js for its scoped styling.</p>
        <p><a href="https://github.com/educkf/simple-vue-sfc/blob/master/src/views/works.js" target="_blank" class="link">Check here</a> how to do it!</p>
    </main>
    `,
    created() {
        // to enable Less.js usage, add `true` to the addStyle function
        addStyle('works_styles', works_styles, true)
    }
};

const works_styles = `
    .container {
        &.less {
            p {
                &.toBold {
                    font-weight: bold;
                }
            }
        }
    }
`