
function addEventListenerDrag(){
    document.querySelector('img').addEventListener('dragstart', myDrag, false);
    let drop = document.querySelector('section:nth-child(1)');
    drop.addEventListener('dragenter', function(event){
        event.preventDefault();
    },false);
    drop.addEventListener('dragover', function(event){
        event.preventDefault();
    },false);
    drop.addEventListener('drop', myDrop,false);
}

function myDrag(event){
    let image = "<img src='"+event.target.getAttribute('src')+"'>";
    image.src=event.target.src;
    event.dataTransfer.setData('Text', image);
}
function myDrop(event){
    event.preventDefault();
    console.log('azaza');
    event.target.innerHTML = event.dataTransfer.getData('Text');
}
window.addEventListener('load', addEventListenerDrag, false);