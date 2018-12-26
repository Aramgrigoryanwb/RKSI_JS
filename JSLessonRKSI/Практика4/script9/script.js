//Напишите скрипт, который при клике на любую картинку перенаправляет  на youtube, если браузер пользователя не mozilla.

let user = navigator.userAgent; // user хранит строковое значение агента пользователя для текущего браузера.
let images = document.getElementsByTagName('img');

for(let i=0, l=images.length; i<l; i++){

     images[i].addEventListener('click',()=>{
     if(user.search(/Firefox/)<0){
          location.href = "https://www.youtube.com/?gl=RU&hl=ru";
     }   
     });
}