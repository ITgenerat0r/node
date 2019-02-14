alert("Подключен opr");
function opr(){
		var data=" ";
			data=document.getElementById("dr").value;
		var classA =function(d,m,y){
			this.d=d;
			this.m=m;
			this.y=y;
		};
		function Znach(){ 
			switch(c1.m){
				case 1: if(c1.d>20){return("Ваш знак зодиака - Козерог ♑");}else{return("Ваш знак зодиака - Водолей ♒");} break;
				case 2: if(c1.d>20){return("Ваш знак зодиака - Водолей ♒");}else{return("Ваш знак зодиака - Рыбы ♓");} break;
				case 3: if(c1.d>20){return("Ваш знак зодиака - Рыбы ♓");}else{return("Ваш знак зодиака - Овен ♈");} break;
				case 4: if(c1.d>20){return("Ваш знак зодиака - Овен ♈");}else{return("Ваш знак зодиака - Телец ♉");} break;
				case 5: if(c1.d>20){return("Ваш знак зодиака - Телец ♉");}else{return("Ваш знак зодиака - Близнецы ♊");} break;
				case 6: if(c1.d>21){return("Ваш знак зодиака - Близнецы ♊");}else{return("Ваш знак зодиака - Рак ♋");} break;
				case 7: if(c1.d>22){return("Ваш знак зодиака - Рак ♋");}else{return("Ваш знак зодиака - Лев ♌");} break;
				case 8: if(c1.d>23){return("Ваш знак зодиака - Лев ♌");}else{return("Ваш знак зодиака - Дева ♍");} break;
				case 9: if(c1.d>23){return("Ваш знак зодиака - Дева ♍");}else{return("Ваш знак зодиака - Весы ♎");} break;
				case 10: if(c1.d>23){return("Ваш знак зодиака - Весы ♎");}else{return("Ваш знак зодиака - Скорпион ♏");} break;
				case 11: if(c1.d>22){return("Ваш знак зодиака - Скорпион ♏");}else{return("Ваш знак зодиака - Стрелец ♐");} break;
				case 12: if(c1.d>21){return("Ваш знак зодиака - Стрелец ♐");}else{return("Ваш знак зодиака - Козерог ♑");} break;

			}
		}

		var c1 = new classA(-1,-1,-1);
		var num=0;
					for(var i=0;i<data.length;i++){
			if((data[i].charCodeAt().toString(16)>29)||(data[i].charCodeAt().toString(16)<40)){
				if(num==0){num=(data[i]*1);}else{num*=10; num+=data[i]*1;}
			}else{
				if(c1.d==-1){c1.d=num;}else{
					if(c1.m==-1){c1.m=num;}else{c1.y=num;}
				}
				num=0;
			}
		}
		
if(num!=0){c1.y=num;}
		if((c1.m>=0)&&(c1.m<13)&&(c1.y>0)&&(c1.y<10000)){ 
		switch(c1.m){
			case 1: case 3: case 5: case 7: case 8: case 10: case 12: if((c1.d<1)||(c1.d>31)){return("Введена неправильная дата!");}else{Znach();} break;
			case 4: case 6: case 9: case 11: if((c1.d<1)||(c1.d>30)){return("Введена неправильная дата!"); }else{Znach();} break;
			case 2: if(c1.y%4==0){if((c1.d<1)||(c1.d>30)){return("Введена неправильная дата!");}else{Znach();} break; }else{
				if((c1.d<1)||(c1.d>29)){return("Введена неправильная дата!");}else{Znach();} break; 
			}
		}
		}else{return("Допущена ошибка при вводе даты!");}


		//return(c1.d+"."+c1.m+"."+c1.y);
	}


export default opr