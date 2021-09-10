import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'

createApp(App).mount('#app')


window.onload = function() {
    var labels = document.getElementsByClassName('unselectable');
    for(var label of labels){
        disableSelection(label)
    }
};
function disableSelection(element) {
    if (typeof element.onselectstart != 'undefined') {
        element.onselectstart = function() { return false; };
    } else if (typeof element.style.MozUserSelect != 'undefined') {
        element.style.MozUserSelect = 'none';
    } else {
        element.onmousedown = function() { return false; };
    }
}