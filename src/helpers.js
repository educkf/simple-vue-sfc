// https://www.geeksforgeeks.org/how-to-create-a-style-tag-using-javascript/
function addStyle(styleId, styles, isLess) { 

    // use Less syntax, and automatically adds Less.js file. 
    // performance is not thaaaat awesome, but nothing here is very performant, lol
    if (isLess) {
        var hasLess = document.getElementById('less')

        if (!hasLess) {
            var script = document.createElement('script');
            script.id = 'less';
            script.src = '//cdnjs.cloudflare.com/ajax/libs/less.js/3.9.0/less.min.js';
            document.getElementsByTagName("body")[0].appendChild(script);
        }
    }

    var element = document.getElementById(styleId);
    if (!element) {
        var css = document.createElement('style'); 
        css.type = isLess ? 'text/less' : 'text/css'; 
        css.id = styleId;
    
        if (css.styleSheet)  
            css.styleSheet.cssText = styles; 
        else  
            css.appendChild(document.createTextNode(styles)); 
        document.getElementsByTagName("head")[0].appendChild(css); 
    }
} 

// variables to use on CSS
const maincolor = '#151515';
const subcolor = '#42b983';