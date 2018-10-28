/*написать функцию которая принимает массив и строку и возвращает ассоциативный массив в котором ключ элемент массива а количество вхождений в строку - значение*/

let arr = ['Ivan','Petya','Rofl','Oleg',"Misha"];

let str = "asfasfasIvanRofl";
function searchString(arr,str){
	let count = 0;
	let obj = {};
	for(let i = 0;i<arr.length;i++){
	let count = (str.split(arr[i]).length-1);
		 	obj[arr[i]] = count;		
	}
	console.log(obj);
}	
searchString(arr,str);
