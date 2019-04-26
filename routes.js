const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: homeview },
    { path: '/about', component: aboutview },
    { path: '/contact', component: contactview }
]

const router = new VueRouter({
    routes
})