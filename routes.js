const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: homeview },
    { path: '/works', component: worksview }
]

const router = new VueRouter({
    routes
})