/*Напишите класс Group с 5ю полями, описывающими ПОКС31, 
причём все в разных типах данных, создайте конструктор и методы позволяющие устанавливать значения для каждого поля, 
но если тип данных не соответствует при установке значения, выводить сообщение и не применять его.
*/
class Group {
	constructor(quantity,smart,character,wsr,late){
		this.quantity = quantity;
		this.smart = smart;
		this.character = character;
		this.wsr = wsr;
		this.late = late;
	}
	get review(){
		console.log(`В группе ПОКС-31 ${this.quantity} человек ,они умны? ${this.smart}, их характер ${this.character}, количество студентов которые ходят на wsr ${this.wsr}, много ли людей опаздывает?${this.late}.`)
	}
	set quan(value){
		if((typeof(value)) === "number"){
			this.quantity = value;
		}else{
			console.log('неверный тип данных');
		}
	}
	set sm(value){
		if(typeof(value) === "boolean"){
			if(value === true){
				value = "Да";	
				this.smart  = value;
			}
			if(value === false){
				value = "Нет";	
				this.smart  = value;
			}
		
		}else{
			console.log('неверный тип данных');
		}
	}
	set char(value){
		if((typeof(value)) === "string"){
			this.character = value;
		}else{
			console.log('неверный тип данных');
		}
	}
	set extra(value){
		if((typeof(value)) === "number"){
			this.wsr = value;
		}else{
			console.log('неверный тип данных');
		}
	}
	set miss(value){
		if(typeof(value) === "boolean"){
			if(value === true){
				value = "Да";	
				this.late  = value;
			}
			if(value === false){
				value = "Нет";	
				this.late  = value;
			}
		}else{
			console.log('неверный тип данных');
		}
	}




	}

let poks31 = new Group();
	poks31.quan = 29;
	poks31.sm = true;
	poks31.char = "Рофельный";
	poks31.extra = 6 ;
	poks31.miss = false;
	poks31.review;