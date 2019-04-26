// https://www.geeksforgeeks.org/how-to-create-a-style-tag-using-javascript/
function addStyle(styles) { 
    var css = document.createElement('style'); 
    css.type = 'text/css'; 
  
    if (css.styleSheet)  
        css.styleSheet.cssText = styles; 
    else  
        css.appendChild(document.createTextNode(styles)); 
    document.getElementsByTagName("head")[0].appendChild(css); 
} 

var app = new Vue({
    el: '#app',
    router: router,
    data: {
        message: 'Hello ',
        menu: [
            {
                id: 1,
                name: 'Home',
                target: '/home'
            },
            {
                id: 2,
                name: 'About',
                target: '/about'
            },
            {
                id: 3,
                name: 'Contact',
                target: '/contact'
            }
        ]
    }
})
