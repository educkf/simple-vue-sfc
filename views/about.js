var aboutview = {
    name: 'AboutView',
    template: `
    <main class="container">
        <p>About!</p>
    </main>
    `,
    created() {
        addStyle(about_styles)
    }
};

const about_styles = ``