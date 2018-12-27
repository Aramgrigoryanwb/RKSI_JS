//8: Реализуйте самый нижний слайдер, который начинает прокручивать элементы (сумки по одной в секунду) 
//когда на него навели мышкой, причём когда элемент попадает в поле курсора он - увеличивается на 20%. 
//Исполщуйте addEventListener

let list = document.querySelectorAll('.slider-drifter >.rescue > li');
let img = document.querySelectorAll('.slider-drifter >.rescue > li img');
let timerId;

for(let i=0,len = list.length;i<len;i++){
    let width = img[i].clientWidth;
    let height = img[i].clientHeight;
    list[i].addEventListener('mouseenter',function(){
        let w = width + width *0.2;
        let h = height + height *0.2;
        img[i].style.width = `${w}px`;
        img[i].style.height= `${h}px`;
    });
    list[i].addEventListener('mouseleave',function(){
        img[i].style.width = `${width}px`;
        img[i].style.height= `${height}px`;
   
    });
}   

let hoverSlider = document.querySelectorAll('.slider-drifter >.rescue')[0];

hoverSlider.addEventListener('mouseenter',function(){
    slide();
});
hoverSlider.addEventListener('mouseleave',function(){
       clearInterval(timerId);
});
let order = 1;
function slide (){
    
    timerId =  setInterval (function(){
        list.forEach(element => {
            order = showSlidesMain(order,element); // цифирки ордера
        });
        order++;
        if (order==5){
            order = 1;
       }
    },1000);
}
function showSlidesMain(order,element) {
    order++;
        if (order==5){
            order = 1;
       }
    element.style.cssText=`order: ${order}`;
    return order;
   }  
