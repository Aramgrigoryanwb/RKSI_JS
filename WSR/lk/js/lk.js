let button = document.querySelector('.change');
let all = document.querySelectorAll('form *');
button.addEventListener('click', function(){
    event.preventDefault();
    let form = document.querySelector('form');
    form.classList.toggle('changeF');
    form.classList.toggle('changeT');
    if (form.classList.contains('changeT')){
        all.forEach(function(element){
            element.disabled = false;
        });
    }
});