/*На странице должно быть расположено поле для поиска фильма и кнопка "Поиск"
При нажатии на кнопку поиска выведите информацию о фильмах (постер, дата выхода, название) полученную из API, 
если фильмов не найдено - выводится соотвествующая ошибка
*за красивенький вывод фильмов получите плюсик в карму*/

let input = document.querySelector('input');
let button = document.querySelector('button');


button.addEventListener('click',()=>{
    let inputVal = input.value;
    inputVal = inputVal.replace(/ /g, "+");
const loadImage = (url) => {
    return new Promise((resolve,reject) => {
        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = () => {
            if (request.status===200){
                resolve(request.response)
            }
            else{
                reject(new Error('Произошла ошибка код ошибки:'+request.statusText))
            }
        }
        request.onerror = (error) => {
            reject(error)
        }
        request.send();
    });
}
const embeded = (url) => {
    loadImage(url)
        .then((result)=>{
            let movieInfo = JSON.parse(result);
            console.log(movieInfo);
            movieInfo = movieInfo.Search;
            console.log(movieInfo);
         
            let allMoviesInfo = [];
            for(let i = 0,len = movieInfo.length;i<len;i++){
            let moviesInfo = [];
            let movieError = movieInfo[i].Error;
            let moviePoster = movieInfo[i].Poster;
            let movieYear = movieInfo[i].Year;
            let movieTitle = movieInfo[i].Title;
            moviesInfo.push(moviePoster,movieYear, movieTitle,movieError);
            allMoviesInfo.push(moviesInfo);
            console.log(moviesInfo); 
            console.log(allMoviesInfo);
           }  
                return allMoviesInfo;
        })
        .then(info=>{ 
            for(let i = 0,len = info.length;i<len;i++){
                if(info[i][0] === undefined){
                    alert(info[3]);
                }else{
                    let img = document.createElement('img');
                    img.src=info[i][0];
                    let pYear = document.createElement('p');
                    let pTitle = document.createElement('p');
                    pYear.innerHTML = `Год выпуска: ${info[i][1]}`;
                    pTitle.innerHTML = `Название: ${info[i][2]}`;
                    document.body.appendChild(pTitle); 
                    document.body.appendChild(img); 
                    document.body.appendChild(pYear); 
                }     
            } 
        })
        .catch(error =>{
            console.log(error);
    })
}
Promise.all([
    embeded(`http://www.omdbapi.com/?s=${inputVal}&apikey=d5677312`),
]);
});

// embeded('http://www.omdbapi.com/?t=Movie+43&apikey=d5677312');
// http://www.omdbapi.com/?t=Movie+43&apikey=d5677312
// apikey = d5677312 omdbapi.com