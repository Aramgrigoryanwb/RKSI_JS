let show = document.querySelector("#show");
let inputs = document.querySelectorAll(".showMore");

inputs.forEach(function(i){
        
    i.style.display="none";});
show.addEventListener('click', function() {
if (show.checked){

    inputs.forEach(function(i){
        
    i.style.display="inline-block";});
    }

    else {
        inputs.forEach(function(i){
            i.style.display="none";
            }); 
        }
    });