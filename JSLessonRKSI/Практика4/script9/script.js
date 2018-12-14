let user = navigator.userAgent;
let images = document.getElementsByTagName('img');

for(let i=0, l=images.length; i<l; i++){

     images[i].addEventListener('click',()=>{
     if(user.search(/Firefox/)<0){
          location.href = "https://www.youtube.com/?gl=RU&hl=ru";
     }   
     });
}