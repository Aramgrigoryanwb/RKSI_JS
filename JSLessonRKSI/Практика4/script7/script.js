let scrollH = document.documentElement.scrollHeight;
let clientH = document.documentElement.clientHeight;
// window.onscroll = function(){
//     let scrolled = Math.round(window.pageYOffset);
//     console.log(scrolled);
// }

let li = document.querySelectorAll('.slider-list > li');
let numbers = document.querySelectorAll('.slider-list li');
let index = 2;
let num;
      
          
        li[0].onclick = function(){
            let scrolled = Math.round(window.pageYOffset);
            let up = scrollH-((scrollH-scrolled)+clientH);
            window.scrollTo('',up);
            index--;
            if (index < 2){
                index = 2;    
            }
            hoverLi(index);
            console.log(index);
         } 

        li[1].onclick = function(){
            let scrolled = Math.round(window.pageYOffset);
            let down = scrollH-(scrollH-(clientH+scrolled));
            if (scrollH > down){
                window.scrollTo('',down);
                index ++;
                if (index > 8){
                    index = 8;
                }
                hoverLi(index);
            }
        };
    
function hoverLi(index){
    for(let i = 2; i<9; i++){
        num = numbers[i].querySelector('a');
        num.classList.remove('hover');
    }
    num = numbers[index].querySelector('a');
    num.classList.add('hover');
}

