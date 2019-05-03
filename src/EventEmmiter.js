"use strict" 
function EventEmmiter(){
	this.eventTable={};
}    
 
 EventEmmiter.prototype.on = function(eventName,handler){//Реализация подписки на событие
    if(!this.eventTable.hasOwnProperty(eventName)){//Если ранее на событие не подписывались
    	this.eventTable[eventName]=[];
    }
    this.eventTable[eventName].push(handler);
    function unsubscribe(){//Реализация отписки от события
    	this.eventTable[eventName] = this.eventTable[eventName].filter(function(hand){
      	return hand!=handler;//Перезаписали массив
      });
    }
    return unsubscribe.bind(this);
}
    
EventEmmiter.prototype.emit = function(eventName,...params){//Реализуем генерацию события
    if(this.eventTable.hasOwnProperty(eventName)){//Если на это событие ранее подписывались
        this.eventTable[eventName].forEach(function(elem){elem(...params)})
    }
}
export default EventEmmiter