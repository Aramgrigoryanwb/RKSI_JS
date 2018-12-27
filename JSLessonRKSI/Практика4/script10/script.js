// Напишите скрипт, который в случайном порядке, скрывает блоки контента,
// и открывает их в новом окне (спустя первых 10 секунд после загрузки страницы на 7 сек). 
//( пооддержка : moz, O, Ch)
let allDiv = document.querySelectorAll('div');
let rand = Math.round(Math.random()*(15-15)+15);

console.log(allDiv);

function random(){
        let divHidden = allDiv[rand];
         allDiv[rand].style.display = "none";
        return divHidden;
}
let none = random();

function func(){
    let newWin = window.open("index2.html", "hello", "width=500,height=600")//window.open возвращает ссылку на новое окно.
    newWin.data=none;

  
}

setTimeout(func,10000);
// about blank Пустая страница. Так в некоторых браузерах отображается вкладки, адрес в строку которых пока не в ведён. 