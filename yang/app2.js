import { productView } from '../js/hau-product-view.js'
import { model } from '../admin/js/Model/hau_model.js';
var counter = 1;
const icon = document.querySelector('.icon');
const search = document.querySelector('.search');

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);

icon.onclick = function(){
    search.classList.toggle('active')
}



