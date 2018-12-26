let data = window.data;
let p = document.querySelector('p');
data.style.display="block";
p.appendChild(data);
console.log(p);
console.log(data);

    function cls(){
     window.close(); 
    }
    setTimeout(cls,7000);
