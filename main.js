import { appfooter } from './src/components/footer.js';

var app = new Vue({
    el: '#app',
    components: {
        appfooter,
        appmenu,
        appheader,
    },
    router: router
})