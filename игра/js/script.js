let userName = '';
let arrIdItems = [];
let IdItemIndex = 0;
let gameStart = true;
let pause = false;
let gameOver = false;
let firstStart=true;
let id = 0;
let interval = 0;
let moving = 0;
let objectCount = 0;
let trash = { // несъедобное
    point: '',
    size: '',
    src: ''
};
let eat = { // съедобное
    point: '',
    size: '',
    src: ''
};
let trashArray = ['img/носок.jpg', 'img/коробка.jpg'];
let eatArray = ['img/банан.jpg', 'img/яблоко.jpg'];
/* закрывает все секции кроме первой */
$('section:eq(1)').hide();
$('section:eq(2)').hide();

/* проверка имени */
$('input[name="signin"]').click(function () {
    let name = $('.name');
    if (name.val() != '') {
     
        $('section:eq(0)').hide();
        $('section:eq(1)').show();
        gameStart = true;
        userName = name.val();
    } else {
        name.before('<p>Введите имя</p>');
        name.css('box-shadow', '0px 0px 5px red');
    }
});

/* начало игры */
if (gameStart) {
    timer();
    objectCount = Math.floor(Math.random() * (11 - 3) + 3); //кол-во объектов
    let params;
    let item;
    let arg;
    let itemType;
    $("button[name='pause']").on("click", pauseGame);
    $("window").on("keydown", e => {
        if (e.keyCode == 32) pauseGame();
    });
    if (!pause) {
        gaming();
    }
}

/*генерацияя объекта с пареметрами*/
function generate(type, src, size, point) {
    let item;
    if (type == "trash") {
        item = new Object(trash);
    } else if (type == "eat") {
        item = new Object(eat);
    } else {
        return false;
    }
    item.src = src;
    item.point = point;
    item.size = size;
    return [item, type];
}

/*рандомное генерирование аргументов*/
function generateArg() {
    let typeAr;
    let srcAr;
    let pointAr;
    let sizeAr;
    if (Math.round(Math.random())) {
        typeAr = 'trash';
        srcAr = trashArray[Math.floor(Math.random() * trashArray.length)];
    } else {
        srcAr = eatArray[Math.floor(Math.random() * eatArray.length)];
        typeAr = 'eat';
    }
    sizeAr = pointAr = Math.round(Math.random() * 3 + 1);
    return [typeAr, srcAr, pointAr, sizeAr];
}

/*Анимирование объекта*/
function animate(item,itemType) {
    let img;
    img = $('.generation').append(`<img data-name="${itemType}" data-point="${item.point}" src='${item.src}'>`).find('img').last();
    img.on('click',catchItem);
    let i = 7;
    arrIdItems[IdItemIndex]
    id = setInterval(() => {
        img.css('left', `${i}vw`);
        i++;
        if (i >= 80) { 
            $(img).remove();
            clearInterval(id);
        }
    }, 80);
    arrIdItems[IdItemIndex++] = id;
}

/*удаление картинки*/
function catchItem (event){
    event.preventDefault();
    let type = $(event.target).attr('data-name');
    let point = $(event.target).attr('data-point');
    $(event.target).remove();
    if (type == 'trash') {
        point = -point;
    }
    $('.score').text(parseInt($('.score').text()) + parseInt(point));
}

function timer(){
    let min = $('.min').text();
    let sec = $('.sec').text();
    interval = setInterval(function(){
        --sec;
        if (sec < 0) {
            sec = 59;
            --min;
        }
        if (sec == 0 && min == 0){
            clearInterval(interval);
            alert('stop game');
        }
        $('.sec').text(sec);
        $('.min').text(min);
    },1000);
}

function pauseGame(){
    arrIdItems.forEach((item) => {
        clearInterval(item);
    })
    $(".generation img").off("click");
    clearInterval(interval);
    clearInterval(moving);
    clearInterval(id);
    $("button[name='pause']").off("click");
    $("window").off("keydown");
    $("window").on("keydown", () => {
        if (e.keyCode == 32) {
            gaming();
        }
    })
}

function gaming() {
    IdItemIndex = 0;
    for (let i = 0; i < objectCount; i++) {
        params = generateArg();
        arg = generate(...params);
        item = arg[0];
        itemType = arg[1];
        animate(item, itemType);
    }
    moving = setInterval(function(){
        for (let i = 0; i < objectCount; i++) {
            params = generateArg();
            arg = generate(...params);
            item = arg[0];
            itemType = arg[1];
            animate(item, itemType);
        }
    }, 7000);
    $("button[name='pause']").off("click");
    $("window").off("keydown");
    $("button[name='pause']").on("click", pauseGame);
    $("window").on("keydown", e => {
        if (e.keyCode == 32) pauseGame();
    });
}


