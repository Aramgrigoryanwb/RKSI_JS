let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
// понявление модального окна
$('button').on('click', function(){
    $('.popup').css("display", "block");
    $('textarea').val('');
 });
 // закрытие модального окна
 $('.close').on('click', function(){
    $('.popup').css("display", "none");
});

// созидание поста и вставка его на страницу
$('input[type="submit"]').on('click', function(e){
  
  let value = $('textarea').val();
    e.preventDefault();
    let id ;
    let textValue;
    console.log(id);
    if(localStorage.getItem('cId') == null){
      id = [0];
      console.log(id);
    }else{
        id = JSON.parse(localStorage.getItem('cId'));
        id.push(id[id.length-1]+1);
        console.log(id);
    }
    localStorage.setItem(`cId`, JSON.stringify(id));
    if(localStorage.getItem('textarea') == null){
      console.log(textValue);
       textValue = [];
    }else{
       textValue = JSON.parse(localStorage.getItem('textarea'));
       console.log(textValue);
    }
    textValue.push({"value":value,"id":id[id.length-1]});

    localStorage.setItem(`textarea`, JSON.stringify(textValue));
    $(".records").append(`<div class='block'><div class='delete'></div><p>${value}</p><section class="image"><div class="img-block"></div></section><p>${day}.${month}.${year}</p></div>`);
    $('.popup').css("display", "none");
   
    $('.block').on('click', '.delete', function(){
      removeId = $('.block .delete').index(this)-1;
      console.log(removeId);
        allArea = JSON.parse(localStorage.getItem("textarea")); 
        allId = JSON.parse(localStorage.getItem("cId"));
        console.log(allArea[removeId]["value"]);
        console.log(allId[removeId]);
        allArea.splice(removeId,1);
        allId.splice(removeId,1);
        localStorage.setItem("textarea",JSON.stringify(allArea));
        localStorage.setItem("cId",JSON.stringify(allId));
 
      $(this).parent().remove();
    });
});
//render при перезагрузке
$(window).on('load',function(){
  if(localStorage.getItem('cId') !=null){
    let idRender = JSON.parse(localStorage.getItem('cId'));
    let textRender = JSON.parse(localStorage.getItem('textarea'));
    console.log(textRender);
    console.log(idRender);
    idRender.forEach(function(element,key){
        $(".records").append(`<div class='block'><div class='delete'></div><p>${textRender[key]['value']}</p><p>${day}.${month}.${year}</p></div>`);
        $('.popup').css("display", "none");
        $('.block').on('click', '.delete', function(){
          removeId = $('.block .delete').index(this)-1;
            allArea = JSON.parse(localStorage.getItem("textarea")); 
            allId = JSON.parse(localStorage.getItem("cId"));
            allArea.splice(removeId,1);
            allId.splice(removeId,1);
            localStorage.setItem("textarea",JSON.stringify(allArea));
            localStorage.setItem("cId",JSON.stringify(allId));
 
          $(this).parent().remove();
        });
   });
  }

});

//появление поля для редактирование никнейма
$('.disc > input').css("display", "none");
$('.change').on('click',function(){
  $('.disc > input').css("display", "block");
  $('.change').css("display", "none");
});
//создание и отображение никнейма на странице
$('.disc > input').on('change',function(){
  let nickName = $(this).val();
  if(nickName.length < 25 && nickName.length > 0){
    let nick = JSON.stringify(nickName);
    localStorage.setItem('nickName', nick);
    let getNick = JSON.parse(localStorage.getItem('nickName'));
    $('.disc > p').text(getNick);
    $(this).css("display", "none");
    $('.change').css("display", "block");
    $(this).val('');
  }else{
    alert('Не более 30 символов');
  }
});
let getNick = JSON.parse(localStorage.getItem('nickName'));
    if(getNick){
    $('.disc > p').text(getNick);
    }

const dbx = document.querySelector(".profile");
window.onload = () => {
  dbx.addEventListener('dragover', prevent, false)
  dbx.addEventListener('dragenter', prevent, false)
  dbx.addEventListener('drop', drop, false)
}

const drop = e => {
  prevent(e)
  const { files } = e.dataTransfer;
  console.log(files);
  handleFiles(files)
  console.log(dbx.firstElementChild)
  if (dbx.firstElementChild.tagName === "P") {
    dbx.removeChild(dbx.firstElementChild)
  }
}

const prevent = e => {
  e.preventDefault()
  e.stopPropagation()
}

const handleFiles = files => {
  for (file of files) {
    let img = document.createElement('img')
    const reader = new FileReader()
    reader.onloadend = function () {
      img.src = reader.result
      let resultJSON = JSON.stringify(reader.result)
      localStorage.setItem('avatar', resultJSON);
    }
    reader.readAsDataURL(file)
    if (dbx.firstElementChild) {
      dbx.removeChild(dbx.firstElementChild)
    }
    dbx.appendChild(img)
  }
}


const ava = JSON.parse(localStorage.getItem('avatar'));
if(ava){
  $('.profile').html(`<img src="${ava}">`);
}
$('.profile_delete').on('click', function(){
  $('img').remove();
  $('.profile').html(`<p>Перетащите сюда ваше фото</p>`);
  localStorage.removeItem('avatar');
});

