var counter = 1;
const icon = document.querySelector('.icon');
const search = document.querySelector('.search');

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 6000);

icon.onclick = function(){
    search.classList.toggle('active')
}

