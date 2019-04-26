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


const maincolor = '#151515';
const subcolor = '#42b983';