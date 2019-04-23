"use strict"
function EventEmmiter(){
	this.eventTable={};
}    
 
 EventEmmiter.prototype.on = function(eventName,handler){//Реализация подписки на событие
    if(!this.eventTable.hasOwnProperty(eventName)){//Если ранее на событие не подписывались
    	this.eventTable[eventName]=[];//Создаем массив обработчиков
    }
    this.eventTable[eventName].push(handler);//Помещаем обработчик
    function unsubscribe(){//Реализация отписки от события
    	this.eventTable[eventName] = this.eventTable[eventName].filter(function(hand){//В новом массиве этого обработчика не будет
      	return hand!=handler;//Перезаписали массив
      });
    }
    return unsubscribe.bind(this);//Возвращаем ссылку на возможность отписки c явным указанием контекста
}
    
EventEmmiter.prototype.emit = function(eventName,params){//Реализуем генерацию события
    if(this.eventTable.hasOwnProperty(eventName)){//Если на это событие ранее подписывались
        let arg = [...arguments].slice(1);
        this.eventTable[eventName].forEach(function(elem){elem.apply(null,arg)})
    }
    else{
    	document.write(`Нет подписки на событие ${eventName}`);
    }
}
    
let ev1=new EventEmmiter();
let f = ev1.on("hello",()=>console.log("Hello"));
ev1.on("hello",(a,b)=>console.log(a+b));
ev1.emit("hello",1,2);
f();
ev1.emit("hello",2,4);
